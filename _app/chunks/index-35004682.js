function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n}function u(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o,r,s,i){const c=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(c){const r=a(n,e,o,i);t.p(r,c)}}function l(t,n){t.appendChild(n)}function h(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function m(){return g(" ")}function $(){return g("")}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t){return Array.from(t.childNodes)}function _(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const s=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):p(n)}function x(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return g(n)}function w(t){return x(t," ")}function k(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function E(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}class v{constructor(t=null){this.a=t,this.e=this.n=null}m(t,n,e=null){this.e||(this.e=p(n.nodeName),this.t=n,this.h(t)),this.i(e)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)h(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(d)}}let A;function N(t){A=t}function j(){if(!A)throw new Error("Function called outside component initialization");return A}function M(t){j().$$.on_mount.push(t)}function S(t){j().$$.after_update.push(t)}function T(t,n){j().$$.context.set(t,n)}const C=[],O=[],q=[],z=[],B=Promise.resolve();let F=!1;function H(t){q.push(t)}let P=!1;const D=new Set;function G(){if(!P){P=!0;do{for(let t=0;t<C.length;t+=1){const n=C[t];N(n),I(n.$$)}for(N(null),C.length=0;O.length;)O.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];D.has(n)||(D.add(n),n())}q.length=0}while(C.length);for(;z.length;)z.pop()();F=!1,P=!1,D.clear()}}function I(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const J=new Set;let K;function L(){K={r:0,c:[],p:K}}function Q(){K.r||r(K.c),K=K.p}function R(t,n){t&&t.i&&(J.delete(t),t.i(n))}function U(t,n,e,o){if(t&&t.o){if(J.has(t))return;J.add(t),K.c.push((()=>{J.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function V(t,n){t.d(1),n.delete(t.key)}function W(t,n,e,o,r,s,i,c,u,a,f,l){let h=t.length,d=s.length,p=h;const g={};for(;p--;)g[t[p].key]=p;const m=[],$=new Map,y=new Map;for(p=d;p--;){const t=l(r,s,p),c=e(t);let u=i.get(c);u?o&&u.p(t,n):(u=a(c,t),u.c()),$.set(c,m[p]=u),c in g&&y.set(c,Math.abs(p-g[c]))}const b=new Set,_=new Set;function x(t){R(t,1),t.m(c,f),i.set(t.key,t),f=t.first,d--}for(;h&&d;){const n=m[d-1],e=t[h-1],o=n.key,r=e.key;n===e?(f=n.first,h--,d--):$.has(r)?!i.has(o)||b.has(o)?x(n):_.has(r)?h--:y.get(o)>y.get(r)?(_.add(o),x(n)):(b.add(r),h--):(u(e,i),h--)}for(;h--;){const n=t[h];$.has(n.key)||u(n,i)}for(;d;)x(m[d-1]);return m}function X(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const i in o)i in e||(e[i]=void 0);return e}function Y(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,n){t&&t.l(n)}function nt(t,n,o,i){const{fragment:c,on_mount:u,on_destroy:a,after_update:f}=t.$$;c&&c.m(n,o),i||H((()=>{const n=u.map(e).filter(s);a?a.push(...n):r(n),t.$$.on_mount=[]})),f.forEach(H)}function et(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){-1===t.$$.dirty[0]&&(C.push(t),F||(F=!0,B.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function rt(n,e,s,i,c,u,a=[-1]){const f=A;N(n);const l=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:a,skip_bound:!1};let h=!1;if(l.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&c(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),h&&ot(n,t)),e})):[],l.update(),h=!0,r(l.before_update),l.fragment=!!i&&i(l.ctx),e.target){if(e.hydrate){const t=b(e.target);l.fragment&&l.fragment.l(t),t.forEach(d)}else l.fragment&&l.fragment.c();e.intro&&R(n.$$.fragment),nt(n,e.target,e.anchor,e.customElement),G()}N(f)}class st{$destroy(){et(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{S as A,M as B,L as C,Q as D,u as E,f as F,c as G,W as H,v as I,V as J,E as K,st as S,b as a,x as b,_ as c,d,p as e,h as f,l as g,k as h,rt as i,m as j,$ as k,w as l,n as m,t as n,y as o,Z as p,tt as q,nt as r,i as s,g as t,X as u,Y as v,R as w,U as x,et as y,T as z};