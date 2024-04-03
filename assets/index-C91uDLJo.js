(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const Je=(e,t)=>e===t,ie=Symbol("solid-proxy"),G={equals:Je};let ze=$e;const D=1,J=2,be={owned:null,cleanups:null,context:null,owner:null};var E=null;let re=null,Qe=null,L=null,C=null,B=null,Y=0;function Ae(e,t){const n=L,r=E,o=e.length===0,s=t===void 0?r:t,l=o?be:{owned:null,cleanups:null,context:s?s.context:null,owner:s},i=o?e:()=>e(()=>$(()=>ee(l)));E=l,L=null;try{return M(i,!0)}finally{L=n,E=r}}function I(e,t){t=t?Object.assign({},G,t):G;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),Oe(n,o));return[_e.bind(n),r]}function F(e,t,n){const r=Ce(e,t,!1,D);V(r)}function O(e,t,n){n=n?Object.assign({},G,n):G;const r=Ce(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,V(r),_e.bind(r)}function $(e){if(L===null)return e();const t=L;L=null;try{return e()}finally{L=t}}function Se(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let u=0;u<e.length;u++)i[u]=e[u]()}else i=e();if(s)return s=!1,l;const c=$(()=>t(i,o,l));return o=i,c}}function xe(e){return E===null||(E.cleanups===null?E.cleanups=[e]:E.cleanups.push(e)),e}function Ee(){return E}function Pe(e,t){const n=E,r=L;E=e,L=null;try{return M(t,!0)}catch(o){fe(o)}finally{E=n,L=r}}function Ye(e){const t=L,n=E;return Promise.resolve().then(()=>{L=t,E=n;let r;return M(e,!1),L=E=null,r?r.done:void 0})}function Le(e,t){const n=Symbol("context");return{id:n,Provider:nt(n),defaultValue:e}}function Re(e){return E&&E.context&&E.context[e.id]!==void 0?E.context[e.id]:e.defaultValue}function ae(e){const t=O(e),n=O(()=>le(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function _e(){if(this.sources&&this.state)if(this.state===D)V(this);else{const e=C;C=null,M(()=>z(this),!1),C=e}if(L){const e=this.observers?this.observers.length:0;L.sources?(L.sources.push(this),L.sourceSlots.push(e)):(L.sources=[this],L.sourceSlots=[e]),this.observers?(this.observers.push(L),this.observerSlots.push(L.sources.length-1)):(this.observers=[L],this.observerSlots=[L.sources.length-1])}return this.value}function Oe(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&M(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],l=re&&re.running;l&&re.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?C.push(s):B.push(s),s.observers&&je(s)),l||(s.state=D)}if(C.length>1e6)throw C=[],new Error},!1)),t}function V(e){if(!e.fn)return;ee(e);const t=Y;Ve(e,e.value,t)}function Ve(e,t,n){let r;const o=E,s=L;L=E=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=D,e.owned&&e.owned.forEach(ee),e.owned=null),e.updatedAt=n+1,fe(l)}finally{L=s,E=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Oe(e,r):e.value=r,e.updatedAt=n)}function Ce(e,t,n,r=D,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:E,context:E?E.context:null,pure:n};return E===null||E!==be&&(E.owned?E.owned.push(s):E.owned=[s]),s}function Te(e){if(e.state===0)return;if(e.state===J)return z(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Y);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===D)V(e);else if(e.state===J){const r=C;C=null,M(()=>z(e,t[0]),!1),C=r}}function M(e,t){if(C)return e();let n=!1;t||(C=[]),B?n=!0:B=[],Y++;try{const r=e();return et(n),r}catch(r){n||(B=null),C=null,fe(r)}}function et(e){if(C&&($e(C),C=null),e)return;const t=B;B=null,t.length&&M(()=>ze(t),!1)}function $e(e){for(let t=0;t<e.length;t++)Te(e[t])}function z(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const o=r.state;o===D?r!==t&&(!r.updatedAt||r.updatedAt<Y)&&Te(r):o===J&&z(r,t)}}}function je(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=J,n.pure?C.push(n):B.push(n),n.observers&&je(n))}}function ee(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),l=n.observerSlots.pop();r<o.length&&(s.sourceSlots[l]=r,o[r]=s,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ee(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function tt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function fe(e,t=E){throw tt(e)}function le(e){if(typeof e=="function"&&!e.length)return le(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=le(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function nt(e,t){return function(r){let o;return F(()=>o=$(()=>(E.context={...E.context,[e]:r.value},ae(()=>r.children))),void 0),o}}function T(e,t){return $(()=>e(t||{}))}function Z(){return!0}const rt={get(e,t,n){return t===ie?n:e.get(t)},has(e,t){return t===ie?!0:e.has(t)},set:Z,deleteProperty:Z,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Z,deleteProperty:Z}},ownKeys(e){return e.keys()}};function oe(e){return(e=typeof e=="function"?e():e)?e:{}}function ot(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function st(...e){let t=!1;for(let l=0;l<e.length;l++){const i=e[l];t=t||!!i&&ie in i,e[l]=typeof i=="function"?(t=!0,O(i)):i}if(t)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const c=oe(e[i])[l];if(c!==void 0)return c}},has(l){for(let i=e.length-1;i>=0;i--)if(l in oe(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(oe(e[i])));return[...new Set(l)]}},rt);const n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const i=e[l];if(!i)continue;const c=Object.getOwnPropertyNames(i);for(let u=c.length-1;u>=0;u--){const a=c[u];if(a==="__proto__"||a==="constructor")continue;const f=Object.getOwnPropertyDescriptor(i,a);if(!r[a])r[a]=f.get?{enumerable:!0,configurable:!0,get:ot.bind(n[a]=[f.get.bind(i)])}:f.value!==void 0?f:void 0;else{const h=n[a];h&&(f.get?h.push(f.get.bind(i)):f.value!==void 0&&h.push(()=>f.value))}}}const o={},s=Object.keys(r);for(let l=s.length-1;l>=0;l--){const i=s[l],c=r[i];c&&c.get?Object.defineProperty(o,i,c):o[i]=c?c.value:void 0}return o}const it=e=>`Stale read from <${e}>.`;function Ue(e){const t=e.keyed,n=O(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return O(()=>{const r=n();if(r){const o=e.children;return typeof o=="function"&&o.length>0?$(()=>o(t?r:()=>{if(!$(n))throw it("Show");return e.when})):o}return e.fallback},void 0,void 0)}function lt(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,c=t[o-1].nextSibling,u=null;for(;l<o||i<s;){if(t[l]===n[i]){l++,i++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const a=s<r?i?n[i-1].nextSibling:n[s-i]:c;for(;i<s;)e.insertBefore(n[i++],a)}else if(s===i)for(;l<o;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const a=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],a),t[o]=n[s]}else{if(!u){u=new Map;let f=i;for(;f<s;)u.set(n[f],f++)}const a=u.get(t[l]);if(a!=null)if(i<a&&a<s){let f=l,h=1,v;for(;++f<o&&f<s&&!((v=u.get(t[f]))==null||v!==a+h);)h++;if(h>a-i){const p=t[l];for(;i<a;)e.insertBefore(n[i++],p)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const me="_$DX_DELEGATE";function ct(e,t,n,r={}){let o;return Ae(s=>{o=s,t===document?e():W(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function he(e,t,n){let r;const o=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},s=t?()=>$(()=>document.importNode(r||(r=o()),!0)):()=>(r||(r=o())).cloneNode(!0);return s.cloneNode=s,s}function ut(e,t=window.document){const n=t[me]||(t[me]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,ft))}}function at(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function W(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Q(e,t,r,n);F(o=>Q(e,t(),o,n),r)}function ft(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Q(e,t,n,r,o){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=q(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||s==="boolean")n=q(e,n,r);else{if(s==="function")return F(()=>{let i=t();for(;typeof i=="function";)i=i();n=Q(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],c=n&&Array.isArray(n);if(ce(i,t,n,o))return F(()=>n=Q(e,i,n,r,!0)),()=>n;if(i.length===0){if(n=q(e,n,r),l)return n}else c?n.length===0?we(e,i,r):lt(e,n,i):(n&&q(e),we(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=q(e,n,r,t);q(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ce(e,t,n,r){let o=!1;for(let s=0,l=t.length;s<l;s++){let i=t[s],c=n&&n[e.length],u;if(!(i==null||i===!0||i===!1))if((u=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))o=ce(e,i,c)||o;else if(u==="function")if(r){for(;typeof i=="function";)i=i();o=ce(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||o}else e.push(i),o=!0;else{const a=String(i);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return o}function we(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function q(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(o!==i){const c=i.parentNode===e;!s&&!l?c?e.replaceChild(o,i):e.insertBefore(o,n):c&&i.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}const ht=!1;function ke(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,s){if(n)return!(n=!1);const l={to:o,options:s,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:c=>{c&&(n=!0),i.navigate(o,{...s,resolve:!1})}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}let ue;function de(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),ue=window.history.state._depth}de();function dt(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function pt(e,t){let n=!1;return()=>{const r=ue;de();const o=r==null?null:ue-r;if(n){n=!1;return}o&&t(o)?(n=!0,window.history.go(-o)):e()}}const gt=/^(?:[a-z0-9]+:)?\/\//i,mt=/^\/+|(\/)\/+$/g,Be="http://sr";function H(e,t=!1){const n=e.replace(mt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function X(e,t,n){if(gt.test(t))return;const r=H(e),o=n&&H(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+H(t,!s)}function wt(e,t){if(e==null)throw new Error(t);return e}function yt(e,t){return H(e).replace(/\/*(\*.*)?$/g,"")+H(t)}function De(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function vt(e,t,n){const[r,o]=e.split("/*",2),s=r.split("/").filter(Boolean),l=s.length;return i=>{const c=i.split("/").filter(Boolean),u=c.length-l;if(u<0||u>0&&o===void 0&&!t)return null;const a={path:l?"":"/",params:{}},f=h=>n===void 0?void 0:n[h];for(let h=0;h<l;h++){const v=s[h],p=c[h],g=v[0]===":",A=g?v.slice(1):v;if(g&&se(p,f(A)))a.params[A]=p;else if(g||!se(p,v))return null;a.path+=`/${p}`}if(o){const h=u?c.slice(-u).join("/"):"";if(se(h,f(o)))a.params[o]=h;else return null}return a}}function se(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function bt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Me(e){const t=new Map,n=Ee();return new Proxy({},{get(r,o){return t.has(o)||Pe(n,()=>t.set(o,O(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function At(e,t){const n=new URLSearchParams(e);Object.entries(t).forEach(([o,s])=>{s==null||s===""?n.delete(o):n.set(o,String(s))});const r=n.toString();return r?`?${r}`:""}function Ne(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return Ne(r).reduce((s,l)=>[...s,...o.map(i=>i+l)],[])}const St=100,qe=Le(),Fe=Le(),Ke=()=>wt(Re(qe),"<A> and 'use' router primitives can be only used inside a Route."),xt=()=>Ke().navigatorFactory(),Et=()=>Ke().location,Pt=()=>{const e=Et(),t=xt(),n=(r,o)=>{const s=$(()=>e.pathname+At(e.search,r)+e.hash);t(s,{scroll:!1,resolve:!1,...o})};return[e.query,n]};function Lt(e,t=""){const{component:n,load:r,children:o,info:s}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,component:n,load:r,info:s};return Ie(e.path).reduce((c,u)=>{for(const a of Ne(u)){const f=yt(t,a);let h=l?f:f.split("/*",1)[0];h=h.split("/").map(v=>v.startsWith(":")||v.startsWith("*")?v:encodeURIComponent(v)).join("/"),c.push({...i,originalPath:a,pattern:h,matcher:vt(h,!l,e.matchFilters)})}return c},[])}function Rt(e,t=0){return{routes:e,score:bt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],l=s.matcher(n);if(!l)return null;r.unshift({...l,route:s})}return r}}}function Ie(e){return Array.isArray(e)?e:[e]}function We(e,t="",n=[],r=[]){const o=Ie(e);for(let s=0,l=o.length;s<l;s++){const i=o[s];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const c=Lt(i,t);for(const u of c){n.push(u);const a=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!a)We(i.children,u.pattern,n,r);else{const f=Rt([...n],r.length);r.push(f)}n.pop()}}}return n.length?r:r.sort((s,l)=>l.score-s.score)}function ye(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function _t(e,t){const n=new URL(Be),r=O(c=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),c}},n,{equals:(c,u)=>c.href===u.href}),o=O(()=>r().pathname),s=O(()=>r().search,!0),l=O(()=>r().hash),i=()=>"";return{get pathname(){return o()},get search(){return s()},get hash(){return l()},get state(){return t()},get key(){return i()},query:Me(Se(s,()=>De(r())))}}let k;function Ot(e,t,n,r={}){const{signal:[o,s],utils:l={}}=e,i=l.parsePath||(P=>P),c=l.renderPath||(P=>P),u=l.beforeLeave||ke(),a=X("",r.base||"");if(a===void 0)throw new Error(`${a} is not a valid base path`);a&&!o().value&&s({value:a,replace:!0,scroll:!1});const[f,h]=I(!1),v=async P=>{h(!0);try{await Ye(P)}finally{h(!1)}},[p,g]=I(o().value),[A,y]=I(o().state),R=_t(p,A),S=[],b=I([]),x=O(()=>ye(t(),R.pathname)),d=Me(()=>{const P=x(),_={};for(let j=0;j<P.length;j++)Object.assign(_,P[j].params);return _}),m={pattern:a,path:()=>a,outlet:()=>null,resolvePath(P){return X(a,P)}};return F(()=>{const{value:P,state:_}=o();$(()=>{P!==p()&&v(()=>{k="native",g(P),y(_),b[1]([])}).then(()=>{k=void 0})})}),{base:m,location:R,params:d,isRouting:f,renderPath:c,parsePath:i,navigatorFactory:He,matches:x,beforeLeave:u,preloadRoute:Xe,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:b};function w(P,_,j){$(()=>{if(typeof _=="number"){_&&(l.go?l.go(_):console.warn("Router integration does not support relative routing"));return}const{replace:te,resolve:ne,scroll:N,state:K}={replace:!1,resolve:!0,scroll:!0,...j},U=ne?P.resolvePath(_):X("",_);if(U===void 0)throw new Error(`Path '${_}' is not a routable path`);if(S.length>=St)throw new Error("Too many redirects");const ge=p();if((U!==ge||K!==A())&&!ht){if(u.confirm(U,j)){const Ge=S.push({value:ge,replace:te,scroll:N,state:A()});v(()=>{k="navigate",g(U),y(K),b[1]([])}).then(()=>{S.length===Ge&&(k=void 0,Ze({value:U,state:K}))})}}})}function He(P){return P=P||Re(Fe)||m,(_,j)=>w(P,_,j)}function Ze(P){const _=S[0];_&&((P.value!==_.value||P.state!==_.state)&&s({...P,replace:_.replace,scroll:_.scroll}),S.length=0)}function Xe(P,_){const j=ye(t(),P.pathname),te=k;k="preload";for(let ne in j){const{route:N,params:K}=j[ne];N.component&&N.component.preload&&N.component.preload();const{load:U}=N;_&&U&&Pe(n(),()=>U({params:K,location:{pathname:P.pathname,search:P.search,hash:P.hash,query:De(P),state:null,key:""},intent:"preload"}))}k=te}}function Ct(e,t,n,r){const{base:o,location:s,params:l}=e,{pattern:i,component:c,load:u}=r().route,a=O(()=>r().path);c&&c.preload&&c.preload();const f=u?u({params:l,location:s,intent:k||"initial"}):void 0;return{parent:t,pattern:i,path:a,outlet:()=>c?T(c,{params:l,location:s,data:f,get children(){return n()}}):n(),resolvePath(v){return X(o.path(),v,a())}}}const Tt=e=>t=>{const{base:n}=t,r=ae(()=>t.children),o=O(()=>We(r(),t.base||""));let s;const l=Ot(e,o,()=>s,{base:n,singleFlight:t.singleFlight});return e.create&&e.create(l),T(qe.Provider,{value:l,get children(){return T($t,{routerState:l,get root(){return t.root},get load(){return t.rootLoad},get children(){return[O(()=>(s=Ee())&&null),T(jt,{routerState:l,get branches(){return o()}})]}})}})};function $t(e){const t=e.routerState.location,n=e.routerState.params,r=O(()=>e.load&&$(()=>e.load({params:n,location:t,intent:"preload"})));return T(Ue,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>T(o,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function jt(e){const t=[];let n;const r=O(Se(e.routerState.matches,(o,s,l)=>{let i=s&&o.length===s.length;const c=[];for(let u=0,a=o.length;u<a;u++){const f=s&&s[u],h=o[u];l&&f&&h.route.key===f.route.key?c[u]=l[u]:(i=!1,t[u]&&t[u](),Ae(v=>{t[u]=v,c[u]=Ct(e.routerState,c[u-1]||e.routerState.base,ve(()=>r()[u+1]),()=>e.routerState.matches()[u])}))}return t.splice(o.length).forEach(u=>u()),l&&i?l:(n=c[0],c)}));return ve(()=>r()&&n)()}const ve=e=>()=>T(Ue,{get when(){return e()},keyed:!0,children:t=>T(Fe.Provider,{value:t,get children(){return t.outlet()}})}),Ut=e=>{const t=ae(()=>e.children);return st(e,{get children(){return t()}})};function kt([e,t],n,r){return[n?()=>n(e()):e,r?o=>t(r(o)):t]}function Bt(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Dt(e){let t=!1;const n=o=>typeof o=="string"?{value:o}:o,r=kt(I(n(e.get()),{equals:(o,s)=>o.value===s.value}),void 0,o=>(!t&&e.set(o),o));return e.init&&xe(e.init((o=e.get())=>{t=!0,r[1](n(o)),t=!1})),Tt({signal:r,create:e.create,utils:e.utils})}function Mt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Nt(e,t){const n=Bt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const qt=new Map;function Ft(e=!0,t=!1,n="/_server"){return r=>{const o=r.base.path(),s=r.navigatorFactory(r.base);let l={};function i(p){return p.namespaceURI==="http://www.w3.org/2000/svg"}function c(p){if(p.defaultPrevented||p.button!==0||p.metaKey||p.altKey||p.ctrlKey||p.shiftKey)return;const g=p.composedPath().find(x=>x instanceof Node&&x.nodeName.toUpperCase()==="A");if(!g||t&&!g.hasAttribute("link"))return;const A=i(g),y=A?g.href.baseVal:g.href;if((A?g.target.baseVal:g.target)||!y&&!g.hasAttribute("state"))return;const S=(g.getAttribute("rel")||"").split(/\s+/);if(g.hasAttribute("download")||S&&S.includes("external"))return;const b=A?new URL(y,document.baseURI):new URL(y);if(!(b.origin!==window.location.origin||o&&b.pathname&&!b.pathname.toLowerCase().startsWith(o.toLowerCase())))return[g,b]}function u(p){const g=c(p);if(!g)return;const[A,y]=g,R=r.parsePath(y.pathname+y.search+y.hash),S=A.getAttribute("state");p.preventDefault(),s(R,{resolve:!1,replace:A.hasAttribute("replace"),scroll:!A.hasAttribute("noscroll"),state:S&&JSON.parse(S)})}function a(p){const g=c(p);if(!g)return;const[A,y]=g;l[y.pathname]||r.preloadRoute(y,A.getAttribute("preload")!=="false")}function f(p){const g=c(p);if(!g)return;const[A,y]=g;l[y.pathname]||(l[y.pathname]=setTimeout(()=>{r.preloadRoute(y,A.getAttribute("preload")!=="false"),delete l[y.pathname]},200))}function h(p){const g=c(p);if(!g)return;const[,A]=g;l[A.pathname]&&(clearTimeout(l[A.pathname]),delete l[A.pathname])}function v(p){let g=p.submitter&&p.submitter.hasAttribute("formaction")?p.submitter.getAttribute("formaction"):p.target.getAttribute("action");if(!g)return;if(!g.startsWith("https://action/")){const y=new URL(g,Be);if(g=r.parsePath(y.pathname+y.search),!g.startsWith(n))return}if(p.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const A=qt.get(g);if(A){p.preventDefault();const y=new FormData(p.target);p.submitter&&p.submitter.name&&y.append(p.submitter.name,p.submitter.value),A.call({r,f:p.target},y)}}ut(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mouseover",f),document.addEventListener("mouseout",h),document.addEventListener("focusin",a),document.addEventListener("touchstart",a)),document.addEventListener("submit",v),xe(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mouseover",f),document.removeEventListener("mouseout",h),document.removeEventListener("focusin",a),document.removeEventListener("touchstart",a)),document.removeEventListener("submit",v)})}}function Kt(e){const t=()=>({value:window.location.pathname+window.location.search+window.location.hash,state:window.history.state}),n=ke();return Dt({get:t,set({value:r,replace:o,scroll:s,state:l}){o?window.history.replaceState(dt(l),"",r):window.history.pushState(l,"",r),Nt(window.location.hash.slice(1),s),de()},init:r=>Mt(window,"popstate",pt(r,o=>{if(o&&o<0)return!n.confirm(o);{const s=t();return!n.confirm(s.value,{state:s.state})}})),create:Ft(e.preload,e.explicitLinks,e.actionBase),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}var pe={exports:{}};pe.exports;(function(e){var t=function(){var n=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",s={};function l(c,u){if(!s[c]){s[c]={};for(var a=0;a<c.length;a++)s[c][c.charAt(a)]=a}return s[c][u]}var i={compressToBase64:function(c){if(c==null)return"";var u=i._compress(c,6,function(a){return r.charAt(a)});switch(u.length%4){default:case 0:return u;case 1:return u+"===";case 2:return u+"==";case 3:return u+"="}},decompressFromBase64:function(c){return c==null?"":c==""?null:i._decompress(c.length,32,function(u){return l(r,c.charAt(u))})},compressToUTF16:function(c){return c==null?"":i._compress(c,15,function(u){return n(u+32)})+" "},decompressFromUTF16:function(c){return c==null?"":c==""?null:i._decompress(c.length,16384,function(u){return c.charCodeAt(u)-32})},compressToUint8Array:function(c){for(var u=i.compress(c),a=new Uint8Array(u.length*2),f=0,h=u.length;f<h;f++){var v=u.charCodeAt(f);a[f*2]=v>>>8,a[f*2+1]=v%256}return a},decompressFromUint8Array:function(c){if(c==null)return i.decompress(c);for(var u=new Array(c.length/2),a=0,f=u.length;a<f;a++)u[a]=c[a*2]*256+c[a*2+1];var h=[];return u.forEach(function(v){h.push(n(v))}),i.decompress(h.join(""))},compressToEncodedURIComponent:function(c){return c==null?"":i._compress(c,6,function(u){return o.charAt(u)})},decompressFromEncodedURIComponent:function(c){return c==null?"":c==""?null:(c=c.replace(/ /g,"+"),i._decompress(c.length,32,function(u){return l(o,c.charAt(u))}))},compress:function(c){return i._compress(c,16,function(u){return n(u)})},_compress:function(c,u,a){if(c==null)return"";var f,h,v={},p={},g="",A="",y="",R=2,S=3,b=2,x=[],d=0,m=0,w;for(w=0;w<c.length;w+=1)if(g=c.charAt(w),Object.prototype.hasOwnProperty.call(v,g)||(v[g]=S++,p[g]=!0),A=y+g,Object.prototype.hasOwnProperty.call(v,A))y=A;else{if(Object.prototype.hasOwnProperty.call(p,y)){if(y.charCodeAt(0)<256){for(f=0;f<b;f++)d=d<<1,m==u-1?(m=0,x.push(a(d)),d=0):m++;for(h=y.charCodeAt(0),f=0;f<8;f++)d=d<<1|h&1,m==u-1?(m=0,x.push(a(d)),d=0):m++,h=h>>1}else{for(h=1,f=0;f<b;f++)d=d<<1|h,m==u-1?(m=0,x.push(a(d)),d=0):m++,h=0;for(h=y.charCodeAt(0),f=0;f<16;f++)d=d<<1|h&1,m==u-1?(m=0,x.push(a(d)),d=0):m++,h=h>>1}R--,R==0&&(R=Math.pow(2,b),b++),delete p[y]}else for(h=v[y],f=0;f<b;f++)d=d<<1|h&1,m==u-1?(m=0,x.push(a(d)),d=0):m++,h=h>>1;R--,R==0&&(R=Math.pow(2,b),b++),v[A]=S++,y=String(g)}if(y!==""){if(Object.prototype.hasOwnProperty.call(p,y)){if(y.charCodeAt(0)<256){for(f=0;f<b;f++)d=d<<1,m==u-1?(m=0,x.push(a(d)),d=0):m++;for(h=y.charCodeAt(0),f=0;f<8;f++)d=d<<1|h&1,m==u-1?(m=0,x.push(a(d)),d=0):m++,h=h>>1}else{for(h=1,f=0;f<b;f++)d=d<<1|h,m==u-1?(m=0,x.push(a(d)),d=0):m++,h=0;for(h=y.charCodeAt(0),f=0;f<16;f++)d=d<<1|h&1,m==u-1?(m=0,x.push(a(d)),d=0):m++,h=h>>1}R--,R==0&&(R=Math.pow(2,b),b++),delete p[y]}else for(h=v[y],f=0;f<b;f++)d=d<<1|h&1,m==u-1?(m=0,x.push(a(d)),d=0):m++,h=h>>1;R--,R==0&&(R=Math.pow(2,b),b++)}for(h=2,f=0;f<b;f++)d=d<<1|h&1,m==u-1?(m=0,x.push(a(d)),d=0):m++,h=h>>1;for(;;)if(d=d<<1,m==u-1){x.push(a(d));break}else m++;return x.join("")},decompress:function(c){return c==null?"":c==""?null:i._decompress(c.length,32768,function(u){return c.charCodeAt(u)})},_decompress:function(c,u,a){var f=[],h=4,v=4,p=3,g="",A=[],y,R,S,b,x,d,m,w={val:a(0),position:u,index:1};for(y=0;y<3;y+=1)f[y]=y;for(S=0,x=Math.pow(2,2),d=1;d!=x;)b=w.val&w.position,w.position>>=1,w.position==0&&(w.position=u,w.val=a(w.index++)),S|=(b>0?1:0)*d,d<<=1;switch(S){case 0:for(S=0,x=Math.pow(2,8),d=1;d!=x;)b=w.val&w.position,w.position>>=1,w.position==0&&(w.position=u,w.val=a(w.index++)),S|=(b>0?1:0)*d,d<<=1;m=n(S);break;case 1:for(S=0,x=Math.pow(2,16),d=1;d!=x;)b=w.val&w.position,w.position>>=1,w.position==0&&(w.position=u,w.val=a(w.index++)),S|=(b>0?1:0)*d,d<<=1;m=n(S);break;case 2:return""}for(f[3]=m,R=m,A.push(m);;){if(w.index>c)return"";for(S=0,x=Math.pow(2,p),d=1;d!=x;)b=w.val&w.position,w.position>>=1,w.position==0&&(w.position=u,w.val=a(w.index++)),S|=(b>0?1:0)*d,d<<=1;switch(m=S){case 0:for(S=0,x=Math.pow(2,8),d=1;d!=x;)b=w.val&w.position,w.position>>=1,w.position==0&&(w.position=u,w.val=a(w.index++)),S|=(b>0?1:0)*d,d<<=1;f[v++]=n(S),m=v-1,h--;break;case 1:for(S=0,x=Math.pow(2,16),d=1;d!=x;)b=w.val&w.position,w.position>>=1,w.position==0&&(w.position=u,w.val=a(w.index++)),S|=(b>0?1:0)*d,d<<=1;f[v++]=n(S),m=v-1,h--;break;case 2:return A.join("")}if(h==0&&(h=Math.pow(2,p),p++),f[m])g=f[m];else if(m===v)g=R+R.charAt(0);else return null;A.push(g),f[v++]=R+g.charAt(0),h--,R=g,h==0&&(h=Math.pow(2,p),p++)}}};return i}();e!=null?e.exports=t:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return t})})(pe);var It=pe.exports,Wt=he("<table><thead><tr><th>Username</th><th>Name</th><th>Link</th></tr></thead><tbody>"),Ht=he("<tr><td></td><td></td><td><a target=_blank>Profile"),Zt=he("<div><main class=container>");function Xt(e){const n={...e}.params;if(n){const r=It.decompressFromEncodedURIComponent(n);console.log(r);try{return JSON.parse(r)}catch{return}}}const Gt=({users:e})=>(()=>{var t=Wt(),n=t.firstChild,r=n.nextSibling;return W(r,()=>e.map(o=>(()=>{var s=Ht(),l=s.firstChild,i=l.nextSibling,c=i.nextSibling,u=c.firstChild;return W(l,()=>o.username),W(i,()=>o.name),F(()=>at(u,"href",o.link)),s})())),t})(),Jt=()=>{const[e,t]=Pt(),n=Xt(e);return console.log(n),(()=>{var r=Zt(),o=r.firstChild;return W(o,n?T(Gt,{users:n}):"No Data"),r})()},zt=()=>T(Kt,{get children(){return T(Ut,{path:"/",component:Jt})}}),Qt=document.getElementById("root");ct(()=>T(zt,{}),Qt);
