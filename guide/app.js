const items=[
  {category:'Urgent',title:'UK Emergency Alerts',summary:'Check genuine government warnings and advice for life-threatening emergencies.',source:'GOV.UK',url:'https://www.gov.uk/alerts',tags:['UK-wide','Live source'],keywords:'danger flood storm wildfire emergency warning'},
  {category:'Urgent',title:'Met Office weather warnings',summary:'View current yellow, amber and red severe-weather warnings across the UK.',source:'Met Office',url:'https://weather.metoffice.gov.uk/warnings-and-advice/uk-warnings',tags:['UK-wide','Live source'],keywords:'weather rain wind snow heat alert travel'},
  {category:'Urgent',title:'Flood warnings for England',summary:'Check current flood alerts and warnings by location.',source:'GOV.UK',url:'https://check-for-flooding.service.gov.uk/alerts-and-warnings',tags:['England','Live source'],keywords:'river flooding water weather'},
  {category:'Immigration',title:'Latest UK Immigration Rules',summary:'Read the current rules and official statements of changes published by the Home Office.',source:'GOV.UK · Home Office',url:'https://www.gov.uk/guidance/immigration-rules',tags:['UK-wide','Official rules'],keywords:'UKVI visa ILR settlement family route citizenship indefinite leave remain changes'},
  {category:'Immigration',title:'Access and use your eVisa',summary:'Official guidance for accessing your UKVI account, updating details and proving immigration status.',source:'GOV.UK · UKVI',url:'https://www.gov.uk/evisa',tags:['UK-wide','Official guidance'],keywords:'UKVI account share code BRP immigration status right to work'},
  {category:'Immigration',title:'Find a regulated immigration adviser',summary:'Search for an adviser regulated by the Immigration Advice Authority before getting personal advice.',source:'GOV.UK',url:'https://www.gov.uk/find-an-immigration-adviser',tags:['UK-wide','Regulated support'],keywords:'IAA OISC lawyer solicitor legal advice free help visa'},
  {category:'Immigration',title:'Register of licensed visa sponsors',summary:'Check whether a UK employer is officially licensed to sponsor workers.',source:'GOV.UK · Home Office',url:'https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers',tags:['UK-wide','Official register'],keywords:'sponsorship skilled worker job employer visa sponsor'},
  {category:'Nigeria',title:'Nigerian passport issuance and renewal',summary:'Check official passport requirements and consular information for Nigerians in the UK.',source:'Nigeria High Commission, London',url:'https://london.foreignaffairs.gov.ng/issuance-renewal/',tags:['Nigerians in the UK','Official consular source'],keywords:'Nigeria Nigerian passport renewal appointment NIN embassy consulate London'},
  {category:'Nigeria',title:'Nigeria High Commission citizen services',summary:'Find official consular services, announcements and help for Nigerian citizens in the UK.',source:'Nigeria High Commission, London',url:'https://london.foreignaffairs.gov.ng/',tags:['Nigerians in the UK','Official consular source'],keywords:'Nigeria Nigerian helpdesk emergency travel certificate visa community'},
  {category:'Opportunity',title:'Find a job',summary:'Search current vacancies using the UK government’s official job-search service.',source:'GOV.UK',url:'https://www.gov.uk/find-a-job',tags:['UK-wide','Live vacancies'],keywords:'work employment vacancy career remote job'},
  {category:'Opportunity',title:'Find an apprenticeship',summary:'Search and apply for current apprenticeships in England.',source:'GOV.UK',url:'https://www.gov.uk/apply-apprenticeship',tags:['England','Live opportunities'],keywords:'training paid work career young people adult'},
  {category:'Opportunity',title:'Free Skills Bootcamps',summary:'Explore government-backed courses designed to help adults build job-ready skills.',source:'Skills for Careers · DfE',url:'https://www.skillsforcareers.education.gov.uk/pages/training-choice/skills-bootcamp',tags:['England','Eligibility applies'],keywords:'free course IT cloud cyber digital driving construction training'},
  {category:'Education',title:'Search postgraduate funding',summary:'Find official information about scholarships, studentships, bursaries and grants.',source:'GOV.UK',url:'https://www.gov.uk/funding-for-postgraduate-study',tags:['UK study','Check eligibility'],keywords:'university masters scholarship bursary grant funding education'},
  {category:'Education',title:'Student finance eligibility',summary:'Check the current residence, course and personal eligibility rules before applying.',source:'GOV.UK',url:'https://www.gov.uk/student-finance/who-qualifies',tags:['England','Status rules apply'],keywords:'university college tuition maintenance loan immigration residency NRPF'},
  {category:'Support',title:'Check benefits and financial support',summary:'Use official guidance and calculators to identify support you may be entitled to.',source:'GOV.UK',url:'https://www.gov.uk/benefits-calculators',tags:['UK-wide','Eligibility applies'],keywords:'free money cost of living family childcare housing benefit support'},
  {category:'Support',title:'Healthy Start support',summary:'Check eligibility for help buying healthy food and milk during pregnancy or for young children.',source:'NHS',url:'https://www.healthystart.nhs.uk/how-to-apply/',tags:['England, Wales & NI','Eligibility applies'],keywords:'family baby child pregnancy food vitamins free support'},
  {category:'Support',title:'Find your local council',summary:'Go directly to your council for local grants, housing, family services and community support.',source:'GOV.UK',url:'https://www.gov.uk/find-local-council',tags:['UK-wide','Local information'],keywords:'Bristol council housing grant childcare community free local help'},
  {category:'Support',title:'Report fraud and cybercrime',summary:'Get official help if you encounter a suspicious opportunity, payment request or online scam.',source:'Report Fraud',url:'https://www.reportfraud.police.uk/',tags:['England, Wales & NI','Official service'],keywords:'scam fraud phishing immigration job scholarship money'}
];

