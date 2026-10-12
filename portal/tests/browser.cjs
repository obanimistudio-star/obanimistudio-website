// Mocked browser check; no network calls to Supabase or external services.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const http = require('node:http'), fs = require('node:fs'), path = require('node:path');
(async () => {
 const root=path.resolve(__dirname,'../..');
 const server=http.createServer((req,res)=>{let file=path.resolve(root,'.'+new URL(req.url,'http://localhost').pathname);if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}if(new URL(req.url,'http://localhost').pathname.endsWith('/'))file=path.join(file,'index.html');res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html');fs.readFile(file,(err,data)=>{res.statusCode=err?404:200;res.end(err?'Missing':data);});});
 await new Promise(resolve=>server.listen(8765,'127.0.0.1',resolve));
 const browser=await chromium.launch({headless:true, executablePath:process.env.PORTAL_CHROMIUM_PATH, args:process.env.PORTAL_CHROMIUM_PATH ? ['--no-sandbox'] : []}); const page=await browser.newPage();
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 let external=0;page.on('request',r=>{if(!r.url().startsWith('http://127.0.0.1:8765'))external++;});
 await page.goto('http://127.0.0.1:8765/portal/');
 await page.waitForFunction(()=>document.getElementById('notice').textContent.includes('Setup pending'));
 assert.equal(await page.locator('#dashboard').isVisible(),false);assert.equal(external,0);
 await page.route('**/portal/config.js',route=>route.fulfill({contentType:'text/javascript',body:`window.OBANIMI_PORTAL_CONFIG={url:'https://test-project.supabase.co',publishableKey:'sb_publishable_testonly',redirectUrl:'https://obanimistudio.com/portal/'};`}));
 let mockRole='admin';
 await page.route('**/portal/vendor/supabase.js',route=>route.fulfill({contentType:'text/javascript',body:`
 export function createClient(){
 const tables={portal_members:[{user_id:'00000000-0000-0000-0000-000000000001',role:'${mockRole}',display_name:'Admin'},{user_id:'00000000-0000-0000-0000-000000000002',role:'client',display_name:'Test client'}],client_projects:[{id:'10000000-0000-0000-0000-000000000001',title:'<img src=x onerror=alert(1)>',summary:'Private sample',status:'review',progress:50,revision:1,preview_url:'javascript:alert(1)'}],project_members:[],project_feedback:[],project_approvals:[]};
 window.mockWrites=[];let signedIn=true;
 return {auth:{getUser:async()=>({data:{user:signedIn?{id:'00000000-0000-0000-0000-000000000001'}:null}}),onAuthStateChange:()=>{},signOut:async()=>{signedIn=false;return {}},signInWithOtp:async()=>({})},from(table){
 let data=tables[table],op='select'; const q={select(){return q},eq(k,v){data=data.filter(r=>r[k]===v);return q},order(){return q},limit(){return q},maybeSingle:async()=>({data:data[0]}),single:async()=>({data:data[0]}),insert(v){op='insert';window.mockWrites.push({table,op,values:v});return q},update(v){op='update';window.mockWrites.push({table,op,values:v});return q},delete(){op='delete';window.mockWrites.push({table,op});return q},then(resolve){if(window.mockSlow&&table==='project_feedback')setTimeout(()=>resolve({data}),300);else resolve({data})}};return q;}};}
 `}));
 await page.reload();await page.waitForSelector('#projects article');
 assert.equal(await page.locator('#projects img').count(),0);assert.equal(await page.locator('#projects a').count(),0);
 await page.locator('#admin summary').first().click();
 const create=page.locator('#admin form').first();await create.getByLabel('Project title').fill('New project');await create.getByRole('button',{name:'Create project'}).click();
 await page.waitForFunction(()=>window.mockWrites.some(w=>w.table==='client_projects'&&w.op==='insert'));
 await page.waitForSelector('#projects article');await page.locator('#projects summary').click();
 page.once('dialog',d=>d.accept());await page.getByRole('button',{name:'Grant access'}).click();
 await page.waitForFunction(()=>window.mockWrites.some(w=>w.table==='project_members'&&w.op==='insert'));
 await page.getByRole('button',{name:'Sign out'}).click();await page.waitForSelector('#login',{state:'visible'});
 assert.equal(await page.locator('#projects article').count(),0);assert.equal(await page.locator('#admin').textContent(),'');
 mockRole='client';await page.reload();await page.waitForSelector('#projects article');
 assert.equal(await page.locator('#admin').textContent(),'');
 page.once('dialog',d=>d.accept('Approved'));await page.getByRole('button',{name:'Approve this version'}).click();
 await page.waitForFunction(()=>window.mockWrites.some(w=>w.table==='project_approvals'&&w.values.revision===1));
 await page.waitForSelector('#projects article');await page.evaluate(()=>window.mockSlow=true);
 const feedback=page.locator('#projects form').first();await feedback.getByLabel('Feedback').fill('Test feedback');await feedback.getByRole('button').click();
 await page.waitForFunction(()=>window.mockWrites.some(w=>w.table==='project_feedback'));
 await page.getByRole('button',{name:'Sign out'}).click();await page.waitForSelector('#login',{state:'visible'});
 await page.waitForTimeout(400);assert.equal(await page.locator('#projects article').count(),0);
 assert.deepEqual(errors,[]);assert.equal(external,0);
 await browser.close();await new Promise(resolve=>server.close(resolve));console.log('Browser checks passed: setup gate, no external requests, safe text/links, project creation, client assignment, client version approval and stale-read clearing after sign-out.');
})().catch(e=>{console.error(e);process.exit(1)});
