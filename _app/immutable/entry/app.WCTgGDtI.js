import{d as I,p as b,a as V,u as j,b as U,c as q,g as _,s as p,e as E,t as M}from"../chunks/runtime.AuPRbSdQ.js";import{c as N,i as k,a as v,b as w,t as W,d as O,o as z,e as g,s as S,f as R,g as F,h as G,j as H,p as J,k as P,l as A}from"../chunks/disclose-version.q6CAgPgX.js";import{o as K}from"../chunks/main-client.CmHXO5L_.js";function Q(a){return class extends X{constructor(e){super({component:a,...e})}}}class X{#e={};#t;constructor(e){this.#t=N(e.component,{target:e.target,props:{...e.props,$$events:this.#e},context:e.context,intro:e.intro,recover:e.recover});for(const t of Object.keys(this.#t))t==="$set"||t==="$destroy"||I(this,t,{get(){return this.#t[t]},set(o){this.#t[t]=o},enumerable:!0})}$set(e){this.#t.$set(e)}$on(e,t){this.#e[e]=this.#e[e]||[];const o=(...i)=>t.call(this,...i);return this.#e[e].push(o),()=>{this.#e[e]=this.#e[e].filter(i=>i!==o)}}$destroy(){this.#t.$destroy()}}const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},T={},x=function(e,t,o){let i=Promise.resolve();if(t&&t.length>0){const c=document.getElementsByTagName("link");i=Promise.all(t.map(r=>{if(r=Z(r,o),r in T)return;T[r]=!0;const d=r.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(!!o)for(let s=c.length-1;s>=0;s--){const n=c[s];if(n.href===r&&(!d||n.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${h}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":Y,d||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),d)return new Promise((s,n)=>{l.addEventListener("load",s),l.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${r}`)))})}))}return i.then(()=>e()).catch(c=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=c,window.dispatchEvent(r),!r.defaultPrevented)throw c})},ae={};var $=A('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),ee=A("<!> <!>",!0);function te(a,e){q(e,!0);let t=b(e,"components",11,()=>[]),o=b(e,"data_0",3,null),i=b(e,"data_1",3,null);V(()=>e.stores.page.set(e.page)),j(()=>{e.stores,e.page,e.constructors,t(),e.form,o(),i(),e.stores.page.notify()});let c=p(!1),r=p(!1),d=p(null);K(()=>{const s=e.stores.page.subscribe(()=>{_(c)&&(E(r,!0),M().then(()=>{E(d,J(document.title||"untitled page"))}))});return E(c,!0),s});var h=z(a,!0,ee),y=g(h),l=S(S(y));k(y,()=>e.constructors[1],s=>{var n=R(s),f=g(n);w(f,()=>e.constructors[0],m=>{P(m(f,{get data(){return o()},children:(u,re)=>{var L=R(u),C=g(L);w(C,()=>e.constructors[1],B=>{P(B(C,{get data(){return i()},get form(){return e.form}}),D=>t()[1]=D)}),v(u,L)}}),u=>t()[0]=u)}),v(s,n)},s=>{var n=R(s),f=g(n);w(f,()=>e.constructors[0],m=>{P(m(f,{get data(){return o()},get form(){return e.form}}),u=>t()[0]=u)}),v(s,n)}),k(l,()=>_(c),s=>{var n=F(s,!0,$),f=G(n);k(f,()=>_(r),m=>{var u=H(m);W(u,()=>_(d)),O(m,u)},null),O(s,n)},null),v(a,h),U()}const ie=Q(te),ce=[()=>x(()=>import("../nodes/0.deWhPq3r.js"),__vite__mapDeps([0,1,2]),import.meta.url),()=>x(()=>import("../nodes/1.wqJp4-dY.js"),__vite__mapDeps([3,1,2,4]),import.meta.url),()=>x(()=>import("../nodes/2.DloaCc5u.js"),__vite__mapDeps([5,1,2,6]),import.meta.url)],le=[],ue={"/":[2]},de={handleError:({error:a})=>{console.error(a)}};export{ue as dictionary,de as hooks,ae as matchers,ce as nodes,ie as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.deWhPq3r.js","../chunks/disclose-version.q6CAgPgX.js","../chunks/runtime.AuPRbSdQ.js","../nodes/1.wqJp4-dY.js","../chunks/singletons.sDj8t9XB.js","../nodes/2.DloaCc5u.js","../assets/2.w6AR0OCE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}