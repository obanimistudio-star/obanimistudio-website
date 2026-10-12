// All authorization is enforced by Postgres RLS, never by browser role checks alone.
const cfg=window.OBANIMI_PORTAL_CONFIG||{};
const $=id=>document.getElementById(id);
const notice=message=>$('notice').textContent=message;
const node=(tag,value)=>{const e=document.createElement(tag);if(value!==undefined)e.textContent=String(value);return e};
if(!/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/.test(cfg.url||'')||!/^sb_publishable_[A-Za-z0-9_-]+$/.test(cfg.publishableKey||'')){
 notice('Setup pending. No client information is available.');
}else{
 // The library is loaded only when the owner configures the public project URL and publishable key.
 import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.10/+esm').then(({createClient})=>{
 const db=createClient(cfg.url,cfg.publishableKey,{auth:{flowType:'pkce',detectSessionInUrl:true,persistSession:true}});
 let user=null;
 async function refresh(){
  const response=await db.auth.getUser();user=response.data.user;
  $('login').hidden=!!user;$('dashboard').hidden=!user;$('logout').hidden=!user;
  $('projects').replaceChildren();
  if(!user){notice('Sign in using your invited email address.');return}
  const member=await db.from('portal_members').select('role,display_name').eq('user_id',user.id).maybeSingle();
  if(member.error||!member.data){$('dashboard').hidden=true;notice('This account is not authorised. Contact ObanimiStudio.');return}
  const isAdmin=member.data.role==='admin';
  $('heading').textContent=isAdmin?'Administrator · Project management':'Your projects';
  const result=await db.from('client_projects').select('id,title,summary,status,progress,preview_url,updated_at').order('updated_at',{ascending:false});
  if(result.error){notice('Unable to load projects.');return}
  notice(result.data.length?'Projects loaded.':'No projects assigned yet.');
  for(const project of result.data){
   const card=node('article');card.className='card';
   card.append(node('h3',project.title),node('p',project.summary),node('p',project.status.replaceAll('_',' ')+' · '+project.progress+'%'));
   const progress=node('progress');progress.max=100;progress.value=project.progress;card.append(progress);
   if(project.preview_url){try{const url=new URL(project.preview_url);if(url.protocol==='https:'){const a=node('a','Open project preview ↗');a.href=url.href;a.target='_blank';a.rel='noopener noreferrer';card.append(a)}}catch{}}
   const history=node('div');history.className='activity';card.append(node('h4','Feedback and decisions'),history);
   const [feedback,decisions]=await Promise.all([db.from('project_feedback').select('message,created_at').eq('project_id',project.id).order('created_at',{ascending:false}).limit(20),db.from('project_approvals').select('decision,note,created_at').eq('project_id',project.id).order('created_at',{ascending:false}).limit(20)]);
   if(feedback.error||decisions.error){history.append(node('p','Activity could not be loaded.'))}
   else {for(const item of feedback.data)history.append(node('p','Feedback · '+item.message));for(const item of decisions.data)history.append(node('p','Decision · '+item.decision+' · '+item.note))}
   const form=node('form'),input=node('textarea'),send=node('button','Send feedback');input.required=true;input.maxLength=3000;input.setAttribute('aria-label','Feedback for '+project.title);form.append(input,send);
   form.addEventListener('submit',async e=>{e.preventDefault();const message=input.value.trim();if(!message)return;send.disabled=true;const result=await db.from('project_feedback').insert({project_id:project.id,author_id:user.id,message});send.disabled=false;notice(result.error?'Feedback was not saved.':'Feedback saved.');if(!result.error)await refresh()});
   card.append(form);
   if(project.status==='review'&&!isAdmin){for(const [decision,label] of [['approved','Approve project'],['changes_requested','Request changes']]){const b=node('button',label);b.type='button';b.addEventListener('click',async()=>{const note=window.prompt(decision==='approved'?'Approval note (optional)':'Describe the changes requested');if(note===null||note.length>3000||(decision==='changes_requested'&&!note.trim()))return;b.disabled=true;const result=await db.from('project_approvals').insert({project_id:project.id,author_id:user.id,decision,note:note.trim()});b.disabled=false;notice(result.error?'Decision could not be saved.':'Decision recorded.');if(!result.error)await refresh()});card.append(b)}}
   if(isAdmin){const editor=node('form'),title=node('input'),summary=node('textarea'),status=node('select'),percent=node('input');title.value=project.title;title.required=true;title.maxLength=160;title.setAttribute('aria-label','Project title');summary.value=project.summary;summary.setAttribute('aria-label','Project summary');for(const value of ['planning','in_progress','review','completed','on_hold']){const option=node('option',value.replaceAll('_',' '));option.value=value;status.append(option)}status.value=project.status;status.setAttribute('aria-label','Project status');percent.type='number';percent.min=0;percent.max=100;percent.value=project.progress;percent.setAttribute('aria-label','Progress percentage');editor.append(node('h4','Manage project'),title,summary,status,percent,node('button','Save project'));editor.addEventListener('submit',async e=>{e.preventDefault();const result=await db.from('client_projects').update({title:title.value.trim(),summary:summary.value,status:status.value,progress:Number(percent.value),updated_at:new Date().toISOString()}).eq('id',project.id);notice(result.error?'Project update failed.':'Project updated.');if(!result.error)await refresh()});card.append(editor)}
   $('projects').append(card);
  }
 }
 $('login-form').addEventListener('submit',async e=>{e.preventDefault();const email=$('email').value.trim(),button=e.currentTarget.querySelector('button');button.disabled=true;const result=await db.auth.signInWithOtp({email,options:{shouldCreateUser:false,emailRedirectTo:location.origin+location.pathname}});button.disabled=false;notice(result.error?'Sign-in link could not be sent.':'If invited, check your email for a sign-in link.')});
 $('logout').addEventListener('click',async()=>{await db.auth.signOut();await refresh()});
 db.auth.onAuthStateChange(()=>{setTimeout(()=>refresh().catch(()=>notice('Unable to refresh session.')),0)});
 refresh().catch(()=>notice('Portal unavailable.'));
 }).catch(()=>notice('Portal dependency unavailable. Please contact ObanimiStudio.'));
}