const grid=document.getElementById('cardGrid');
const input=document.getElementById('searchInput');
const count=document.getElementById('resultCount');
const empty=document.getElementById('emptyState');
let category='All';

function safe(value){return String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function render(){
  const query=input.value.trim().toLowerCase();
  const filtered=items.filter(item=>{
    const categoryMatch=category==='All'||item.category===category;
    const haystack=[item.title,item.summary,item.source,item.category,item.keywords,...item.tags].join(' ').toLowerCase();
    return categoryMatch&&(!query||query.split(/\s+/).every(word=>haystack.includes(word)));
  });
  grid.innerHTML=filtered.map(item=>`<article class="info-card"><div class="card-meta"><span class="category">${safe(item.category)}</span><span class="source-badge">✓ ${safe(item.source)}</span></div><h3>${safe(item.title)}</h3><p>${safe(item.summary)}</p><div class="details">${item.tags.map(tag=>`<span>${safe(tag)}</span>`).join('')}</div><div class="card-actions"><a class="visit" href="${safe(item.url)}" target="_blank" rel="noopener">Check official source ↗</a><button class="share" data-title="${safe(item.title)}" data-url="${safe(item.url)}">Share</button></div></article>`).join('');
  count.textContent=`${filtered.length} trusted ${filtered.length===1?'result':'results'}`;
  empty.hidden=filtered.length!==0;
  grid.hidden=filtered.length===0;
}

document.getElementById('searchForm').addEventListener('submit',event=>{event.preventDefault();render();document.getElementById('results').scrollIntoView({behavior:'smooth'});});
input.addEventListener('input',render);
document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));button.classList.add('active');category=button.dataset.category;render();}));
document.querySelectorAll('.quick-searches button').forEach(button=>button.addEventListener('click',()=>{input.value=button.dataset.query;category='All';document.querySelectorAll('.filters button').forEach(b=>b.classList.toggle('active',b.dataset.category==='All'));render();document.getElementById('results').scrollIntoView({behavior:'smooth'});}));
document.getElementById('clearSearch').addEventListener('click',()=>{input.value='';category='All';document.querySelectorAll('.filters button').forEach(b=>b.classList.toggle('active',b.dataset.category==='All'));render();input.focus();});
grid.addEventListener('click',async event=>{const button=event.target.closest('.share');if(!button)return;const data={title:button.dataset.title,text:`${button.dataset.title} — verified source via ObanimiGuide`,url:button.dataset.url};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(`${data.text}\n${data.url}`);button.textContent='Link copied';setTimeout(()=>button.textContent='Share',1600);}}catch(error){if(error.name!=='AbortError')button.textContent='Open source to share';}});
document.getElementById('year').textContent=new Date().getFullYear();

let installPrompt;
const installButton=document.getElementById('installButton');
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;installButton.hidden=false;});
installButton.addEventListener('click',async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;installButton.hidden=true;});
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js'));
render();
