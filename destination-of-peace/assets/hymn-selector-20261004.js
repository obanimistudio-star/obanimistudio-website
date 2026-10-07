var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},T={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=T,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,w)}catch(e){w(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){_(re,0)};function se(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)}},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.8`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function ue(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,w=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function he(e){return{current:e}}function E(e){0>me||(e.current=pe[me],pe[me]=null,me--)}function D(e,t){me++,pe[me]=e.current,e.current=t}var ge=he(null),_e=he(null),ve=he(null),ye=he(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}E(ge),D(ge,e)}function xe(){E(ge),E(_e),E(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(E(ge),E(_e)),ye.current===e&&(E(ye),Qf._currentValue=fe)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ht(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[_t])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function kt(e){var t=e[Ct];return t||=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function O(e){e[wt]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return je.call(It,e)?!0:je.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(de(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&rn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&rn(e,a,t[a])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[vt]||null;if(!i)throw Error(s(90));Yt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(xu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=h({},An,{view:0,detail:0}),Nn=kn(Mn),Pn,Fn,In,Ln=h({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==In&&(In&&e.type===`mousemove`?(Pn=e.screenX-In.screenX,Fn=e.screenY-In.screenY):Fn=Pn=0,In=e),Pn)},movementY:function(e){return`movementY`in e?e.movementY:Fn}}),Rn=kn(Ln),zn=kn(h({},Ln,{dataTransfer:0})),Bn=kn(h({},Mn,{relatedTarget:0})),Vn=kn(h({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Hn=kn(h({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Un=kn(h({},An,{data:0})),Wn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Gn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kn[e])?!!t[e]:!1}function Jn(){return qn}var Yn=kn(h({},Mn,{key:function(e){if(e.key){var t=Wn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Gn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Xn=kn(h({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Zn=kn(h({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn})),Qn=kn(h({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=kn(h({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),er=kn(h({},An,{newState:0,oldState:0})),tr=[9,13,27,32],nr=yn&&`CompositionEvent`in window,rr=null;yn&&`documentMode`in document&&(rr=document.documentMode);var ir=yn&&`TextEvent`in window&&!rr,ar=yn&&(!nr||rr&&8<rr&&11>=rr),or=` `,sr=!1;function cr(e,t){switch(e){case`keyup`:return tr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function lr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ur=!1;function dr(e,t){switch(e){case`compositionend`:return lr(t);case`keypress`:return t.which===32?(sr=!0,or):null;case`textInput`:return e=t.data,e===or&&sr?null:e;default:return null}}function fr(e,t){if(ur)return e===`compositionend`||!nr&&cr(e,t)?(e=Tn(),wn=Cn=Sn=null,ur=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ar&&t.locale!==`ko`?null:t.data;default:return null}}var pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!pr[e.type]:t===`textarea`}function hr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Dd(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var gr=null,_r=null;function vr(e){bd(e,0)}function yr(e){if(Gt(Ot(e)))return e}function br(e,t){if(e===`change`)return t}var xr=!1;if(yn){var Sr;if(yn){var Cr=`oninput`in document;if(!Cr){var wr=document.createElement(`div`);wr.setAttribute(`oninput`,`return;`),Cr=typeof wr.oninput==`function`}Sr=Cr}else Sr=!1;xr=Sr&&(!document.documentMode||9<document.documentMode)}function Tr(){gr&&(gr.detachEvent(`onpropertychange`,Er),_r=gr=null)}function Er(e){if(e.propertyName===`value`&&yr(_r)){var t=[];hr(t,_r,e,fn(e)),_n(vr,t)}}function Dr(e,t,n){e===`focusin`?(Tr(),gr=t,_r=n,gr.attachEvent(`onpropertychange`,Er)):e===`focusout`&&Tr()}function Or(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return yr(_r)}function kr(e,t){if(e===`click`)return yr(t)}function Ar(e,t){if(e===`input`||e===`change`)return yr(t)}function jr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Mr=typeof Object.is==`function`?Object.is:jr;function Nr(e,t){if(Mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Mr(e[i],t[i]))return!1}return!0}function Pr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fr(e,t){var n=Pr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Pr(n)}}function Ir(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ir(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var zr=yn&&`documentMode`in document&&11>=document.documentMode,Br=null,Vr=null,Hr=null,Ur=!1;function Wr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ur||Br==null||Br!==Kt(r)||(r=Br,`selectionStart`in r&&Rr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&Nr(Hr,r)||(Hr=r,r=Dd(Vr,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Br)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Kr={animationend:Gr(`Animation`,`AnimationEnd`),animationiteration:Gr(`Animation`,`AnimationIteration`),animationstart:Gr(`Animation`,`AnimationStart`),transitionrun:Gr(`Transition`,`TransitionRun`),transitionstart:Gr(`Transition`,`TransitionStart`),transitioncancel:Gr(`Transition`,`TransitionCancel`),transitionend:Gr(`Transition`,`TransitionEnd`)},qr={},Jr={};yn&&(Jr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),`TransitionEvent`in window||delete Kr.transitionend.transition);function Yr(e){if(qr[e])return qr[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jr)return qr[e]=t[n];return e}var Xr=Yr(`animationend`),Zr=Yr(`animationiteration`),Qr=Yr(`animationstart`),$r=Yr(`transitionrun`),ei=Yr(`transitionstart`),ti=Yr(`transitioncancel`),ni=Yr(`transitionend`),ri=new Map,ii=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ii.push(`scrollEnd`);function ai(e,t){ri.set(e,t),Mt(t,[e])}var oi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},si=[],ci=0,li=0;function ui(){for(var e=ci,t=li=ci=0;t<e;){var n=si[t];si[t++]=null;var r=si[t];si[t++]=null;var i=si[t];si[t++]=null;var a=si[t];if(si[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&mi(n,i,a)}}function di(e,t,n,r){si[ci++]=e,si[ci++]=t,si[ci++]=n,si[ci++]=r,li|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function fi(e,t,n,r){return di(e,t,n,r),hi(e)}function pi(e,t){return di(e,null,null,t),hi(e)}function mi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function hi(e){if(50<fu)throw fu=0,pu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gi={};function _i(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(e,t,n,r){return new _i(e,t,n,r)}function yi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bi(e,t){var n=e.alternate;return n===null?(n=vi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function xi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Si(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)yi(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=vi(31,n,t,i),e.elementType=ae,e.lanes=a,e;case y:return Ci(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=vi(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case te:return e=vi(13,n,t,i),e.elementType=te,e.lanes=a,e;case ne:return e=vi(19,n,t,i),e.elementType=ne,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:o=10;break a;case ee:o=9;break a;case C:o=11;break a;case re:o=14;break a;case ie:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=vi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Ci(e,t,n,r){return e=vi(7,e,r,t),e.lanes=n,e}function wi(e,t,n){return e=vi(6,e,null,t),e.lanes=n,e}function Ti(e){var t=vi(18,null,null,0);return t.stateNode=e,t}function Ei(e,t,n){return t=vi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Di=new WeakMap;function Oi(e,t){if(typeof e==`object`&&e){var n=Di.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Di.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var ki=[],Ai=0,ji=null,Mi=0,Ni=[],Pi=0,Fi=null,Ii=1,Li=``;function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=ji,ji=e,Mi=t}function zi(e,t,n){Ni[Pi++]=Ii,Ni[Pi++]=Li,Ni[Pi++]=Fi,Fi=e;var r=Ii;e=Li;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ii=1<<32-Je(t)+i|n<<i|r,Li=a+e}else Ii=1<<a|n<<i|r,Li=e}function Bi(e){e.return!==null&&(Ri(e,1),zi(e,1,0))}function Vi(e){for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null;for(;e===Fi;)Fi=Ni[--Pi],Ni[Pi]=null,Li=Ni[--Pi],Ni[Pi]=null,Ii=Ni[--Pi],Ni[Pi]=null}function Hi(e,t){Ni[Pi++]=Ii,Ni[Pi++]=Li,Ni[Pi++]=Fi,Ii=t.id,Li=t.overflow,Fi=e}var Ui=null,k=null,A=!1,Wi=null,Gi=!1,Ki=Error(s(519));function qi(e){throw $i(Oi(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ki}function Ji(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:Z(`cancel`,t),Z(`close`,t);break;case`iframe`:case`object`:case`embed`:Z(`load`,t);break;case`video`:case`audio`:for(n=0;n<vd.length;n++)Z(vd[n],t);break;case`source`:Z(`error`,t);break;case`img`:case`image`:case`link`:Z(`error`,t),Z(`load`,t);break;case`details`:Z(`toggle`,t);break;case`input`:Z(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Z(`invalid`,t);break;case`textarea`:Z(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Nd(t.textContent,n)?(r.popover!=null&&(Z(`beforetoggle`,t),Z(`toggle`,t)),r.onScroll!=null&&Z(`scroll`,t),r.onScrollEnd!=null&&Z(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||qi(e,!0)}function Yi(e){for(Ui=e.return;Ui;)switch(Ui.tag){case 5:case 31:case 13:Gi=!1;return;case 27:case 3:Gi=!0;return;default:Ui=Ui.return}}function Xi(e){if(e!==Ui)return!1;if(!A)return Yi(e),A=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&k&&qi(e),Yi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));k=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));k=uf(e)}else t===27?(t=k,Zd(e.type)?(e=lf,lf=null,k=e):k=t):k=Ui?cf(e.stateNode.nextSibling):null;return!0}function Zi(){k=Ui=null,A=!1}function Qi(){var e=Wi;return e!==null&&($l===null?$l=e:$l.push.apply($l,e),Wi=null),e}function $i(e){Wi===null?Wi=[e]:Wi.push(e)}var ea=he(null),ta=null,na=null;function ra(e,t,n){D(ea,t._currentValue),t._currentValue=n}function ia(e){e._currentValue=ea.current,E(ea)}function aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function oa(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),aa(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),aa(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function sa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Mr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ye.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&oa(t,e,n,r),t.flags|=262144}function ca(e){for(e=e.firstContext;e!==null;){if(!Mr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function la(e){ta=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ua(e){return fa(ta,e)}function da(e,t){return ta===null&&la(e),fa(e,t)}function fa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},na===null){if(e===null)throw Error(s(308));na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else na=na.next=t;return n}var pa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ma=t.unstable_scheduleCallback,ha=t.unstable_NormalPriority,j={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ga(){return{controller:new pa,data:new Map,refCount:0}}function _a(e){e.refCount--,e.refCount===0&&ma(ha,function(){e.controller.abort()})}var va=null,ya=0,ba=0,xa=null;function Sa(e,t){if(va===null){var n=va=[];ya=0,ba=fd(),xa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ya++,t.then(Ca,Ca),t}function Ca(){if(--ya===0&&va!==null){xa!==null&&(xa.status=`fulfilled`);var e=va;va=null,ba=0,xa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function wa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ta=w.S;w.S=function(e,t){nu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&Sa(e,t),Ta!==null&&Ta(e,t)};var Ea=he(null);function Da(){var e=Ea.current;return e===null?W.pooledCache:e}function Oa(e,t){t===null?D(Ea,Ea.current):D(Ea,t.pool)}function ka(){var e=Da();return e===null?null:{parent:j._currentValue,pool:e}}var Aa=Error(s(460)),ja=Error(s(474)),Ma=Error(s(542)),Na={then:function(){}};function Pa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Fa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,za(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=W,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,za(e),e}throw La=t,Aa}}function Ia(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(La=e,Aa):e}}var La=null;function Ra(){if(La===null)throw Error(s(459));var e=La;return La=null,e}function za(e){if(e===Aa||e===Ma)throw Error(s(483))}var Ba=null,Va=0;function Ha(e){var t=Va;return Va+=1,Ba===null&&(Ba=[]),Fa(Ba,e,t)}function Ua(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Wa(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ga(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=bi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=wi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===ie&&Ia(a)===t.type)?(t=i(t,n.props),Ua(t,n),t.return=e,t):(t=Si(n.type,n.key,n.props,null,e.mode,r),Ua(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ei(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Ci(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=wi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=Si(t.type,t.key,t.props,null,e.mode,n),Ua(n,t),n.return=e,n;case v:return t=Ei(t,e.mode,n),t.return=e,t;case ie:return t=Ia(t),f(e,t,n)}if(de(t)||ce(t))return t=Ci(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ha(t),n);if(t.$$typeof===S)return f(e,da(e,t),n);Wa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=Ia(n),p(e,t,n,r)}if(de(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ha(n),r);if(n.$$typeof===S)return p(e,t,da(e,n),r);Wa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Ia(r),m(e,t,n,r,i)}if(de(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ha(r),i);if(r.$$typeof===S)return m(e,t,n,da(t,r),i);Wa(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),A&&Ri(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return A&&Ri(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),A&&Ri(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),A&&Ri(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return A&&Ri(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),A&&Ri(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Ia(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ua(c,a),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}a.type===y?(c=Ci(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=Si(a.type,a.key,a.props,null,e.mode,c),Ua(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ei(a,e.mode,c),c.return=e,e=c}return o(e);case ie:return a=Ia(a),b(e,r,a,c)}if(de(a))return h(e,r,a,c);if(ce(a)){if(l=ce(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Ha(a),c);if(a.$$typeof===S)return b(e,r,da(e,a),c);Wa(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=wi(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Va=0;var i=b(e,t,n,r);return Ba=null,i}catch(t){if(t===Aa||t===Ma)throw t;var a=vi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ka=Ga(!0),qa=Ga(!1),Ja=!1;function Ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=hi(e),mi(e,null,n),t}return di(e,r,t,n),hi(e)}function $a(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function eo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var to=!1;function no(){if(to){var e=xa;if(e!==null)throw e}}function ro(e,t,n,r){to=!1;var i=e.updateQueue;Ja=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(K&f)===f:(r&f)===f){f!==0&&f===ba&&(to=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ja=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ql|=o,e.lanes=o,e.memoizedState=d}}function io(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function ao(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)io(n[e],t)}var oo=he(null),so=he(0);function co(e,t){e=Kl,D(so,e),D(oo,t),Kl=e|t.baseLanes}function lo(){D(so,Kl),D(oo,oo.current)}function uo(){Kl=so.current,E(oo),E(so)}var fo=he(null),po=null;function mo(e){var t=e.alternate;D(M,M.current&1),D(fo,e),po===null&&(t===null||oo.current!==null||t.memoizedState!==null)&&(po=e)}function ho(e){D(M,M.current),D(fo,e),po===null&&(po=e)}function go(e){e.tag===22?(D(M,M.current),D(fo,e),po===null&&(po=e)):_o(e)}function _o(){D(M,M.current),D(fo,fo.current)}function vo(e){E(fo),po===e&&(po=null),E(M)}var M=he(0);function yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bo=0,N=null,P=null,F=null,xo=!1,So=!1,Co=!1,wo=0,To=0,Eo=null,Do=0;function I(){throw Error(s(321))}function Oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mr(e[n],t[n]))return!1;return!0}function ko(e,t,n,r,i,a){return bo=a,N=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Gs:Ks,Co=!1,a=n(r,i),Co=!1,So&&(a=jo(t,n,r,i)),Ao(e),a}function Ao(e){w.H=Ws;var t=P!==null&&P.next!==null;if(bo=0,F=P=N=null,xo=!1,To=0,Eo=null,t)throw Error(s(300));e===null||R||(e=e.dependencies,e!==null&&ca(e)&&(R=!0))}function jo(e,t,n,r){N=e;var i=0;do{if(So&&(Eo=null),To=0,So=!1,25<=i)throw Error(s(301));if(i+=1,F=P=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}w.H=qs,a=t(n,r)}while(So);return a}function Mo(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?Ro(t):t,e=e.useState()[0],(P===null?null:P.memoizedState)!==e&&(N.flags|=1024),t}function No(){var e=wo!==0;return wo=0,e}function Po(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Fo(e){if(xo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xo=!1}bo=0,F=P=N=null,So=!1,To=wo=0,Eo=null}function Io(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return F===null?N.memoizedState=F=e:F=F.next=e,F}function L(){if(P===null){var e=N.alternate;e=e===null?null:e.memoizedState}else e=P.next;var t=F===null?N.memoizedState:F.next;if(t!==null)F=t,P=e;else{if(e===null)throw N.alternate===null?Error(s(467)):Error(s(310));P=e,e={memoizedState:P.memoizedState,baseState:P.baseState,baseQueue:P.baseQueue,queue:P.queue,next:null},F===null?N.memoizedState=F=e:F=F.next=e}return F}function Lo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(e){var t=To;return To+=1,Eo===null&&(Eo=[]),e=Fa(Eo,e,t),t=N,(F===null?t.memoizedState:F.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Gs:Ks),e}function zo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ro(e);if(e.$$typeof===S)return ua(e)}throw Error(s(438,String(e)))}function Bo(e){var t=null,n=N.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=N.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Lo(),N.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function Vo(e,t){return typeof t==`function`?t(e):t}function Ho(e){return Uo(L(),P,e)}function Uo(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(bo&f)===f:(K&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ba&&(d=!0);else if((bo&p)===p){u=u.next,p===ba&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,N.lanes|=p,ql|=p;f=u.action,Co&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,N.lanes|=f,ql|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Mr(a,e.memoizedState)&&(R=!0,d&&(n=xa,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Wo(e){var t=L(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Mr(a,t.memoizedState)||(R=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Go(e,t,n){var r=N,i=L(),a=A;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Mr((P||i).memoizedState,n);if(o&&(i.memoizedState=n,R=!0),i=i.queue,gs(Jo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||F!==null&&F.memoizedState.tag&1){if(r.flags|=2048,ds(9,{destroy:void 0},qo.bind(null,r,i,n,t),null),W===null)throw Error(s(349));a||bo&127||Ko(r,t,n)}return n}function Ko(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=N.updateQueue,t===null?(t=Lo(),N.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qo(e,t,n,r){t.value=n,t.getSnapshot=r,Yo(t)&&Xo(e)}function Jo(e,t,n){return n(function(){Yo(t)&&Xo(e)})}function Yo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mr(e,n)}catch{return!0}}function Xo(e){var t=pi(e,2);t!==null&&gu(t,e,2)}function Zo(e){var t=Io();if(typeof e==`function`){var n=e;if(e=n(),Co){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},t}function Qo(e,t,n,r){return e.baseState=n,Uo(e,P,typeof r==`function`?r:Vo)}function $o(e,t,n,r,i){if(Vs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};w.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,es(t,a)):(a.next=n.next,t.pending=n.next=a)}}function es(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),ts(e,t,s)}catch(n){rs(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),ts(e,t,a)}catch(n){rs(e,t,n)}}function ts(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ns(e,t,n)},function(n){return rs(e,t,n)}):ns(e,t,n)}function ns(e,t,n){t.status=`fulfilled`,t.value=n,is(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,es(e,n)))}function rs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,is(t),t=t.next;while(t!==r)}e.action=null}function is(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function as(e,t){return t}function os(e,t){if(A){var n=W.formState;if(n!==null){a:{var r=N;if(A){if(k){b:{for(var i=k,a=Gi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){k=cf(i.nextSibling),r=i.data===`F!`;break a}}qi(r)}r=!1}r&&(t=n[0])}}return n=Io(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:t},n.queue=r,n=Rs.bind(null,N,r),r.dispatch=n,r=Zo(!1),a=Bs.bind(null,N,!1,r.queue),r=Io(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=$o.bind(null,N,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ss(e){return cs(L(),P,e)}function cs(e,t,n){if(t=Uo(e,t,as)[0],e=Ho(Vo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ro(t)}catch(e){throw e===Aa?Ma:e}else r=t;t=L();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(N.flags|=2048,ds(9,{destroy:void 0},ls.bind(null,i,n),null)),[r,a,e]}function ls(e,t){e.action=t}function us(e){var t=L(),n=P;if(n!==null)return cs(t,n,e);L(),t=t.memoizedState,n=L();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ds(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=N.updateQueue,t===null&&(t=Lo(),N.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function fs(){return L().memoizedState}function ps(e,t,n,r){var i=Io();N.flags|=e,i.memoizedState=ds(1|t,{destroy:void 0},n,r===void 0?null:r)}function ms(e,t,n,r){var i=L();r=r===void 0?null:r;var a=i.memoizedState.inst;P!==null&&r!==null&&Oo(r,P.memoizedState.deps)?i.memoizedState=ds(t,a,n,r):(N.flags|=e,i.memoizedState=ds(1|t,a,n,r))}function hs(e,t){ps(8390656,8,e,t)}function gs(e,t){ms(2048,8,e,t)}function _s(e){N.flags|=4;var t=N.updateQueue;if(t===null)t=Lo(),N.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function vs(e){var t=L().memoizedState;return _s({ref:t,nextImpl:e}),function(){if(U&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function ys(e,t){return ms(4,2,e,t)}function bs(e,t){return ms(4,4,e,t)}function xs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ss(e,t,n){n=n==null?null:n.concat([e]),ms(4,4,xs.bind(null,t,e),n)}function Cs(){}function ws(e,t){var n=L();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Oo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ts(e,t){var n=L();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Oo(t,r[1]))return r[0];if(r=e(),Co){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function Es(e,t,n){return n===void 0||bo&1073741824&&!(K&261930)?e.memoizedState=t:(e.memoizedState=n,e=hu(),N.lanes|=e,ql|=e,n)}function Ds(e,t,n,r){return Mr(n,t)?n:oo.current===null?!(bo&42)||bo&1073741824&&!(K&261930)?(R=!0,e.memoizedState=n):(e=hu(),N.lanes|=e,ql|=e,t):(e=Es(e,n,r),Mr(e,t)||(R=!0),e)}function Os(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};w.T=s,Bs(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?zs(e,t,wa(c,r),mu(e)):zs(e,t,r,mu(e))}catch(n){zs(e,t,{then:function(){},status:`rejected`,reason:n},mu())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function ks(){}function As(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=js(e).queue;Os(e,i,t,fe,n===null?ks:function(){return Ms(e),n(r)})}function js(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ms(e){var t=js(e);t.next===null&&(t=e.alternate.memoizedState),zs(e,t.next.queue,{},mu())}function Ns(){return ua(Qf)}function Ps(){return L().memoizedState}function Fs(){return L().memoizedState}function Is(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mu();e=Za(n);var r=Qa(t,e,n);r!==null&&(gu(r,t,n),$a(r,t,n)),t={cache:ga()},e.payload=t;return}t=t.return}}function Ls(e,t,n){var r=mu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Vs(e)?Hs(t,n):(n=fi(e,t,n,r),n!==null&&(gu(n,e,r),Us(n,t,r)))}function Rs(e,t,n){zs(e,t,n,mu())}function zs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vs(e))Hs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Mr(s,o))return di(e,t,i,0),W===null&&ui(),!1}catch{}if(n=fi(e,t,i,r),n!==null)return gu(n,e,r),Us(n,t,r),!0}return!1}function Bs(e,t,n,r){if(r={lane:2,revertLane:fd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Vs(e)){if(t)throw Error(s(479))}else t=fi(e,n,r,2),t!==null&&gu(t,e,2)}function Vs(e){var t=e.alternate;return e===N||t!==null&&t===N}function Hs(e,t){So=xo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Us(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Ws={readContext:ua,use:zo,useCallback:I,useContext:I,useEffect:I,useImperativeHandle:I,useLayoutEffect:I,useInsertionEffect:I,useMemo:I,useReducer:I,useRef:I,useState:I,useDebugValue:I,useDeferredValue:I,useTransition:I,useSyncExternalStore:I,useId:I,useHostTransitionStatus:I,useFormState:I,useActionState:I,useOptimistic:I,useMemoCache:I,useCacheRefresh:I};Ws.useEffectEvent=I;var Gs={readContext:ua,use:zo,useCallback:function(e,t){return Io().memoizedState=[e,t===void 0?null:t],e},useContext:ua,useEffect:hs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ps(4194308,4,xs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ps(4194308,4,e,t)},useInsertionEffect:function(e,t){ps(4,2,e,t)},useMemo:function(e,t){var n=Io();t=t===void 0?null:t;var r=e();if(Co){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Io();if(n!==void 0){var i=n(t);if(Co){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ls.bind(null,N,e),[r.memoizedState,e]},useRef:function(e){var t=Io();return e={current:e},t.memoizedState=e},useState:function(e){e=Zo(e);var t=e.queue,n=Rs.bind(null,N,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Cs,useDeferredValue:function(e,t){return Es(Io(),e,t)},useTransition:function(){var e=Zo(!1);return e=Os.bind(null,N,e.queue,!0,!1),Io().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=N,i=Io();if(A){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),W===null)throw Error(s(349));K&127||Ko(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,hs(Jo.bind(null,r,a,e),[e]),r.flags|=2048,ds(9,{destroy:void 0},qo.bind(null,r,a,n,t),null),n},useId:function(){var e=Io(),t=W.identifierPrefix;if(A){var n=Li,r=Ii;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=wo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Do++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ns,useFormState:os,useActionState:os,useOptimistic:function(e){var t=Io();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Bs.bind(null,N,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bo,useCacheRefresh:function(){return Io().memoizedState=Is.bind(null,N)},useEffectEvent:function(e){var t=Io(),n={impl:e};return t.memoizedState=n,function(){if(U&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Ks={readContext:ua,use:zo,useCallback:ws,useContext:ua,useEffect:gs,useImperativeHandle:Ss,useInsertionEffect:ys,useLayoutEffect:bs,useMemo:Ts,useReducer:Ho,useRef:fs,useState:function(){return Ho(Vo)},useDebugValue:Cs,useDeferredValue:function(e,t){return Ds(L(),P.memoizedState,e,t)},useTransition:function(){var e=Ho(Vo)[0],t=L().memoizedState;return[typeof e==`boolean`?e:Ro(e),t]},useSyncExternalStore:Go,useId:Ps,useHostTransitionStatus:Ns,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){return Qo(L(),P,e,t)},useMemoCache:Bo,useCacheRefresh:Fs};Ks.useEffectEvent=vs;var qs={readContext:ua,use:zo,useCallback:ws,useContext:ua,useEffect:gs,useImperativeHandle:Ss,useInsertionEffect:ys,useLayoutEffect:bs,useMemo:Ts,useReducer:Wo,useRef:fs,useState:function(){return Wo(Vo)},useDebugValue:Cs,useDeferredValue:function(e,t){var n=L();return P===null?Es(n,e,t):Ds(n,P.memoizedState,e,t)},useTransition:function(){var e=Wo(Vo)[0],t=L().memoizedState;return[typeof e==`boolean`?e:Ro(e),t]},useSyncExternalStore:Go,useId:Ps,useHostTransitionStatus:Ns,useFormState:us,useActionState:us,useOptimistic:function(e,t){var n=L();return P===null?(n.baseState=e,[e,n.queue.dispatch]):Qo(n,P,e,t)},useMemoCache:Bo,useCacheRefresh:Fs};qs.useEffectEvent=vs;function Js(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ys={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Za(r);i.payload=t,n!=null&&(i.callback=n),t=Qa(e,i,r),t!==null&&(gu(t,e,r),$a(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mu(),i=Za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Qa(e,i,r),t!==null&&(gu(t,e,r),$a(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mu(),r=Za(n);r.tag=2,t!=null&&(r.callback=t),t=Qa(e,r,n),t!==null&&(gu(t,e,n),$a(t,e,n))}};function Xs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,a):!0}function Zs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ys.enqueueReplaceState(t,t.state,null)}function Qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function $s(e){oi(e)}function ec(e){console.error(e)}function tc(e){oi(e)}function nc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ic(e,t,n){return n=Za(n),n.tag=3,n.payload={element:null},n.callback=function(){nc(e,t)},n}function ac(e){return e=Za(e),e.tag=3,e}function oc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){rc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){rc(t,n,r),typeof i!=`function`&&(au===null?au=new Set([this]):au.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function sc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&sa(t,n,i,!0),n=fo.current,n!==null){switch(n.tag){case 31:case 13:return po===null?Ou():n.alternate===null&&J===0&&(J=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Na?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,i)),!1;case 22:return n.flags|=65536,r===Na?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,i)),!1}throw Error(s(435,n.tag))}return Ku(e,r,i),Ou(),!1}if(A)return t=fo.current,t===null?(r!==Ki&&(t=Error(s(423),{cause:r}),$i(Oi(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Oi(r,n),i=ic(e.stateNode,r,i),eo(e,i),J!==4&&(J=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Ki&&(e=Error(s(422),{cause:r}),$i(Oi(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Oi(a,n),Ql===null?Ql=[a]:Ql.push(a),J!==4&&(J=2),t===null)return!0;r=Oi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=ic(n.stateNode,r,e),eo(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(au===null||!au.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=ac(i),oc(i,e,n,r),eo(n,i),!1}n=n.return}while(n!==null);return!1}var cc=Error(s(461)),R=!1;function lc(e,t,n,r){t.child=e===null?qa(t,null,n,r):Ka(t,e.child,n,r)}function uc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return la(t),r=ko(e,t,n,o,a,i),s=No(),e!==null&&!R?(Po(e,t,i),Pc(e,t,i)):(A&&s&&Bi(t),t.flags|=1,lc(e,t,r,i),t.child)}function dc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!yi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,fc(e,t,a,r,i)):(e=Si(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Fc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Nr:n,n(o,r)&&e.ref===t.ref)return Pc(e,t,i)}return t.flags|=1,e=bi(a,r),e.ref=t.ref,e.return=t,t.child=e}function fc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Nr(a,r)&&e.ref===t.ref){if(R=!1,t.pendingProps=r=a,Fc(e,i))e.flags&131072&&(R=!0);else return t.lanes=e.lanes,Pc(e,t,i)}}return bc(e,t,n,r,i)}function pc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return hc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Oa(t,a===null?null:a.cachePool),a===null?lo():co(t,a),go(t);else return r=t.lanes=536870912,hc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Oa(t,null),lo(),_o(t)):(Oa(t,a.cachePool),co(t,a),_o(t),t.memoizedState=null);return lc(e,t,i,n),t.child}function mc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function hc(e,t,n,r,i){var a=Da();return a=a===null?null:{parent:j._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Oa(t,null),lo(),go(t),e!==null&&sa(e,t,r,!0),t.childLanes=i,null}function gc(e,t){return t=kc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function _c(e,t,n){return Ka(t,e.child,null,n),e=gc(t,t.pendingProps),e.flags|=2,vo(t),t.memoizedState=null,e}function vc(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(A){if(r.mode===`hidden`)return e=gc(t,r),t.lanes=536870912,mc(null,e);if(ho(t),(e=k)?(e=rf(e,Gi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fi===null?null:{id:Ii,overflow:Li},retryLane:536870912,hydrationErrors:null},n=Ti(e),n.return=t,t.child=n,Ui=t,k=null)):e=null,e===null)throw qi(t);return t.lanes=536870912,null}return gc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(ho(t),i){if(t.flags&256)t.flags&=-257,t=_c(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558))}else if(R||sa(e,t,n,!1),i=(n&e.childLanes)!==0,R||i){if(r=W,r!==null&&(o=dt(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,pi(e,o),gu(r,e,o),cc;Ou(),t=_c(e,t,n)}else e=a.treeContext,k=cf(o.nextSibling),Ui=t,A=!0,Wi=null,Gi=!1,e!==null&&Hi(t,e),t=gc(t,r),t.flags|=4096;return t}return e=bi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function yc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function bc(e,t,n,r,i){return la(t),n=ko(e,t,n,r,void 0,i),r=No(),e!==null&&!R?(Po(e,t,i),Pc(e,t,i)):(A&&r&&Bi(t),t.flags|=1,lc(e,t,n,i),t.child)}function xc(e,t,n,r,i,a){return la(t),t.updateQueue=null,n=jo(t,r,n,i),Ao(e),r=No(),e!==null&&!R?(Po(e,t,a),Pc(e,t,a)):(A&&r&&Bi(t),t.flags|=1,lc(e,t,n,a),t.child)}function Sc(e,t,n,r,i){if(la(t),t.stateNode===null){var a=gi,o=n.contextType;typeof o==`object`&&o&&(a=ua(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ys,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ya(t),o=n.contextType,a.context=typeof o==`object`&&o?ua(o):gi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Js(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ys.enqueueReplaceState(a,a.state,null),ro(t,r,a,i),no(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=gi,typeof u==`object`&&u&&(o=ua(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Zs(t,a,r,o),Ja=!1;var f=t.memoizedState;a.state=f,ro(t,r,a,i),no(),l=t.memoizedState,s||f!==l||Ja?(typeof d==`function`&&(Js(t,n,d,r),l=t.memoizedState),(c=Ja||Xs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Xa(e,t),o=t.memoizedProps,u=Qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=gi,typeof l==`object`&&l&&(c=ua(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Zs(t,a,r,c),Ja=!1,f=t.memoizedState,a.state=f,ro(t,r,a,i),no();var p=t.memoizedState;o!==d||f!==p||Ja||e!==null&&e.dependencies!==null&&ca(e.dependencies)?(typeof s==`function`&&(Js(t,n,s,r),p=t.memoizedState),(u=Ja||Xs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ca(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,yc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ka(t,e.child,null,i),t.child=Ka(t,null,n,i)):lc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Pc(e,t,i),e}function Cc(e,t,n,r){return Zi(),t.flags|=256,lc(e,t,n,r),t.child}var wc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tc(e){return{baseLanes:e,cachePool:ka()}}function Ec(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Xl),e}function Dc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(M.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(A){if(i?mo(t):_o(t),(e=k)?(e=rf(e,Gi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fi===null?null:{id:Ii,overflow:Li},retryLane:536870912,hydrationErrors:null},n=Ti(e),n.return=t,t.child=n,Ui=t,k=null)):e=null,e===null)throw qi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(_o(t),i=t.mode,c=kc({mode:`hidden`,children:c},i),r=Ci(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Tc(n),r.childLanes=Ec(e,o,n),t.memoizedState=wc,mc(null,r)):(mo(t),Oc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(mo(t),t.flags&=-257,t=Ac(e,t,n)):t.memoizedState===null?(_o(t),c=r.fallback,i=t.mode,r=kc({mode:`visible`,children:r.children},i),c=Ci(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ka(t,e.child,null,n),r=t.child,r.memoizedState=Tc(n),r.childLanes=Ec(e,o,n),t.memoizedState=wc,t=mc(null,r)):(_o(t),t.child=e.child,t.flags|=128,t=null);else if(mo(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,$i({value:r,source:null,stack:null}),t=Ac(e,t,n)}else if(R||sa(e,t,n,!1),o=(n&e.childLanes)!==0,R||o){if(o=W,o!==null&&(r=dt(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,pi(e,r),gu(o,e,r),cc;af(c)||Ou(),t=Ac(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,k=cf(c.nextSibling),Ui=t,A=!0,Wi=null,Gi=!1,e!==null&&Hi(t,e),t=Oc(t,r.children),t.flags|=4096);return t}return i?(_o(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=bi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Ci(c,i,n,null),c.flags|=2):c=bi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,mc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Tc(n):(i=c.cachePool,i===null?i=ka():(l=j._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Ec(e,o,n),t.memoizedState=wc,mc(e.child,r)):(mo(t),n=e.child,e=n.sibling,n=bi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Oc(e,t){return t=kc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function kc(e,t){return e=vi(22,e,null,t),e.lanes=0,e}function Ac(e,t,n){return Ka(t,e.child,null,n),e=Oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),aa(e.return,t,n)}function Mc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Nc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=M.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,D(M,o),lc(e,t,r,n),r=A?Mi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,n,t);else if(e.tag===19)jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Mc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Mc(t,!0,n,null,a,r);break;case`together`:Mc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Pc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ql|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(sa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=bi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ca(e)))}function Ic(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ra(t,j,e.memoizedState.cache),Zi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ho(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(mo(t),e=Pc(e,t,n),e===null?null:e.sibling):Dc(e,t,n):(mo(t),t.flags|=128,null);mo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(sa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Nc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(M,M.current),r)break;return null;case 22:return t.lanes=0,pc(e,t,n,t.pendingProps);case 24:ra(t,j,e.memoizedState.cache)}return Pc(e,t,n)}function Lc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)R=!0;else{if(!Fc(e,n)&&!(t.flags&128))return R=!1,Ic(e,t,n);R=!!(e.flags&131072)}}else R=!1,A&&t.flags&1048576&&zi(t,Mi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ia(t.elementType),t.type=e,typeof e==`function`)yi(e)?(r=Qs(e,r),t.tag=1,t=Sc(null,t,e,r,n)):(t.tag=0,t=bc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===C){t.tag=11,t=uc(null,t,e,r,n);break a}if(i===re){t.tag=14,t=dc(null,t,e,r,n);break a}}throw t=ue(e)||e,Error(s(306,t,``))}}return t;case 0:return bc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Qs(r,t.pendingProps),Sc(e,t,r,i,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Xa(e,t),ro(t,r,null,n);var o=t.memoizedState;if(r=o.cache,ra(t,j,r),r!==a.cache&&oa(t,[j],n,!0),no(),r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Cc(e,t,r,n);break a}if(r!==i){i=Oi(Error(s(424)),t),$i(i),t=Cc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(k=cf(e.firstChild),Ui=t,A=!0,Wi=null,Gi=!0,n=qa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Zi(),r===i){t=Pc(e,t,n);break a}lc(e,t,r,n)}t=t.child}return t;case 26:return yc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:A||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[_t]=t,r[vt]=e,$(r,n,e),O(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&A&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),Ui=t,Gi=!0,i=k,Zd(t.type)?(lf=i,k=cf(r.firstChild)):k=i),lc(e,t,t.pendingProps.children,n),yc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&A&&((i=r=k)&&(r=tf(r,t.type,t.pendingProps,Gi),r===null?i=!1:(t.stateNode=r,Ui=t,k=cf(r.firstChild),Gi=!1,i=!0)),i||qi(t)),Se(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=ko(e,t,Mo,null,null,n),Qf._currentValue=i),yc(e,t),lc(e,t,r,n),t.child;case 6:return e===null&&A&&((e=n=k)&&(n=nf(n,t.pendingProps,Gi),n===null?e=!1:(t.stateNode=n,Ui=t,k=null,e=!0)),e||qi(t)),null;case 13:return Dc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ka(t,null,r,n):lc(e,t,r,n),t.child;case 11:return uc(e,t,t.type,t.pendingProps,n);case 7:return lc(e,t,t.pendingProps,n),t.child;case 8:return lc(e,t,t.pendingProps.children,n),t.child;case 12:return lc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ra(t,t.type,r.value),lc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,la(t),i=ua(i),r=r(i),t.flags|=1,lc(e,t,r,n),t.child;case 14:return dc(e,t,t.type,t.pendingProps,n);case 15:return fc(e,t,t.type,t.pendingProps,n);case 19:return Nc(e,t,n);case 31:return vc(e,t,n);case 22:return pc(e,t,n,t.pendingProps);case 24:return la(t),r=ua(j),e===null?(i=Da(),i===null&&(i=W,a=ga(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ya(t),ra(t,j,i)):((e.lanes&n)!==0&&(Xa(e,t),ro(t,null,null,n),no()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,ra(t,j,r),r!==i.cache&&oa(t,[j],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ra(t,j,r))),lc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Rc(e){e.flags|=4}function zc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Tu())e.flags|=8192;else throw La=Na,ja}}else e.flags&=-16777217}function Bc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(Tu())e.flags|=8192;else throw La=Na,ja}}function Vc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,Zl|=t)}function Hc(e,t){if(!A)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function z(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Uc(e,t,n){var r=t.pendingProps;switch(Vi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return z(t),null;case 1:return z(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ia(j),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?Rc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qi())),z(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Rc(t),a===null?(z(t),zc(t,i,null,r,n)):(z(t),Bc(t,a))):a?a===e.memoizedState?(z(t),t.flags&=-16777217):(Rc(t),z(t),Bc(t,a)):(e=e.memoizedProps,e!==r&&Rc(t),z(t),zc(t,i,e,r,n)),null;case 27:if(Ce(t),n=ve.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Rc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return z(t),null}e=ge.current,Xi(t)?Ji(t,e):(e=ff(i,r,n),t.stateNode=e,Rc(t))}return z(t),null;case 5:if(Ce(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Rc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return z(t),null}if(a=ge.current,Xi(t))Ji(t,a);else{var o=Bd(ve.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[_t]=t,a[vt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch($(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Rc(t)}}return z(t),zc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Rc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=ve.current,Xi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Ui,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Nd(e.nodeValue,n)),e||qi(t,!0)}else e=Bd(e).createTextNode(r),e[_t]=t,t.stateNode=e}return z(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Xi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[_t]=t}else Zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;z(t),e=!1}else n=Qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(vo(t),t):(vo(t),null);if(t.flags&128)throw Error(s(558))}return z(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[_t]=t}else Zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;z(t),i=!1}else i=Qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(vo(t),t):(vo(t),null)}return vo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Vc(t,t.updateQueue),z(t),null);case 4:return xe(),e===null&&Cd(t.stateNode.containerInfo),z(t),null;case 10:return ia(t.type),z(t),null;case 19:if(E(M),r=t.memoizedState,r===null)return z(t),null;if(i=!!(t.flags&128),a=r.rendering,a===null){if(i)Hc(r,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=yo(e),a!==null){for(t.flags|=128,Hc(r,!1),e=a.updateQueue,t.updateQueue=e,Vc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)xi(n,e),n=n.sibling;return D(M,M.current&1|2),A&&Ri(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>ru&&(t.flags|=128,i=!0,Hc(r,!1),t.lanes=4194304)}}else{if(!i){if(e=yo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Vc(t,e),Hc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!A)return z(t),null}else 2*Ie()-r.renderingStartTime>ru&&n!==536870912&&(t.flags|=128,i=!0,Hc(r,!1),t.lanes=4194304)}r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(z(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=M.current,D(M,i?n&1|2:n&1),A&&Ri(t,r.treeForkCount),e);case 22:case 23:return vo(t),uo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(z(t),t.subtreeFlags&6&&(t.flags|=8192)):z(t),n=t.updateQueue,n!==null&&Vc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&E(Ea),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ia(j),z(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Wc(e,t){switch(Vi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ia(j),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(vo(t),t.alternate===null)throw Error(s(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(vo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(M),null;case 4:return xe(),null;case 10:return ia(t.type),null;case 22:case 23:return vo(t),uo(),e!==null&&E(Ea),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ia(j),null;case 25:return null;default:return null}}function Gc(e,t){switch(Vi(t),t.tag){case 3:ia(j),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&vo(t);break;case 13:vo(t);break;case 19:E(M);break;case 10:ia(t.type);break;case 22:case 23:vo(t),uo(),e!==null&&E(Ea);break;case 24:ia(j)}}function Kc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){X(t,t.return,e)}}function qc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){X(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){X(t,t.return,e)}}function Jc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ao(t,n)}catch(t){X(e,e.return,t)}}}function Yc(e,t,n){n.props=Qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){X(e,t,n)}}function Xc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){X(e,t,n)}}function Zc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){X(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){X(e,t,n)}else n.current=null}}function Qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){X(e,e.return,t)}}function $c(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[vt]=t}catch(t){X(e,e.return,t)}}function el(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function tl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||el(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(rl(e,t,n),e=e.sibling;e!==null;)rl(e,t,n),e=e.sibling}function il(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);$(t,r,n),t[_t]=e,t[vt]=n}catch(t){X(e,e.return,t)}}var al=!1,B=!1,ol=!1,sl=typeof WeakSet==`function`?WeakSet:Set,V=null;function cl(e,t){if(e=e.containerInfo,Rd=sp,e=Lr(e),Rr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,V=t;V!==null;)if(t=V,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,V=e;else for(;V!==null;){switch(t=V,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Qs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){X(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}}function ll(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Cl(e,n),r&4&&Kc(5,n);break;case 1:if(Cl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){X(n,n.return,e)}else{var i=Qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){X(n,n.return,e)}}}r&64&&Jc(n),r&512&&Xc(n,n.return);break;case 3:if(Cl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ao(e,t)}catch(e){X(n,n.return,e)}}break;case 27:t===null&&r&4&&il(n);case 26:case 5:Cl(e,n),t===null&&r&4&&Qc(n),r&512&&Xc(n,n.return);break;case 12:Cl(e,n);break;case 31:Cl(e,n),r&4&&ml(e,n);break;case 13:Cl(e,n),r&4&&hl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||al,!r){t=t!==null&&t.memoizedState!==null||B,i=al;var a=B;al=r,(B=t)&&!a?Tl(e,n,!!(n.subtreeFlags&8772)):Cl(e,n),al=i,B=a}break;case 30:break;default:Cl(e,n)}}function ul(e){var t=e.alternate;t!==null&&(e.alternate=null,ul(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var H=null,dl=!1;function fl(e,t,n){for(n=n.child;n!==null;)pl(e,t,n),n=n.sibling}function pl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:B||Zc(n,t),fl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:B||Zc(n,t);var r=H,i=dl;Zd(n.type)&&(H=n.stateNode,dl=!1),fl(e,t,n),pf(n.stateNode),H=r,dl=i;break;case 5:B||Zc(n,t);case 6:if(r=H,i=dl,H=null,fl(e,t,n),H=r,dl=i,H!==null){if(dl)try{(H.nodeType===9?H.body:H.nodeName===`HTML`?H.ownerDocument.body:H).removeChild(n.stateNode)}catch(e){X(n,t,e)}else try{H.removeChild(n.stateNode)}catch(e){X(n,t,e)}}break;case 18:H!==null&&(dl?(e=H,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(H,n.stateNode));break;case 4:r=H,i=dl,H=n.stateNode.containerInfo,dl=!0,fl(e,t,n),H=r,dl=i;break;case 0:case 11:case 14:case 15:qc(2,n,t),B||qc(4,n,t),fl(e,t,n);break;case 1:B||(Zc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Yc(n,t,r)),fl(e,t,n);break;case 21:fl(e,t,n);break;case 22:B=(r=B)||n.memoizedState!==null,fl(e,t,n),B=r;break;default:fl(e,t,n)}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){X(t,t.return,e)}}}function hl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){X(t,t.return,e)}}function gl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sl),t;default:throw Error(s(435,e.tag))}}function _l(e,t){var n=gl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Xu.bind(null,e,t);t.then(r,r)}})}function vl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){H=c.stateNode,dl=!1;break a}break;case 5:H=c.stateNode,dl=!1;break a;case 3:case 4:H=c.stateNode.containerInfo,dl=!0;break a}c=c.return}if(H===null)throw Error(s(160));pl(a,o,i),H=null,dl=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)bl(t,e),t=t.sibling}var yl=null;function bl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vl(t,e),xl(e),r&4&&(qc(3,e,e.return),Kc(3,e),qc(5,e,e.return));break;case 1:vl(t,e),xl(e),r&512&&(B||n===null||Zc(n,n.return)),r&64&&al&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=yl;if(vl(t,e),xl(e),r&512&&(B||n===null||Zc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[wt]||a[_t]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),$(a,r,n),a[_t]=e,O(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),$(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),$(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[_t]=e,O(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode)}else e.stateNode=If(i,r,e.memoizedProps)}else a===r?r===null&&e.stateNode!==null&&$c(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:vl(t,e),xl(e),r&512&&(B||n===null||Zc(n,n.return)),n!==null&&r&4&&$c(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vl(t,e),xl(e),r&512&&(B||n===null||Zc(n,n.return)),e.flags&32){i=e.stateNode;try{tn(i,``)}catch(t){X(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,$c(e,i,n===null?i:n.memoizedProps)),r&1024&&(ol=!0);break;case 6:if(vl(t,e),xl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){X(e,e.return,t)}}break;case 3:if(Bf=null,i=yl,yl=gf(t.containerInfo),vl(t,e),yl=i,xl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){X(e,e.return,t)}ol&&(ol=!1,Sl(e));break;case 4:r=yl,yl=gf(e.stateNode.containerInfo),vl(t,e),xl(e),yl=r;break;case 12:vl(t,e),xl(e);break;case 31:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 13:vl(t,e),xl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(tu=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=al,d=B;if(al=u||i,B=d||l,vl(t,e),B=d,al=u,xl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||al||B||wl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){X(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){X(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){X(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,_l(e,n))));break;case 19:vl(t,e),xl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,_l(e,r)));break;case 30:break;case 21:break;default:vl(t,e),xl(e)}}function xl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(el(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;rl(e,tl(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(tn(a,``),n.flags&=-33),rl(e,tl(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;nl(e,tl(e),o);break;default:throw Error(s(161))}}catch(t){X(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ll(e,t.alternate,t),t=t.sibling}function wl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:qc(4,t,t.return),wl(t);break;case 1:Zc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Yc(t,t.return,n),wl(t);break;case 27:pf(t.stateNode);case 26:case 5:Zc(t,t.return),wl(t);break;case 22:t.memoizedState===null&&wl(t);break;case 30:wl(t);break;default:wl(t)}e=e.sibling}}function Tl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Tl(i,a,n),Kc(4,a);break;case 1:if(Tl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){X(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)io(c[i],s)}catch(e){X(r,r.return,e)}}n&&o&64&&Jc(a),Xc(a,a.return);break;case 27:il(a);case 26:case 5:Tl(i,a,n),n&&r===null&&o&4&&Qc(a),Xc(a,a.return);break;case 12:Tl(i,a,n);break;case 31:Tl(i,a,n),n&&o&4&&ml(i,a);break;case 13:Tl(i,a,n),n&&o&4&&hl(i,a);break;case 22:a.memoizedState===null&&Tl(i,a,n),Xc(a,a.return);break;case 30:break;default:Tl(i,a,n)}t=t.sibling}}function El(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&_a(n))}function Dl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_a(e))}function Ol(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kl(e,t,n,r),t=t.sibling}function kl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ol(e,t,n,r),i&2048&&Kc(9,t);break;case 1:Ol(e,t,n,r);break;case 3:Ol(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&_a(e)));break;case 12:if(i&2048){Ol(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){X(t,t.return,e)}}else Ol(e,t,n,r);break;case 31:Ol(e,t,n,r);break;case 13:Ol(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Ol(e,t,n,r):(a._visibility|=2,Al(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Ol(e,t,n,r):jl(e,t),i&2048&&El(o,t);break;case 24:Ol(e,t,n,r),i&2048&&Dl(t.alternate,t);break;default:Ol(e,t,n,r)}}function Al(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Al(a,o,s,c,i),Kc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Al(a,o,s,c,i)):u._visibility&2?Al(a,o,s,c,i):jl(a,o),i&&l&2048&&El(o.alternate,o);break;case 24:Al(a,o,s,c,i),i&&l&2048&&Dl(o.alternate,o);break;default:Al(a,o,s,c,i)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:jl(n,r),i&2048&&El(r.alternate,r);break;case 24:jl(n,r),i&2048&&Dl(r.alternate,r);break;default:jl(n,r)}t=t.sibling}}var Ml=8192;function Nl(e,t,n){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Pl(e,t,n),e=e.sibling}function Pl(e,t,n){switch(e.tag){case 26:Nl(e,t,n),e.flags&Ml&&e.memoizedState!==null&&Gf(n,yl,e.memoizedState,e.memoizedProps);break;case 5:Nl(e,t,n);break;case 3:case 4:var r=yl;yl=gf(e.stateNode.containerInfo),Nl(e,t,n),yl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ml,Ml=16777216,Nl(e,t,n),Ml=r):Nl(e,t,n));break;default:Nl(e,t,n)}}function Fl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];V=r,zl(r,e)}Fl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ll(e),e=e.sibling}function Ll(e){switch(e.tag){case 0:case 11:case 15:Il(e),e.flags&2048&&qc(9,e,e.return);break;case 3:Il(e);break;case 12:Il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rl(e)):Il(e);break;default:Il(e)}}function Rl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];V=r,zl(r,e)}Fl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:qc(8,t,t.return),Rl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Rl(t));break;default:Rl(t)}e=e.sibling}}function zl(e,t){for(;V!==null;){var n=V;switch(n.tag){case 0:case 11:case 15:qc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:_a(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,V=r;else a:for(n=e;V!==null;){r=V;var i=r.sibling,a=r.return;if(ul(r),r===n){V=null;break a}if(i!==null){i.return=a,V=i;break a}V=a}}}var Bl={getCacheForType:function(e){var t=ua(j),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ua(j).controller.signal}},Vl=typeof WeakMap==`function`?WeakMap:Map,U=0,W=null,G=null,K=0,q=0,Hl=null,Ul=!1,Wl=!1,Gl=!1,Kl=0,J=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=null,$l=null,eu=!1,tu=0,nu=0,ru=1/0,iu=null,au=null,Y=0,ou=null,su=null,cu=0,lu=0,uu=null,du=null,fu=0,pu=null;function mu(){return U&2&&K!==0?K&-K:w.T===null?mt():fd()}function hu(){if(Xl===0){if(!(K&536870912)||A){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),Xl=e}else Xl=536870912}return e=fo.current,e!==null&&(e.flags|=32),Xl}function gu(e,t,n){(e===W&&(q===2||q===9)||e.cancelPendingCommit!==null)&&(Cu(e,0),bu(e,K,Xl,!1)),st(e,n),(!(U&2)||e!==W)&&(e===W&&(!(U&2)&&(Jl|=n),J===4&&bu(e,K,Xl,!1)),id(e))}function _u(e,t,n){if(U&6)throw Error(s(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||rt(e,t),i=r?ju(e,t):ku(e,t,!0),a=r;do{if(i===0){Wl&&!r&&bu(e,t,0,!1);break}if(n=e.current.alternate,a&&!yu(n)){i=ku(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Ql;var l=c.current.memoizedState.isDehydrated;if(l&&(Cu(c,o).flags|=256),o=ku(c,o,!1),o!==2){if(Gl&&!l){c.errorRecoveryDisabledLanes|=a,Jl|=a,i=4;break a}a=$l,$l=i,a!==null&&($l===null?$l=a:$l.push.apply($l,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Cu(e,0),bu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:bu(r,t,Xl,!Ul);break a;case 2:$l=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=tu+300-Ie(),10<i)){if(bu(r,t,Xl,!Ul),nt(r,0,!0)!==0)break a;cu=t,r.timeoutHandle=Kd(vu.bind(null,r,n,$l,iu,eu,t,Xl,Jl,Zl,Ul,a,`Throttled`,-0,0),i);break a}vu(r,n,$l,iu,eu,t,Xl,Jl,Zl,Ul,a,null,-0,0)}break}while(1);id(e)}function vu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Pl(t,a,d);var m=(a&62914560)===a?tu-Ie():(a&4194048)===a?nu-Ie():0;if(m=qf(d,m),m!==null){cu=a,e.cancelPendingCommit=m(Ru.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),bu(e,a,o,!l);return}}Ru(e,t,a,n,r,i,o,s,c)}function yu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Mr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bu(e,t,n,r){t&=~Yl,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function xu(){return U&6?!0:(ad(0,!1),!1)}function Su(){if(G!==null){if(q===0)var e=G.return;else e=G,na=ta=null,Fo(e),Ba=null,Va=0,e=G;for(;e!==null;)Gc(e.alternate,e),e=e.return;G=null}}function Cu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cu=0,Su(),W=e,G=n=bi(e.current,null),K=t,q=0,Hl=null,Ul=!1,Wl=rt(e,t),Gl=!1,Zl=Xl=Yl=Jl=ql=J=0,$l=Ql=null,eu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Kl=t,ui(),n}function wu(e,t){N=null,w.H=Ws,t===Aa||t===Ma?(t=Ra(),q=3):t===ja?(t=Ra(),q=4):q=t===cc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Hl=t,G===null&&(J=1,nc(e,Oi(t,e.current)))}function Tu(){var e=fo.current;return e===null?!0:(K&4194048)===K?po===null:(K&62914560)===K||K&536870912?e===po:!1}function Eu(){var e=w.H;return w.H=Ws,e===null?Ws:e}function Du(){var e=w.A;return w.A=Bl,e}function Ou(){J=4,Ul||(K&4194048)!==K&&fo.current!==null||(Wl=!0),!(ql&134217727)&&!(Jl&134217727)||W===null||bu(W,K,Xl,!1)}function ku(e,t,n){var r=U;U|=2;var i=Eu(),a=Du();(W!==e||K!==t)&&(iu=null,Cu(e,t)),t=!1;var o=J;a:do try{if(q!==0&&G!==null){var s=G,c=Hl;switch(q){case 8:Su(),o=6;break a;case 3:case 2:case 9:case 6:fo.current===null&&(t=!0);var l=q;if(q=0,Hl=null,Fu(e,s,c,l),n&&Wl){o=0;break a}break;default:l=q,q=0,Hl=null,Fu(e,s,c,l)}}Au(),o=J;break}catch(t){wu(e,t)}while(1);return t&&e.shellSuspendCounter++,na=ta=null,U=r,w.H=i,w.A=a,G===null&&(W=null,K=0,ui()),o}function Au(){for(;G!==null;)Nu(G)}function ju(e,t){var n=U;U|=2;var r=Eu(),i=Du();W!==e||K!==t?(iu=null,ru=Ie()+500,Cu(e,t)):Wl=rt(e,t);a:do try{if(q!==0&&G!==null){t=G;var a=Hl;b:switch(q){case 1:q=0,Hl=null,Fu(e,t,a,1);break;case 2:case 9:if(Pa(a)){q=0,Hl=null,Pu(t);break}t=function(){q!==2&&q!==9||W!==e||(q=7),id(e)},a.then(t,t);break a;case 3:q=7;break a;case 4:q=5;break a;case 7:Pa(a)?(q=0,Hl=null,Pu(t)):(q=0,Hl=null,Fu(e,t,a,7));break;case 5:var o=null;switch(G.tag){case 26:o=G.memoizedState;case 5:case 27:var c=G;if(o?Wf(o):c.stateNode.complete){q=0,Hl=null;var l=c.sibling;if(l!==null)G=l;else{var u=c.return;u===null?G=null:(G=u,Iu(u))}break b}}q=0,Hl=null,Fu(e,t,a,5);break;case 6:q=0,Hl=null,Fu(e,t,a,6);break;case 8:Su(),J=6;break a;default:throw Error(s(462))}}Mu();break}catch(t){wu(e,t)}while(1);return na=ta=null,w.H=r,w.A=i,U=n,G===null?(W=null,K=0,ui(),J):0}function Mu(){for(;G!==null&&!Pe();)Nu(G)}function Nu(e){var t=Lc(e.alternate,e,Kl);e.memoizedProps=e.pendingProps,t===null?Iu(e):G=t}function Pu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=xc(n,t,t.pendingProps,t.type,void 0,K);break;case 11:t=xc(n,t,t.pendingProps,t.type.render,t.ref,K);break;case 5:Fo(t);default:Gc(n,t),t=G=xi(t,Kl),t=Lc(n,t,Kl)}e.memoizedProps=e.pendingProps,t===null?Iu(e):G=t}function Fu(e,t,n,r){na=ta=null,Fo(t),Ba=null,Va=0;var i=t.return;try{if(sc(e,i,t,n,K)){J=1,nc(e,Oi(n,e.current)),G=null;return}}catch(t){if(i!==null)throw G=i,t;J=1,nc(e,Oi(n,e.current)),G=null;return}t.flags&32768?(A||r===1?e=!0:Wl||K&536870912?e=!1:(Ul=e=!0,(r===2||r===9||r===3||r===6)&&(r=fo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Lu(t,e)):Iu(t)}function Iu(e){var t=e;do{if(t.flags&32768){Lu(t,Ul);return}e=t.return;var n=Uc(t.alternate,t,Kl);if(n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);J===0&&(J=5)}function Lu(e,t){do{var n=Wc(e.alternate,e);if(n!==null){n.flags&=32767,G=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){G=e;return}G=e=n}while(e!==null);J=6,G=null}function Ru(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Uu();while(Y!==0);if(U&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=li,ct(e,n,a,o,c,l),e===W&&(G=W=null,K=0),su=t,ou=e,cu=n,lu=a,uu=i,du=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Zu(Be,function(){return Wu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=w.T,w.T=null,i=T.p,T.p=2,o=U,U|=4;try{cl(e,t,n)}finally{U=o,T.p=i,w.T=r}}Y=1,zu(),Bu(),Vu()}}function zu(){if(Y===1){Y=0;var e=ou,t=su,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=U;U|=4;try{bl(t,e);var a=zd,o=Lr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ir(s.ownerDocument.documentElement,s)){if(c!==null&&Rr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Fr(s,h),v=Fr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{U=i,T.p=r,w.T=n}}e.current=t,Y=2}}function Bu(){if(Y===2){Y=0;var e=ou,t=su,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=U;U|=4;try{ll(e,t.alternate,t)}finally{U=i,T.p=r,w.T=n}}Y=3}}function Vu(){if(Y===4||Y===3){Y=0,Fe();var e=ou,t=su,n=cu,r=du;t.subtreeFlags&10256||t.flags&10256?Y=5:(Y=0,su=ou=null,Hu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(au=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=w.T,i=T.p,T.p=2,w.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{w.T=t,T.p=i}}cu&3&&Uu(),id(e),i=e.pendingLanes,n&261930&&i&42?e===pu?fu++:(fu=0,pu=e):fu=0,ad(0,!1)}}function Hu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,_a(t)))}function Uu(){return zu(),Bu(),Vu(),Wu()}function Wu(){if(Y!==5)return!1;var e=ou,t=lu;lu=0;var n=pt(cu),r=w.T,i=T.p;try{T.p=32>n?32:n,w.T=null,n=uu,uu=null;var a=ou,o=cu;if(Y=0,su=ou=null,cu=0,U&6)throw Error(s(331));var c=U;if(U|=4,Ll(a.current),kl(a,a.current,o,n),U=c,ad(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,a)}catch{}return!0}finally{T.p=i,w.T=r,Hu(e,t)}}function Gu(e,t,n){t=Oi(n,t),t=ic(e.stateNode,t,2),e=Qa(e,t,2),e!==null&&(st(e,2),id(e))}function X(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(au===null||!au.has(r))){e=Oi(n,e),n=ac(2),r=Qa(t,n,2),r!==null&&(oc(n,r,t,e),st(r,2),id(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Gl=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,W===e&&(K&n)===n&&(J===4||J===3&&(K&62914560)===K&&300>Ie()-tu?!(U&2)&&Cu(e,0):Yl|=n,Zl===K&&(Zl=0)),id(e)}function Ju(e,t){t===0&&(t=at()),e=pi(e,t),e!==null&&(st(e,t),id(e))}function Yu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Xu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),Ju(e,n)}function Zu(e,t){return Me(e,t)}var Qu=null,$u=null,ed=!1,td=!1,nd=!1,rd=0;function id(e){e!==$u&&e.next===null&&($u===null?Qu=$u=e:$u=$u.next=e),td=!0,ed||(ed=!0,dd())}function ad(e,t){if(!nd&&td){nd=!0;do for(var n=!1,r=Qu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=K,a=nt(r,r===W?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,ud(r,a))}r=r.next}while(n);nd=!1}}function od(){sd()}function sd(){td=ed=!1;var e=0;rd!==0&&Gd()&&(e=rd);for(var t=Ie(),n=null,r=Qu;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?Qu=i:n.next=i,i===null&&($u=n)):(n=r,(e!==0||a&3)&&(td=!0)),r=i}Y!==0&&Y!==5||ad(e,!1),rd!==0&&(rd=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=W,n=K,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(q===2||q===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=ld.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(Y!==0&&Y!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Uu()&&e.callbackNode!==n)return null;var r=K;return r=nt(e,e===W?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_u(e,r,t),cd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Uu())return null;_u(e,t,!0)}function dd(){Yd(function(){U&6?Me(Re,od):sd()})}function fd(){if(rd===0){var e=ba;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),rd=e}return rd}function pd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function md(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function hd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=pd((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?pd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rd!==0){var e=o?md(i,o):new FormData(i);As(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?md(i,o):new FormData(i),As(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var gd=0;gd<ii.length;gd++){var _d=ii[gd];ai(_d.toLowerCase(),`on`+(_d[0].toUpperCase()+_d.slice(1)))}ai(Xr,`onAnimationEnd`),ai(Zr,`onAnimationIteration`),ai(Qr,`onAnimationStart`),ai(`dblclick`,`onDoubleClick`),ai(`focusin`,`onFocus`),ai(`focusout`,`onBlur`),ai($r,`onTransitionRun`),ai(ei,`onTransitionStart`),ai(ti,`onTransitionCancel`),ai(ni,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var vd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),yd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(vd));function bd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){oi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){oi(e)}i.currentTarget=null,a=c}}}}function Z(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(wd(t,e,2,!1),n.add(r))}function xd(e,t,n){var r=0;t&&(r|=4),wd(n,e,r,t)}var Sd=`_reactListening`+Math.random().toString(36).slice(2);function Cd(e){if(!e[Sd]){e[Sd]=!0,At.forEach(function(t){t!==`selectionchange`&&(yd.has(t)||xd(t,!1,e),xd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sd]||(t[Sd]=!0,xd(`selectionchange`,!1,t))}}function wd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Td(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Et(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),o=[];a:{var s=ri.get(e);if(s!==void 0){var c=jn,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:c=Yn;break;case`focusin`:u=`focus`,c=Bn;break;case`focusout`:u=`blur`,c=Bn;break;case`beforeblur`:case`afterblur`:c=Bn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Zn;break;case Xr:case Zr:case Qr:c=Vn;break;case ni:c=Qn;break;case`scroll`:case`scrollend`:c=Nn;break;case`wheel`:c=$n;break;case`copy`:case`cut`:case`paste`:c=Hn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Xn;break;case`toggle`:case`beforetoggle`:c=er}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Ed(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?Et(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Rn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Xn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Ot(c),h=u==null?s:Ot(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Od,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&kd(o,s,c,d,!1),u!==null&&f!==null&&kd(o,f,u,d,!0)}}a:{if(s=r?Ot(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=br;else if(mr(s)){if(xr)v=Ar;else{v=Or;var y=Dr}}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&on(r.elementType)&&(v=br):v=kr;if(v&&=v(e,r)){hr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Zt(s,`number`,s.value)}switch(y=r?Ot(r):window,e){case`focusin`:(mr(y)||y.contentEditable===`true`)&&(Br=y,Vr=r,Hr=null);break;case`focusout`:Hr=Vr=Br=null;break;case`mousedown`:Ur=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ur=!1,Wr(o,n,i);break;case`selectionchange`:if(zr)break;case`keydown`:case`keyup`:Wr(o,n,i)}var b;if(nr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ur?cr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ar&&n.locale!==`ko`&&(ur||x!==`onCompositionStart`?x===`onCompositionEnd`&&ur&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,ur=!0)),y=Dd(r,x),0<y.length&&(x=new Un(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=lr(n),b!==null&&(x.data=b)))),(b=ir?dr(e,n):fr(e,n))&&(x=Dd(r,`onBeforeInput`),0<x.length&&(y=new Un(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),hd(o,e,r,n,i)}bd(o,t)})}function Ed(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Ed(e,i,a)),i=vn(e,t),i!=null&&r.push(Ed(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Od(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Ed(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Ed(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ad=/\r\n?/g,jd=/\u0000|\uFFFD/g;function Md(e){return(typeof e==`string`?e:``+e).replace(Ad,`
`).replace(jd,``)}function Nd(e,t){return t=Md(t),Md(e)===t}function Q(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:an(e,r,a);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof a==`function`&&(n===`formAction`?(t!==`input`&&Q(e,t,`name`,i.name,i,null),Q(e,t,`formEncType`,i.formEncType,i,null),Q(e,t,`formMethod`,i.formMethod,i,null),Q(e,t,`formTarget`,i.formTarget,i,null)):(Q(e,t,`encType`,i.encType,i,null),Q(e,t,`method`,i.method,i,null),Q(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Z(`beforetoggle`,e),Z(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,Rt(e,n,r))}}function Pd(e,t,n,r,i,a){switch(n){case`style`:an(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Z(`scroll`,e);break;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[vt]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function $(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Z(`error`,e),Z(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:Q(e,t,a,o,n,null)}}i&&Q(e,t,`srcSet`,n.srcSet,n,null),r&&Q(e,t,`src`,n.src,n,null);return;case`input`:Z(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:Q(e,t,r,d,n,null)}}Xt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Z(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:Q(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(o in Z(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:Q(e,t,o,c,n,null)}en(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Q(e,t,l,r,n,null)}return;case`dialog`:Z(`beforetoggle`,e),Z(`toggle`,e),Z(`cancel`,e),Z(`close`,e);break;case`iframe`:case`object`:Z(`load`,e);break;case`video`:case`audio`:for(r=0;r<vd.length;r++)Z(vd[r],e);break;case`image`:Z(`error`,e),Z(`load`,e);break;case`details`:Z(`toggle`,e);break;case`embed`:case`source`:case`link`:Z(`error`,e),Z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:Q(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Pd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Q(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Q(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&Q(e,t,p,m,r,f)}}Yt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||Q(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&Q(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Q(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&Q(e,t,o,i,r,a)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Q(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Q(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Q(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:Q(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Pd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Pd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Q(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Q(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=T.d;T.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=xu();return e||t}function yf(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?Ms(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),$(t,`link`,e),O(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),$(t,`link`,e),O(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),$(r,`link`,e),O(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=kt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);O(c),$(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),O(a),$(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),O(a),$(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=ve.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=kt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=kt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=kt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),$(t,`link`,n),O(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,O(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),O(r),$(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,O(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),O(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),$(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,O(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),O(i),$(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,O(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),O(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),$(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=vi(3,null,null,t),e.current=a,a.stateNode=e,t=ga(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ya(a),e}function tp(e){return e?(e=gi,e):gi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Qa(e,r,t),n!==null&&(gu(n,e,t),$a(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=pi(e,67108864);t!==null&&gu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=mu();t=ft(t);var n=pi(e,t);n!==null&&gu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,up(e,t,n,r)}finally{T.p=a,w.T=i}}function lp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,up(e,t,n,r)}finally{T.p=a,w.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Td(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}id(a),!(U&6)&&(ru=Ie()+500,ad(0,!1))}}break;case 31:case 13:s=pi(a,2),s!==null&&gu(s,a,2),xu(),ip(a,2)}if(a=dp(r),a===null&&Td(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Td(e,t,r,null,n)}}function dp(e){return e=fn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Et(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Et(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Dt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,As(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,mu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),xu(),t[yt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.8`)throw Error(s(527,Lp,`19.2.8`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=$s,a=ec,o=tc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[yt]=t.current,Cd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=``+new URL(`destination-peace-hero-BkEKPKLR.webp`,import.meta.url).href,f=``+new URL(`ccc-emblem-cool-20261004.svg`,import.meta.url).href,p=`data:image/webp;base64,UklGRvgIAABXRUJQVlA4IOwIAACwJQCdASpgAGAAPpFAmkolo6IhqBVb2LASCWgAzIwKCj/Y8w+Bj3A+v/mPUf5VXQT8wH7Jes/6MP9x6gH9m6jD0AP1V9Nz9rvhI/Zb9yrLm/KdDJ7NUJvkH22/bf2ry9/1HgD8SdQL2P/pN6pAB823gM6hfgb/b8y54EVAD8hf73+8evd/0+Vn6Z/9H+W+A39d/+h60Xrw/df2d/2jYrrNz77mHzkscjdjf9N3Mrdzrd8UrQuhI2b12tY6EIGAUD87/uKVfoPRoullOLOJI1cDb96BWCWlt2bhVUnX3G/bAPwmDo77iJvuJseLLx1JtsavNg3a2v2UZx/fE4QL0bqQEt9LrdV8v50XC19hM8U6/q3AGrWXk97TldE/wwleC+yDYHl969ub0ie+/6rZqDmQv6S72JEAAP7/GkGFWjL/HiDFpq97pgGQOOliDkqICl/ogzBSGvgpZGIof18FwfUpBLprj+DM9fdZ5cQlemwN5HcHn7pt7C+1vssjgejcFyxN8Xwer8Hj/ahiwfGgtaoH+N10jKwnU1obfhDpA08Qv1SCvH1BZxFAcsdajG+Xlh670ru6xEuxUctbSRP9v7GtqUt1N8TJfMZ84bSFjD8um2awaph2v4eQEFlfGBY3H48Ry0OjeXWWEuturPcEXjvCeI1/ZBbxw4i/NKM3ReIs3GdZqLCydvZ3/hMBGxrO4j86hHv8h9AazFYvK/tI43yhwgijwkrAYjoVv5xrQ7pxJ9DDkCJUa+vTU5cWLfbIRU5t0fs/wGPS0wolQClfI/1/ZrxjjHckq0FkUNXf5A7ixjtbG3wrCkLh4ueanFG7CsAoo/QHVaQ256y8oMkhiKvyTcK6wEuX77D14s25j0sENbBTQP7VLH9MM7Yb0b8vgiPyJyFlBplc362wh+WOQG7MLWL5H2XhpVYoJu04e3z9ptjMifRoz479tFk5rZYm45oSpUEnHWuXAJVPIWTEvGHQAd5XwtqHyLvhtDFMBtF7vqKZqhCCRdOrsNJEoK1I+wy57YH0cvIwMBs8OIj0Oe71C5KoXcZSnynA/0vfWo8cavNQ72KEz0PjzGre6mImzz6wvlcgsekeF26bLhX5i5TQUQELfU//ctTjbZI944A4tZRgvKFr2S+37IBQ1kW+/pAH/COCV9p7WESjpC3rsDyyf8mX/Gs9F5zXxbaKxv5KSQ+UqEYONgwLSeTH6BduNl+mr6krWhQrSk/ZlPMIUjBbC4dqk7qIyX2gqe4xKfyEAS02+98jVAz6A3cBLDogA5cXPJvty1o9/4wJ3ZhRtQH7j/WIdqnr1VYNPoircNCv6yY4Ld37eQJEtCm/LHZG2YDoA1rL77+fz30MvG7O4pfiTvnDFoTdUpsOJ/rHFZWIi96qrjT3dGWVrT/2Q1T8X8w1piYED/mGFYeLD9sJBiURmloXeTo82LiDBgqYWmI6bnHxm9eH7YTejCIwmx640MTT1W9Ih37q1JfL7+GWMCypnFD2mlIFdpEyqgOTO1aEpzY73H4PPUHKAZdf2VlsVEsi/xInM4A73V4Jtnf4SpB+K39PreXlwxUxQ2ZIhPwjyNLkqxgRCrMNWRsC7DHl/fA/aO7SS/eaUThsTY7qUjCxW+vmUMzWNlvk8jc+k+ti8r3Y316/nmsHJxnsRWty8XS19rxkGfHqkHbTtdqzvxtUXIWQJk8gh7TDITSUOc+sLKeuSl6gjlTg5tjaRNsCmkhNDOajzKYW4YEMfj5dEW5Spta1QSVLG9haFh7g9tukemIyLFdLsWCBfRleJR+aWrKpDFSuy5C2eKrfaM8pJhhlkQ923IvVOcOINycYWVgDdtyTzaPQzvL7EkG47SWfF+e7sKwxmNGKIDbIvfvnXppqkr6ebWsTICt+gmHGQHNq+peZfk00WqvjAGodBFAba10ofznVDSkcf4akZJgKVPXhgRYSIgBcMtIYpDr+WUiQJJCeLIN6nkaIj7ncT29pj1XOUid1G8nSNrYyI5Qu0K9OQpokaPlXHRFqoy9OsvWt/DkFgTCPtIAH79b67dGaxEKbIolE+1wfGRiSlDaGmSP119Bs2gG1bvzH2oq/Y2jKVp7lokBdJS/myVm+NRtlTRVSfWmjgrt18kcBT/Ntr9zgfewV1Ydkc+G3TZHbxBiUzjNhGOqejkxZJCc0jPCozCV4dRyX35Y+kpfP4R96jnCr/Hn50R5mh6L/fDfZGTFijo+arVHplzGgyAMMz3ElcxNc5dBShUgPM026tsyWmOPZleFKabagrZNXaVo5j1WfFS29w9EBPEcyXn5GL4/ARPyryO7xFKIUK4gFW1+wVDQONz8IQsb6NOW69/wrLriHtWn8cfRmMxEKb/iNrGstRScPhJkoZonp9SDK3/G3x6CnXzvTy3/bzPs/+3fQeZJd3o9L/WIcB5+HvIgWxSuL3DzQBSAlCn0tWEtV4vTSNqjyx7SIwFyS91Tf8n4J5hymG4zpMhqnD8sufQLtQYxB7gcc5qj69tFJuf7D2SFELyzH16YjGAsY1kmKWPCP2MyHmTe1aUt+H5ZpUAyejJACaLrt2R2dspifRfY0Y5+8+/wkK8yyk8aDPnkzPsQJO2rhvtSefmi1P2Os4kfvXwjlH6CTGtal6d14ajurBfEAFpXwL0SI56GKouNxLeCOVjR75DvQoREWfhwbPtwTx2lA3LPPRzaJcZ0/Sfuo/HeAkTNJObI/oLxh0m4dwaotRioVcZkbN+2h3Ne467RGypm7e8qFI6TsDQJWfxlRI770WEelQP49GZsscNAHigdjo+npAOdaGWxJR8S/t6N3BBnia+HRs/z8zjfJsu6M+79M2pWhAryqYHvnaxsX0CZRzneJqvhtOMHLoev75KNEpRid8sIkyFbULkrvYhMqNhDyu2g/ly/WAAT01LlmLAzX9MPGx6OKMvlH9l6j+TlSa0KFFwTFOzTMzeXh+jHF9REaEZJ1VfRbhN6PJ2zyi2Pm9WvLljGbaCkucUiSeUygm5ENwQEm3pQOQjiDvOBdNyggfBiKnf35VpPg1G3c9OAA`,m=[{number:`1`,title:`Jerih moh Yah mah`,category:`Processional Hymn`,lyrics:`English Version

Jerih moh Yah mah
Jerih moh Yah mah
The host of Angels full of joy in
heaven,
The host of Angels,
The host of Angels
They are praising God with joyful
songs in heaven.    Amen

Yoruba Version

Jerih mo yah mah,
Jerih mo yah mah;
Awon Angeli kun f’ayo lorun,
Awon Angeli,
Awon Angeli,
Won nf’orin ayo yin Baba lorun. Amin`},{number:`2`,title:`Yah rah Sarah,`,category:`Lighting of Candles`,lyrics:`English Version

Yah rah Sarah,
Yah rah Samahtah,
Yah rah Sarah,
Yah rah Samahtah,
Kindle the light
Divine from heaven above
Kindle the light
Divine from heaven above.    Amen

Yoruba Version

Yah rah Sarah,
Yah rah Samahtah,
Yah rah Sarah,
Yah rah Samahtah,
E tan fitila,
Mimo lat’orun wa
E tan fitila,
Mimo lat’orun wa. Amin`},{number:`3`,title:`Yah Raman Ih Yah Raman`,category:`Kneeling Hymn`,lyrics:`English Version

Yah Raman Ih Yah Raman
Yah Raman Yah Rah Yah Raman
Oh come unto the Lord
Oh come unto the Lord.  Amen.

Yoruba Version

Yah rah man, Hi Yah rah man
Yah rah man
Yahman, Yah rah man,
Wa kalo s’odo Oluwa; Oluwa,
Wa kalo s’odo Oluwa           Amin`},{number:`4`,title:`Oh Christ, Oh my King`,category:`Kneeling Hymn`,lyrics:`English Version

Oh Christ, Oh my King
I will worship Thee
My Power and my Guiding Light
Holy Thou Holiest.
Amen

Yoruba Version

1. Oh Kristi Oba mi
Emi yio sin O
Agbara ati imole mi
Eni mimo mimo julo.
Amin`},{number:`5`,title:`Let us sinners repent from sins,`,category:`Forgiveness and Repentance`,lyrics:`English Version

1: Let us sinners repent from sins,
Jesus Christ will descend into our
midst,
Let us sinners repent from sins,
Jesus Christ will descend into our
midst,
Where shall we await Jesus that we
might all see Him,
In the Holy Church shall we see Jesus.

2: When Jesus has come,

We will kneel down
St. Michael will descend into our midst
When Jesus has come,
We will kneel down
St. Michael will descend into our midst.
3: When we have When we have knelt
down,
And Michael is come,
Let all sinners ask for forgiveness knelt
down,
And Michael is come,
Let all sinners ask for forgiveness.
Amen

Yoruba Version

1: K’awa elese yiwa pada,
Jesu yio s’okale sinu wa o,
K’awa elese yiwa pada,
Jesu yio s’okale sinu wa o,
Nibo la o duro de Jesu?
Tawa yio fi ri?
N’ile esin la wa o ri Jesu
Nibo la o duro de Jesu?
Tawa yio fi ri?
N’ile esin la wa o ri Jesu

2: Bi Jesu ba de, K’awa wole,
St. Michael yio sokale sinu wa o,
Bi Jesu ba de, K’awa wole,
St. Michael yio sokale sinu wa o

3: T’ aba wole tan, Michael ba de,
K’awa elese wa toro idariji
T’ aba wole tan, Michael ba de,
K’awa elese wa toro idariji. Amin`},{number:`6`,title:`Hear my voice, hear my voice,`,category:`Forgiveness and Repentance`,lyrics:`English Version

1: Hear my voice, hear my voice,
Who else have I in this wretched world?
If at the moment thou forsaketh me,
Who else would receive me?

2: Who else would come to guide me?
Throughout all these my journeys
Thou art my morning shining star
When my brethren have forsaken me,
Jesus will receive me. Amen

Yoruba Version

1: Gbohun mi, gbohun mi,
Tani mo ni laiye osi yi?
Nigbati ‘re ba ko mi sile
Tani yio wa gba mi?

2: Tani yio samona mi?
Ninu irin ajo mi,
Ire ni Irawo didan owuro,
Nigba t’ara ba ko mi sile,
Jesu yio gba mi.              Amin`},{number:`7`,title:`My sins measure,`,category:`Forgiveness and Repentance`,lyrics:`English Version

My sins measure,
Up to sands at sea shore,
Forgive me my sins
That I may rejoice in heaven glory,
Forgive me my sins
That I may rejoice in heaven glory.
Amen

Yoruba Version

Ese mi po,
Bi ‘yarin eti ‘kun
Dariji mi o,
Ki mba le yo ninu Ogo
Dariji mi o,
Ki mba le yo ninu Ogo.          Amin`},{number:`8`,title:`Jesu is calling you, oh come`,category:`Forgiveness and Repentance`,lyrics:`English Version

Jesu is calling you, oh come
Oh sinner come
Jesu will offer prayers for you
Oh sinner come
Jesus will not let you be ashamed
Oh sinner come
Jesus will not let you be ashamed
Oh sinner come

2: Your load is heavy indeed oh come,

Oh sinner come
Jesus will remove your load from you
Oh sinner come
Today you should give your mind to
Him
Oh sinner come
Today you should give your mind to
Him
Oh sinner comes.             Amen

Yoruba Version

1: Jesu l’onpe o tantan,
Mabo elese wa,
Jesu yio gbadura fun o,
Elese wa,
Jesu konije k’oju ti o
Elese wa
Jesu konije k’oju ti o
Elese wa.

2: Eru re wiwo onpe o ma bo

Elese wa,
Jesu yio so eru na kale,
Elese wa,
Loni lo ye ko f’okan re fun,
Elese wa
Loni lo ye ko f’okan re fun,
Elese wa.                      Amin`},{number:`9`,title:`Lord forgive us all sinners,`,category:`Forgiveness and Repentance`,lyrics:`English Version

1: Lord forgive us all sinners,
Lord forgives us all sinners.

2: El Eli forgive us,
Forgive us all sinners.

3: Saint Emus, forgive us,
Lord forgives us all sinners.     Amen

Yoruba Version

1: Dariji awa elese,
Dariji awa elese.

2: E-Eli dariji wa,
Dariji awa elese.

3: St. Emus dariji wa,
Dariji awa elese.      Amin`},{number:`10`,title:`Christ is the King of Glory`,category:`Forgiveness and Repentance`,lyrics:`English Version

Christ is the King of Glory
Christ is the everlasting light,
Kindle thy light in our midst
That we be free from all sins Amen

Yoruba Version

Kristi Oba Ologo,
Kristi Oba Imole,
Tan ‘mole Re s’arin wa,
K’ale bo ninu ese.      Amin`},{number:`11`,title:`Jesus here we come, with all our filth,`,category:`Forgiveness and Repentance`,lyrics:`English Version

Jesus here we come, with all our filth,
Forgive us our sins, and give us our
blessings,
Needy all we are, king of shining light,
Forgive us our sins, and give us Thy
Glory.                         Amen

Yoruba Version

Jesu awa de,
Pel’aimo wa,
Dariji wa o, ko busi fun wa
Alaini ni wa, Oba Imole,
Dariji wa o, kosi se wa l’ogo. Amin`},{number:`12`,title:`Our Father, come and save us all`,category:`Forgiveness and Repentance`,lyrics:`English Version

1: Our Father, come and save us all
We the sinners cry unto thee,
Our dear Father, do come down now
For we the Christians do desist
From our sinful ways forever.

2: Lord Jesus, come and save us all
We the sinners cry unto thee,
Our dear Father, do come down now
For we the Christians do desist

From our sinful ways forever.     Amen

Yoruba Version

1: Baba wa, ko wa gba wa la
Awa elese nke pe O o,
Baba rere dakun wa o
K’awa onigbagbo ka jowo,
Ka yi wa pada laiye.

2: Jesu wa ko wa gba wa la
Awa elese nke pe O o,
Baba rere dakun wa o
K’awa onigbagbo ka jowo,

Ka yi wa pada laiye.            Amin`},{number:`13`,title:`Good behaviour for thee all I pray`,category:`Forgiveness and Repentance`,lyrics:`English Version

1: Good behaviour for thee all I pray
Ye all my entire prophets
Eschew all bitterness and envy
And move nearer to Lord Jesus.

2: Holy Jihmata gives this message
That we all rejoice and rejoice,
Clear your minds from all sinful deed
And move nearer to Christ Jesus. Amen

Yoruba Version

1: Iwa rere mo nt’oro fun yin
Eyin woli mi gbogbo,
E ko iwa ilara kuro,
Ke le sunmo Oluwa.

2: Jihmarta Mimo lo njise yi,
Loni k’eyin ma yo, ma yo,
Ke we gbogbo ese okan yin mo
Ke le sunmo Kristi. Amin`},{number:`14`,title:`Holy, holy is our Lord God`,category:`Forgiveness and Repentance`,lyrics:`English Version

Holy, holy is our Lord God
He taketh charge of all of us sinners
Wonderful all His work are
Holy is our Lord God Holy
With reverence Thy Angels
Sings songs of joy
Father, Son, Holy Spirit
Thy grace plenteous
On the Holy Church.      Amen

Yoruba Version

Mimo, Mimo,
L’Olorun wa,
O boju Re wo sara awa elese
Iyanu nise Re gbogbo,
Mimo, l’Olorun wa Mimo,
Pelu iteriba l’awon Angeli nkorin
Orin iyin didun,
Baba, Omo, Emi Mimo,
Ore-ofe Re gbogbo po,
Lori Ijo Mimo.                 Amin`},{number:`15`,title:`I have seen, I have seen, I have known`,category:`Forgiveness and Repentance`,lyrics:`English Version

I have seen, I have seen, I have known
That the world has blasphemed
Thy living God because of me,
Forgive me, forgive me, forgive me
Creator, forgive me.
Forgive me, forgive me, forgive me
My Father, forgive me.       Amen

Yoruba Version

Motiri, motiri, motimo,
P’aiye ti soro odi,
So Olorun lat’ara mi,
Dariji, dariji, dariji,
Eleda o dariji
Dariji, dariji, dariji
Baba mi o dariji.         Amin`},{number:`16`,title:`Forgiveness of sin we pray`,category:`Forgiveness and Repentance`,lyrics:`English Version

1: Forgiveness of sin we pray
Holy Father, Holy Son,
Forgive us our sin we pray.

2: Thy mercies O Lord we pray
Thy mercies O Lord we pray
Holy Father, Holy Son
Rain Thy mercies upon us.

3: Thy healings O lord we pray

Thy healings O lord we pray
Holy Father, Holy Son,
Put Thy healing hand on us.

4: Thy salvation O Lord we pray
Thy salvation O Lord we pray
Holy Father, Holy Son
Let us see Thy salvation.

5: For Thy blessings Lord we pray
For Thy blessings Lord we pray
Holy Father, Holy Son
Rain Thy blessings upon us.

6: Thy promotion Lord we pray
Thy promotion Lord we pray
Holy Father, Holy Son
Help us gain Thy promotion.

7: Thy protection Lord we pray
Thy protection Lord we pray
Holy Father, Holy Son
Give us protection all day.  Amen

Yoruba Version

1: Idariji ese lantoro
Idariji ese lantoro
Baba Mimo, Omo Mimo,
Ko wa dari ese jiwa.

2: Anu Re lawa ntoro,
Anu Re lawa ntoro,
Baba Mimo, Omo Mimo
Ko wa ranu Re si wa.

3: Iwosan Re lawa ntoro

Iwosan Re lawa ntoro
Baba Mimo, Omo Mimo
Ko wa ran wosan si wa.

4: Igbala Re la ntoro
Igbala Re la ntoro
Baba Mimo, Omo Mimo
Ko wa fi’igbala fun wa.

5: Ibukun Re la ntoro
Ibukun Re la ntoro
Baba Mimo, Omo Mimo
Ko wa ran ‘bukun si wa

6: Igbega Re la ntoro
Igbega Re la ntoro
Baba Mimo, Omo Mimo
Ko wa ran ‘gbega si wa.

7: Abo Re la ntoro
Abo Re la ntoro
Baba Mimo, Omo Mimo
Ko wa d’abo Re bo wa.        Amin`},{number:`17`,title:`I have known that I an a sinner,`,category:`Forgiveness and Repentance`,lyrics:`English Version

I have known that I an a sinner,
O Lord, Father forgive me my sins
cr: Forgive me my sins
I have known that I an a sinner,
O Lord, Father forgives me my sins.
Amen

Yoruba Version

Mo ti mo pelese ni mi
Oluwa Baba dari mi o
cr: Dariji elese,
Mo ti mo p’alaimo ni mi
Oluwa Baba dari mi o.       Amin`},{number:`18`,title:`Forgive me, Thy child O’Father`,category:`Forgiveness and Repentance`,lyrics:`English Version

Forgive me, Thy child O’Father
Before Thee I have come to confess
Forgive me, Thy child O’Father
Forgive me, Thy child O’Father
By my tongue I have sinned against
Thee
By my walking I have sinned against
Thee
By my worship I have sinned against
Thee
By my conducts I have sinned against
Thee
Before Thee I have come to confess
Forgive me, Thy child O’Father
Forgive me, Thy child O’Father.

Amen

Yoruba Version

Dariji emi omo Re Baba,
Mo wa jewo ese mi fun O
Dariji emi omo Re Baba
Dariji emi omo Re Baba
Nipa ahon mo ti se si O o
Nipa irin mo ti se si O o
Nipa esin mo ti se si O o
Nipa iwa mo ti se si O o
Mo wa jewo ese mi fun O
Dariji emi omo Re Baba
Dariji emi omo Re Baba.     Amin`},{number:`19`,title:`Forgive us sinners we are`,category:`Forgiveness and Repentance`,lyrics:`English Version

m : s : m : d : f : m : r:
m:d:d:l:r:r:d:
m:s:m:d:l:r:
m : d : d : -l : -r : d :-

1: Forgive us sinners we are
O Lord the King of light
Forgive us sinners we are
O Jesus that forgiveth

2: O Jesus that forgiveth
O Jesus that forgiveth
He is always behind us
O Jesus that forgiveth.   Amen

Yoruba Version

m : s : m : d : f : m : r:
m:d:d:l:r:r:d:
m:s:m:d:l:r:
m : d : d : -l : -r : d :-

1: Dariji awa elese,
Jesu Oba Imole,
Dariji awa elese,
Jesu Oludariji.

2: Jesu Oludariji
Jesu Oludariji
O mbe lehin wa
Jesu Oludariji.           Amin`},{number:`51`,title:`O the Lord our God, the Lord our`,category:`Service Hymns`,lyrics:`English Version

s : d : r : f : m : -m : l : t : d : l : s
r : m : d: f : m : m : l : r: t
s : d : m : f :r: d:-

1: O the Lord our God, the Lord our
Saviour,
We Thy children calleth on you
Hearken to our prayers.

2: Our Saviour, the Lord of victory,
We Thy children calleth on you
Hearken to our prayers.

3: O ye Heavenly Host ye from heaven
above,
O come and descend in our midst
In this Celestial fold.

4: O ye Host of Angels, rejoice with
exaltation
That I the Lord abide with you
In this Celestial fold.

5: Give us O thy power, in this Celestial
fold

That we might exalt you with it
Till life everlasting.

6: Labour ye ceaselessly to the work of
our saviour
The crown of glory is there for you
On the appointed day.        Amen

Yoruba Version

s : d : r : f : m : -m : l : t : d : l : s
r : m : d: f : m : m : l : r: t
s : d : m : f :r: d:-

1: Oluwa , Oluwa, Oluwa Olugbala,
Awa Ijo Mimo la’torun wa,
Wa f’anu gbo ti wa

2: Olugbala, Oluwa Olusegun,
Awa omo Re nkepe e O,
Wa gbo adura wa.

3: Enyin Ogun Mimo la’torun wa,
E wa lati sokale sinu,
Ijo Mimo yi.

4: Eyin Angel’ e ho iho ayo,
S’emi Oluwa mbe pelu enyin,
Ijo Mimo yi.

5: Fun wa lagbara ninu
Ijo Mimo yi
Kawa le lo fun ogo Re,
Liye ainipekun.

6: Mura si ‘se ‘ise Olugbala
Nitori Ade Iye mbe f’enyin,
Lojo ikehin.                 Amin`},{number:`52`,title:`Lord Jesus our Saviour`,category:`Service Hymns`,lyrics:`English Version

d: m: d: t: l: l: l:
r: f: r: d: t: t: t:
m: s: f: m: r: r: r:
r: r: d: t: d:-

1: Lord Jesus our Saviour
Lord Jesus our Saviour
Jehovah our Saviour
He will hear our cries.

2: Lord Jesus the Living King
Lord Jesus the Living King
Christ Jesus the king of light
He will dwelleth with us.

3: O’ cry to the glorious King
O’ cry to the glorious King
He will hear our cries.

4: The King who forgets not,
The King who forgets not,
The King who forgets not,
His congregation.

5: The holy Angels dwell,
The holy Angels dwell,
The holy Angels dwell,
In the great joy.

6: Praise be to the Holy King,
Praise be to the Holy King,
Glory to the great King,
For His mighty works.

7: O’ ye shout Halleluyah,
O’ ye shout Halleluyah,
O’ ye shout Halleluyah,
With the holy love.        Amen

Yoruba Version

d: m: d: t: l: l: l:
r: f: r: d: t: t: t:
m: s: f: m: r: r: r:
r: r: d: t: d:-

1:Oluwa Olugbala
Oluwa Olugbala
Jehovah Olugbala
Yio si gbo ti wa.

2: Oluwa Oba Iye
Oluwa Oba Iye
Kristi Oba Mimo
O mbe lodo wa.

3: E kepe Oba Ogo
E kepe Oba Ogo
E kepe Oba Iye
Yio si gbo oro wa

4: Oba ti ko gbagbe,
Oba ti ko gbagbe,
Oba ti ko gbagbe,
Ijo Mimo Re,

5: Awon Angeli mbe,
Awon Angeli mbe,
Awon Angeli mbe,
Ninu ayo nla.

6: Iyin fun Oba Mimo,
Iyin fun Oba nla
Ogo ni fun Oba nla
Fun ise Re ni.

7: E ke Halleluya,
E ke Halleluya,
E ke Halleluya,
Pelu ‘fe Mimo.     Amin`},{number:`53`,title:`Christ Jesus here we come,`,category:`Service Hymns`,lyrics:`English Version

1: Christ Jesus here we come,
Listen unto Thy children,
Christ Jesus here we come,
Listen unto Thy children,

2: We shall all worship Thee,
For sparing us our lives,
We shall all worship Thee,
For sparing us our lives,
Christ Jesus here we come,
Listen unto Thy children.       Amen

Yoruba Version

1: Jesu Kristi a de o,
Gbohun awa omo Re,
Jesu Kristi a de o,
Gbohun awa omo Re,

2: Awa yio sin O o
Nitori to da wa si
Awa yio sin O o
Nitori to da wa si
Jesu Kristi a de o,
Gbohun awa omo Re.        Amin`},{number:`54`,title:`Worship, worship the Lord our God,`,category:`Service Hymns`,lyrics:`English Version

Worship, worship the Lord our God,
Worship, worship the Lord our God,
Our only Father,
May the Lord show the world heavenly
glory
That the whole world may all be
trembling,
Under this great power.      Amen

Yoruba Version

Esin, esin Oluwa Olorun
Esin, esin Oluwa Olorun
Baba wa lokan,
K’Olorun f’ogo Orun han aiye
Ki gbogbo aiye le wariri labe agbara na.
Amin`},{number:`55`,title:`Worship, worship the Lord our God,`,category:`Service Hymns`,lyrics:`English Version

1: Worship, worship the Lord our God,
Worship ye devotedly,
Worship, worship the Lord of life.

2: He is the King of kings
That speaks from abode of light
Worship, worship the Lord of light.

3: Chant ye, chant ye Hossanah,
Hossanah is our victory,
Chant ye, chant ye Ho-Ho-Ho-
Hossanah.                     Amen.

Yoruba Version

1: Esin, esin, Olorun,
Esin tokantokan,
Esin, esin, Olorun Iye.

2: On ni Oba awon oba,
To nti ‘nu imole fohun,
Esin, esin, Olorun Imole.

3: E ke, e ke Hossanah,
Hossanah ni segun wa,
E ke, e ke Ho-Ho-Ho-Hossanah.     Amin`},{number:`56`,title:`Yagol Lolah Mariyanga rih yeh`,category:`Service Hymns`,lyrics:`English Version

Yagol Lolah Mariyanga rih yeh
Yagol lolah Mariyeh
Pay homage to the King our Lord
We pay homage to Him.        Amen

Yoruba Version

Yagol Lolah Mariyanga rih yeh,
Yagol lolah Mariyeh,
E foribale fun Oba Oluwa,
Mo foribale fun.           Amin`},{number:`57`,title:`God Almighty, God Almighty`,category:`Service Hymns`,lyrics:`English Version

1: God Almighty, God Almighty

God Almighty, The King of Life.

2: Holy, Holy, Holy
Holy, Holy, Holy
Holy, Holy is the Angle’ King

3: Kneel down for Him,
Kneel down for Him,
Kneel down for Him
King of all people.
I knelt down to Him, I knelt down to
Him knelt down to Him King of all
people.                      Amen

Yoruba Version

1: O-LO-RUN, O-lo-run!

O-lo-run l’Oba Iye

2: Mimo, Mimo, Mimo,
Mimo, Mimo, Mimo,
Mimo, Mimo Oba awon Angeli

3: E wole Fun, e wole Fun,
E wole Fun Oba awa Araiye.
Mo wole Fun, mo wole Fun,
Mo wole Fun, Oba awa Araiye Amin`},{number:`58`,title:`Sing ye, raise your voice in songs,`,category:`Service Hymns`,lyrics:`English Version

Sing ye, raise your voice in songs,
Unto the Lord our King,
That Holy King might redeem us,
In this His holy fold,
That Holy King might redeem us,
And send His heavenly help,
To keep us off all sinful deeds,
And forgive us our sins.         Amen

Yoruba Version

E korin, k’e gborin soke
S’Oba Oluwa mi,
K’Oba Mimo ko gba wa la
Ninu Ijo Mimo yi,
K’Oba Mimo, ko gba wa la
Ko fun wa laranse,
Kopa wa mo kuro ninu ese,
Ko wa dariji wa           Amin`},{number:`59`,title:`Worship ye the Lord in this His Holy`,category:`Service Hymns`,lyrics:`English Version

Worship ye the Lord in this His Holy
Church
The Lord who created the world,
Also descended this Holy Church
Rejoice in this Holy Church
The Lord will be with us,
His grace will be with us
Holy Spirit, descend now,
The Lord shall conquer for us. Amen

Yoruba Version

E sin Oluwa ninu Ijo Mimo yi
Oluwa to da aiye
Lo da Ijo Mimo sile
E yo ninu Ijo Mimo
Oluwa yio pelu wa,
Ore ofe Re yio pelu wa,
Emi Mimo sokale
Oluwa yio segun fun wa. Amin`},{number:`61`,title:`Holy, Holy, Holy,`,category:`Service Hymns`,lyrics:`English Version

s: s: l: l: s: m:
d: d: m: m: r: m
m: s: m: d: m: r
m: d: m: s: m: d: m: r
s: s: l: s: fe: s: s
m: d: m: s: m: d: m: r
s: s: l: s: f: m: r: d

1: Holy, Holy, Holy,
Holy, Holy, Holy,
Holy, Holy, Holy,
Is the Lord divine full of light
Everlasting King
Is the Lord most glorious King
King of Host of Holy Angels.

2: Holy, Holy, Holy,
Holy, Holy, Holy,
Holy, Holy, Holy,
Is the song of adoration
That the Holy Angels
Sing around the Heavenly throne
Praising the creator of heaven and Earth
3: Holy, Holy, Holy,
Holy, Holy, Holy,
Holy, Holy, Holy,
Sing the sun, moon and all the stars
The waves of the sea
And all people of the earth
All bow down before our creator.
Amen

Yoruba Version

s: s: l: l: s: m:
d: d: m: m: r: m
m: s: m: d: m: r
m: d: m: s: m: d: m: r
s: s: l: s: fe: s: s
m: d: m: s: m: d: m: r
s: s: l: s: f: m: r: d

1: Mimo, Mimo, Mimo,
Mimo, Mimo, Mimo
Mimo, Mimo, Mimo
L’Olorun kiki Imole
Oba aiye-raiye
Ologo didan julo
Oba awon Angeli Mimo

2: Mimo, Mimo, Mimo,
Mimo, Mimo, Mimo
Mimo, Mimo, Mimo
L’ohun orin iteriba
T’awon Angeli mimo n’ko yi agbala orun

3: Mimo, Mimo, Mimo,
Mimo, Mimo, Mimo
Mimo, Mimo, Mimo
K’orun Osupa irawo
Efufu okun ati gbogbo
Eda, alaiye wole,
Niwaju Eleda wa.                 Amin`},{number:`62`,title:`Jesus I shall worship Thee`,category:`Service Hymns`,lyrics:`English Version

Jesus I shall worship Thee
Jesus I shall worship Thee
In this Holy place
Amidst thy great church
I shall worship Thee until end
I shall carry home thy blessing. Amen

Yoruba Version

Jesu, emi o sin O
Jesu, emi o sin O
Nibi mimo yi, larin Ijo nla Re
Emi o sin O, titi dopin,
Emi yio mu bukun re le.        Amin`},{number:`63`,title:`Sing ye raise your voices in songs`,category:`Service Hymns`,lyrics:`English Version

d: d: m: s: l: s: l: m
m: m: s: m: r: d: r: m
m: m: r: m: r
m: m: s: m: m: r: d: r: m
m: m: d: r: d

Sing ye raise your voices in songs
Holy, Holy from heaven above
Is worthy and good
Holy, Holy from heaven above
Is worthy and good.              Amen

Yoruba Version

d: d: m: s: l: s: l: m
m: m: s: m: r: d: r: m
m: m: r: m: r
m: m: s: m: m: r: d: r: m
m: m: d: r: d

E korin ke gbe ’rin soke
Mimo, mimo lat’Orun wa
O dara pupo
Mimo, mimo lat’Orun wa
O dara pupo.                 Amin`},{number:`64`,title:`We come before you today,`,category:`Service Hymns`,lyrics:`English Version

We come before you today,

Our heavenly Father,
Open thy door of mercy,
For we thy chosen ones,
Open thy door of mercy,
For we thy chosen ones,
Send the Angels of victory
From heaven above to us
Look on us with mercy
We calleth unto Thee
Look on us with mercy
We calleth unto Thee.      Amen

Yoruba Version

A wa siwaju Re loni,

Baba wa Orun,
Silekun anu Re sile,
F’ awa iranse Re,
Silekun anu Re sile,
F’ awa iranse Re,
Ran Maleka
Ajagunsegun ode orun si wa o,
Boju anu Re wo wa o,
Awa nkepe O,
Boju anu Re wo wa o,
Awa nkepe O.                  Amin`},{number:`65`,title:`Thy power,`,category:`Service Hymns`,lyrics:`English Version

Thy power,
The power of righteousness that is
perfect
Who are we to worship?
Who are we to worship?
In Celestial,
In Celestial,
Jesus we shall worship
Let us go and worship
Let us go and worship
In Celestial,
In Celestial,
Jesus we shall worship.      Amen

Yoruba Version

Agbara na,
Agbara na lododo,
Lododo daju daju
Tani o ye ka sin?
Tani o ye ka sin?
Ni ‘jo Mimo,
Ni ‘jo Mimo,
Jesu lo ye ka sin,
Eje ka lo josin,
Eje ka lo josin,
Ni ‘jo Mimo,
Ni ‘jo Mimo,
Eje ka lo josin.              Amin`},{number:`66`,title:`Holy, Holy, in Jesus name,`,category:`Service Hymns`,lyrics:`English Version

Holy, Holy, in Jesus name,
We exalt Thee in Jesu name,
Holy Spirit come into our midst,
Come and abide with us today.
Amen

Yoruba Version

Mimo, Mimo, l’oruko Jesu
Ajuba Re l’oruko Jesu,
Emi Mimo jowo sokale,
Wa ba wa gbe la sale oni.      Amin`},{number:`67`,title:`Let the Lord come, let Jesus come,`,category:`Service Hymns`,lyrics:`English Version

Let the Lord come, let Jesus come,
Holy Spirit come nearer to us,
We are hearing Thee.           Amen

Yoruba Version

K’ Olorun wa, ki Jesu wa,
Emi Mimo sunmo tosi o,
Awa ngbohun Re.             Amin`},{number:`68`,title:`Spirit, Spirit is the God,`,category:`Service Hymns`,lyrics:`English Version

Spirit, Spirit is the God,
For those who come to worship Him,
Spirit, Spirit is the God,
For those who come to worship Him,

The truthful Spirit
Where we knelt down
The truthful Spirit
Where we knelt down
Come to us Oh Father
Spirit, Spirit is the God,
For those who come to worship Him.
Amen

Yoruba Version

Emi, Emi l’Olorun,
F’awon to wa sin O o,
Emi, Emi, Emi l’Olorun,
F’awon to wa sin O o,

Emi otito nibiti a nwole
Emi otito nibiti a nwole
Tete sunmo wa o Baba,
Tete sunmo wa o Baba,
Emi, Emi l’Olorun,
F’awon to wa sin O o.      Amin`},{number:`69`,title:`Homage we pay on our knees,`,category:`Service Hymns`,lyrics:`English Version

Homage we pay on our knees,
Singing round your Holy Throne,
We prostrate and honour Thee,
Come exalt your children
2: The Redeemer of thy Church,
Glory mighty possessing,
Pour blessing on thy children,
Come and exalt thy church.

3: King of benevolence,
We open palms to pray,
Hear our supplications,
Come and exalt thy church.        Amen

Yoruba Version

1: A wole lori ikun wa,
A korin yi ite Re ka,
A wole a teriba,
Wa gbe omo Re ga.
2: Olugbala Ijo Re,
Ologo Mimo julo,
Wa sure f’awa ti Re,
Wa gbe Ijo Re ga.

3: Oba onibu Ore,
A tewo adura wa,
Wa gbo ohun ebe wa,
Wa gbe Ijo Re ga.           Amin`},{number:`70`,title:`Fara Sali`,category:`Service Hymns`,lyrics:`English Version

s: s: f: m:
s: s: f: m:
d: r: m
d: m: m: r
d: m: m: r
l: t: d

Fara Sali
Fara Sali
Alali
Tira Siso
Tira Siso
Atali.              Amen

Yoruba Version

s: s: f: m:
s: s: f: m:
d: r: m
d: m: m: r
d: m: m: r
l: t: d

Fara Sali
Fara Sali
Alali
Tira Siso
Tira Siso
Atali.                            Amin`},{number:`71`,title:`Fifa se Eli`,category:`Service Hymns`,lyrics:`English Version

s: s: s: f: m
s: s: s: f: m
d: m: m: f
d: m: m: r: d: m: m: r
d: m: m: r: l: t: d

Fifa se Eli

Fifa se Eli
Sala Sali
Asala sa a Safe Sali
Tila feli Asali i.      Amen

Yoruba Version

s: s: s: f: m
s: s: s: f: m
d: m: m: f
d: m: m: r: d: m: m: r
d: m: m: r: l: t: d

Fifa se Eli

Fifa se Eli
Sala Sali
Asala sa a Safe Sali
Tila feli Asali i.   Amin`},{number:`72`,title:`1.Prepare to worship in this Church`,category:`Service Hymns`,lyrics:`English Version

1.Prepare to worship in this Church
The only holy church
This only church that would exist,
For now and forever.
Chorus: Pay homage to the Lord,
Pay homage to the Lord,
Pay homage to the Lord Father
The King of all kings.

2: Prepare to worship in this Church
So we might live in the end
Pay homage to the Lord Father
The King of all kings.
Chorus: Pay homage to the Lord,
Pay homage to the Lord,
Pay homage to the Lord Father
The King of all kings.

3: Our joy, our joy are many,
In this only holy church,
It’s the church that would save the
world,
On the appointed day
Chorus: Pay homage to the Lord,
Pay homage to the Lord,
Pay homage to the Lord Father
The King of all kings.        Amen

Yoruba Version

1: Emura ke sin ni ‘Jo yi
Ijo Mimo kan ni,
Ijo eleyi ni yio wa, titi Aiyeraiye
Chorus: E foribale fun
E foribale fun
E foribale fun Baba,
Oba awon oba.

2: E mura ke sin ni ‘Jo yi
Ka le ye nikehin
E foribale fun Baba, Oba awon oba.
Chorus: E foribale fun
E foribale fun
E foribale fun Baba,
Oba awon oba.

3: Ayo, ayo yio po,
Ninu Ijo Mimo yi,
Ijo yi ni yio gbaiyela,
L’ojo mimo t’awi,
Chorus: E foribale fun
E foribale fun
E foribale fun Baba,
Oba awon oba.                 Amin`},{number:`73`,title:`Holy, Holy, Holy,`,category:`Service Hymns`,lyrics:`English Version

Holy, Holy, Holy,
Holy, Holy, Holy,
Holy, Holy, Holy,
Cry the Holy Ravens
Cry the Holy Ravens
Cry the Holy Ravens
Sing the Holy Doves
Sing the Holy Doves
Sing the Holy Doves.         Amen

Yoruba Version

Mimo, Mimo, Mimo,
Mimo, Mimo, Mimo,
Mimo, Mimo, Mimo,
Leiye iwo nke,
Leiye iwo nke,
Leiye iwo nke,
Ladaba Mimo nko,
Ladaba Mimo nko
Ladaba Mimo nko.             Amin`},{number:`74`,title:`Rejoice, rejoice, rejoice,`,category:`Service Hymns`,lyrics:`English Version

s: d: d: d: r: d:

d: r: r: r: m: r
s: s: m: m: d: s
s: d: d: d: r: d:

1: Rejoice, rejoice, rejoice,
Children of the holy church
Our Father dwells in joy,
Rejoice, rejoice, rejoice.

2: Prepare in this worship
Children of the holy church
This worship shall surpass
Rejoice, rejoice, rejoice.

3: The last period arrives
Children of the holy church
Hold firmly to the Lord
Rejoice, rejoice, rejoice.

4:Worship is in this world
Children of the holy church
Be prepare in this worship
That we might see Father.

5: Resurrection Father
Our Father in Heaven
The trio-glorious one
Rejoice, rejoice, rejoice

6: We all dwelleth in joy
We Angels in Heaven
The joy in Christ Jesus
The joy, the joy, the joy

7: The sheep of Lord Jesus
Labour ye in Father
Your joy shall be many
In the Lord-Christ Jesus.

8: Holy church in heaven
Earthly one ’ll save this world
Labour ye in the Lord
That sheep might multiply.

9: Give glory to the Lord,
Children of the holy church
Glory be to the Father
Glory, glory, glory.        Amen

Yoruba Version

s: d: d: d: r: d:

d: r: r: r: m: r
s: s: m: m: d: s
s: d: d: d: r: d:

1: E yo, eyo, eyo
Enyin omo ’Jo Mimo
Ayo ni Baba wa
E yo, eyo, eyo

2: E mura sesin yi
Enyin omo ’Jo mimo
Esin yi yio bori
E yo, eyo, eyo.

3: Igba ’kehin na de,
Enyin omo ’Jo Mimo
E di Oluwa mu
E yo, eyo, eyo.

4: Aiye yi le sin wa,
Enyin omo ’Jo Mimo
E mura sesin yi
Ke ba le ri Baba
E yo, eyo, eyo.

5: Ajinde ni Baba,
Baba wa orun wa,
Ologo meta ni
E yo, eyo, eyo.

6: Ninu ayo lawa wa,
Awa Maleka Orun
Ayo ninu Kristi
E yo, eyo, eyo.

7: Awon agutan Jesu,
E si ’se Baba nyin
Ayo yin yio si po,
Ninu Kristi Jesu.

8: Ijo Mimo Orun
T’aiye ’yio gba aiye la,
K’aguntan le po si,

9: E f’ogo f’Oluwa
Enyin omo ’Jo Mimo
Ogo ni fun Baba,
Ogo, ogo, ogo.      Amin`},{number:`75`,title:`In vain, in vain, in vain, in vain,`,category:`Service Hymns`,lyrics:`English Version

s: d: r: m: f: m: f: l:
f: m: f: r: d: r: m: d:-

1: In vain, in vain, in vain, in vain,
In vain, in vain is this our world

2: Worship, worship, worship, worship,
Worship Father with thine love

3: Celestial, Celestial,
Celestial from heaven above. Amen

Yoruba Version

s: d: r: m: f: m: f: l:
f: m: f: r: d: r: m: d:-

1: Asan! Asan! Asan! Asan!
Asan! Asan! laiye yi je.

2: E sin, e sin, e sin, e sin,
E sin Baba pelu ife

3: Ijo Mimo, Ijo Mimo,
Ijo Mimo lat’Orun wa   Amin`},{number:`76`,title:`Don’t be in doubt, do not turn back,`,category:`Service Hymns`,lyrics:`English Version

1: Don’t be in doubt, do not turn back,
That thou dost not be like wasted salt,
Those with doubting minds shall not
reach the throne,
The Holy throne before our Father,
That is pavilion with the radiance of
rainbow,
In thine heaven above.

2: With holy heart, and with holy love,
Faith and holy expectations,
Worship the Lord, God of creation,
The world doth pine o ye brethren,
In obedience His followers do abide,
Without iota of doubt.          Amen

Yoruba Version

1: Mase yemeji, mase wehin,
Ki ‘wo ma ba d’iyo obu
Oniyemeji ki yio de bite,
Mimo ni iwaju Baba,
Tafi didan Osunmare se loso,
Ni joba ti Orun.

2: Fi okan Mimo, ife Mimo
Igbagbo, ireti Mimo
Sin Oluwa, Olorun Eleda,
Aiye nlo s’opin ara,
Awon tire si nto lehin larin
Yemeji lai bikita.           Amin`},{number:`77`,title:`The sun and the moon divine light`,category:`Service Hymns`,lyrics:`English Version

1: The sun and the moon divine light
and the stars,
Bow down before the most glorious
King,
The glories of thine holy host of
Angels,
Kindle the light before the creator of
Heaven
Is worthy of praises, thanks and glories.

2: By His words, indeed, the wind came
to exist,
Crown Him now King, sing ye sweet,
Melodies of joy,
That was bestowed unto thee,
Ye host of Angels

Of heavens sacredness by the Saviour’s
love,
From Jesus Christ to ye brethren on the
earth.                          Amen.

Yoruba Version

1: Orun, Osupa, Imole, Irawo,
E wole Niwaju Oga Ogo,
Ogo ara won Maleka mimo
N’tan mole Niwaju eleda Orun
T’iyin ola, ope, ogo ye fun.

2: Nipa oro Re l’ada efufu,
Ese l’oba eko orin ayo didun,
T’ agbe e si yin l’enu u,
Enyin Angeli,
Mimo t’orun nipa ife Olugbala
Jesu Kristi si omo araiye.       Amin`},{number:`78`,title:`Halleluyah heralds my joy,`,category:`Service Hymns`,lyrics:`English Version

d: m: m: d: m: m
d: m: f: s: m: m: m: d: r
s: d: r: m: l: l: t: d
t: l: s: r: m: r: t: d:

Halleluyah heralds my joy,
Thus I receive thine forgiveness,
Anywhere I may be,
Fears not for Jesus abide there. Amen

Yoruba Version

d: m: m: d: m: m
d: m: f: s: m: m: m: d: r
s: d: r: m: l: l: t: d
t: l: s: r: m: r: t: d:

Alleluya ayo loje
Bi mo ti ri dariji gba,
Nibikibi ti mo ba wa,
Ma foya Jesu wa nibe.        Amin`},{number:`79`,title:`Worship ye the Lord in this Holy`,category:`Service Hymns`,lyrics:`English Version

Worship ye the Lord in this Holy
church,
It is a holy church from our Heavenly
Father,
We pray the Lord come to redeem us
sinners,
And count us amongst His chosen one.
Amen

Yoruba Version

Esin Oluwa ninu Ijo Mimo yi,
Ijo kan Mimo ti Baba Orun ni,
K’Oluwa o wa gba awa elese la,
K’ O si kawa fikun awon ayanfe Re. Amin`},{number:`80`,title:`Holy, Holy, Holy`,category:`Service Hymns`,lyrics:`English Version

1: Holy, Holy, Holy
Holy, Holy, Holy
Holy, Holy, Holy
Our Jesus is holy.

2: Bow down to pa homage,
Bow down to pa homage,
Bow down to pa homage,
For Jesus our Saviour.

3: O worship Lord our Saviour,
O worship Lord our Saviour,
O worship Lord our Saviour,
Our Father is Holy.          Amen

Yoruba Version

1: Mimo, Mimo, Mimo
Mimo, Mimo, Mimo
Mimo, Mimo, Mimo
Jesu Kristi Mimo ni

2: E foribale fun
E foribale fun
E foribale fun
Jesu Kristi si omo araiye

3: Esin Olugbala wa
Esin Olugbala wa
Esin Olugbala wa
Mimo ni Baba wa.               Amin`},{number:`81`,title:`O worship the Lord,`,category:`Service Hymns`,lyrics:`English Version

1: O worship the Lord,
O worship the Lord,

Eternal King of great light
Radiant in all glory.

2: Be eager to worship the Lord
In the Celestial Church
Eternal King of great light
Will free us from bondage.

3: Let us worship the Lord
Let us worship the Lord
Eternal King of great light
Will stay with us today.          Amen

Yoruba Version

1: Esin Olorun
Esin Olorun

Oba Imole araiye
Didan ninu gbogbo ogo

2: E mura lati sin Oluwa
Ninu Ijo Mimo
Aiyeraye Oba Imole
Yio gba wa n’u gbekun aiye.

3: E je k’a sin Olorun
E je k’a sin Olorun
Aiyeraye Oba Imole
Yio wa pelu wa loni.          Amin`},{number:`82`,title:`Come worship the Lord,`,category:`Service Hymns`,lyrics:`English Version

Come worship the Lord,
Worship the Lord
Almighty God
I’ll worship the Lord
To obtain the crown
Which Father has promise
His own.                     Amen

Hymns for Palm Sunday

Yoruba Version

E wa sin Olorun
Esin Olorun
Olorun atobi ju
Emi yio sin Olorun
Gb’ade iye naa
Ti Baba ti pese
F’awon T’ire.            Amin`},{number:`114`,title:`Glory be unto the most powerful,`,category:`CCC Hymns`,lyrics:`English Version

1: Glory be unto the most powerful,
Glory be unto the most glorious,
Glory be to the Benevolent
Glory be to Father.

2: Praise be unto the most powerful,
Praise be unto the most glorious,
Praise be to the Benevolent
Praise be to Father.            Amen

Yoruba Version

1: Ogo ni fun Alagbara nla,
Ogo ni fun Ologo julo,
Ogo ni fun Olubukun nla
Ogo ni fun Baba.

2: F’iyin fun Alagbara nla,
F’iyin fun Ologo nla
F’iyin fun Olubukun julo
F’iyin fun Baba.                   Amin`},{number:`126`,title:`Rejoice, rejoice, chant ye, rejoice to`,category:`Palm Sunday`,lyrics:`English Version

Rejoice, rejoice, chant ye, rejoice to
Thy Saviour
Rejoice, rejoice, chant ye, rejoice to
Thy Saviour
The Saviour rides on the ass bound to
the earth
The followers chant
Hossanah of our King
Christ is coming, bow down for Him
Bow down for him
Christ is coming, bow down for Him.
Amen

Yoruba Version

Eyo, eyo, e he, e yo s’Olugbala
Eyo, eyo, e he, e yo s’Olugbala
Olugbala ngesin bo s’ode aiye,
Omo ehin nke
Hossanah s’Oba wa,
Kristi lo mbo, e wole fun,
E wole fun,
Kristi lo mbo, e wole fun.      Amin`},{number:`127`,title:`Jesus Christ rides on the ass`,category:`Palm Sunday`,lyrics:`English Version

Jesus Christ rides on the ass
When the Angels shout Hossanah
Jesus Christ rides on the ass
When the Angels shout Hossanah
O come let us worship,
Jesus is King

O come let us worship,
Jesus is King.                     Amen

Yoruba Version

Jesu logun ketete,
T’awon Angeli nko Hossanah
Jesu logun ketete,
T’awon Angeli nko Hossanah
E wa ka lo josin,
Jesu lo joba,

E wa ka lo josin,
Jesu lo joba.                  Amin`},{number:`128`,title:`Brethren, o come with me`,category:`Palm Sunday`,lyrics:`English Version

1: Brethren, o come with me
To meet the Lord-Jesus Christ,
Brethren, o come with me
To meet the Lord-Jesus Christ,
In Bethlehem,
In the city of joy,
In Bethlehem,
In the city of joy
2: The Angels are dancing,
The Angels are rejoicing,
The Angels are dancing,
The Angels are rejoicing,
They shout Hosanna
To the Son David,
They shout Hosanna
To the Son David.             Amen

Yoruba Version

1: Ara, e ba mi ka lo,
Pade Oluwa mi o,
Ara, e ba mi ka lo,
Pade Oluwa mi o,
Ni Bethelemu,
Ni ilu ayo
Ni Bethelemu,
Ni ilu ayo
2: Awon Angeli njo
Awon Maleka nyo,
Awon Angeli njo
Awon Maleka nyo,
Nwon nke Hossanah,
S’Omo Dafidi,
Nwon nke Hossanah,
S’Omo Dafidi.                     Amin`},{number:`129`,title:`Hosanna from heaven above,`,category:`Palm Sunday`,lyrics:`English Version

Hosanna from heaven above,
With songs of happiness,
Our Saviour’s shall surely come
Without expectation
Give glory to the Lord,
Give glory to the Lord
The host of Angels full of joy
And with praises.               Amen

Yoruba Version

Hossanah l’aroun wa,
Pelu orin ayo,
Olugbala yio pada wa,
Lai ko ni ireti,
E fogo f’Oluwa
E f’ogo f’Oluwa
Awon Angeli kun f’ayo
Pelu iyin.                      Amin`},{number:`130`,title:`Hos-anna, Hos-anna, Hosanna,`,category:`Palm Sunday`,lyrics:`English Version

Hos-anna, Hos-anna, Hosanna,
Jesus loveth me,
He loveth
Hos-anna, Hos-anna, Hosanna,
Jesus loveth me.             Amen.

Yoruba Version

Hoss-anah, Ho-ss-anah, Ho-ss-anah,
Jesu feran mi,
O feran mi o,
Hossi-anah, Hossi-anah, Hossi-anah,
Jesu feran mi.           Amin`},{number:`131`,title:`All ye the world, exalt Jesus`,category:`Palm Sunday`,lyrics:`English Version

d: d: r: m: m: r: r: de: r
r: r: m: m: f: f: m: m: r: m
d: l: s: d: d: r: d

1: All ye the world, exalt Jesus
All ye the world, exalt Jesus,
Angels, bow down for Him

Angels, bow down for Him
Chorus: Bow down for Him

2: Bring ye forth His glories crown,
Bring ye forth His glories crown,
Angels, bow down for Him
Angels, bow down for Him.
Amen

Yoruba Version

d: d: r: m: m: r: r: de: r
r: r: m: m: f: f: m: m: r: m
d: l: s: d: d: r: d

1: Gbogbo aiye, gbe Jesu ga,
Gbogbo aiye, gbe Jesu ga,
Angeli, e wole fun

Angeli, e wole fun
Cr E wole fun.

2: E mu Ade j‘oba Re wa,
E mu Ade j‘oba Re wa,
Angeli, e wole fun.
Angeli, e wole fun.         Amin`},{number:`132`,title:`Hosanna, Hosanna`,category:`Palm Sunday`,lyrics:`English Version

Hosanna, Hosanna
Hosanna the Angels rejoice,
I shall worship thee, with joys that are
profound,
I shall worship thee, with joys that are
profound.                    Amen

Yoruba Version

Hoss-anah, Hoss-anah,
Hoss-anah awon Angeli nyo,
Emi yio sin O, pelu ayo nla nla
Emi yio sin O, pelu ayo nla nla. Amin`},{number:`133`,title:`Join me in giving than to`,category:`Palm Sunday`,lyrics:`English Version

Join me in giving than to
Jerimoyahmah,
Whose covenants and promises are
fulfilled,
The world said is hopeless, my Jesus
says there is hope,
Rejoice with me,
Rejoice with me,
Rejoice with me,
I glorify Jesu.             Amen

Mercy and During Passion Week

Yoruba Version

E ba mi dupe lowo Jerimoyahmo,
To se leri to si mu majemu se,
Aiye lo tan, Jesu mi loku,
E ba mi yo,
E ba mi yo,
E ba mi yo,
Mo yin Baba logo.              Amin

Esin Anu Ojo Irekoja`},{number:`151`,title:`Open Thy mercy gates O Lord,`,category:`Mercy and Passion Week`,lyrics:`English Version

Open Thy mercy gates O Lord,
Open Thy mercy gates O Lord,
We belong to Thee,
We belong to Thee,
We belong to Thee, do not forsake us,
Open Thy mercy gates.     Amen

Yoruba Version

Sileku anu o,
Sileku anu o,
Ire loni wa, Ire loni wa,
Ire loni wa, mase ta wa nu,
Sileku anu o.               Amin`},{number:`152`,title:`Remember me O Lord`,category:`Mercy and Passion Week`,lyrics:`English Version

Remember me O Lord
O Lord please remember me,
When the world doth forsake me,

It’s Lord who remember me,
When the world sets trap for me,
It’s Lord who remember me,
When I am weary and in need,
It’s Lord who remember me,
Chorus: Remember me O Lord
O Lord please remember me,
Remember me O Lord
O Lord please remembers me.
Amen

Yoruba Version

Ranti mi Oluwa,
Oluwa jo ranti mi,
Gba t’aiye ko mi sile,

Oluwa lo ranti mi
Gba t’aiye de kun fun mi
Oluwa lo ranti mi
Gba mo sa laini
Oluwa lo ranti mi
Chorus: Ranti mi Oluwa
Oluwa jo ranti mi
Ranti mi Oluwa
Oluwa jo ranti mi.            Amin`},{number:`154`,title:`Mercy, mercy exits,`,category:`Mercy and Passion Week`,lyrics:`English Version

Mercy, mercy exits,
Holy, Holy exits
Shall meet, shall meet,
In heaven above.             Amen

Yoruba Version

Anu, anu mbe
Mimo, Mimo mbe,
Yio pade, yio pa
L’oke Orun.                  Amin`},{number:`155`,title:`Thy mercy, we request O Lord,`,category:`Mercy and Passion Week`,lyrics:`English Version

Thy mercy, we request O Lord,
Open Thy mercy gates
For us poor helpless sinners,
We pray Thee frequently.      Amen

Yoruba Version

Anu Re Baba mo ‘toro
Silekun anu Re sile,
Fawa otosi elese,
A nkepe O tantan                Amin`},{number:`156`,title:`Our Saviour we come again,`,category:`Mercy and Passion Week`,lyrics:`English Version

1: Our Saviour we come again,
Hearken unto us O Father,
Jesus Christ our Saviour
Save us all from earthly perils.

2: We stood on our Jesus Christ,
Teach us how it’s been done in heaven,
Send down Thy holy Angels
So we might conquer Satan on earth.
Amen

Yoruba Version

1: Olugbala awa tun de,
Yonu si wa o Baba ye,
Jesu Kristi Olugbala
Gba wa logun ajakaiye.

2: A duro lori Kristi wa,
Ko wa ba ti nse li orun
Ran Maleka Re sokale,
Ka le bori esu laiye.        Amin`},{number:`157`,title:`Jesus our Lord and Redeemer,`,category:`Mercy and Passion Week`,lyrics:`English Version

1: Jesus our Lord and Redeemer,
Open Thy door of mercy for us,
That thy heavenly host might come in,
Halleluya, Halleluya,
Halleluya be in our mouths.

2: Holy archangel the great captain,
Watching out by the gate of heaven
To caution all the evil spirit,
So that we might be saved that day,

Jehovah He is alive
Jehovah He is alive
Jehovah He is alive.

3: Christ our Lords’ established on the
rock,
He call us to stand on the rock,
Whoever is established firmly,
Thus shall behold Christ in the end,
Jesus Christ, He is Holy
Jesus Christ, He is Holy
Ye shall behold Christ in the end.
Amen

Yoruba Version

1: Jesu wa, Oluwa, Olugbala,
Si lekun anu Re fun wa,
K’awon Ogun Orun Re wole wa,
Halleluya ni orin wa,
Halleluya, Halleluya
Halleluya mbe lenu wa.

2: Maleka Mimo Oga Ogun,
O mbe lenu ;bode orun,
Lati ba gbogbo emi esu wi,

Ka le riye gba lojo na,
Jehovah Mimo mbe,
Jehovah Mimo mbe,
Jehovah Mimo mbe

3: Kristi wa duro lori apata,
O npe wa ka duro lor’ apata,
Enit’o ba duro lori Re,
Ni yio ri, Kristi ni kehin,
Jesu wa Mimo ni,
Kristi wa Mimo ni
E o ri Jesu nikehin.     Amin`},{number:`158`,title:`Jesus my great assistant,`,category:`Mercy and Passion Week`,lyrics:`English Version

1: Jesus my great assistant,
Who else have I in this world,
But only you Holy Father.

Move closer to me in Spirit,
In humility I bow,
May I not go empty handed.

3: Holy Michael from Heaven,
Relieve me of this burden
And save me the great warrior.
Amen

Yoruba Version

1: Jesu Olugbowo mi,
Tani mo ni laiye yi,
Bi ko se Re Baba Mimo

2: Sunmo mi pe’lu Emi mo,
Mo teriba ‘waju Re,
Ma je ki nlo lowo ofo,

3: Miakeli mimo ode-Orun
Wa so eru mi ka le,
Gba mi ajagun segun.            Amin

O rin Ajinde`},{number:`176`,title:`Father from heaven authorizes,`,category:`Easter`,lyrics:`English Version

1: Father from heaven authorizes,
That the whole world may all tremble,
For Celestial Church from above,
The fold to purify the world,
Witches, wizards will all tremble
Beneath this new power divine,
Angels are filled with happiness,
We marvel at this last ship,
Halleluyah for all the works of God.

2: The last period is approaching,
Christ Jesus will surely return,
Yo give judgement to all the world,
His death upon the wooden cross,
Blood and water that both flowed

Out of His punctured sacred side
Must not be made to flow in vain,
All eyes will surely behold Him
And all the Host of His Holy Angels.

3: All sinners should be repentant,
For that great day, a trembling day,
The Angels will blow their trumpets
Earth and heaven shall be rolled away,
Oceans will all seize to exist
And all the dead will resurrect
Some with happiness exceeding,
Others will have great afflictions
Sinners will really tremble on that day

4: Those who died for the words of
Christ,
Those who carried His wooden cross
Will resurrect with great glory,
They will be cloaked with glorious
gown,
They we crowned with golden crowns
With tender palm fronds in their hands,
They will fly up to meet Their Christ
Weariness will they know no more
Halleluyah the voices all proclaim.
Amen

Yoruba Version

1: Baba pa lase lat’orun wa,
Ki gbogbo aiye si wariri,
Fun ‘jo Mimo, lat’Orun wa,
Ijo yi ni yio we aiye mo,
Aje , oso, yio wariri,
La’abe agbara Mimo yi,
Awon Angeli si kun f’ayo,
Iyanu, f’oko ikehin,
Halleluya fun ise Oluwa.

2: Igba ikehin na ti de,
Kristi Jesu yio pada wa,
Lati wa se ‘dajo aiye,
Iku Re lori agbelebu,
Eje ati omi to nsan,

Kuro ninu iha Mimo Re,
Ko gbodo lo sori asan,
Gbogbo oju yio si tun ri,
Pelu awon Angeli Mimo Re.

3: Kelese ronupiwada,
F’ojo iwariri nla na,
Awon Angeli yio fun ipe,
A o ka ile at’Orun,
Okun yio d’ohun airi mo,
Awon oku yio ji dide,
Imiran pelu ayo nla,
Imiran pelu ijiya,
Elese yio wariri lojo na.

4: Awon toku f‘oro Kristi,
Awon t’o ru agbelebu Re,
Nwon yio ji pelu ogo nla,
A o wo won laso ogo,
A o de won lade wura,
Mariwo ope lowo won,
Nwon yio fo pade Kristi won,
Are ki yio si fun won mo,
Halleluya, li ohun orin won.     Amin`},{number:`177`,title:`Christ our Father has risen today,`,category:`Easter`,lyrics:`English Version

s: d: t: l: s: d: m: r: d
d: m: r: l: d: m: r: l
d: d: t: d: r: d: r

1: Christ our Father has risen today,
Halleluyah, Halleluyah
To the most glorious King.

2: Glory be to the Trinity,
Halleluyah, Halleluyah
To the most glorious King.

3: Celestians bow down for the Holy
King,
Halleluyah, Halleluyah
To the most glorious King

4: All the host of Angels are
Singing Hosanna
Halleluyah, Halleluyah

To the most glorious King.

5: Chris is adored with the greatest of
wealth
Halleluyah, Halleluyah
To the most glorious King.

6: He is coming to give judgement to
the world
His majesty, His Majesty,
Most glorious King.         Amen

Yoruba Version

s: d: t: l: s: d: m: r: d
d: m: r: l: d: m: r: l
d: d: t: d: r: d: r

1: Kristi Baba wa jinde loni,
Halleluya, Halleluyah
S’Oba Oga Ogo.

2: Ogo ni fun Metalokan Halleluyah
Halleluyah, Halleluyah,
S’Oba Oga Ogo.

3: Ijo Mimo, e wole f’Oba Mimo
Halleluyah, Halleluyah,
S’Oba Oga Ogo.

4: Opo awon Maleka won
Nke Hossanah,
Halleluyah, Halleluyah,
S’Oba Oga Ogo.

5: Olanla ni Kristi wo ni aso
Halleluyah, Halleluyah,
S’Oba Oga Ogo.

6: O mbo kakan,
Lati wa se dajo aiye,
Kabiyesi! Kabiyesi!!
Oba Oga Ogo.                     Amin`},{number:`178`,title:`On the day o resurrection`,category:`Easter`,lyrics:`English Version

s:s d:m:r:d
t:d:r:d: t:l:s
s:s d:m:r:d
t:d:r:d: t:l:s
m : f :s : s : m : d : m : r
d : d :r : d:-
m:r:d:d:l:d:s:s
d : d :r : d:-
m : f :s : s : m : d : m : r
d : d :r : d:-
m : f :s : s : m : d : m : r
d : d :r : d:-

On the day o resurrection
Jesus Christ is coming,
On the day o resurrection
Jesus Christ is coming,
We shall joyfully receive Him,
Chorus: On that day
We shall never retrace our step
On that day,
We shall celebrate joy on that day
Oh Jesus Christ is coming
On that day.                      Amen

Yoruba Version

s:s d:m:r:d
t:d:r:d: t:l:s
s:s d:m:r:d
t:d:r:d: t:l:s
m : f :s : s : m : d : m : r
d : d :r : d:-
m:r:d:d:l:d:s:s
d : d :r : d:-
m : f :s : s : m : d : m : r
d : d :r : d:-
m : f :s : s : m : d : m : r
d : d :r : d:-

Ni ojo Ajinde
Jesu Kristi mbo wa,
Ni ojo Ajinde
Jesu Kristi mbo wa,
Awa yio yo, lo pade Re,
Chorus: L’ojo na,
Awa ko ni b’oju wehin,
Lojo na,
Awa yio l’ayo lojo na,
Lojo na,
Jesu Kristi to mbo wa o,
Lojo na.                       Amin`},{number:`179`,title:`Jesus lives forevermore,`,category:`Easter`,lyrics:`English Version

Jesus lives forevermore,
He lives forevermore,
He sets free those in bondage
Jesus lives forevermore,
He makes the cripple to walk,
Jesus lives forevermore,
He lives forevermore,
Jesus lives for-ever-more

He sends forth rain of blessing
Jesus lives for-ever-more
Yes He lives for-ever-more
Jesus lives forevermore.            Amen

Yoruba Version

Jesu ye titi aiye,
O ye titi aiye,
O tun onde dide e,
Jesu ye titi aiye,
O gbe aro dide e,
Jesu ye titi
O ye titi aiye,
Jesu ye titi aiye,

O se iri ‘bukun sile e,
Jesu ye titi aiye,
O ye titi aiye,
Jesu ye titi aiye.              Amin`},{number:`180`,title:`Halleluyah! Christ has risen`,category:`Easter`,lyrics:`English Version

m:s:m:d:d:r:f:m
m:s:m:d:d:r:d
m :s : m : d : d : r : f : m
m:r:d:s:d:r:r:d

Halleluyah! Christ has risen
Halleluyah! Halleluyah!
Christ is risen Halleluyah!
Halleluyah! Halleluyah.      Amen

Yoruba Version

m:s:m:d:d:r:f:m
m:s:m:d:d:r:d
m :s : m : d : d : r : f : m
m:r:d:s:d:r:r:d

Halleluya! Kristi jinde
Halleluya! Halleluya!
Kristi jinde, Halleluya!
Halleluya! Halleluya.          Amin`},{number:`181`,title:`Praise ye, praise ye, the God of light,`,category:`Easter`,lyrics:`English Version

1: Praise ye, praise ye, the God of light,
Praise ye, praise ye, the glorious Lord,
He rejoice with us every time,
Rejoice all ye brethren in Celestial,
Chorus: He has rise, He has risen
With the greatest happiness.

2: Praise ye, praise ye King of all the
angels,
Jesus enter; bow down for Him,
Halleluyah to the glorious Trinity,
Exalt Him the King who dwells in light
Chorus: He has rise, He has risen
With the greatest happiness.

3: Halleluyah to the resurrection day,
Christ has risen, chant and cry for joy,
Sinners trembled on His resurrection,
Be prepared, Jesus has come, He has
come,
Chorus: He has rise, He has risen
With the greatest happiness.

4: Bless us all the Lord of resurrection,
So our living might not be in vain,
Illuminate us to your glorious home
So we, You and Father might be one,
Chorus: He has rise, He has risen
With the greatest happiness.
Amen

Yoruba Version

1: E yin , e yin, Olorun Imole,
E yin, e yin, Oga Ogo,
Nigba gbogbo, o nyo pelu wa,
E tujuka e yin Ijo Mimo,
Chorus: Ji ji l’oji, ji, ji l’oji
Pelu ayo nla, nla, nla.

2: E yin , e yin Oba awon Angeli,
Jesu wole, e wole fun,
Halleluya fun Ologo Meta,
E gbe ga, Oba inu Imole
Chorus: Ji ji l’oji, ji, ji l’oji
Pelu ayo nla, nla, nla.

3: Halleluya fun ojo Ajinde,
Kristi jinde, e ho fun ayo,
Elese ngbo l’ojo ajinde Re,
E mura de, Jesu de, O ti de,
Chorus: Ji ji l’oji, ji, ji l’oji
Pelu ayo nla, nla, nla.

4: Sure fun wa Oluwa ajinde,
Ki dasi wa ma se je lasan,
S’imole wa de le Ogo Re,
K’awa, Ire, Baba le je okan
Chorus: Ji ji l’oji, ji, ji l’oji
Pelu ayo nla, nla, nla.           Amin`},{number:`183`,title:`Life evermore, we have life evermore`,category:`Easter`,lyrics:`English Version

1: Life evermore, we have life evermore
Our loving God He is breathing,
He breathes of life on us.

2: From holy heaven,
Angels sing joyful songs
Hosanna glory bo our song
In this Celestial Church.     Amen

Yoruba Version

1: Iye! Iye! Iye! ni ti wa,
Oluwa Olufe,
O fe iye si wa.

2: Lat’orun Mimo, nwon nko orin ayo,
Hossanah, Ogo la o ma ko
Ni ‘nu Ijo Mimo.         Amin`},{number:`184`,title:`Christ has risen Halleluyah`,category:`Easter`,lyrics:`English Version

m: m: m: m: r: d: f: f: m:
s: s: f: m: r: r: r: d

1: Christ has risen Halleluyah
Halleluyah! Halleluyah! Halleluyah!

2: Celestial bow down for worship,
Halleluyah! Halleluyah! Halleluyah!

3: The host of Angels are singing
Halleluyah
Halleluyah! Halleluyah! Halleluyah!

4: Hark ye to the Angels singing
Halleluyah
Halleluyah! Halleluyah! Halleluyah

5: Glory to the glorious Trinity
Halleluyah! Halleluyah! Halleluyah!
Christ has risen.
Amen

Yoruba Version

m: m: m: m: r: d: f: f: m:
s: s: f: m: r: r: r: d

1: Kristi jinde Halleluya
Halleluya! Halleluya! Halleluya!

2: Ijo Mimo e wole fun sin,
Halleluya! Halleluya! Halleluya!

3: Awon Ogun orun nko wipe Halleluya
Halleluya! Halleluya! Halleluya!

4: E gbo b’awon Angeli ti nke Halleluya
Halleluya! Halleluya! Halleluya!

5: Ogo ni Ologo Meta Halleluya
Halleluya! Halleluya!
Kristi jinde.               Amin`},{number:`185`,title:`Praise ye the Lord God Halleluyah,`,category:`Easter`,lyrics:`English Version

Praise ye the Lord God Halleluyah,
Praise ye the Lord God Halleluyah,
Creator of Heaven,
His works and deed are miraculous
Halleluyah
King of all kings Halleluyah
Omnipotent God Halleluyah
Come let us worship in Celestial
Church
Halleluyah
Come let us worship with reverence,
Let us worship in awe

He is now the King Halleluyah
Over the Satan, Halleluyah
Shout Halleluyah, all people in the
world.
Amin

Yoruba Version

E yin Oluwa Halleluya,
E yin Oluwa Halleluya,
Eleda Orun,
Iyanu ni ise Re gbogbo Halleluya,
Oba awon Oba Halleluya,
Oluse ohun gbogbo Halleluya,
Ewa, k’ajo sin ninu Ijo Mimo Halleluya,
E wa k’asin pelu iteriba,
K’asin pelu ibowo,
O si ti j’Oba Halleluya,
Losi Satani Halleluya,
E ke Halleluya, enyin araiye.    Amin`},{number:`186`,title:`Celestial Church ye burst with joy,`,category:`Easter`,lyrics:`English Version

m: m: m: m: r: r: m: d: s
d: d: d: d: t: d: r
m: m: m: r: d: l: s: d
d: d: d: t: d: r: d

1: Celestial Church ye burst with joy,
The day of our joy now cometh
Jesus died and now lives forever
That we might live forever.
Chorus: Ah! Jesus liveth and now is
King
He reigns is incomparable
His crown is incomparable
Was made of beauty of sun and moon.

2: To accomplish you wish truthfully
That joyful promise be fulfilled
So also may thine vineyard be full
With fruits filled with hearty love.
Chorus: Ah! Jesus liveth and now is
King
He reigns is incomparable
His crown is incomparable
Was made of beauty of sun and moon.

3: To untie all the bonds of Satan
That we were all taken captives
We have been soothed by hands of
power
In captivity of Satan.
Chorus: Ah! Jesus liveth and now is
King
He reigns is incomparable
His crown is incomparable
Was made of beauty of sun and moon.
Amen

Yoruba Version

m: m: m: m: r: r: m: d: s
d: d: d: d: t: d: r
m: m: m: r: d: l: s: d
d: d: d: t: d: r: d

1: Ijo Mimo e ho f’ayo
Ojo ayo wa si ti de
Jesu ku, O si ye e titi aiye
Lati mu wa ye e titi aiye.
Chorus: A! Jesu ti ye e, O ti joba,
O joba titi aiye,
Ade Re ko lala fiwe,
T’afewa, Orun, Osupa se.

2: Ka mu fe Re se toto toto,
Ki ‘leri ayo na le se,
K’ogba ajara Re le kun,
F’eso ife atokan wa,
Chorus: A! Jesu ti ye e, O ti joba,
O joba titi aiye,
Ade Re ko lala fiwe,
T’afewa, Orun, Osupa se.

3: Ki gbogbo ipa esu le tu,
T’o fi de wa nigbekun ri,
Ati f’owo agbara tu wa,
Ninu igbekun esu.
Chorus: A! Jesu ti ye e, O ti joba,
O joba titi aiye,
Ade Re ko lala fiwe,
T’afewa, Orun, Osupa se.            Amin`},{number:`187`,title:`When we sees Jesus`,category:`Easter`,lyrics:`English Version

When we sees Jesus
What signs would we use to recognise

Jesu
Signs of nailing on His palm and His
soles,
Signs of nailing on His palm and His
soles.                           Amen

Yoruba Version

T’a ba f’oju kan Jesu,
Ami wo la o fi mo,

Ami iso wa lowo at’ese Re,
Ami iso wa lowo at’ese Re.     Amin`},{number:`188`,title:`Jesus died for the world,`,category:`Easter`,lyrics:`English Version

d: r: m: m: m
d: r: m: m: m
s: s: m: f: m: r
l: t: d: d: d

1: Jesus died for the world,
Jesus died for the world,
The world be converted
Jesus died for the world.

2: Sins overcome the world,
Sins overcome the world,
The world be converted
Jesus died for the world.        Amen

Yoruba Version

d: r: m: m: m
d: r: m: m: m
s: s: m: f: m: r
l: t: d: d: d

1: Jesu ku fun aiye
Jesu ku fun aiye
Aiye e yi pada o;
Jesu ku fun aiye

2: Ese bori aiye,
Ese bori aiye,
Aiye e yi pada o,
Jesu ku fun aiye.            Amin`},{number:`189`,title:`Awake my glory,`,category:`Easter`,lyrics:`English Version

m: m: r: d
f: f: m r
s : s: f: m
r: r: t: d

1: Awake my glory,
Awake my power,
Awake my glory,
Awake ye holy fold.

2: Halleluyah
Halleluyah!
Halleluyah!
Lord of Celestial

3: Glory be to Thee,
Glory be to Thee
Glory be to Thee
Holy Trinity.                  Amen

Yoruba Version

m: m: r: d
f: f: m r
s : s: f: m
r: r: t: d

1: Ji Ogo mi,
Ji agara mi,
Ji Ogo mi,
Ji Ijo Mimo,

2: Halleluya
Halleluya!
Halleluya!
Olu Ijo Mimo.

3: Ogo ni fun O,
Ogo ni fun O,
Ogo ni fun O,
Meta lokan mimo.             Amin`},{number:`190`,title:`The world may not know me,`,category:`Easter`,lyrics:`English Version

1: The world may not know me,
My own sheep certainly do,
Shout holy to the King

The light now cometh.

2: For surely I know
Jesus is my sympathizer,
Shout holy to the King
The light now cometh.

3: Who’s worthy of worship
Besides the glorious Father
Shout holy to the King
The light now cometh.

4: Sound clearly to the world
That Jesus Christ resurrects
Shout holy to the King
The light now cometh.              Amen

Day

Yoruba Version

1: Baiye ko mo mi,
Sugbon awon temi momi,
E ke mimo s’Oba

Imole wole

2: Sugbon mo daju pe,
Jesu lalabaro mi,
E ke mimo s’Oba
Imole wole

3: T’alo ye ka sin?
Bi ko se Oga Ogo
E ke mimo s’Oba
Imole wole

4 E wi fun aiye gbo
Pe, Jesu Oluwa jinde,
E ke mimo s’Oba
Imole wole.                        Amin`},{number:`201`,title:`Jesus Christ is the King over the`,category:`God's Glory and Ascension`,lyrics:`English Version

1: Jesus Christ is the King over the
earth,
Jesus Christ is the King over the earth,
Rejoice, Jesus is the King
The host of Angels thus rejoice
Rejoice, Jesus is the King
Chorus: Halleluyah, Halleluyah,
Rejoice, Jesus is the King

2: Celestial conquers the world,
Celestial conquers the world,
Rejoice, Jesus is the King
The host of Angels thus rejoice
Rejoice, Jesus is the King
Chorus: Halleluyah, Halleluyah,
Rejoice Jesus is the King.
Amen

Yoruba Version

1: Jesu Kristi j’Oba s’ori aiye,
Jesu Kristi j’Oba s’ori aiye,
E yo Jesu j’Oba,
Awon, Angeli Mimo won nyo,
E yo, Jesu j’Oba,
Chorus: Halleluya! Halleluya!
E yo Jesu j’Oba.

2: Ijo Mimo bori aiye,
Ijo Mimo bori aiye,
E yo Jesu j’Oba,
Awon, Angeli Mimo won nyo,
E yo, Jesu j’Oba,
Chorus: Halleluya! Halleluya!
E yo Jesu j’Oba.              Amin`},{number:`202`,title:`Jesus my dearest Lord,`,category:`God's Glory and Ascension`,lyrics:`English Version

s: s: m: d: l: s
f: m: r: r: l: s: m
s: f: m: s: l: t: d
d: m: d: r: t: d

Jesus my dearest Lord,
Oh, please I’m begging Thee,
You are my shining light
The holiest of all
Jesus is palatial light.     Amen

Yoruba Version

s: s: m: d: l: s
f: m: r: r: l: s: m
s: f: m: s: l: t: d
d: m: d: r: t: d

Jesu Oluwa mi,
Jowo ye, mo mbe O,
Ire ni, mole mi,
Eni Mimo julo
Jesu ni na fin Re. Amin`},{number:`203`,title:`Jesus is the King,`,category:`God's Glory and Ascension`,lyrics:`English Version

1: Jesus is the King,
Jesus is the King,
Whether the world likes it nor not
Jesus is the King.

2: Jesus Lives in me,
Jesus Lives in me,
The Holy Spirit tell me so,
Jesus Lives in me.                Amen

Yoruba Version

1: Jesu ti j’Oba,
Jesu ti j’Oba
Baraiye fe, baraiye ko,
Jesu ti j’Oba.

2: Jesu ngbe ‘nu mi,
Jesu ngbe ‘nu mi,
Emi Mimo lo so fun mi,
Pe, Jesu ngbe ‘nu mi.        Amin`},{number:`204`,title:`Father, Father`,category:`God's Glory and Ascension`,lyrics:`English Version

1: Father, Father
At this very hour,
Father, Father
At this very hour,
Chorus: Show unto the world thy
glories oh dear Lord,
So the world may know that
It is Thou who hast sent me.

2: Jesus, Jesus,
Thou art the conqueror,
Jesus, Jesus,
Thou art the Saviour,
Chorus: Show unto the world thy
glories oh dear Lord,
So the world may know that
It is Thou who hast sent me.

3: The world wants not
The healings of Jesus,
The world wants not
The healings of Jesus,
Chorus: Show unto the world thy
glories oh dear Lord,
So the world may know that
It is Thou who hast sent me.  Amen

Yoruba Version

1: Baba a, Baba a,
Larin wakati yi,
Baba a, Baba a,
Larin wakati yi,
Chorus: F’ogo Re fihan aiye o Oluwa,
K’aiye le mo wipe,
K’aiye le mo wipe,
Ire lo ran mi ni ‘se.

2: Jesu u, Jesu u,
Tire ni isegun,
Jesu u, Jesu u,
Tire ni isegun,
Chorus: F’ogo Re fihan aiye o Oluwa,
K’aiye le mo wipe,
K’aiye le mo wipe,
Ire lo ran mi ni ‘se.

3: Aiye ko fe Iwosan ti Jesu,
Aiye ko fe igbala ti Jesu
Chorus: F’ogo Re fihan aiye o Oluwa,
K’aiye le mo wipe,
K’aiye le mo wipe,
Ire lo ran mi ni ‘se.         Amin`},{number:`205`,title:`God the King of heavenly light,`,category:`God's Glory and Ascension`,lyrics:`English Version

1: God the King of heavenly light,
Everlasting King,
Owner of eternal glory
Before whose presence,
However little the sin,
Cannot come near Thee,
Who with love calleth all sinners,
To see the glory.

2: Those He loveth He calleth,
Those He calls He chooses,
Those He choose He glorifies
In this our dark world
And the world rejects His call
Going deeper in darkness
Refusing calls to repentance
Under destruction.

3: Ye expelled from garden of Eden,
Think and repent now,
Come into the mansion of light
The mansion of love
Where Jesus indeed reigneth,
Before the throne of Father,
Let sinners come to repentance
Reject not the call.            Amen

Yoruba Version

1: Olorun Oba Imole
Oba aiye raiye e,
Ologo didan julo,
Waju Eniti,
Kekere ninu ese,
Ki yio sunmo O,
To nfi ife pe elese
Lati r’ogo Re.

2: Awon ti o-fe lo npe,
Awon to pe loyan a,
Awon to yan lo se l’ogo,
Laiye okunkun,
Aiye nko ipe na,
Nwon rin sinu okunkun,
Lai fe ronupiwada,
Labe iparun.

3: Ire t’ale logba Eden,
Ronupiwada a,
Wa si ibugbe Imole,
Ibugbe ife,
Nibiti Jesu njoba,
Niwaju ite Baba,
Elese ronupiwada,
Ma ko ipe na.                  Amin`},{number:`206`,title:`Kingdom of the world,`,category:`God's Glory and Ascension`,lyrics:`English Version

1: Kingdom of the world,
Kingdom of Heaven,
Kingdom of the world,
Kingdom of Heaven,
Jesus, Jesus, Jesus,
Holy-King crowned King of the world,
Crowned King of Heaven.

2: He is King of the World,
He is the King of Heaven,
He’s King of the world
He is the King of Heaven,
Jesus, Jesus, Jesus,
Holy-King crowned King of the world,
Crowned King of Heaven.     Amen

Yoruba Version

1: Ijoba aiye, Ijoba Orun,
Ijoba ayie, Ijoba Orun,
Jesu, Jesu, Jesu,
Oba Mimo j’Oba aiye
O joba Orun.

2: O joba aiye, O joba Orun,
O joba aiye, O joba Orun,
Jesu, Jesu, Jesu,
Oba Mimo j’Oba aiye
O joba Orun.                   Amin`},{number:`207`,title:`Golden organs sound louder,`,category:`God's Glory and Ascension`,lyrics:`English Version

Golden organs sound louder,
Round the Heavenly court-yard,
Melody is all the songs,

Thus rendered by the Angels
With all mighty praises,
They all pay Him homage
With a great deal of reverence,
They give glory to King of Heaven
Glory, glory, praises to Father
Maker of the earth and the Heaven,
Halleluyah, Halleluyah
Hossanah the voice of their songs.
Amen

Yoruba Version

Duru wa nke tatan,
Yi agbala Orun ka,
Adun l’ohun orin won,

Ti awon Angeli nko,
Pelu iyin nla, nla,
Nwon nte ori won ba
Pelu ibowo nla, nla,
Nwon si nf’ ogo f’ Oba Orun,
Ogo, Ogo, iyin fun Baba,
Eleda Orun ati ar’aiye,
Halleluya, Halleluya,
Hossanah l’ohun orin won.          Amin`},{number:`208`,title:`Jesus the King of all kings,`,category:`God's Glory and Ascension`,lyrics:`English Version

1: Jesus the King of all kings,
Descend from seven heavens,
Jesus the King of all kings,
Descend from seven heavens,
Holy, Holy the Angels sing
Round the holy throne.

2: I shall thus Abide with you,
On today of thine power
I shall thus Abide with you,
On today of thine power,
Holy, Holy shall thou dost sing
In my only Holy house.

3: I send down the seven lights
Round this my Holy fold,
I send down the seven lights
Round this my Holy fold,
Bow down before His holy feet,
King of all the Angels.         Amen

Yoruba Version

1: Jesus Oba awon Oba,
T’Orun meje sokale
Jesus Oba awon Oba,
T’Orun meje sokale,
Mimo, Mimo l’ Angeli nko
Ka yi ‘te Mimo

2: Emi yio ba yin gbe,
L’ ojo agbara oni,
Emi yio ba yin gbe,
L’ ojo agbara oni,
Mimo, Mimo ni ke yin ko,
Ni ile Mimo Mi.

3: Mo ntan Imole meje,
Yi ;jo yi ka,
Mo ntan Imole meje,
Yi ;jo yi ka,
E teriba labe ese Re,
Oba awon Maleka.                Amin`},{number:`209`,title:`Oh all ye people, oh all ye people,`,category:`God's Glory and Ascension`,lyrics:`English Version

1: Oh all ye people, oh all ye people,
Exalt ye Jesus, Exalt ye Jesus,
Father Jesus Holy Church,
Father Jesus Holy Church,
Who sitteth at the right
Of our Father.

2: Bring ye all your sins,
Bring ye all your sins
Into Celestial, into Celestial,
Jesus Christ the only grace
Jesus Christ the only grace,
Shall save thee.

3: Who ransomed His life,
Who ransomed His life,
For us the sinners, for us the sinners,
Host of Angels all pay homage,
Host of Angels all pay homage
To the King.

4: The King of Angels,
The King of Angels,
They shout Hosanna,
They shout Hosanna,
Halleluyah to the Heavens
Halleluyah to the Heavens
They all shout.                    Amen

Yoruba Version

1: Eyin araiye, Eyin araiye,
E gbe Jesu ga, e gbe Jesu ga,
Jesu Baba Ijo Mimo,
Jesu Baba Ijo Mimo,
To joko sori owo otun,
Baba wa.

2: E ko ese nyin, e ko ese nyin,
Wa si ‘jo Mimo,
Wa si jo’ Mimo
Jesu Kristi, ore ofe,
Jesu Kristi, ore ofe,
Yio gba yin.

3: To fara rubo, to fara rubo,
F ‘awa elese, f’awa elese
T’awon Angeli foribale,
T’awon Angeli foribale,
Fun Oba.
4: Oba awon Angeli,
Oba awon Angeli,
Nwon nke Hossana,
Nwon ke Hosanna,
Halleluya soke orun,
Halleluya soke orun
Ti now nke.                        Amin`},{number:`210`,title:`All ye people exalt ye Jesus,`,category:`God's Glory and Ascension`,lyrics:`English Version

1: All ye people exalt ye Jesus,
All ye people exalt ye Jesus,
Kindle the light amidst all darkness,
That Father’s promise be fulfilled in the
end.

2: All ye people accept ye Jesus,
All ye people accept ye Jesus,
And ye sinners come to repentance
So that you might be saved on that day.

3: All ye people exalt ye Jesus,
All ye people exalt ye Jesus,
Kindle the light amidst all darkness,
That Father’s promise be fulfilled in the
end.                           Amen

Yoruba Version

1: Gbogbo aiye, e gbe Jesu ga,
Gbogbo aiye, e gbe Jesu ga,
E tan ‘mole larin okunkun,
K’oro Baba le se ni kehin.

2: Gbogbo aiye, e gba Jesu gbo,
Gbogbo aiye, e gba Jesu gbo,
K’ elese wa ronupiwada,
K’ale gba yin sile l’ojo na.

3: Gbogbo aiye, e gbe Jesu ga,
Gbogbo aiye, e gbe Jesu ga,
E tan ‘mole larin okunkun,
K’oro Baba le se ni kehin.     Amin`},{number:`211`,title:`Halleluyah from heaven above,`,category:`God's Glory and Ascension`,lyrics:`English Version

Halleluyah from heaven above,
Christ our Lord has risen today
Christ our Lord has risen today,
Halleluyah, Halleluyah.
Amen

Yoruba Version

Halleluya lat’orun wa,
Kristi Oluwa jinde loni
Kristi Oluwa jinde loni,
Halleluya, Halleluya        Amin`},{number:`212`,title:`Rejoice o people,`,category:`God's Glory and Ascension`,lyrics:`English Version

Rejoice o people,
So dwelleleth glory of God,
Celestial, rejoice
Halleluyah.                        Amen

Yoruba Version

Araiye e yo,
Ogo Oluwa yo,
Ijo Mimo, e yo,
Halleluya                  Amin`},{number:`213`,title:`Jesus rides on the Ass,`,category:`God's Glory and Ascension`,lyrics:`English Version

Jesus rides on the Ass,
When the Angels sing Halleluyah,
Jesus rides on the Ass,
When the Angels sing Halleluyah,
O come let us worship,
Jesus is King,
O come let us worship,
Jesus is King.             Amen

Yoruba Version

Jesu lo gun esin,
Awon Angeli nyo Halleluya,
Jesu lo gun esin,
Awon Angeli nyo Halleluya,
E wa ka lo jo sin,
Jesu lo joba
E wa ka lo jo sin,
Jesu lo joba.                     Amin`},{number:`215`,title:`In the power`,category:`God's Glory and Ascension`,lyrics:`English Version

In the power
In the glory
In His everlasting blessing
Praise the Father,
Praise the Father
That thou might behold His glory,
Halleluyah, Halleluyah
A! A!! A!!! Halleluyah.          Amen

Yoruba Version

Ninu agbara,
Ninu Ogo Re,
Ninu ibukun Re,
Aiyeraiye,
Yin Baba na,
Yin Baba,
K’iwo kole r’ogo Re,
Halleluya, Halleluya,
A! A! A! Halleluya.               Amin`},{number:`216`,title:`Jesus is the salt everlasting,`,category:`God's Glory and Ascension`,lyrics:`English Version

1: Jesus is the salt everlasting,
Jesus is the salt everlasting,
Jesus is same Christ in the Celestial
Church,
To over come the world.

2: Jesus is light everlasting,
Jesus is light everlasting,
Jesus is King today and forever,
To over come the world.          Amen

Yoruba Version

1: Jesu ni iyo aiyeraiye,
Jesu ni iyo aiyeraiye,
Jesu ni Kristi na: ni Ijo Mimo,
Ti yio bori aiye.

2: Jesu ni Imole aiyeraiye,
Jesu ni Imole aiyeraiye,
Jesu ni Oba kan na loni, lola,
Ti yio bori aiye.                 Amin`},{number:`217`,title:`Halleluyah they chant in Heave, Jolly,`,category:`God's Glory and Ascension`,lyrics:`English Version

Halleluyah they chant in Heave, Jolly,

Jolly,
Father in salvation I’ll be with, Jolly,
Jolly,
Holy, Holy they chant in Heaven, Jolly,
Jolly,
Father in salvation I’ll be with, Jolly,
Jolly,
Ebenezer they chant in Heaven, Jolly,
Jolly
Father in salvation I’ll be with, Jolly,
Jolly,                      Amen

Yoruba Version

Halleluya niwon nke lorun - Oyin momo,

Baba ma ba e da ‘gbala - Oyin momo
Mimo, Mimo niwon nke lorun - Oyin
momo,
Baba ma ba e da ‘gbala - Oyin momo,
Ebenezer niwon nke lorun – Oyin momo,
Baba ma ba e da ‘gbala - Oyin momo.
Amin

Orin Emi Mimo`},{number:`226`,title:`Irah Jahman`,category:`Holy Spirit`,lyrics:`English Version

Irah Jahman
Jaribam,
Irah Jah man
Irah Jahman
Jaribam,
Irah Jah man
Irah Jahman
Jaribam,
Irah Jah man
Holy Spirit Heavenly Dove
Descend now,
Holy Spirit Heavenly Dove
Descend now,
Holy Spirit Heavenly Dove
Descend now.                   Amin

Yoruba Version

Hirah Jahman
Jaribam,
Hirah Jahman
Hirah Jahman
Jaribam,
Hirah Jahman
Hirah Jahman
Jaribam,
Hirah Jahman
Emi Mimo,
Adaba Orun, e sokalewa
Emi Mimo,
Adaba Orun, e sokalewa
Emi Mimo,
Adaba Orun, e sokalewa.     Amin`},{number:`227`,title:`Host of Angels descend now,`,category:`Holy Spirit`,lyrics:`English Version

Host of Angels descend now,
Host of Angels descend now,
Hariyah, Hariyah
Host of Angels descend with thy
blessing.                       Amen

Yoruba Version

Ogun Orun , e ya wole,
Ogun Orun , e ya wole,
Hariyah, Hariyah,
Ogun Orun, e sokale sire.   Amin`},{number:`228`,title:`Father Heavenly Almighty,`,category:`Holy Spirit`,lyrics:`English Version

1: Father Heavenly Almighty,
The immovable omnipotent God,
The only one Almighty King,
Who violently shakes the world,
Come dwells with us God

And glorify thy children,
Come dwells with us God
And glorify thy children.

2: Spirit, Spirit, the God almighty,
Who reigns to come for Kingship,
Who violently shakes the world,
Come dwells with us God
And glorify thy children,
Come dwells with us God
And glorify thy children.
Amen

Yoruba Version

1: Baba Olu Orun o,
Oyigiyigi aterere k’aiye
Okan soso Ajanaku,
Ti nmaiye kijikiji,
Wa ba wa gbe o,

Wa s’omo Re logo o,
Wa ba wa gbe o,
Wa s’omo Re logo o.

2: Emi, Emi Olodumare ti njoba
Ko wa joba,
Okan soso Ajanaku,
Ti nmaiye kijikiji,
Wa ba wa gbe o,
Wa s’omo Re logo o,
Wa ba wa gbe o,
Wa s’omo Re logo o.         Amin`},{number:`229`,title:`Holy Spirit descend into our midst,`,category:`Holy Spirit`,lyrics:`English Version

Holy Spirit descend into our midst,
We are all expecting Thee,
Come into us to give us thy power,
The power of victory,
Thou who promise and fulfil the same,
Remember the promises thou hast
made.
Amen

Yoruba Version

Emi mimo sokale sarin wa,
Awa nse ireti Re,
Wa wo inu wa,
Ko wa fun wa lagbara,
Agbara t’awa yio fi segun,
O ki ise ‘leri Re laimu se,
Ranti ileri Re ti o se.         Amin`},{number:`230`,title:`Holy Spirit thus descend now,`,category:`Holy Spirit`,lyrics:`English Version

1: Holy Spirit thus descend now,
Come and give us Thy power.

2: Jesus our Lord thus descend now,
Come and give us Thy power.

3: The Holy Dove thus descend now,
Come and give us Thy power.

4: Holy Angels thus descend now,
Come and give us Thy power.

5: O Heavenly hosts thus descend now,
Come and give us Thy power

6: Holy Spirit thus descend now,
Come and give us Thy power.
Amen

Yoruba Version

1: Emi Mimo sokale wa o,
Ko wa fun wa lagbara.

2: Jesu Oluwa o, sokale wa o,
Ko wa fun wa lagbara.

3: Adaba Mimo, sokale wa o,
Ko wa fun wa lagbara.

4: Maleka Mimo, sokale wa o,
Ko wa fun wa lagbara.

5: Ogun orun Mimo, sokale wa o,
Ko wa fun wa lagbara.

6: Emi Mimo, sokale wa o,
Ko wa fun wa lagbara.           Amin`},{number:`231`,title:`The Holy Dove,`,category:`Holy Spirit`,lyrics:`English Version

The Holy Dove,
Comforter Spirit,
Direct from Our God

Do come upon us.
The Holy Dove,
Comforter Spirit,
Direct from Our God
Do come upon us.                Amen

Yoruba Version

Adaba Mimo,
Emi Olutunu,
Lati odo Olorun,

Ko wa bale wa
Adaba Mimo,
Emi Olutunu,
Lati odo Olorun,
Ko wa bale wa.            Amin`},{number:`232`,title:`Celestial Church girdle your loins,`,category:`Holy Spirit`,lyrics:`English Version

1: Celestial Church girdle your loins,
Celestial Church girdle your loins,
Holy Spirit is now in our midst,
Celestial Church girdles your loins.

2: Celestial Church girdle your loins,
Celestial Church girdle your loins,
Heavenly Dove is now in our midst.
Celestial Church girdles your loins.
Amen

Yoruba Version

1: Ijo Mimo, e damure,
Ijo mimo e damure,
Emi Mimo ti wole wa o,
Ijo Mimo, e damure.

2: Ijo Mimo, e damure,
Ijo Mimo, e damure,
Adaba orun ti wole wa o
Ijo Mimo, e damure.           Amin`},{number:`233`,title:`Celestial Church, girdle your loins,`,category:`Holy Spirit`,lyrics:`English Version

1: Celestial Church, girdle your loins,
Chorus: Holy Spirit, the living spirit
Dwelleth with our Father,
He who possesses His Spirit,
Shall behold His Glory.

2: The divine light has now appeared,
Chorus: Holy Spirit, the living spirit
Dwelleth with our Father,
He who possesses His Spirit,
Shall behold His Glory.

3: The Holy Dove shall descend now,
Chorus: Holy Spirit, the living spirit
Dwelleth with our Father,
He who possesses His Spirit,
Shall behold His Glory.

4: Celestial Church the world exists,
Chorus: Holy Spirit, the living spirit
Dwelleth with our Father,
He who possesses His Spirit,
Shall behold His Glory

5: The light for the children of light,
Chorus: Holy Spirit, the living spirit
Dwelleth with our Father,
He who possesses His Spirit,
Shall behold His Glory.

6: Your dwelling is at the right hand,
Chorus: Holy Spirit, the living spirit
Dwelleth with our Father,
He who possesses His Spirit,
Shall behold His Glory.
Amen

Yoruba Version

1: Ijo Mimo, e turadi,
Chorus: Emi Mimo, Emi alaye
O wa lodo Baba,
Eni to lemi Re,
Yio si ri ogo Re.

2: Imole yi lo si de yi,
Chorus: Emi Mimo, Emi alaye
O wa lodo Baba,
Eni to lemi Re,
Yio si ri ogo Re.

3: Adaba yio si sokale,
Chorus: Emi Mimo, Emi alaye
O wa lodo Baba,
Eni to lemi Re,
Yio si ri ogo Re.

4: Ijo Mimo, aiye mbe,
Chorus: Emi Mimo, Emi alaye
O wa lodo Baba,
Eni to lemi Re,
Yio si ri ogo Re.

5: Imole yi f’omo Imole,
Chorus: Emi Mimo, Emi alaye
O wa lodo Baba,
Eni to lemi Re,
Yio si ri ogo Re.

6:Owo otun laye mbe,
Chorus: Emi Mimo, Emi alaye
O wa lodo Baba,
Eni to lemi Re,
Yio si ri ogo Re.             Amin`},{number:`234`,title:`Oh my brothers,`,category:`Holy Spirit`,lyrics:`English Version

Oh my brothers,
Oh my sisters,
Art thou with Holy Spirit,
Without Spirit in vain is man,
Ask, Jesus shall give to thee.
Amen

Yoruba Version

Arakunrin o,
Arabinrin o,
O ti gbemi Mimo bi?
Laisi emi, ofo-le ‘nia,
Bere, Jesu yio fun o.            Amin`},{number:`235`,title:`Holy Spirit, descend now,`,category:`Holy Spirit`,lyrics:`English Version

Holy Spirit, descend now,
Show the world heaven’s glory,
Kindle the radiant
Holy light to us.
Amen

Yoruba Version

Emi Mimo sokale,
Fi Ogo Orun han aiye,
Tan itansan imole
Mimo si wa.               Amin`},{number:`236`,title:`Holy Spirit descend now,`,category:`Holy Spirit`,lyrics:`English Version

Holy Spirit descend now,
Just as on the Pentecost day,
Holy Spirit descend now,
Just as on the Pentecost day,
Heavenly spirit, abide with us,
We beseech Thee,
Come in Thy power, come in Thy
power,
Heavenly spirit, abide with us.
Amen

Yoruba Version

Emi Mimo, sokale,
Gegebi t’ojo penticost o,
Emi Mimo, sokale,
Gegebi t’ojo penticost o,
Emi Orun wa ba wa gbe o,
Jowo ye o,
Wa lagbara a Re; wa lagbara a Re
Emi Orun wa ba wa gbe o.        Amin`},{number:`237`,title:`Holy Spirit the comforter,`,category:`Holy Spirit`,lyrics:`English Version

1: Holy Spirit the comforter,
Descend into our midst,
Thou art the of blessing,
We are expecting Thee.

2: For Thou art the Almighty King,
Great King and benefactor,
Oh King of Spirit descend now,
We are expecting Thee.

3: King of mercy descend now,
Look unto us with mercy,
We Thy children look unto Thee,
Open thy door of mercy.

4: Oh Holy King benefactor,
Father send us blessing,
For Thou art the Almighty,
Who blesses His children.

5: King of mercy, oh King of life,
Kindle Thy light for us,
Thou art the King full of light,
We are expecting Thee.

Oh Holy King, oh King of light,
Descend and bless us now,
For Thou art the King of mercy,
We are expecting Thee.

7: Holy Spirit benevolent,
We are expecting Thee,
O King, the divine descend now,
Come and dwell in our midst.
Amen

Yoruba Version

1: Emi Mimo Olutunu,
Sokale sarin wa,
Ire Oba Olubukun,
Awa nse reti Re.

2: Nitoripe ire ni Oba,
Nla Oba Olore,
Oba Emi sokale wa,
Awa nse reti Re.

3: Oba anu sokale wa,
Si ‘ju anu wo wa,
Awa omo Re, nwo ‘ju Re,
Silekun anu Re.

4: Oba Mimo, Oba Olore,
Baba ‘jo bukun wa,
Nitoripe Ire l’Oba,
T’o bukun omo Re.

5: Oba anu, Oba Iye,
Tan ‘mole Re fun wa,
Ire l’Oba ‘kiki mole,
Awa nse reti Re.

6: Oba Mimo Oba Iye,
Jowo wa bukun wa,
Nitoripe ‘Re l’Oba anu,
Awa nse reti Re.

7: Emi Mimo, Emi Olore,
Awa nse reti Re,
Oba Mimo sokale wa,
Wa gunwa sarin wa.                Amin`},{number:`238`,title:`Holy Spirit descend in our midst,`,category:`Holy Spirit`,lyrics:`English Version

s: s: s: d: m: m: m: f: m: r
d: t: d: r: f: m: d
s: s: s: d: m: m: m: r: f: m: m
d: t: d: r: f: m: r: d

1: Holy Spirit descend in our midst,
Father in Heaven authorizes,
His work cometh quickly do come
down,
Show unto us all His ways,

Holy Spirit the living Spirit,
Descend unto us His children,
So we might praise Thee fervently,
At this moment and forever.

3: Holy Spirit, Spirit from heaven,
Father, the son, Holy Spirit,
Descend Thy power into this church,
That the living church be full of praise.
Amen

Yoruba Version

s: s: s: d: m: m: m: f: m: r
d: t: d: r: f: m: d
s: s: s: d: m: m: m: r: f: m: m
d: t: d: r: f: m: r: d

1: Emi Mimo wa sarin wa
Baba Orun lo pase na
Ise Re de tete sokale
Wa fi ona Re han wa.

2: Emi Mimo, emi alaye e,
Wa ba sori awa omo Re
Kawa le yin O ni kankan,
Lati sisi yi lo dopin.

3: Emi Mimo, Emi at’Orun wa,
Baba, Omo, Emi Mimo,
Wa fi agbara wo Ijo yi,
K’iyin le je t’ijo alaye e.        Amin`},{number:`239`,title:`Rain of Holy Spirit shall fall,`,category:`Holy Spirit`,lyrics:`English Version

s: d: d: m: f: m: r: d
m: m: m: r: d: r
s: d: m: f: m: r: d
r: r: r: d: l: t: d

1: Rain of Holy Spirit shall fall,
May it fall our heads,
Rain of Holy Spirit shall fall,
May it fall our heads,
Chorus: When it shall fall,
When it shall fall,
We shall be relieved,
Rain of Holy Spirit shall fall,
Ma y it fall our heads.

2: Rain of mercy of the Lord shall fall,
May it fall our heads,
Rain of mercy of the Lord shall fall,
May it fall our heads,
Chorus: When it shall fall,
When it shall fall,
We shall be relieved,
Rain of Holy Spirit shall fall,
May it fall our heads.

3: Rain of blessings of the Lord shall
fall
May it fall our heads
Rain of blessings of the Lord shall fall
May it fall our heads
Chorus: When it shall fall,
When it shall fall,
We shall be relieved,
Rain of Holy Spirit shall fall,
May it fall our heads.          Amen

Yoruba Version

s: d: d: m: f: m: r: d
m: m: m: r: d: r
s: d: m: f: m: r: d
r: r: r: d: l: t: d

1: Ojo Emi Mimo yio ro
Je ko ro sori wa,
Ojo Emi Mimo yio ro,
Je ko ro sori wa,
Chorus: Gba to ba ro,
Gba to ba ro,
Ara yi o tu wa,
Ojo Emi Mimo yio ro
Je ko ro sori wa.

2: Ojo Anu Oluwa yio ro,
Je ko ro sile mi,
Ojo Anu Oluwa yio ro,
Je ko ro sile mi,
Chorus: Gba to ba ro,
Gba to ba ro,
Ara yi o tu wa,
Ojo Emi Mimo yio ro
Je ko ro sori wa.

3: Ojo ibukun Oluwa yio ro
Je ko ro sori wa,
Ojo ibukun Oluwa yio ro
Je ko ro sori wa,
Chorus: Gba to ba ro,
Gba to ba ro,
Ara yi o tu wa,
Ojo Emi Mimo yio ro
Je ko ro sori wa.          Amin

Orin Agbara`},{number:`251`,title:`Father descend now,`,category:`Spiritual Power`,lyrics:`English Version

1: Father descend now,
Father descend now,
With the everlasting light.

2: The Son descend now,
The Son descend now,

With the everlasting light.    Amen

Yoruba Version

1: Baba sokale wa,
Baba sokale wa,
Pelu Imole aiyeraiye.

2: Omo sokale wa,
Omo sokale wa,

Pelu Imole aiyeraiye.           Amin`},{number:`253`,title:`Jehovah, give us Thy power,`,category:`Spiritual Power`,lyrics:`English Version

1: Jehovah, give us Thy power,
Jehovah, give us Thy power,
The power to conquer witches,
The power to conquer wizards,
T he power evil world cannot confront,
Jehovah, give us Thy power.

2: Jehovah, give us Thy Spirit,
Jehovah, give us Thy Spirit,
Thy Spirit to overcome witches,
Thy Spirit to overcome wizard,
Thy Spirit evil world cannot confront
Jehovah, give us Thy Spirit.     Amen

Yoruba Version

1: Jehovah fun mi l’agbara,
Jehovah fun mi l’agbara,
Agbara, to bori aje,
Agbara, to bori oso,
Agbara t’aiye ko le dojuso,
Jehovah fun mi l’agbara,

2: Jehovah fun mi lemi Re,
Jehovah fun mi lemi Re,
Emi Re, to bori oso,
Emi Re, to bori aje,
Emi Re, to bori t’aiye ko le dojuso
Jehovah fun mi lemi Re.             Amin`},{number:`254`,title:`Jesus give us Thy power,`,category:`Spiritual Power`,lyrics:`English Version

Jesus give us Thy power,
To worship Thee,
In Celestial Church eter-na-lly,
Jesus give us Thy power,
To worship Thee to gain the crown.
Amen

Yoruba Version

Jesu fun wa lagbara,
K’awa le sin O,
Ninu Ijo Mimo dopin
Jesu fun wa lagbara,
K’awa le sin O gb’ada ye e.     Amin`},{number:`255`,title:`The power I have descended now,`,category:`Spiritual Power`,lyrics:`English Version

s: s: d: s: m: s: d: d
d: d: r: r: d: m: d
s: s: d: s: m: s: d: d
m: r: r: m: r: d

1: The power I have descended now,
The power I have descended now,
The power I have descended now,
That shineth in Heaven.

2: Children of Celestial be prepared,
Children of Celestial be prepared,
Children of Celestial be prepared,
To receive blessing.

3: The power that surpasses,
The power that surpasses,
The power that surpasses,
Shall descend now for you.       Amen

Yoruba Version

s: s: d: s: m: s: d: d
d: d: r: r: d: m: d
s: s: d: s: m: s: d: d
m: r: r: m: r: d

1: Agbara mo ti sokale wa
Agbara mo ti sokale wa
Agbara mo ti sokale wa
To nta lode Orun.

2: Eyin omo ‘jo Mimo, e mura,
Eyin omo ‘jo Mimo, e mura,
Eyin omo ‘jo Mimo, e mura,
Ke gba bukun eyi.

3: Agbara to po ju eyi lo,
Agbara to po ju eyi lo,
Agbara to po ju eyi lo,
Yio sokale fun nyin.          Amin`},{number:`256`,title:`Power has descended,`,category:`Spiritual Power`,lyrics:`English Version

1: Power has descended,
Power has descended,
All ye Celestial,
Receive it with joy.

2: If the world pines away,
If the world pines away,
If the world pines away,
I shall worship the Lord with joy.
Amen

Yoruba Version

1: Agbara na tide,
Agbara na tide,
Eyin ‘jo Mimo,
E fayo fu gba.

2: Baiye yi nku lo,
Baiye yi nku lo,
Baiye yi nku lo,
Ma fayosin Olude.       Amin`},{number:`257`,title:`Jehovah the power,`,category:`Spiritual Power`,lyrics:`English Version

Jehovah the power,
The powerful, the Holy One
Jehovah the power,
The powerful, the Holy One,
The Holy one and most glorious King,
Please give unto us Thy power of Holy
Spirit,
Please give unto us Thy power of Holy
Spirit,
Today to magnify Thy most blesses
glory,
Today to magnify Thy most blesses
glory.                           Amen

Yoruba Version

Jehovah alagbara,
Alagbara Eni Mimo,
Jehovah alagbara,
Alagbara Eni Mimo,
Eni Mimo Ologo julo,
Jowo fun wa ni agbara,
Emi Mimo Re,
Jowo fun wa ni agbara,
Emi Mimo Re,
Lojo oni o, ka fi gbogbo re han,
Lojo oni o, ka fi gbogbo re han, Amin`},{number:`258`,title:`Power of Holy Spirit cometh,`,category:`Spiritual Power`,lyrics:`English Version

Power of Holy Spirit cometh,
Power of Holy Spirit cometh,
Jesus cometh, the joy now cometh.
Amen

Yoruba Version

Agbara Emi Mimo wole,
Agbara Emi Mimo wole,
Jesu wole, ayo wole.           Amin`},{number:`259`,title:`Seven Arch-angels descend from`,category:`Spiritual Power`,lyrics:`English Version

1: Seven Arch-angels descend from
Heaven,
Seven Arch-angels descend from
Heaven,
Wake, wake Holy Church,
Wake, wake Holy Church,
Wake for joy,
Because the reward is up there
For us in Heaven.

2: Seven Arch-angels descend from
Heaven,
Seven Arch-angels descend from

Heaven,
Wake, wake Holy Church,
Wake, wake Holy Church,
Wake for joy,
Because the reward is up there
For us in Heaven.

3: Seven Holy powers descend from
Heaven,
Seven Holy powers descend from
Heaven,
Ho-Holy, Holy,
Ho-Holy, Holy,
Those Arch angels singing up there
In heaven.                     Amen

Yoruba Version

1: Maleka meje t’Orun sokale wa,
Maleka meje t’Orun sokale wa,
Ji, ji, Ijo Mimo,
Ji, ji, Ijo Mimo,
Ji sayo, nitori wipe
Ere mbe fun wa loke Orun.

2: Agbara meje t’Orun sokale wa,
Agbara meje t’Orun sokale wa,
Ji, ji, Ijo Mimo,
Ji, ji, Ijo Mimo,
Ji sayo, nitori wipe
Ere mbe fun wa loke Orun.

3: Agbara meje t’Orun sokale wa,
Agbara meje t’Orun sokale wa,
Mi – Mimo – Mimo,
Mi – Mimo – Mimo,
L’awon Maleka na nko,
L’oke Orun.                   Amin`},{number:`260`,title:`Mighty power descended,`,category:`Spiritual Power`,lyrics:`English Version

Mighty power descended,
Mighty power descended,
Into this holy church, celestial,
Join us worship in celestial church,
Come let us worship.              Amen

Yoruba Version

Agbara nla lo sokale,
Agbara nla lo sokale,
Sinu Ijo Mimo, Aladura,
E wa ba wa sin ni ‘jo Mimo
E wa ka josin.                 Amin`},{number:`261`,title:`The only power, Father’s the giver,`,category:`Spiritual Power`,lyrics:`English Version

The only power, Father’s the giver,
The only power, Father’s the giver,
The only power, Father’s the giver,
Whoever ask for this shall be given
The power that surpasses all power
The power that surpasses all power
The great power, the great power great
power
Greater than all such powers rest with
Father,
Greater than all such powers rest with
Father.                           Amen

Yoruba Version

Agbara na, Baba wa l’onfun,
Agbara na, Baba wa l’onfun,
Agbara na, Baba wa l’onfun,
Enikeni to ba toro yio ri,
Agbara to ju gbogbo agbara lo,
Agbara to ju gbogbo agbara lo,
Agbara nla, Agbara nla, Agbara,
T’oju gbogbo agbara,
L’o wa lodo Baba
T’oju gbogbo agbara,
L’o wa lodo Baba.              Amin`},{number:`262`,title:`On the power day, On the power day,`,category:`Spiritual Power`,lyrics:`English Version

On the power day, On the power day,
When the Angels rejoice,
On the power day, On the power day,
When the Angels rejoice,

O shout Hossana, O shout Hossana,
Indeed we are happy, Indeed we are
happy
For this holy day.              Amen

Yoruba Version

Ojo agbara a, Ojo agbara a,
T’awon Angeli nyo,
Ojo agbara a, Ojo agbara a,
T’awon Angeli nyo,

E ke Hossanah; E ke Hossanah,
E ke Hossanah; E ke Hossanah,
Inu wa dun pupo, Inu wa dun pupo,
Fun ojo mimo yi.                  Amin`},{number:`263`,title:`Great power in Heaven’s glory`,category:`Spiritual Power`,lyrics:`English Version

Great power in Heaven’s glory
Holy, Holy, Holy, Holy, Holy
Early Morning Shine star
Surpasses satan’s
Reign over the work
Amen, Amen, Amen
Christ is the King.    Amen

Yoruba Version

Agbara ninu Ogo Orun
Mimo, Mimo, Mimo,
Mimo, Mimo,
Irawo Didan ti Owuro
T’eri esu ba, joba lori ogo aiye
Amin, Amin, Amin
Kristi j’oba.        Amin`},{number:`264`,title:`Come and abide with us today`,category:`Spiritual Power`,lyrics:`English Version

1: Come and abide with us today
Abide with us our Father
With thy Heavenly holy power
Girdle us firmly
Cr: Come and abdie with us today
Abide with us our Father

2: Come and abide wit’ us today
Abide with us our Father
With Thy heavenly glorious light
Give unto us Father
Cr: Come and abdie with us today
Abide with us our Father

Yoruba Version

1: Wa ba wa gbe, l’ojo oni,
Wa ba wa gbe, Baba wa,
Fi agbara Orun Mimo,
Di wa lamure
Cr: Wa ba wa gbe, l’ojo oni,
Wa ba wa gbe, Baba wa.

2: Wa ba wa gbe, l’ojo oni,
Wa ba wa gbe, Baba wa
Fi ogo Itansan Orun,
Fi fun wa Baba,
Cr: Wa ba wa gbe, l’ojo oni,
Wa ba wa gbe, Baba wa.`},{number:`265`,title:`Jesus is calling on us,`,category:`Spiritual Power`,lyrics:`English Version

Jesus is calling on us,
Jesus calls, ye respond,
Endow us with Thy Heavenly power
So joy might dwell with us.
Amen

Yoruba Version

Jesu l’o npe wa a de,
Jesu l’o npe ma bo,
Fi agbara ode Orun,
Bo wa k’ayo le je tiwa.      Amin`},{number:`266`,title:`The true mighty power that cometh`,category:`Spiritual Power`,lyrics:`English Version

1: The true mighty power that cometh
from seven skies,
The true mighty power that cometh
from seven skies,
It’s a mighty power, It’s a mighty
power,
The true mighty power that cometh
from seven skies,
It is a victory power for us all.
The true mighty power that cometh
from seven skies,

2: O’ kindle the true light all ye the
Holy Angels,
O’ kindle the true light all ye the Holy
Angels
Glory be to Father, Glory be to Son,
O’ kindle the true light all ye the Holy
Angels,
Glory be to His mighty name.

3: Woe be unto Satan and to all it’s
handworks,
He’d been cursed by Father,
He’d been cursed by Father,
Woe be unto Satan and to all his
handworks,
Curses are unto all his followers. Amen

Songs for Good News

Yoruba Version

1: Agbara nla otito to sanmo meje wa,
Agbara nla otito to sanmo meje wa,
Agbara nla lo je,
Agbara nla lo je,
Agbara nla otito to sanmo meje wa,
Agbara isegun ni fun wa.

2: Etan mole otito enyin Maleka Mimo,
Etan mole otito enyin Maleka Mimo,
Ogo ni fun Baba,
Ogo ni fun Omo,

Etan mole otito, enyin Maleka Mimo
Ogo ni fun oruko Re.

3: Egbe ni fu esu ati fun ise owo re,
Baba ti gegun fun,
Omo ti gegun fun,
Egbe ni fu esu ati fun ise owo re,
Egbe ni fun awon ti ntele.          Amin

Orin Ihinrere`},{number:`276`,title:`Rejoice with us ye brethren in Christ,`,category:`Good News`,lyrics:`English Version

1: Rejoice with us ye brethren in Christ,
For this good luck we possess,
The hour of evil cometh,
That putteth the world in confusion,
O ye sinners repent from sins,
In this Celestial Church.

2: The big ditch of destruction now
opens,
To erupt all its bowls,
If thou would not want to perish,
Before Thy Lord and Redeemer,
Cling unto Christ in Celestial Church,
He surely would help you.

3: Shortly, the father would know not
his child, Nor the child would his
father,
Renounce the world now run to Christ
It’s pleasant in His holy place,
Great tumult, destruction cometh,
Come to repentance.

4: I’m patiently waiting in my mercies,
Calling on ye poor sinners,
This hour, come to repentance,

Soon, the mercies would be no more,
Forsake wickedness, sorcery, idols
Christ surely would save us.

5: The entire world has sinned against
Me
And yet, I regard not this,
I think not of beauty of Heaven
Countable are the hairs on your head
That made Me Christ bear the suffering,
I say, come, receive life.

6: And for the destruction of this world,
I draw this back with mercy,
And still, unbelief increase’s
They worship idols and sorcery,
They indulge in hatred, wickedness,
Forsake them, come to Me.

7: I have prepared many good things for
you,
The shining crown of life,
Your dwelling is waiting for you,
On the suitable, good firm ground,
Depart from this world and come to
Me,
I’ll surely receive you.       Amen

Yoruba Version

1: E ba wa yo, ara ninu Kristi,
Fun o ri rere ta ni,
Wakati buburu na de,
Ti o mu aiye yi gbona,
Elese ronupiwada,
Ni ‘jo Mimo yi.

2: Ogbun nla si sile nisisiyi,
Lati t’eruku jade,
Bo ko ba fe jeni egbe,
Si odo Olugbala Re,
Romo Kristi ‘nu Ijo Mimo yi,
Yio ran o lowo.

3: Laipe, baba ki yio mo omo,
Tab’ omo mo baba mo baba re,
K’aiye sile sa to Kristi,
O duro loke Mimo Re,
Rukerudo ‘parun nla mbo,
Ya ronupiwada.

4: Mo si tun nduro ninu anu mi,
Npe awon elese,
Wakati yi e pawada,
Laipe anu yio dopin,
Fi ‘ka, aje, orisa sile,

Kristi yio, gba wa la.

5: Gbogbo ekun aiye ti se simi,
Sibe nko bikita,
Nko ro ewa ti Orun,
Kika ni irun yin,
Lomu Emi Kristi jiya na,
Emi ni, wa, ki o ye.

6: Niti iparun ti aiye yi,
Mo fi anu fa sehin,
Sibe aigbagbo nposi,
Nwon nsin orisa, aje,
Nwon lo arakan ati ika,
Fi won le wa ‘do Mi.

7: Mo ti pese ohun rere fun o,
Ade didan iye na,
Bugbe re nduro de o,
Lori ile didara na,
F’aiye sile, wa sodo Mi,
Emi o tewo gba o.           Amin`},{number:`277`,title:`Jesus is calling on you,`,category:`Good News`,lyrics:`English Version

1: Jesus is calling on you,
Hasten up do come now,
Jesus is calling on you,
Hasten up do come now,

2: Comforter Spirit descends
Hasten up do come now,
Hasten up do come now.

3: Salvation Spirit descends
Hasten up do come now,
Healing Spirit descends,
Hasten up do come now.

4: Unity Spirit descends,
Hasten up do come now
Unity Spirit descends,
Hasten up do come now.            Amen

Yoruba Version

1: Jesu lo npe yin wa o,
Yara, tete ma bo,
Jesu lo npe yin wa o,
Yara, tete ma bo.

2: Emi tunu de,
Yara, tete ma bo,
Emi idapo de o
Yara, tete ma bo.

3: Emi igbala de o,
Yara, tete ma bo,
Emi Iwosan de o,
Yara, tete ma bo.

4: Emi isokan de o,
Yara, tete ma bo
Emi isokan de o,

Yara, tete ma bo.                Amin`},{number:`278`,title:`Halleluyah, Halleluyah,`,category:`Good News`,lyrics:`English Version

1: Halleluyah, Halleluyah,
Halleluyah, Halleluyah,
Believe Jesus within the broad light,
The world is heading towards its end,
The world is heading towards its end.
Chorus: Jesus Christ’s the Father of
this light,
Let’s kneel by His feet,
And expect joyfulness on the last day,
And expect joyfulness on the last day.

2: Hosanna’s song of the Angels,
Hosanna’s song of the Angels,
Let’s work spiritually in Celestial,
So we might be thanked and called a
good servant,
So we might be thanked and called a
good servant.
Chorus: Jesus Christ’s the Father of
this light,
Let’s kneel by His feet,
And expect joyfulness on the last day,
And expect joyfulness on the last day.
Amen

Yoruba Version

1: Halleluya, Halleluya,
Halleluya, Halleluya,
E gba Jesu gbo ninu imole nla,
Aiye nsare losi si opin aiye,
Chorus: Jesu Kristi ni Baba imole yi,
Ka wole le ba ese Re,
Ka ma reti ayo lojo ikehin,
K’ama reti ayo lojo ikehin.

2: Hossanah l’awon Angeli nke,
Hossanah l’awon Angeli nke,
Ka sise Emi ninu Ijo Mimo,
Ka le gbo omode rere o sehun,
Ka le gbo omode rere o sehun,
Chorus: Jesu Kristi ni Baba imole yi,
Ka wole le ba ese Re,
Ka ma reti ayo lojo ikehin,
K’ama reti ayo lojo ikehin.        Amin`},{number:`279`,title:`Come unto Me, Come unto Me,`,category:`Good News`,lyrics:`English Version

1: Come unto Me, Come unto Me,
Come unto Me,
So ye might receive the grace.

2: Mine is Salvation,
For Mine is mercy,
For holy is Mine,
The Angels thus sing holy.

3: Come with your sins,
Come to Celestial,
For mercy is with Jesus Christ.   Amen

Yoruba Version

1: Wa sodo Mi, wa sodo Mi,
Wa sodo Mi,
Lati gba ore-ofe.

2: Iye ni temi,
Anu ni temi,
Mimo ni temi,
Mimo l’awon Angeli nko.

3: Ko ese re wa,
Wa si Ijo Mimo,
Anu mbe lodo Jesu Kristi.        Amin`},{number:`280`,title:`We are the Holy church, the`,category:`Good News`,lyrics:`English Version

1: We are the Holy church, the
Celestial,
Celestial; Church is good,
Jesus our Father has given us good

things,
And now we are happy- Halleluyah.

2: We rejoice in Lord Jesus-in Celestial,
Jesus Christ stands by us,
All good things that we all request of
Him,
And He has given us Halleluyah.

3: We are the Holy Church up in
Heaven,
Celestial Church exits,
The Host of Angels rejoice with us all,
And now we’ve been made whole
Halleluyah.
Amen

Yoruba Version

1: Awa n’Ijo Mimo Aladura,
Ijo Mimo dara,
Jesu Baba wa f’ohun rere sile,
Inu wa si dun Halleluya.

2: Awa nyo ninu Jesu, n’Ijo Mimo,
Jesu mbe lehin wa,
Ohun gbogbo t’awa mbere lowo Re,
O si fi fun wa Halleluya.

3: Awa ni Ijo Mimo loke Orun,
Ijo Mimo mbe,
Awon Angeli nyo pelu wa,
Ara wa si ti ya Halleluya.    Amin`},{number:`281`,title:`Where art thou all?`,category:`Good News`,lyrics:`English Version

Where art thou all?
Ye the thirsty ones,
This is the water of life,
Come and drink, it’s free.       Amen

Yoruba Version

Nibo lewa,
Enyin t’ongbe ngbe,
Omi iye ni yi o,
E wa mu lo fe.      Amin`},{number:`282`,title:`Our Father, the Son, descend now,`,category:`Good News`,lyrics:`English Version

1: Our Father, the Son, descend now,
On the holy throne,
To bring blessing and glory unto Thy
children.

2: Heavenly Father in joy dwelleth,
With the host of Angels,
Jesus Christ, our Father does rejoice
with them.

3: Chant ye, Hosanna to our King,
Our Lord God of providence,
He dwelleth in His holy temple,
And rejoice.

4: Descend heavenly Father in
goodwill,
With the host of victorious Angels,
And we shall blissful be in this Celestial
fold.
5: Let’s chant Halleluyah to our King,
We all sinners,
Because the spirit of the Lord abides
with us truly.

6: Let us offer thanks to our God,
For His marvellous works,
On us His creatures His work is full of
miracles.

7: Celestial Church, the Holy Church,
Which I the Lord has blessed,
And sent to cleanse the numerous sins
of the whole world.

8: Let us sinners repent from our sins,
For judgement is imminent,
This I, the Lord, will on all the wicked.
Amen.

Yoruba Version

1: Baba wa, Omo sokale,
Lori ‘te Mimo Re.
Lati mu ibukun ati ogo f’omo Re.

2: Baba orun mbe ninu ayo,
Pelu awon Angeli,
Jesu Kristi, Baba wa nyo pelu won.

3: E ke Hossanah si Oba wa,
Oluwa Olubukun,
T’ombe ninu Tempili Re Mimo
O si nyo.

4: Baba wa Orun sokale sire,
Pelu awon Ogun Orun,
Awon si busi ayo fun Ijo Mimo yi.

5: E ke Halleluya s’Oba wa,
Awa elese yi,,
Nitoripe Emi Oluwa Mbe lotito.

6: K’ a fope fun Olorun wa,
Fun ise Re gbogbo
Iyanu ni ise Re, lori awa eda.

7: ‘Jo Celestial, Ijo Mimo,
T’Emi Oluwa bukun,
Nitori ese aiye po, l’a se mu yi wa.

8: K’awa elese yiwa pada,
T’ori idajo wo le,
Lo ri awon eni ibi, l’ Emi o se yi. Amin`},{number:`283`,title:`O hearken all ye people,`,category:`Good News`,lyrics:`English Version

1: O hearken all ye people,
To the voice of the Lord,
The day of judgement draws near,
That ye shall be reckoned.
Chorus: All the whole world have
sinned,
And fallen short of His glory,
O sinner the name of Jesus shall save us
all,
No other way that leads unto salvation,
Be prepared all ye people to accept
Jesus.

2: Most precious blood of Jesus,
Paid ransom for our sins,
Ye sinners be washed in it,
And we shall all be saved.
Chorus: All the whole world have
sinned,
And fallen short of His glory,
O sinner the name of Jesus shall save us
all,
No other way that leads unto salvation,
Be prepared all ye people to accept
Jesus.

3: We shall all be assembled,
Before the Lord Jesus,
All the youth and the adults,
We shall all give accounts.
Chorus: All the whole world have
sinned,

And fallen short of His glory,
O sinner the name of Jesus shall save us
all,
No other way that leads unto salvation,
Be prepared all ye people to accept
Jesus.

4: What reasons will we all give,
At the sight of Jesus,
So many people have gone,
Without accepting Jesus.
Chorus: All the whole world have
sinned,
And fallen short of His glory,
O sinner the name of Jesus shall save us
all,
No other way that leads unto salvation,
Be prepared all ye people to accept
Jesus.                 Amen

Yoruba Version

1: E wo gbogbo araiye,
Ohun Eleda yin,
Ojo ‘dajo sunmole,
A o ba yin siro,
Chorus: Gbogbo aiye lose,
Niwon si kuna Ogo Re,
Elese oruko Jesu yio gba wa la,
Ko si ona miran to toka s’orun,
Eyin araiye, e yara wa gba Jesu.

2: Eje yebiye Jesu,
Lose tutu ese wa,
Elese we ninu re,
A osi gba wala,
Chorus: Gbogbo aiye lose,
Niwon si kuna Ogo Re,
Elese oruko Jesu yio gba wa la,
Ko si ona miran to toka s’orun,
Eyin araiye, e yara wa gba Jesu.

3: Gbogbo wa ni yio duro,
Niwaju Oluwa,
Atewe ati agba,
A o si ro ‘jo wa,
Chorus: Gbogbo aiye lose,
Niwon si kuna Ogo Re,
Elese oruko Jesu yio gba wa la,
Ko si ona miran to toka s’orun,
Eyin araiye, e yara wa gba Jesu.

4: Kini iwo, temi yi o wi?
Nigbati a o ri Jesu,

Opo enia to ku,
Ni alaini Jesu,
Chorus: Gbogbo aiye lose,
Niwon si kuna Ogo Re,
Elese oruko Jesu yio gba wa la,
Ko si ona miran to toka s’orun,
Eyin araiye, e yara wa gba Jesu.
Amin`},{number:`284`,title:`Salvation come today,`,category:`Good News`,lyrics:`English Version

1: Salvation come today,
To all ye Celestians,
Hear ye the sounding call,
The call of the Shepherd.

2: The call is continuous,
Waste ye no precious time,
Give cover to your soul,
Before time expire.

3: The saviour now is come,
To give us redemption,
Be sober for your sins,
That may be frightening you.    Amen

Yoruba Version

1: Igbala de loni,
Enyin Ijo – Mimo,
E gbo bi ipe ti ndun,
Ipe Odo Aguntan.

2: Ipe na dun kikan,
E mase jafara,
Sa sala f’emi re,
Ka koko to koja.

3: Olugbala na de
Lati ra wa pada,
E kanu fese yin,
Ti nda eru ba yin.            Amin`},{number:`285`,title:`Oh, come ye and hearken,`,category:`Good News`,lyrics:`English Version

Oh, come ye and hearken,
To the message of our Father,
O come, O come, O come, O come,
Oh, come ye and hearken.      Amen

Yoruba Version

E wa, ke wa gboro,
Oro Baba wa ni eyi je,
E wa, e wa, e wa, e wa,
E wa, ke wa gboro.            Amin`},{number:`286`,title:`This is the time to think,`,category:`Good News`,lyrics:`English Version

1: This is the time to think,
Make haste to everlasting life.
Chorus: The last ship has arrived,
Jesus calleth sinners,

The last ship has arrived,
Jesus calleth sinners,
Those people with doubtful mind,
They will land upon empty harbour,
Witches cannot board the ship,
They will land upon empty harbour,
Wizards cannot board the ship,
They will land upon empty harbour.

2: Vanity is this world,
And all they that dwell therein:
Chorus: The last ship has arrived,
Jesus calleth sinners,
The last ship has arrived,
Jesus calleth sinners,
Those people with doubtful mind,
They will land upon empty harbour,
Witches cannot board the ship,
They will land upon empty harbour,
Wizards cannot board the ship,
They will land upon empty harbour.

3: Holy, Holy, Holy,
Is not for this world alone:
Chorus: The last ship has arrived,
Jesus calleth sinners,
The last ship has arrived,
Jesus calleth sinners,
Those people with doubtful mind,
They will land upon empty harbour,
Witches cannot board the ship,
They will land upon empty harbour,
Wizards cannot board the ship,
They will land upon empty harbour.

4: The hour now has come,
Labour for Holy Father’s wishes:
Chorus: The last ship has arrived,
Jesus calleth sinners,
The last ship has arrived,
Jesus calleth sinners,
Those people with doubtful mind,
They will land upon empty harbour,
Witches cannot board the ship,
They will land upon empty harbour,
Wizards cannot board the ship,
They will land upon empty arbour.
Amen

Yoruba Version

1: Igba ironu de,
Yara si iye ainipekun,
Chorus: Oko kehin ti de,
Kristi npe elese,

Oko kehin ti de,
Kristi npe elese,
Awon Oniyemeji,
Nwon yio gunle sebute ofo,
Aje ko le woko na,
Nwon yio gunle sebute ofo,
Oso Aje ko le woko na,
Nwon yio gunle sebute ofo.

2: Asan lohun aiye,
Ati awon ohun ekun re,
Chorus: Oko kehin ti de,
Kristi npe elese,
Oko kehin ti de,
Kristi npe elese,
Awon Oniyemeji,
Nwon yio gunle sebute ofo,
Aje ko le woko na,
Nwon yio gunle sebute ofo,
Oso Aje ko le woko na,
Nwon yio gunle sebute ofo.

3: Mimo, Mimo, Mimo,
Ki ise ti aiye yi nikan,
Chorus: Oko kehin ti de,
Kristi npe elese,
Oko kehin ti de,
Kristi npe elese,
Awon Oniyemeji,
Nwon yio gunle sebute ofo,
Aje ko le woko na,
Nwon yio gunle sebute ofo,
Oso Aje ko le woko na,
Nwon yio gunle sebute ofo.

4: Wakati na ti de,
Sise ninu ife Mimo Baba,
Chorus: Oko kehin ti de,
Kristi npe elese,
Oko kehin ti de,
Kristi npe elese,
Awon Oniyemeji,
Nwon yio gunle sebute ofo,
Aje ko le woko na,
Nwon yio gunle sebute ofo,
Oso Aje ko le woko na,
Nwon yio gunle sebute ofo.   Amin`},{number:`287`,title:`Ye brethren, come and worship`,category:`Good News`,lyrics:`English Version

1: Ye brethren, come and worship
Jesus,
Chorus: Ponder within your hearts,
Salvation abides with Him,
Ponder within your hearts,
Salvation abides with Him.

2: The host of holy Angels proclaim,
The holy Doves chant praises,
Chorus: Ponder within your hearts,
Salvation abides with Him,
Ponder within your hearts,
Salvation abides with Him.
Amen

Yoruba Version

1: Enyin araiye, e sin Jesu,
Chorus: E bo ‘kan yin s’oro,
Igbala mbe lowo Re,
E bo ‘kan yin s’oro,
Igbala mbe lowo Re.

2: Awon Ogun Orun nfun ipe,
Eiye iwo nfi yin,
Chorus: E bo ‘kan yin s’oro,
Igbala mbe lowo Re,
E bo ‘kan yin s’oro,
Igbala mbe lowo Re.            Amin`},{number:`288`,title:`The world, raise ye up this song,`,category:`Good News`,lyrics:`English Version

s:d:r:m:r:d:r
r:r:m:f:m:r:m
s:d:r:m:r:d:r
s:l:d:r:d:t:d

1: The world, raise ye up this song,
The sacred song from Heaven,
The world, raise ye up this song,
Sing ye to the King our Lord.

2: O ye the Celestians,
Sing ye to the King our Lord,
Behold the crown that Father,
Descend to the crowning King.

3: O ye the Celestians,
Receive all ye the crown,
Those appointed for the crown,
Who are ready to worship.

4: The world, I’m ready,
To glorify you all,
Those who are set for it,
The crown is now ready.

5: My only Holy Church,
Descend from Heaven,
Those who worship in there,

They all dwelleth in the light.

6: My host of Angels doth,
Glorify My servants,
Ye servants of this world,
Be prepared to worship.

7: The lights is made ready,
And shineth on this earth,
Those who dwelleth in darkness,
Do come into the light.         Amen

Yoruba Version

s:d:r:m:r:d:r
r:r:m:f:m:r:m
s:d:r:m:r:d:r
s:l:d:r:d:t:d

1: Aiye, e gbe orin yi,
Orin Mimo t’Orun
Aiye, e gbe orin yi,
E korin s’Oba Oluwa.

2: Eyin Ijo Mimo,
E korin s’Oba Oluwa,
E wo ade ti Baba,
Sokale t’Oba Alade.

3: Eyin Ijo Mimo,
E gba ade yi sile,
Awon to yan falade,
To se tan lati sin.

4: Aiye mo ti se tan,
Lati se nyin logo,
Eni to ba mura,
Ogo na ti se tan.

5: Ijo Mimo temi,
Lat’Orun lo ti wa,
Awon to sin nibe,

Ninu ‘mole ‘won wa.

6: Awon Angeli ni,
Se ranse Mi logo,
Iranse ti aiye yi
E mura lati sin.

7: Imole na se tan,
O si ntan s’aiye,
Awon to wa lokunkun,
Nwa sinu Imole.                 Amin`},{number:`289`,title:`Let the world be full of joy,`,category:`Good News`,lyrics:`English Version

s:d:d:m:d:l
s:d:d:f:m:r
s:d:d:f:m:m:l:r:d:t
s:l:f:m:r:d
d : r : r : m: m : m : m : f : r : m
s:d:m:d:l:r:d:t:s:m:r:d

1: Let the world be full of joy,
Let world be full of joy,
The joy of our Lord Jesus Christ,
Let world be full of joy,
The joy, the joy, the joy of Jesus Christ,
The joy, the joy, the joy of Jesus Christ.

2: Let the world bow down,
Let the world bow down,
It’s the crown Jesus provided,
That we might wear the crown,
The crown, the crown, the crown of
glorious Lord,
The crown, the crown, the crown of
glorious Lord,

3: Worship ye steadfastly,
Worship ye steadfastly,
It’s this worship that will save us,
Worship ye steadfastly,
Worship, worship, this earthly worship,
Worship, worship, this worship will
save us.                             Amen

Yoruba Version

s:d:d:m:d:l
s:d:d:f:m:r
s:d:d:f:m:m:l:r:d:t
s:l:f:m:r:d
d : r : r : m: m : m : m : f : r : m
s:d:m:d:l:r:d:t:s:m:r:d

1: Aiye, e kun fayo,
Aiye, e kun fayo,
Ayo ti Jesu Kristi ni,
Aiye, e kun fayo,
Ayo, Ayo, Ayo, ti Jesu ni,
Ayo, Ayo, Ayo, ti Jesu ni.
.
2: Aiye, e teriba,
Aiye, e teriba,
Ade ti Jesu ti pese ni,
Ke le ri Ade na,
Ade, Ade, Ade, t’Oga Ogo ni,
Ade, Ade, Ade, t’Oga Ogo ni.

3: E tera m’esin yi,
E tera m’esin yi,
E sin yi ni yio gba wa la,
E tera m’esin yi,
Esin, Esin, Esin, ti aiye yi,
Esin, Esin, Esin, ti aiye yi,
Yio gba wa la.                  Amin`},{number:`290`,title:`Heavenly Father,`,category:`Good News`,lyrics:`English Version

1: Heavenly Father,
Owns this Celestial fold,
Chorus: The source of salvation,

The source of salvation,
The source of salvation,
He is the King of glory.

2: Ye that have gone astray,
This is the path of life,
Chorus: The source of salvation,
The source of salvation,
The source of salvation,
He is the King of glory.

3: The joy that is full of light,
He is the King of glory,
Chorus: The source of salvation,
The source of salvation,
The source of salvation,
He is the King of glory.

4: Water that would cleanse the world,
This is the holy fold.
Chorus: The source of salvation,
The source of salvation,
The source of salvation,
He is the King of glory.       Amen

Yoruba Version

1: Baba wa Orun,
Lo ‘ni Ijo Mimo yi,
Chorus: Orisun iye, iye,

Orisun iye, iye,
Orisun iye, iye,
L’oba Oga Ogo.

2: Enyin to sina jina,
Ona lo de yi,
Chorus: Orisun iye, iye,
Orisun iye, iye,
Orisun iye, iye,
L’oba Oga Ogo.

3: Mole to layo poyu,
L’oba Oga Ogo,
Chorus: Orisun iye, iye,
Orisun iye, iye,
Orisun iye, iye,
L’oba Oga Ogo.

4: Omi ti yio we aiye mo,
Loko Ijo yi,
Chorus: Orisun iye, iye,
Orisun iye, iye,
Orisun iye, iye,
L’oba Oga Ogo.                     Amin`},{number:`291`,title:`The voice of the Lord comes to you,`,category:`Good News`,lyrics:`English Version

s : d : r : m : l: d : t : l : s
s:d:r:m:d:r
s : d : r : m : l: d : t : l : s
s:l:d:r:d:t:d

1: The voice of the Lord comes to you,
From the Heaven above,
Be prepared to respond to the call,
So ye might see the glory.

2: This world shall surely come to an
end,
And all things shall cease,
Whoever harkens to the words
Shall also see the glory.

3: Celestial Church girdle up you loins,
That ye might fill your space,
The space Jesus has provided,
It is also for thine own.

4: The love of God are bountiful,
To all ye Celestians,

Be prepared to believe in Christ,
That ye might see the glory.

5: Let it be known to ye the world,
That in vain is this world,
The word of God in righteousness,
Shall this be in the end.

6: The sacred crown I have provided,
For those that believe in Me,
Shall wear the crown,
For the glory in the end.       Amen

Yoruba Version

s : d : r : m : l: d : t : l : s
s:d:r:m:d:r
s : d : r : m : l: d : t : l : s
s:l:d:r:d:t:d

1: Oro Oluwa ko si yin,
Latoke Orun wa,
E mura, ke gbo ipe na,
Ke si ri ogo na.

2: Aiye yi yio lo si opin,
Ohun gbogbo yio tan,
Enikeni to gbo oro na,
Yio si ri ogo na.

3: Ijo Mimo e tun ra di,
Ke le kun aye yin,
Aye ti Jesu wa sile,
Ti yin ni yio je.

4: Ife Oluwa ti po to,
S’enyin Ijo Mimo.
E mura ke gb’Oluwa gbo,

Ke le ri ogo Re.

5: Eyin, aiye ke mo daju,
P’asan laiye yi je,
Oro Oluwa ododo,
Ni yio je nikehin.

A de Mimo t’Emi ti pese,
F’awon to gba Mi gbo,
Awon to gbagbo yio dade na,
Lati sogo kehin.                Amin`},{number:`301`,title:`Rejoice, rejoice for the good thing,`,category:`Praise`,lyrics:`English Version

Rejoice, rejoice for the good thing,
The Lord did for us,
Celestial church rejoice in His glories,
Rejoice, rejoice for His good deeds that
are endless,
The Lord is an everlasting rock. Amen

Yoruba Version

E yo, e yo, ninu ore Re to se fun wa,
Ijo Mimo, e yo ninu Ogo Re,
E yo, e yo, ninu ore Re, ti ko lopin,
Apata aiyeraiye l’Oluwa.             Amin`},{number:`302`,title:`Let Celestial be full of joy,`,category:`Praise`,lyrics:`English Version

Let Celestial be full of joy,
In the temple of the Lord,
The joy our Father has descended,
Celestial church thus rejoices. Amen

Yoruba Version

Ijo Mimo, e kun f’ayo,
Ninu ife Oluwa,
Ayo to t;odo Baba wa,
Ijo Mimo, e yo.                Amin`},{number:`303`,title:`Host of Angels rejoice with the`,category:`Praise`,lyrics:`English Version

1: Host of Angels rejoice with the
Father, Host of Angels rejoice with the
Father,
The work the father sent us,
Same shall we all do,
Ha! Ha! Ha! Halleluyah,
Ha! Ha! Ha! Halleluyah,
Ha! Ha! Ha! Halleluyah,
Shall all be our songs.

2: In joy do we dwell with the Father,
In joy do we dwell with the Father,
The joy the Father provides,
Shall be endless,
Song! Song! Song! Song of victory,

Song! Song! Song! Song of victory,
Song! Song! Song! Song of victory,
We all sing on earth.          Amen

Yoruba Version

1: Awon Angeli yo lodo Baba,
Awon Angeli yo lodo Baba,
Ise ti Baba ran wa,
Lawa yio ma se,
Ha! Ha! Ha! Halleluya,
Ha! Ha! Ha! Halleluya,
Ha! Ha! Ha! Halleluya,
Lorin wa yio je.

2: Inu ayo la wa lodo Baba,
Inu ayo la wa lodo Baba,
Ayo ti Baba fun wa,
Ki yio de opin,
O! O! O! orin segun,
O! O! O! orin segun,

O! O! O! orin segun,
Lawa nko s’aiye.              Amin`},{number:`304`,title:`Rejoice, Rejoice, Rejoice, Rejoice,`,category:`Praise`,lyrics:`English Version

1: Rejoice, Rejoice, Rejoice, Rejoice,
Ye Celestial fold in this glory.

2: The joy of the Father gave us,
Celestial in His glory.

3: Glory, Glory, Glory, Glory,
To the Lord in heaven above.

4: With triumph and with humility,
Shall the world behold His glory.

5: Celestial church worship, worship,
It’s worship that will take you to
heaven.

6: Thus humility and worship,
Shall land you before the Father. Amen

Yoruba Version

1: E yo , e yo, e yo, e yo,
Ijo Mimo ninu ogo na.

2: Ayo ti Baba gbe fun wa,
Ijo Mimo ninu ogo Re.

3: Ogo, Ogo, Ogo, Ogo,
Ni fun l’Orun loke.

4: Ayo ati iteriba,
Laiye yi yio ri ogo Re.

5: Ijo Mimo, E sin , e sin,
Esin ni yio gbe nyin lo s’orun

6: Iteriba at’ esin
Yio gbe yin dodo Baba.           Amin`},{number:`305`,title:`Children of Holy Celestial,`,category:`Praise`,lyrics:`English Version

Children of Holy Celestial,
From Holy Heaven above,
We all shout for joy,
We all dance with joy,
We all shout Halleluyah,
Who ever belongs to God,
No evil can confront him.       Amen

Yoruba Version

Omo ‘jo Celestial Mimo,
Lat’ Orun Mimo wa ni,
A nho f’ayo, a nbu sayo,
A nke Halleluya,
Eni to Olorun se tire,
Ta lo le ko ju ija si.               Amin`},{number:`306`,title:`Come rejoice with us O ye Angels,`,category:`Praise`,lyrics:`English Version

Come rejoice with us O ye Angels,
Rejoice with us O heavenly stars,
We shall all praise the glorious King,
For the grace bestowed in us.     Amen

Yoruba Version

E ba wa yo enyin Maleka,
E ba wa yo ‘rawo Orun,
Awa o yin Oga Ogo,
F’ore ofe to fi fun wa.          Amin`},{number:`307`,title:`Celestial Church rejoice,`,category:`Praise`,lyrics:`English Version

1: Celestial Church rejoice,
Rejoice, rejoice, rejoice in Jesus.

2: Ye holy fold, rejoice,
Rejoice, rejoice, rejoice in Jesus.

3: Children of the Lord, rejoice,
Rejoice, rejoice, rejoice in Jesus.
Amen

Yoruba Version

1: Ijo Mimo, e yo,
E yo, e yo, e yo ninu Jesu.

2: Aladura eyo,
E yo, e yo, e yo ninu Jesu.

3: Omo Olorun, e yo,
E yo, e yo, e yo ninu Jesu.          Amin`},{number:`308`,title:`Halleluyah! Halleluyah!`,category:`Praise`,lyrics:`English Version

Halleluyah! Halleluyah!
Halleluyah, the host of Angels rejoice,
I shall worship Thee with enormous
happiness,
I shall worship Thee with enormous
happiness.                        Amen

Yoruba Version

Halleluya! Halleluya!
Halleluya, awon Angeli nyo,
Emi yio sin O, pelu ayo nla, nla,
Emi yio sin O, pelu ayo nla, nla.     Amin`},{number:`309`,title:`Praise Thee my King,`,category:`Praise`,lyrics:`English Version

1: Praise Thee my King,
I praise Thee above all,
Let us lift high His name,
For-ever-more.

2: Praise ye the king of the light,
Kneel down before Him,
Request for His name,
He will tell us.

3: Look towards King of the light,
Is here amidst us,
With us till the end of time on earth.
Amen

Yoruba Version

1: Mo yin Oba mi,
Mo yin O loke,
E gbe oruko Re ga titi laiye.

2: E yin Oba Imole,
E wole ni waju Re,
E bere oruko Re,
Yio fi fun wa.

3: E wo Oba Imole,
Ti mbe pelu wa,
Yio wa pelu wa dopin aiye.           Amin`},{number:`310`,title:`The children dance, they all rejoice`,category:`Praise`,lyrics:`English Version

The children dance, they all rejoice
While Father also rejoice,
With songs of joy.

2: Halleluyah, we shall sing,
While Angels also rejoice,
With songs of joy.

3: Holy, Holy,
We shall all sing,
At that time King of glory
Glorify us.                     Amen

Yoruba Version

1: Omo njo, omo nyo,
Nigbati Baba wa nyo,
Pelu orin ayo.

2: Halleluya la o ma ko,
Nigbati Maleka nyo,
Pelu orin ayo.

3: Mimo, Mimo,
La o mako,
Nigbati Oba Ogo
Se wa l’ogo,                  Amin`},{number:`311`,title:`Oh! Oh! Oh our dear Lord,`,category:`Praise`,lyrics:`English Version

Oh! Oh! Oh our dear Lord,
Praise ye the Lord

Oh! Oh! Oh our dear Lord,
Descend ye host of Angels
Heavenly host, come,
And rejoice with us.     Amen

Yoruba Version

O! O! O! Oluwa,
E yin Oluwa,

O! O! O! Oluwa,
Enyin Mimo t’Orun wa,
Mimo t’Orun wa
E ng’yo pelu wa.                 Amin`},{number:`312`,title:`I shall glorify Jesus,`,category:`Praise`,lyrics:`English Version

1: I shall glorify Jesus,
I shall glorify Jesus,
He hath done exceedingly,
I shall glorify Jesus.

2: I shall glorify Jesus,
I shall glorify Jesus,
He paid ransom fo me on the wondrous
cross,
I shall glorify Jesus.

3: I shall glorify Jesus,
I shall glorify Jesus,
He who provides for all my needs,
I shall glorify Jesus.

4: I shall glorify Jesus,
I shall glorify Jesus,
He helped me through the earthly
storms,
I shall glorify Jesus.        Amen

Yoruba Version

1: Emi a yin Jesu l’ogo,
Emi a yin Jesu l’ogo,
Ore to se fun mi po,
Emi a yin Jesu l’ogo.

2: Emi a yin Jesu l’ogo,
Emi a yin Jesu l’ogo,
Eni to ku fun mi lori agbelebu,
Emi a yin Jesu l’ogo.

3: Emi a yin Jesu l’ogo,
Emi a yin Jesu l’ogo,
Eni to pese fun jije ati mimu,
Emi a yin Jesu l’ogo,

4: Emi a yin Jesu l’ogo,
Emi a yin Jesu l’ogo,
Eni to mu mi la wahala aiye yi ja,
Emi a yin Jesu l’ogo.              Amin`},{number:`326`,title:`Praise ye the Lord, my dear Lord,`,category:`Glory`,lyrics:`English Version

Praise ye the Lord, my dear Lord,
Praise ye the Lord, my dear Lord,
The host of Angels praise,
The Lord in heaven above.         Amen

Yoruba Version

E yin Oluwa, Olorun mi,
E yin Oluwa, Olorun mi,
Awon Angeli nyin,
Oluwa l’oke Orun.                 Amin`},{number:`327`,title:`Halleluyah! Halleluyah!!`,category:`Glory`,lyrics:`English Version

1: Halleluyah! Halleluyah!!
Halleluyah!!!
Halle; Halle, Halleluyah.

2: Shout and rejoice Celestial Church,

To King of glory guiding us till this
day.

3: Shout and rejoice with the host of
Angels,
Let the world sing with host of Angels
in Heaven.

4: Halleluyah! Halleluyah!!
Halleluyah!!!
Halle; Halle, Halleluyah.        Amen

Yoruba Version

1: Halleluya! Halleluya!! Halleluya!!!
Halle; Halle, Halleluya.

2: E ho, e yo, Ijo Mimo,
S’Oba Ogo, to da wa si dojo oni.

3: E ho, e yo, pelu awon Angel’
Kaiye korin pelu awon Angel’ loke.

4: Halleluya! Halleluya!! Halleluya!!!
Halle; Halle, Halleluya.           Amin`},{number:`328`,title:`In His power,`,category:`Glory`,lyrics:`English Version

In His power,
In His glories,
On His everlasting blessings,
Praise the Father,
Praise the Father,
That thou might behold His glory,
Halleluyah, Halleluyah,
A1 A! A! Halleluya.             Amen

Yoruba Version

Ninu Agbara,
Ninu Ogo Re,
Ninu ibukun Re aiyeraiye,
Yin Baba na,
Yin Baba na,
K’iwo ko le r’ogo Re,
Halleluya, Halleluya,
A1 A! A! Halleluya.              Amin`},{number:`329`,title:`Raise ye song of praise,`,category:`Glory`,lyrics:`English Version

1: Raise ye song of praise,
Chanting Halleluyah,
Sing ye songs of praises,
His glories magnify.

2: Descend heavenly Spirit,
And strengthen us we plead,
Giving the world assurance,
That thou art Holy God.

3: Holy! Holy!! Holy!
The Angel’s song
To glorify our heavenly Father,
Creator of Heaven and Earth.    Amen

Yoruba Version

1: E gbe orin yin soke,
E ke Halleluya,
E gbe orin yin soke,
E gbe Ogo Re ga.

2: Emi orun sokale,
Wa fun wa lagbara,
Kaiye lemo daju pe,
Ire l’Olorun wa.

3: Mimo, Mimo, Mimo,
Lorin awon Angeli,
Fi yin Baba wa loke,
Eleda orun on aiye.              Amin`},{number:`330`,title:`Praise ye Jesu, praise ye Jesus,`,category:`Glory`,lyrics:`English Version

1: Praise ye Jesu, praise ye Jesus,
For the last Church He descended,
Praise ye Jesu, praise ye Jesus,
For the last Church He descended,
Chorus: Praise ye Jesu, praise ye Jesus,
For the last Church He descended,
Praise ye Jesu, praise ye Jesus,
For the last Church He descended.

2: By the power of blood of Jesus,
That the Father founded it,
Praise ye Jesu, praise ye Jesus,
For the last Church He descended,
Chorus: Praise ye Jesu, praise ye Jesus,
For the last Church He descended,
Praise ye Jesu, praise ye Jesus,
For the last Church He descended.

3: Ye elders rise up in singing,
The remaining time is short,
Praise ye Jesu, praise ye Jesus,
For the last Church He descended,
Chorus: Praise ye Jesu, praise ye Jesus,
For the last Church He descended,
Praise ye Jesu, praise ye Jesus,
For the last Church He descended.

4: Ye the youth rise up in singing,
The remaining time is short,
Praise ye Jesu, praise ye Jesus,
For the last Church He descended,
Chorus: Praise ye Jesu, praise ye Jesus,
For the last Church He descended,
Praise ye Jesu, praise ye Jesus,
For the last Church He descended.

5: The witches are all confounded,
The wizards are all confused,
Devil trembles even crumbles,
Before the power of this church,
Chorus: Praise ye Jesu, praise ye Jesus,
For the last Church He descended,
Praise ye Jesu, praise ye Jesus,
For the last Church He descended.
Amen

Yoruba Version

1: Eyin Jesu, e yin Jesu,
Fun ‘jo kehin to so kale,
Eyin Jesu, e yin Jesu,
Fun ‘jo kehin to so kale,
Chorus: Eyin Jesu, e yin Jesu,
Fun ‘jo kehin to so kale,
Eyin Jesu, e yin Jesu,
Fun ‘jo kehin, toso kale.

2: Nipa agbara eje Jesu,
Ni Baba fi gbe kale,
Eyin Jesu, e yin Jesu,
Fun ‘jo kehin to so kale,
Chorus: Eyin Jesu, e yin Jesu,
Fun ‘jo kehin to so kale,
Eyin Jesu, e yin Jesu,
Fun ‘jo kehin, toso kale.

3: Eyin agba, e dide korin,
Igba aiye, toku ko po
Eyin Jesu, e yin Jesu,
Fun ‘jo kehin to so kale,
Chorus: Eyin Jesu, e yin Jesu,
Fun ‘jo kehin to so kale,
Eyin Jesu, e yin Jesu,
Fun ‘jo kehin, toso kale.

4: Eyin omode, e dide korin,
Igba aiye to ku ko po,
Eyin Jesu, e yin Jesu,
Fun ‘jo kehin to so kale,
Chorus: Eyin Jesu, e yin Jesu,
Fun ‘jo kehin to so kale,
Eyin Jesu, e yin Jesu,
Fun ‘jo kehin, toso kale.

5: Awon aje tiri tiju,
Awon oso tiri idamu,
Esu wariri o subu,
Niwaju agbara Ijo yi
Chorus: Eyin Jesu, e yin Jesu,
Fun ‘jo kehin to so kale,
Eyin Jesu, e yin Jesu,
Fun ‘jo kehin, toso kale.   Amin`},{number:`331`,title:`Oh praise the Lord all ye His Saints,`,category:`Glory`,lyrics:`English Version

Oh praise the Lord all ye His Saints,
Because of this Celestial Church,
The joy the world cannot give us,
Our Lord established it,
To gather seedlings heaven ward,
Heaven ward to Father Divine,
The Lord His messengers will He
choose
Within this holy fold.           Amen

Yoruba Version

E yin Oluwa, enyin Mimo,
Fun ‘jo at’ orun wa Mimo,
Ayo taiye ko le fun ni,
Oluwa lo fi le le ,
Lati ko rugbin lo s’orun,
S’Orun sodo Baba Mimo,
Oluwa yio yan ojise Re,
Sinu ‘jo Mimo yi.                Amin`},{number:`332`,title:`Oh! Halleluyah, Oh! Halleluyah,`,category:`Glory`,lyrics:`English Version

Oh! Halleluyah, Oh! Halleluyah,
Praise the Father,
Oh! Halleluyah, Oh! Halleluyah. Amen

Yoruba Version

Halleluya o! Halleluya o!
E yin Baba,
Halleluya o! Halleluya o!      Amin`},{number:`351`,title:`Believe me,`,category:`Joy`,lyrics:`English Version

1: Believe me,
That this year will be our year of peace,
That this year will be our year of peace.

2: Believe me,
The Lord has come with joy,
The Lord has come with joy.

3: Believe me,
The Lord will glorify us,
The Lord will glorify us

4: Believe me,
Jesus has brought blessing
Jesus has brought blessing
5: Believe me,
That this year will be our year of peace,
That this year will be our year of peace

Yoruba Version

1: Gba mi gbo,
P’odun yi a san wa,
P’odun yi a san wa.

2: Gba mi gbo,
P’alayo mayo de,
P’alayo mayo de,

3: Gba mi gbo,
P’alayo ma sogo,
P’alayo ma sogo.

4: Gba mi gbo,
Pe Jesu gbere de,
Pe Jesu gbere de.
5: Gba mi gbo,
P’odun yi a san wa,
P’odun yi a san wa.            Amin`},{number:`352`,title:`Oh ye choristers of Celestial,`,category:`Joy`,lyrics:`English Version

1: Oh ye choristers of Celestial,
Sing ye aloud the songs of the Lord,
With the host of Angeles in heaven
above
Sing ye sweet songs in harmony.

2: Ye the beloved in Celestial,
Magnify the Lord in heaven above,
With the host of Angeles in heaven
above
Praise ye the Father on His holy throne.
Amen

Yoruba Version

1: E yin akorin n’jo Mimo,
E ko rin Oluwa s’oke,
Pelu awon Angeli l’oke Orun,
E jumo ko rin yin didun.

2: Eyin ayanfe, ni Ijo Mimo,
E gbe Oluwa ga l’oke Orun,
Pelu awon Angeli l’oke Orun,
Eyin Baba na, l’ori ite Re.     Amin`},{number:`353`,title:`Chant ye for joy,`,category:`Joy`,lyrics:`English Version

1: Chant ye for joy,
The Angels bust for joy,
Chant ye for joy,
The Angels bust for joy.

2: Celestial Church,
Holy, Holy from heaven above,
Celestial Church,
Holy, Holy from heaven above.     Amen

Yoruba Version

1: E ho fayo,
Awon Angeli nwon ng’yo,
E ho fayo,
Awon Angeli nwon ng’yo.

2: Ijo Mimo,
Mimo, Mimo l’atorun wa,
Ijo Mimo,
Mimo, Mimo l’atorun wa.         Amin`},{number:`354`,title:`We shall chant Halleluya when we see`,category:`Joy`,lyrics:`English Version

We shall chant Halleluya when we see
Jesus,
In His joy shall we be victorious,
We shall sing with the Angels in
harmony,
Holy, Holy shall we sing to glorious
King
Halleluyah, Halleluyah,
Halleluyah, Halleluyah,
We shall render sweet songs on that
day.                          Amen

Yoruba Version`},{number:`355`,title:`Jesus the King of glory,`,category:`Joy`,lyrics:`English Version

1: Jesus the King of glory,
Jesus the King of glory,
Jesus the King of glory,
Jesus the King of glory,
I shall bow with reverence fo Jesus,
Jesus the King of glory,
I shall give praise to Jesus,
Jesus the King of glory.

2: Jesus the king of glory,
Jesus the king of glory,
Jesus the king of glory,
Jesus the king of glory,
I shall fear no witches
Jesus the king of glory,
I shall fear no wizards,
Jesus the king of glory,
I shall no tribulation,
Jesus the king of glory.        Amen

Yoruba Version

1: Jesu l’Oba Ologo,
Jesu l’Oba Ologo,
Jesu l’Oba Ologo,
Jesu l’Oba Ologo,
Emi a fori bale fun Jesu,
Jesu l’Oba Ologo,
Emi a fori bale fun Jesu,
Jesu l’Oba Ologo.

2: Jesu l’Oba Ologo,
Jesu l’Oba Ologo,
Jesu l’Oba Ologo,
Jesu l’Oba Ologo,
Eru oso ko ba mi,
Jesu l’Oba Ologo,
Eru aje ko bami,
Jesu l’Oba Ologo,
Eru iponju ko ba mi,
Jesu l’Oba Ologo.               Amin`},{number:`356`,title:`The Angels sing songs of praises,`,category:`Joy`,lyrics:`English Version

s : s : s : l : l : l : s :-

s : s : s : l : l : l : s :-
s:s:s:s:d:t
s:f:m:r:m:r:d

1: The Angels sing songs of praises,
Unto our Father on high,
Glory be to Jesus,
Glory be to His name.

2: Let us sing songs of praises,
Unto our Father on high,
Glory be to Jesus,
Glory be to His name.

3: Holy, Holy shall thus be our song,
To praise our Father in heaven,
That the Angels encore,
Glory be to His name.             Amen

Songs for Thanksgiving

Yoruba Version

s : s : s : l : l : l : s :-

s : s : s : l : l : l : s :-
s:s:s:s:d:t
s:f:m:r:m:r:d

1: Awon Maleka nkorin iyin,
Fi yin Baba li Orun,
Ogo ni fun Jesu,
Ogo ni f’oruko Re.

2: E je korin iyin,
Fi yin Baba li Orun,
Ogo ni fun Jesu,
Ogo ni f’oruko Re.

3: Mimo, Mimo ni orin wa,
Ta o fi yin Baba li orun
T’awon Maleka nko,
Ogo ni f’oruko Re.        Amin

Orin Ope`},{number:`376`,title:`Jesus communicator of my soul,`,category:`Thanksgiving`,lyrics:`English Version

1: Jesus communicator of my soul,
The friend that can never forsake me,
The King who turns sorrow to joy,
The comforter of my soul,
Chorus: Jehovah – Nissi our Lord,
My own fortress I thank Thee,
For founding this congregation,
During my own life-time.

2: Amidst all enemies and hardships,
You exalted us o’er earthly storms,
Our Lord God we give Thee thanks,
We thank Thee, we thank Thee,
Chorus: Jehovah – Nissi our Lord,
My own fortress I thank Thee,
For founding this congregation,
During my own life-time.
Amen

Yoruba Version

1: Jesu Olubaso Okan mi,
Ore ti ko le ko mi sile,
Oba ti nso ekun d’ayo,
Olutunu okan mi,
Chorus: Jehovah Nissi Oluwa,
Opagun mi, mo dupe,
Fun ‘dasi ’le, Ijo Mimo,
To s’oju emi mi.

2: L’arin ota, l’arin idamu,
O ko fi mi, fun iji aiye,
A! Oluwa mi, mo dupe,
Mo dupe, mo dupe,
Chorus: Jehovah Nissi Oluwa,
Opagun mi, mo dupe,
Fun ‘dasi ’le, Ijo Mimo,
To s’oju emi mi.             Amin`},{number:`377`,title:`Let us give thank to the lord,`,category:`Thanksgiving`,lyrics:`English Version

1: Let us give thank to the lord,
Jehovah the Almighty,
Creator of heaven and earth,

Who guideth us till this day.

2: He made the seven Heaven,
And even the seven Earths,
The sun and even moon,
That illuminates us around.
He fed all creatures sustaineth,
Even the birds of the air,
Sowing not harvesting not,
Also with beasts of the field.

4: Join us all to praise the Lord,
Whose glory is eternal,
King of evershining light,
King of our victory.

5: Jehovah Holy, Holy, Holy,
Behold us with Thine favour,
And be our protector in
This Holy congregation.

6: Jesus Christ the Redeemer,
Bind us with Thy salvation,
That we might be free from sin,
Sake of Thy blood that floweth.

7: Holy Michael our captain,
Defender of all the saints,
Lift thy sword in our defence
To conquer evil spirit.

8: Glory to Father on high,
Glory to His equal Son,
Glory to the Holy Ghost,
Trinity everlasting.                 Amen

Yoruba Version

1: E je k’a fope fun Baba,
Jehovah Olodumare,
Eleda Orun aiye,

To da wa si di oni.

2: On lo da Orun meje,
Ati ile meje pelu,
Orun ati Osupa,
Ti ntanmole yi wa ka.

3: O fi onje fun gbogbo eda,
Eiye iwo to nfo koja,
Ti k’ogbin, ti ko kore,
Ati eranko igbe.

4: E ba wa, yin Oluwa,
Ologo ti ko nipekun,
Ona okiki Imole,
Oba Olusegun wa,

5: Jehovah, Mimo, Mimo, Mimo,
F’oju rere Re wo wa,
Ko si ma samona wa,
Ninu Ijo Mimo yi.

6: Jesu Kristi, Olugbala,
F’ igbala Re kari wa,
Ka be ninu ese,
Nitori isun eje Re.

7: Michael Mimo. Balogun wa,
Olugbeja ‘won eni Mimo,
Gbe ida re soke fun wa,
Lati segun emi esu.

8: Ogo ni fun Baba l’Orun,
Ogo ni fun Omo Re,
Ogo ni fun Emi Mimo,
Meta lokan aiyeraiye.          Amin`},{number:`378`,title:`It’s fitting for us to thank our King and`,category:`Thanksgiving`,lyrics:`English Version

It’s fitting for us to thank our King and
Lord,
Let us give thanks-offering to our Lord,
Little ants give thank to God,
Sands of sea shore offer thanks,
Let’s also give our thanks,
Halleluyah to the Lord,
Let us give praises to God.      Amen

Yoruba Version

O ye wa, ka fope fun Oba Oluwa,
E je k’a wa fope fun Oluwa,
Era ile won dupe,
Yarin okun won dupe,
E je ka wa na dupe,
Halleluya f’Oluwa,
E je ka yin Oluwa.          Amin`},{number:`379`,title:`We thank, we thank, we thank our`,category:`Thanksgiving`,lyrics:`English Version

We thank, we thank, we thank our
Father,
We are thankful to Jehovah
Who created us all.           Amen

Yoruba Version

Ope, ope, fun Baba,
A dupe fun Jehovah,
Ohun lo da gbogbo wa.   Amin`},{number:`380`,title:`We give our thanks,`,category:`Thanksgiving`,lyrics:`English Version

1: We give our thanks,
We give our thanks,
We give our thanks,
Gratitude to Jehovah.

2: Halleluyah,
Halleluyah,
Halleluyah,
Glory to Jesus in highest.      Amen

Yoruba Version

1: Awa dupe o,
Awa dupe o,
Awa dupe o,
Ope fun Jehovah.

2: Halleluya,
Halleluya,
Halleluya,
Ogo fun Jesu l’oke.          Amin`},{number:`381`,title:`Father accept our thanks,`,category:`Thanksgiving`,lyrics:`English Version

d:d:r:m:d
r:r:m:f:r
m:m:m:s:m
s:m:d:f:r:d

Father accept our thanks,
The Son accept our thanks,
Father accept our thanks,
We are praising the Lord.        Amen

Yoruba Version

d:d:r:m:d
r:r:m:f:r
m:m:m:s:m
s:m:d:f:r:d

Baba gbope wa,
Omo gbope wa,
Baba gbope wa,
Awa nyin Oluwa.              Amin`},{number:`382`,title:`It’s fitting for us to thank our Lord,`,category:`Thanksgiving`,lyrics:`English Version

It’s fitting for us to thank our Lord,
We that dwelleth on the earth,
Hearken unto the voice of Thy children,
As you have hearken unto our father,
We sinners call unto Thee,
Hearken unto us.                    Amen

Yoruba Version

O ye wa, k’a fope f’Oluwa,
Awa ti mbe ni aiye,
Jowo gbo ohun awa omo Re,
Gege bo ti gbo ti isiwaju,
Awa elese nke pe e O,
Jowo gbohun wa.            Amin`},{number:`383`,title:`Gratitude to Lord,`,category:`Thanksgiving`,lyrics:`English Version

Gratitude to Lord,
Thanks be to Father
Gratitude to the Lord,
Thanks be to Jesus in the highest. Amen

Yoruba Version

Olope l’ope ye,
Ope ye Baba
Olope l’ope ye,
Ope ye Jesu l’oke.           Amin`},{number:`384`,title:`Let us give thanks to our Father,`,category:`Thanksgiving`,lyrics:`English Version

Let us give thanks to our Father,
The sun and moon are wrapped in light,

The world cannot overshadow,
The power in His fold,
King of Heaven sent it to us,
The Angels are rejoicing,
Rejoicing all in Christ,
The Angels are rejoicing,
Rejoicing all in Christ.      Amen

Yoruba Version

Eje ka f’ope fun Baba,
Orun, Osupa wa ninu Imole,

Enia ko ni agbara,
L’ori Ijo Mimo yi,
Baba Orun lo fi ranse,
Awon Angeli nyo, won nyo,
Won nyo ninu Kristi,
Awon Angeli nyo, won nyo,
Won nyo ninu Kristi.            Amin`},{number:`385`,title:`Father I thank Thee,`,category:`Thanksgiving`,lyrics:`English Version

Father I thank Thee,
Jesus I thank Thee,
For I am unclean, forgive me my sins,
For I am unclean, forgive me my sins.
Amen

Yoruba Version

Baba mo dupe,
Jesu mo dupe,
Alaimo le mi dariji mi o,
Alaimo le mi dariji mi o.      Amin`},{number:`386`,title:`We give thanks to the Father,`,category:`Thanksgiving`,lyrics:`English Version

1: We give thanks to the Father,
We give thanks to His Son,
We give thanks to the Holy Spirit,
I glorify Jesus.

2: : Halleluyah to Father,
Halleluyah to His Son,
Halleluyah to Holy Spirit,
I glorify Jesus.

3: Hosanna to Father,
Hosanna to His Son,
Hosanna to Holy Spirit,
I glorify Jesus.

4: Ebenezer to Father,
Ebenezer to His Son,
Ebenezer to Holy Spirit,
I glorify Jesus.                 Amen

Yoruba Version

1: Ope, ni fun Baba,
Ope ni fun Omo Re,
Ope ni fun Emi Mimo,
Emi a yin Jesu.

1: Halleluya fun Baba
Halleluya fun Omo Re,
Halleluya f’Emi Mimo
Emi a yin Jesu.

3: Hossanah Fun Baba,
Hossanah fun Omo Re,
Hossanah f’Emi Mimo
Emi a yin Jesu.

4: Ebenezer fun Baba,
Ebenezer fun Omo Re,
Ebenezer f’Emi Mimo
Emi a yin Jesu.               Amin`},{number:`387`,title:`If I have up to a thousand tongues,`,category:`Thanksgiving`,lyrics:`English Version

1: If I have up to a thousand tongues,
To praise the lord our God,
The glories of the Lord our King,
His victory and His grace,
Chorus: Did He not satisfy you?
Did He not satisfy me?
His Blood has made us whole,
His Blood has made us whole.

2: Jesus turns my sorrows to joy,
He erased all sadness,

He sees me as a great sinner,
Long life resounding health,
Chorus: Did He not satisfy you?
Did He not satisfy me?
His Blood has made us whole,
His Blood has made us whole.

3: My Father and my Almighty,
Give me a helping hand,
That I may proclaim to the world,
Through Thy gracious name,
Chorus: Did He not satisfy you?
Did He not satisfy me?
His Blood has made us whole,
His Blood has made us whole.

4: Thou sing and the deaf hear,
The blinds see salvation,
The trouble spirits burst for joy,
Brethren shout and rejoice,
Chorus: Did He not satisfy you?
Did He not satisfy me?
His Blood has made us whole,
His Blood has made us whole.        Amen

Yoruba Version

1: Emi ba legerun ahon,
Fi yin Olugbala,
Ogo Olorun Oba mi,
Isegun ore re,
Chorus: A bi ko seun fun o,
A o ma se fun mi,
Eje re se fun mi,
Eje re se fun mi.

2: Jesu to soro mi dayo,
O mu banuje tan,

Orin ‘yin lenu elese,
Iye ati ilera,
Chorus: A bi ko seun fun o,
A o ma se fun mi,
Eje re se fun mi,
Eje re se fun mi.

3: Baba mi at’Olorun mi,
Fun mi ni ‘ranwo Re,
Ki nle ro ka gbogbo aiye,
L’ola oruko Re,
Chorus: A bi ko seun fun o,
A o ma se fun mi,
Eje re se fun mi,
Eje re se fun mi.

4: O korin odi gbohun Re,
Afoju ri gbala,
Oniro banuje yo y’ayo,
Ara e ho fayo,
Chorus: A bi ko seun fun o,
A o ma se fun mi,
Eje re se fun mi,
Eje re se fun mi.           Amin

Orin Ibukun`},{number:`401`,title:`Our dear Lord come bless us all,`,category:`Blessing`,lyrics:`English Version

Our dear Lord come bless us all,
Bless us all, bless us all,
Our dear Lord come bless us all,
Thou art benevolent King.        Amen

Yoruba Version

Olorun wa bukun wa,
Bukun wa, bukun wa,
Olorun wa bukun wa,
Ire l’Oba Olubukun.            Amin`},{number:`402`,title:`Benevolent art thou o Lord,`,category:`Blessing`,lyrics:`English Version

Benevolent art thou o Lord,
Holy King of the Israelites,
Come bless us all.                Amen

Yoruba Version

Olubukun ni O, Oluwa,
Oluwa, Oba Mimo Israeli,
Wa bukun wa.                  Amin`},{number:`403`,title:`Our Father, our Father, our Father,`,category:`Blessing`,lyrics:`English Version

Our Father, our Father, our Father,
Holy Spirit Alejumoh,
Alejumoh bless us all
Till the end, Divine come near to us,
The Trinity, the Holy Trinity,

Alah-hi-san, Alah-hi-mi-hi-san is our
victory,
Chorus: Our Father, our Father, our
Father,
Holy Spirit Alejumoh,
Alejumoh bless us all.          Amen

Yoruba Version

Baba wa, Baba wa, Baba wa,
Emi Mimo Alejumoh,
Alejumoh bukun wa,
K’ ale Mimo jowo sunmo wa,
Metalokan, Metalokan Mimo,

Alah-hi-san, Alah-hi-mi-hi-san Ogun ni,
Chorus: Baba wa, Baba wa, Baba wa,
Alejumoh bukun wa.          Amin`},{number:`404`,title:`O all ye the little hills, obeying our`,category:`Blessing`,lyrics:`English Version

O all ye the little hills, obeying our
Father,
O all ye the little hills, obeying our
Father,
And all ye the birds of the air keeping
the Lord’s commandments,
And all ye the birds of the air keeping
the Lord’s commandments,
And all ye the child of men hearken
unto the lord,
And all ye the child of men hearken
unto the lord,
The Lord God most blessed, He will
bless every one,
The Lord God most blessed, He will
bless every one.                     Amen

Yoruba Version

Enyin oke kekeke, t’engbo ‘ti Baba,
Enyin oke kekeke, t’engbo ‘ti Baba,
Enyin eye oju orun t’engbo ase Baba,
Enyin eye oju orun t’engbo ase Baba,
Ati enyin omo enia, t’engbo t’Oluwa,
Ati enyin omo enia, t’engbo t’Oluwa,
Oluwa Olubukun yio bukun wa,
Oluwa Olubukun yio bukun wa. Amin`},{number:`405`,title:`Today is the day of our blessing,`,category:`Blessing`,lyrics:`English Version

1: Today is the day of our blessing,
Today is the day of our blessing,
May the Lord shower His blessing,
Upon His children.

2: Worship ye the Lord with all due
reverence,
Worship ye in all His Greatness,
May the lord come and lead us on
To His path.                    Amen

Yoruba Version

1: Ojo ibukun ni oni je,
Ojo ibukun ni oni je,
Oluwa jowo wa bukun,
Fun awa omo Re.

2: E sin Oluwa pelu iberu,
E e sin Oluwa pelu ogo nlan Re,
Oluwa jowo wa sin wa lo,
S’odo Re.                       Amin`},{number:`406`,title:`Jehovah, Jesus Christ,`,category:`Blessing`,lyrics:`English Version

1: Jehovah, Jesus Christ,
Holy Michael our captain,
Celestial is before Thee,
In dread and humble spirit,
Longing for the Holy Ghost,
Beauty of Heavenly grace,
Your blessing and upliftment,
Let them be for us.

2: Be fruitful and multiply,
Your promise for Abraham,
This season the coming year,
Thou would surely have a child,
This Thy promise fo Sarah,
Fulfil it for the barren
Who look up to thee Father,
Children like Isaac.

3: In the depth of the Red sea,
Pharaoh and all his army
All perished and woke no more
For Israelites peacefulness,
When all hope was exhausted,
Sea transformed into dry land,
With such powers,
Lead us into life everlasting.

4: The wisdom, knowledge and thy
understanding,
That Thou gave to Solomon,
Upliftment and salvation
Like of Joseph and Daniel,
Inspirations from Heaven,
Like of Paul and of Samuel,
Elmorijah who blesses,
Make these all fo us.

5: We are all expecting Thee,
Like the children of promise,
Mutual everlasting,
Life both inherit heaven,
With Thy spirit pilot us,
Bind us with Thy lion of power,
That we work without blemish,
Life everlasting.               Amen

Yoruba Version

1: Jehovah, Jesu Kristi,
Michael Mimo, oga ogun,
Ijo Mimo mbe Niwaju Re,
Teru tedun okan wa,
Lati saferi Emi Mimo,
E wa Oga Orun,
Ibukun ati gbega,
Ma se fi du wa.

2: Ma bi si i, si re si i,
Ileri Re f’ Abraham,
Niwoyi odun titun,
Iwo yio f’omo se re,
Ileri yi fun Sarah,
Jo muse f’awon agan,
Ti nwon nwoju Re,
F’omo b’ Isaki.

3: Ninu okun pupa ni,
Farao at’ogun re,
Parun laigberi mo,
Fun Isimi okan Israel,
Nigbati ‘reti dopin,
Okun diyangbe ile,
Nipa agbara Iyanu yi,
Sin ea de ‘nu iye.

4: Ogbon, imo, oye Re,
Gebebi ti Solomon,
Igbega ati igbala,
Bi ti Josef’ Daniel,
Imisi a ‘tohun Orun,
Bi ti Paul, Samueli,
Elmorijah, Olubukun,
Se nwon ni ti wa.

5: Awa nse ireti Re,
Gege b’omo ileri,
Ajo jumo jogun iye,
Ainipekun, ‘joba orun,
Wa f’Emi orun s’atoko,
Di wa l’amure agbara,
Ka sise laibawon,
Si iye ainipekun.                      Amin`},{number:`407`,title:`Come be with us, and bless us all,`,category:`Blessing`,lyrics:`English Version

s : s : l : s : d : d : r: d : r : d : r : m :-
s: s: s : s: s : f : m : r :- :- :-
s : s : l : s : d : d : r: d : r : d : r : m :-
s: s: s : s: : f : m : r : d :-

1: Come be with us, and bless us all,
Holy King,
Rain down thine blessings upon us,
To replenish and to increase in
Celestial,
Halleluyah might be our song.

2: Holy Michael raise up your sword
that we conquer,
All enemies of Celestial,
That the last ship might cleanse the
World on Christ order,
So we might all shout Hosanna.

3: For the pregnant and barren ones be
proud mothers,
May we all not be rejected,
In peace and great joy may we be in
Abundance
That life, salvation be our lot. Amen

Yoruba Version

s : s : l : s : d : d : r: d : r : d : r : m :-
s: s: s : s: s : f : m : r :- :- :-
s : s : l : s : d : d : r: d : r : d : r : m :-
s: s: s : s: : f : m : r : d :-

1: Wa pelu wa, sure fun wa, Oba Mimo,
Se ri ‘bukun Re s’ori wa,
Ka ma bisi, ka ma re si, ni Ijo Mimo,
K’ Alleluya le j’orin wa.

2: Michael Mimo, gbe’da soke ka le bori,

Gbogbo ota Ijo Mimo,
K’o ko kehin le w’aiye mo lase Kristi,
Ka le jumo ke Hossanah.

3: Ka boyun bi, kawon agan towo b’osun
Ka ma rago, ka ma pose,
Ka je seku, l’alafia ninu ayo nla,
Ki iye, igbala je pin wa.          Amin`},{number:`408`,title:`Jesus, Jesus, Jesus the King full of light,`,category:`Blessing`,lyrics:`English Version

s:f:m:s:f:m:r:r:r:r:l:l:s
m:l:s:f:m:r

Jesus, Jesus, Jesus the King full of light,
I give my heart to Thee,
Come into my heart
Holy Spirit, descend now.         Amen

Yoruba Version

s:f:m:s:f:m:r:r:r:r:l:l:s
m:l:s:f:m:r
r:r:r:r:l:s:

Jesu, Jesu, Jesu L’Oba Imole,
Mo s’okan mi fun O,
Wa sinu okan mi,
Emi Mimo sokale wa.              Amin`},{number:`409`,title:`Jesus, O Thou art my King,`,category:`Blessing`,lyrics:`English Version

s:m:d:m:s:l:l:s
m:d:l:s:d:r:r:d
s:m:s:s:m:d:m:s:d:m:r
m:r:m:m:d:l:r:m:t:r:d
s:m:m:l:d:m:s:d:m:r
s:m:d:m:s:l:l:s
m:d:l:s:d:r:r:d

Jesus, O Thou art my King,
Jesus, O Thou art my King,
Jesus, O Thou art my King,
Jesus, O Thou art my King,
I solemnly call unto Thee in the
morning
I solemnly call unto Thee in the
morning
I solemnly call unto Thee in the noon –
time,
I solemnly call unto Thee in the noon –
time,
Jesus, O Thou art my King,

Jesus, O Thou art my King,
Jesus, O Thou art my King,
Jesus, O Thou art my King.       Amen

Yoruba Version

s:m:d:m:s:l:l:s
m:d:l:s:d:r:r:d
s:m:s:s:m:d:m:s:d:m:r
m:r:m:m:d:l:r:m:t:r:d
s:m:m:l:d:m:s:d:m:r
s:m:d:m:s:l:l:s
m:d:l:s:d:r:r:d

Jesu, Ire l’Oba mi,
Jesu, Ire l’Oba mi,
Jesu, Ire l’Oba mi,
Jesu, Ire l’Oba mi,
Bi mo ba ji l’owuro ma ke pe O o,
Bi mo ba ji l’owuro ma ke pe O o,
Bi mo ba rin l’osan ma ke pe O o,
Bi mo ba rin l’osan ma ke pe O o,
Jesu, Ire l’Oba mi,
Jesu, Ire l’Oba mi,
Jesu, Ire l’Oba mi,
Jesu, Ire l’Oba mi.         Amin

Orin Ikore`},{number:`426`,title:`El - Beraca Bered Eli,`,category:`Harvest`,lyrics:`English Version

El - Beraca Bered Eli,
Our Lord the King who blesses His
congregation,
Rain down the blessing of Thy Manna
upon us this da,
Jehovah Elyon, our Lord God rich in
glory supreme,
Magnify us with Thy everlasting
wealth,
Exalt Thy child during prayers offer
this day,
El – Morijah our Lord the King of
providence,
Please come to provide for us all our
needs,
So that our woes may be turned into
glory
Ye Holy Angels from heaven,
Join us in songs of praises,
So we might take blessing away to our
homes,
Christ Ruler in Heaven and earth
Say Amen for us,
Amen, Amen, Amen, Amen, Amen,
Amen, Amen.

Yoruba Version

El Beraca, Beredi El,
Oluwa mi, Oba, Olubukun Ikore,
Wa ro ojo ibukun Mana Re sori wa loni,
Jehovah Elyon, Oluwa Olola giga julo,
Wa fi ola ainipekun Re gbe wa ga,
Gbomo Re ga, l’rain ajoyo wa t’oni.
El Morijah ‘luwa Oba Olupese,
Jowo wa pese fun gbogbo aini wa,
Ki gbogbo iro ‘nu wa le di ayo,
Ati ki gbogbo egan wa le di ogo,
Enyin Angeli Mimo t’Orun,
Ba wa ko orin yi i,
Ka wa le mu ohun rere lo sile wa,
Kristi Alese laiye l’orun
Sami si fun wa,
Amin, Amin, Amin, Amin, Amin, Amin,
Amin.`},{number:`427`,title:`Provide for us, our Father,`,category:`Harvest`,lyrics:`English Version

1: Provide for us, our Father,
Chorus: Provide for us all.

2: The God Almighty Thou art the hope
for mankind,
Chorus: Provide for us all.

3: The God Almighty Thou art the hope
for mankind,
Chorus: Provide for us all.

4: The Fountain of joy, bearing fruits of
life,
Chorus: Provide for us all.

5: The King who plants that we might
harvest,
Chorus: Provide for us all.     Amen

Yoruba Version

1: Pese fun wa o Baba,
Chorus: Pese fun wa o.

2: Olodumare Ire lawa gbojule,
Chorus: Pese fun wa o.

3: Olodumare Ire lawa gbojule,
Chorus: Pese fun wa o.

4: Orisun ayo ti nso eso iye,
Chorus: Pese fun wa o.

5: Oba ti ngbin ti wa nka,
Chorus: Pese fun wa o.           Amin`},{number:`428`,title:`Jehovah the benefactor,`,category:`Harvest`,lyrics:`English Version

1: Jehovah the benefactor,
Rain the blessings of Manna of yours
On every beloved of Thine,
Presently this moment,
Blessings the world cannot bestow on
us,
Thou who transformed the sea
To pathway for the children of Israel,
Open up pathway of good blessing for
us
Behold is in favour.

2: Thou who did pass Thy order to
Birds of the air to traffic in
Delicious bread and flesh indeed
For Prophet Elijah
By Jordan River, hearken unto us,
Who call upon Thy name
To make provision for our daily needs
In ways mysterious for Thy chosen
ones,
King in gifts abundance.

3: Thou who heard the cries of
Elizabeth
The barren now look up to Thee
Give them children benevolent
O King of Providence
Jesus the King Holy healer divine
Heal Thy beloved ones,
That we might sing praises to Thee
always
With joyful songs in Thy Celestial
Church,
Comforter of our souls.          Amen

Yoruba Version

1: Jehovah Onibu Ore,
Ro ‘jo ibukun Mana Re,
Sori awa ayanfe Re,
L’arin wakati yi,
Ibukun t’aiye ko le fi fun ni,
Ire to so Okun,
Di ona fun awon omo Israel,
Wa lana ibukun rere fun wa,
Wa se ti wa ni re.

2: Ire to pese fun awon,
Eiye iwo lati wa fi,
Akara at’eran didun,
Bo woli Elijah,
Leba odo Jordan,
Jowo ranti,
Awa ti nke pe O,
Ki o si fi jije ati mimu,
L’ona awamaridi bo wa ti Re,
Oba Onibu Ore.

3: Oba to gbekun Elizabeth,
awa omo Re nw’ oju Re,
F’omo rere se ranti wa,
Oba Olupese,
Jesu Oba Oluwosan Mimo,
Wa wo awa ti Re san,
Ka’wa le fi orin ayo sin O,
Ninu Ijo Mimo Re lat’Orun wa,
Olu f’ayo fun mi.             Amin`},{number:`429`,title:`Labour ye on, and seek ye no repose,`,category:`Harvest`,lyrics:`English Version

1: Labour ye on, and seek ye no repose,
Keep sowing seeds, the harvest now

cometh,
The eyes of the Lord are set on your,
Chorus: Holy Angels are now recording
them,
Be it good or be it evil,
Thou shall be rewarded accordingly.

2: Ye keep idling away without toiling,
When many people are busy working,
The eyes of the Lord are set on your
works,
Chorus: Holy Angels are now recording
them,
Be it good or be it evil,
Thou shall be rewarded accordingly.

3: At this instant, the trumpet keeps
sounding,
Pick thy implements, the hour now
cometh,
No more mercy, mercy of old,
Chorus: Holy Angels are now recording
them,
Be it good or be it evil,
Thou shall be rewarded accordingly.
Amen

Yoruba Version

1: Ma sise lo, ma se wa Isimi,
Ma furugbin, Olukore mbo,

Oju Oluwa nwo ise re,
Chorus: Awon Angeli Mimo nko won,
Iba se rere tabi ibi,
Ere ise re ni iwo yio gba.

2: Iwo duro lasan laisise kan,
Nigbati awon elomirann nsise,
Oju Oluwa nwo ise re,
Chorus: Awon Angeli Mimo nko won,
Iba se rere tabi ibi,
Ere ise re ni iwo yio gba.

3: Logan o ti gbohun fere wipe,
To doje bo o, wakati na tide,
Oju saju, anu ati jo d’opin,
Chorus: Awon Angeli Mimo nko won,
Iba se rere tabi ibi,
Ere ise re ni iwo yio gba.      Amin`},{number:`430`,title:`Halleluyah Halleluyah`,category:`Harvest`,lyrics:`English Version

m:s:m:d:d:r:f:m
m:s:m:d
d:r:r :d
m:s:m:t:m:r:d:s
d:r:r :d

Halleluyah Halleluyah
Halleluyah Halleluyah
Halleluyah Halleluyah
Halle-lu-yah.                 Amen

Yoruba Version

m:s:m:d:d:r:f:m
m:s:m:d
d:r:r :d
m:s:m:t:m:r:d:s
d:r:r :d

Halleluya Halleluya
Halleluya Halleluya
Halleluya Halleluya
Halle-lu-ya.                    Amin.`},{number:`431`,title:`Our Lord, we Thy children have`,category:`Harvest`,lyrics:`English Version

1: Our Lord, we Thy children have
come
To bring all our request before Thee,
Just as you have heard the prayers of
Elijah,
Hearken unto our prayers.

2: Thus he prayed that the rain might

not fall,
For complete three years and six
months,
Just as you have heard the prayers of
Elijah,
Hearken unto our prayers.

3: He offered prayers a second time,
There was rain and the soil brought
forth fruits,
Just as you have heard the prayers of
Elijah,
Hearken unto our prayers.

4: Prayers opened the door of mercy,
Prayer also opened Hannah’s womb,
Just as you have heard the prayers of
Elijah,
Hearken unto our prayers.        Amen

Yoruba Version

1: Oluwa, awa omo re de,
Lati gbohun ebe wa soke,
Gebebi o ti gbo adura Elijah,
Jowo gbo adura wa.

2: O gbadura kojo mase ro,
Fun odun meta, osu mefa,
Gebebi o ti gbo adura Elijah,

Jowo gbo adura wa.

3: O si tun gbadura lekeji,
Ojo ro, ile si meso wa,
Gebebi o ti gbo adura Elijah,
Jowo gbo adura wa.

4: Adura lo silekun anu,
Adura lo si Anna ninu,
Gebebi o ti gbo adura Elijah,
Jowo gbo adura wa.                 Amin

Orin Isegun`},{number:`451`,title:`Satan, quickly turn back,`,category:`Victory`,lyrics:`English Version

Satan, quickly turn back,
Satan, quickly turn back,
Holy Michael cometh,
Satan, quickly turn back,
Holy Michael cometh,
Satan, quickly turn back.        Amen

Yoruba Version

Ese p’oju re da,
Ese p’oju re da,
Michael Mimo mbo,
Ese p’oju re da,
Michael Mimo mbo,
Ese p’oju re da.                   Amin`},{number:`452`,title:`We have conquered completely,`,category:`Victory`,lyrics:`English Version

We have conquered completely,
We have overcome,
We have conquered completely,
We have overcome,
Satan has no powers over Celestians.
Amen

Yoruba Version

Ati tewom mole, ati bori won,
Ati tewom mole, ati bori won,
Esu ko ni agbara,
Lori Ijo Mimo.                      Amin`},{number:`453`,title:`The light shining in the Heaven glory,`,category:`Victory`,lyrics:`English Version

The light shining in the Heaven glory,
Holy, Holy, Holy, Holy,
The early morning brightening Star,
Sur passing Satan to reign in glory of
the earth,

Amen, Amen, Amen,
Christ is the King.            Amen

Yoruba Version

Imole ninu ogo Orun,
Mimo, Mimo, Mimo, Mimo,
Irawo didan ti Owuro,
Te ri esu ba joba lori ogo aiye,
Amin, Amin, Amin,

Kristi joba.                      Amin`},{number:`454`,title:`My Lord Thou art the conqueror,`,category:`Victory`,lyrics:`English Version

My Lord Thou art the conqueror,
Jesus Thou art the conqueror,
Wizards are waging a heavy war,
Witches are waging a heavy war,
It is thou Oh Lord that will conquer,
Halleluyah’s the conqueror.       Amen

Yoruba Version

Oluwa Iwo ni yio segun,
Jesu, Iwo ni yio segun,
Ogun t’oso ngbe dide ti poju,
Ogun t’aje ngbe dide ti poju,
Iwo Oba ni yio segun,
Halleluya ni yio segun.          Amin`},{number:`455`,title:`Let the world be quiet,`,category:`Victory`,lyrics:`English Version

1: Let the world be quiet,
Let the world be quiet,
Darkness cannot overcome the light,
Let the world be quiet,

2: Let the wizards be quiet,
Let the witches be quiet,
Darkness cannot overcome the light,
Let the world be quiet.        Amen

Yoruba Version

1: Kaiye ko le gbe je,
Kaiye ko le gbe je,
Okunkun ko le bori Imole
Kaiye ko lo simi.

2: K’oso ko le gbe je,
K’aje ko le gbe je,
Okunkun ko le bori Imole
Kaiye ko lo simi.               Amin`},{number:`456`,title:`Today Jesus Christ calls thee,`,category:`Victory`,lyrics:`English Version

Today Jesus Christ calls thee,
To conquer, any sudden death for thee,
Come the Lord Jehovah says,
Come to Jesus Christ.          Amen

Yoruba Version

Loni ni Jesu npe wa,
Lati segun iku ojiji fun wa,
Wa ni Jehovah nwi, wa,
Wa ninu Kristi.                 Amin`},{number:`457`,title:`Darkness can never prevail,`,category:`Victory`,lyrics:`English Version

Darkness can never prevail,
Prevail over the light,
Darkness can never prevail,
Prevail over the light,
Halleluyah, Halleluyah, Halleluyah,
Darkness can never prevail,
Prevail over the light.         Amen

Yoruba Version

Okunkun ko le bori,
Bori imole kan,
Okunkun ko le bori,
Bori imole kan,
Halleluya, Halleluya, Halleluya,
Okunkun ko le bori,
Bori imole kan.                  Amin`},{number:`458`,title:`Fear ye not, fear ye not,`,category:`Victory`,lyrics:`English Version

Fear ye not, fear ye not,
Fear ye not, fear ye not,
Jesus Christ the conqueror in Heaven
For we member of Celestial Church,
Fear ye not, fear ye not.        Amen

Yoruba Version

Maberu, ma beru,
Ma beru, ma beru,
Jesu lajagun segun’ ode Orun,
Fun awa omo Ijo Mimo at’orun wa,
Ma beru, ma beru.              Amin`},{number:`459`,title:`Angel of the Lord descend`,category:`Victory`,lyrics:`English Version

1: Angel of the Lord descend
In all our tribulations,
Angel of the Lord descend
In all our tribulations.

2:Almighty conqueror in Heaven
Descend in all our tribulations,
Angel of the Lord descend
In all perfect holiness.

3: All the wizards and witches,
All herbalists and all the heathens,
They surround us,
Angel of the Lord descend
In all our tribulations.           Amen

Yoruba Version

1: Angeli Oluwa,
E sokale ninu iponju wa,
Angeli Oluwa,
E sokale ninu iponju wa.

2: Ajagu segun ode Orun
E sokale ninu iponju wa,
Angeli Oluwa,
E sokale ni mimo julo.

3: Awon oso, awon aje,
Awon onisugun, olorisa won yi wa ka,
Angeli Oluwa,
E sokale ninu iponju wa.       Amin`},{number:`460`,title:`Oh Father in this very hour,`,category:`Victory`,lyrics:`English Version

1: Oh Father in this very hour,
Magnify Thy own hand work,
That the whole world may know,
Thou,
Art one who sent us.

2: In vain the world wages this war,
The very hour is come,
The world will tremble
Under the holy power of Jesus. Amen

Yoruba Version

1: Baba a a ni wakati yi,
Gbe ise owo Re ga a,
Ki gbogbo aiye le mo pe Re,
Lo ran wa ni ‘se.

2: Asan laiye ngbe ogun,
Wakati na de,
K’aiye wariri labe agbara,
Mimo Jesu.                      Amin`},{number:`461`,title:`In vain in vain their deeds brethren,`,category:`Victory`,lyrics:`English Version

1: In vain in vain their deeds brethren,
Their existence are in vain,
Weapon cannot harm God’s own
children in this world,
Their existences are in vain.

2: The son of men are proud to our Lord
and King,
The son of men are proud to our Lord
and King,
Their existences are in vain.

3: The hand cannot cover the light,
That is in heaven above from this
world,
The world would try in vain,
The world would try in vain.    Amen

Yoruba Version

1: Lasanlasan ni nwon se o ara,
Lasanlasan ni nwon mbe,
Ada ko ma ran omo Kristi o, laiye,
Lasanlasan ni nwon mbe.

2: Omo enia ngberaga s’Oba Oluwa,
Omo enia nsefe o, s’Oba Oluwa,
Lasanlasan ni nwon mbe.

3: Owo o ma ka imole,
Ti mbe loke Orun-laiye o,
Lasanlasan laiye ma wa o,
Lasanlasan laiye ma wa o.      Amin`},{number:`462`,title:`Jah- kirah- hihi-jah,`,category:`Victory`,lyrics:`English Version

Jah- kirah- hihi-jah,
Thou the victorious King,
Conquer enemies for us,
Jah- kirah-hihi-jah,
Lift up high Thy church,
With Halleluyah.                Amen

Yoruba Version

Jah- kirah-hihi-jah,
Oba Olusegun,
Wa segun ota fun wa,
Jah- kirah-hihi-jah,
Gbe ‘jo Re soke,
Pelu Halleluya.                 Amin`},{number:`463`,title:`Our Lord stands-by and is watching`,category:`Victory`,lyrics:`English Version

Our Lord stands-by and is watching
To save you from all evil doers,
Holy Michael lift his sword high
To conquer for you – Jah,
To conquer for you – Jah,
To conquer for you – Jah,
Just raise your heart to Jesus Christ,
And have your faith in Him.        Amen

Yoruba Version

Oluwa duro, O now wa,
Yio gba wa lowo aiye,
Michael Mimo gbeda re soke,
Lati segun fun wa,
Lati segun fun wa,
Lati segun fun wa,
Ka gbe okan s’oke,
Ka Oluwa gbo.               Amin`},{number:`464`,title:`They say Jah break the pot,`,category:`Victory`,lyrics:`English Version

They say Jah break the pot,
The Angel Jah breaks the pot,
Yedo Jah bo hen Zen gba,
Angel Jah bo hen Zen gba.        Amen

Yoruba Version

Nwon ni Ja mu koko fo,
Angeli Jah mu koko fo,
Yedo Jah bo hen Zen gba,
Angeli Jah bo hen Zen gba.    Amin`},{number:`465`,title:`In my truthful vineyard,`,category:`Victory`,lyrics:`English Version

In my truthful vineyard,
My Father is the gardener,
In my truthful vineyard,
My Father is the gardener,
In my truthful vineyard,
My Father is the gardener.       Amen

Yoruba Version

Ajara mi otito,
Baba mi l’Olosogba,
Ajara mi otito,
Baba mi l’Olosogba,
Ajara mi otito,
Baba mi l’Olosogba.          Amin`},{number:`466`,title:`Who else can save us all,`,category:`Victory`,lyrics:`English Version

1: Who else can save us all,
Who else can save us all,
Who else can save us all,
From this odd world.

2: Jesus, our Lord,
Jesus, our Lord,
Jesus, our Lord,
Will save us all.

3: He has conquered the world,
He has conquered the world,
He has conquered the world,
We shall not fear.             Amen

Yoruba Version

1: Ta lo le gbawa,
Ta lo le gbawa,
Ta lo le gbawa,
Lowo aiye,

2: Jesu Oluwa,
Jesu Oluwa,
Jesu Oluwa,
Lo le gbawa,

3: O ti segun aiye,
O ti segun aiye,
O ti segun aiye,
K’ama beru.                Amin`},{number:`467`,title:`Conquer for us Jesus Christ,`,category:`Victory`,lyrics:`English Version

1: Conquer for us Jesus Christ,
We who are Thy own servant,
In the midst of enemies,
Father comes conquer.

2: Upon this rest our faith,
Thou wilt surely conquer death,
Come conquer for us today,
Father comes conquer.

4: Upon this rest our faith,
That Thou art with us always,
Do not forsake Thy servant,
Father comes conquer.             Amen

Yoruba Version

1: Wa segun Jesu Kristi,
Fun awa iranse Re,
Larin ota lawa wa,
Baba wa segun.

2: Eyi ni gbagbo wa pe,
Ire yio segun iku,
Wa segun oni fun wa,
Baba wa segun.

3: Eyi ni gbagbo wa pe,
Ire yio wa pelu wa,
Mi fi ‘ranse Re sile,
Baba wa segun.                Amin`},{number:`468`,title:`Our Father, our Father, our Father,`,category:`Victory`,lyrics:`English Version

Our Father, our Father, our Father,
Those who are thinking of evils,
They have all now disappeared,
Our Father’s sitting in His temple,
Looking at the works of the world,
The world cannot hold on to the air.
Amen

Yoruba Version

Baba wa, Baba wa, Baba wa,
Awon ti ngbero lati se ‘bi,
Awon na ha wa da?
Baba joko s’enu Tempili,
Omiwo ohun t’aiye ma mi se,
Aiye kole mu efufu o.             Amin`},{number:`469`,title:`Let the divine King descend now,`,category:`Victory`,lyrics:`English Version

1: Let the divine King descend now,
And save us all today,
Let the divine King descend now,
And save us all today.

2: Today within the Celestial Church,
May He come to give us a long-life,
Today within the Celestial Church,
May He come to give us a long-life.
Amen

Yoruba Version

1: K’Oba Mimo ko sokale,
Ko wa gba wa loni,
K’Oba Mimo ko sokale,
Ko wa gba wa loni.

2: Ninu Ijo Mimo yi loni,
Ko wa d’emi gigun si fun wa,
Ninu Ijo Mimo yi loni,
Ko wa d’emi gigun si fun wa.     Amin`},{number:`470`,title:`King the creator King Almighty,`,category:`Victory`,lyrics:`English Version

King the creator King Almighty,
The greatest of those in Heaven above,
King the unpredictable,
His words always come to pass,
King who speaks through man,
Most glorious King,
The power of upliftment, it is Thy own,
The power of victory,
It is Thy own,
Make us great today most glorious
King; Make us great today most
glorious King.          Amen

Yoruba Version

Oba Edumare, Oba toto,
Oba Edumare, Oba toto,
Atobi julo ninu awon Orun,
Oba seyi owu,
Oba awimayehun asoro matase,
Oba agbenu omo enia f’ohun, Oba ogo,
Agbara Igbega, Ire loni,
Agbara itota mole Ire loni,
Gbe wa ga loni o Oba ogo,
Gbe wa ga loni o Oba ogo.      Amin`},{number:`471`,title:`Come and be with us, our Father,`,category:`Victory`,lyrics:`English Version

1: Come and be with us, our Father,
Come and be with us,
We lift up our eyes unto the Lord,
Our Good Father,
Come and be with us, our Father,
Come and be with us.

2:Look with mercy eyes, our Father,
Look with mercy eyes,
Kindle your shining light round us,
And show the whole world,
Look with mercy eyes, our Father,
Look with mercy eyes.

3: Fight against Satan Michael,
Fight against Satan,
We shout and rebuke Satan
To avoid us
Fight against Satan Michael,
Fight against Satan.

4: Let us be steadfast in this worship,
Let us be steadfast,
Kindle your shining light round us,
And show the whole world,
Let us be steadfast in this worship,
Let us be steadfast.            Amen

Yoruba Version

1: Wa wa pelu wa, Baba wa,
Wa wa pelu wa, Baba wa,
Awa gbohun wa soke si O, Baba rere,
Wa wa pelu wa, Baba wa,
Wa wa pelu wa.

2: B’oju anu Re wo, Baba wa,
B’oju anu Re wo,
Ko si tan ‘mole yi wa ka,
Fi han aiye,
B’oju anu Re wo wa, Baba wa
B’oju anu Re wo.

3: Ko ‘ju ija s’esu Michael
Koju ija s’esu,
A ke sani Satan lori,
Ko sa fun wa,
Ko ‘ju ija s’esu Michael
Koju ija s’esu.

4: M’ese wa duro ninu Ijo yi,
M’ese wa duro,
Ko si tan ‘mole yi wa ka,
Fi han araiye,
M’ese wa duro ninu Ijo yi,
M’ese wa duro.                  Amin`},{number:`472`,title:`Let me behold Thee, oh Lord,`,category:`Victory`,lyrics:`English Version

1: Let me behold Thee, oh Lord,
Le Let me behold Thee, oh Lord t me
behold Thee, the Lord in great
happiness.

2: Grant us mercy, oh dear Lord,
Grant us mercy, oh dear Lord,
Grant us mercy, that we behold Thu
glory.

3: Conquer for us, oh dear Lord,
Conquer for us, oh dear Lord,
Conquer for us, that we behold Thy
glory.                           Amen

Yoruba Version

1: Mo feri O, Olorun,
Mo feri O, Olorun,
Mo feri O, Olorun, ninu ayo nla.

2: Sanu fun wa, Olorun,
Sanu fun wa, Olorun,
Sanu fun wa, ka le w’ole ogo.

3: Segun fun wa, Olorun,
Segun fun wa, Olorun,
Segun fun wa, ka le wole ogo. Amin`},{number:`473`,title:`Alejumoh grant me goodness,`,category:`Victory`,lyrics:`English Version

Alejumoh grant me goodness,
Today becomes noisy,
Alejumoh grant me goodness,
Today becomes noisy.             Amen

Yoruba Version

1: Alejumo gbe rere komi, oni d’alariwo,
Alejumo gbe rere komi, oni d’alariwo.
Amin`},{number:`474`,title:`I Beseech the Lord Saviour to save`,category:`Victory`,lyrics:`English Version

1: I Beseech the Lord Saviour to save
me, I Beseech the Lord Saviour to save
me,
I, forsake all evil spirits,
And have no promise with the witch,
I Beseech the Lord Saviour to save me.

2: I Beseech the Great Healer to heal
me,
I Beseech the Great Healer to heal me,
I, forsake all evil spirits,
And have no promise with the witch,
I Beseech the Great Healer to heal me.
Amen

Yoruba Version

1: Emi nfe k’Olugbala le gba mi,
Emi nfe k’Olugbala le gba mi,
Nko ni b’emere kegbe,
Nko ni ba je s’adehun,
Emi nfe k’Olugbala le gba mi.

2: Emi nfe k’Oluwosan wa wo mi,
Emi nfe k’Oluwosan wa wo mi,
Nko ni b’emere kegbe,
Nko ni ba je s’adehun,
Emi nfe k’Oluwosan wo mi san.   Amin`},{number:`475`,title:`Help us mould our lives,`,category:`Victory`,lyrics:`English Version

1: Help us mould our lives,
Help us mould our lives,
The Conqueror, the Victorious,
Father we come to Thee,
Help us mould our lives.

2: Help us mould our lives,
Help us mould our lives,
The Conqueror of all evils,
Father we come to Thee,
Help us mould our lives.         Amen

Yoruba Version

1: Ba wa tun tawa se,
Ba wa tun tawa se,
Olusegun, Ajasegun
Baba a sa di O o,
Ba wa tun tawa se.

2: Ba wa tun tawa se,
Ba wa tun tawa se,
Olurebi, Ajarebi,
Baba a sa di O o,
Ba wa tun tawa se.             Amin`},{number:`476`,title:`The hosts of Angels descend now,`,category:`Victory`,lyrics:`English Version

The hosts of Angels descend now,
The hosts of Angels descend now,
The hosts of Angels descend now
So we might be victorious.      Amen

Yoruba Version

Angeli, e sokale wa,
Maleka, e sokale wa,
Angeli, e sokale wa,
Lati wa mu wa d’asegun.         Amin`},{number:`477`,title:`Host of Angels rejoice,`,category:`Victory`,lyrics:`English Version

Host of Angels rejoice,
As the give us victory,
Host of Angels rejoice,
Angels did rejoice,
Angels rejoice,
Host of Angels rejoice,
As the give us victory.            Amen

Yoruba Version

Awon Angeli nyo,
Ti nwon wa segun fun wa,
Angeli nyo o, Angeli won nyo Angeli o,
Awon Angeli nyo,
Ti nwon wa segun fun wa.       Amin`},{number:`486`,title:`There is power, There is power,`,category:`Healing`,lyrics:`English Version

There is power, There is power,
There is power in the blood of Jesus.

2: There is healing, There is healing,
There is healing in the blood of Jesus.

3: There is Salvation, There is
Salvation,
There is Salvation in the blood of Jesus.

4: There is protection, There is
protection,
There is protection in the blood of
Jesus.

5: There is life, There is life,
There is life in the blood of Jesus.

6: There is blessing, There is blessing,

There is blessing in the blood of Jesus.

7: Halleluyah, Halleluyah,
Halleluyah in the name of Jesu.

8: Hosanna, Hosanna,
Hosanna in the name of Jesu.

9: Ebenezer, Ebenezer,
Ebenezer in the name of Jesu.     Amen

Yoruba Version

1: Agbara mbe, Agbara mbe,
Agbara mbe ninu eje Jesu.

2: Iwosan mbe, Iwosan mbe,
Iwosan mbe ninu eje Jesu.

3: Igbala mbe, Igbala mbe,
Igbala mbe ninu eje Jesu.

4: Abo mbe, Abo mbe,
Abo mbe ninu eje Jesu.

5: Ipese mbe, Ipese mbe,
Ipese mbe ninu eje Jesu.

6: Ibukun mbe, Ibukun mbe,
Ibukun mbe ninu eje Jesu.

7: Halleluya, Halleluya,

Halleluya l’oruko Jesu.

8: Hosanna, Hosanna,
Hosanna l’oruko Jesu.

9: Ebenezer, Ebenezer,
Ebenezer l’oruko Jesu.         Amin`},{number:`487`,title:`There is mighty power in the blood`,category:`Healing`,lyrics:`English Version

1: There is mighty power in the blood
of the Lamb,
There is mighty power in the blood of
the Lamb,
There is mighty power in the blood of
the Lamb,
Is there in the blood of Jesus.

2: There is mighty healing in the blood
of the Lamb,
There is mighty healing in the blood of
the Lamb,
There is mighty healing in the blood of
the Lamb,
Is there in the blood of Jesus.

3: There is mighty salvation in the
blood of the Lamb,
There is mighty salvation in the blood
of the Lamb,
There is mighty salvation in the blood
of the Lamb,
Is there in the blood of Jesus.

4: There is mighty victory in the blood
of the Lamb,
There is mighty victory in the blood of
the Lamb,
There is mighty victory in the blood of
the Lamb,
Is there in the blood of Jesus.

5: My whole life rests in Thy hand Oh
Christ our dear Lord,
My whole life rests in Thy hand Oh
Christ our dear Lord,
My whole life rests in Thy hand Oh

Christ our dear Lord,
It rests in Thy hand Jesus.       Amen

Yoruba Version

1: Agbara mbe ninu eje odo Agutan,
Agbara mbe ninu eje odo Agutan,
Agbara mbe ninu eje odo Agutan,
Ninu eje Jesu.

2: Iwosan mbe ninu eje odo Agutan,
Iwosan mbe ninu eje odo Agutan,
Iwosan mbe ninu eje odo Agutan,
Ninu eje Jesu.

3: Igbala mbe ninu eje odo Agutan,
Igbala mbe ninu eje odo Agutan,
Igbala mbe ninu eje odo Agutan,
Ninu eje Jesu.

4: Isegun mbe ninu eje odo Agutan,
Isegun mbe ninu eje odo Agutan,
Isegun mbe ninu eje odo Agutan,
Ninu eje Jesu.

5: Aiye mi mbe lowo Re Kristi Oluwa,
Aiye mi mbe lowo Re Kristi Oluwa,
Aiye mi mbe lowo Re Kristi Oluwa,
O mbe n’owo Jesu.                Amin`},{number:`488`,title:`The Spring that thus opens down,`,category:`Healing`,lyrics:`English Version

1: The Spring that thus opens down,
Chorus: He made me whole indeed,
The Spring that thus opens down,
He made me whole indeed.

2: He saveth me, He conquered for me,
Chorus: He made my body well indeed,
He saveth me, He healeth me
He restoreth my soul.

3: He saveth me and He gave me
blessing
Chorus: He made my body well indeed,
He saveth me and He gave me blessing,
He restoreth my soul.          Amen

Yoruba Version

1: Isun yi lo si sile,
Chorus: O mu mi lara da,
Isun yi lo si sile
O mu mi lara da.

2: O gba mi la, o segun fun mi,
Chorus: O mu mi lara ya,
O gba mi la, O tun wo mi san,
O mu mi lara da.

3: O gba mi la, O tun ‘bukun mi,
Chorus: O mu mi lara da.
O gba mi la, O tun ‘bukun mi,
O mu mi lara da.                Amin`},{number:`489`,title:`I shall come,`,category:`Healing`,lyrics:`English Version

1: I shall come,
I Jesus shall come,
I am the great Healer,
My Father giveth me
For a great righteousness.

2: For my hour has come,
My Father’s hour
The world shall behold it,
It is a great righteousness.

3: We the sinners have come,
We the sinners have come,
To receive forgiveness
And gain eternal life.       Amen

Yoruba Version

:

1: Mo mbo, Emi Jesu mbo,
Emi ni Oluwosan,
Baba mi lo fun mi,
Fun ododo nla kan.

2: Wakati mi ti de,
Wakati Baba mi,
Aiye yio si ri,
Ododo nla kan ni.

3: Awa elese de,
Awa elese de,
Lati wa gba ‘dariji,
Lati wo orun rere.           Amin`},{number:`490`,title:`There is power in Jesus Christ`,category:`Healing`,lyrics:`English Version

1: There is power in Jesus Christ
That many eyes cannot see,
Chorus: Power do exists, There is
Power,
Power still exists,
There is power in Jesus Christ
That many eyes cannot see.

2: There is healing in Jesus Christ

That many eyes cannot see,
Chorus: Healing exists, There is
healing,
Healing remains,
There is healing in Jesus Christ
That many eyes cannot see.

3: There is victory in Jesus Christ,
That many eyes cannot see,
Chorus: Victory exist, There is victory,
Victory remains
There victory in Jesus Christ
That many eyes cannot see.

4: There is salvation in Jesus Christ,
That many eyes cannot see,
Chorus: Salvation still exists, There is
salvation, Salvation still remain,
There is salvation in Jesus Christ
That many eyes cannot see.         Amen

Yoruba Version

1: Agbara mbe ‘nu Jesu
T’oju gbogbo ko le ri,
Chorus: Agbara mbe, Agbara o wa,
Agbara ‘ku
Agbara mbe ‘nu Jesu
T’oju gbogbo ko le ri.

2: Iwosan mbe ‘nu Jesu
T’oju gbogbo ko le ri,

Chorus: Iwosan mbe, Iwosan o wa,
Iwosan oku,
Iwosan mbe ‘nu Jesu
T’oju gbogbo ko le ri.

3: Isegun mbe ‘nu Jesu
T’oju gbogbo ko le ri,
Chorus: Isegun mbe, Isegun o wa,
Isegun o ku,
Isegun mbe ‘nu Jesu
T’oju gbogbo ko le ri,

4: Igbala mbe ‘nu Jesu
T’oju gbogbo ko le ri,
Chorus: Igbala mbe, igbala o wa
Igbala o ku,
Igbala mbe ‘nu Jesu
T’oju gbogbo ko le ri.          Amin`},{number:`491`,title:`Our Father is great,`,category:`Healing`,lyrics:`English Version

1: Our Father is great,
He is great indeed, surely He is great.

2: Jesus Christ He is great,
He is great indeed, surely He is great.

3: Our Healer He is great,
He is great indeed, surely He is great.

4: Our Saviour He is great,
He is great indeed, surely He is great.

5: Our Father is great,
He is great indeed, surely He is great.
Amen

Yoruba Version

1: Baba wa tobi,
O tobi yeye bi t’ewe ko.

2: Jesu Kristi wa tobi o,
O tobi yeye bi t’ewe ko.

3: Oluwosan wa tobi o,
O tobi yeye bi t’ewe ko.

4: Olugbala wa tobi o,
O tobi yeye bi t’ewe ko.

5: Baba wa tobi,
O tobi yeye bi t’ewe ko.      Amin`},{number:`492`,title:`What is His name,`,category:`Healing`,lyrics:`English Version

What is His name,
Wonderful, Wonderful,
What are His deeds,
Wonderful, Wonderful,
The King who made the blind to see,
Wonderful, Wonderful,
The King who raise up dead,
Wonderful, Wonderful,
The Saviour of the world,

Wonderful, Wonderful,
The King who conquer for us,
Wonderful, Wonderful,
What are His works,
Wonderful, Wonderful,
What is His name,
Wonderful, Wonderful.            Amen

Yoruba Version

Ki l’oruko Re,
Iyanu, Iyanu,
Kin’ ise Re,
Iyanu, Iyanu,
Oba to la’ju afoju,
Iyanu, Iyanu,
Oba to j’oku dide,
Iyanu, Iyanu,
Olugbala Ijo Mimo,

Iyanu, Iyanu,
Oba ti nse gun fun ni,
Iyanu, Iyanu,
Kini ise Re,
Iyanu, Iyanu,
Ki l’oruko Re,
Iyanu, Iyanu.                  Amin`},{number:`493`,title:`Thy word, has now found me,`,category:`Healing`,lyrics:`English Version

1: Thy word, has now found me,
Thy word, has now saved me,
Thy word, most precious,
Thy word, most precious,
Thy word, has now found me.

2: Thy blood has now saved me,
Thy blood has now saved me,
Thy blood most precious,
Thy blood most precious,
Thy blood has now saved me.

3: The word conquered for me,
Thy word gave me healing,
Thy word, Thy word,
The word conquered for me.

4: Glory unto Thy name,
Glory unto Thy name,
Glory, Glory, Glory,
Glory unto Thy name.             Amen

Yoruba Version

1: Oro Re lo wa mi ri,
Oro Re lo gba mi la,
Oro Re, iyebiye,
Oro Re iyebiye,
Oro Re, lo wa mi ri.

2: Eje Re lo gba mi la,
Eje Re lo gba mi la,
Eje Re iyebiye,
Eje Re iyebiye,
Eje Re lo gba mi la.

3: Oro Re segun fun mi,
Oro Re lo wo mi san,
Ore Re, Oro Re,
Oro Re segun fun mi.

4: Ogo f’oruko Re,
Ogo f’oruko Re,
Ogo, Ogo, Ogo,
Ogo f’oruko Re.              Amin`},{number:`501`,title:`Jesus my shining light,`,category:`Baptism`,lyrics:`English Version

m:m:r:s:d:s
s:l:s:s:f:m:m:r
s:l:s:s:f:m
d:f:m:r:d

Jesus my shining light,
I trust in Thee today,
Come redeem my soul,
Please forgive me.               Amen

Yoruba Version

m:m:r:s:d:s
s:l:s:s:f:m:m:r
s:l:s:s:f:m
d:f:m:r:d

Jesu mi ‘mole mi,
Mo gba O gbo loni,
Wa gbokan mi la,
Jo dariji mi.              Amin`},{number:`502`,title:`Jesus my shining light,`,category:`Baptism`,lyrics:`English Version

s:d:d:m:r:d
m:m: r:s:m:r
m:m:f:s:f:l
s:d:d:m:r:d

1: Jesus my shining light,
I shall hearken unto Thee,
The hour now cometh,
Thine path I shall traverse.

2: Thou purified my soul,
Thou taketh away my sins,
By Thee I shall abide,
Please forgive me my sins.       Amen

Yoruba Version

s:d:d:m:r:d
m:m: r:s:m:r
m:m:f:s:f:l
s:d:d:m:r:d

1: Jesu ni ‘mole mi
Emi yio gbo tire,
Wakati na ti de,
Emi yio gbo tire.

2: O se wenumo fun mi,
O ko ese e mi lo,
Mo du ti O,
Jowo dariji mi.               Amin`},{number:`503`,title:`Jesus, I believe in Thee,`,category:`Baptism`,lyrics:`English Version

Jesus, I believe in Thee,
Dear Lord, I believe in Thee,
In this holy place amidst Thy great
Church,
I believe in Thee from no henceforth,
I shall carry home Thy blessings.
Amen

Yoruba Version

Jesu mo gba O gbo,
Oluwa mo gba O gbo,
Nibi Mimo yi larin Ijo nla Re,
Mo gba O gbo lati oni lo,
E mi yio mu ‘bukun Re le.      Amin

Orin Igbagbo`},{number:`521`,title:`Father Jesus,`,category:`Faith`,lyrics:`English Version

1: Father Jesus,
Father Jesus,
Father Jesus.

2: Come and save me,
So that Thou be the Saviour,
So that Thou be my Saviour.      Amen

Yoruba Version

1: Baba Jesu,
Baba Jesu,
Baba Jesu.

2: Wa gba mi la,
Kosi je Olugbala,
Kosi je Olugbala mi.          Amin`},{number:`522`,title:`Jorih-hah-Hihu,`,category:`Faith`,lyrics:`English Version

Jorih-hah-Hihu,
Jorih-hah-Hihu,
The Lord is a great King,
Jorih-hah-Hihu,
Jorih-hah-Hihu,
The Lord is a great King.        Amen

Yoruba Version

Jorih-hah-Hihu,
Jorih-hah-Hihu,
Oluwa ni Oba nla,
Jorih-hah-Hihu,
Jorih-hah-Hihu,
Oluwa ni Oba nla.             Amin`},{number:`523`,title:`The Father does His work as He`,category:`Faith`,lyrics:`English Version

The Father does His work as He
pleases,
The ways of His works and deeds are
mysterious,
His power are manifest on the sea,
The sun and the moon and the stars
Behold Him and trembled.         Amen

Yoruba Version

Bo ti wu Baba lo nse ise Re,
Awamaridi ni lawon ise Re,
Ari pase Re lori okun,
Orun, Osupa pelu awon ‘rawo ri,
Won wa riri.                      Amin`},{number:`524`,title:`Halleluyah! Halleluyah! Halleluyah!`,category:`Faith`,lyrics:`English Version

Halleluyah! Halleluyah! Halleluyah!
The Angels rejoice,
I shall worship Thee with joy that is
profound,
I shall worship Thee with joy that is
profound.                        Amen

Yoruba Version

Halleluya! Halleluya! Halleluya!
Awon Angeli nyo,
Emi yio sin O pelu Ayo nla,
Emi yio sin O pelu Ayo nla.      Amin`},{number:`525`,title:`Ye children of Celestial,`,category:`Faith`,lyrics:`English Version

1: Ye children of Celestial,
Ye children of Celestial,
Be ye no more afraid.

2: Cast your gaze to heavenly things,
Cast your gaze to heavenly things,
Your eyes shalln’t be blurred with
darkness.

3: Ours shall always be joy,
Ours shall always be joy,
And joy shall it be.

4: Our Jesus is the light,
Our Jesus is the light,
And joy shall it be.            Amen

Yoruba Version

1: Enyin omo ‘jo Mimo,
Enyin omo ‘jo Mimo,
E mase beru mo.

2: E f’oju si nkan t’orun,
E f’oju si nkan t’orun,
Ki yio sokunkun loju.

3: Ayo ni ti wa yio je,
Ayo ni ti wa yio je,
Ayo ni yio wa je.

4: Imole ni Jesu wa,
Imole ni Jesu wa,
Ayo ni yio wa je.             Amin`},{number:`526`,title:`The ways of God are mysterious,`,category:`Faith`,lyrics:`English Version

1: The ways of God are mysterious,
To accomplish His works,
His ways no man can determine,
Unsearchable they are.

2: Unbelievers will go astray,
Rejecting works of God,
But for us who believe the Lord,
We will not lose on earth.       Amen

Yoruba Version

1: Ona to ‘lorun ngba soro,
Lati se ise Re,
Ona Re enikan ko mo,
Awamaridi ni.

2: Alaigbagbo won yio sina,
Won ko ‘se Oluwa,
Sugbon awa to gb’Oluwa gbo,
A ki yio pofo laiye.              Amin`},{number:`527`,title:`Don’t be in doubt, do not turn back,`,category:`Faith`,lyrics:`English Version

1: Don’t be in doubt, do not turn back,
Those doubting minds shall not reach
the throne,
The Holy throne before our Father,
That is pavilioned with the radiance of
rain bow,
In Thine heaven above.

2: With holy heart, and with holy love,
Faith and holy expectations,
Worship the Lord, God of Creation,
The world doth pines O ye brethren,
In obedience His followers do abide
Without iota of doubt.           Amen

Yoruba Version

1: Ma se yemeji, ma se wehin,
Oniyemeji k’yio debite,
Mimo Niwaju Baba,
Ta fi didan osumare se loso,
N’joba ti Orun.

2: Fi okan mimo, ife mimo,
Igbagbo, Ireti mimo,
Sin Oluwa, Olorun Eleda,
Aiye nlo s’opin,
Awon rire si nto lehin larin,
Iyemeji laibikita.               Amin`},{number:`528`,title:`Jehovah Thou our gracious shield,`,category:`Faith`,lyrics:`English Version

Jehovah Thou our gracious shield,
We are looking unto Thee,
Open wide Thy merciful door,
That we go home not in vain.    Amen

Yoruba Version

Oluwa Iwo la sa mi,
Emi ma nwoju Re,
Silekun anu sile Baba,
Maje kemi lo lofo.              Amin`},{number:`529`,title:`Establish your faith in the Lord in this`,category:`Faith`,lyrics:`English Version

Establish your faith in the Lord in this
Celestial fold,
Establish your faith in the Lord in this
Celestial fold,
Celestial church the only one,
Where Jesus Christ abides,
My heart longs to abide with the Lord
always,
My heart longs to abide with the Lord
always.                           Amen

Yoruba Version

Gbeke re le Oluwa ninu Ijo Mimo yi,
Gbeke re le Oluwa ninu Ijo Mimo yi,
Ijo Mimo nla kan ni,
Nibiti Kristi wa a,
Okan mi nfe nigbagbogbo,
Lati ba Oluwa gbe,
Okan mi nfe nigbagbogbo,
Lati ba Oluwa gbe.           Amin`},{number:`530`,title:`Oh my dear Lord, Oh my dear Lord,`,category:`Faith`,lyrics:`English Version

Oh my dear Lord, Oh my dear Lord,
I am longing for my joy,
I was happy
When I heard a voice that said
Come forward Halleluya.        Amin

Yoruba Version

Olorun mi, Oluwa mi,
Mo nreti ayo mi,
Inu mi dun,
Nigbati mo gbohun ni,
Pe ma bo Alleluya.              Amin`},{number:`531`,title:`I was filled with joy, My heart was`,category:`Faith`,lyrics:`English Version

1: I was filled with joy, My heart was
overwhelmed with joy,
It’s Christ who brought me to this
glory,

He shall never forsake me.

2: Amidst all enemies and hardships,
Exalt me and glorify me
That Thy love might guide me to the
end
And I may always be the head.

3: Christ the father who called me,
Please do not forsake me,
The great joy Thou giveth me,
That it might be with me till the end.
Amen

Yoruba Version

1: Se se ninu mi dun,
Ayo nla kun okan mi,
Kristi lo pe mi sinu ogo,
Ki yio fi mi sile lai.

2: Larin ota larin idamu,
Je k’itansan ogo mi han,
Ki’ ife Re ran mi lo ‘dopin,
Ki nle ma je olori.

3: Kristi Baba to pe mi,
Jo mase fi mi sile,
Ayo nla to fun mi
Ki nle lo dopin aiye mi.        Amin`},{number:`532`,title:`Life evermore from Holy Father,`,category:`Faith`,lyrics:`English Version

Life evermore from Holy Father,
Salvation, salvation from Holy Father,
Life and salvation from Holy Father
My Redeemer, Holy Trinity.

2: Evils, evils cannot come to me,
Witches, witches cannot come to me,
I am, I am the King full of light,
I am the Lord of Trinity.          Amen

Yoruba Version

1: Iye, Iye lat’odo Baba,
Igbala, Igbala lat’odo Baba,
Iye, Igbala, lat’odo Baba,
Olugbala mi Metelokan.

2: Oso, oso, ko ‘le wole Mi,
Aje, aje, ko ‘le wole Mi,
Emi ni, Emi ni Oba Imole,
Emi l’Oluwa Metelokan.          Amin`},{number:`533`,title:`Joy, joy and happiness shall come`,category:`Faith`,lyrics:`English Version

1: Joy, joy and happiness shall come
Into this Celestial Church,
Weeping, distress shall surely end
In this our holy fold.

2: All troubles and all sufferings
Have all been rejected
All ye brethren in Celestial
Rejoice, rejoice, rejoice.

3: My glories are made supreme,
In this Celestial fold,
The glory which heaven behold,
That made them full of joy.

4: Anyone who worships me,
Shall behold the glory,
The glory which I have foretold
And ye shall be saved.          Amen

Yoruba Version

1: Ayo, ayo, ayo yio wa,
Ninu Ijo Mimo yi,
Ekun, wahala yio dopin,
Ninu Ijo Mimo yi.

2: Wahala on iponju,
Mo ti ko won sile,
Gbogbo enyin Ijo Mimo,
E yo, e yo, e yo.

3: Ogo Mi lo si je ori,
Ninu Ijo Mimo,
Ogo ti awon orun ri,
Ti won si yo titi.

4: Eni to ba si le sin Mi,
Yio si ri ogo na,
Ogo na temi si soro,
Yio si ni igbala.              Amin`},{number:`534`,title:`Stand up, stand up for Jesus,`,category:`Faith`,lyrics:`English Version

Stand up, stand up for Jesus,
The great joy now cometh,
Ye the beloved, prepare to worship,
In this Celestial Church.       Amen

Yoruba Version

Duro, duro, duro fun Jesu,
Ayo nla na mbo wa,
Enyin olufe, e mura ke sin,
Ninu Ijo Mimo.              Amin`},{number:`535`,title:`He’s our Protector,`,category:`Faith`,lyrics:`English Version

1: He’s our Protector,
Chorus: Have faith in Him,
Have faith in Him,
Celestial Church,
Have faith in Him.

2: The only King,
Fear not for ye shall be saved,
Chorus: Have faith in Him,
Have faith in Him,
Celestial Church,
Have faith in Him.

3: Brethren endured till the end,
Chorus: Have faith in Him,
Have faith in Him,
Celestial Church,
Have faith in Him.                Amen

Yoruba Version

1: On lo nse alabo wa,
Chorus: Gbe e ekele,
Gbe e ekele,
Ijo Mimo
Gbe e ekele.

2: Oba kan na,
Iberu ko si fun nyin,
Chorus: Gbe e ekele,
Gbe e ekele,
Ijo Mimo
Gbe e ekele.

3: Aiye, e foriti dopin,
Chorus: Gbe e ekele,
Gbe e ekele,
Ijo Mimo
Gbe e ekele.                 Amin`},{number:`536`,title:`No one knoweth tomorrow,`,category:`Faith`,lyrics:`English Version

1: No one knoweth tomorrow,
No one knoweth tomorrow,
No one knoweth tomorrow,
In vain is the world.

2: Knowledge of this is vain,
Knowledge of this is vain,
Knowledge of this is vain,
In vain is the world.

3: Have faith in Lord, Jesus,
Have faith in Lord, Jesus,
Have faith in Lord, Jesus,
Just have faith in Him.           Amen

Yoruba Version

1: Eda to mola ko si,
Eda to mola ko si,
Eda to mola ko si,
Asan laiye nse.

3: Imo asan ni t’aiye,
Imo asan ni t’aiye,
Imo asan ni t’aiye,
Asan laiye nse.

3: Sagbeke le Oluwa,
Sagbeke le Oluwa,
Sagbeke le Oluwa,
Sagbeke re le.               Amin`},{number:`537`,title:`Fear not in arms of the Lord Jesus,`,category:`Faith`,lyrics:`English Version

1: Fear not in arms of the Lord Jesus,
Nothing exists to be feared,
The fire that burns cannot come near
thee

Devil’s uprisings are subdued.

3: I cling unto His crucifix,
Everything I count as vain,
Fear not my soul I assured thee,
There is joy ni blood of Jesus,

3: I will never forsake Thee Lord,
Jesus my redeemer,
It is in Thee my salvation lies,
Thou alone can exalt me.

4: Let Celestians be full of joy,
For the bridegroom lives within you,
Joy is yours keep rejoicing,
Amen

Yoruba Version

1: Ma foya ni apa Jesu,
Ko si ohun eru kan,
Ina ti njo ko le sunmo o,
Ogun esu ti di wiwo mole.

2: Mo ro mo agbelebu Re,
Mo ka ohun gbogbo sa san,
Ma beru ire okan mi,
Ayo mbe ninu eje Jesu.

3: Emi ko ni ju O sile,
Jesu Olugbala mi,
Ninu Re ni iye mi wa,
Ire ni Olugbala mi.

4: Ijo Mimo bu si ayo,
Oko iyawo wa pelu Re,
Ayo ni tire si ma yo,
Ade iye na yio je tire.         Amin`},{number:`538`,title:`I cling to the great robe of Jesus,`,category:`Faith`,lyrics:`English Version

I cling to the great robe of Jesus,
I will never let off the great robe,
That I might have a healing,
That I might have a blessing,
That I might find salvation
That I might also have life.         Amen

Yoruba Version

Mo ro mo, ewu nla ti Jesu,
Emi ko ni f’ewu na sile,
Ke mi ba le ri wosan,
Ke mi ba le ri ibukun,
Ke mi ba le ri igbala,
Ke mi ba l e ri iye.            Amin`},{number:`539`,title:`The world had been bent to one side,`,category:`Faith`,lyrics:`English Version

1: The world had been bent to one side,
Satan is driven with shame,
Oh sinners come on board the last ship,
So that you may not be missing.

2: Father’s mercy is soon come to an
end,
He no more would listen to prayers,
Unrest and epidemic diseases,
And difficulties draweth near the world.

3: Father wants sinners perish not,
Also He wants them not to die,
Come to me said the Salvation voice,
I will redeem ye altogether.

4: All ye be in genuine love,
And be of better behaviour,
Ye continue to be prayerful,
I’ll be with you to the end time.    Amen

Yoruba Version

1: Aiye yi ti wo segbe kan,
Satani nkiri fun itiju,
Elese yara wo ‘ko ikehin,
Ko ma ba je eni ta o feku.

2: Anu Baba ti nfe dopin,
Ki o tun gbohun adura mo,
Rukerudo ajakale arun,
Ati ‘ponju ti sunmo aiye.

3: Baba ko fe egbe elese,
Beni ko si fe iku won,
Wa sodo Mi l’Olugbala nwi,
Emi yio si gba gbogbo yin la.

4: Gbogbo yin, e po ninu ife,
Pelu isesi tododo,
E ma gbadura nigbagbogbo,
Emi O si wa pelu yin dopin.      Amin`},{number:`540`,title:`I believe Thee whole heartedly,`,category:`Faith`,lyrics:`English Version

1: I believe Thee whole heartedly,
I believe Thee Lord,
I believe Thee whole heartedly,
I believe Thee Lord,
Chorus: I believe Thee Lord King of
Heaven,
I believe Thee Lord,
I believe Thee whole heartedly,
I believe Thee Lord.

2: Thou who heard that of Elijah,
Thou who heard that of Hannah,
Thou who heard that of Abraham
Thou who heard that of
Nebuchadnezzar, who converted,
Chorus: I believe Thee Lord King of
Heaven,
I believe Thee Lord,
I believe Thee whole heartedly,
I believe Thee Lord.              Amen

Yoruba Version

1: Mo gba O gbo tokantokan,
Mo gba O gbo o,
Mo gba O gbo tokantokan,
Mo gba O gbo o,
Chorus: Mo gba O gbo Olu Orun,
Mo gba O gbo o,
Mo gba O gbo tokantokan,
Mo gba O gbo o.

2: Ire lo gbo ti Elijah,
Ire lo gbo ti Hannah,
Ire lo gbo ti Abraham,
Ire lo ti Nebukadinesari to yi pada si O,
Chorus: Mo gba O gbo Olu Orun,
Mo gba O gbo o,
Mo gba O gbo tokantokan,
Mo gba O gbo o.                     Amin`},{number:`541`,title:`I have gone astray because of sins,`,category:`Faith`,lyrics:`English Version

1: I have gone astray because of sins,
It’s grace of the Lord that has found me,
He died for me, on the cross,
The grace of the glorious King is great.

2: Halleluyah, Halleluyah,
It’s grace of the Lord that has found me,
He died for me, on the cross,
The grace of the glorious King is great.
Amen

Yoruba Version

1: Mo ti sina sinu ese,
Ore Oluwa lori mi he,
Oku fun mi lori igi,
Ore ofe Oga Ogo poju,

2: Halleluya, Halleluya,
Ore Oluwa lori mi he,
Oku fun mi lori igi,
Ore ofe Oga Ogo poju.            Amin`},{number:`542`,title:`God my Father oh my Lord,`,category:`Faith`,lyrics:`English Version

1: God my Father oh my Lord,
I approach Thee with respect
Let me go home with Thy joy,
God my Father oh my Lord.

2: I am asking Thee with faith,
Mighty glory from heaven,
The faith that not shaking,
That is not in doubt at all.

3: Holy Spirit do come down,

To come and empower me,
For the world to know for sure,
That thou art my Lord our God. Amen

Yoruba Version

1: Baba mi Olorun mi,
Mo fi ‘rele sunmo O,
Je ki ‘rayo mu re le,
Oba mi Olorun mi.

2: Mo fi ‘gbagbo bere,
Ogo nla la t’orun wa,
Igbagbo ti ko mi kan,
Ti ko je siye meji.

3:Emi Orun s’okale,

Ko wa fun wa lagbara,
K’aiye le mo daju pe,
Ire ni Oluwa wa.             Amin`},{number:`543`,title:`Jesus Thou art my king,`,category:`Faith`,lyrics:`English Version

m:m:r:m:d
m:m:m:r:d:r
d:d:d:m:m:r:d
r : r: r : d : t : d

1: Jesus Thou art my king,
Jesus Thou art my king,
Jesus kindle His light for me,
Jesus Thou art my king.

2: Jesus Thou art my king,
Jesus Thou art my king,
Jesus gave His power to me,
Jesus Thou art my king.

3: Jesus Thou art my king,
Jesus Thou art my king,
Jesus crowned me with the crown of
life
Jesus Thou art my king.

4: Jesus Thou art my king,
Jesus Thou art my king,
Jesus I give my to Thee,
Jesus Thou art my king.          Amen

Yoruba Version

m:m:r:m:d
m:m:m:r:d:r
d:d:d:m:m:r:d
r : r: r : d : t : d

1: Jesu to mi loba,
Jesu to mi loba,
Jesu to tan mole fun mi,
Jesu to mi loba.

2: Jesu to mi loba,
Jesu to mi loba,
Jesu to gba-agara wo mi,
Jesu to mi loba.

3: Jesu to mi loba,
Jesu to mi loba,
Jesu to dade ye fun mi,
Jesu to mi loba.

4: Jesu to mi loba,
Jesu to mi loba,
Jesu to faiye mi fun O,
Jesu to mi loba.               Amin`},{number:`544`,title:`Let’s hold the pillar of the Lord Jesus,`,category:`Faith`,lyrics:`English Version

Let’s hold the pillar of the Lord Jesus,
And keep our minds from all anxieties
The world that would be no more,
Solo: That we might be saved
Chorus: Have faith in Him, have faith
in His love,
Have faith in Him, Lift up all thy eyes,
Have faith in Him, taste His mercy,
Just have faith in the Lord Jesus. Amen

Hymns for Judgement

Yoruba Version

E je ka dipo Jesu Kristi mu,
Ka mokan kuro ninu aniyan,
Aiye ti yio fo lo,
Solo: Kale ri gbala,
Chorus: Gbeke re le, gbeke le ‘fe Re,
Gbeke re le, gboju re soke,
Gbeke re le gboju re soke,
Gbeke re le dan anu Re wo,
Sa gbeke re le Jesu.               Amin

Orin Idajo`},{number:`551`,title:`What shall we say, what shall we tell,`,category:`Judgement`,lyrics:`English Version

d:m:l:s:d:l:d:s
d:m:l:s:d:l:d:s
d:m:f:s:m:r:m:d
d:m:f:s:m:d:m:r
d : m :fl : s : d : l : d : s
d:m:l:s:m:r:m:d

1: What shall we say, what shall we tell,
What shall we say, what shall we tell,
Celestial Church, what shall we tell,
When our Father shall call on us,
That we stop work and come to Him,
To account for all our works.

2: What shall we say, Oh my brothers,
What shall we say, Oh my sisters,
Celestial Church, what shall we tell,
When our Father shall call on us,
That we stop work and come to Him,
To account for all our works.     Amen

Yoruba Version

d:m:l:s:d:l:d:s
d:m:l:s:d:l:d:s
d:m:f:s:m:r:m:d
d:m:f:s:m:d:m:r
d : m :fl : s : d : l : d : s
d:m:l:s:m:r:m:d

1: Ki la o wi, ki la o so,
Ki la o wi, ki la o so,
Ijo Mimo ki la o so,
Gbati Baba ba pe wa o,
Pe omo siwo ko ma bo,
Wa siro ise owo re.

2. Ki la o wi, arakunrin,
Ki la o wi, arabinrin,
Ijo Mimo ki la o so,
Gbati Baba ba pe wa o,
Pe omo siwo ko ma bo,
Wa siro ise owo re.             Amin`},{number:`552`,title:`Hear my voice, hear my voice,`,category:`Judgement`,lyrics:`English Version

1: Hear my voice, hear my voice,
For I am the glorious King,
I will bring the earth and heaven to
On that appointed da.

2: Come near me, come near me,
Come near me, come near me,
Come near me Celestial Church,
Come near me, joys cometh.     Amen

Yoruba Version

1: Gbo t’Emi, gbo t’Emi,
Emi l’Oba na to l’ogo,
Emi yio ka ile at’orun,
Nigbati ojo ba pe.

2: Sunmo Mi, sunmo Mi,
Sunmo Mi, sunmo Mi,
Sunmo Mi Ijo Mimo,
Sunmo Mi ayo wole.              Amin`},{number:`553`,title:`The who judges the world shall soon`,category:`Judgement`,lyrics:`English Version

s: s:d:d:s:l:s:f:m
s:s:m:f:m:r:l:s:f:m
s: s:d:d:s:l:t:l
l:s:s:s:f:m:r:d

1: The who judges the world shall soon
come,
Jesus Christ our Lord is coming now,
Should He come in the day in or the
night
Where shall thou harbour thy sinful
deeds

2: Let Celestial be full of joy,
For the great day of judgement to come,
Many were called but few were chosen,
Halle – Halleluyah.

3: Celestial Chinch the judgement day
is near,
Witches, wizards, the judgement day is
near,
Adulterers and fornicators,
Where thou harbour thy sinful deeds.
Amen

Yoruba Version

s: s:d:d:s:l:s:f:m
s:s:m:f:m:r:l:s:f:m
s: s:d:d:s:l:t:l
l:s:s:s:f:m:r:d

1 Onidajo aiye f’ere de,
Jesu Oluwa wa o mbo wa o,
B’ode losan tabi loganjo,
Nibo l’eyin o kese yin gba.

2: Ijo Mimo, e bu si ayo,
F’ojo idajo na to ma de o,

Ope lape die la ori,
Hall-Halleluya lojo na.

3: Ijo Mimo, Idajo de o,
Aje, oso, idajo de o,
Pansaga ati agbere,
Nibo l’eyin o kese yin gba.        Amin`},{number:`554`,title:`Father count me among,`,category:`Judgement`,lyrics:`English Version

m : m : d : r : f : m :-
m : l : t : d : l : s :-
r : m : d : f : m : l : r : t :-
s:d:m:f:r:d:

1: Father count me among,
That I inherit life,
Count me among all those in Heaven
That I inherit life.

2: Make me Thy beloved,
That I inherit life,
Father make me Thy beloved,
That I inherit life.

4: Ye the Celestians,
Behold the only last ship,
Be all ye prepare steadfastly,
Before the last boat is full.

4: Ye all my beloved,
Praise ye me sincerely,
Be prepared to worship
That yee inherit life.

5: M ay Thy grace O’Father
Abide with Thy children
Comforter Spirit of Heaven
Descend to guide us all.           Amen

Hymns for the Coming of Christ

Yoruba Version

m : m : d : r : f : m :-
m : l : t : d : l : s :-
r : m : d : f : m : l : r : t :-
s:d:m:f:r:d:

1: Baba ka mi mo won,
Ki nle j’ogun iye,
Baba ka mi awon ti orun
Ki nle j’ogun iye.

2: Se mi ni ayanfe
Ki nle j’ogun iye
Baba se mi ni ayanfe
Ki nle j’ogun iye.

3: Enyin Ijo Mimo,
Oko ‘kehin l’eyi.
E giri lekoko
K’oko ‘kehin to kun.

4: Enyin ayanfe mi,
E yin mi lotito,
E mura giri lati sin,
Ke le j’ogun iye.

5: Or’ofe Re Baba,
Ko ba w’omo Re gbe,
K’emi Olutunu Orun,
Ko ma s’amona wa.                  Amin

Orin Bibo Jesu`},{number:`571`,title:`What will be our song,`,category:`Coming of Christ`,lyrics:`English Version

1: What will be our song,
The day we will see Jesus,
A! A! A! Halleluyah.

2: How full our joy will be
The day we will see Jesus,
A! A! A! Halleluyah.

3: How well shall we dance,
The day we will see Jesus,
A! A! A! Halleluyah.

4: Keep your handwork
To partake in the joy
A! A! A! Halleluyah.               Amen

Yoruba Version

1: Orin wo la ko o,
Lojo ta ba ri Jesu,
A! A! A! Halleluya.

2: Ayo wa yio ti to,
Lojo ta ba ri Jesu,
A! A! A! Halleluya.

3: Ijo wo la o jo?
Lojo ta ba ri Jesu,
A! A! A! Halleluya.

4: T’ oju ‘se owo re o,
Ko ba le ba won layo,
A! A! A! Halleluya.                 Amin`},{number:`572`,title:`Halleluyah the Bridegroom shall`,category:`Coming of Christ`,lyrics:`English Version

1: Halleluyah the Bridegroom shall
come now,
Halleluyah the Bridegroom shall come
now,
Halleluyah the Bridegroom shall come
now,
O ye Celestians be prepared to worship.

2: O ye faithful servants, be prepared to
worship,
O ye faithful servants, be prepared to
worship,
O ye faithful servants, be prepared to
worship,
All ye faithful ones, receive ye your
loins.

3: All ye good servants, be prepared to
worship,
All ye good servants, be prepared to
worship,
All ye good servants, be prepared to
worship,
All ye faithful servants receive ye your
loins.

4: This world shall surely pass,
Heavens shall also pass,
This world shall surely pass,

Heavens shall also pass,
This world shall surely pass,
Heavens shall also pass,
All ye faithful servants, receive ye
eternal crown. Amen

Yoruba Version

1: Halleluya oko iyawo yio de,
Halleluya oko iyawo yio de,
Enyin eni mimo, e mura lati sin.

2: Olusin otito, e mura lati sin,
Olusin otito, e mura lati sin,
Olusin otito, e mura lati sin,
Enyin olotito, e gba amure yin.

3: Enyin Olusin na, e mura lati sin,
Enyin Olusin na, e mura lati sin,
Enyin Olusin na, e mura lati sin,
Olusin olotito, e gba amure yin.

4: Aiye yi yio koja, Orun yio si koja,
A iye yi yio koja, Orun yio si koja,
A iye yi yio koja, Orun yio si koja,
Olusin otito, e gbade iye yin. Amin`},{number:`573`,title:`The Lord is coming, the world shall`,category:`Coming of Christ`,lyrics:`English Version

1: The Lord is coming, the world shall
tremble,
Chorus: He’s coming, Jesus the Lord is
coming,
He is coming from the sky, He’s
coming.

2: The hills shall be moved in its place,
Chorus: He’s coming, Jesus the Lord is
coming,
He is coming from the sky, He’s
coming.

3: Y e brethren, rejoice and be glad,
Chorus: He’s coming, Jesus the Lord is
coming,
He is coming from the sky, He’s
coming.

4: The wizards will surely tremble
Chorus: He’s coming, Jesus the Lord is
coming,
He is coming from the sky, He’s
coming.
Amen

Yoruba Version

1: Oluwa mbo aiye yio mi,
Chorus: O mbo, Jesu Oluwa mbo,
O mbo lawosanmo, O mbo.

2: Oke yio sidi nipo won,
Chorus: O mbo, Jesu Oluwa mbo,
O mbo lawosanmo, O mbo.

3: Gbogbo aiye, e ho f’ayo,
Chorus: O mbo, Jesu Oluwa mbo,
O mbo lawosanmo, O mbo.
4: Awon oso yio wariri
Chorus: O mbo, Jesu Oluwa mbo,
O mbo lawosanmo, O mbo.       Amin`},{number:`574`,title:`When the trumpet shall sound in`,category:`Coming of Christ`,lyrics:`English Version

1: When the trumpet shall sound in
heaven,
When the trumpet shall sound in
heaven,
When the trumpet shall sound in
heaven,
When the trumpet shall sound in
heaven,
When the trumpet shall sound,
I will be there.

2: O all ye who were redeemed,

Ye all shall sing forever and be not
wearied,
When the trumpet shall sound in
heaven,
When the trumpet shall sound in
heaven,
When the trumpet shall sound in
heaven,
When the trumpet shall sound,
I will be there.                  Amen

Yoruba Version

1: Nigbati Fere badun l’Orun,
Nigbati Fere badun l’Orun,
Nigbati Fere badun l’Orun,
Nigbati Fere badun,
Mo wa nibe,

2: Enyin olurapada,
E o korin titi aiye,
Ko ni re yin,
Nigbati Fere badun l’Orun,
Nigbati Fere badun l’Orun,
Nigbati Fere badun l’Orun,

Nigbati Fere badun,
Mo wa nibe.                      Amin`},{number:`575`,title:`Oh my Lord do not forget me,`,category:`Coming of Christ`,lyrics:`English Version

1: Oh my Lord do not forget me,
Remember me in Thy Kingdom,
W here there is salvation and a great
joy,
In everlasting salvation.

2: The Lord owner of
Sky and earth,
He owns Heaven and the World,
No matter how sweet the world may be
,
We shall depart it one day.

3: When Mary begat Jesus,
There came the three wise men,
They knelt down and paid Him homage,
And gave gifts to Jesus.       Amen

Yoruba Version

1: Oluwa ma fi mi se gbagbe,
Ranti mi to ba de joba Re,
Nibi igbala on gbe wa,
Nibi igbala aiyeraiye.

2: Oluwa to loke to loni ‘le,
On lo l’Orun to laiye,
Bo ti wu kile aiye dun to,
A o faiye sile nigbakan.

3: Nigbati Maria bi Jesu,
Awon amoye wa,
Gbogbo won wa fori bale fun,
Nwon si nta Jesu lo re.           Amin`},{number:`576`,title:`Halleluyah from Heaven above`,category:`Coming of Christ`,lyrics:`English Version

Halleluyah from Heaven above
With songs of happiness,
The Redeemer will surely come
Without expectation
Give glory to the Lord, Give glory to
the Lord,
The host of Angels filled with joy
And with praises.                 Amen

Yoruba Version

Halleluya lat’orun wa,
Pelu orin ayo,
Olugbala yio pada wa,
Lai ko ni ireti,
E f’ogo f’Oluwa, E f’ogo f’Oluwa,
Awon Angeli kun f’ayo pelu iyin. Amin`},{number:`577`,title:`My only hope was that on the last day,`,category:`Coming of Christ`,lyrics:`English Version

My only hope was that on the last day,
That I should not be told thus,
Come forth ye righteous servant
Come into your Father’s joy,
Halleluya.                       Amen

Yoruba Version

Ireti mi ni pe l’ojo kehin,
Ki nle gbo bayi pe,
Ma bo omo – odo rere,
Bo sinu ayo Baba re,
Halleluya.                      Amin`},{number:`578`,title:`O ye Angels in Celestial Church,`,category:`Coming of Christ`,lyrics:`English Version

O ye Angels in Celestial Church,
We are expecting thee in Celestial,
He that we look forward to behold,
Chorus: Do not tarry, wait no more,
Just a minute might make you lose your
life,
Jesus is waiting to save us all,
Bid thy anxious fears subside,
Do not tarry, wait no more,
Just a minute might make you lose your
life,
Jesus is waiting to save us all,
Bid thy anxious fears subside. Amen

Yoruba Version

Eyin Maleka t’Ijo Mimo,
Awa nse reti nyin n’Ijo Mimo,
O de, ent’awa nwo na Re,
Eni ikehin na ni, Emmanuel,
Chorus: Yara ka lo, mase duro,
Isegun kan le so emi re nu,
Jesu duro lati gba wa la,
Iberu kan ko si mo,
Yara ka lo, mase duro,
Isegun kan le so emi re nu,
Jesu duro lati gba wa la,
Iberu kan ko si mo.               Amin`},{number:`579`,title:`On the last day,`,category:`Coming of Christ`,lyrics:`English Version

On the last day,
On the last day,
The words of Christ are fulfilled.
Amen

Yoruba Version

Igba ikehin,
Igba ikehin,
Ni oro Kristi se.                Amin`},{number:`580`,title:`When the trumpet of the Lord would`,category:`Coming of Christ`,lyrics:`English Version

1: When the trumpet of the Lord would
sound,
And work would be no more,
Those living shall be called from the
four corners,
To give accounts of their works,
Before the Lord and our Saviour,
When the trumpet would be blown I
would be there,
Chorus: When the trumpet would be
blown yonder,
When the trumpet would be blown
yonder,
When the trumpet would be blown
yonder,
When the trumpet would be blown,
I would be there.

2: We shall all be singing
From the morning time till the evening
We shall all give glory to God
Almighty
Our Lord and Redeemer shall be calling
us good children,
When the trumpet would be blown I

would be there,
Chorus: When the trumpet would be
blown yonder,
When the trumpet would be blown
yonder,
When the trumpet would be blown
yonder,
When the trumpet would be blown,
I would be there.            Amen

Yoruba Version

1: Nigbati fere Oluwa yio dun,
Ti ise ki o si mo,
A o pe ohun alaye ‘gun merin wa,
Lati fi ise won han,
Ni’waju Olugbala wa,
Nigbati fere yio dun, emi o wa nibe,
Chorus: Nigbati, fere yio dun, lohun,
Nigbati, fere yio dun, lohun,
Nigbati, fere yio dun, lohun,
Nigbati, fere yio dun,
Emi yio wa nibe.

2: Awa yio ma korin,
Lati owuro ti yi dale,
Awa yio ma f’ogo fun Olorun,
Olugbala yio ma pe gbogbo wa ni omo
rere,
Chorus: Nigbati, fere yio dun, lohun,
Nigbati, fere yio dun, lohun,
Nigbati, fere yio dun, lohun,
Nigbati, fere yio dun,
Emi yio wa nibe.                 Amin`},{number:`581`,title:`Holy, Holy,`,category:`Coming of Christ`,lyrics:`English Version

Holy, Holy,
Holy, Holy shall we sing
On His heavenly throne
We shall all chant Halleluyah,
To our King.                     Amen

Yoruba Version

Mimo, mimo,
Mimo, Mimo la o ko,
La o ko, taba r’Olugbala,
Ni orite Re l’oke,
Awa yio ke Halleluya,
S’Oba wa.                   Amin`},{number:`582`,title:`Jesus is coming from the Heaven,`,category:`Coming of Christ`,lyrics:`English Version

1: Jesus is coming from the Heaven,
And also with the host of His Angels,
He is coming to crown us king
We thy His beloved ones.

2: O awake my soul, to meet the Lord
Jesus,
For He has died for all my sins,
O awake my soul, to meet the Lord
Jesus,
For He has died for all my sins. Amen

Hymns for God’s Work

Yoruba Version

1: Jesu mbo wa lawo sanmo,
T’on ti ogun awon Angeli,
O mbo wa lati wa de wa lade,
Awa ayanfe ti Re.

2: Wo okan mi mura lati pade Jesu,
Tori o ku fun un ese mi,
Wo okan mi mura lati pade Jesu,
Tori o ku fun un ese mi.        Amin`},{number:`601`,title:`This world’s deed is coming to an`,category:`God's Work`,lyrics:`English Version

1: This world’s deed is coming to an
end,
The deeds of this world is sinful,
Let us all have faith in the Lord
So that we might have crown of life.

2: The works of the Lord are
miraculous,
Let us be hard working,

The works of the Lord are glorious
So that we might have a place in
heaven.                 Amen

Yoruba Version

s:s:d:r:m
f:m:r:r:d:m
s:s:d:d:r:m
r:d:t:d

1: Ise aiye yi lo sopin,
Ise aiye osi yi,
E je ka gba Oluwa gbo,
Ka le gbade iye.

2: Ise Oluwa Iyanu,
E je ka mura si,
Ise Oluwa Ogo ni,
Ka le nibugbe loke.                     Amin`},{number:`602`,title:`The joy of the Lord last for long,`,category:`God's Work`,lyrics:`English Version

s:d:r:m:r:d:r:m:r
s:l:d:r:d:t:d
cr: s : d : r : m : r : d : r : m : r
s:l:d:r:d:t:d
s:d:r:m:r:d:r:m
r:r:m:f:m:r:m:t:r:d

1: The joy of the Lord last for long,
The everlasting joy,
Chorus: We all rejoice in Thy work O
Lord,
We all rejoice in Thy work O Lord,
We all rejoice in Thy work O Lord,
We all rejoice in Thy work O Lord,
Father gives us Thy blessings.

2: O come all ye Host of Heaven,
To accomplish this work,
Chorus: We all rejoice in Thy work O
Lord,
We all rejoice in Thy work O Lord,
We all rejoice in Thy work O Lord,
We all rejoice in Thy work O Lord,
Father gives us Thy blessings.

3: Ye of the world, O come to joy ,
Come to understanding,
Chorus: We all rejoice in Thy work O
Lord,
We all rejoice in Thy work O Lord,
We all rejoice in Thy work O Lord,
We all rejoice in Thy work O Lord,
Father gives us Thy blessings.

4: The world, ye come into the light,
There exist three more stars,
Chorus: We all rejoice in Thy work O
Lord,
We all rejoice in Thy work O Lord,
We all rejoice in Thy work O Lord,
We all rejoice in Thy work O Lord,

Father gives us Thy blessings.

5: Behold, the most glorious Father,
Come to the world, with grief,
Chorus: We all rejoice in Thy work O
Lord,
We all rejoice in Thy work O Lord,
We all rejoice in Thy work O Lord,
We all rejoice in Thy work O Lord,
Father gives us Thy blessings.

6: O ‘ye children of Celestial,
Receive all ye the blessings,
Chorus: We all rejoice in Thy work O
Lord,
We all rejoice in Thy work O Lord,
We all rejoice in Thy work O Lord,
We all rejoice in Thy work O Lord,
Father gives us Thy blessings.   Amen

Yoruba Version

s:d:r:m:r:d:r:m:r
s:l:d:r:d:t:d
cr: s : d : r : m : r : d : r : m : r
s:l:d:r:d:t:d
s:d:r:m:r:d:r:m
r:r:m:f:m:r:m:t:r:d

1: Ayo Oluwa pe titi,
Ayo titi aiye,
Chorus: Ninu ise Re law nyo,
Ninu ise Re lawa nyo,
Ninu ise Re lawa nyo,
Ninu ise Re lawa nyo,
Baba wa sure fun wa.

2: Enyin Ogun Orun e wa,
Ke wa gbase yi se,
Chorus: Ninu ise Re law nyo,
Ninu ise Re lawa nyo,
Ninu ise Re lawa nyo,
Ninu ise Re lawa nyo,
Baba wa sure fun wa.

3: Enyin aiye, e wa sa yo,
E wa sinu oye,
Chorus: Ninu ise Re law nyo,
Ninu ise Re lawa nyo,
Ninu ise Re lawa nyo,
Ninu ise Re lawa nyo,
Baba wa sure fun wa.

4: Aiye, e wa sinu ‘mole
Irawo meta lo le,
Chorus: Ninu ise Re law nyo,
Ninu ise Re lawa nyo,
Ninu ise Re lawa nyo,
Ninu ise Re lawa nyo,
Baba wa sure fun wa.

5: E wo Oga Ogo, Baba,
Waiye pelu ikanu,
Chorus: Ninu ise Re law nyo,

Ninu ise Re lawa nyo,
Ninu ise Re lawa nyo,
Ninu ise Re lawa nyo,
Baba wa sure fun wa.

6: Enyin omo Ijo Mimo,
E tewo ke gba ‘bukun,
Chorus: Ninu ise Re law nyo,
Ninu ise Re lawa nyo,
Ninu ise Re lawa nyo,
Ninu ise Re lawa nyo,
Baba wa sure fun wa.              Amin`},{number:`603`,title:`Our heavenly Father,`,category:`God's Work`,lyrics:`English Version

1: Our heavenly Father,
Authorises this Church,
Unfathomable are,
All the works of the Lord.

2: Celestial Church rejoice,
In all your Father’s works,
The Holy Trinity,
Glory be to His name.

3: The world shall be joyous
In this holy fold of Christ,
The sheep pf the Father,
Shall never be perished.             Amen

Yoruba Version

1: Baba , Baba Orun,
Lo pase fun ‘jo yi,
Awamaridi ni,
Ise Oluwa.

2: Ijo Mimo, e yo,
Ninu ‘se Baba yin,
Tologo Meta, ni,
Ogo f’oruko Re.

3: Aiye yio si wa yo,
Ninu agbo Kristi yi,
Agutan ti Baba,
Yio kuro ninu egbe.          Amin`},{number:`604`,title:`The world thought mine be otherwise`,category:`God's Work`,lyrics:`English Version

1: The world thought mine be otherwise
Ye my beloved servants,
Be self assured and keep working.

2: All ye devoted worshipers,
My works are righteous ones
He that is faithful shall be holy.

3: The judgement time is at hand now
Ye my messengers,
Be ye prepared so ye might have your

place in heaven,

4: It is your faithful works and love,
That the Heavenly Father wants,
For he that is righteous shall be holy.

5: Our dear Lord, the King who saves
Shall save His beloved ones,
Those that abide by His laws shall have
life.

6: There shall be life everlasting,
For those who works for Him,
Ye brethren prepared to say the truth in
this earth.                      Amen

Yoruba Version

1: Riro ni t’omo araiye,
Enyin iranse Mi,
Tujuka ke ‘tera mo ‘se Mi,

2: Enyin Olusin otito,
Otito ni ‘se Mi,
Eni to ba s’otito yio mo.

3: Igba ‘kehin na sunmo le,
Enyin ojise Mi,
E mura ke le wo ipo yin l’orun.

4: Ise otito ati ife,
Ni Baba l’Orun fe,
Enyin to ba si s’otito yio mo.

5: Oluwa Oba igbala,
Yio gba awon ti ‘Re la,
Awon to ba si p’ofin mo yio la.

6: Iye ainipekun yio wa,
F’awon onise Re,
E mura ke si s’otito aiye.        Amin`},{number:`605`,title:`Let us unite to praise our Father,`,category:`God's Work`,lyrics:`English Version

1: Let us unite to praise our Father,
Let us unite to praise our Father,
Chorus: For the last Church he sent
down,
Chant Hosanna, sing Hosanna,
To the Lord God of Trinity.

2: Accept our prayers, Lord of celestial
Accept our prayers, Lord of celestial
Chorus: For the last Church he sent
down,
Chant Hosanna, sing Hosanna,
To the Lord God of Trinity.

3: Come redeem us, Lord of celestial,
Come redeem us, Lord of celestial,
Chorus: For the last Church he sent
down,
Chant Hosanna, sing Hosanna,
To the Lord God of Trinity.

4: Come bless us, Lord of celestial,
Come bless us, Lord of celestial,
Chorus: For the last Church he sent
down,
Chant Hosanna, sing Hosanna,
To the Lord God of Trinity.

5: Uplift us, Lord of celestial,
Uplift us, Lord of celestial,
Chorus: For the last Church he sent
down,

Chant Hosanna, sing Hosanna,
To the Lord God of Trinity.  Amen

Yoruba Version

1: Ka sowopo ka joyin Baba,
Ka sowopo ka joyin Baba,
Chorus: Fun ‘jo ikehin to sokale,
Ke Hossanah, ko Hossanah,
So Olorun meta lokan.

2: Wa gba adura Olujo Mimo,
Wa gba adura Olujo Mimo,
Chorus: Fun ‘jo ikehin to sokale,
Ke Hossanah, ko Hossanah,
So Olorun meta lokan.

3: Wa gba wa la Olujo Mimo,
Wa gba wa la Olujo Mimo,
Chorus: Fun ‘jo ikehin to sokale,
Ke Hossanah, ko Hossanah,
So Olorun meta lokan.

4: Wa bukun wa Olujo Mimo,
Wa bukun wa Olujo Mimo,
Chorus: Fun ‘jo ikehin to sokale,
Ke Hossanah, ko Hossanah,
So Olorun meta lokan.

5: Wa gbe wa ga Olujo Mimo,
Wa gbe wa ga Olujo Mimo,
Chorus: Fun ‘jo ikehin to sokale,
Ke Hossanah, ko Hossanah,
So Olorun meta lokan.             Amin`},{number:`606`,title:`They are the works of the Lord,`,category:`God's Work`,lyrics:`English Version

1: They are the works of the Lord,
I’ll work continuously,
They are the works of the Lord,
Labour ye on.

2: All ye sorcerers get away from me,
I’ll work continuously,
They are the works of the Lord,
Labour ye on.

3: All ye witches get away from me,
I’ll work continuously,
They are the works of the Lord,
Labour ye on.

4: Satan get away from me,
I’ll work continuously,
They are the works of the Lord,
Labour ye on.                   Amen

Yoruba Version

1: Ise Oluwa ni o,
Ma ma se ni so o,
Ise Oluwa ni o,
E se ka lo.

2: Oso ile pada lehin mi o,
Ma ma se ni so o,
Ise Oluwa ni o,
E se ka lo.

3: Aje pada lehin mi o,
Ma ma se ni so o,
Ise Oluwa ni o,
E se ka lo.

4: Esu pada lehin mi o,
Ma ma se ni so o,
Ise Oluwa ni o,
E se ka lo.                    Amin`},{number:`607`,title:`Work hard ye the holy ones,`,category:`God's Work`,lyrics:`English Version

Work hard ye the holy ones,
Work hard ye the holy ones,
The works are meant for the holy ones,
The works of holy heaven,
The works of my Lord,
The Lord shall exalt them,
The works of my Lord,
The Lord shall exalt them.      Amen

Yoruba Version

E sise, enyin mimo,
E sise, enyin mimo,
Awon eni mimo, lo nsise,
L’on sise Orun Mimo,
Ise Oluwa mi,
Oluwa yio gbe s’oke,
Ise Oluwa mi,
Oluwa yio gbe s’oke.           Amin`},{number:`608`,title:`Take care of your works Celestial`,category:`God's Work`,lyrics:`English Version

1: Take care of your works Celestial
Church,
Take care of your works Celestial
Church,
Over the hills and over the plains,
My eyes behold your works in Heaven.

2: Show humility Celestial Church,
Show humility Celestial Church,
Work righteously ye Celestians,
My eyes behold your works in Heaven.

Amen

Yoruba Version

1: Toju ise re , Ijo Mimo,
Toju ise re , Ijo Mimo,
L’ori oke ohun petele,
Oju mo now ‘se yin oke Orun.

2: Iteriba, Ijo Mimo,
Iteriba, Ijo Mimo,
E sododo, enyin Ijo Mimo,
Oju mo now ‘se yin oke Orun.    Amin`},{number:`609`,title:`There is a home in heaven above,`,category:`God's Work`,lyrics:`English Version

There is a home in heaven above,
Where nobody labours nor strives,
Work that ye might be profitable,
At holy Father’s place above,
Work so that your gain might increase,
At my holy Father above.        Amen

Yoruba Version

Ile kan mbe loke Orun
Nibiti enikan ki nsise,
E sise k’enyin fi r’ere je,
Lodo Baba Mimo l’Orun,
E sise k’enyin fi r’ere gba,
Lodo Baba Mimo l’Orun.           Amin`},{number:`610`,title:`The host of holy Angels,`,category:`God's Work`,lyrics:`English Version

s:s:d:r:m
f:m:r:r:d:m
s:s:d:d:r:m
r:d:t:d

1: The host of holy Angels,
The host of holy Angels,
The host of holy Angels,
Thus descend from heaven above.

2: To accept thanks offering,
To accept thanks offering,
To accept thanks offering,
From heaven above.            Amen

Yoruba Version

s:s:d:r:m
f:m:r:r:d:m
s:s:d:d:r:m
r:d:t:d

1: Awon Angeli Mimo,
Awon Angeli Mimo,
Awon Angeli Mimo,
Nwon nsokale l’oke Orun.

2: Lati wa gbope,
Lati wa gbope,
Lati wa gbope,
L’oke Orun! Halleluya.          Amin`},{number:`611`,title:`The day has come, the day has come,`,category:`God's Work`,lyrics:`English Version

1: The day has come, the day has come,
Celestial church, girdle up your loins.

2: At Father’s throne above, at Father’s
throne above,
Holy, holy is the song rendered there.
Amen

Yoruba Version

1: Ojo na pe, ojo na pe,
Ijo Mimo, e damure nyin.

2: Nite Baba l’ Orun, nite Baba l’Orun,
Mimo, mimo ni nwon nko nibe.       Amin`},{number:`612`,title:`Divine message God has sent,`,category:`God's Work`,lyrics:`English Version

1: Divine message God has sent,
That the Angels have delivered to us,
Brethren hearken ye to the word,
Brethren hearken ye to the word.

2: Satan girdle his loins,
Satan girdle his loins,
There is no single victory for Satan,
There is no single victory for Satan.

3: Fear not, surrender all to the Lord,
Hold fast the light of salvation,
Labour ye steadfastly with tender love,
Labour ye steadfastly with tender love.

4: We shall gain the crown of life,
We shall gain the crown of life,
Halleluyah shall ever our song
Halleluyah shall ever our song. Amen

Yoruba Version

1: Ijinle ise l’Oluwa ran,
T’awon Angeli wa je fun aw,
K’agba ‘jo f’etisile ke gbo,
K’agba ‘jo f’etisile ke gbo.

2: Satani di amure,
Satani di amure,
Isegun kan ko si fun esu,
Isegun kan ko si fun esu,

3: Ma beru sa ju Oluwa sile,
Di imole ‘gbala yi mu,
Sise pelu ife mimo,
Sise pelu ife mimo.

4: Ade iye yio je ti wa,
Ade iye yio je ti wa,
Halleluya lorin wa yio je,
Halleluya lorin wa yio je.            Amin`},{number:`613`,title:`Those who labour inherit Heaven,`,category:`God's Work`,lyrics:`English Version

Those who labour inherit Heaven,
Prepare ‘n the work O ye people,
The last period is approaching,
Thy work, thy work is observed. Amen

Yoruba Version

Eni sise loni Orun,
Mura sise, enyin araiye,
Igba ikehin fere de,
Ise, ise la now nibe.                 Amin`},{number:`614`,title:`Halleluyah, Halleluyah,`,category:`God's Work`,lyrics:`English Version

Halleluyah, Halleluyah,
Christ our Father exists
And He’s behind us every time,
The host of Angels are saying thus,
Be prepared for that day,
Halleluyah, Halleluyah.         Amen

Yoruba Version

Halleluya, Halleluya,
Kristi Baba wa mbe,
Lehin wa nigba gbogbo,
Awon Angeli nwi bayi pe,
Mura sise ojo na,
Halleluya, Halleluya.                 Amin`},{number:`615`,title:`Brethren the time is at hand,`,category:`God's Work`,lyrics:`English Version

1: Brethren the time is at hand,
To work devotedly,
So we might excel in our ways
Together with our Lord.

2: Ye brethren be hardworking,
Be determined for what is good,
The good which nobody, has ever done,
This is our blessings.          Amen

Yoruba Version

1: Ara wakati na de,
Lati se opo ise,
Ka le bori ‘nu ona wa,
Olorun pelu wa.

2: Ara tepa mo ‘se re
Lepa ipinu rere,
Iru eyi t’enikan ko ise,
Eyi logo wa,
Eyi ni ‘bukun wa.                     Amin`},{number:`616`,title:`Wake O ye brethren wake,`,category:`God's Work`,lyrics:`English Version

1: Wake O ye brethren wake,
And do the work you were assigned
So that thou might be rewarded on the
Appointed day.

2: Tremble, O ye brethren tremble,
The light has descended for you
So you might kindle it
Amidst the worldly darkness.

3: Strive hard O ye brethren strive hard,
The righteousness is there for you,
And you shall righteously resist the
devil.                            Amen

Yoruba Version

1: Ji, arakunrin ji,
Fun se re ti o ko ise,
Ki ‘wo le ri ere re gba lojo kehin.

2: Beru arakunrin beru,
Imole na ti de fun o,
Ki ‘wo le tan mole,
Larin okunkun aiye.

3: Sise arakunrin sise,
Ododo na ti de fun o,
K’iwo le so ododo koju ti esu.   Amin`},{number:`617`,title:`The Angels are rejoicing`,category:`God's Work`,lyrics:`English Version

1: The Angels are rejoicing
In the heavens above,
The Angels are rejoicing,
On the success of Celestial Church,
In her works on earth.

2: Ha! Ha! Ha! Ha! Halleluyah,
Ha! Ha! Ha! Halleluyah,
Ha! Ha! Ha! Halleluyah,
Ha! Ha! Ha! Halleluyah,
Ha! Ha! Ha! Halleluyah,
Ha! Ha! Ha! Halleluyah.        Amen

Yoruba Version

1: Awon Angeli nyo,
Ninu awon Orun,
Awon Angeli nyo,
Ninu awon Orun,
Fun aseyori Ijo Mimo.

2: A! A! A! A! Alleluya,
A! A! A! Alleluya,
A! A! A! Alleluya,
A! A! A! Alleluya,
A! A! A! Alleluya,
A! A! A! Alleluya.               Amin`},{number:`618`,title:`Jesus Christ stands before me,`,category:`God's Work`,lyrics:`English Version

1: Jesus Christ stands before me,
Teach me to always do Thy will,
The work You assigned to me,
Give me Thy powers
That I may do them,
Chorus: Halleluyah, Halleluyah,
Halleluyah is my song.

2: Jesus Christ stands before me
Teach me to always do Thy will,
The love that the Lord wants
Among all the brethren,
Like in heaven.
Chorus: Halleluyah, Halleluyah,
Halleluyah is my song.

3: Our Jesus Christ is a healer,
Come heal our hearts for us,
The Spirit of the Lord
May we be like Thee
In this light,
Chorus: Halleluyah, Halleluyah,
Halleluyah is my song.           Amen

Yoruba Version

1: Jesu duro niwaju mi,
Ko mi ki nle se ife Re,
Ise yan mi si,
Fun mi lagbara Re,
Ki nle se yi,
Chorus: Halleluya, Halleluya
Halleluya lorin mi.

2: Jesu duro niwaju mi,
Ko mi ki nle se ife Re,
Ife t’Olorun fe,
Larin gbogbo,
Bi ti Orun,
Chorus: Alleluya, Alleluya
Halleluya lorin mi.

3: Oluwosan ni Jesu wa,
Wa wo ‘nu okan wa san,
Emi t’Olorun fe,
Se wa gege bi ire,
Nu’ mole yi,
Chorus: Halleluya, Halleluya
Halleluya lorin wa.               Amin`},{number:`619`,title:`Salvation ship has come,`,category:`God's Work`,lyrics:`English Version

s:d:d:r:m

s:d:d:r:m
s:s:m:f:m:r
d:t:d:r:d:t:d

1: Salvation ship has come,
Salvation ship has come,
Work ye devotedly,
Ye children of Celestial.

2: Sound ye the trumpets,
Sound ye the trumpets,
The world come to repentance
The end-time thus arrived.

3: Sound ye the trumpets,
Sound ye the trumpets,
The good sheep are coming
Sound ye the trumpets.         Amen

Yoruba Version

s:d:d:r:m

s:d:d:r:m
s:s:m:f:m:r
d:t:d:r:d:t:d

1: Oko ‘gbala ti de,
Oko ‘gbala ti de,
K’amura sise o,
Enyin omo ‘jo Mimo.

2: E mu fere lenu,
E mu fere lenu,
Agbaiye yio yi pada,
Igba kehin ti de.

3: E mu fere lenu,
E mu fere lenu,
Agutan rere mbo,
E mu fere lenu o.                  Amin`},{number:`620`,title:`Ye children of Celestial,`,category:`God's Work`,lyrics:`English Version

1: Ye children of Celestial,
Girdle up your loin firmly,
We might join host of Angels
Chant Halleluyah on that day,
That we might all dwell in the joy of the
Lord.
Solo: Give glory to Father,
The profound unsearchable God
Almighty,
Jehovah divine we plead,
Forsake me ye not from Thee,
By your only loving grace,
I would be there.

2: Because Jesus is coming
For the judgement of the world,
He shall bring His beloved,
Unto Father in Heaven,
Chanting Halleluyah with host of
Angels.
Solo: Give glory to Father,
The profound unsearchable God
Almighty,
Jehovah divine we plead,
Forsake me ye not from Thee,
By your only loving grace,
I would be there.

3: Lord Jesus is coming back,

Like the thief in the midnight,
Ye the beloved of the Lord
Let us be in readiness
To join the host of Angels
Fly to Heaven,
Solo: Give glory to Father,
The profound unsearchable God
Almighty,
Jehovah divine we plead,
Forsake me ye not from Thee,
By your only loving grace,
I would be there.             Amen

Yoruba Version

1: Enyin omo Ijo Mimo,
E damure nyin giri,
Ka si le b’awon Angeli,
Ka Alleluya lojo na,
Ka si le bo sinu ayo Oluwa,
Solo: Damuso – fun Baba,
Awamaridi jinle Kabiyesi,
Jehovah Mimo jowo,
Ma se le mi lodo Re,
Nipa ore ofe Re,
Ki nle de be.

2: Nitori Jesu mbo wa,
Lati se ‘dajo aiye,
Yio si kawon ayanfe,
Lo sodo Baba loke,
A o si b’awon Angeli k’Alleluya,
Solo: Damuso – fun Baba,
Awamaridi jinle Kabiyesi,
Jehovah Mimo jowo,
Ma se le mi lodo Re,
Nipa ore ofe Re,
Ki nle de be.

3: Jesu si npada bo wa,
Gege bi ole loru,
Enyin ayanfe Oluwa,
E je ka mura sile,
Lati le b’awon Angeli,

Fo lo sorun,
Solo: Damuso – fun Baba,
Awamaridi jinle Kabiyesi,
Jehovah Mimo jowo,
Ma se le mi lodo Re,
Nipa ore ofe Re,
Ki nle de be.          Amin`},{number:`621`,title:`Holy Angels of Heaven,`,category:`God's Work`,lyrics:`English Version

d:r:m:r:d:s:l
r:m:f:m:r:d:t
d:r:m:r:d:s:l
m:f:l:t:d

1: Holy Angels of Heaven,
Descend from Heaven above,
To come and give us blessing,
In Celestial Church.

2: Children of Celestial Church,
Prepare to accomplish His wish,
Hastily, the Lord shall come,
Paying us a visit.

3: Those striken in poverty,
Sing ye song s and burst for joy,
For the Lord shall surely come,
He shall set you free.

4: How plenteous our joy may be,
In the last heavenly Kingdom,
Only if we get prepared,
To the work of the Lord.

5: Ye workers of the Lord,
Get prepared to do His work,
For your rewards are many,
In Heaven above.                    Amen

Yoruba Version

d:r:m:r:d:s:l
r:m:f:m:r:d:t
d:r:m:r:d:s:l
m:f:l:t:d

1: Maleka Mimo t’Orun,
Nwon ti t’Orun sokale,
Lati wa sure fun wa,
Ninu Ijo Mimo.

2: Enyin omo Ijo Mimo,
Mura lati se ife Re,
Nitori o mbo kankan,
Lati be wa wo.

3: Gbogbo ‘enyin oluponju,
E korin ke ho f’ayo,
Nitori Oluwa mbo,
Yio da yin nide.

4: Ayo wa yio ti po to,
Nikehin ni Ijoba Orun,
Bi awa ba le mura,
S’ise Oluwa.

5: Enyin O sise Oluwa,
Mura lati sise na,
Nitori ere nyin po,
Li oke Orun.                  Amin`},{number:`622`,title:`Behold the work God assign me,`,category:`God's Work`,lyrics:`English Version

m:m:f:m:r:d:f:m
m:d:f:m:r:d:f:m

m:d:f:r:d:l:f:m: r:d

1: Behold the work God assign me,
Behold the way God instructs me,
Jesus, Jesus, Jesus, conquer for me.
2: Behold the work God assign me,
Behold the way God instructs us,
Jesus, Jesus, Jesus, come and save us.

3: Behold the work God assign me,
Behold the way God instructs us,
Jesus, Jesus, Jesus, come uplift us.
Amen

Hymns of Warning

Yoruba Version

m:m:f:m:r:d:f:m
m:d:f:m:r:d:f:m

m:d:f:r:d:l:f:m: r:d

1: Wo ise na ti O pe mi si,
Wo ona ti O pe mi si,
Jesu, Jesu, Jesu, segun fun mi.
2: Wo ise na ti O pe mi si,
Wo ona ti O pe wa si,
Jesu, Jesu, Jesu, wa gba wa la.

3: Wo ise na ti O pe mi si,
Wo ise to O yan wa si,
Jesu, Jesu, Jesu wa gbe wa ga.    Amin`},{number:`631`,title:`Celestial Church repent of sins,`,category:`Warning`,lyrics:`English Version

1: Celestial Church repent of sins,
The bridegroom comes very soon,
He shall meet us on the last day,
And we shall behold His glory.

2: Celestial Church be full of joy,
The bridegroom comes very soon,
He shall meet us on the last day,
And we shall behold His glory. Amen

Yoruba Version

1: Ijo Mimo, E yi pada,
Oko ‘yawo fere ‘de,
Toba ba wa lojo kehin
Ko ba le wo le ogo.

2: Ijo Mimo, E bu sayo,
Oko ‘yawo fere ‘de,
Toba ba wa lojo kehin
Ko ba le wo le ogo.                Amin`},{number:`632`,title:`It is hard, it is hard,`,category:`Warning`,lyrics:`English Version

1: It is hard, it is hard,
To gain everlasting life, it is hard,
The world is ending soon, the world is
ending soon,
The whole world has turned upside
down,
The world is ending soon.

2: Be thoughtful,
Be thoughtful,
Think properly and repent,
Be thoughtful.                   Amen

Yoruba Version

1: O soro, O soro,
Lati ri’ joba Orun wo, o soro,
Aiye nyi lo, aiye nyi lo,
Ile aiye ti sorikodo,
Aiye nyi lo.

2: E ronu o,
E ronu o,
E ronu ke yipada,
E ronu o.                          Amin`},{number:`633`,title:`The Lord is proclaiming,`,category:`Warning`,lyrics:`English Version

The Lord is proclaiming,
The Lord is proclaiming,
Thy ways and thy worship

Shall take you to heaven if it’s good,
Thy ways and thy worship
Shall take you to heaven if it’s good.
Amen

Yoruba Version

Olu Orun nkigbe,
Olu Orun nkigbe,
Iwa re, esin re,

Ni o gbe O d’orun,
Bo dara
Iwa re, esin re,
Ni o gbe O d’orun b’o dara.           Amin`},{number:`634`,title:`s - m - f - s- d - f - m- r`,category:`Warning`,lyrics:`English Version

s : m : f : s : d :- t - l - s
s - m - f - s- d - f - m- r
s - m - f - s- d - t - l - s
s - m - f - s- f - m - r - d

Worship the Lord, your creator,
For I have made all of you kings
Over all the beast of the earth,
Until when the hour cometh.

2: Behold ye the heaven and the earth,
So everything might belong to you,
The world shall dost pine soonest,
Be devoted spiritually.

3: The devil has indeed arrived,
To inquire of all your works,
Give me the power and the spirit to
overcome the devil one.          Amin

Yoruba Version

s : m : f : s : d :- t - l - s
s - m - f - s- d - f - m- r
s - m - f - s- d - t - l - s
s - m - f - s- f - m - r - d

1: Esin Olorun Eleda yin,
Nitori mo ti fi ‘yin joba,
Lo ‘rawon eranko aiye,
Gbati wakati na ba de.

2: E boju yin w’orun on aiye,
Lati f’ohun gbogbo fun yin,
Aiye yi ti npin lo na,
E tara si ise emi.

3: Oludena na de,
Lati wa bere ise yin,
Fun mi lagbara ati Emi,
Lati segun oludena yi.                Amin`},{number:`635`,title:`The illuminating light has arrived,`,category:`Warning`,lyrics:`English Version

1:The illuminating light has arrived,
The illuminating light has arrived,
Whoever possesses His Spirit can see
the glory.

2: The Lord our God is the everlasting
rock,
The Lord our God is the everlasting
rock,
It is He who possesses His Spirit that
shall know.

3: Celestial Church, girdle your loins,
Girdle up your loins firmly,
Celestial Church, girdle your loins,
Girdle up your loins firmly,
The Saviour is coming soon for the

Yoruba Version

1: Imole didan na on lode yi,
Imole didan na on lode yi,
Enikeni to lemi Re lo le ri ogo na.

2: Apata aiyeraiye, on na ni Oluwa,
Apata aiyeraiye, on na ni Oluwa,
Eni to ba si lemi Re, on na lo mo.

3: Ijo Mimo, e tunra di,
E di amure yin,
Ijo Mimo, e tunra di,
E di amure yin,
Olugbala lo si mbo wa lati se idajo. Amin`},{number:`636`,title:`The divine good Shepherd,`,category:`Warning`,lyrics:`English Version

d:t:d:r:d :r:d:s
m:r:m:f :m:r
d:m:r:d:l:d:s
d:r:f:m:r:d:r:t:d

1: The divine good Shepherd,
The divine good Shepherd,
Shall dost proclaim unto thee,
To repent and come unto Me.

2: This is the call of mercy,
That the devil world calleth thee the
sheep,
The Saviour calleth on thee,
To repent and come Unto Him.

3: Celestial Church be prepared,
For the great task assigned to thee,
For it is thy girdle,
That I have made readily for thee.

4: Celestial Church hearken to
My clarion call unto thee,
The last day has arrived
So that you might take your place.
Amen

Songs for Burial and Remembrance

Yoruba Version

d:t:d:r:d :r:d:s
m:r:m:f :m:r
d:m:r:d:l:d:s
d:r:f:m:r:d:r:t:d

1: Oluso Agutan,
Oluso, Agutan,
A kigbe tantan si yin,
Wipe e yi pada si Mi.

2: Ipe anu ni eyi,
T’aiye si npe yin agutan,
Olugbala lo npe yin,
Wipe e yi pada si Mi.

3: Ijo Mimo, e mura
Fun ‘se nla, mo gbe fun yin,
Eyi ni amure yin,
Ti mo ti pese le e fun yin.

4: Ijo Mimo, e wa gbo,
Ti mo npe tantan si yin,
Ojo ‘kehin na de tan,
Ke le kun u aye yin.                    Amin`},{number:`646`,title:`belele a o na Bonono,`,category:`Burial and Remembrance`,lyrics:`English Version

1: belele a o na Bonono,
belele a o na Bonono,
Mo ni Seroba Roba Namichael,
Zoni Belele a o no Bonono.

2: Let us go to the side of the Lord,
Let us go to the side of the Lord,
To holy heaven beside holy Michael
Brethren, let us go to the side of the
Lord.                               Amen

Yoruba Version

1: belele a o na Bonono,
belele a o na Bonono,
Mo ni Seroba Roba Namichael,
Zoni Belele a o no Bonono.

2: Wa ka lo si odo Oluwa,
Wa ka lo si odo Oluwa,
L’oke Orun s’odo Michael Mimo,
Ara wa ka lo si odo Oluwa.     Amin`},{number:`647`,title:`We come to market, We come to`,category:`Burial and Remembrance`,lyrics:`English Version

We come to market, We come to
market,
We come to market in the world,

n   We come to market, We come to
market,
We come to market in the world. Amen

Yoruba Version

Awa’ja, Awa’ja,
Awa’ja ninu aiye,
Awa’ja, Awa’ja,

Awa’ja ninu aiye.                   Amin`},{number:`648`,title:`When the saints go marching home,`,category:`Burial and Remembrance`,lyrics:`English Version

1: When the saints go marching home,
When the saints go marching home,
Lord I want to be among them,
When the saints go marching home.

2: Let all prophets mind their works,
Let all prophets mind their works,
Those who weigh our works are coming
Let all prophets mind their works.

3: Let the prayerful one mind their
works,
Let prayerful one mind their works,
Those who weigh our works are coming
Let the prayerful one mind their works.

4: When the saints go marching home,
When the saints go marching home,
Lord I want to be among them,
When the saints go marching home.
Amen

Yoruba Version

1: Gba t’awon mimo re le,
Gba t’awon mimo re le,
Oluwa ka mi mo won,
Gba t’awon mimo re le.

2: K’eyin woli mura sise,
K’eyin woli mura sise,
Awon ti won se mbo,
K’eyin woli mura.

3: K’aladura mura sise,
K’aladura mura sise,
Awon ti won se mbo,
K’aladura mura sise.

4: Gba t’awon mimo re le,
Gba t’awon mimo re le,
Oluwa ka mo won,
Gba t’awon mimo re le.            Amin`},{number:`649`,title:`Thy mercy our Father,`,category:`Burial and Remembrance`,lyrics:`English Version

Thy mercy our Father,
Worldly possession are vain,
Thou the Father Divine
Redeem us all we plead.          Amen

Yoruba Version

Anu Re, Baba wa,
Ohun aiye asan,
Ire Baba Mimo,
Dakun wa gba la.                    Amin`},{number:`650`,title:`The end-time brethren,`,category:`Burial and Remembrance`,lyrics:`English Version

The end-time brethren,
See ye the end-time brethren,
Come and behold the end-time,
Foe a worthy child shall return to his
abode.                             Amen

Songs of Call to Heaven

Yoruba Version

Araiye igbehin,
E wa aiye igbehin,
E wa wo aiye igbehin,
Omo rere yio pada si ibi ‘re.   Amin

Orin Ipe Si Oke Orun`},{number:`666`,title:`Jesus abides on the throne,`,category:`Call to Heaven`,lyrics:`English Version

1: Jesus abides on the throne,
Rejoice ye Celestial fold,

Jesus abides on the throne,
Rejoice ye Celestial fold.

2: Jesus abides on the throne,
Rejoice ye with the host of holy Angels
Jesus abides on the throne,
Rejoice ye Celestial Church.

3: Jesus abides on the throne,
With the host of holy Angels,
Jesus abides on the throne,
To forgive us all our sins.

4: Halleluyah is our song,
Hosanna Jesus cometh
Halleluyah Father,
Chant Hosanna to the King of light.
Amen

Yoruba Version

1: Jesu mbe lor’ ite,
E ma yo enyin jo Momi,

Jesu mbe lor’ ite,
E ma yo enyin jo Momi.

2: Jesu mbe lor’ ite,
E ma pelu awon Angeli
E ma yo enyin Celestial.

3: Jesu mbe lor’ ite,
Pelu awon Ogun orun,
Jesu mbe lor’ ite,
Lati dari ese ji wa.

4: Halleluya lorin wa,
Hossana Jesu wole,
Halleluya Baba,
E ke Hossana s’Oba Imole.         Amin`},{number:`667`,title:`A Holy world exists for us,`,category:`Call to Heaven`,lyrics:`English Version

A Holy world exists for us,
Heavenly joys are everlasting
Heavenly Father made this promise to
us,
Let it be made according to his will.
Amen

Yoruba Version

Aye Mimo ka wa fun wa,
Ayo orun ko nipekun,
Baba orun lose leri re fun wa,
Ki o se fun wa tabi ife Re.        Amin`},{number:`668`,title:`In my Father’s house in heaven,`,category:`Call to Heaven`,lyrics:`English Version

1: In my Father’s house in heaven,
Very many mansions exists there,
Jesus is there, Angels is there,
Singing Halleluyah,
Halleluyah Holy, Halleluyah Holy,
Halleluyah Holy, Halleluyah Holy,
Halleluyah, Halleluyah, Halleluyah.

2: Time to sound last bell draweth near,
That the whole world will congregate
To be paid compensation,
According to the works of their hands,
On my part I’ll do good, on my part I’ll
do good,
On my part I’ll do good, on my part I’ll
do good,
I will do good to find salvation. Amen

Yoruba Version

1: Nile Baba mi l’oke orun,
Opo ibugbe lo wa nibe,
Jesu wa nibe, Angeli wa nibe,
Won ‘ko Halleluya,
Halleluya Mimo, Halleluya Mimo,
Halleluya Mimo, Halleluya Mimo,
Halleluya, Halleluya, Halleluya

2: Agogo kehin fere dun,
Ti gbogbo aiye yio pe jo,
Ta o pin fun olukaluku,
Gege bi ise owo re,
Emi yio se rere, emi o se rere,
Emi yio se rere, ki nle ri ‘ye,
Emi yio se rere, emi o se rere,
Emi yio se rere, ki nle ri ‘ye.    Amin`},{number:`669`,title:`Celestial Church let’s go onward,`,category:`Call to Heaven`,lyrics:`English Version

s:d:r:m:d:r:r:m
m:l:t:d:l:s
r:m:d:f:m:l:r:t
s : d : m : f : r : d :-

1: Celestial Church let’s go onward,
To the said holy land,
The holy land, the land of life,
The holy peaceful land.

2: Oye world bow with reverence
To the said holy King,
Our Lord the everlasting King,
And the holy heaven.

3: Let every one be prepared
To worship the King
The King who is greater than the earth,
The everlasting King.          Amen

Yoruba Version

s:d:r:m:d:r:r:m
m:l:t:d:l:s
r:m:d:f:m:l:r:t
s : d : m : f : r : d :-

1:Ojo Mimo, e je ka lo,
Sile mimo ta wi,
Ile mimo, ile iye,
Ile Alafia.

2: Eyin aiye, e teriba,
F’ Oba Mimo ta wi,
Olorun Oba aiyeraiye,
Ati Orun Mimo.

3: E je ka mura,
Ka wa sin Oba na,
Oba to ga ju aiye lo,
Oba aiyeraiye.                      Amin`},{number:`670`,title:`O ye brethren come and worship`,category:`Call to Heaven`,lyrics:`English Version

1: O ye brethren come and worship
In this Celestial Church,
Celestial Church from heaven above
Worship ye in Celestial Church.

2: The words of God thus are prayer
For this end-time church indeed,
The authority from our Father
Are prayers of this Church.      Amen

Yoruba Version

1: Enyin ara, e wa josin,
Ninu Ijo Mimo,
Ijo Mimo lat’Orun wa,
E sin ni ‘jo mimo.

2: Oro Olorun l’ adura Ijo ikehin yi,
Ase to t’ odo Baba wa,
L’ adura Ijo yi.                      Amin`},{number:`671`,title:`Rejoice ye in My work,`,category:`Call to Heaven`,lyrics:`English Version

s:d:s:m:f:s:s
d:r:r:d:r:m
s:d:s:m:f:s:s
m:f:m:r:d

1: Rejoice ye in My work,
A glorious work it is
A work that I partake of
A glorious work it is.

2: Ye children of My Church
Be active to see Me
My dwelling place is beyond
An everlasting place

And ye the divine ones

Be ready to be pure,
Heavenly gates now open
Lay down your treasures there.

4: Ye My beloved ones fear ye not the
world
My protection covers you
Its glory shineth further.     Amen

Yoruba Version

s:d:s:m:f:s:s
d:r:r:d:r:m
s:d:s:m:f:s:s
m:f:m:r:d

E yo ninu ‘se mi,
Ise to logo ni,
Ise t’ Emi ba si nse
Ise to logo ni.

2: Enyin omo ‘Jo Mi
E mura ke ri mi,
Aye ti mo wa lohun
Ipo aiyeraiye.

3: Enyin eni mimo,

E mura ke si mo,
Ferese Orun si sile,
Ewa iye sibi yi.

4: Eyin eni t’Emi,
E ma se beru aiye,
Abo ti mo fun yin,
Ogo re si de tan.  Amin`},{number:`672`,title:`Hearken to the voice as is sounds`,category:`Call to Heaven`,lyrics:`English Version

d : d : r : m : rm : f : m : r : m
m:m:m:f:m:r:d:t:d:r
d : d : r : m : r : m : f : m : r : m:-
f:m:r:d:t:d:r:m:r:d

1: Hearken to the voice as is sounds
above,
Jesus stands by the gate of heaven
To take all His beloved ones
To the heavenly Father’s throne.

2: The host of Angels are full of joy,
They sound the trumpets with joy
Father count me among them all
That I might behold Christ that day.

3: It is Thy grace Oh Father we ask for,
For power and Thy heavenly blessing
To descend and be with us today,
So Halleluyah might be our song. Amen

Songs for Divine Call

Yoruba Version

d : d : r : m : rm : f : m : r : m
m:m:m:f:m:r:d:t:d:r
d : d : r : m : r : m : f : m : r : m:-
f:m:r:d:t:d:r:m:r:d

1: Gbo bi ipe an ti ndun lorun,
Jesu duro ni bode orun
Lati ko awon ayanfe Re
Lo si ori ite Baba.

2: Awon Angeli kun fayo
Nwon nfun fere pelu ayo,
Baba ka ni mo awon eyi,
Ki nle ri Jesu lojo na.

3: Ore –ofe Re Baba la ntoro,
Agbara ati imisi orun
Ko wa ba wa gbe e lojo oni,
K’ Alleluya le je orin wa.                Amin`},{number:`676`,title:`Awake, awake, God of blessing`,category:`Divine Call`,lyrics:`English Version

s:s:f:m:d:d:d:r:m:d
d:d:d:r:m:m:r:d:r
s:s:f:m:d:d:d:r:m:d

1: Awake, awake, God of blessing
awake,
Awake, awake, God of blessing awake,
The King of life is a Holy King,
Our Lord is the God of blessing,
Awake, awake, God of blessing awake.

2: Come ye, come ye, all worshipers,

come ye,
Come ye, come ye, all worshipers,
come ye,
Come and receive the crown of life,
That which shall make you have
salvation,
Come ye, come ye, all worshipers,
come ye.

3: Be prepared, be prepared, ye faithful
be prepared,
Be prepared, be prepared, ye faithful be
prepared,
This is the time of worshiping,
The time of judgement is at hand,
Be prepared, be prepared, ye faithful be
prepared.

4: Truth, Love and faithful worship are
their song,
Truth, Love and faithful worship are
their song,
He that seeketh shall find me,
In My Father’s glorious riches.
Truth, Love and faithful worship are
their song.                     Amen

Yoruba Version

s:s:f:m:d:d:d:r:m:d
d:d:d:r:m:m:r:d:r
s:s:f:m:d:d:d:r:m:d

1: Soji, soji, Olubukun soji,
Soji, soji, Olubukun soji,
Oba Mimo ni Oba iye,
Olubukun ni Oluwa wa,
Olubukun soji, Olubukun soji.

2: E wa, e wa enyin olusin, e wa,
E wa, e wa enyin olusin, e wa,

E wa gbade Oba iye,
E yi ti yio gbe yin riye,
E wa, e wa olusin enyin, e wa.

3: E mura, e mura oloto, e mura,
E mura, e mura oloto, e mura,
Akoko esin na leyi,
Igba ikehin na ti de tan,
E mura, e mura oloto, e mura.

4: Otito at’ erin ife lorin won,
Otito at’ erin ife lorin won,
Enit’ o ba sin yio ri Mi,
Ninu ola Baba Mi,
Otito at’ erin ife lorin won.      Amin`},{number:`677`,title:`The divine crown that I have`,category:`Divine Call`,lyrics:`English Version

s:d:r:m:l:d:t:l:s
s:d:d:m:r:d:r
s:d:r:m:l:d:t:l:d
s–l–d–r:d:t–d

1: The divine crown that I have
prepared
For those that believeth Me,
Those that believeth will wear the
crown,
To blossom on the last day.

2: How joyful shall the last day be,
For those who were obedient,
The obedient shall all be placed
In everlasting life.            Amen

Yoruba Version

s:d:r:m:l:d:t:l:s
s:d:d:m:r:d:r
s:d:r:m:l:d:t:l:d
s–l–d–r:d:t–d

1: Ade Mimo temi ti pese,
F’awon to gba Mi gbo,
Awon to gba gbo yio d’ ade na,
Lati sogo ‘kehin.

2: Aiye ‘kehin yio ti dun to,
F’awon to leti ‘gbo,
Awon to leti ‘gbo yio wa,
Nipo ayeraye.                      Amin`},{number:`678`,title:`Brethren come behold the shining`,category:`Divine Call`,lyrics:`English Version

1: Brethren come behold the shining
glory,

That illuminates Celestial,
O ye people come and bow down,
Before the shining glory.

2: All ye brethren come behold this
world
Hearken unto the glorious call
That is proclaiming, that is proclaiming
thus,
Brethren, brethren come closer to Me.

3: If thou would come closer to Me,
Thy reward is in heaven,
For it is not a reward of gold or silver,
But a lasting reward.

4: Let the whole world bow down with
reverence,
To the Lord our King
The Redeemer of all souls from
perdition,
The King in authority.

5: All ye the world come and hearken
unto the call
The call that is persistent
In heaven above
Oh ye brethren come closer to Me.
Amen

Yoruba Version

1: Gbogbo aiye, e wa wo go didan na,
Titan sori Ijo Mimo,

Gbogbo aiye, e wa teriba,
Labe Ogo didan yi.

2: Aiye, e wa wo aye te wa,
E wa gbo ipe didan wa,
Ti ndun kikan, ti ndun kikan,
Aiye, aiye, e sunmo Mi.

3: Te ba le wa sodo Mi,
Ere yin mbe loke Orun,
Ere wura ati fadaka ko eyi,
Ere ti ko lopin ni.

4: Eje ki gbogbo aiye teriba,
F’Oba Oluwa mi,
Eniti nse Olurapada okan, Oba Alase.

5: Eyin aiye, e wa gbo ipe na,
Ti ndun kikan- kikan,
L’oke Orun
Eyin aiye, e wa sodo Mi.            Amin`},{number:`679`,title:`ss- d – drm – dtl – d – s –`,category:`Divine Call`,lyrics:`English Version

ss- d – drm – dtl – d – s –
ss: dd – r – dtd
ss -: d : drm – rdr
ssr – rmf – mrm
ss : d – drm – dtl – d – s
ss -: d : ddr : dtd.

1: The faithful message I have sent unto
thee,
Ponder, ponder, ponder over this
message,
The faithful message I have sent unto
thee,
Ponder, ponder, ponder over this
message,
A message of hope and of peace
The path of truth, the path of life,
The path of truth, is an illumination,

Ponder, ponder, ponder over this
message.

2: I’ve spoken to thee, the words of
righteousness,
Hearken to My words, hearken to My
words,
I’ve spoken to thee, the words of
righteousness,
Hearken to My words, hearken to My
words,
The path of truth, the path of life,
The path that I have made ready for
thee
Follow this path, only through this path.

3: The righteous way that I have made
for thee,
Follow this path, only through this path,
The righteous way that I have made for
thee,
Follow this path, only through this path,
The path of life, the path of life,
It is the path of salvation,
The path of light that I have made fo
thee,
Follow this way, only through this way.
Amen

Yoruba Version

ss- d – drm – dtl – d – s –
ss: dd – r – dtd
ss -: d : drm – rdr
ssr – rmf – mrm
ss : d – drm – dtl – d – s
ss -: d : ddr : dtd.

1: Oro otito ti mo ti so fun yin,
E ro, e ro, e ro, oro yin wo,
Oro otito ti mo ti so fun yin,
E ro, e ro, e ro, oro yin wo,
Oro itunu, Alafia,
Ona otito, ona iye,
Ona otito imole ni eyi je,
E ro oro, e ro oro yi wo.

2: Oro ododo ni mo si so fun yin,
E gbo oro Mi, e gbo oro Mi yi ro,

Oro ododo ni mo si so fun yin,
E gbo oro Mi, e gbo oro Mi yi ro,
Ona otito, ona iye,
Ona ti mo ti la sile fun yin,
E gba ‘na yi, e gba ‘na yi wo.

3: Ona ododo ti mo ti la sile,
E gba ‘na yi, e gba ‘na yi wo,
Ona ododo ti mo ti la sile,
E gba ‘na yi, e gba ‘na yi wo,
Ona otito, ona iye,
Ona igbala lo je si ye
Ona imole ti mo ti la sile,
E gba ‘na yi, e gba ona Mi wo.      Amin`},{number:`680`,title:`Ye My beloved ones,`,category:`Divine Call`,lyrics:`English Version

1: Ye My beloved ones,
Be prepared to follow Me,
For the works assigned to Me,
Are the works of the whole world.

2: Those on the earth heard of Me,
When I was dwelling above
And they are still expecting Me,
Till when I shall come back.

3: The doctrine of My Father,
Were rejected by all
And when I arrived, indeed,
They couldn’t recognise Me again.

4: For those belonging to Me,
Shall know the righteous way,
And when I shall return,
They shall ascend with Me.

5: My Father in heaven above
Has given Me the grace
Those who become My beloved
I shall dwell with them.     Amen

Yoruba Version

1: Eyin eni temi,
E mura ke te le Mi,
Ise ti mo waiye wa se,
Ise gbogbo aiye ni.

2: Awon aiye gburo Mi,
Nigbati mo wa l’Orun,
Awon na si renti Mi,
Igbat’ Emi o fi de.

3: Ilana ti Baba se,
Awon eyi ko sile,
Igbati Emi si de,
Awon eyi komo Mi,

4: Awon ti o je temi,
Awon na lo m’ona,
Nigbati Emi wa de,
Awon lo te e le Mi.

5: Baba Mi lode Orun,
Lo ti fun Mi laiye na,
Awon to ba te le Mi,
Emi yio je ti won.                   Amin`},{number:`681`,title:`Seek ye Me, seek ye Me,`,category:`Divine Call`,lyrics:`English Version

1: Seek ye Me, seek ye Me,
All ye My beloved,
Seek ye Me, seek ye Me,
All ye My beloved,
I am the King and Redeemer,
King of Salvation,
Seek ye Me, seek ye Me,
All ye My beloved.

2: Come to buy, come to buy,
All ye My beloved,
Come to buy, come to buy,
All ye My beloved,
I am the King who buys
Who sells out free of charge
Come to buy, come to buy,
All ye My beloved.

3: Come to eat, come to eat,
All ye My beloved,
Come to eat, come to eat,
All ye My beloved,
I am the King who entertains
The hungry people,
Come to eat, come to eat,
All ye My beloved.           Amen

Yoruba Version

E wa Mi, e wa Mi,
Enyin, eni t’emi,
E wa Mi, e wa Mi,
Enyin, eni t’emi,
Emi loba Oludande,
Oba Olugbala,
E wa Mi, e wa Mi,
Enyin, eni t’emi.

2: E wa ra, e wa ra,
Enyin, eni t’emi,
E wa ra, e wa ra,
Enyin, eni t’emi,
Emi loba Olusowo,
Ti nta ‘ki ngbowo,
E wa ra, e wa ra,
Enyin, eni t’emi.

3: E wa je, e wa je
Enyin, eni t’emi,
E wa je, e wa je
Enyin, eni t’emi,
Emi loba Olu sa se,
F’awon tebi npa,
E wa je, e wa je
Enyin, eni t’emi.                  Amin`},{number:`682`,title:`Hear the call of the Lamb,`,category:`Divine Call`,lyrics:`English Version

s : m : d : d : r : m : r : d :-
d : f : f : m : m : f : m : r :-
s : m : d : rm : r : d :-
s : l : f : m : d : t : d :-

1: Hear the call of the Lamb,
Hear the call of the Lamb,
Jesus commands me to come,
I’ll follow Jesus to the end.

2: I will do the will of the Father,
I will do the will of the Father,
No matter all the temptations,

I will not leave Jesus alone.

3: Brethren, come rejoice with me,
Brethren, come rejoice with me,
Because Jesus answered me,
I will not leave Jesus alone.  Amen

Hymns for Heavenly Call

Yoruba Version

s : m : d : d : r : m : r : d :-
d : f : f : m : m : f : m : r :-
s : m : d : rm : r : d :-
s : l : f : m : d : t : d :-

1: Mo gbo ipe od’agutan,
Mo gbo ipe od’agutan,
Jesu loni ki nwa,
Ma te le Jesu de opin.

2: Ma se ife ti Baba,
Ma se ife ti Baba,
Botiwu ki danwo po to,

Emi koni fi Jesu le.

3: Ara, e wa ba mi yo,
Ara, e wa ba mi yo,
Tori Jesu gbo te mi,
Emi koni fi Jesu le.             Amin`},{number:`691`,title:`Jesus calleth us,`,category:`Heavenly Call`,lyrics:`English Version

1: Jesus calleth us,
Jesus calleth us,
Jesus calleth us,
Let us come to Him.

2: Be full of power,
Be full of power,
Be full of power,
So let’s behold His glory.

3: You are spiritual,
You are Holiest,
You are Hope and Life,
Salvation is on Your hand.      Amen

Yoruba Version

1: Jesu l’onpe wa,
Jesu l’onpe wa,
Jesu l’onpe wa,
Ki awa sodo Re.

2: Gba agbara wo,
Gba agbara wo,
Gba agbara wo,
Ki a si r’Ogo Re.

3: Emi ni ti ‘Re,
Mimo ni ti Re,
Iye ni ti Re,
Gbala mbe lowo Re.              Amin`},{number:`692`,title:`Jesus Christ is the light of the world,`,category:`Heavenly Call`,lyrics:`English Version

Jesus Christ is the light of the world,
He’s greater than all oracles,
O’ ye people come and worship Jesus,
He greater than all idols,
He’ s going to save the world,
He greater than all idols.          Amen

Yoruba Version

Jesu Kristi ni ‘mole aiye,
O ju gbogbo orisa lo,
Gbogbo araiye, e wa sin Jesu,
O ju gbogbo orisa lo,
Ohun ni yio gba ‘raiye la,
O ju gbogbo orisa lo.           Amin`},{number:`693`,title:`The hour has come,`,category:`Heavenly Call`,lyrics:`English Version

s:s:s:m:d:
d:r:r:r:m:r
s:m:d:f:m:r:d:t:d

1: The hour has come,
Children of Celestial Church,
Be prepared to meet your Father.

2: The last call is sounding,
Which the Angels are sounding,
Be patient and wait for His grace.

3: Praise ye the Lord,
The last Ship has arrived,
Rejoice in Christ ye Celestial Church.
Amen

Yoruba Version

s:s:s:m:d:
d:r:r:r:m:r
s:m:d:f:m:r:d:t:d

1: Wakati na de,
Eyin omo ‘Jo Mimo,
E mura sile de Baba yin.

2: Ipe kehin dun,
T’awon Maleka fun ipe,
E duro de ore ofe Re.

3: E yin Oluwa,
Oko ikehin de,
E yo ninu Kristi ‘Jo Mimo.          Amin`},{number:`694`,title:`Let’s work for purification of our`,category:`Heavenly Call`,lyrics:`English Version

1: Let’s work for purification of our
souls,
That the Lord may be with us,
Let’s work in Jehovah fold,
Remembering holy heaven,
Let’s work for purification of our souls,
Remembering mansion above,
Let’s work for purification of our souls,
Remembering mansion above.

2: In our midst descend O Lord we
plead,
That we might all be in sanctity,
Holy Michael give us aid we plead,
Out of earthly temptation,
That evil spirit we might all conquer,
And to work with love divine,
That evil spirit we might all conquer,
And to work with love divine.

3: In vain it is for man to hope,
On earthly treasure that vanisheth,
Let’s congregate to accomplish
The mission that Christ sent us,
Through this shall we inherit eternal
crown,
The promise that the Lord made to us.
Through this shall we inherit eternal
crown,
The promise that the Lord made to us.
Amen

Yoruba Version

1: Ka sise fun iwenu mo emi wa,
K’Oluwa fi le wa pelu wa,
Ka sise fun Ijo Jehovah,
Ka si ranti orun mimo,
Ka sise fun iwenumo, emi wa,
Ka si ranti ile la loke orun,
Ka sise fun iwenumo, emi wa,
Ka si ranti ile la loke orun.

2: K’ Oluwa jowo sokale sarin wa,
Ka wa fi le ri iwenumo,
Michael Mimo kowa ran wa lowo,
Kuro ni nu idanwo aiye,
Ka wa fi le segun emi esu,
Ka sise pelu ife mimo,
Ka wa fi le segun emi esu,
Ka sise pelu ife mimo.

3: Asan ni fun enia lati f’okan fun,
Isura aiye ti yio fo lo,
O ye ka wa pejo ka sise,
Ise ti Kristi ran wa,
Eyi ni yio mu wa gb’ade Ogo,
Ti Baba se leri re fun wa,
Eyi ni yio mu wa gb’ade Ogo,
Ti Baba se leri re fun wa.         Amin`},{number:`695`,title:`d–m–m–s–s–f–m-r`,category:`Heavenly Call`,lyrics:`English Version

s:d:r–m–r–m- r–d
d–m–m–s–s–f–m-r
s–l–s–l–s–d
d – r – m :-d – r – m – r – d:-

1: When Angels blow their trumpets,
All the dead shall resurrect,
Those who lie in righteousness,

Shall behold Christ on that day.

2:~ When Angel Gabriel shall arrive,
With songs of happiness,
Father count us among,
So we might see Christ on that day.

3: Michael our conqueror,
Descend with thy mighty swords,
And conquer for us,
So we might see Christ on that day.
Amen

Yoruba Version

s:d:r–m–r–m- r–d
d–m–m–s–s–f–m-r
s–l–s–l–s–d
d – r – m :-d – r – m – r – d:-

1: Nigba Angeli fun ipe,
Awon oku yio ji dide,
Awon to sun lododo,

Yio ri Jesu l’ojo na.

2: Nigba Gabrieli ba de,
Pelu orin ayo,
Baba ka wa mo won,
Ka le ri Jesu lojo na.

3: Michael Balogun wa,
Sokale pelu ida re,
Lati segun fun wa,
Kale ri Jesu lojo na.             Amin

Orin Ifihan`},{number:`701`,title:`It is me Thy Lord, fear ye not the`,category:`Revelation`,lyrics:`English Version

1: It is me Thy Lord, fear ye not the
world,
It is me thy Lord, fear not ye the world,
Fear not ye, Celestial, fear ye not the
world,
Fear not ye, Celestial, fear ye not the
world.

2: It is me the seed, fear ye not the
world,
It is me the seed, fear ye not the world,
Fear not ye, Celestial, fear ye not the
world,
Fear not ye, Celestial, fear ye not the
world.

3: It is me thy victory, fear ye not the
world,
It is me thy victory, fear ye not the
world,
Fear not ye, Celestial, fear ye not the
world,
Fear not ye, Celestial, fear ye not the
world.                            Amen

Yoruba Version

1: Emi ni Oluwa, mase beru aiye,
Emi ni Oluwa mase beru aiye,
Mase beru Ijo Mimo, mase beru aiye,
Mase beru Ijo Mimo, mase beru aiye.

2: Emi ni irugbin, mase beru aiye,
Emi ni irugbin, mase beru aiye,
Mase beru Ijo Mimo, mase beru aiye,
Mase beru Ijo Mimo, mase beru aiye.

3: Emi ni isegun, mase beru aiye,
Emi ni isegun, mase beru aiye,
Mase beru Ijo Mimo, mase beru aiye,
Mase beru Ijo Mimo, mase beru aiye.
Amin`},{number:`702`,title:`From holy Heaven,`,category:`Revelation`,lyrics:`English Version

s:d:d:r:m
s:m:f:r:d
s:d:d:r:m
s:m:f:r:d
m:s:f:m:r

m:s:m:r:d
s:d:d:r:m
s:m:f:r:d

From holy Heaven,
They sing songs of joy,
From Holy Heaven,
They sing songs of joy,
The Angels indeed rejoice,
Chant Hosanna,
From Holy Heaven,
They sing songs of joy.       Amen

Yoruba Version

s:d:d:r:m
s:m:f:r:d
s:d:d:r:m
s:m:f:r:d
m:s:f:m:r

m:s:m:r:d
s:d:d:r:m
s:m:f:r:d

Lat’Orun Mimo,
Won nko orin ayo,
Lat’Orun Mimo,
Won nko orin ayo,
Awon Angeli nyo,
E ke Hossana,
Lat’Orun Mimo,
Won nko orin ayo.                 Amin`},{number:`703`,title:`When the Lord descended Celestial`,category:`Revelation`,lyrics:`English Version

When the Lord descended Celestial
Church,
With the host of Heavenly Angels,
When the Lord descended Celestial
Church,
With the host of Heavenly Angels,
Oh Lord let’s be assured that
Celestial Church belong to Thee,
So we might with songs of joy,
Praise thee host of Angels,
Chorus: Rejoice, rejoice, rejoice,
Praise the Father with pure holy love,
Rejoice, rejoice, rejoice,
Praise the Father with pure holy love.
Amen

Yoruba Version

Nigbat’ Oluwa so ‘Jo Mimo ka le,
Pelu awon ogun Orun Mimo,
Nigbat’ Oluwa so ‘Jo Mimo ka le,
Pelu awon ogun Orun Mimo,
Oluwa je k’a mo wipe,
Ijo Mimo tire ni,
K’awa le f’orin ayo,
Yin awon ogun Orun Mimo,
Chorus: E yo, e yo, e yo,
E yin , Baba pelu ife mimo,
E yo, e yo, e yo,
E yin , Baba pelu ife mimo.      Amin`},{number:`704`,title:`I am the salt of everlasting,`,category:`Revelation`,lyrics:`English Version

I am the salt of everlasting,
I am the salt of everlasting,
For I am the Christ in this Celestial
Church,
That shall prevail over the world. Amen

Yoruba Version

Emi ni iyo aiyeraiye,
Emi ni iyo aiyeraiye,
Emi ni Kristi na ninu ‘jo Mimo,
Ti yio bori aiye.                  Amin`},{number:`705`,title:`sl : drdtd`,category:`Revelation`,lyrics:`English Version

sd : rm : l : dtl : s
sd : dmrd : r
sd : rm : ldtls
sl : drdtd

1: The path which leadeth unto Lord,
Is the salvation path,
And let the path be sanctified,

The path that lead to life.

The dwelling of the whole earth,
The dwelling place of vain,
An everlasting dwelling place,
n   Is thus with Christ above.     Amen

Yoruba Version

sd : rm : l : dtl : s
sd : dmrd : r
sd : rm : ldtls
sl : drdtd

1: Ona to lo s’odo Olorun,
Ona igbala ni,
E ya ona na si mimo,

Ona ibi iye,

2: Ibujoko ile aiye yi,
Ibujoko asan,
Ibujoko ti ko lopin,
O wa lodo Jesu.                           Amin`},{number:`706`,title:`Christ has come, to accomplish His`,category:`Revelation`,lyrics:`English Version

dm: ss : ls :; ssrfm : mrds
dm : ss : ls :: ssrfm : fmrd
sl : tdtls : ls : fe : s
dm : fss : lsfm
mrd : msrds : ls : fes
dm : ss : ls :: ssrfm : fmrd
dm: ss : ls :; ssrfm : mrds
dm : ss : ls :: ssrfm : fmrd
sl : tdtls : lsfes
dm : ss : ls :: ssrfm : fmrd

1: Christ has come, to accomplish His
incessant mission,
Christ has come, to accomplish His
incessant mission,
Celestial Church in heaven burst for joy
Celestial Church on below,
Be filled with songs of happiness from
the Lord,
Christ has come, to accomplish His
incessant mission,
Christ has come, to accomplish His
incessant mission,
Christ has come, to accomplish His
incessant mission.

2: The joys of this earth are short lived
says the Lord,
The joys of this earth are short lived
says the Lord,
The joys residing with the Father are
glorious,
Christ has come, to accomplish His
incessant mission,
Christ has come, to accomplish His
incessant mission,
Christ has come, to accomplish His
incessant mission.                 Amen

Yoruba Version

dm: ss : ls : ssrfm : mrds
dm : ss : ls :: ssrfm : fmrd
sl : tdtls : ls : fe : s
dm : fss : lsfm
mrd : msrds : ls : fes
dm : ss : ls :: ssrfm : fmrd
dm: ss : ls :; ssrfm : mrds
dm : ss : ls :: ssrfm : fmrd
sl : tdtls : lsfes
dm : ss : ls :: ssrfm : fmrd

1: Kristi lo de, lati se ise Re ti ko lopin,
Kristi lo de, lati se ise Re ti ko lopin,
Ijo Mimo t’orun, e ho f’ayo,
Ijo Mimo ti aiye yi,
E kun fun orin iyin s’Oluwa,
Kristi lo de, lati se ise Re ti ko dopin,
Kristi lo de, lati se ise Re ti ko lopin,
Kristi lo de, lati se ise Re ti ko lopin.

2: Ayo aiye yi, igba die l’Oluwa wi,
Ayo aiye yi, igba die l’Oluwa wi,
Ayo ti odo Baba, ogo ’lopo ju,
Kristi lo de, lati se ise Re ti ko dopin,
Kristi lo de, lati se ise Re ti ko lopin,
Kristi lo de, lati se ise Re ti ko lopin. Amin`},{number:`707`,title:`Holy, holy are the works of the Lord,`,category:`Revelation`,lyrics:`English Version

sd : rm : ldtlds
sd : rm : ldtls
sl : drd : td

Holy, holy are the works of the Lord,
Blessings are in Heaven above
With the Father above.          Amen

Yoruba Version

sd : rm : ldtlds
sd : rm : ldtls
sl : drd : td

Mimo, Mimo n’nse Oluwa,
Ibukun kan mbe l’oke
Lodo Baba l’Orun.            Amin`},{number:`708`,title:`I am Father who made thee,`,category:`Revelation`,lyrics:`English Version

ss: dd : r : t : d
dd : rm : f : r : m
ds : ms : f : r : d : l
d:s:m:s:f:r:d

1: I am Father who made thee,
And also thy fore fathers,
Who in this world can also make man?
Who can make search to my works?

2: Be prepared for thy treasures,
That would be free from all worms
Where no destruction can be inflicted,
It’s an everlasting gain.

3: Behold ye, all thy treasure,
Thy behaviour and worship,
These would lead you into salvation,
In this world and in Heaven.

4: Ye children of Celestial Church,
Be prepared for the glory
That Father hath provided thee,
It’s an everlasting joy.

5: Halleluyah, Halleluyah,
Hosanna to Holy King,
Halleluyah our songs of praise,
Might be on the last day.

6: Unsearchable truly is,
The work Father ‘n Heaven
Who created man into this world,
And also beast in the field.

7: Glory, glory, glory, glory
To the Trinity Father,
As He had been in the beginning
So would He forever.            Amen

Yoruba Version

ss: dd : r : t : d
dd : rm : f : r : m
ds : ms : f : r : d : l
d:s:m:s:f:r:d

1: Emi ni Baba to da nyin,
Ati awon baba nyin,
Ta le ni na to da ‘na?
Ta o le ridi ise Mi?

2: E mura fun ‘sure yin,
Ti kokoro ko le je,
Apanirun ko le de be,
Ere aiyeraiye ni.

3: Eyi sa ni ‘sura yin,
Iwa ati esin yin’
Eyi ni yio gba yin la,
Laiye yi ati l’Orun.

4: Eyin omo ‘Jo Mimo,
E mura ke le r’ogo
Ti Baba ti pese fun yin,
Ayo aiyeraiye ni.

5: Halleluya, Halleluya,
Hossanah s’Oba Mimo,
Halleluya l’orin wa yi,
Yio je l’ojo ‘kehin yi.

6: Awamaridi ni,
Ise Baba wa Orun,
T’oda enia s’aiye yi,
Ati eranko igbe.

7: Ogo, ogo, ogo, ogo,
Fun Baba Metalokan,
B’oti wa latetekose,
Beni yio ma ri titi.`},{number:`709`,title:`Divine healings from My Father`,category:`Revelation`,lyrics:`English Version

1: Divine healings from My Father
Are what I have provided for the
Church,
Chorus: Merits, fruitful merits of joy,
In this Celestial Church,
Merits, fruitful merits of joy,
In this Celestial Church.

2: The power that I have made ready for
thee,
All ye Celestial Church,
Chorus: Merits, fruitful merits of joy,
In this Celestial Church,
Merits, fruitful merits of joy,
In this Celestial Church.

3: The blessings that I have endowed
you with,
Came from the Father above,
Chorus: Merits, fruitful merits of joy,
In this Celestial Church,
Merits, fruitful merits of joy,
In this Celestial Church.

4: The mighty power you behold
within,
Shall never come to an end,
Chorus: Merits, fruitful merits of joy,
In this Celestial Church,
Merits, fruitful merits of joy,
In this Celestial Church.         Amen

Yoruba Version

1: Iwosan lat’ odo Baba Mi,
Ni mo ti pese fun Ijo yi,
Chorus: Eso, iru eso ayo,
Sori Ijo Mimo yi,
Eso, iru eso ayo,
Sori Ijo Mimo yi.

2: Agbara ti mo ti pese le fun yin,
Enyin Ijo Mimo,
Chorus: Eso, iru eso ayo,
Sori Ijo Mimo yi,
Eso, iru eso ayo,
Sori Ijo Mimo yi.

Ibukun ti mo ti gbe ka le yi,
Lat’ odo Baba lo ti wa,
Chorus: Eso, iru eso ayo,
Sori Ijo Mimo yi,
Eso, iru eso ayo,
Sori Ijo Mimo yi.

4: Agbara nla ti, e ri nihin,
Ko le tan laiyelaiye,
Chorus: Eso, iru eso ayo,
Sori Ijo Mimo yi,
Eso, iru eso ayo,
Sori Ijo Mimo yi.                     Amin`},{number:`710`,title:`Burst with joy all ye children of`,category:`Revelation`,lyrics:`English Version

Burst with joy all ye children of
Celestial Church,
How enormous shall your joys be,
When Jesus Christ shall appear in the
sky above,
Thou shall be clothed with glorious
gown,
And thou shall meet thy Christ in the
sky above,
Thou shall be crowned with golden
crown,
And thou shall fly up to meet thy Christ
in the sky,

Together with the Angels [you shall fly]
To meet thy Christ on that day,
A great day, a great day shall it be,
A great day, a great day shall it be,
Halleluyah shall be the song thou shall
sing,
To meet thy Christ on that day. Amen

Yoruba Version

E bu sayo, enyin omo Ijo Mimo,
Bawo layo nyin yio ti po to?
Nigbati Jesu ba mbo lawosanmo,
A o wo nyin laso ogo,
E o fo pade Kristi lawosanmo,
A o de nyin lade wura,
E o fo pade Kristi lawosanmo,
Enyin pel’ Angeli Mimo, Le o fo]
Pade Kristi lojo na,
Halleluya lorin nyin te o ko,
Pade Kristi lojo na,
Ojo nla, ojo nla, lojo na,
Ojo nla, ojo nla, lojo na,

Halleluya lorin nyin te o ko,
Pade Kristi lojo na.            Amin`},{number:`711`,title:`m`,category:`Revelation`,lyrics:`English Version

s:l:d:d:r:r:s:f:m:r:m
s:l:d:r:t:d:s:s:f :m:s:s:f:
m
s:m:d:r:m:r
s:l:d:r:t:d

1: The bright light, the bright light, the
bright morning light,
The bright morning light that
illuminates the light,
Chorus: Halleluyah, Halleluyah
Celestial Church
Rejoice for the light is this fold.

2: The bright stars, the bright morning
stars ,
The bright morning stars that brighten
the night,
Chorus: Halleluyah, Halleluyah
Celestial Church
Rejoice for the light is this fold.

3: All ye the world, all ye the world,
Be filled with happiness for this end –
time Church,
Chorus: Halleluyah, Halleluyah
Celestial Church prevails
Halleluyah to Christ.          Amen

Yoruba Version

s:l:d:d:r:r:s:f:m:r:m
s:l:d:r:t:d:s:s:f :m:s:s:f:m
s:m:d:r:m:r
s:l:d:r:t:d

1: Imole, Imole, eyi t’owuro,
Eyi t’owuro, o tan si asale,
Chorus: Halleluya, Halleluya Ijo Mimo,
E yo, ‘mole na ni ‘jo yi.

2: Irawo, Irawo eyi t‘owuro,
Eyi t’owuro, o tan si asale,
Chorus: Halleluya, Halleluya Ijo Mimo,
E yo, ‘mole na ni ‘jo yi.

3: Gbogb’ aiye, gbogb’ aiye,
Ekun fun ayo fun ‘jo ikehin yi,
Chorus: Halleluya, Halleluya Ijo kehin
bori,
Halleluya f’Oba.              Amin`},{number:`712`,title:`Zevah Riyah, Zevah Riyah,`,category:`Revelation`,lyrics:`English Version

d:r:s:r:d:r:s:r
r:d:t:d
d:r:s:r:d:r:s:r
r:d:t:d:r:t:d

Zevah Riyah, Zevah Riyah,
Zavah Raye e Raye,
Zevah Riyah, Zevah Riyah,
Zavah Raye e Raye.                Amen

Yoruba Version

d:r:s:r:d:r:s:r
r:d:t:d
d:r:s:r:d:r:s:r
r:d:t:d:r:t:d

Zevah Riyah, Zevah Riyah,
Zavah Raye e Raye,
Zevah Riyah, Zevah Riyah,
Zavah Raye e Raye.               Amin`},{number:`713`,title:`When the heaven bell shall sound,`,category:`Revelation`,lyrics:`English Version

1: When the heaven bell shall sound,
We the children of Celestial,
We shall stand, we shall stand
Before Him, before Him,
Chorus: We shall stand before Him,
We shall sing with the Angels,
Glory, glory to glory King,
Halleluyah, Halleluyah
We shall all stand before Him.

2: Celestial Church be prepared,
Girdle up your loins firmly
Because, because,
When Jesus shall come, we shall stand
Chorus: We shall stand before Him,
We shall sing with the Angels,
Glory, glory to glory King,
Halleluyah, Halleluyah
We shall all stand before Him. Amen

Yoruba Version

1: B’agogo Orun balu,
Awa omo Ijo Mimo,
A o duro, a o duro,
Niwaju Re, Niwaju Re,
Chorus: A o duro, niwaju Re,
A o b’awon Angeli korin,
Ogo, ogo f’Oba wa,
Halleluya, Halleluya,
A o duro o, niwaju Re.

Ijo Mimo e mura,
E damure nyin giri,
Nitori, nitori
Bi Jesu bade, aw o duro,
Chorus: A o duro, niwaju Re,
A o b’awon Angeli korin,
Ogo, ogo f’Oba wa,
Halleluya, Halleluya,
A o duro o, niwaju Re.          Amin

Orin Iyasi Mimo`},{number:`726`,title:`sdrm : ldtls`,category:`Sanctification`,lyrics:`English Version

sdrm : ldtls
sddm : rdr
sldr : td

Holy, Holy, from Thy Heaven,
Shall this dwelling place be,
Jesus Christ has come to sanctify us,
Holy, Holy, Holy.               Amen

Yoruba Version

sdrm : ldtls
sddm : rdr
sldr : td

Mimo, Mimo, lat’Orun wa,
Nile yi yio si je,
Jesu Kristi, wa ya si mimo,
Mimo, Mimo, Mimo.               Amen`},{number:`727`,title:`Jesus, Jesus, Jesus,`,category:`Sanctification`,lyrics:`English Version

1: Jesus, Jesus, Jesus,
Come, sanctify,
Sanctify, sanctify, sanctify
Chorus: Father, Jesus.

2: Jesus, Jesus, Jesus,
Come, save us all,
Save us all, save us all,
Save us all.                   Amen

Yoruba Version

1: Jesu, Jesu, Jesu,
Wa ya si mimo,
Ya si mimo, ya si mimo,
Ya si mimo
Chorus: Baba Jesu.

2: Jesu, Jesu, Jesu,
Wa gba wa la,
Gba wa la, gba wa la,
Gba wa la.                       Amin`},{number:`731`,title:`Ho lift ye up your head,`,category:`House Opening`,lyrics:`English Version

1: Ho lift ye up your head,
Ye everlasting gates,
That we may raise thee up high,
Ye everlasting doors,
Chorus: That the King of Glory might
come in,
Come into His holy house,
Who is this King of Glory?
Jehovah is the King of Glory,
Who is this King of Glory?
Jesus Christ the Redeemer.

2: Oh crown Him King all ye His
people,
Let the world crown Him King,
And with happiness worship Him,
Worshipping Him with zealousness
Chorus: That the King of Glory might
come in,
Come into His holy house,
Who is this King of Glory?
Jehovah is the King of Glory,
Who is this King of Glory?
Jesus Christ the Redeemer.

3: Power of the Holy Spirit’s ready,
To be established within us,
With sacred minds calling upon Him,
Calling Him in His Holy house,
Chorus: That the King of Glory might
come in,
Come into His holy house,
Who is this King of Glory?
Jehovah is the King of Glory,
Who is this King of Glory?
Jesus Christ the Redeemer.

4: With all benevolent and pure love,
Worshipping our King who sees all,
He who knows minds of everybody,
Will harkens unto all our cries,
Chorus: That the King of Glory might
come in,
Come into His holy house,

Who is this King of Glory?
Jehovah is the King of Glory,
Who is this King of Glory?
Jesus Christ the Redeemer.        Amen

Yoruba Version

1: E gbe ori yin si oke e,
Ani enyin, enu ona,
Ki a si gbe nyin si oke e,
Enyin ‘lekun aiyeraiye,
Chorus: K’Oba ogo wo inu ile,
Wo nu ile Mimo Re wa,
Ta ha ni Oba Ogo na?
Jehovah ni Oba Ogo
Ta ha ni Oba Ogo na?
Jesu Kristi Olugbala.

2: E se l’Oba, enyin enia Re,
Ki gbogbo araiye se l’Oba,
Ki e si ma fi i ayo sin,
F’ayo fi sin tokantokan,
Chorus: K’Oba ogo wo inu ile,
Wo nu ile Mimo Re wa,
Ta ha ni Oba Ogo na?
Jehovah ni Oba Ogo
Ta ha ni Oba Ogo na?
Jesu Kristi Olugbala.

Agbara Emi Mimo se tan,
Lati wa gunwa ninu wa,
E fi okan mimo ke pe e,
Ke pe ninu ‘le Mimo Re,
Chorus: K’Oba ogo wo inu ile,
Wo nu ile Mimo Re wa,
Ta ha ni Oba Ogo na?
Jehovah ni Oba Ogo
Ta ha ni Oba Ogo na?
Jesu Kristi Olugbala.

4: E fi iwa mimo ati ife,
Sin Oba wa ‘rinu rode,
Olumoran okan araiye,
Yio si gbo ohu8n igbe wa,
Chorus: K’Oba ogo wo inu ile,
Wo nu ile Mimo Re wa,
Ta ha ni Oba Ogo na?
Jehovah ni Oba Ogo
Ta ha ni Oba Ogo na?
Jesu Kristi Olugbala.           Amin`},{number:`732`,title:`We authorise forth from Heaven,`,category:`House Opening`,lyrics:`English Version

m:m:m:m:d:m:s:f:m
m:m:m:m:r:m
s:s:s:s:m:s:f:l
m:f:m:r:d

We authorise forth from Heaven,
That this church should indeed increase,
We authorise forth from Heaven,
That it should indeed replenish,
Till all the sufferings of this world
Shall all flee from this earth,
Until Jesus our Saviour
Shall return to this world.       Amen

Hymns for Divine Love

Yoruba Version

m:m:m:m:d:m:s:f:m
m:m:m:m:r:m
s:s:s:s:m:s:f:l
m:f:m:r:d

Apalase lagbala Orun,
Pe ki ijo yi ma bi si,
Apalase lagbala Orun
Pe ko si ma re si,
Titi gbogbo iponju aiye,
Yio fi tan an laiye,
Titi Jesu Olugbala,
Yio fi pada wa.               Amin

Orin Ife Aisetan`},{number:`736`,title:`Jesus loves me this I know,`,category:`Divine Love`,lyrics:`English Version

1: Jesus loves me this I know,
Jesus loves me this I know,
Halleluyah be our song,
We’ll give glory to God.

2: Life for whoever heareth,
Life for whoever heareth,
Blessing for the eyes that see,
That the Saviour cometh.          Amen

Yoruba Version

1: Jesu fe mi mo mo be,
Jesu fe mi mo mo be,
Halleluya lorin wa,
A o f’ogo f’ Olorun.

2: Iye ni f’ eni to gbo,
Iye ni f’ eni to gbo,
Ibukun f’ oju to ri,
Po le Olugbala aw mbo.          Amin`},{number:`737`,title:`Holy Arch-Angels`,category:`Divine Love`,lyrics:`English Version

s:d:t:l:s
m:r:d:d:t:d
s:d :t:l:s:s:f:m
m:r:d:d:t:d

1: Holy Arch-Angels
Are descending from heaven above,
By the living grace of our Saviour,
They dance around His holy throne.

2: St Gabriel who stands by the gate,
Praise Him with joyful songs

Let all sing the holy song
And thanksgiving songs to the Lord.

3: Let us all be in accordance,
Give thanks to our Saviour,
Because our Lord exists
And He’s with us every time.

4: The holy Angel each with six wings
Pays homage with two wings
Cover their face with two wings
And Praises God with the other two.
Amen

Yoruba Version

s:d:t:l:s
m:r:d:d:t:d
s:d :t:l:s:s:f:m
m:r:d:d:t:d

1: Maleka Mimo,
Won nt’Orun sokale wa,
Nipa ore ofe Olugbala,
Won nyi ite Re ka.

2: St, Gabriel onibode,
On forin ayo yin won,

Eje ka ko orin mimo,
Orin ope f’ Oluwa.

E je ka f’okan wa sokan,
F’ ope f ‘Olugbala,
Nitori t’Oluwa mbe,
Pelu wa n’gba gbogbo.

4: Maleka oniye mefa
Won nfi meji wole,
Won nfi meji boju,
Won nfi meji yin Oluwa.         Amin`},{number:`738`,title:`Who loveth Jesus? Halleluyah,`,category:`Divine Love`,lyrics:`English Version

Who loveth Jesus? Halleluyah,
I loveth Jesus, Halleluyah,
I loveth Jesus.

2: Who loveth His word, Halleluyah
I loveth His word, Halleluyah
I loveth His word.            Amen

Yoruba Version

1: Tabi nfe Jesu? Halleluya,
Emi nfe Jesu, Halleluya,
Emi nfe Jesu.

2: Tani f’oro Re? Halleluya,
Emi nf’’oro Re, Halleluya,
Emi nf’’oro Re.                Amin`},{number:`739`,title:`His love, His love, It si His love,`,category:`Divine Love`,lyrics:`English Version

1: His love, His love, It si His love,
For us He calls He glorifies.

2: His jo, His joy, It is His joy
For us that He glorifies.

3: Mercy, Mercy, it is His mercy,
For us that He glorifies.

4: Halleluyah, Halleluyah,
For us He calls He glorifies.       Amen

Yoruba Version

1: Ife, ife, ife Re ni,
F’awa to pe lose l’ogo.

2: Ayo, ayo, ayo Re ni
F’awa to se l’ogo.

3: Anu, anu, anu Re ni
F’awa to se l’ogo.

4: Halleluya, Halleluya,
F’awa to pe lose l’ogo.         Amin`},{number:`740`,title:`I come to abide with thee,`,category:`Divine Love`,lyrics:`English Version

I come to abide with thee,
Abide with Me in all perfect love,
I come to abide with thee,
Abide with Me in all perfect love,
Look at your predecessors,
They lived with Me in perfect love.
Amen

Yoruba Version

Mode lati ba yin gbe,
E fi emi ife ba Mi gbe,
Mode lati ba yin gbe,
E fi emi ife ba Mi gbe,
E wo awon tisiwaju,
Won fi emi ife ba Mi gbe.       Amin`},{number:`741`,title:`By whose wishes do we exist on earth?`,category:`Divine Love`,lyrics:`English Version

By whose wishes do we exist on earth?
By Jesus wish we all exist on earth,
By whose wishes do we exist on earth?
By Jesus wish we all exist on earth,
Who is worthy of our praise?
Jesus is worthy of our praise,
Who is worthy of our praise?
Jesus is worthy of our praise,
Let’s bow down our head to Him
With all due humility,
n   Let’s bow down our head to Him
With all due humility,
By Jesus’ wish we all exist.     Amen

Yoruba Version

Ife tani awa fi wa laiye?
Ife Jesu ni aw fi wa laiye,
Ife tani awa fi wa laiye?
Ife Jesu ni awa fi wa laiye,
Tani ka f’ope fun?
Jesu ni ka f’ ope fun,
Tani ka f’ope fun?
Jesu ni ka f’ ope fun,
Ka foribale fun, ka f’okan bale fun,
Ka foribale fun, ka f’okan bale fun,
Ife Jesu ni awa fi wa laiye.         Amen`},{number:`743`,title:`Ye children of Celestial,`,category:`Divine Love`,lyrics:`English Version

s:s:d:d:d:r:m
mm : r : d : l : t : d : r : d :-
l : s : d : r : m : f : m : r :-
s : s : d : d : d : r : m :-
mm : r : d : l : t : d : r : d :-
t : l : s : d : r : m : r : r : r : d :-

1: Ye children of Celestial,
Burst with joy in this Celestial fold,
Because His love abideth with us,
Ye children of Celestial,
Burst with joy in this Celestial fold,
Because His love abideth with us.

2: Continue to sing and dance,
And keep rejoicing in Celestial,
Because His love abideth with us,
Continue to sing and dance,
And keep rejoicing in Celestial,
Because His love abideth with us.

3: When temptation shall arrive,
Be filled with joy and be prayerful,
Because His love abideth with us,
When temptation shall arrive,
Be filled with joy and be prayerful,
Because His love abideth with us.
Amen

Holy Re- Union Hymns

Yoruba Version

s:s:d:d:d:r:m
mm : r : d : l : t : d : r : d :-
l : s : d : r : m : f : m : r :-
s : s : d : d : d : r : m :-
mm : r : d : l : t : d : r : d :-
t : l : s : d : r : m : r : r : r : d :-

1: Enyin omo ‘Jo Mimo,
E busayo ninu ‘Jo Mimo,
Nitori ife Re pelu wa,
Enyin omo ‘Jo Mimo,
E busayo ninu ‘Jo Mimo,
Nitori ife Re pelu wa.

2: E ma korin e majo,
Ke si mayo ninu ‘Jo Mimo,
Nitori ife Re pelu wa,
E ma korin e majo,
Ke si mayo ninu ‘Jo Mimo,
Nitori ife Re pelu wa.

3: Nitori ‘danwo ba de,
Ke mayo ke si gbadura,
Nitori ife Re, pelu wa,
Nitori ‘danwo ba de,
Ke mayo ke si gbadura,
Nitori ife Re, pelu wa.                    Amin

Orin Idapo Mimo`},{number:`761`,title:`O all ye Heavenly Host,`,category:`Holy Reunion`,lyrics:`English Version

1: O all ye Heavenly Host,
Our Lord and Father in Heaven,
Holy Spirit come into us,
Holy, Holy, Holy, Holy.

2: O all ye Heavenly Host,
Holy, Holy our Father in Heaven,
Holy Father purify us,
Wretched sinners, Father ‘n Heaven.

3: O all ye Heavenly Host,
Holy, Holy from Heavenly above,
Holy, Holy the Angels sing,
Holy, Holy, Holy, Holy.      Amen

Yoruba Version

1: Enyin Ogun Mimo t’Orun
Oluwa Baba wa Orun,
Emi Mimo wa wonu wa,
Mimo, Mimo, Mimo, Mimo.

2: Enyin Ogun Mimo t’Orun
Mimo, Mimo Baba wa Orun,
Baba Mimo wa we awa,
Elese nu, Baba wa Orun.

3: Enyin Ogun Mimo t’Orun
Mimo, Mimo lato Orun wa,
Mimo, Mimo l’awon Angeli nko,
Mimo, Mimo, Mimo, Mimo.       Amin`},{number:`762`,title:`O ye brethren in Christ,`,category:`Holy Reunion`,lyrics:`English Version

O ye brethren in Christ,
Raise ye up this song,
And ye all listen,
To voice of Jehovah,
Of what reward have all ye,
In this Celestial Church?
Of what reward have all ye,
In this great congregation?
That Mary our mother
Come to accompany us
That the good Divine One
Come to accompany us.                    Amen

Yoruba Version

Enyin ara ninu Kristi,
E gbe orin soke,
K’e si gbo ohun ti,
Jehovah nso,
Ere di re t’e fi wa,
Ninu Ijo Mimo yi?
Ere di re t’e fi wa?
Ninu egbe nla yi?
Ki Maria Iya wa,
Le e wa sin wa lo,
K’eni Mimo rere yi,
Wa ma sin wa lo.                         Amin`},{number:`763`,title:`Our dear Lord and Redeemer please`,category:`Holy Reunion`,lyrics:`English Version

s:f:m:s:d:m:r:m:r:d:
f:m:r:r:l:s:f:m:
s : m : f : s : m : r : d : m : l: s :
d:t:l:t:d:

1: Our dear Lord and Redeemer please
save us all,
We the holy fold in Holy Heaven
And the angels are rejoicing with us
Please hearken unto us.

2: Be it later, the Saviour would surely
come,
To come and redeem we sinners
The Lord says to us persistently
Please hearken unto me.

3: Come, Oh Lord and hearken unto us,

Those who kindle your light,
Your seven holy lights,
Please hearken unto me.      Amen

Holy Communication Hymns

Yoruba Version

s:f:m:s:d:m:r:m:r:d:
f:m:r:r:l:s:f:m:
s : m : f : s : m : r : d : m : l: s :
d:t:l:t:d:

1: Oluwa Olugbala jo gba wa la,
Awa eni mimo l’ orun Mimo,
Awon Angeli si nyo pelu wa
Jo da wa lohun.

2: Bo tile pe Olugbala na yio wa,
L’ ti gba ‘wa elese la,
Dandan l’ Oluwa nso fun wa
Jo da wa lohun.

3: Wa dandan lati ad wa l’ohun,
Awon to tan fitila Mimo Re,
Awon to tan fitila Mimo Re meje,

Jo da wa lohun.                Amin

Orin Idapo Ara Oluwa`},{number:`771`,title:`I dwell in righteousness,`,category:`Holy Communion`,lyrics:`English Version

1: I dwell in righteousness,
For the communion of the saints,
Remain in fellowship
Until My arrival.

2: It’s Me Christ saying this,
That surely I will come
For judgement of the world
During the last day.             Amen

Yoruba Version

1: Mo mbe ninu ododo,
Fun dapo awon eni mimo,
Ewa ninu idapo,
Titi Emi o fi pada wa.

2: Emi Kristi lo nso yi,
P’emi o wa dandan lotito,
Lati wa se idajo aiye,
Lasi i ko ikehin.                    Amin`},{number:`772`,title:`Today is the day ye Celestial Church,`,category:`Holy Communion`,lyrics:`English Version

1: Today is the day ye Celestial Church,
Chorus: Think deep ye Celestians
How much search have you done in
your heart,
Please, think deeply ye Celestians
The most costly blood of Jesus Christ
Which has brought redemption to the
world
For those that believe and are repentant
Will be saved in Celestial Church.

2: Are you a hypocrite or deceiver,
Chorus: Think deep ye Celestians
How much search have you done in
your heart,
Please, think deeply ye Celestians
The most costly blood of Jesus Christ
Which has brought redemption to the
world
For those that believe and are repentant
Will be saved in Celestial Church.

3: Is covetousness one of your
weakness,
Chorus: Think deep ye Celestians
How much search have you done in
your heart,
Please, think deeply ye Celestians
The most costly blood of Jesus Christ

Which has brought redemption to the
world
For those that believe and are repentant
Will be saved in Celestial Church.

4: Is there any grudge in your heart?
Chorus: Think deep ye Celestians
How much search have you done in
your heart,
Please, think deeply ye Celestians
The most costly blood of Jesus Christ
Which has brought redemption to the
world
For those that believe and are repentant
Will be saved in Celestial Church.

5: Can use your wealth in the serve of
Jesus?
Chorus: Think deep ye Celestians
How much search have you done in
your heart,
Please, think deeply ye Celestians
The most costly blood of Jesus Christ
Which has brought redemption to the
world
For those that believe and are repentant
Will be saved in Celestial Church.
Amen

Yoruba Version

1: Ojo na pe loni Ijo Mimo,
Chorus: Ro daju, Ijo Mimo,
Bawo lo ti wa di okan re si,
Jowo, ro daju Ijo Mimo,
Eje Kristi Jesu iyebiye,
To mu irapada wa f’ araiye,
F’ eni to ba gbagbo to se gbo ran,
Yio ri ‘ye Jo Mimo.

2: Iwo ha je ’leke tabe letan,
Chorus: Ro daju, Ijo Mimo,
Bawo lo ti wa di okan re si,
Jowo, ro daju Ijo Mimo,
Eje Kristi Jesu iyebiye,
To mu irapada wa f’ araiye,
F’ eni to ba gbagbo to se gbo ran,
Yio ri ‘ye Jo Mimo.

3: Ojukokoro ha ndamu re bi?
Chorus: Ro daju, Ijo Mimo,
Bawo lo ti wa di okan re si,
Jowo, ro daju Ijo Mimo,
Eje Kristi Jesu iyebiye,
To mu irapada wa f’ araiye,
F’ eni to ba gbagbo to se gbo ran,
Yio ri ‘ye Jo Mimo.

4: Ikunsinu kan ha wa lokan re?
Chorus: Ro daju, Ijo Mimo,

Bawo lo ti wa di okan re si,
Jowo, ro daju Ijo Mimo,
Eje Kristi Jesu iyebiye,
To mu irapada wa f’ araiye,
F’ eni to ba gbagbo to se gbo ran,
Yio ri ‘ye Jo Mimo.

5: Iwo ha le fi ise re sin Jesu?
Chorus: Ro daju, Ijo Mimo,
Bawo lo ti wa di okan re si,
Jowo, ro daju Ijo Mimo,
Eje Kristi Jesu iyebiye,
To mu irapada wa f’ araiye,
F’ eni to ba gbagbo to se gbo ran,
Yio ri ‘ye Jo Mimo.                Amin`},{number:`773`,title:`Let us unite, let us unite,`,category:`Holy Communion`,lyrics:`English Version

1: Let us unite, let us unite,
With holy tender love,
Let’s pray to God every moment
And pay respect to our King and Lord,
And wash each other another’s hands
With holy love divine.

2: Let us be ready in one voice,
Celestial Church is one,
Eschew all arrogance and pride, Avoid
all misunderstandings,
Let us respect one another,
Respect of holiness.

3: Always talk not in vexation,
The thought of evil is bad,
Celestial Church is born in love,
Worship the Lord with holy love,
With love divine the Angels

Worship Father in Heaven.           Amen

Yoruba Version

1: Ka sowo po, ka sowo po,
Pelu ife mimo,
Ka gbadura nigba gbogbo,
Ka teriba fun Oba Oluwa,
E ma we owo fun ara nyin,
Pelu’ dapo mimo.

2: E ma mura ninu ohun kan,
Ijo kan Mimo ni,
Ki ise pelu igberaga,
Ede aiyede ko dara,
E ma teriba fun ara nyin,
Iteriba mimo.

3: A ma se soro ibinu,
Ero buburu ko da,
Ijo Mimo ninu ife ni
E sin Oluwa pelu ife,
Pelu ife l’awon Angeli,

Fi sin Baba l’orun.           Amin`},{number:`774`,title:`Holy is Lord Jesus Christ,`,category:`Holy Communion`,lyrics:`English Version

1: Holy is Lord Jesus Christ,
Hearken unto us we pray,
Whenever we draw near Thee
O hears us – Jehovah.

2: Jesus – King of shining light,
Kindle thy light in our hearts,
Thou art King and Redeemer,
O hears us Jehovah.

3: Jesu friend of all sinners,
Forgive us our sins we pray
Thou art King and Redeemer,
Forgive us all we pray.        Amen

Yoruba Version

1: Mimo ni Jesu Kristi,
Gbadura wa Olere,
Nigbati taba sun mo o,
Gbo ti wa Jehovah.

2: Jesu Oba Imole,
Tan mole Re sarin wa,
Ire l’Oba Oludande,
Gbo ti wa Jehovah.

3: Jesu ore elese,
Dariji awa elese,
Ire loba Oludande,
Dariji awa elese.             Amin

Orin Igbeyawo`},{number:`781`,title:`Jesus Christ arriveth,`,category:`Wedding`,lyrics:`English Version

1: Jesus Christ arriveth,
Come hither brethren draw night
Hearken to the voice that calls
Draw night benevolent child.

2: Salvation has entered,
In faith brethren Celestians
Hear that voice that changeth not
Halleluyah.

3: Illumination is Christ
He’ll kindle His light for us,
Put your trust in Jesus today##
He will save us.                Amen

Yoruba Version

1: Jesu Kristi lo de,
Wa enyin ara ma a bo,
Feti s’ohun ti nke pe,
Sunmo mi omo rere.

2: Igbala wole de,
Gbagbo ‘Jo Mimo ara,
Gbo ohun ni ti nke pe,
Halleluya.

3: Imole ni Kristi,
Yio tan mole Re fun wa,
Gba Jesu gbo loni,
Yio gba wa la.                  Amin`},{number:`782`,title:`Come and bless us,`,category:`Wedding`,lyrics:`English Version

Come and bless us,
Father, come and bless us,
Come and bless us,
Father, come and bless us,
Thou art our Lord, Thou art our Lord,
Father, come and bless us.      Amen

Yoruba Version

Wa bukun wa,
Baba wa bukun wa,
Wa bukun wa,
Baba wa bukun wa,
Ire ni Oluwa, Ire ni Oluwa,
Baba wa bukun wa.              Amin`},{number:`783`,title:`There’s garden in heaven above,`,category:`Wedding`,lyrics:`English Version

There’s garden in heaven above,
It’s the garden of Eden,
Listen as the Angels rejoice,
Enormous happiness,
Listen as the trumpet calls
The call of Halleluyah.         Amen

Yoruba Version

Ogba kan mbe l’oke Orun,
Ogba Eden ni,
Gbo bi awon Maleka ti nyo,
Ayo nlanla,
Gbo bi ipe na ti dun,
Ipe Halleluya.                   Amin

Orin Adura`},{number:`791`,title:`Jehovah Elyon our dear Lord,`,category:`Prayer`,lyrics:`English Version

1: Jehovah Elyon our dear Lord,
Exalt us in this Celestial fold.

2: Behold our King on His holy throne,
With Love hearken unto our cries.

3: Behold the Shepherd of the fold,
Protects the sheep in the fold.

4: Come save us from earthly
tribulations,
Kindle thy light amidst our darkness.

5: Jesus come abide with thy church,
Let Thy Holy Spirit be in our heart.
Amen

Yoruba Version

1: Jehovah Elyon Oluwa wa,
Gbe wa ga larin Ijo Mimo.

2: Wo Oba wa lori Ite Re,
Fi ife gbo Ijo Re,

3: Wo Oluso Aguntan Re e,
Pa gbo agutan Re.

4: Wa gba wa larin ikoko aiye,
Tan imole Re sokunkun wa.

5: Jesu wa ba Ijo Re gbe,
Tu Emi Mimo Re s’okan wa.        Amin`},{number:`792`,title:`Always pray, always pray, always pray,`,category:`Prayer`,lyrics:`English Version

Always pray, always pray, always pray,
always pray,
Always pray to the King of light
May the Holy King please
Come and fulfil my promise,
Always pray, always pray, always pray,
always pray,
Always pray to Holy King.        Amen

Yoruba Version

Gbadura, gbadura, gbadura, gbadura,
Gbadura s’Oba imole,
K’Oba Mimo jowo
Lati wa mu leri mi se,
Gbadura, gbadura, gbadura, gbadura,
Gbadura s’Oba Mimo.            Amin`},{number:`793`,title:`Blessing, blessing cometh,`,category:`Prayer`,lyrics:`English Version

m:d:m:m:d:m:r
m:s:d:m:d
r:r:l:t:d

1: Blessing, blessing cometh,
My door openeth,
Blessing cometh in

2: The joy, the joy cometh,
My door openeth,
The joy cometh in.

3: The life, the life cometh,
My door openeth,
Life cometh in. ####

4: Who is, who is giver?
But only Jesus
Our Redeemer.

5: Fear ye not, all the evil ones,
O ye Celestians,
Be ye not afraid.                  Amen

Yoruba Version

m:d:m:m:d:m:r
m:s:d:m:d
r:r:l:t:d

1: Ire, ire tunde,
Mo si lekun le,
Ire wole wa.

2: Ayo, ayo tunde
Mo si lekun le,
K’ayo wole wa.

3: Iye, iye tunde,
Mo si lekun le,
K’iye wole wa.

4: Tani, tani olufunmi?
Bikose Jesu,
Olugbala wa.

5: E ma beru, awon olufidan,
Enyin omo mi,
E m’okan giri.                 Amin`},{number:`794`,title:`Jesus the Son of God pray for us,`,category:`Prayer`,lyrics:`English Version

Jesus the Son of God pray for us,
Jesus the Son of God pray for us,
Come and give us holy Spirit,
Give us Thy glory,
Give us Thy mighty power,
The Son of God.                Amen

Yoruba Version

Jesu Omo Olorun gbadura fun wa,
Jesu Omo Olorun gbadura fun wa,
Jowo fun wa l’emi Mimo,
Fun wa l’ogo tire,
Fun wa ni agbara nla,
Omo Olorun.                     Amin`},{number:`795`,title:`Our Father who amongst us dwells,`,category:`Prayer`,lyrics:`English Version

1: Our Father who amongst us dwells,
Let us not be put to shame,
In Thy hands thou did keep us
Till the end abide with us.

2: Heavenly Spirit descend,
And work with us we plead,
Those who worship devotedly,
Might on that day be saved.

3: Door of mercy open now,
For those thou called with grace,
Work that ye might heaven gain,
Our rewards there are stored.

4: The day of joy now cometh,
That the Saviour cometh in,
The Angels are filled with joy,
For that glorious last day.     Amen

Yoruba Version

1: Baba wa ti mbe larin wa,
Mase je k’oju ti wa,
Owo Re lo da wa si,
Wa pelu wa dopin.

2: Emi Orun sokale wa,
Ko wa ba sise,
Awon to fara sile,
Yio ri ‘ye lojo na.

3: Ilekun anu si sile,
F’awon t’a f’ore pe,
Sise ko le r’orun wo,
Ere re mbe nibe.

Ojo ayo na ti de,
Olugbala wole de,
Awon Angeli kun f’ayo,
F’ojo ‘kehin nla na.            Amin`},{number:`796`,title:`Jesus Christ the King full of light,`,category:`Prayer`,lyrics:`English Version

s : ls : fm : fm : r : m : r :-
s : ls : fm : fm : r : m : r :-
s: ls : ls : ls : r : m : f : l : r :-
s : ls : fm : fm : r : m : f : t : d :-

1: Jesus Christ the King full of light,
He kindles the light into this fold,
Let us worship the Lord and Redeemer,
The Lord our God shall hearken unto
our prayers.

2: Holy Spirit the Comforter abides
with you,
Raise ye up songs and sing songs of joy
To the Lord Christ Jesus the King full
of light,
Shall hearken unto our prayers and our
plea.

3: Holy Michael the conqueror of this
fold
Shall conquer the spirit of the devil,
Sing ye songs of praises to the Lord our
King,
Christ the King full of light shall save
us all.                            Amen

Yoruba Version

s : ls : fm : fm : r : m : r :-
s : ls : fm : fm : r : m : r :-
s: ls : ls : ls : r : m : f : l : r :-
s : ls : fm : fm : r : m : f : t : d :-

1: Kristi Jesu Oba Imole,
To tan imole sinu ijo yi’
E je ka sin Oluwa Olugbala,
Oluwa yio gbo ohun adura wa.

2: Emi Mimo Olutunu mba nyin gbe,
E gb’orin soke e korin ayo,
S’Oluwa Kristi Jesu Oba Imole,
Yio gbo adura wa, yio si gbo ebe wa.

3: Michael Mimo Balogun ‘Jo Mimo,
Yio segun gbogbo emi esu,
E ko orin iyin si Oluwa Oba,
Kristi Oba Imole yio gba nyin la. Amin

Orin Abo Ati Irin Ajo`},{number:`801`,title:`Brethren O come with me,`,category:`Protection and Journey`,lyrics:`English Version

1: Brethren O come with me,
Door of mercy openeth
There is no comforter of one’s soul, ###
Except our Lord Jesus. ####

2: He’s the maker of all things,
He provides for our needs,
When temptation arriveth
It is He who leadeth.            Amin

Yoruba Version

1: Ara e , ba mi kalo,
Ilekun anu si sile,
Alabaro kan ko si,
A fi Jesu nikan.

Ohun to nsohun gbogbo,
On pese fun aini wa,
Nigbati adanwo ba de,
On lonsamona wa.                          Amin`},{number:`802`,title:`Remould our lives Father,`,category:`Protection and Journey`,lyrics:`English Version

1: Remould our lives Father,
Remould our lives the Son,
Chorus: Jesus Holy the Lord King of
mercy,
Remould our lives so ours might be joy.

2: Come and heal us all,
Father come an heal us all,
Son come an heal us all,
Chorus: Jesus Holy the Lord King of
mercy,
Remould our lives so ours might be joy.

3: Come exalt us,
Father come exalt us,
Son come exalt us,
Chorus: Jesus Holy the Lord King of
mercy,
Remould our lives so ours might be joy.

4: Conquer for us,
Father conquer for us,
Son conquer for us,
Chorus: Jesus Holy the Lord King of
mercy,
Remould our lives so ours might be joy.

5: Protect us all,
Father protect us all,
Son protect us all,
Chorus: Jesus Holy the Lord King of
mercy,
Remould our lives so ours might be joy.

6: Provide for us,
Father provide for us,
Son provide for us,
Chorus: Jesus Holy the Lord King of
mercy,
Remould our lives so ours might be joy.
Amen

Yoruba Version

1: Bawa tunse, Baba,
Ba wa tunse, Omo,
Chorus: Jesu Mimo Oluwa Oba anu,
Ba wa tunse ki ti wa dayo.

2: Wa wo wa san,

Baba wa wo wa san,
Omo wa wo wa san,
Chorus: Jesu Mimo Oluwa Oba anu,
Ba wa tunse ki ti wa dayo.

3: Wa gbe wa ga,
Baba, wa gbe wa ga,
Omo, wa gbe wa ga,
Chorus: Jesu Mimo Oluwa Oba anu,
Ba wa tunse ki ti wa dayo.

4: Segun fun wa,
Baba segun fun wa,
Omo segun fun wa,
Chorus: Jesu Mimo Oluwa Oba anu,
Ba wa tunse ki ti wa dayo.

5: Dabo bo wa,
Baba dabo bo wa,
Omo dabo bo wa,
Chorus: Jesu Mimo Oluwa Oba anu,
Ba wa tunse ki ti wa dayo.

6: Pese fun wa,
Baba pese fun wa,
Omo pese fun wa,
Chorus: Jesu Mimo Oluwa Oba anu,
Ba wa tunse ki ti wa dayo.    Amin`},{number:`803`,title:`In perilous times, in temptation times,`,category:`Protection and Journey`,lyrics:`English Version

In perilous times, in temptation times,
Save us all on our dear Lord,
It is unto Thee we belong.         Amen

Yoruba Version

Igba ewu, igba idanwo,
Gba wa Oluwa awa,
Tire nikan lawa nse.               Amin`},{number:`804`,title:`Come save us all,`,category:`Protection and Journey`,lyrics:`English Version

1: Come save us all,
Father come save us all,
Come save us all,
Father come save us all,
Thou art our Lord, Thou art our Lord,
Father comes save us all.

2: Conquer for us,
Father conquer for us,
Conquer for us,
Father conquer for us,
Thou art our Lord, Thou art our Lord,
Father conquer for us.

3: Come protect us,
Father come protect us,
Come protect us,
Father come protect us,
Thou art our Lord, Thou art our Lord,
Father come protect us.

4: Come provide for us,
Father come provide for us,
Come provide for us,
Father come provide for us,
Thou art our Lord, Thou art our Lord,
Father come provide for us.     Amen

Yoruba Version

1: Wa gba wa la,
Baba gba wa la,
Wa gba wa la,
Baba gba wa la,
Ire ni Oluwa, Ire ni Oluwa,
Baba gba wa la.

2: Segun fun wa,
Baba segun fun wa,
Segun fun wa,
Baba segun fun wa,
Ire ni Oluwa, Ire ni Oluwa,
Baba segun fun wa.

3: Dabo bo wa,
Baba dabo bo wa,
Dabo bo wa,
Baba dabo bo wa,
Ire ni Oluwa, Ire ni Oluwa,
Baba dabo bo wa.

4: Wa bukun wa,
Baba wa bukun wa,
Wa bukun wa,
Baba wa bukun wa,
Ire ni Oluwa, Ire ni Oluwa,
Baba wa bukun wa.                Amin`},{number:`805`,title:`Danger looms around,`,category:`Protection and Journey`,lyrics:`English Version

1:Danger looms around,
Chorus: Put salvation marks , Father put
Salvation marks,
In our body. ######

2: Wickedness looms around,
Chorus: Put salvation marks , Father put
salvation marks,
In our body.

3: Illness’s every where,
Chorus: Put salvation marks , Father put
salvation marks,
In our body.

4: Hard time’s every where,
Chorus: Put salvation marks , Father put
salvation marks,
In our body.                     Amen

Yoruba Version

1: Ewu mbe l’ode,
Chorus: Sami ‘ye Baba sami ‘ye
Siwa lara o.

2: Ika mbe l’ode,
Chorus: Sami ‘ye Baba sami ‘ye
Siwa lara o.

3: Arun mbe l’ode,
Chorus: Sami ‘ye Baba sami ‘ye
Siwa lara o.

4: Ponju mbe lo ‘de,
Chorus: Sami ‘ye Baba sami ‘ye
Siwa lara o.                   Amin`},{number:`806`,title:`It si Thy will Father,`,category:`Protection and Journey`,lyrics:`English Version

It si Thy will Father,
It is Thy will oh Son,
Thy will oh Jesus shall we be doing,
Show us these wills,

Give, us these wills,
Give us these wills, Thy will shall we
do.                             Amen

Yoruba Version

Ife tire Baba,
Ife tire Omo,
Ife tire Jesu, ni ki a se,
Feyi han wa,

Feyi fun aw,
Feyi fun wa Jesu tire la o se.     Amin`},{number:`807`,title:`I shall always call on Jesus,`,category:`Protection and Journey`,lyrics:`English Version

I shall always call on Jesus,
On the day of distress,
I shall always call on Jesus,
On the day of sadness,
Chorus: Who shall we call unto?
We shall call unto Jesus,
Who is worthy of thanks,
Jesus is worthy of thanks.    Amen

Yoruba Version

Jesu le mi o ma kepe,
Lojo iponju,
Jesu lemi o ma kepe,
Lojo isoro,
Chorus: Ta la o ma kepe,
Jesu lemi o ma kepe,
Ta lope ye fun o.
Jesu lope ye fun o.                Amin`},{number:`808`,title:`Father, the Son, the Holy Ghost,`,category:`Protection and Journey`,lyrics:`English Version

1: Father, the Son, the Holy Ghost,
Thou art our Lord shall use us whole
heartedly, ####
It is You Father who called us,
And we hearken to Thee.

2: Jesus Christ is coming soon,
To judge the world, ###
Holy Michael the captain,
Shall ride the horse to the earth.

3: With seven blazing swords,
And a deadly club at hand,
The horse shall trample on human
beings,
The judgement time has arrived. Amen

Yoruba Version

1: Baba, Omo, Emi Mimo,
Ire Oluwa yio lo wa towo tese e,
Ire Baba lo pe wa,
T’awa je ipe Re.

2: Jesu Kristi mbo wa,
Lati se ‘dajo aiye,
Michael oga ogun na,
Yio gesin na waiye.

3: Ida meje lowo,
Oko mbe niha won,
Esin yio te eniyan pa,
Igba ikehin na ti de.            Amin`},{number:`809`,title:`Our Lord God at home,`,category:`Protection and Journey`,lyrics:`English Version

1: Our Lord God at home,
Our Lord God when we travel,
Our Lord God at noon,
Our Lord God in the night,
Glory, glory, glory, to Jehovah.

1:Come protect us at home,
Protect us when we travel,
Protect us at noon,
Protect us in the night,
Glory, glory, glory, to Jehovah.

3: Be our guide at home,
Be our guide when we travel,

Be our guide at noon,
Be our guide in the night,
Glory, glory, glory, to Jehovah.

4: Provide for us at home,
Provide us when we travel,
Provide us at noon,
Provide for us at the night,
Glory, glory, glory, to Jehovah.

5: Conquer for us at home,
Conquer for us when we travel,
Conquer for us at noon,
Conquer for us at night,
Glory, glory, glory, to Jehovah.

6: Come and bless us at home,
Come and bless us when we travel,
Come and bless us at noon,
Come and bless us at the night,
Glory, glory, glory, to Jehovah. Amen

Yoruba Version

1: Olorun mi ni ‘le,
Olorun mi ni ‘rin ajo,
Olorun mi lo ‘san,
Olorun mi lo ‘ru,
Ogo! Ogo! Ogo! Fun Jehovah.

2: Dabobo wa ni ‘le
Dabobo wa ni ‘rin ajo,
Dabobo wa losan,
Dabobo wa l’oru,
Ogo! Ogo! Ogo! Fun Jehovah.

3: Samona wa ni ‘le,
Samona wa ni ‘rin ajo,

Samona wa l’osan,
Samona wa l’oru,
Ogo! Ogo! Ogo! Fun Jehovah.

4: Pese fun wa n’ ile,
Pese fun ni ‘rin ajo,
Pese fun wa l’osan
Pese fun wa l’oru,
Ogo! Ogo! Ogo! Fun Jehovah.

5: Segun fun wa n’ ile,
Segun fun wa ni ‘rin ajo,
Segun fun wa l’osan
Segun fun wa l’oru,
Ogo! Ogo! Ogo! Fun Jehovah.

6: Bukun fun wa ni ‘le,
Bukun fun wa ni ‘rin ajo,
Bukun fun wa l’osan
Bukun fun wa l’oru,
Ogo! Ogo! Ogo! Fun Jehovah.                    Amin`},{number:`812`,title:`Hearken, hearken quickly unto my`,category:`Protection and Journey`,lyrics:`English Version

Hearken, hearken quickly unto my
pleas my dear Lord,
Hearken, hearken quickly unto my
pleas my dear Lord,
If I call unto Thee secretly or in open,
Please render thy help to me now my
dear King,
It is on thee that my trust lies,
My dear Lord.                     Amen

Yoruba Version

Tete, tete da mi lohun Oluwa mi,
Tete, tete da mi lohun Oluwa mi,
Bi mo ba kepe Oni koko ni yewu,
Wa ran mi lowo lasiko yi Oba mi,
Ire nikan sa mo gbekele,
Oluwa mi.                        Amin`},{number:`813`,title:`Thy mercy our Father we ask for,`,category:`Protection and Journey`,lyrics:`English Version

Thy mercy our Father we ask for,
Who blesses us in this world,
He who blesses the birds of the air,
Please come and bless us all.    Amen

Yoruba Version

Anu Re Baba wa,
Olubukun aiyeraiye,
Ire to bukun fun eiye iwo,
Jowo wa bukun wa.                              Amin`},{number:`814`,title:`Holy host of Angels come unto my`,category:`Protection and Journey`,lyrics:`English Version

d : d : d : r : m : -d : r : d : t : l : s :
s : r : r : r : r : -s : d : d : d : r : d :
d : d : d : r : m : -d : r : d : t : l : s :
d : t : l : r : d : t : -l : t : d :-

1: Holy host of Angels come unto my

home,
I’m now blessed, Father tells me so,
Holy host of Angels come unto my
home,
And abide with me joyfully. ####

1: Elmorijah has arrived to bless me
I’m now blessed, Father tells me so,
Elmorijah has arrived to bless me
Elmorijah has now arrived.        Amen

Yoruba Version

d : d : d : r : m : -d : r : d : t : l : s :
s : r : r : r : r : -s : d : d : d : r : d :
d : d : d : r : m : -d : r : d : t : l : s :
d : t : l : r : d : t : -l : t : d :-

1: Maleka Mimo wo ‘nu ile mi wa,

Emi ti sorire, baba lo so fun mi,
Maleka Mimo wo ‘nu ile mi wa,
Lati wa bami sere.

2: Elmorijah ti de lati wa bukun mi,
Emi ti sorire, baba lo so fun mi,
Elmorijah ti de lati wa bukun mi,
Elmorijah ti wole de.              Amin`},{number:`815`,title:`Help remould our lives O Lord,`,category:`Protection and Journey`,lyrics:`English Version

1: Help remould our lives O Lord,
Help remould our lives O Lord,
In our youth, in our prime, in our old
age,
Help remould our lives O Lord.

2: Give us victory O Lord,
Give us victory O Lord,
In our youth, in our prime, in our old
age,
Give us victory O Lord.

3: Come and heal us O Lord,
Come and heal us O Lord,
In our youth, in our prime, in our old
age,
Come and heal us O Lord.         Amen

Yoruba Version

1: Ba wa tunse Oluwa,
Ba wa tunse Oluwa,
Oro wa, osan wa, ale wa o,
Ba wa tunse Oluwa.

2: Ke ko ye wa Oluwa,
Ke ko ye wa Oluwa,
Oro wa, osan wa, ale wa o,
Ke ko ye wa Oluwa.

3: Wa wo wa san Oluwa,
Wa wo wa san Oluwa,
Oro wa, osan wa, ale wa o,
Wa wo wa san Oluwa.                 Amin

Orin Omode`},{number:`826`,title:`Jesus loves all little ones`,category:`Children`,lyrics:`English Version

Jesus loves all little ones
He carries them shoulder high,
He called them to Himself, saying
Let all of them come to me. Amen

Yoruba Version

Jesu feran awon omode,
O gbe won s’apa Re ri,
O gbe won mora o, O wipe,
Je ki won wa sodo mi.                Amin`},{number:`827`,title:`Let all the little children come,`,category:`Children`,lyrics:`English Version

Let all the little children come,
Let all the little children come,
Let all the little children come,
Let all the little children come,
Tenderly, little children – tenderly,
Let the little children come.      Amen

Yoruba Version

E je ko ‘mode ko wa o,
E je ko ‘mode ko wa,
E je ko ‘mode ko wa o,
Jojolo, omo Kekere jojolo,
On l’ore Olodumare,
E je ko ‘mode ko wa.                Amin`},{number:`828`,title:`Hark and listen to the children singing,`,category:`Children`,lyrics:`English Version

Hark and listen to the children singing,
Hark and listen to the children singing,
Ho! Hosanna! Ho! Hosanna!
Ho! Hosanna! To the Heavenly King.
Amen

Yoruba Version

Gbo, gbo, gbo b’awon ewe ti nko,
Gbo, gbo, gbo b’awon ewe ti nko,
Ho! Ho! Sannah Ho! Ho! Sannah,
Ho! Ho! Sannah s’Oba Orun.       Amin`},{number:`829`,title:`Jesus here we come to Thy Holy throne,`,category:`Children`,lyrics:`English Version

Jesus here we come to Thy Holy throne,
Come into our midst and bless us all,
For we are children and we knoweth
not,
Place thy hand on us and pray for us,
For we are sinners and we knoweth
nothing,
Forgive us our sins and make us holy,
Place thy hand on us and draw us nearer
to Thee.                       Amen

Yoruba Version

Jesu awa de sinu ile Re,
Wa sarin wa lati bukun wa,
Omode ni wa, awa ko mokan,
Gbowo Re le wa, si sure fun wa,
Elese ni wa, awa ko mokan,
Gbe owo Re le wa, si sanu fun wa,
Dari ese ji wa, so wa di mimo,
Gbe owo Re la wa si fa wa mora. Amin`},{number:`830`,title:`The light shines for the gentiles,`,category:`Children`,lyrics:`English Version

The light shines for the gentiles,
To show the glory
To His beloved ones.             Amen

Yoruba Version

Imole yo s’awon keferi,
Lati f’ogo han,
F’awon eni Re.                     Amin

Orin Ibi Kristi`},{number:`851`,title:`Halleluyah, Halleluyah, Halleluyah,`,category:`Birth of Christ`,lyrics:`English Version

Halleluyah, Halleluyah, Halleluyah,
We shall all meet our Christ,
In Bethlehem in Judea,
Halleluyah, Halleluyah, Halleluyah.
Amen

Yoruba Version

Halleluya, Halleluya, Halleluya,
A o pade Kristi wa,
Ni Bethlehem ati Judea,
Halleluya, Halleluya, Halleluya! Amin`},{number:`852`,title:`Christ has been born for us today,`,category:`Birth of Christ`,lyrics:`English Version

Christ has been born for us today,
In Bethlehem,
The stars of heaven,
All burst with joy,
The stars of heaven,
All burst with joy,
For Saviour that cometh,
To take the sins of the world,
For Saviour that cometh,
To take the sins of the world,

Ye the host of heavenly Angels,
Burst ye with joy with,
The holy heavenly stars.      Amen

Yoruba Version

A bi Kristi fun wa loni ni Bethlehem,
Awon ‘rawo Orun,
Won mbu si ayo,
Awon ‘rawo Orun,
Won mbu si ayo,
F’Olugbala to wa,
Lati ko ese aiye lo,
F’Olugbala to wa,
Lati ko ese aiye lo,
Enyin Angeli mimo t’orun,

E bu sayo pelu,
Awon ‘rawo mimo t’Orun.             Amen`},{number:`853`,title:`Lets go and adore Him in Bethlehem,`,category:`Birth of Christ`,lyrics:`English Version

Lets go and adore Him in Bethlehem,
Where He was born,
Lets go and adore Him in Bethlehem,
Where He was born,
Burst for joy, burst for joy,
With the host of heavenly Angels,
Burst for joy, burst for joy,
With the host of heavenly Angels,
The heavenly stars burst with joy,
For the Saviour who came to take away
the sins of the world,
Ye host of heavenly Angels,
Burst ye for joy with the heavenly stars
above.                           Amen

Yoruba Version

Kalo wo o ni Bethlehem,
Lati bi Jesu,
Kalo wo o ni Bethlehem,
Lati bi Jesu,
E bu sayo, e bu sayo,
Pelu awon Angeli Mimo t’Orun,
E bu sayo, e bu sayo,
Pelu awon Angeli Mimo t’Orun,
Awon ‘rawo orun won ‘bu si ayo,
F’Olugbala to wa lati ko ese aiye lo,
Enyin Angeli Mimo t’orun,
E bu sayo, pelu awon rawo Mimo t’orun.
Amen`},{number:`854`,title:`Listen to what our Lord says,`,category:`Birth of Christ`,lyrics:`English Version

Listen to what our Lord says,
Rejoice with me, praise Him, praise
Him,
Listen to what our Lord says,
Rejoice with me, praise Him, praise
Him,
Rejoice with me for the glorious
King and Saviour
Jesus the King of glory born at exactly
twelve –mid night.              Amen

Yoruba Version

Egbo b’Oluwa wa ti wi,
E ba mi yo, e yin, e yin,
Egbo b’Oluwa wa ti wi,
E ba mi yo, e yin, e sin,
E ba mi ho s’Oba ogo Olugbala,
Jesu Oba Ogo t’abi si Bethlehem,
L’agogo mejila oru.              Amin`},{number:`855`,title:`I shall be there and washed in the blood,`,category:`Birth of Christ`,lyrics:`English Version

I shall be there and washed in the blood,
I shall be there and washed in the blood,
Where our Jesu was born,
I shall be there and washed in the blood,
Amen

Yoruba Version

Ma lo debe, ma feje we,
Ma lo debe, ma feje we,
Nibi t’abi Jesu,
Ma lo debe, ma feje we.             Amin

Orin Iwoju Oluwa`},{number:`876`,title:`It is Me don’t be afraid,`,category:`Seeking God's Favour`,lyrics:`English Version

1: It is Me don’t be afraid,
I say I am the King ,
The King of providence,

Do no be afraid,
I shall always provide your needs for
thee,
Lift up thy eyes to the sky and count the
stars,
Look up the sky and see if you can
count them.###

2: This is how ###
Your children shall be,
Do not be distressed,
n   I shall give joy
And good blessing unto thee, ‘##
I am the King who knows the thoughts
of your hearts,
I the King of blessing shall bless thee.
Amen

Yoruba Version

1: Emi ni, mase beru,
Mo l’Emi l’Oba na,
Oba Olupese,

Ma si se foya,
Emi yio pese aini re fun o,
Gboju re soke ki o ka irawo,
Oju orun wo bi o le mo iye won.

2: Aini bayi ni iru,
Omo re yio si ri,
Mase ro inu,
Emi yio f’ayo,
Ati ibukun rere fun o,
Emi lo Oba ari ‘nu ri ode,
Emi Oba Olubukun yio bu si fun o.    Amin`},{number:`877`,title:`Jesus on this day of mercy,`,category:`Seeking God's Favour`,lyrics:`English Version

1: Jesus on this day of mercy,
The barren look up to Thee,
Look at their sorrowful tears,
Do not make them lose hope.

2: The hour has fully comes,
We pay homage on our knees,
Do not let us lose on this earth,
Bless us with good children.      Amen

Yoruba Version

1: Jesu l’ojo anu yi,
Awon agan now oju Re,
To r’ekun kikoro won,
Ma je k’agan ‘fe re.

2: Wakati na de kankan,
A wole lor’ ekun wa,
Ma je ka pofo laiye,
F’omo rere fun wa.        Amin`},{number:`878`,title:`Halleluyah, our joy cometh,`,category:`Seeking God's Favour`,lyrics:`English Version

1: Halleluyah, our joy cometh,
Angels from heaven descending,
Purposely to give us blessing,
That our joy may be eternal,
Chorus: We that are looking unto God,
Let us never be discouraged,
We shall all share in the blessing,
By the grace of our God on high.

2: Halleluyah, our joy has come,
Angels from heaven have descended,
Purposely to give us blessing,
That our joy may be eternal,
Chorus: We that are looking unto God,
Let us never be discouraged,
We shall all share in the blessing,
By the grace of our God on high.

Amen

Yoruba Version

1: Halleluya, ayo wa mbo,
Awon Angeli t’orun mbo,
Lati mu ibukun wa fun wa,
K’ayo wa le ba wa dopin,
Chorus: Awa, ti nwoju Oluwa,
K’a mase je ki are mu wa,
Gbogbo wa la o ri ibukun gba,
Lagbara Baba wa Orun.

2: Halleluya, ayo wa de,
Awon Angeli t’orun de,
‘Won ti mu ‘bukun wa fun wa,
K’ayo wa le ba wa dopin,
Chorus: Awa, ti nwoju Oluwa,
K’a mase je ki are mu wa,
Gbogbo wa la o ri ibukun gba,
Lagbara Baba wa Orun.               Amin`},{number:`879`,title:`The light of our Christ shineth,`,category:`Seeking God's Favour`,lyrics:`English Version

1: The light of our Christ shineth,
Halleluyah, Halleluyah,
Halleluyah, Halleluyah.

2: Sing ye the barren,
Sing ye for new children,
Sing ye for new children,
Sing ye for new children,
Sing ye for new children,

3: From the throne it was brought unto
thee, ####
From there it brought unto thee, ###
From there it brought unto thee,
From there it brought unto thee. Amen

Yoruba Version

1: Imole Kristi tan,
Halleluya, Halleluya,
Halleluya, Halleluya.

2: Korin iwo agan,
Korin f’omo titun,
Korin f’omo titun,
Korin f’omo titun,
Korin f’omo titun,

3: Lori ite lati mu fun o wa
Lati mu fun o wa
Lati mu fun o wa
Lati mu fun o wa.              Amin`},{number:`880`,title:`O ye barren weep no more,`,category:`Seeking God's Favour`,lyrics:`English Version

O ye barren weep no more,
I have brought forth thy blessings,
Do not let Satan take this,
The grace that you giveth unto me. ###

2: Keep me firmly my Lord,
Do not let sins deceive me,
Thy right hand I desire,
May I receive this today.        Amen

Yoruba Version

1: agan nu omije re nu,
Mo mu ayo wole de,
Mase ke k’esu gba yi,
Ore ofe to fun mi.

2: Mese mi duro Oluwa,
Mase je k’ ese tan mi,
Owo otun Re mo nfe,
Je ki nri gba lojo oni.         Amin`},{number:`881`,title:`Jesus I have come ,`,category:`Seeking God's Favour`,lyrics:`English Version

Jesus I have come ,
To receive my blessing,
Give me my blessings,
May I not go in vain,
When I was went astray,
Thou who showed the way,
Father hearkens to my prayers.    Amen

Yoruba Version

Jesu mo de o,
Lati gbare t’emi,
Fire mi fun mi o,
Ma je ki nlo lofo,
Gbati mo sina o,
Ire lo fona han mi,
Baba gbo adura mi.               Amin`},{number:`882`,title:`God of joy has brought down joy,`,category:`Seeking God's Favour`,lyrics:`English Version

God of joy has brought down joy,
God of joy has brought down joy,
Ye barren, burst with joy, ###
Ye barren, burst with joy,
Halleluya will be our song,
From today and evermore.       Amen

Yoruba Version

Alayo, ti mayo de,
Alayo, ti mayo de,
Enyin agan, e bu sayo,
Enyin agan, e bu sayo,
Halleluya lorin wa yi je,
Lat’ oni titi lai.               Amin`},{number:`883`,title:`Hail, Mary, Holy Mother,`,category:`Seeking God's Favour`,lyrics:`English Version

1: Hail, Mary, Holy Mother,
Thou art our confidant,
Help us we pray, protect us all,
Because of thy glory.

2: Jesus Christ, the Son of God,
Thou art our confidant,
Help us we pray, protect us all,
Because of thy glory.

3: Holy Michael, the great warrior,
Thou art our confidant,
Help us we pray, fight for us,
Because of thy glory.           Amen

Yoruba Version

1: Maria Iya Mimo,
Ire ni gbekele wa,
Ran wa lowo, d’abo bo wa,
Nitori Ogo Re.

2: Jesu Kristi, Omo Olorun,
Se ‘re gbekele wa,
Ran wa lowo, d’abo bo wa,
Nitori Ogo Re.

3: Holy Michael, ajagun segun,
Se ‘re gbekele wa,
Ran wa lowo, gbaja wa ja,
Nitori Ogo Re.                              Amin`},{number:`884`,title:`O dear Lord, Thou art my shield,`,category:`Seeking God's Favour`,lyrics:`English Version

O dear Lord, Thou art my shield,
I am looking unto Thee,
Open the door of mercy Father,
Do not let me go in vain.      Amen

Yoruba Version

Oluwa Ire lasa mi,
Emi ma nwoju Re,
Silekun anu sile Baba,
Ma je ke mi lo lofo.                            Amin`},{number:`885`,title:`Dear Lord God El-Be-Racad,`,category:`Seeking God's Favour`,lyrics:`English Version

Dear Lord God El-Be-Racad,
Remember us at this very hour,
Thou who had bless Abraham,
Jacob and also Joseph,
The only God everlasting,
Send down Thy blessing today,
To us that are Thy chosen ones,
Thou benevolent God.            Amen

Yoruba Version

Oluwa Elberacad,
Gbo ti wa larin wakati yi,
Ire to ‘bukun Abraham,
Jacob’ ati Joseph,
Olorun kan aiyeraiye,
Se fere lojo oni,
F’awa ti nse ayanfe Re,
Olubukun.                              Amin`},{number:`886`,title:`Holy Angels, open thy doors of`,category:`Seeking God's Favour`,lyrics:`English Version

s : s : s : l : s : f : m : f : m : r :-
f : f : s : m : d : r :-
s : s : d : d : r : m : rd : l : d : l : s :-
s : sm : s : f : m : r : m
s:s:m:s:f:m:r:d

1: Holy Angels, open thy doors of
mercy,
For us that are called with grace,
O ye Celestians, girdle up your loins
firmly,
That ye might receive crown of Glory,

That ye might inherit Heaven.

2: Holy Angels, open thy door of mercy
The hour now cometh,
That the holy Angels come in for ye
children,
That ye might receive crown of glory
That ye might inherit Heaven.

3: Holy Angels open thy door of joy,
For ye beloved ones,
Each and every one that has share in the
joy,
That ye might receive crown of glory
That ye might inherit Heaven.

4: Holy Angels open thy door of glory,
For them that are looking for joy,
I am the King that maketh promise that
fulfilled the same,
That ye might receive crown of glory
That ye might inherit Heaven. Amen

Yoruba Version

s : s : s : l : s : f : m : f : m : r :-
f : f : s : m : d : r :-
s : s : d : d : r : m : rd : l : d : l : s :-
s : sm : s : f : m : r : m
s:s:m:s:f:m:r:d

1: Maleka sile kun anu na,
Fa wa ta fore ofe pe,
Enyin omo jo e di amure yin giri,
Kale de yin l’ade ogo,
Kale jogun orun rere.

2: Maleka silekun anu na,
Wakati na ti de tan,
T’awon Maleka Mimo wole f’enyin, omo
K’ale de yin l’ade ogo,
K’ale jogun orun rere.

3: Angeli silekun ayo na,
Fenyin ti nse ayanfe,
Ata ta fi ayo na kari olukaluku,
K’ale de yin l’ade ogo,
K’ale jogun orun rere.

4: Maleka silekun ogo na,
F’awon ti nwoju f’ayo,
Emi l’oba mimo ti nse ‘leri mu se,
K’ale de yin l’ade ogo,
K’ale jogun orun rere.             Amin`},{number:`887`,title:`God my Father, O my Lord,`,category:`Seeking God's Favour`,lyrics:`English Version

s : s : d : m : m : r : t : d :-
m : s : m : m : s : s : f : m : r :-
m : s : ms : s : r : f : m : r : d

1: God my Father, O my Lord,
God my Father, O my Lord,
Please turn all my sorrow into joy,
Lord of Celestial,
My life’s in your hands.

2: God my Father who hearkens,
God my Father who hearkens
The call of Moses on that day,
Please turn all my sorrow into joy,
My life’s in your hands.          Amen

Yoruba Version

s : s : d : m : m : r : t : d :-
m : s : m : m : s : s : f : m : r :-
m : s : ms : s : r : f : m : r : d

1: Baba mi Olorun mi,
Baba mi Olorun mi,
Jowo so banuje mi dayo,
Olujo Mimo,
Temi d’owo Re.

2: Baba mi Ire to gbo,
Baba mi Ire to gbo,
Ipe Mose l’ojo kini,
Jowo so banuje mi dayo,
Temi dowo Re.                          Amin

Orin Ileri`},{number:`901`,title:`Jesus we shall worship Thee,`,category:`Promise`,lyrics:`English Version

Jesus we shall worship Thee,
Jesus we shall worship Thee,
In this holy place,
Amidst Thy great church,

We shall worship Thee, until the end,
We shall carry home Thy blessing.
Amen

Yoruba Version

Jesu awa yio sin O,
Jesu awa yio sin O,
Nibi mimo yi,
Larin Ijo nla Re,

Awa yio sin O, titi dopin,
Awa yio mu bukun rele.                        Amin`},{number:`902`,title:`For I shall provide for you,`,category:`Promise`,lyrics:`English Version

For I shall provide for you,
If you will be faithful,
On the path that I have prepared,
Distress and suffering shall exist no
more.                            Amen

Yoruba Version

Emi yio da o lare,
T’ iwo ba se otito,
@nu ona t’Emi la sile,
Iponju at’ osi yio kuro.                    Amin`},{number:`903`,title:`Holy Michael,`,category:`Promise`,lyrics:`English Version

Holy Michael,
cr Holy
Holy Gabriel
cr Holy
Holy Raphael,
cr Holy
Holy Uriel
cr Holy
Come down, come down,
Come down to join us,
Holy, Holy, Holy,
Come down worship with us.               Amen

Yoruba Version

Holy Michael,
cr Mimo
Holy Gabriel
cr Mimo
Holy Raphael,
cr Mimo
Holy Uriel
cr Mimo
E sokale, e sokale,
E sokale, wa ba wa pe,
Mimo, Mimo, Mimo,
E sokale, wa ba wa pe.                     Amin`},{number:`904`,title:`Behold the path of truth I have made for`,category:`Promise`,lyrics:`English Version

s:d:d:d:r:m:r:d:l:d:s:
s:d:d:d:r:m:r:d:l:r:r:
s:d:d:d:r:d:s:r:r:m:r
s:d:d:d:r:m:r:d:l:r:r:
s : d : d : d : r : m : d : d : r : d : t : d :-

Behold the path of truth I have made for
thee,
Behold the path of life I have made for
thee,
Oh lift the cross, Oh lift the cross,
Kindle ye the light amidst the world’s
darkness,
So that the world may know that I am
the glorious King.                  Amen

Yoruba Version

s:d:d:d:r:m:r:d:l:d:s:
s:d:d:d:r:m:r:d:l:r:r:
s:d:d:d:r:d:s:r:r:m:r
s:d:d:d:r:m:r:d:l:r:r:
s : d : d : d : r : m : d : d : r : d : t : d :-

E wo ona otito t’Emi la sile,
E wo ona iye yi ti mo pe nyin si,
E gbe agbelebu, egbe agbelebu,
E tan ‘mole sinu okunkun aiye,
K’aiye le mo p’Emi l’Oba Ogo.                  Amin`},{number:`905`,title:`Our dear Lord said,`,category:`Promise`,lyrics:`English Version

Our dear Lord said,
I shall forsake not thee,
I will come to accomplish the great

work, ###
And I have come to pray,
For all ye sinners,
Till life everlasting.             Amen

Yoruba Version

Oluwa wipe,
Emi o ni fi yin sile, ##’
Emi o wa sise nla na,

Emi o wa gbadura,
Enyin elese,
Titi a-ye ainipekun.              Amin`},{number:`906`,title:`Jesus lives forever,`,category:`Promise`,lyrics:`English Version

1: Jesus lives forever,
I will no be moved,
Jesus lives forever,
I will no be moved,
Just like tree standing beside the river,
I will stand firmly.

2: Pray for me o my Father,
I’ll deny Thee not,
Pray for me o my Father,
I’ll deny Thee not,
When the Satan confronts me,
With his troubles,
I’ll deny Thee not.               Amen

Yoruba Version

1: Jesu ye titi aiye,
Nko ni yese,
Jesu ye titi aiye,
Nko ni yese,
Gege b’igi to duro leba odo,
Nko ni yese.

2: Gbadura fun mi Baba,
Ma je ki nse O,
Gbadura fun mi Baba,
Ma je ki nse O,
Nigbati esu ba gbe,
Adanwo re de,
Ma je ki nse O.                 Amin`},{number:`907`,title:`Christ reigneth in this world,`,category:`Promise`,lyrics:`English Version

Christ reigneth in this world,
Christ reigneth in this world,
Satan falls,
He falls he crumbles,
Satan falls,
He falls he crumbles,
He falls, he falls,
He falls, he falls,
He crumbles,
He crumbles
He crumbles.                      Amen

Yoruba Version

Kristi ti joba, ni aiye yi o,
Kristi ti joba, ni aiye yi o,
Esu wo,
O wo o wo lule,
Esu wo,
O wo o wo lule,
Owo, owo,
Owo, owo,
Owo lule,
Owo lule,
Owo lule.                       Amin`},{number:`908`,title:`If the whole world rise against us,`,category:`Promise`,lyrics:`English Version

If the whole world rise against us,
They must bow down before the Lord,
Ye children of Celestial Church,
Rise up to praise our Lord and King,
Halleluyah shall be our song
Halleluyah dwelleth in all our deeds,
Whether the world like it or not,
The must bow before the Lord,
Whether the world like it or not,
n   The must bow before the Lord. Amen

Yoruba Version

Bi gbogbo aiye d’ite mo wa,
Nwon gbodo teriba f’Oluwa,
Enyin omo Ijo Mimo,
Edi de k’enyin Oluwa,
Halleluya ni orin wa,
Halleluya wa ninu ise wa,
Bi aiye fe bi aiye ko,
Won teriba fun Kristi,
Bi aiye fe bi aiye ko,
Won teriba fun Kristi.            Amin`},{number:`909`,title:`Let us go to Bethlehem,`,category:`Promise`,lyrics:`English Version

Let us go to Bethlehem,
Where Jesus had been born,
Let us go to Bethlehem,
Where Jesus had been born,
And all the heavenly stars,
All burst with joy,
And all the heavenly stars,
All burst with joy,
To the Saviour who cometh,
To take away all our sins,
To the Saviour who cometh,
To take away all our sins.       Amen

Yoruba Version

Ka lo si Bethlehem,
Ta bi Jesu,
Ka lo si Bethlehem,
Ta bi Jesu,
Awon irawo Orun,
Nwon bu si ayo,
Awon irawo Orun,
Nwon bu si ayo,
S’Olugbala to wa,
Lati ko ese aiye lo.
S’Olugbala to wa,
Lati ko ese aiye lo.            Amin

Orin Idupe and Iyin`},{number:`926`,title:`O King divine we pray, descend,`,category:`Praise and Worship`,lyrics:`English Version

O King divine we pray, descend,
And redeem us today,
O King divine we pray, descend,
And redeem us today,
In this holy congregation
Give us long life and prosperity in this
Thy holy Congregation.            Amen

Yoruba Version

Ko Oba ko sokale
Ko wa gbawa loni,
K’o Oba Mimo k’o sokale,
Ko wa gbawa la loni,
Ninu ijo mimo yi loni,
Ko wa d’emi gigun si fun wa.     Amin`},{number:`927`,title:`Alleluyah, Alleluyah,`,category:`Praise and Worship`,lyrics:`English Version

Alleluyah, Alleluyah,
Christ our Father dwells
Behind us all always,
The Angels are singing thus
Toil hard for the great day.     Amen

Yoruba Version

Alleluyah, Alleluyah,
Kristi Baba wa nbe,
Lehin wa nigbagbogbo
Awon Angeli nko wipe,
Sise fun ojo nla na.             Amin`},{number:`928`,title:`I have found joy in Jesus Halleluyah`,category:`Praise and Worship`,lyrics:`English Version

I have found joy in Jesus Halleluyah
Father divine with His love
Has redeemed me,
Throughout my life,
I will shout Halleluyah,
Halleluyah, Hosanna,
To my benefactor.               Amen

Yoruba Version

Mo ti l’ayo ninu Kristi Halleluya,
Oba Mimo l’o f’ife ra mi pada,
Titi aiye l’emi o ma k’alleluya,
Alleluya, Hossannah
S’Oba mi Olore.                    Amin`},{number:`929`,title:`I will offer thanks,`,category:`Praise and Worship`,lyrics:`English Version

I will offer thanks,
I will offer thanks,
The benevolence of my Saviour
No earthly king can give,
I will offer thanks,

Yoruba Version

Emi yio dupe,
Emi yio dupe,
Ore t’Olugbala se fun wa
Oba aiye k’o le se
Emi yio dupe.                  Amin`},{number:`930`,title:`Mose lead us into Canaan,`,category:`Praise and Worship`,lyrics:`English Version

Mose lead us into Canaan,
Mose lead us into Canaan,
Sojourners indeed we are
We are in a foreign land,
Mose lead us into Canaan
He calls us, calls us, calls us,
He calls us to Celestial,
He calls us, calls us, calls us,
He calls us to Celestial,          Amen

Yoruba Version

Mose si wa lo si Kanaan,
Mose si wa lo si Kanaan,
Alejo l’awa nse,
Awa arinriajo,
Mose si wa lo si Kanaan,
Ope wa, O pe wa, O pe wa,
O pe wa s’Ijo Mimo,
O pe wa, O pe wa, O pe wa,
O pe wa si Celestial.          Amin`},{number:`931`,title:`There’s joy in Jesus in celestial,`,category:`Praise and Worship`,lyrics:`English Version

There’s joy in Jesus in celestial,
Jesus dwells in our midst
For all that we have been requesting
from Him
Father has given us,
Halleluyah                         Amen

Yoruba Version

Ayo mbe ninu Jesu ninu Ijo Mimo,
Jesu mbe larin wa,
Gbogbo ohun ti a nbere lowo Re
Baba ti fi fun wa,
Halleluya.                       Amin`},{number:`932`,title:`You are worthy of thanks,`,category:`Praise and Worship`,lyrics:`English Version

You are worthy of thanks,
Father benevolence,
Praise be to Thee Heavenly king,
Hosanna to Thee,
We thank Thee O Lord.          Amen

Yoruba Version

Ope loye O,
Baba olore,
Iyin loye O, Olorun wa,
Hosanna si O,
Adupe Oluwa.                 Amin`},{number:`933`,title:`I glorify Jesu,`,category:`Praise and Worship`,lyrics:`English Version

I glorify Jesu,
I glorify Jesu,
The call He Called me,
Is glorious call,
I glorify Jesu.                Amen

Yoruba Version

Mo yin Jesu l’ogo,
Mo yin Jesu l’ogo,
Ipe t’o pe mi,
Ipe ola ni,
Mo yin Jesu l’ogo.`},{number:`934`,title:`Children of Celestial Church dance with`,category:`Praise and Worship`,lyrics:`English Version

Children of Celestial Church dance with
joy,
Children of Celestial Church dance with
joy,
We have been crowned with glorious
crown
We have entered into last ship.
Children of Celestial burst with joy.
Amen

Yoruba Version

Omo Ijo Mimo e ho f’ayo,
Omo Ijo Mimo e ho f’ayo,
A tide wa lade ogo,
A ti woko ikehin na,
Omo Ijo Mimo e bu sayo.         Amen`},{number:`935`,title:`Rise, Rise, Rise, oh rise, my soul,`,category:`Praise and Worship`,lyrics:`English Version

Rise, Rise, Rise, oh rise, my soul,

And put on your armour,
Let my soul sing songs of happiness,
Rise, Rise, Rise, oh rise, my soul,
And put on your armour.         Amen

Yoruba Version

Ji, Ji, Ji , iwo okan mi,

Gbe agbara re wo,
K’okan mi le ko rin ayo,
Ji, Ji, Ji , iwo okan mi,
Gbe agbara re wo.               Amin`},{number:`936`,title:`I’m free from evil world,`,category:`Praise and Worship`,lyrics:`English Version

1: I’m free from evil world,
I’m free from evil world,
Chorus: I’m free, I’m free,
I’m free from evil world.

2: I’m free from tribulation,
I’m free from tribulation,
Chorus: I’m free, I’m free,
I’m free from evil world.

3: We are free from all witches,
We are free from all witches,
Chorus: I’m free, I’m free,
I’m free from evil world.

4: We are free from all wizards,
We are free from all wizards,
Chorus: I’m free, I’m free,
I’m free from evil world.        Amen

Yoruba Version

1: Mo ti bo l’owo aiye,
Mo ti bo l’owo aiye,
Chorus: Mo ti bo, mo ti bo,
Mo ti bo l’owo aiye.

2: Mo ti bo ninu idamu,
Mo ti bo ninu idamu,
Chorus: Mo ti bo, mo ti bo,
Mo ti bo l’owo aiye.

3: A ti bo l’owo aje,
A ti bo l’owo aje,
Chorus: Mo ti bo, mo ti bo,
Mo ti bo l’owo aiye.

4: A ti bo l’owo oso,
A ti bo l’owo oso,
Chorus: Mo ti bo, mo ti bo,
Mo ti bo l’owo aiye.           Amin`},{number:`937`,title:`Holy, Holy is the Almighty,`,category:`Praise and Worship`,lyrics:`English Version

Holy, Holy is the Almighty,
Hear our prayers in Jesus name,
In perfect love descend in our midst,
Bear all our infirmities today. Amen

Yoruba Version

Mimo, Mimo l’Olodumare,
Gb’adura wa l’oruko Jesu,
Pelu ife jowo sokale,
Wa gboro wa ro lojo oni.       Amin`},{number:`938`,title:`Jesus Christ is my joy,`,category:`Praise and Worship`,lyrics:`English Version

Jesus Christ is my joy,
Jesus Christ is my joy,
The joy the world can not overshadow,
Jesus Christ is my joy.

2: It is a truthful joy indeed,
It is a righteous joy.
Joy everlasting is my,
Jesus Christ is my joy.            Amen

Yoruba Version

1: Jesu ni ayo mi,
Jesu ni ayo mi,
Ayo t’aiye ko le f’owo bo,
Jesu ni ayo mi.

2: Ayo otito ni,
Ayo ododo ni,
Ayo aiyeraiye ni t’emi,
Jesu ni ayo mi.                 Amin`},{number:`939`,title:`Let us bless the Lord,`,category:`Praise and Worship`,lyrics:`English Version

Let us bless the Lord,
Sing ye songs of praise aloud,
Because He spares our lives till today
Brethren shout and rejoice.        Amen

Yoruba Version

E fi ibukun f’Oluwa,
E gb’orin yin s’oke,
‘tori t’o d’emi wa si d’oni,
Ara e bu sayo.                 Amin`},{number:`940`,title:`Who can overshadow the glory of the`,category:`Praise and Worship`,lyrics:`English Version

Who can overshadow the glory of the
sun,
Who can overshadow the glory of the
moon,
Seven heaven stars,
Seven heaven stars,
Paying homage to our king of Hosanna.
Amen

Yoruba Version

Ta lo le f’owo bogo orun mole,
Ta lo le f’owo bogo orun Osupa,
Irawo meje,
Irawo meje,
F’oribale fun oba Hossanah.       Amen`},{number:`941`,title:`Hail the Majesty, the Lord Almighty,`,category:`Praise and Worship`,lyrics:`English Version

1: Hail the Majesty, the Lord Almighty,
Chorus: Hail the Majesty King of all
kings.

2: The trustworthy one the Lord
Almighty,
Chorus: Hail the Majesty King of all
kings.

3: If the wizard show off, Your sword
will destroy him,
Chorus: Hail the Majesty King of all
kings.

4: If the witches show off, Your sword
will destroy them,
Chorus: Hail the Majesty King of all
kings.                          Amen

Yoruba Version

1: Kabiyesi O,
Olodumare toto,
Chorus: Kabiyesi, Oba awon Oba.

2: Atogbojule Oba nla,
Chorus: Kabiyesi, Oba awon Oba.

3: Oso to ba yoju, ida Re a ge wewe,
Chorus: Kabiyesi, Oba awon Oba.

4: Aje to ba yoju, ida Re a ge wewe,
Chorus: Kabiyesi, Oba awon Oba. Amin`},{number:`942`,title:`Thy blood redeemeth me,`,category:`Praise and Worship`,lyrics:`English Version

1: Thy blood redeemeth me,
Thy blood redeemeth me,
Thy precious blood,
Thy precious blood,
Thy blood redeemeth me.

2: The blood heals my sickness,
The blood heals my sickness,
Thy precious blood,
Thy precious blood,
The blood heals my sickness.

3: The blood gives me blessings,
The blood gives me blessings,
Thy precious blood,
Thy precious blood,
The blood gives me blessings.

4: Thy blood gives me promotion,

Thy blood gives me promotion,
Thy precious blood,
Thy precious blood,
Thy blood gives me promotion. Amen

Yoruba Version

1: Eje Re lo gba mi la,
Eje Re lo gba mi la,
Eje Re, iyebiye,
Eje Re, iyebiye,
Eje Re lo gba mi la.

2: Eje Re lo wo mi san,
Eje Re lo wo mi san,
Eje Re, iyebiye,
Eje Re, iyebiye,
Eje Re lo wo mi san.

3: Eje Re pese fun mi,
Eje Re pese fun mi,
Eje Re, iyebiye,
Eje Re, iyebiye,
Eje Re pese fun mi.

4: Eje Re lo gbe mi ga,

Eje Re lo gbe mi ga,
Eje Re, iyebiye,
Eje Re, iyebiye,
Eje Re lo gbe mi ga.                Amin`},{number:`943`,title:`Celestial lights its glorious lamp,`,category:`Praise and Worship`,lyrics:`English Version

Celestial lights its glorious lamp,
A star appears above,
Brethren see how sweet it is,
Brethren see how beautiful it is. Amen

Yoruba Version

Ijo Mimo tan na ogo re,
Irawo yo l’oke,
E wa wo bo ti ladun to,
E wa wo bo ti lewa to.            Amin`},{number:`944`,title:`Sanctify, sanctify, sanctify,`,category:`Praise and Worship`,lyrics:`English Version

Sanctify, sanctify, sanctify,
Solo: Holy Michael,
Chorus: Come down and sanctify,
Solo: Holy Gabriel,
Chorus: Come down and sanctify,
Solo: Holy Uriel,
Chorus: Come down and sanctify,
Solo: Holy Raphael,
Chorus: Come down and sanctify,
Solo: Our Lord Jesus,
Chorus: Jesus, Jesus, Jesus, come and
sanctify,
Sanctify, sanctify, sanctify.   Amen

Yoruba Version

Ya si mimo, ya si mimo, ya si mimo,
Solo: Holy Michael,
Chorus: Sokale wa ya si mimo,
Solo: Holy Gabriel,
Chorus: Sokale wa ya si mimo,
Solo: Holy Uriel,
Chorus: Sokale wa ya si mimo,
Solo: Holy Raphael,
Chorus: Sokale wa ya si mimo,
Solo: Baba wa Jesu Oluwa,
Chorus: Jesu, Jesu, Jesu, wa ya si mimo,
Ya si mimo, ya si mimo, ya si mimo.
Amin`},{number:`945`,title:`Our Father is in control of this vehicle,`,category:`Praise and Worship`,lyrics:`English Version

Our Father is in control of this vehicle,
He known that we are inside this
vehicle,
Our Father is in control of this vehicle,
He known that we are inside this
vehicle,
Solo: Drive us carefully along,
Chorus: our Father,
Solo: Prevent us from getting off the
road,
Chorus: our Father,
Solo: Prevent us from all accidents,
Chorus: our Father,
Chorus: Drive us safely to our home,
Chorus: our Father.               Amen

Yoruba Version

Baba wa to loko ti nwoko Re,
O ti mo pe mo wa ninu oko,
Baba wa to loko ti nwoko Re,
O ti mo pe mo wa ninu oko,
Solo :Ma se jeje ma wa mi lo,
Chorus Baba mi,
Solo: Ma se je k’oko yi wo gbo,
Chorus: Baba mi
Solo: Ma se je k’oko yi da nu,
Chorus Baba mi,
Solo: Sin mi dele oloko yi o,
Chorus Baba mi.                 Amin`},{number:`946`,title:`It’s not hard at all`,category:`Praise and Worship`,lyrics:`English Version

It’s not hard at all
It’s not hard for Almighty God
To turn my sorrow to joy,
It’s not hard for my Lord.     Amen

Yoruba Version

Ko soro rara, ko soro,
Ko soro f’Olorun mi
Lati s’oro mi dayo,
Oro mi ko soro f’Olorun.        Amin`},{number:`947`,title:`I give my life to Jesus,`,category:`Praise and Worship`,lyrics:`English Version

I give my life to Jesus,
I give my life to Jesus,
I give my life to Jesus,
That my life may be precious.

2: Herbalists cannot save us,
Oracle cannot save us,
Sooth-Sayers cannot save us,
Only Jesus can save.          Amen

Yoruba Version

Mo f’aiye mi fun Jesu,
Mo f’aiye mi fun Jesu,
Mo f’aiye mi fun Jesu,
K’aiye mi ba le dara.

2: Baba alawo ko le gba ni la,
Onisegun ko le gba ni la,
Adahunse ko le gba ni la,
Afi Jesu nikan.                   Amin`},{number:`948`,title:`With music, dances, praise the Lord,`,category:`Praise and Worship`,lyrics:`English Version

With music, dances, praise the Lord,
Give thanks to God our Father,
Everything that is alive
Give praise to Heavenly King.    Amen

Yoruba Version

F’ ilu f’ijo yin baba,
E f’ope fun Omo,
Gbogbo ohun to ni emi
E f’iyin f’Oba Ogo.               Amin`},{number:`949`,title:`Glory, glory, praise, praise,`,category:`Praise and Worship`,lyrics:`English Version

Glory, glory, praise, praise,
Praises to the Lord King in heaven,
We bring praise and thanks to Thee,
Hear our prayers, our kind father.
Amen

Yoruba Version

Ogo, ogo, iyin, iyin,
Iyin f’Oluwa, Oba Orun,
A mu iyin at’ope wa,
Gbadura wa o Oba rere.            Amin`},{number:`950`,title:`To Thee, be all thanks,`,category:`Praise and Worship`,lyrics:`English Version

To Thee, be all thanks,
To Thee, be all thanks,
To Thee, be all thanks,
Our God benefactor,
All the birds flying in the air,
All the fish living in the sea,
All the beast of the forest,
Paying Thee homage O Lord.          Amen

Yoruba Version

Ire l’ope ye,
Ire l’ope ye,
Ire l’ope ye,
Oba wa Olore,
Awon eiye l’oke orun,
Awon eja inu omi,
Awon eranko igbe,
F’oribale fun Oluwa                Amin`},{number:`951`,title:`Incomparable, incomparable is our God`,category:`Praise and Worship`,lyrics:`English Version

Incomparable, incomparable is our God
Incomparable, incomparable is our God
Incomparable, the God of celestial,
Who makes promises and fulfils them.
Amen

Yoruba Version

Ta lo dabi, ta lo da Olorun wa,
Ta lo dabi, ta lo da Olorun wa,
To la dabi Olorun Celestial
T’o seleri, to mu ‘leri se.       Amin`},{number:`952`,title:`I accept Jesus Christ as my King,`,category:`Praise and Worship`,lyrics:`English Version

I accept Jesus Christ as my King,
Jesus is the most gracious King,
My mind is at rest with the Lord,
He will never let me down,
Chorus: Throughout my life,
He will never let me down,
In this holy fold,
He will never let me down,
In my family,

He will never let me down,
Among enemies,
He will never let me down.        Amen

Yoruba Version

Mo ti gba Jesu l’Oba t’emi,
Jesu l’Oba to dara ju,
Okan mi simi le Jesu o,
Ko ni je k’oju ti mi,
Chorus: Ninu aiye mi o,
Ko ni je k’oju ti mi,
Ninu ijo Re,
Ko ni je k’oju ti mi,
Larin ebi ni o,

Ko ni je k’oju ti mi,
Larin ota ni o,
Ko ni je k’oju ti mi.                Amin`},{number:`953`,title:`Celestial Church from heaven above,`,category:`Praise and Worship`,lyrics:`English Version

Celestial Church from heaven above,
From heaven above,
Celestial Church from heaven above,
From heaven above
Celestial Church from heaven above,
Is very dear to me.           Amen

Yoruba Version

Ijo Mimo l’atorun wa a,
L’atorun wa, l’atorun wa
Ijo Mimo l’atorun wa a,
L’atorun wa, l’atorun wa
Ijo Mimo l’atorun wa a,
Lo se ranwo fun mi.                  Amin`},{number:`954`,title:`The Holy Doves`,category:`Praise and Worship`,lyrics:`English Version

The Holy Doves
Spirit of comfort,
From Almighty God,
Descend upon us.                 Amen

Yoruba Version

Adaba Mimo,
Emi Olutunu,
L’at’odo Olorun
Ko wa ba le wa.                     Amin`},{number:`955`,title:`The Almighty is our King,`,category:`Praise and Worship`,lyrics:`English Version

The Almighty is our King,
The most fearful is our King,
So long we are with Jesus,
He’ll never let us down.          Amen

Yoruba Version

Adaba l’Oba wa,
Eru jeje l’Oba wa,
N’ibi ti Jesu ba wa
Oju ko ni ti wa.                    Amin`},{number:`956`,title:`It’s pleasure for me to know Jesus,`,category:`Praise and Worship`,lyrics:`English Version

It’s pleasure for me to know Jesus,
Halleluyah Jesus Christ love me,
I am extremely lucky,
Everlasting life for me is sure. Amen

Yoruba Version

Inu mi dun ‘gbati mo Jesu,
Halleluya Jesu f’eran mi,
Ori mi dara pupo,
Iye ainipekun je t’emi.                Amin`},{number:`957`,title:`The last ship of salvation, the last ship,`,category:`Praise and Worship`,lyrics:`English Version

The last ship of salvation, the last ship,
The last ship of salvation is Celestial
Church.
He who fails to enter the last ship,
Will sink into deep sea.            Amen

Yoruba Version

Oko igbala ikehin, oko igbala,
Oko igbala ikehin n’ijo Mimo
Eni t’o ba ko to w’onu re,
Ni yio ri s’inu ibu omi.              Amin`},{number:`958`,title:`I will praise Thee with my money,`,category:`Praise and Worship`,lyrics:`English Version

I will praise Thee with my money,
I’ll exalt Thee with my substance,
What will be my gain from all these
When I enter into the earth,
The dust of the earth cannot sing praise
to the Lord.                     Amen

Yoruba Version

Ma f’owo mi yin o logo,
Ma f’ohun ti mo ni yin o, baba,
Ere ki l’o je fun mi,
Nigbati ti mo ba ti w’onu ile lo,
Erupe ile ko le yi O l’ogo o,
baba Mimo.                            Amin`},{number:`959`,title:`Rejoice and shout Hosanna,`,category:`Praise and Worship`,lyrics:`English Version

Rejoice and shout Hosanna,
My heart thanks the Lord, the Holy
King,

I give thanks Halleluyah.          Amen

Yoruba Version

E yo, e ko Hosanna,
Okan mi yin Oluwa, Oba Mimo,
Mo dupe Halleluya.           Amin`},{number:`960`,title:`I will follow, I will follow,`,category:`Praise and Worship`,lyrics:`English Version

1: I will follow, I will follow,
I will follow My Christ,
I will follow, I will follow,
I will follow My Christ,
Whenever He leadeth me,
I will follow Him
I will follow, I will follow Him
I will follow Christ.

2: I will love Him, I will love Him,
I will love my Christ,
I will love Him, I will love Him,
I will love my Christ,
Whenever He leadeth me,
I will follow Him
I will love Him, I will love Him,
I will love my Christ.

3: I will praise Him, I will praise Him,
I will praise my Christ,
I will praise Him, I will praise Him,
I will praise my Christ,
Whenever He leadeth me,
I will praise my Christ,
I will praise Him, I will praise Him,
I will praise my Christ.            Amen

Yoruba Version

1: Emi o tele, emi o tele,
Ma tele Kristi,
Emi o tele, emi o tele,
Ma tele Kristi,
N’ibi ti O ba ran mi,
Emi o ma tele,
Emi o tele, emi o tele,
N o tele Kristi.

2: Emi o fe O, emi o fe O,
Ma se ‘fe Kristi,
Emi o fe o, emi o fe O,
Ma se ‘fe Kristi,
N’ibi ti O ba ran mi,
Ma se ‘fe Kristi,
Emi o fe O, emi o fe O,
Ma se ‘fe Kristi.

3: Emi o yin O, emi o yin O,
Ma yin Kristi l’Oba,
Emi o yin O, emi o yin O,
Ma yin Kristi l’Oba,
N’ibi ti O ba ran mi,
Emi o yin Kristi,
Emi o yin O, emi o yin O,
Ma yin Kristi l’Oba.           Amin`},{number:`961`,title:`I have seen the light,`,category:`Praise and Worship`,lyrics:`English Version

I have seen the light,
Light of God, light of God in me
Halleluyah,
I have seen the light,
Light of God,
Rejoice oh my soul.           Amen

Yoruba Version

Mo ti ri, ‘mole, ‘mole Olorun
Mo ri ‘mole Olorun n’u mi
Halleluya.
Mo ti ri, ‘mole, imole Olorun
Mo ti ri, ‘mole, imole Olorun
Okan mi nyo.                     Amin`},{number:`962`,title:`Give me Thy victory Jesus,`,category:`Praise and Worship`,lyrics:`English Version

1: Give me Thy victory Jesus,
Give me Thy victory,
Thou King who conquered for David,
Give me Thy victory Jesus.

2: Come redeem me Jesus,
Come redeem me,
Thou King who redeemed Prophet
Daniel,
Come redeem me Jesus.      Amen

Yoruba Version

1: Wa segun fun ni Jesu,
Wa segun fun mi,
Ire l’Oba to segun fun Dafidi,
Wa segun fun mi.

2: Wa gba wa la Jesu,
Wa gba wa la,
Ire l’Oba to gba Daniel la,
Wa gba la.                       Amin`},{number:`963`,title:`Give us victory, Father give us`,category:`Praise and Worship`,lyrics:`English Version

1: Give us victory, Father give us
victory,
Conquer for us, Father conquer for us,
Thou art our God, Thou art our God,
Father conquers for us.

2: Come to heal us, father come to heal
us,
Come to heal us, Father come to heal us
Thou art our God, Thou art our God,
Father comes to heal us.

3: Accept our work, Father accept our
work,
Accept our work, Father accept our
work,
Thou art our God, Thou art our God,
Father accepts our work.

4: Come and bless us, Father come and
bless us,
Come and bless us, Father come and

bless us,
Thou art our God, Thou art our God,
Father come and blesses us.     Amen

Yoruba Version

1: Segun fun wa, Baba segun fun wa,
Segun fun wa, Baba segun fun wa,
Ire in Oluwa, Ire in Oluwa,
Baba segun fun wa.

2: Wa wo wa san, Baba wa wo wa san,
Wa wo wa san, Baba wa wo wa san,
Ire in Oluwa, Ire in Oluwa,
Baba wa wo wa san.

3: Gbase wa se, Baba gbase wa se,
Gbase wa se, Baba gbase wa se,
Ire in Oluwa, Ire in Oluwa,
Baba gbase wa se.

4: Wa bukun wa, Baba wa bukun wa,
Wa bukun wa, Baba wa bukun wa,
Ire in Oluwa, Ire in Oluwa,
Baba wa bukun wa.              Amin`},{number:`964`,title:`Darkness can never prevail over the`,category:`Praise and Worship`,lyrics:`English Version

Darkness can never prevail over the
light,
Darkness can never prevail over the
moon,
Seven stars are always paying homage
To the glory of Celestial Church,
To the glory of Celestial Church.
Amen

Yoruba Version

Okunkun ko le bori imole,
Okunkun ko le bori Osupa,
Irawo meje nf’ori b’ale,
Fun ogo Ijo Mimo,
Fun ogo Ijo Mimo.                  Amin`},{number:`965`,title:`Father conquer for us,`,category:`Praise and Worship`,lyrics:`English Version

1: Father conquer for us,
The Son conquer for us,
Jesus the Lord God of mercy,
Conquer for us that we might rejoice.

2: Father, accept our works,
The Son, accept our works,
Jesus the Lord God of mercy,
Accept our works that we might rejoice.

3: Father, come and heal us,
The Son, come and heal us,
Jesus the Lord God of mercy,
Come and heal us that we might rejoice.

4: Father, hear our prayers,
The Son, hear our prayers,
Jesus the Lord God of mercy,
Hear our prayers that we might rejoice.

5: Father, be our guidance,
The Son, be our guidance,
Jesus the Lord God of mercy,
Be our guidance that we might rejoice.

6: Father, give us power,
The Son, give us power,
Jesus the Lord God of mercy,
Give us power that we might rejoice.

7: Father, come and bless us,
The Son, come and bless us,
Jesus the Lord God of mercy,
Come and bless us that we might
rejoice.                      Amen

Yoruba Version

1: Baba segun fun wa,
Omo segun fun wa,
Jesu Kristi Oluwa Oba anu,
Segun fun wa, k’oro wa d’ayo.

2: Baba gb’ase wa se,
Omo gb’ase wa se,
Jesu Mimo, Oluwa Oba anu,
Gb’ase wa se, k’oro wa d’ayo.

3: Baba wa wo wa san,
Omo wa wo wa san,
Jesu Mimo, Oluwa Oba anu,
Wa wo wa san, k’oro wa d’ayo.

4: Baba gb’adura wa,
Omo gb’adura wa,
Jesu Mimo, Oluwa Oba anu,
Gb’adura wa, k’oro wa d’ayo.

5: Baba d’abo bo wa,
Omo d’abo bo wa,
Jesu Mimo, Oluwa Oba anu,
D’abo bo wa, k’oro wa d’ayo.

6: Baba fun wa l’agbara,
Omo fun wa l’agbara,
Jesu Mimo, Oluwa Oba anu,
Fun wa l’agbara, k’oro wa d’ayo.

7: Baba bukun fun wa,
Omo bukun fun wa,
Jesu Mimo, Oluwa Oba anu,
Wa bukun fun wa, k’oro wa d’ayo. Amin`},{number:`966`,title:`I will worship Christ,`,category:`Praise and Worship`,lyrics:`English Version

Chorus: I will worship Christ,
I will worship Christ,
The living God I will worship forever,
1: King of Celestial, a wonderful God,
King of Celestial is a righteous
defender,
Chorus: Chorus: I will worship Christ,
I will worship Christ,
The living God I will worship forever.

2:Intribulations, He suppresses them all,
In tribulation, he brought joy abundant,
Chorus: Chorus: I will worship Christ,
I will worship Christ,
The living God I will worship forever.
Amen

Yoruba Version

Chorus: Emi a sin Kristi,
Emi a sin Kristi,
Oba Iye ni ma sin titi aiye,
1: Oba Celestial, Oba Iyanu,
Oba Celestial, Olododo, Olugbeja,
Chorus: Emi a sin Kristi,
Emi a sin Kristi,
Oba Iye ni ma sin titi aiye.

2: O te gbogbo idamu mo’le,
Ninu idamu, O mu ayo kun,
Chorus: Emi a sin Kristi,
Emi a sin Kristi
Oba Iye ni ma sin titi aiye.      Amin`},{number:`967`,title:`Jesus we come before Thee today,`,category:`Praise and Worship`,lyrics:`English Version

1: Jesus we come before Thee today,
We entrust today’s service unto Thee,
We entrust today’s service unto Thee,
Chorus: Let Thy blessings,
Let Thy blessings,
Let Thy blessings,
Let Thy blessings
Descend in full upon us all.
We entrust today’s service unto Thee.

2: Do let us, ever be in want,
We entrust today’s service unto Thee
Do let us, ever be in want,
We entrust today’s service unto Thee,
Chorus: Let Thy blessings,
Let Thy blessings,
Let Thy blessings,
Let Thy blessings
Descend in full upon us all.
We entrust today’s service unto Thee.

3: Holy Spirit the compassionate,
We entrust today’s service unto Thee
Holy Spirit the compassionate,
We entrust today’s service unto Thee
Chorus: Let Thy blessings,
Let Thy blessings,
Let Thy blessings,
Let Thy blessings
Descend in full upon us all.

We entrust today’s service unto Thee.

4: Almighty God Thee be the glory,
We entrust today’s service unto Thee
Almighty God Thee be the glory,
We entrust today’s service unto Thee
Chorus: Let Thy blessings,
Let Thy blessings,
Let Thy blessings,
Let Thy blessings
Descend in full upon us all.
We entrust today’s service unto Thee.
Amen

Yoruba Version

1: Jesu awa de siwaju Re l’oni,
Esin oni d’owo Re,
Esin oni d’owo Re,
Chorus: Ki ibukun Re,
Ki ibukun Re,
Ki ibukun Re,
Ki ibukun Re,
Wa sarin wa,
Esin oni d’owo Re.

2:Ma je k’a s’alaini,
Esin oni d’owo Re,
K’a ma s’alaini,
Esin oni d’owo Re,
Chorus: Ki ibukun Re,
Ki ibukun Re,
Ki ibukun Re,
Ki ibukun Re,
Wa sarin wa,
Esin oni d’owo Re.

3: Emi Mimo Olutunu,
Esin oni d’owo Re,
Emi Mimo Olutunu
Esin oni d’owo Re,
Chorus: Ki ibukun Re,
Ki ibukun Re,
Ki ibukun Re,
Ki ibukun Re,
Wa sarin wa,

Esin oni d’owo Re.

4: Ogo fun Oba nla,
Esin oni d’owo Re,
Ogo fun Oba nla,
Esin oni d’owo Re,
Chorus: Ki ibukun Re,
Ki ibukun Re,
Ki ibukun Re,
Ki ibukun Re,
Wa sarin wa,
Esin oni d’owo Re.             Amin`},{number:`968`,title:`Jesus here we come,`,category:`Praise and Worship`,lyrics:`English Version

Jesus here we come,
Into Thy house,
Place Thy hands on us
And give us blessings.

2: we are unclean,
King of the light,
Forgive us our sins,
And glorify us.

3: Jesus here we come,
With our filthiness,
Forgive all of us,
And give us Thy blessings.      Amen

Yoruba Version

1: Jesu awa de
S’inu ile Re,
Gb’owo Re le wa,
Ko si bukun fun wa.

2: Alaimo ni wa ,
Oba Imole
Dari ese ji wa,
Ko si se wa logo.

3: Jesu aw de,
Pel’aimo wa,
Dari ese ji wa,
Ko si bukun fun wa.            Amin`},{number:`969`,title:`I followed Jesus on visits,`,category:`Praise and Worship`,lyrics:`English Version

1: I followed Jesus on visits,
I followed Jesus on visits,
Satan reached my home and met my
absence,
I followed Jesus on visits.

2: I put Jesus Christ before me,
I put Jesus Christ before me,
My name is called after His doctrine,
I put Jesus Christ before me.

3: I belong to Celestial Church,
I belong to Celestial Church,
Other Churches may number hundred,
I belong to Celestial Church.

4: The witches will be put to shame,
The witches will be put to shame,

My Jesus Christ will crown my efforts,
The sorcerers will be put to shame.
Amen

Yoruba Version

1: Mo ti ba Jesu lo s’ode,
Mo ti ba Jesu lo s’ode,
Esu d’ele ko ba mi n’ile,
Mo ti ba Jesu lo s’ode.

2: Jesu Kristi wa pelu mi,
Jesu Kristi wa pelu mi,
Oruko Re l’aiye mo mi mo,
Jesu Kristi wa pelu mi.

3: Mo nlo s’ijo Celestial,
Mo nlo s’ijo Celestial,
Egberun Ijo sa lo mbe laiye,
Mo nlo s’ijo Celestial.

4: O ti d’oju t’awon aje,
O ti d’oju t’awon aje,
Jesu Kristi lo da mi lare,

O ti d’oju t’awon oso.             Amin`},{number:`970`,title:`The way of salvation,`,category:`Praise and Worship`,lyrics:`English Version

The way of salvation,
Is through Lord Jesus the Saviour,
The life and the righteousness
Of the Lord is very sweet
The name of Jesus the Lord
Is enough to save
Believe Him brethren
To behold glorious crown.      Amen

Yoruba Version

Ona igbala
Odo Jesu Oluwa
Olugbala lo wa
Aiye ati ododo
T’Oluwa dun
Oruko Jesu Oluwa
O to gba ni
Ara gbagbo
Ara gba a gbo
Lati gba ade ogo.                 Amin`},{number:`971`,title:`We have conquered Satan,`,category:`Praise and Worship`,lyrics:`English Version

1: We have conquered Satan,
We have overcome,
We have conquered Satan,
We have overcome,
Satan has no power over Celestial.

2: We have conquered witches,
We have overcome,
We have conquered witches,
We have overcome,
Witches have no power over Celestial.

3: We have conquered wizard,
We have overcome,
We have conquered wizard,
We have overcome,
Wizard has no power over Celestial.
Amen

Yoruba Version

1: A ti segun esu,
Ati bori won
Ati ti segun Esu,
Ati bori won
Esu ko ni agbara lori Ijo Mimo.

2: Ati t’aje mo’le,
Ati bori won
Ati t’aje mo’le,
Ati bori won
Aje ko ni agbara lori Ijo Mimo.

3: Ati t’oso mo’le
Ati bori won
Ati t’oso mo’le
Ati bori won
Oso ko ni agbara lori Ijo Mimo. Amin`},{number:`972`,title:`What can wipe away my sins,`,category:`Praise and Worship`,lyrics:`English Version

What can wipe away my sins,
Nothing else but blood of Jesus,
Ah, most costly blood,
Which makes me whiter than snow,
Nothing else but blood of Jesus.
Amen

Yoruba Version

Ki lo le w’ese mi nu,
Ko si l’ehin eje Jesu,
A eje yebiye,
T’o mu mi fun bi snow,
K’o mu s’sisun miran mo,
Ko si l’ehin eje Jesu.             Amin`},{number:`973`,title:`Halleluyah, Halleluyah, Halleluyah`,category:`Praise and Worship`,lyrics:`English Version

Halleluyah, Halleluyah, Halleluyah
Jesus Christ loves me,
Halleluyah, Halleluyah, Halleluyah
Jesus Christ loves me.         Amen

Yoruba Version

Halleluya, Halleluya, Halleluya,
Jesu feran mi,
Halleluya, Halleluya, Halleluya,
Jesu feran mi.                   Amin`},{number:`974`,title:`Certainly I known it,`,category:`Praise and Worship`,lyrics:`English Version

1: Certainly I known it,
The Lord created me,
The prayers that I say,
I will not be shamed.

2: Certainly I known it,
The Lord created me,
Evil world merely strives,
Celestial shall prevail.       Amen

Yoruba Version

1: O da mi l’oju pe,
Olorun lo da mi,
Adura ti mo ngba,
Oju ko ni ti mi.

2: O da mi l’oju pe,
Olorun lo da mi,
Esu nse lasan ni
Ijo Mimo ni yio bori.           Amin`},{number:`975`,title:`Help me to magnify God the Father,`,category:`Praise and Worship`,lyrics:`English Version

1: Help me to magnify God the Father,
Help me to magnify God the Son,
Those who know Jesus, as the their
Saviour,
Help me to magnify God the Lord Jesus

2: The quick shall worship Thee Father
The quick shall worship Thee son,
Those who are dead can not worship
Thee
The quick shall worship Thee Father
Amen

Yoruba Version

1: E bami gbe Jesu ga o Baba,
E bami gbe Jesu ga o Omo,
Eni ba gba Jesu l’Oluwa,
Ko bami gbe Jesu ga o.

2: Alaiye ni o ma yin O o Baba,
Alaiye ni o ma yin O o Omo
Oku t’o ti ku, k’o le yi O,
Alaiye ni o ma yin O Baba.      Amin`},{number:`976`,title:`Holy Spirit descend,`,category:`Praise and Worship`,lyrics:`English Version

Holy Spirit descend,
Show thy glory to world
Illuminate us with thy Heavenly light.
Amen

Yoruba Version

Emi Mimo sokale,
FI ogo orun aiye,
Tan itanse imole mimo si wa.    Amin`},{number:`977`,title:`Come down God of Elijah`,category:`Praise and Worship`,lyrics:`English Version

Come down God of Elijah
Come down God of Elijah
Come down God Oshoffa,
Come down God Oshoffa.        Amen

Yoruba Version

Sokale wa Olorun Elijah,
Sokale wa, Olorun Elijah
Sokale wa, Olorun Oshoffa,
Sokale wa, Olorun Oshoffa.      Amin`}],h=(e,t,n,r=``)=>({time:e,lesson:t,scripture:n,service:r}),g=({id:e,date:t,displayDate:n,day:r,month:i,special:a=``,readings:o=[],sourceNote:s=``})=>({id:e,date:t,displayDate:n,day:r,year:`2026`,month:i,special:a,readings:o,sourceNote:s,lessonNumber:e,topic:n,scripture:o.map(e=>`${e.time?`${e.time} - `:``}${e.lesson}: ${e.scripture}`).join(` • `),memoryVerse:``,content:a?`${a}. CCC Bible Lessons for ${n}.`:`CCC Bible Lessons for ${n}.`,questions:[]}),_=[g({id:`JAN-01`,date:`2026-01-01`,displayDate:`Thursday 1st January 2026`,day:`Thursday`,month:`January`,special:`New Moon Service`,readings:[h(`10AM`,`1st Lesson`,`Isaiah 40:1–11`),h(`10AM`,`2nd Lesson`,`2 Corinthians 1:1–11`),h(`10PM`,`1st Lesson`,`Isaiah 43:15–21`,`New Moon Service`)]}),g({id:`JAN-02`,date:`2026-01-02`,displayDate:`Friday 2nd January 2026`,day:`Friday`,month:`January`,readings:[h(`6PM`,`1st Lesson`,`2 Corinthians 5:16–19`)]}),g({id:`JAN-04`,date:`2026-01-04`,displayDate:`Sunday 4th January 2026`,day:`Sunday`,month:`January`,readings:[h(`10AM`,`1st Lesson`,`Genesis 1:1–10`),h(`10AM`,`2nd Lesson`,`John 1:1–12`),h(`6PM`,`1st Lesson`,`Genesis 1:26–31`)]}),g({id:`JAN-07`,date:`2026-01-07`,displayDate:`Wednesday 7th January 2026`,day:`Wednesday`,month:`January`,readings:[h(`6PM`,`1st Lesson`,`Luke 8:13–19`)]}),g({id:`JAN-09`,date:`2026-01-09`,displayDate:`Friday 9th January 2026`,day:`Friday`,month:`January`,readings:[h(`6PM`,`1st Lesson`,`Deuteronomy 18:13–19`)]}),g({id:`JAN-11`,date:`2026-01-11`,displayDate:`Sunday 11th January 2026`,day:`Sunday`,month:`January`,readings:[h(`10AM`,`1st Lesson`,`Exodus 4:1–10`),h(`10AM`,`2nd Lesson`,`Matthew 13:18–24`),h(`6PM`,`1st Lesson`,`Deuteronomy 20:1–4`)]}),g({id:`JAN-14`,date:`2026-01-14`,displayDate:`Wednesday 14th January 2026`,day:`Wednesday`,month:`January`,readings:[h(`6PM`,`1st Lesson`,`Genesis 17:1–8`)]}),g({id:`JAN-16`,date:`2026-01-16`,displayDate:`Friday 16th January 2026`,day:`Friday`,month:`January`,readings:[h(`6PM`,`1st Lesson`,`Matthew 7:21–27`)]}),g({id:`JAN-18`,date:`2026-01-18`,displayDate:`Sunday 18th January 2026`,day:`Sunday`,month:`January`,readings:[h(`10AM`,`1st Lesson`,`Deuteronomy 28:1–8`),h(`10AM`,`2nd Lesson`,`James 1:21–24`),h(`6PM`,`1st Lesson`,`Deuteronomy 28:15–20`)]}),g({id:`JAN-21`,date:`2026-01-21`,displayDate:`Wednesday 21st January 2026`,day:`Wednesday`,month:`January`,readings:[h(`6PM`,`1st Lesson`,`2 Samuel 22:21–31`)]}),g({id:`JAN-23`,date:`2026-01-23`,displayDate:`Friday 23rd January 2026`,day:`Friday`,month:`January`,readings:[h(`6PM`,`1st Lesson`,`Proverbs 6:20–27`)]}),g({id:`JAN-25`,date:`2026-01-25`,displayDate:`Sunday 25th January 2026`,day:`Sunday`,month:`January`,readings:[h(`10AM`,`1st Lesson`,`Joshua 1:1–10`),h(`10AM`,`2nd Lesson`,`1 Corinthians 4:1–6`),h(`6PM`,`1st Lesson`,`1 John 3:7–10`)]}),g({id:`JAN-28`,date:`2026-01-28`,displayDate:`Wednesday 28th January 2026`,day:`Wednesday`,month:`January`,readings:[h(`6PM`,`1st Lesson`,`Nehemiah 9:1–3`)]}),g({id:`JAN-30`,date:`2026-01-30`,displayDate:`Friday 30th January 2026`,day:`Friday`,month:`January`,readings:[h(`6PM`,`1st Lesson`,`1 John 1:19–24`)],sourceNote:`The referenced online page carries this entry as Friday 31st January 2025. It has been placed on Friday 30th January 2026 to maintain the 2026 Wednesday/Friday service calendar. Scripture wording is retained from the published schedule pending confirmation from the printed worldwide booklet.`}),g({id:`FEB-01`,date:`2026-02-01`,displayDate:`Sunday 1st February 2026`,day:`Sunday`,month:`February`,readings:[h(`10AM`,`1st Lesson`,`Nehemiah 8:1–10`),h(`10AM`,`2nd Lesson`,`Romans 12:1–3`),h(`6PM`,`1st Lesson`,`Colossians 3:10–17`)]}),g({id:`FEB-04`,date:`2026-02-04`,displayDate:`Wednesday 4th February 2026`,day:`Wednesday`,month:`February`,readings:[h(`6PM`,`1st Lesson`,`Proverbs 6:12–19`)]}),g({id:`FEB-05`,date:`2026-02-05`,displayDate:`Thursday 5th February 2026`,day:`Thursday`,month:`February`,special:`New Moon Service`,readings:[h(`10PM`,`1st Lesson`,`Ezekiel 28:14–19`,`New Moon Service`)]}),g({id:`FEB-06`,date:`2026-02-06`,displayDate:`Friday 6th February 2026`,day:`Friday`,month:`February`,readings:[h(`6PM`,`1st Lesson`,`Acts 12:20–24`)]}),g({id:`FEB-08`,date:`2026-02-08`,displayDate:`Sunday 8th February 2026`,day:`Sunday`,month:`February`,readings:[h(`10AM`,`1st Lesson`,`Daniel 4:29–33`),h(`10AM`,`2nd Lesson`,`1 Peter 5:5–7`),h(`6PM`,`1st Lesson`,`1 Timothy 6:17–21`)]}),g({id:`FEB-11`,date:`2026-02-11`,displayDate:`Wednesday 11th February 2026`,day:`Wednesday`,month:`February`,readings:[h(`6PM`,`1st Lesson`,`1 Samuel 16:4–11`)]}),g({id:`FEB-13`,date:`2026-02-13`,displayDate:`Friday 13th February 2026`,day:`Friday`,month:`February`,readings:[h(`6PM`,`1st Lesson`,`John 12:1–8`)]}),g({id:`FEB-15`,date:`2026-02-15`,displayDate:`Sunday 15th February 2026`,day:`Sunday`,month:`February`,readings:[h(`10AM`,`1st Lesson`,`Joshua 7:19–26`),h(`10AM`,`2nd Lesson`,`Acts 5:1–10`),h(`6PM`,`1st Lesson`,`Proverbs 12:18–22`)]}),g({id:`FEB-18`,date:`2026-02-18`,displayDate:`Wednesday 18th February 2026`,day:`Wednesday`,month:`February`,readings:[h(`6PM`,`1st Lesson`,`Proverbs 25:18–20`)]}),g({id:`FEB-20`,date:`2026-02-20`,displayDate:`Friday 20th February 2026`,day:`Friday`,month:`February`,readings:[h(`6PM`,`1st Lesson`,`Acts 21:26–36`)]}),g({id:`FEB-22`,date:`2026-02-22`,displayDate:`Sunday 22nd February 2026`,day:`Sunday`,month:`February`,readings:[h(`10AM`,`1st Lesson`,`Numbers 16:41–50`),h(`10AM`,`2nd Lesson`,`Matthew 9:32–34`),h(`6PM`,`1st Lesson`,`Matthew 26:14–23`)]}),g({id:`FEB-25`,date:`2026-02-25`,displayDate:`Wednesday 25th February 2026`,day:`Wednesday`,month:`February`,readings:[h(`6PM`,`1st Lesson`,`Titus 3:8–11`)]}),g({id:`FEB-27`,date:`2026-02-27`,displayDate:`Friday 27th February 2026`,day:`Friday`,month:`February`,readings:[h(`6PM`,`1st Lesson`,`Judges 20:34–44`)]}),g({id:`MAR-01`,date:`2026-03-01`,displayDate:`Sunday 1st March 2026`,day:`Sunday`,month:`March`,readings:[h(`10AM`,`1st Lesson`,`Genesis 13:8–18`),h(`10AM`,`2nd Lesson`,`Romans 16:10–20`),h(`6PM`,`1st Lesson`,`Proverbs 16:16–18`)]}),g({id:`MAR-04`,date:`2026-03-04`,displayDate:`Wednesday 4th March 2026`,day:`Wednesday`,month:`March`,readings:[h(`6PM`,`1st Lesson`,`Luke 10:38–42`)]}),g({id:`MAR-05`,date:`2026-03-05`,displayDate:`Thursday 5th March 2026`,day:`Thursday`,month:`March`,special:`New Moon Service`,readings:[h(`10PM`,`1st Lesson`,`Judges 4:1–9`,`New Moon Service`)]}),g({id:`MAR-06`,date:`2026-03-06`,displayDate:`Friday 6th March 2026`,day:`Friday`,month:`March`,readings:[h(`6PM`,`1st Lesson`,`Mark 15:37–43`)]}),g({id:`MAR-08`,date:`2026-03-08`,displayDate:`Sunday 8th March 2026`,day:`Sunday`,month:`March`,readings:[h(`10AM`,`1st Lesson`,`Proverbs 31:1–10`),h(`10AM`,`2nd Lesson`,`Acts 9:36–43`),h(`6PM`,`1st Lesson`,`Luke 1:39–48`)]}),g({id:`MAR-11`,date:`2026-03-11`,displayDate:`Wednesday 11th March 2026`,day:`Wednesday`,month:`March`,readings:[h(`6PM`,`1st Lesson`,`2 Corinthians 11:21–30`)]}),g({id:`MAR-13`,date:`2026-03-13`,displayDate:`Friday 13th March 2026`,day:`Friday`,month:`March`,readings:[h(`6PM`,`1st Lesson`,`Jeremiah 38:1–6`)]}),g({id:`MAR-15`,date:`2026-03-15`,displayDate:`Sunday 15th March 2026`,day:`Sunday`,month:`March`,readings:[h(`10AM`,`1st Lesson`,`Genesis 37:16–37`),h(`10AM`,`2nd Lesson`,`Matthew 10:32–40`),h(`6PM`,`1st Lesson`,`Luke 14:25–33`)]}),g({id:`MAR-18`,date:`2026-03-18`,displayDate:`Wednesday 18th March 2026`,day:`Wednesday`,month:`March`,readings:[h(`6PM`,`1st Lesson`,`Isaiah 43:16–21`)]}),g({id:`MAR-20`,date:`2026-03-20`,displayDate:`Friday 20th March 2026`,day:`Friday`,month:`March`,readings:[h(`6PM`,`1st Lesson`,`Acts 26:24–32`)]}),g({id:`MAR-22`,date:`2026-03-22`,displayDate:`Sunday 22nd March 2026`,day:`Sunday`,month:`March`,readings:[h(`10AM`,`1st Lesson`,`Isaiah 29:11–16`),h(`10AM`,`2nd Lesson`,`1 Corinthians 1:18–21`),h(`6PM`,`1st Lesson`,`Matthew 4:16–21`)]}),g({id:`MAR-25`,date:`2026-03-25`,displayDate:`Wednesday 25th March 2026`,day:`Wednesday`,month:`March`,readings:[h(`6PM`,`1st Lesson`,`Matthew 16:20–24`)]}),g({id:`MAR-27`,date:`2026-03-27`,displayDate:`Friday 27th March 2026`,day:`Friday`,month:`March`,readings:[h(`6PM`,`1st Lesson`,`Matthew 4:22–34`)],sourceNote:`This reference is retained exactly as published in the CCC schedule pending confirmation from the printed worldwide booklet.`}),g({id:`MAR-28`,date:`2026-03-28`,displayDate:`Saturday 28th March 2026`,day:`Saturday`,month:`March`,readings:[h(``,`1st Lesson`,`John 13:1–17`),h(``,`2nd Lesson`,`Matthew 26:17–56`)]}),g({id:`MAR-29`,date:`2026-03-29`,displayDate:`Sunday 29th March 2026`,day:`Sunday`,month:`March`,special:`Palm Sunday`,readings:[h(`10AM`,`1st Lesson`,`Zechariah 9:9–12`),h(`10AM`,`2nd Lesson`,`Luke 19:28–38`),h(`6PM`,`1st Lesson`,`Titus 1:5–9`)]}),g({id:`MAR-30`,date:`2026-03-30`,displayDate:`Monday 30th March 2026`,day:`Monday`,month:`March`,special:`Holy Monday`,readings:[h(`6PM`,`1st Lesson`,`Matthew 26:1–13`)]}),g({id:`MAR-31`,date:`2026-03-31`,displayDate:`Tuesday 31st March 2026`,day:`Tuesday`,month:`March`,special:`Holy Tuesday`,readings:[h(`6PM`,`1st Lesson`,`1 Corinthians 1:10–17`)]}),g({id:`APR-01`,date:`2026-04-01`,displayDate:`Wednesday 1st April 2026`,day:`Wednesday`,month:`April`,readings:[h(`6PM`,`1st Lesson`,`John 17:1–19`)]}),g({id:`APR-02`,date:`2026-04-02`,displayDate:`Thursday 2nd April 2026`,day:`Thursday`,month:`April`,special:`Holy Thursday`,readings:[h(`6PM`,`1st Lesson`,`John 13:1–15`,`Holy Thursday`),h(`8PM`,`1st Lesson`,`Matthew 26:20–35`,`Washing of Feet`),h(`8PM`,`2nd Lesson`,`Matthew 26:36–56`,`Washing of Feet`),h(`10PM`,`1st Lesson`,`John 13:16–27`,`Lord's Supper`)]}),g({id:`APR-03`,date:`2026-04-03`,displayDate:`Friday 3rd April 2026`,day:`Friday`,month:`April`,special:`Good Friday`,readings:[h(`9AM`,`1st Lesson`,`Mark 15:21–32`,`Good Friday`),h(`12PM`,`1st Lesson`,`Mark 15:33–41`,`Good Friday`),h(`3PM`,`1st Lesson`,`Mark 15:42–47`,`Good Friday`)]}),g({id:`APR-04`,date:`2026-04-04`,displayDate:`Saturday 4th April 2026`,day:`Saturday`,month:`April`,special:`Holy Saturday`,readings:[h(`6PM`,`1st Lesson`,`Luke 23:50–56`),h(`10PM`,`2nd Lesson`,`Luke 24:1–7`)]}),g({id:`APR-05`,date:`2026-04-05`,displayDate:`Sunday 5th April 2026`,day:`Sunday`,month:`April`,special:`Easter Sunday`,readings:[h(`10AM`,`1st Lesson`,`Psalms 16:5–11`),h(`10AM`,`2nd Lesson`,`Luke 24:1–10`),h(`6PM`,`1st Lesson`,`Matthew 28:9–20`)]}),g({id:`APR-08`,date:`2026-04-08`,displayDate:`Wednesday 8th April 2026`,day:`Wednesday`,month:`April`,readings:[h(`6PM`,`1st Lesson`,`Romans 3:21–24`)]}),g({id:`APR-10`,date:`2026-04-10`,displayDate:`Friday 10th April 2026`,day:`Friday`,month:`April`,readings:[h(`6PM`,`1st Lesson`,`Luke 24:28–35`)]}),g({id:`APR-12`,date:`2026-04-12`,displayDate:`Sunday 12th April 2026`,day:`Sunday`,month:`April`,readings:[h(`9AM`,`1st Lesson`,`2 Kings 4:32–37`),h(`9AM`,`2nd Lesson`,`Mark 16:12–20`),h(`6PM`,`1st Lesson`,`John 20:19–23`)]}),g({id:`APR-15`,date:`2026-04-15`,displayDate:`Wednesday 15th April 2026`,day:`Wednesday`,month:`April`,readings:[h(`6PM`,`1st Lesson`,`Mark 5:25–43`)]}),g({id:`APR-17`,date:`2026-04-17`,displayDate:`Friday 17th April 2026`,day:`Friday`,month:`April`,readings:[h(`6PM`,`1st Lesson`,`1 Samuel 17:41–51`)]}),g({id:`APR-19`,date:`2026-04-19`,displayDate:`Sunday 19th April 2026`,day:`Sunday`,month:`April`,readings:[h(`10AM`,`1st Lesson`,`Genesis 22:1–18`),h(`10AM`,`2nd Lesson`,`Hebrews 11:1–12`),h(`6PM`,`1st Lesson`,`James 2:14–23`)]}),g({id:`APR-22`,date:`2026-04-22`,displayDate:`Wednesday 22nd April 2026`,day:`Wednesday`,month:`April`,readings:[h(`6PM`,`1st Lesson`,`John 1:21–31`)]}),g({id:`APR-24`,date:`2026-04-24`,displayDate:`Friday 24th April 2026`,day:`Friday`,month:`April`,readings:[h(`6PM`,`1st Lesson`,`Matthew 3:11–17`)]}),g({id:`APR-26`,date:`2026-04-26`,displayDate:`Sunday 26th April 2026`,day:`Sunday`,month:`April`,readings:[h(`10AM`,`1st Lesson`,`Ezekiel 36:23–36`),h(`10AM`,`2nd Lesson`,`Acts 19:1–10`),h(`6PM`,`1st Lesson`,`Exodus 14:13–22`)]}),g({id:`APR-29`,date:`2026-04-29`,displayDate:`Wednesday 29th April 2026`,day:`Wednesday`,month:`April`,readings:[h(`6PM`,`1st Lesson`,`Matthew 12:32–37`)]}),g({id:`MAY-01`,date:`2026-05-01`,displayDate:`Friday 1st May 2026`,day:`Friday`,month:`May`,readings:[h(`6PM`,`1st Lesson`,`Isaiah 26:14–21`)]}),g({id:`MAY-03`,date:`2026-05-03`,displayDate:`Sunday 3rd May 2026`,day:`Sunday`,month:`May`,readings:[h(`10AM`,`1st Lesson`,`Daniel 7:23–28`),h(`10AM`,`2nd Lesson`,`Revelation 20:11–15`),h(`6PM`,`1st Lesson`,`2 Corinthians 5:1–10`)]}),g({id:`MAY-06`,date:`2026-05-06`,displayDate:`Wednesday 6th May 2026`,day:`Wednesday`,month:`May`,readings:[h(`6PM`,`1st Lesson`,`Isaiah 30:20–24`)]}),g({id:`MAY-07`,date:`2026-05-07`,displayDate:`Thursday 7th May 2026`,day:`Thursday`,month:`May`,special:`New Moon Service`,readings:[h(`10PM`,`1st Lesson`,`Daniel 5:1–12`,`New Moon Service`)]}),g({id:`MAY-08`,date:`2026-05-08`,displayDate:`Friday 8th May 2026`,day:`Friday`,month:`May`,readings:[h(`6PM`,`1st Lesson`,`Luke 3:1–18`)]}),g({id:`MAY-10`,date:`2026-05-10`,displayDate:`Sunday 10th May 2026`,day:`Sunday`,month:`May`,readings:[h(`10AM`,`1st Lesson`,`Exodus 3:1–10`),h(`10AM`,`2nd Lesson`,`John 16:7–16`),h(`6PM`,`1st Lesson`,`Luke 1:34–38`)]}),g({id:`MAY-13`,date:`2026-05-13`,displayDate:`Wednesday 13th May 2026`,day:`Wednesday`,month:`May`,readings:[h(`6PM`,`1st Lesson`,`1 Kings 18:27–39`)]}),g({id:`MAY-14`,date:`2026-05-14`,displayDate:`Thursday 14th May 2026`,day:`Thursday`,month:`May`,special:`Ascension Day`,readings:[h(``,`1st Lesson`,`2 Kings 2:1–13`,`Ascension Day`),h(``,`2nd Lesson`,`Acts 1:1–11`,`Ascension Day`)]}),g({id:`MAY-15`,date:`2026-05-15`,displayDate:`Friday 15th May 2026`,day:`Friday`,month:`May`,readings:[h(`6PM`,`1st Lesson`,`John 4:1–4`)]}),g({id:`MAY-17`,date:`2026-05-17`,displayDate:`Sunday 17th May 2026`,day:`Sunday`,month:`May`,readings:[h(`10AM`,`1st Lesson`,`Exodus 13:17–22`),h(`10AM`,`2nd Lesson`,`Matthew 3:13–17`),h(`6PM`,`1st Lesson`,`John 15:20–27`)]}),g({id:`MAY-20`,date:`2026-05-20`,displayDate:`Wednesday 20th May 2026`,day:`Wednesday`,month:`May`,readings:[h(`6PM`,`1st Lesson`,`John 14:12–20`)]}),g({id:`MAY-22`,date:`2026-05-22`,displayDate:`Friday 22nd May 2026`,day:`Friday`,month:`May`,readings:[h(`6PM`,`1st Lesson`,`Exodus 31:1–11`)]}),g({id:`MAY-24`,date:`2026-05-24`,displayDate:`Sunday 24th May 2026`,day:`Sunday`,month:`May`,special:`Pentecost Day`,readings:[h(`10AM`,`1st Lesson`,`Exodus 19:1–20`),h(`10AM`,`2nd Lesson`,`Acts 2:1–21`),h(`6PM`,`1st Lesson`,`Acts 14:1–11`)]}),g({id:`MAY-27`,date:`2026-05-27`,displayDate:`Wednesday 27th May 2026`,day:`Wednesday`,month:`May`,readings:[h(`6PM`,`1st Lesson`,`Psalms 51:4–13`)]}),g({id:`MAY-29`,date:`2026-05-29`,displayDate:`Friday 29th May 2026`,day:`Friday`,month:`May`,readings:[h(`6PM`,`1st Lesson`,`John 15:18–27`)]}),g({id:`MAY-31`,date:`2026-05-31`,displayDate:`Sunday 31st May 2026`,day:`Sunday`,month:`May`,readings:[h(`10AM`,`1st Lesson`,`Joel 2:23–32`),h(`10AM`,`2nd Lesson`,`Luke 4:12–21`),h(`6PM`,`1st Lesson`,`Acts 21:10–14`)]}),g({id:`JUN-03`,date:`2026-06-03`,displayDate:`Wednesday 3rd June 2026`,day:`Wednesday`,month:`June`,readings:[h(`6PM`,`1st Lesson`,`Luke 2:41–52`)]}),g({id:`JUN-04`,date:`2026-06-04`,displayDate:`Thursday 4th June 2026`,day:`Thursday`,month:`June`,special:`New Moon Service`,readings:[h(`10PM`,`1st Lesson`,`Genesis 22:1–8`,`New Moon Service`)]}),g({id:`JUN-05`,date:`2026-06-05`,displayDate:`Friday 5th June 2026`,day:`Friday`,month:`June`,readings:[h(`6PM`,`1st Lesson`,`1 Samuel 3:1–10`)]}),g({id:`JUN-07`,date:`2026-06-07`,displayDate:`Sunday 7th June 2026`,day:`Sunday`,month:`June`,special:`Juvenile Harvest`,readings:[h(`10AM`,`1st Lesson`,`Proverbs 4:20–27`),h(`10AM`,`2nd Lesson`,`Luke 18:15–17`),h(`6PM`,`1st Lesson`,`Exodus 39:23–28`)]}),g({id:`JUN-10`,date:`2026-06-10`,displayDate:`Wednesday 10th June 2026`,day:`Wednesday`,month:`June`,readings:[h(`6PM`,`1st Lesson`,`Exodus 3:7–15`)]}),g({id:`JUN-12`,date:`2026-06-12`,displayDate:`Friday 12th June 2026`,day:`Friday`,month:`June`,readings:[h(`6PM`,`1st Lesson`,`Luke 11:14–28`)]}),g({id:`JUN-14`,date:`2026-06-14`,displayDate:`Sunday 14th June 2026`,day:`Sunday`,month:`June`,readings:[h(`10AM`,`1st Lesson`,`1 Samuel 3:8–18`),h(`10AM`,`2nd Lesson`,`2 Timothy 1:1–14`),h(`6PM`,`1st Lesson`,`Leviticus 10:1–7`)]}),g({id:`JUN-17`,date:`2026-06-17`,displayDate:`Wednesday 17th June 2026`,day:`Wednesday`,month:`June`,readings:[h(`6PM`,`1st Lesson`,`Proverbs 29:18–22`)]}),g({id:`JUN-19`,date:`2026-06-19`,displayDate:`Friday 19th June 2026`,day:`Friday`,month:`June`,readings:[h(`6PM`,`1st Lesson`,`Genesis 25:1–5`)]}),g({id:`JUN-21`,date:`2026-06-21`,displayDate:`Sunday 21st June 2026`,day:`Sunday`,month:`June`,readings:[h(`10AM`,`1st Lesson`,`Deuteronomy 5:11–16`),h(`10AM`,`2nd Lesson`,`Matthew 15:1–9`),h(`6PM`,`1st Lesson`,`1 John 2:12–15`)]}),g({id:`JUN-24`,date:`2026-06-24`,displayDate:`Wednesday 24th June 2026`,day:`Wednesday`,month:`June`,readings:[h(`6PM`,`1st Lesson`,`Matthew 19:1–12`)]}),g({id:`JUN-26`,date:`2026-06-26`,displayDate:`Friday 26th June 2026`,day:`Friday`,month:`June`,readings:[h(`6PM`,`1st Lesson`,`1 Samuel 16:1–16`)]}),g({id:`JUN-28`,date:`2026-06-28`,displayDate:`Sunday 28th June 2026`,day:`Sunday`,month:`June`,readings:[h(`10AM`,`1st Lesson`,`2 Kings 16:1–8`),h(`10AM`,`2nd Lesson`,`Ephesians 6:1–8`),h(`6PM`,`1st Lesson`,`2 Kings 17:13–23`)]}),g({id:`JUL-01`,date:`2026-07-01`,displayDate:`Wednesday 1st July 2026`,day:`Wednesday`,month:`July`,readings:[h(`6PM`,`1st Lesson`,`Genesis 3:1–8`)]}),g({id:`JUL-02`,date:`2026-07-02`,displayDate:`Thursday 2nd July 2026`,day:`Thursday`,month:`July`,special:`New Moon Service`,readings:[h(`10PM`,`1st Lesson`,`Genesis 2:18–25`,`New Moon Service`)],sourceNote:`The source webpage places this July reading under the incorrect heading Thursday 4th June 2026. It has been normalized to the first Thursday of July 2026.`}),g({id:`JUL-03`,date:`2026-07-03`,displayDate:`Friday 3rd July 2026`,day:`Friday`,month:`July`,readings:[h(`6PM`,`1st Lesson`,`Luke 1:26–38`)]}),g({id:`JUL-05`,date:`2026-07-05`,displayDate:`Sunday 5th July 2026`,day:`Sunday`,month:`July`,readings:[h(`10AM`,`1st Lesson`,`Genesis 3:1–16`),h(`10AM`,`2nd Lesson`,`Luke 1:39–55`),h(`6PM`,`1st Lesson`,`Luke 2:1–8`)]}),g({id:`JUL-08`,date:`2026-07-08`,displayDate:`Wednesday 8th July 2026`,day:`Wednesday`,month:`July`,readings:[h(`6PM`,`1st Lesson`,`Luke 7:36–50`)]}),g({id:`JUL-10`,date:`2026-07-10`,displayDate:`Friday 10th July 2026`,day:`Friday`,month:`July`,readings:[h(`6PM`,`1st Lesson`,`John 8:1–11`)]}),g({id:`JUL-12`,date:`2026-07-12`,displayDate:`Sunday 12th July 2026`,day:`Sunday`,month:`July`,readings:[h(`10AM`,`1st Lesson`,`Joshua 2:1–21`),h(`10AM`,`2nd Lesson`,`John 4:19–39`),h(`6PM`,`1st Lesson`,`Genesis 38:24–30`)]}),g({id:`JUL-15`,date:`2026-07-15`,displayDate:`Wednesday 15th July 2026`,day:`Wednesday`,month:`July`,readings:[h(`6PM`,`1st Lesson`,`1 Kings 21:1–16`)]}),g({id:`JUL-17`,date:`2026-07-17`,displayDate:`Friday 17th July 2026`,day:`Friday`,month:`July`,readings:[h(`6PM`,`1st Lesson`,`Matthew 27:15–26`)]}),g({id:`JUL-19`,date:`2026-07-19`,displayDate:`Sunday 19th July 2026`,day:`Sunday`,month:`July`,readings:[h(`10AM`,`1st Lesson`,`2 Samuel 6:19–23`),h(`10AM`,`2nd Lesson`,`Mark 6:14–29`),h(`6PM`,`1st Lesson`,`Esther 7:1–10`)]}),g({id:`JUL-22`,date:`2026-07-22`,displayDate:`Wednesday 22nd July 2026`,day:`Wednesday`,month:`July`,readings:[h(`6PM`,`1st Lesson`,`1 Samuel 2:1–10`)]}),g({id:`JUL-24`,date:`2026-07-24`,displayDate:`Friday 24th July 2026`,day:`Friday`,month:`July`,readings:[h(`6PM`,`1st Lesson`,`Luke 1:46–56`)]}),g({id:`JUL-26`,date:`2026-07-26`,displayDate:`Sunday 26th July 2026`,day:`Sunday`,month:`July`,readings:[h(`10AM`,`1st Lesson`,`1 Samuel 1:1–20`),h(`10AM`,`2nd Lesson`,`Luke 2:25–39`),h(`6PM`,`1st Lesson`,`Exodus 15:11–21`)]}),g({id:`JUL-29`,date:`2026-07-29`,displayDate:`Wednesday 29th July 2026`,day:`Wednesday`,month:`July`,readings:[h(`6PM`,`1st Lesson`,`Judges 4:1–9`)]}),g({id:`JUL-31`,date:`2026-07-31`,displayDate:`Friday 31st July 2026`,day:`Friday`,month:`July`,readings:[h(`6PM`,`1st Lesson`,`Esther 2:5–17`)]}),g({id:`AUG-02`,date:`2026-08-02`,displayDate:`Sunday 2nd August 2026`,day:`Sunday`,month:`August`,readings:[h(`10AM`,`1st Lesson`,`1 Samuel 25:21–40`),h(`10AM`,`2nd Lesson`,`Acts 5:1–10`),h(`6PM`,`1st Lesson`,`Acts 9:36–43`)]}),g({id:`AUG-05`,date:`2026-08-05`,displayDate:`Wednesday 5th August 2026`,day:`Wednesday`,month:`August`,readings:[h(`6PM`,`1st Lesson`,`Nehemiah 10:34–39`)]}),g({id:`AUG-06`,date:`2026-08-06`,displayDate:`Thursday 6th August 2026`,day:`Thursday`,month:`August`,special:`New Moon Service`,readings:[h(`10PM`,`1st Lesson`,`Genesis 14:10–20`,`New Moon Service`)]}),g({id:`AUG-07`,date:`2026-08-07`,displayDate:`Friday 7th August 2026`,day:`Friday`,month:`August`,readings:[h(`6PM`,`1st Lesson`,`Leviticus 27:28–34`)]}),g({id:`AUG-09`,date:`2026-08-09`,displayDate:`Sunday 9th August 2026`,day:`Sunday`,month:`August`,readings:[h(`10AM`,`1st Lesson`,`Malachi 3:7–12`),h(`10AM`,`2nd Lesson`,`Hebrews 7:4–10`),h(`6PM`,`1st Lesson`,`Luke 18:10–14`)]}),g({id:`AUG-12`,date:`2026-08-12`,displayDate:`Wednesday 12th August 2026`,day:`Wednesday`,month:`August`,readings:[h(`6PM`,`1st Lesson`,`2 Chronicles 31:1–12`)]}),g({id:`AUG-14`,date:`2026-08-14`,displayDate:`Friday 14th August 2026`,day:`Friday`,month:`August`,readings:[h(`6PM`,`1st Lesson`,`Deuteronomy 12:4–12`)]}),g({id:`AUG-16`,date:`2026-08-16`,displayDate:`Sunday 16th August 2026`,day:`Sunday`,month:`August`,readings:[h(`10AM`,`1st Lesson`,`Deuteronomy 14:22–29`),h(`10AM`,`2nd Lesson`,`Galatians 6:3–10`),h(`6PM`,`1st Lesson`,`Deuteronomy 26:12–19`)]}),g({id:`AUG-19`,date:`2026-08-19`,displayDate:`Wednesday 19th August 2026`,day:`Wednesday`,month:`August`,readings:[h(`6PM`,`1st Lesson`,`1 Kings 17:8–16`)]}),g({id:`AUG-21`,date:`2026-08-21`,displayDate:`Friday 21st August 2026`,day:`Friday`,month:`August`,readings:[h(`6PM`,`1st Lesson`,`2 Kings 4:8–17`)]}),g({id:`AUG-23`,date:`2026-08-23`,displayDate:`Sunday 23rd August 2026`,day:`Sunday`,month:`August`,readings:[h(`10AM`,`1st Lesson`,`Genesis 18:1–14`),h(`10AM`,`2nd Lesson`,`Hebrews 13:1–8`),h(`6PM`,`1st Lesson`,`Luke 8:30–38`)]}),g({id:`AUG-26`,date:`2026-08-26`,displayDate:`Wednesday 26th August 2026`,day:`Wednesday`,month:`August`,readings:[h(`6PM`,`1st Lesson`,`Luke 10:25–37`)]}),g({id:`AUG-28`,date:`2026-08-28`,displayDate:`Friday 28th August 2026`,day:`Friday`,month:`August`,readings:[h(`6PM`,`1st Lesson`,`1 Chronicles 21:17–27`)]}),g({id:`AUG-30`,date:`2026-08-30`,displayDate:`Sunday 30th August 2026`,day:`Sunday`,month:`August`,readings:[h(`10AM`,`1st Lesson`,`John 17:1–16`),h(`10AM`,`2nd Lesson`,`Luke 21:1–6`),h(`6PM`,`1st Lesson`,`Exodus 35:4–9`)],sourceNote:`John 17:1–16 is confirmed by an additional CCC 2026 lesson source. The Elephant & Castle webpage displays '1 John 17:1–16', which is an apparent transcription error.`}),g({id:`SEP-02`,date:`2026-09-02`,displayDate:`Wednesday 2nd September 2026`,day:`Wednesday`,month:`September`,readings:[h(`6PM`,`1st Lesson`,`Matthew 16:13–18`)]}),g({id:`SEP-03`,date:`2026-09-03`,displayDate:`Thursday 3rd September 2026`,day:`Thursday`,month:`September`,special:`New Moon Service`,readings:[h(`10PM`,`1st Lesson`,`Acts 11:19–26`,`New Moon Service`)]}),g({id:`SEP-04`,date:`2026-09-04`,displayDate:`Friday 4th September 2026`,day:`Friday`,month:`September`,readings:[h(`6PM`,`1st Lesson`,`Acts 15:5–20`)]}),g({id:`SEP-06`,date:`2026-09-06`,displayDate:`Sunday 6th September 2026`,day:`Sunday`,month:`September`,readings:[h(`10AM`,`1st Lesson`,`Genesis 46:1–7`),h(`10AM`,`2nd Lesson`,`Acts 2:29–41`),h(`6PM`,`1st Lesson`,`Acts 2:38–47`)]}),g({id:`SEP-09`,date:`2026-09-09`,displayDate:`Wednesday 9th September 2026`,day:`Wednesday`,month:`September`,readings:[h(`6PM`,`1st Lesson`,`Leviticus 26:1–13`)]}),g({id:`SEP-10`,date:`2026-09-10`,displayDate:`Thursday 10th September 2026`,day:`Thursday`,month:`September`,readings:[h(``,`1st Lesson`,`Revelation 14:6–13`)]}),g({id:`SEP-11`,date:`2026-09-11`,displayDate:`Friday 11th September 2026`,day:`Friday`,month:`September`,readings:[h(`6PM`,`1st Lesson`,`Acts 13:1–12`)]}),g({id:`SEP-13`,date:`2026-09-13`,displayDate:`Sunday 13th September 2026`,day:`Sunday`,month:`September`,readings:[h(`10AM`,`1st Lesson`,`Exodus 14:19–31`),h(`10AM`,`2nd Lesson`,`1 Corinthians 10:1–11`),h(`6PM`,`1st Lesson`,`1 Corinthians 10:17–23`)]}),g({id:`SEP-16`,date:`2026-09-16`,displayDate:`Wednesday 16th September 2026`,day:`Wednesday`,month:`September`,readings:[h(`6PM`,`1st Lesson`,`Acts 9:1–8`)]}),g({id:`SEP-18`,date:`2026-09-18`,displayDate:`Friday 18th September 2026`,day:`Friday`,month:`September`,readings:[h(`6PM`,`1st Lesson`,`Ephesians 4:1–13`)]}),g({id:`SEP-20`,date:`2026-09-20`,displayDate:`Sunday 20th September 2026`,day:`Sunday`,month:`September`,readings:[h(`10AM`,`1st Lesson`,`Numbers 11:10–26`),h(`10AM`,`2nd Lesson`,`1 Corinthians 12:1–14`),h(`6PM`,`1st Lesson`,`Numbers 11:25–30`)]}),g({id:`SEP-23`,date:`2026-09-23`,displayDate:`Wednesday 23rd September 2026`,day:`Wednesday`,month:`September`,readings:[h(`6PM`,`1st Lesson`,`Matthew 18:12–20`)]}),g({id:`SEP-25`,date:`2026-09-25`,displayDate:`Friday 25th September 2026`,day:`Friday`,month:`September`,readings:[h(`6PM`,`1st Lesson`,`Matthew 16:13–21`)]}),g({id:`SEP-27`,date:`2026-09-27`,displayDate:`Sunday 27th September 2026`,day:`Sunday`,month:`September`,readings:[h(`10AM`,`1st Lesson`,`Exodus 19:1–11`),h(`10AM`,`2nd Lesson`,`Revelation 1:1–11`),h(`6PM`,`1st Lesson`,`Exodus 3:13–18`)]}),g({id:`SEP-30`,date:`2026-09-30`,displayDate:`Wednesday 30th September 2026`,day:`Wednesday`,month:`September`,readings:[h(`6PM`,`1st Lesson`,`Job 1:1–12`)]}),g({id:`OCT-01`,date:`2026-10-01`,displayDate:`Thursday 1st October 2026`,day:`Thursday`,month:`October`,special:`New Moon Service`,readings:[h(`10PM`,`1st Lesson`,`Genesis 3:1–7`,`New Moon Service`)]}),g({id:`OCT-02`,date:`2026-10-02`,displayDate:`Friday 2nd October 2026`,day:`Friday`,month:`October`,readings:[h(`6PM`,`1st Lesson`,`Exodus 32:1–8`)]}),g({id:`OCT-04`,date:`2026-10-04`,displayDate:`Sunday 4th October 2026`,day:`Sunday`,month:`October`,special:`Adult Harvest — Porto-Novo`,readings:[h(`10AM`,`1st Lesson`,`Ezekiel 28:12–19`,`Sunday Morning`),h(`10AM`,`2nd Lesson`,`John 8:42–49`,`Sunday Morning`),h(`7PM`,`1st Lesson`,`Ezekiel 14:1–8`,`Sunday Evening`)]}),g({id:`OCT-07`,date:`2026-10-07`,displayDate:`Wednesday 7th October 2026`,day:`Wednesday`,month:`October`,readings:[h(`6PM`,`1st Lesson`,`Jude 1:4–11`)]}),g({id:`OCT-09`,date:`2026-10-09`,displayDate:`Friday 9th October 2026`,day:`Friday`,month:`October`,readings:[h(`6PM`,`1st Lesson`,`Luke 4:1–13`)]}),g({id:`OCT-11`,date:`2026-10-11`,displayDate:`Sunday 11th October 2026`,day:`Sunday`,month:`October`,readings:[h(`10AM`,`1st Lesson`,`Numbers 16:1–14`,`Sunday Morning`),h(`10AM`,`2nd Lesson`,`2 Thessalonians 2:3–10`,`Sunday Morning`),h(`7PM`,`1st Lesson`,`Revelation 5:1–5`,`Sunday Evening`)]}),g({id:`OCT-14`,date:`2026-10-14`,displayDate:`Wednesday 14th October 2026`,day:`Wednesday`,month:`October`,special:`Service of Songs — Papa Oshoffa`,readings:[h(`6PM`,`1st Lesson`,`Nehemiah 4:1–11`,`Service of Songs — Papa Oshoffa`)]}),g({id:`OCT-16`,date:`2026-10-16`,displayDate:`Friday 16th October 2026`,day:`Friday`,month:`October`,readings:[h(`6PM`,`1st Lesson`,`Matthew 15:10–20`)]}),g({id:`OCT-18`,date:`2026-10-18`,displayDate:`Sunday 18th October 2026`,day:`Sunday`,month:`October`,readings:[h(`10AM`,`1st Lesson`,`Zechariah 3:1–8`,`Sunday Morning`),h(`10AM`,`2nd Lesson`,`Revelation 12:7–12`,`Sunday Morning`),h(`7PM`,`1st Lesson`,`Ecclesiastes 3:16–22`,`Sunday Evening`)]}),g({id:`OCT-19`,date:`2026-10-19`,displayDate:`Monday 19th October 2026`,day:`Monday`,month:`October`,special:`Remembrance of the Founder`,readings:[h(`10AM`,`1st Lesson`,`Job 19:23–29`,`Remembrance of the Founder`),h(`10AM`,`2nd Lesson`,`1 Corinthians 3:9–15`,`Remembrance of the Founder`)]}),g({id:`OCT-21`,date:`2026-10-21`,displayDate:`Wednesday 21st October 2026`,day:`Wednesday`,month:`October`,readings:[h(`6PM`,`1st Lesson`,`1 Chronicles 21:1–10`)]}),g({id:`OCT-23`,date:`2026-10-23`,displayDate:`Friday 23rd October 2026`,day:`Friday`,month:`October`,readings:[h(`6PM`,`1st Lesson`,`Matthew 16:21–28`)]}),g({id:`OCT-25`,date:`2026-10-25`,displayDate:`Sunday 25th October 2026`,day:`Sunday`,month:`October`,readings:[h(`10AM`,`1st Lesson`,`Job 2:1–10`,`Sunday Morning`),h(`10AM`,`2nd Lesson`,`Acts 5:1–6`,`Sunday Morning`),h(`7PM`,`1st Lesson`,`Luke 8:11–14`,`Sunday Evening`)]}),g({id:`OCT-28`,date:`2026-10-28`,displayDate:`Wednesday 28th October 2026`,day:`Wednesday`,month:`October`,readings:[h(`6PM`,`1st Lesson`,`Mark 15:14–20`)]}),g({id:`OCT-30`,date:`2026-10-30`,displayDate:`Friday 30th October 2026`,day:`Friday`,month:`October`,readings:[h(`6PM`,`1st Lesson`,`1 Peter 5:1–10`)]}),g({id:`NOV-01`,date:`2026-11-01`,displayDate:`Sunday 1st November 2026`,day:`Sunday`,month:`November`,readings:[h(`10AM`,`1st Lesson`,`2 Kings 23:4–9`,`Sunday Morning`),h(`10AM`,`2nd Lesson`,`Ephesians 4:17–32`,`Sunday Morning`),h(`7PM`,`1st Lesson`,`James 4:5–10`,`Sunday Evening`)]}),g({id:`NOV-04`,date:`2026-11-04`,displayDate:`Wednesday 4th November 2026`,day:`Wednesday`,month:`November`,readings:[h(`6PM`,`1st Lesson`,`Genesis 3:1–7`)]}),g({id:`NOV-05`,date:`2026-11-05`,displayDate:`Thursday 5th November 2026`,day:`Thursday`,month:`November`,special:`New Moon Service`,readings:[h(`10PM`,`1st Lesson`,`Genesis 2:14–20`,`New Moon Service`)]}),g({id:`NOV-06`,date:`2026-11-06`,displayDate:`Friday 6th November 2026`,day:`Friday`,month:`November`,readings:[h(`6PM`,`1st Lesson`,`2 Kings 4:38–41`)]}),g({id:`NOV-08`,date:`2026-11-08`,displayDate:`Sunday 8th November 2026`,day:`Sunday`,month:`November`,readings:[h(`10AM`,`1st Lesson`,`Genesis 3:9–19`,`Sunday Morning`),h(`10AM`,`2nd Lesson`,`1 Corinthians 15:51–56`,`Sunday Morning`),h(`7PM`,`1st Lesson`,`Romans 7:2–11`,`Sunday Evening`)]}),g({id:`NOV-11`,date:`2026-11-11`,displayDate:`Wednesday 11th November 2026`,day:`Wednesday`,month:`November`,readings:[h(`6PM`,`1st Lesson`,`Proverbs 20:17–22`)]}),g({id:`NOV-13`,date:`2026-11-13`,displayDate:`Friday 13th November 2026`,day:`Friday`,month:`November`,readings:[h(`6PM`,`1st Lesson`,`Proverbs 5:1–6`)]}),g({id:`NOV-15`,date:`2026-11-15`,displayDate:`Sunday 15th November 2026`,day:`Sunday`,month:`November`,special:`Adult Harvest — Arch-Dioc. Ketu`,readings:[h(`10AM`,`1st Lesson`,`Proverbs 13:11–15`,`Sunday Morning`),h(`10AM`,`2nd Lesson`,`1 Timothy 6:4–11`,`Sunday Morning`),h(`7PM`,`1st Lesson`,`Deuteronomy 28:15–22`,`Sunday Evening`)]}),g({id:`NOV-18`,date:`2026-11-18`,displayDate:`Wednesday 18th November 2026`,day:`Wednesday`,month:`November`,readings:[h(`6PM`,`1st Lesson`,`Romans 6:19–23`)]}),g({id:`NOV-20`,date:`2026-11-20`,displayDate:`Friday 20th November 2026`,day:`Friday`,month:`November`,readings:[h(`6PM`,`1st Lesson`,`Job 20:1–16`)]}),g({id:`NOV-22`,date:`2026-11-22`,displayDate:`Sunday 22nd November 2026`,day:`Sunday`,month:`November`,special:`CCC City of the Living God Harvest`,readings:[h(`10AM`,`1st Lesson`,`1 Samuel 25:32–38`,`Sunday Morning`),h(`10AM`,`2nd Lesson`,`Romans 1:24–32`,`Sunday Morning`),h(`7PM`,`1st Lesson`,`Psalms 10:4–15`,`Sunday Evening`)]}),g({id:`NOV-25`,date:`2026-11-25`,displayDate:`Wednesday 25th November 2026`,day:`Wednesday`,month:`November`,readings:[h(`6PM`,`1st Lesson`,`Mark 5:37–43`)]}),g({id:`NOV-27`,date:`2026-11-27`,displayDate:`Friday 27th November 2026`,day:`Friday`,month:`November`,readings:[h(`6PM`,`1st Lesson`,`2 Kings 4:32–37`)]}),g({id:`NOV-29`,date:`2026-11-29`,displayDate:`Sunday 29th November 2026`,day:`Sunday`,month:`November`,readings:[h(`10AM`,`1st Lesson`,`Psalms 51:1–9`,`Sunday Morning`),h(`10AM`,`2nd Lesson`,`1 Corinthians 15:51–58`,`Sunday Morning`),h(`7PM`,`1st Lesson`,`1 Corinthians 15:21–28`,`Sunday Evening`)]}),g({id:`DEC-02`,date:`2026-12-02`,displayDate:`Wednesday 2nd December 2026`,day:`Wednesday`,month:`December`,readings:[h(`6PM`,`1st Lesson`,`Genesis 49:8–12`)]}),g({id:`DEC-03`,date:`2026-12-03`,displayDate:`Thursday 3rd December 2026`,day:`Thursday`,month:`December`,special:`New Moon Service`,readings:[h(`10PM`,`1st Lesson`,`Exodus 3:14–21`,`New Moon Service`)]}),g({id:`DEC-04`,date:`2026-12-04`,displayDate:`Friday 4th December 2026`,day:`Friday`,month:`December`,readings:[h(`6PM`,`1st Lesson`,`Deuteronomy 14:8–20`)]}),g({id:`DEC-06`,date:`2026-12-06`,displayDate:`Sunday 6th December 2026`,day:`Sunday`,month:`December`,readings:[h(`10AM`,`1st Lesson`,`Genesis 14:14–24`,`Sunday Morning`),h(`10AM`,`2nd Lesson`,`John 8:51–59`,`Sunday Morning`),h(`7PM`,`1st Lesson`,`Psalms 10:1–7`,`Sunday Evening`)]}),g({id:`DEC-09`,date:`2026-12-09`,displayDate:`Wednesday 9th December 2026`,day:`Wednesday`,month:`December`,readings:[h(`6PM`,`1st Lesson`,`Isaiah 8:5–13`)]}),g({id:`DEC-11`,date:`2026-12-11`,displayDate:`Friday 11th December 2026`,day:`Friday`,month:`December`,readings:[h(`6PM`,`1st Lesson`,`Deuteronomy 18:13–19`)]}),g({id:`DEC-13`,date:`2026-12-13`,displayDate:`Sunday 13th December 2026`,day:`Sunday`,month:`December`,readings:[h(`10AM`,`1st Lesson`,`Micah 5:1–9`,`Sunday Morning`),h(`10AM`,`2nd Lesson`,`Matthew 2:1–8`,`Sunday Morning`),h(`7PM`,`1st Lesson`,`Amos 9:8–15`,`Sunday Evening`)]}),g({id:`DEC-16`,date:`2026-12-16`,displayDate:`Wednesday 16th December 2026`,day:`Wednesday`,month:`December`,readings:[h(`6PM`,`1st Lesson`,`Jeremiah 31:31–38`)]}),g({id:`DEC-18`,date:`2026-12-18`,displayDate:`Friday 18th December 2026`,day:`Friday`,month:`December`,special:`Special Week as Preparation for Christmas — 18th to 24th December`,readings:[h(`6PM`,`1st Lesson`,`Isaiah 44:1–5`)]}),g({id:`DEC-20`,date:`2026-12-20`,displayDate:`Sunday 20th December 2026`,day:`Sunday`,month:`December`,special:`Special Week as Preparation for Christmas`,readings:[h(`10AM`,`1st Lesson`,`Isaiah 66:15–24`,`Sunday Morning`),h(`10AM`,`2nd Lesson`,`Revelation 3:1–6`,`Sunday Morning`),h(`12AM`,`1st Lesson`,`Acts 4:8–12`,`Sunday Midnight Service`)]}),g({id:`DEC-23`,date:`2026-12-23`,displayDate:`Wednesday 23rd December 2026`,day:`Wednesday`,month:`December`,special:`Special Week as Preparation for Christmas`,readings:[h(`6PM`,`1st Lesson`,`Luke 1:26–38`)]}),g({id:`DEC-24`,date:`2026-12-24`,displayDate:`Thursday 24th December 2026`,day:`Thursday`,month:`December`,special:`Christmas Eve`,readings:[h(`10PM`,`1st Lesson`,`Isaiah 42:1–9`,`Christmas Eve`),h(`10PM`,`2nd Lesson`,`Romans 15:8–13`,`Christmas Eve`)]}),g({id:`DEC-25`,date:`2026-12-25`,displayDate:`Friday 25th December 2026`,day:`Friday`,month:`December`,special:`Christmas Day`,readings:[h(`10AM`,`1st Lesson`,`Isaiah 11:1–9`,`Christmas Day Morning`),h(`10AM`,`2nd Lesson`,`Luke 2:1–20`,`Christmas Day Morning`),h(`7PM`,`1st Lesson`,`Isaiah 9:1–7`,`Christmas Day Evening`)]}),g({id:`DEC-27`,date:`2026-12-27`,displayDate:`Sunday 27th December 2026`,day:`Sunday`,month:`December`,readings:[h(`10AM`,`1st Lesson`,`Isaiah 25:1–10`,`Sunday Morning`),h(`10AM`,`2nd Lesson`,`1 John 2:7–17`,`Sunday Morning`),h(`7PM`,`1st Lesson`,`Matthew 1:1–17`,`Sunday Evening`)]}),g({id:`DEC-30`,date:`2026-12-30`,displayDate:`Wednesday 30th December 2026`,day:`Wednesday`,month:`December`,readings:[h(`6PM`,`1st Lesson`,`1 Chronicles 17:16–27`)]}),g({id:`DEC-31`,date:`2026-12-31`,displayDate:`Thursday 31st December 2026`,day:`Thursday`,month:`December`,special:`New Year's Eve`,readings:[h(`10PM`,`1st Lesson`,`Isaiah 60:1–9`,`New Year's Eve`),h(`10PM`,`2nd Lesson`,`Ephesians 2:1–5`,`New Year's Eve`)]})],v=e((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),y=e(((e,t)=>{t.exports=v()}))(),b=[{icon:`☀️`,day:`Sunday`,title:`Sunday Worship`,time:`10:00 am`},{icon:`🔎`,day:`Wednesday`,title:`Seekers' Service`,time:`9:00 am`},{icon:`🤍`,day:`Wednesday`,title:`Mercy Day Service`,time:`6:00 pm`},{icon:`🕊️`,day:`Friday`,title:`Prophets and Prophetess Service`,time:`9:00 pm`},{icon:`🔥`,day:`Friday`,title:`Power Day Service`,time:`6:00 pm`},{icon:`🌙`,day:`First Thursday`,title:`New Moon Service`,time:`Monthly · time to be confirmed`}],x=[{id:`welcome`,icon:`🏠`,label:`Home`,tone:`plain`},{id:`choir`,icon:`🎤`,label:`Choir`,tone:`blue`},{id:`hymns`,icon:`🎼`,label:`Hymns`,tone:`plain`},{id:`lessons`,icon:`📖`,label:`Bible Lessons`,tone:`plain`},{id:`events`,icon:`📅`,label:`Events`,tone:`plain`},{id:`vigil`,icon:`🌙`,label:`Vigil`,tone:`green`},{id:`contact`,icon:`☎️`,label:`Contact Us`,tone:`pink`}],ee=[`October`,`November`,`December`],S=(e=``)=>{let t=`English Version`,n=`Yoruba Version`;if(e.includes(t)&&e.includes(n)){let[r,i]=e.split(t)[1].split(n);return{english:r.trim(),yoruba:(i||``).trim()}}return{english:e.trim(),yoruba:``}};function C(){let[e,t]=(0,l.useState)(()=>localStorage.getItem(`dop-theme`)||`bright`),[n,r]=(0,l.useState)(`welcome`),[i,a]=(0,l.useState)(``),[pickerOpen,setPickerOpen]=(0,l.useState)(false),[visibleCount,setVisibleCount]=(0,l.useState)(40),[o,s]=(0,l.useState)(null),[c,u]=(0,l.useState)(18),[h,g]=(0,l.useState)(`October`);(0,l.useEffect)(()=>{document.documentElement.dataset.theme=e,localStorage.setItem(`dop-theme`,e)},[e]);let v=(0,l.useMemo)(()=>{const normalizeHymnSearch=value=>String(value??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[\u0027’‘]/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim();let e=normalizeHymnSearch(i);return e?m.filter(t=>/^\d+$/.test(e)?Number(t.number)===Number(e):e.split(" ").every(word=>normalizeHymnSearch(`${t.title} ${t.category} ${t.lyrics}`).includes(word))):m},[i]),C=(0,l.useMemo)(()=>_.filter(e=>e.month===h).map(e=>({...e,parishReadings:e.readings.map(t=>{let n=e.day===`Sunday`&&t.time.toUpperCase()===`7PM`,r=t.service||(e.day===`Sunday`&&t.time.toUpperCase()===`10AM`?`Sunday Morning`:``)||e.special||`${e.day} Service`;return{...t,time:n?`6PM`:t.time,service:n?`Sunday Evening`:r}})})).filter(e=>e.parishReadings.length),[h]),te=e=>{r(e);if(e===`hymns`){setPickerOpen(true);s(null)}window.history.replaceState(null,``,`#${e}`),document.getElementById(e)?.scrollIntoView({behavior:`smooth`,block:`start`})},ne=e=>{if(!o)return;let t=m.findIndex(e=>e.number===o.number),n=Math.min(m.length-1,Math.max(0,t+e));s(m[n])},re=o?S(o.lyrics):null;return(0,y.jsxs)(`div`,{className:`app-shell`,children:[(0,y.jsxs)(`header`,{id:`banner`,className:`parish-banner`,style:{"--church":`url(${d})`},children:[(0,y.jsx)(`div`,{className:`banner-glow`}),(0,y.jsx)(`img`,{className:`ccc-emblem`,src:f,alt:`Celestial Church of Christ rainbow emblem`}),(0,y.jsxs)(`div`,{className:`banner-copy`,children:[(0,y.jsx)(`p`,{children:`Celestial Church of Christ`}),(0,y.jsx)(`h1`,{children:`Destination of Peace Parish`}),(0,y.jsx)(`div`,{className:`ornament`,children:`◆`}),(0,y.jsx)(`blockquote`,{children:`“Peace I leave with you; my peace I give you.”`}),(0,y.jsx)(`cite`,{children:`John 14:27`}),(0,y.jsx)(`a`,{className:`address-pill`,href:`https://maps.google.com/?q=41+Anne+Road+Smethwick+B66+2NZ`,target:`_blank`,rel:`noreferrer`,children:`📍 41 Anne Road, Smethwick, B66 2NZ, England`})]})]}),(0,y.jsxs)(`main`,{children:[(0,y.jsxs)(`section`,{className:`shepherd-strip`,"aria-label":`Parish contact`,children:[(0,y.jsx)(`span`,{className:`cross`,children:`✝`}),(0,y.jsx)(`span`,{children:`Shepherd in Charge:`}),(0,y.jsx)(`strong`,{children:`AVSE Adewale John Anjorin`}),(0,y.jsx)(`a`,{href:`tel:+447480939310`,children:`☎ 07480 939310`}),(0,y.jsx)(`a`,{href:`mailto:admin@cccdestinationofpeace.org`,children:`✉ admin@cccdestinationofpeace.org`})]}),(0,y.jsxs)(`section`,{className:`appearance-panel`,"aria-label":`Appearance`,children:[(0,y.jsx)(`b`,{children:`Appearance`}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`button`,{className:e===`dark`?`active`:``,onClick:()=>t(`dark`),"aria-pressed":e===`dark`,children:`🌙 Dark`}),(0,y.jsx)(`button`,{className:e===`bright`?`active`:``,onClick:()=>t(`bright`),"aria-pressed":e===`bright`,children:`☀️ Bright`}),(0,y.jsx)(`button`,{className:e===`cool`?`active`:``,onClick:()=>t(`cool`),"aria-pressed":e===`cool`,children:`❄️ Cool`})]})]}),(0,y.jsx)(`nav`,{className:`dashboard-grid`,"aria-label":`Parish sections`,children:x.map(e=>(0,y.jsxs)(`button`,{className:`dashboard-card ${e.tone} ${n===e.id?`selected`:``}`,onClick:()=>te(e.id),children:[(0,y.jsx)(`span`,{children:e.icon}),(0,y.jsx)(`b`,{children:e.label})]},e.id))}),(0,y.jsxs)(`section`,{id:`welcome`,className:`welcome-card`,children:[(0,y.jsxs)(`div`,{className:`welcome-intro`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`span`,{className:`section-kicker`,children:`Your parish online`}),(0,y.jsx)(`h2`,{children:`Welcome to CCC Destination of Peace Parish`}),(0,y.jsx)(`p`,{children:`Your online platform for fellowship, worship, hymns, Bible lessons, events, prayer and parish connection. Wherever you are, stay connected and grow with us in faith and peace.`})]}),(0,y.jsxs)(`blockquote`,{children:[`“The Lord will give strength unto his people; the Lord will bless his people with peace.” `,(0,y.jsx)(`cite`,{children:`Psalm 29:11`})]})]}),(0,y.jsx)(`div`,{className:`service-grid`,children:b.map(e=>(0,y.jsxs)(`article`,{children:[(0,y.jsx)(`span`,{children:e.icon}),(0,y.jsx)(`small`,{children:e.day}),(0,y.jsx)(`h3`,{children:e.title}),(0,y.jsx)(`strong`,{children:e.time})]},e.title))})]}),(0,y.jsxs)(`section`,{id:`choir`,className:`content-card choir-card`,children:[(0,y.jsx)(`div`,{className:`card-icon`,children:`🎤`}),(0,y.jsx)(`span`,{className:`section-kicker`,children:`Destination of Peace Choir`}),(0,y.jsx)(`h2`,{children:`Sing, rehearse and worship together`}),(0,y.jsx)(`p`,{children:`The choir meeting room supports rehearsals, song preparation, announcements and fellowship.`}),(0,y.jsx)(`a`,{className:`action-button gold`,href:`https://meet.jit.si/DestinationOfPeaceParishChoir`,target:`_blank`,rel:`noreferrer`,children:`Enter Choir Meeting Room`})]}),(0,y.jsxs)(`section`,{id:`hymns`,className:`content-card`,children:[(0,y.jsx)(`span`,{className:`section-kicker`,children:`Worship library`}),(0,y.jsx)(`h2`,{children:`CCC Hymns`}),(0,y.jsx)(`p`,{children:`Choose a hymn by number or title.`}),!pickerOpen?(0,y.jsx)(`button`,{className:`action-button gold`,onClick:()=>setPickerOpen(true),children:`🎼 All hymns — choose a hymn`}):(0,y.jsxs)(l.Fragment,{children:[(0,y.jsxs)(`label`,{className:`search-box`,children:[`Search hymns`,(0,y.jsx)(`input`,{value:i,onChange:e=>a(e.target.value),placeholder:`Number, English or Yoruba lyrics`})]}),(0,y.jsx)(`div`,{className:`hymn-grid`,children:v.slice(0,i.trim()?20:visibleCount).map(e=>(0,y.jsxs)(`button`,{onClick:()=>s(e),children:[(0,y.jsxs)(`small`,{children:[`Hymn `,e.number]}),(0,y.jsx)(`b`,{children:e.title}),(0,y.jsx)(`span`,{children:e.category})]},e.number))}),(0,y.jsx)(`p`,{role:`status`,children:!i.trim()?`Showing ${Math.min(visibleCount,v.length)} of ${v.length} hymns. Search by number, English title or Yoruba lyrics.`:v.length?`${v.length} matching hymn(s). Refine your search if needed.`:`No hymns match your search.`}),(0,y.jsxs)(l.Fragment,{children:[!i.trim()&&v.length>visibleCount&&(0,y.jsx)(`button`,{className:`action-button gold`,onClick:()=>setVisibleCount(e=>e+40),children:`Load 40 more hymns`}),(0,y.jsx)(`button`,{className:`action-button`,onClick:()=>setPickerOpen(false),children:`Close hymn selector`})]})]})]}),(0,y.jsxs)(`section`,{id:`lessons`,className:`content-card`,children:[(0,y.jsx)(`span`,{className:`section-kicker`,children:`CCC worldwide readings`}),(0,y.jsx)(`h2`,{children:`Bible Lessons`}),(0,y.jsx)(`div`,{className:`month-tabs`,"aria-label":`Bible lesson month`,children:ee.map(e=>(0,y.jsx)(`button`,{className:h===e?`active`:``,onClick:()=>g(e),children:e},e))}),(0,y.jsx)(`div`,{className:`lesson-list`,children:C.map(e=>(0,y.jsxs)(`article`,{children:[(0,y.jsxs)(`div`,{className:`lesson-date`,children:[(0,y.jsx)(`b`,{children:e.day}),(0,y.jsx)(`time`,{children:e.displayDate.replace(`${e.day} `,``)}),e.special&&(0,y.jsx)(`em`,{children:e.special})]}),(0,y.jsx)(`div`,{className:`lesson-readings`,children:e.parishReadings.map((t,n)=>(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`small`,{children:t.service}),(0,y.jsxs)(`span`,{children:[t.time,` · `,t.lesson]}),(0,y.jsx)(`strong`,{children:t.scripture})]},`${e.id}-${t.time}-${t.lesson}-${n}`))})]},e.id))})]}),(0,y.jsxs)(`section`,{id:`events`,className:`content-card`,children:[(0,y.jsx)(`span`,{className:`section-kicker`,children:`Parish calendar`}),(0,y.jsx)(`h2`,{children:`Events and Special Services`}),(0,y.jsxs)(`div`,{className:`event-grid`,children:[(0,y.jsxs)(`article`,{children:[(0,y.jsx)(`time`,{children:`5 NOV`}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`small`,{children:`Monthly worship`}),(0,y.jsx)(`h3`,{children:`New Moon Service`}),(0,y.jsx)(`p`,{children:`First Thursday · time to be confirmed`})]})]}),(0,y.jsxs)(`article`,{children:[(0,y.jsx)(`time`,{children:`3 DEC`}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`small`,{children:`Monthly worship`}),(0,y.jsx)(`h3`,{children:`New Moon Service`}),(0,y.jsx)(`p`,{children:`First Thursday · time to be confirmed`})]})]}),(0,y.jsxs)(`article`,{children:[(0,y.jsx)(`time`,{children:`DEC`}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`small`,{children:`Seasonal gathering`}),(0,y.jsx)(`h3`,{children:`Christmas Programme`}),(0,y.jsx)(`p`,{children:`Details will be announced by the parish.`})]})]})]})]}),(0,y.jsxs)(`section`,{id:`vigil`,className:`content-card vigil-card`,children:[(0,y.jsx)(`div`,{className:`card-icon`,children:`🌙`}),(0,y.jsx)(`span`,{className:`section-kicker`,children:`Watch and pray`}),(0,y.jsx)(`h2`,{children:`Vigil`}),(0,y.jsx)(`p`,{children:`Join us for prayer, worship, Bible teaching and spiritual renewal. The next confirmed theme, date and programme will appear here.`}),(0,y.jsxs)(`blockquote`,{children:[`“Continue steadfastly in prayer, being watchful in it with thanksgiving.” `,(0,y.jsx)(`cite`,{children:`Colossians 4:2`})]}),(0,y.jsx)(`a`,{className:`action-button`,href:`mailto:admin@cccdestinationofpeace.org?subject=Vigil%20Enquiry`,children:`Ask about the next vigil`})]}),(0,y.jsxs)(`section`,{id:`contact`,className:`content-card contact-card`,children:[(0,y.jsx)(`span`,{className:`section-kicker`,children:`Visit or contact us`}),(0,y.jsx)(`h2`,{children:`There is a place for you`}),(0,y.jsxs)(`div`,{className:`contact-grid`,children:[(0,y.jsxs)(`a`,{href:`https://maps.google.com/?q=41+Anne+Road+Smethwick+B66+2NZ`,target:`_blank`,rel:`noreferrer`,children:[(0,y.jsx)(`small`,{children:`Address`}),(0,y.jsxs)(`b`,{children:[`41 Anne Road`,(0,y.jsx)(`br`,{}),`Smethwick, B66 2NZ`,(0,y.jsx)(`br`,{}),`England`]})]}),(0,y.jsxs)(`a`,{href:`tel:+447480939310`,children:[(0,y.jsx)(`small`,{children:`Phone`}),(0,y.jsx)(`b`,{children:`07480 939310`})]}),(0,y.jsxs)(`a`,{href:`mailto:admin@cccdestinationofpeace.org`,children:[(0,y.jsx)(`small`,{children:`Email`}),(0,y.jsx)(`b`,{children:`admin@cccdestinationofpeace.org`})]}),(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`small`,{children:`Shepherd`}),(0,y.jsx)(`b`,{children:`AVSE Adewale John Anjorin`})]})]})]})]}),(0,y.jsxs)(`footer`,{children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`b`,{children:`Celestial Church of Christ`}),(0,y.jsx)(`span`,{children:`Destination of Peace Parish`})]}),(0,y.jsx)(`p`,{children:`© 2026 Destination of Peace Parish`}),(0,y.jsxs)(`a`,{href:`https://obanimistudio-star.github.io/obanimistudio-website/`,target:`_blank`,rel:`noreferrer`,children:[(0,y.jsx)(`img`,{src:p,alt:`ObanimiStudio`}),`Designed and developed by ObanimiStudio`]})]}),o&&re&&(0,y.jsx)(`div`,{className:`modal-backdrop`,onClick:()=>s(null),children:(0,y.jsxs)(`article`,{className:`hymn-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`hymn-title`,onClick:e=>e.stopPropagation(),children:[(0,y.jsxs)(`div`,{className:`hymn-toolbar`,children:[(0,y.jsx)(`button`,{className:`close-button`,onClick:()=>s(null),children:`← Back to search`}),(0,y.jsxs)(`div`,{className:`font-controls`,children:[(0,y.jsx)(`button`,{onClick:()=>u(e=>Math.max(14,e-2)),"aria-label":`Reduce hymn font size`,children:`A−`}),(0,y.jsxs)(`span`,{children:[c,`px`]}),(0,y.jsx)(`button`,{onClick:()=>u(e=>Math.min(32,e+2)),"aria-label":`Increase hymn font size`,children:`A+`})]})]}),(0,y.jsxs)(`small`,{children:[`CCC Hymn `,o.number]}),(0,y.jsx)(`h2`,{id:`hymn-title`,children:o.title}),(0,y.jsxs)(`div`,{className:`bilingual-grid`,style:{"--hymn-font-size":`${c}px`},children:[(0,y.jsxs)(`section`,{children:[(0,y.jsx)(`h3`,{children:`English`}),(0,y.jsx)(`div`,{className:`lyrics-text`,children:re.english})]}),(0,y.jsxs)(`section`,{children:[(0,y.jsx)(`h3`,{children:`Yorùbá`}),(0,y.jsx)(`div`,{className:`lyrics-text`,children:re.yoruba||`Yorùbá version not yet available.`})]})]}),(0,y.jsxs)(`div`,{className:`hymn-navigation`,children:[(0,y.jsx)(`button`,{onClick:()=>ne(-1),disabled:m[0]?.number===o.number,children:`← Previous`}),(0,y.jsx)(`button`,{onClick:()=>ne(1),disabled:m[m.length-1]?.number===o.number,children:`Next →`})]})]})})]})}(0,u.createRoot)(document.getElementById(`root`)).render((0,y.jsx)(l.StrictMode,{children:(0,y.jsx)(C,{})}));