import vm from 'node:vm';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const source=await readFile(new URL('../config.js',import.meta.url),'utf8');
for(const [origin,expected] of [
 ['https://obanimistudio.com','https://obanimistudio.com/portal/'],
 ['https://obanimistudio-staging.pages.dev','https://obanimistudio-staging.pages.dev/portal/'],
 ['https://unknown.example','']
]){
 const window={location:{origin}};vm.runInNewContext(source,{window});
 assert.equal(window.OBANIMI_PORTAL_CONFIG.redirectUrl,expected);
 assert.equal(Object.isFrozen(window.OBANIMI_PORTAL_CONFIG),true);
}
console.log('Main/staging callbacks and unknown-origin setup blocking passed.');
