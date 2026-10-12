/* ObanimiStudio client portal. Access is enforced by Supabase RLS, not this UI. */
(()=>{'use strict';
const $=id=>document.getElementById(id),status=$('portal-status'),login=$('login-area'),dash=$('dashboard'),list=$('projects'),logout=$('logout');
const cfg=window.OBANIMI_PORTAL_CONFIG||{};
if(!cfg.supabaseUrl||!cfg.supabasePublishableKey){status.textContent='Setup pending: secure portal connection requires owner approval.';return;}
if(!/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(cfg.supabaseUrl)||!window.supabase?.createClient){status.textContent='Portal configuration is unavailable. Contact ObanimiStudio.';return;}
const client=window.supabase.createClient(cfg.supabaseUrl,cfg.supabasePublishableKey,{auth:{flowType:'pkce',detectSessionInUrl:true,autoRefreshToken:true,persistSession:true}});
let currentUser=null;
function el(tag,text,className){const n=document.createElement(tag);if(text!==undefined)n.textContent=String(text);if(className)n.className=className;return n}
function field(parent,label,type='text',max=3000){const l=el('label',label),input=document.createElement(type==='textarea'?'textarea':'input');if(type!=='textarea')input.type=type;input.maxLength=max;input.required=true;l.append(input);parent.append(l);return input}
function button(text,handler,secondary=false){const b=el('button',text,secondary?'secondary':'');b.type='button';b.addEventListener('click',handler);return b}
function notice(msg){status.textContent=msg}
async function load(){const {data:{user},error}=await client.auth.getUser();if(error||!user){currentUser=null;login.hidden=false;dash.hidden=true;logout.hidden=true;notice('Sign in with your invited email address.');return}
currentUser=user;login.hidden=true;dash.hidden=false;logout.hidden=false;notice('Signed in securely.');await showProjects();}
async function showProjects(){list.replaceChildren();const {data:profile,error:profileError}=await client.from('portal_members').select('role,display_name').eq('user_id',currentUser.id).maybeSingle();if(profileError||!profile){dash.hidden=true;notice('Your account is not yet authorised for this portal. Contact ObanimiStudio.');return}
$('welcome').textContent=profile.role==='admin'?'Client projects':'Your projects';$('role').textContent=profile.role==='admin'?'Administrator':'Client';
const {data:projects,error}=await client.from('client_projects').select('id,title,summary,status,progress,preview_url,updated_at').order('updated_at',{ascending:false});
if(error){notice('Unable to load projects. Please try again.');return}if(!projects?.length){list.append(el('p','No projects have been assigned yet.'));return}
for(const p of projects){const card=el('article',undefined,'portal-card');card.append(el('h3',p.title),el('p',p.summary),el('p','Status: '+p.status.replaceAll('_',' ')+' · '+p.progress+'% complete','meta'));const bar=el('div',undefined,'progress'),fill=el('span');fill.style.width=p.progress+'%';bar.append(fill);card.append(bar);
if(p.preview_url){try{const url=new URL(p.preview_url);if(url.protocol==='https:'){const link=el('a','Open project preview ↗');link.href=url.href;link.target='_blank';link.rel='noopener noreferrer';card.append(link)}}catch{}}
const feedback=el('div');card.append(el('h4','Project feedback'),feedback);const {data:notes,error:notesError}=await client.from('project_feedback').select('message,created_at').eq('project_id',p.id).order('created_at',{ascending:false}).limit(20);if(notesError)feedback.append(el('p','Feedback unavailable.'));else for(const n of notes||[]){const item=el('p',n.message,'feedback');feedback.append(item)}
const form=el('form');const input=field(form,'Add feedback','textarea',3000);const send=el('button','Send feedback');send.type='submit';form.append(send);form.addEventListener('submit',async e=>{e.preventDefault();if(!form.reportValidity())return;send.disabled=true;const {error:err}=await client.from('project_feedback').insert({project_id:p.id,author_id:currentUser.id,message:input.value.trim()});send.disabled=false;if(err)notice('Feedback could not be sent.');else{notice('Feedback saved.');await showProjects()}});card.append(form);
if(p.status==='review'&&profile.role==='client'){const box=el('div',undefined,'approval-buttons');for(const [label,decision] of [['Approve this stage','approved'],['Request changes','changes_requested']])box.append(button(label,async()=>{const note=prompt(decision==='approved'?'Optional approval note:':'Describe the changes you need:');if(note===null)return;if(decision==='changes_requested'&&!note.trim()){notice('Please describe the changes requested.');return}if(note.length>3000){notice('Note is too long.');return}const {error:err}=await client.from('project_approvals').insert({project_id:p.id,client_id:currentUser.id,decision,note:note.trim()});notice(err?'Unable to record your decision.':'Your decision was recorded.');},decision==='changes_requested'));card.append(el('h4','Review decision'),box)}
list.append(card)}
}
$('login-form').addEventListener('submit',async e=>{e.preventDefault();const email=$('email').value.trim();if(!email)return;const btn=e.target.querySelector('button');btn.disabled=true;const {error}=await client.auth.signInWithOtp({email,options:{emailRedirectTo:location.origin+location.pathname,shouldCreateUser:false}});btn.disabled=false;notice(error?'Could not send sign-in link. Please contact ObanimiStudio.':'If your email is invited, check your inbox for a secure sign-in link.');});
logout.addEventListener('click',async()=>{await client.auth.signOut();await load()});
client.auth.onAuthStateChange(()=>{setTimeout(load,0)});
load().catch(()=>notice('Unable to load portal. Please try again later.'));
})();
