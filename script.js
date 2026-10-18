const menuButton=document.querySelector('.menu-button');const nav=document.querySelector('.nav');if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));}const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();

const appearanceSelect=document.getElementById('appearance-theme');if(appearanceSelect){const available=['dark','bright','cool'];const current=document.documentElement.dataset.theme;appearanceSelect.value=available.includes(current)?current:'dark';appearanceSelect.addEventListener('change',()=>{const theme=appearanceSelect.value;if(!available.includes(theme))return;document.documentElement.dataset.theme=theme;try{localStorage.setItem('obanimistudio-theme',theme)}catch(e){}const meta=document.getElementById('browser-theme-color');if(meta)meta.content=theme==='bright'?'#f7f3e9':theme==='cool'?'#081824':'#090909';});}

/* Scroll reveal: progressive enhancement with accessible reduced-motion fallback. */
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){const items=document.querySelectorAll('.section-heading,.project-card,.service-card,.process-grid li');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('awaiting-reveal');entry.target.classList.add('is-visible');observer.unobserve(entry.target);}})},{threshold:.08,rootMargin:'0px 0px 45px 0px'});items.forEach(el=>{const box=el.getBoundingClientRect();if(box.top<window.innerHeight+40){el.classList.add('is-visible')}else{el.classList.add('awaiting-reveal');observer.observe(el)}});document.documentElement.classList.add('motion-ready');}

// Prepare an enquiry locally; sending always happens in the visitor's email app.
const enquiryForm = document.getElementById('project-enquiry');
function buildProjectEnquiry() {
  const type = document.getElementById('enquiry-type').value;
  const budget = document.getElementById('enquiry-budget').value;
  const launch = document.getElementById('enquiry-launch').value;
  const details = document.getElementById('enquiry-details').value.trim();
  return {subject: 'Project enquiry: ' + type, body: ['Project type: ' + type, 'Budget: ' + budget, 'Preferred launch: ' + launch, '', 'Project details:', details].join('\n')};
}
if (enquiryForm) {
  const status = document.getElementById('enquiry-status');
  enquiryForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;
    const enquiry = buildProjectEnquiry();
    window.location.href = 'mailto:obanimistudio@gmail.com?subject=' + encodeURIComponent(enquiry.subject) + '&body=' + encodeURIComponent(enquiry.body);
    status.textContent = 'Continue in your email app and press Send. If it does not open, use Copy enquiry instead and email obanimistudio@gmail.com.';
  });
  document.getElementById('copy-enquiry').addEventListener('click', async () => {
    if (!enquiryForm.reportValidity()) return;
    const enquiry = buildProjectEnquiry();
    try {
      await navigator.clipboard.writeText(enquiry.subject + '\n\n' + enquiry.body);
      status.textContent = 'Copied. Paste your enquiry into an email to obanimistudio@gmail.com and press Send.';
    } catch (error) {
      status.textContent = 'Copy is unavailable in this browser. You can select your project details and email them to obanimistudio@gmail.com.';
    }
  });
}
