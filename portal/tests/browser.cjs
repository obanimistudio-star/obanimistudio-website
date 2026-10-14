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
 await page.route('**/portal/config.js',route=>route.fulfill({contentType:'text/javascript',body:'window.OBANIMI_PORTAL_CONFIG={};'}));
 await page.goto('http://127.0.0.1:8765/portal/');
 await page.waitForFunction(()=>document.getElementById('notice').textContent.includes('Setup pending'));
 assert.equal(await page.locator('#dashboard').isVisible(),false);assert.equal(external,0);
 await page.route('**/portal/config.js',route=>route.fulfill({contentType:'text/javascript',body:`window.OBANIMI_PORTAL_CONFIG={url:'https://test-project.supabase.co',publishableKey:'sb_publishable_testonly',redirectUrl:'https://obanimistudio.com/portal/'};`}));
 let mockRole='admin', mockAal='aal2', mockFactors=true;
 await page.route('**/portal/vendor/supabase.js',route=>route.fulfill({contentType:'text/javascript',body:`
 export function createClient(){
 const tables={portal_members:[{user_id:'00000000-0000-0000-0000-000000000001',role:'${mockRole}',display_name:'Admin'},{user_id:'00000000-0000-0000-0000-000000000002',role:'client',display_name:'Test client'}],client_projects:[{id:'10000000-0000-0000-0000-000000000001',title:'<img src=x onerror=alert(1)>',summary:'Private sample',status:'review',progress:50,revision:1,preview_url:'javascript:alert(1)'}],project_members:[],project_feedback:[],project_approvals:[]};
 window.mockWrites=[];window.projectReads=0;let signedIn=true, aal='${mockAal}', hasFactor=${mockFactors};
 return {auth:{mfa:{getAuthenticatorAssuranceLevel:async()=>({data:{currentLevel:aal}}),listFactors:async()=>({data:{totp:hasFactor?[{id:'factor-test',status:'verified',friendly_name:'Test factor'}]:[]}}),enroll:async()=>({data:{id:'factor-test',totp:{qr_code:'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"/%3E',secret:'TEST-ONLY-SECRET'}}}),challengeAndVerify:async({code})=>{if(code!=='123456')return {error:{message:'Invalid'}};aal='aal2';hasFactor=true;return {data:{}};}},getUser:async()=>({data:{user:signedIn?{id:'00000000-0000-0000-0000-000000000001'}:null}}),onAuthStateChange:callback=>{window.expireSession=()=>{signedIn=false;callback('SIGNED_OUT',null)};},signOut:async()=>{signedIn=false;return {}},signInWithOtp:async()=>({})},from(table){
 if(table==='client_projects')window.projectReads++;let data=tables[table],op='select'; const filters=[];const q={select(){return q},eq(k,v){filters.push([k,v]);data=data.filter(r=>r[k]===v);return q},order(){return q},limit(){return q},maybeSingle:async()=>({data:data[0]}),single:async()=>window.mockConflict&&op==='update'?{error:{code:'PGRST116'}}:{data:data[0]},insert(v){op='insert';window.mockWrites.push({table,op,values:v});return q},update(v){op='update';window.mockWrites.push({table,op,values:v,filters});return q},delete(){op='delete';window.mockWrites.push({table,op});return q},then(resolve){if(window.mockSlow&&table==='project_feedback')setTimeout(()=>resolve({data}),300);else resolve({data})}};return q;}};}
 `}));
 await page.reload();await page.waitForSelector('#projects article');
 assert.equal(await page.locator('#projects img').count(),0);assert.equal(await page.locator('#projects a').count(),0);
 await page.locator('#admin summary').first().click();
 const create=page.locator('#admin form').first();await create.getByLabel('Project title').fill('New project');await create.getByRole('button',{name:'Create project'}).click();
 await page.waitForFunction(()=>window.mockWrites.some(w=>w.table==='client_projects'&&w.op==='insert'));
 await page.waitForSelector('#projects article');await page.locator('#projects summary').click();
 page.once('dialog',d=>d.accept());await page.getByRole('button',{name:'Grant access'}).click();
 await page.waitForFunction(()=>window.mockWrites.some(w=>w.table==='project_members'&&w.op==='insert'));
 // A stale save must include the loaded revision and must not report success.
 await page.waitForSelector('#projects article');await page.locator('#projects summary').click();
 await page.evaluate(()=>window.mockConflict=true);
 const editor=page.locator('#projects details form');
 await editor.getByLabel('Project title').fill('Conflicting save');
 await editor.getByLabel('HTTPS preview URL (optional)').fill('');
 await editor.getByRole('button',{name:'Save project'}).click();
 await page.waitForFunction(()=>document.getElementById('notice').textContent.includes('The change was not saved'));
 const update=await page.evaluate(()=>window.mockWrites.find(w=>w.op==='update'));
 assert.deepEqual(update.filters,[['id','10000000-0000-0000-0000-000000000001'],['revision',1]]);
 assert.equal(await editor.getByRole('button',{name:'Save project'}).isEnabled(),true);
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
 // Expiry clears a loaded dashboard even when an activity request is in flight.
 await page.reload();await page.waitForSelector('#projects article');
 await page.evaluate(()=>window.mockSlow=true);
 const expiring=page.locator('#projects form').first();
 await expiring.getByLabel('Feedback').fill('Expiry race');await expiring.getByRole('button').click();
 await page.waitForFunction(()=>window.mockWrites.some(w=>w.table==='project_feedback'));
 await page.evaluate(()=>window.expireSession());
 await page.waitForSelector('#login',{state:'visible'});await page.waitForTimeout(400);
 assert.equal(await page.locator('#projects article').count(),0);
 assert.equal(await page.locator('#dashboard').isVisible(),false);
 mockRole='admin';mockAal='aal1';mockFactors=false;await page.reload();
 await page.getByRole('button',{name:'Set up portal authenticator'}).waitFor();
 assert.equal(await page.evaluate(()=>window.projectReads),0);
 assert.equal(await page.locator('#dashboard').isVisible(),false);
 await page.getByRole('button',{name:'Set up portal authenticator'}).click();
 await page.locator('#mfa img').waitFor();
 const code=page.getByLabel('Six-digit authenticator code');
 await code.fill('111111');await page.getByRole('button',{name:'Verify and continue'}).click();
 await page.waitForFunction(()=>document.getElementById('notice').textContent.includes('Code not accepted'));
 assert.equal(await page.evaluate(()=>window.projectReads),0);
 await code.fill('123456');await page.getByRole('button',{name:'Verify and continue'}).click();
 await page.waitForSelector('#projects article');assert.equal(await page.locator('#mfa').textContent(),'');
 await page.getByRole('button',{name:'Sign out'}).click();
 mockFactors=true;await page.reload();await page.getByLabel('Six-digit authenticator code').waitFor();
 assert.equal(await page.locator('#mfa img').count(),0);
 await page.getByRole('button',{name:'Sign out'}).click();assert.equal(await page.locator('#mfa').textContent(),'');
 assert.deepEqual(errors,[]);assert.equal(external,0);
 await browser.close();await new Promise(resolve=>server.close(resolve));console.log('Browser checks passed: administrator MFA enrollment, invalid codes, verification, existing factors, secret clearing, setup gate, no external requests, safe text/links, project creation, client assignment, client version approval stale-save rejection, session expiry and stale-read clearing after sign-out.');
})().catch(e=>{console.error(e);process.exit(1)});
