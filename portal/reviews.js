// Private downloads use the current user's JWT on every request, never public/signed URLs.
export function createReviewFiles(db, { notice }) {
  const bucket = 'obanimistudio-portal-reviews', urls = new Set();
  const types = { 'application/pdf':'pdf', 'image/png':'png', 'image/jpeg':'jpg', 'image/webp':'webp' };
  const node = (tag,text) => { const el=document.createElement(tag); if(text)el.textContent=text;return el; };
  return {
    clear() { for(const url of urls)URL.revokeObjectURL(url);urls.clear(); },
    async render(parent, project, isAdmin, current, refresh) {
      const section=node('section');section.className='review-files';
      section.append(node('h4',`Private review files · Version ${project.revision}`));
      const prefix=`${project.id}/${project.revision}`;
      const storage=db.storage.from(bucket);
      let result;
      try { result=await storage.list(prefix,{limit:50,sortBy:{column:'created_at',order:'desc'}}); }
      catch { result={error:true}; }
      if(!current())return;
      if(result.error)section.append(node('p','Private review files could not be loaded.'));
      else {
        const files=(result.data||[]).filter(f=>/^[0-9a-f-]{36}\.(pdf|png|jpg|webp)$/.test(f.name));
        if(!files.length)section.append(node('p','No private review files for this version yet.'));
        for(const file of files){
          const button=node('button',`Download review (${file.name.split('.').pop().toUpperCase()})`);button.type='button';
          button.addEventListener('click',async()=>{
            button.disabled=true;
            try {
              const downloaded=await storage.download(`${prefix}/${file.name}`);
              if(!current())return;
              if(downloaded.error || !downloaded.data)throw new Error('Download denied');
              const url=URL.createObjectURL(downloaded.data);urls.add(url);
              const link=node('a');link.href=url;link.download=`review-v${project.revision}-${file.name}`;
              document.body.append(link);link.click();link.remove();
            } catch { if(current())notice('Review download unavailable. Your access may have changed; refresh and try again.'); }
            finally { button.disabled=false; }
          });section.append(button);
        }
      }
      if(isAdmin){
        const form=node('form'),label=node('label', 'Upload a private review file'),input=node('input');
        input.type='file';input.accept=Object.keys(types).join(',');input.required=true;label.append(input);
        const button=node('button','Upload review');form.append(label,button);
        form.append(node('p','PDF, PNG, JPEG or WebP, up to 10 MB. Files stay attached to this version and cannot be overwritten. The first client decision closes uploads for that version. Edit the project to start a new version.'));
        form.addEventListener('submit',async e=>{
          e.preventDefault();const file=input.files[0];if(!file)return;
          const ext=types[file.type];
          if(!ext || file.size===0 || file.size>10485760){notice('Choose a PDF or supported image between 1 byte and 10 MB.');return;}
          button.disabled=true;
          try{
            const uploaded=await storage.upload(`${prefix}/${crypto.randomUUID()}.${ext}`,file,{contentType:file.type,upsert:false,cacheControl:'0'});
            if(!current())return;
            if(uploaded.error)throw new Error('Upload denied');
            notice('Private review uploaded.');await refresh();
          }catch{if(current())notice('Review upload was not confirmed. Refresh before retrying; your access or project version may have changed.');}
          finally{button.disabled=false;}
        });section.append(form);
      }
      section.append(node('p','Downloads require current project access. A file already downloaded to a device cannot be recalled.'));
      parent.append(section);
    }
  };
}
