import{s as D,e as I}from"../chunks/scheduler.8fa37b9d.js";import{S as V,i as w,g as h,h as v,j as b,f as n,k as d,a as m,d as j,t as k,b as J,m as L,s as g,r as S,n as q,c as $,u as x,x as C,v as H,o as P,w as T,p as z}from"../chunks/index.fbb25e7c.js";import{l as A,a as B}from"../chunks/locale.fc3f6270.js";import{J as F}from"../chunks/Joblisting.64fa2271.js";function E(r){let a,o=r[0].title+"",e,s,l,c,f,p,u,_;return u=new F({props:{jobs:r[0].jobs}}),{c(){a=h("h1"),e=L(o),s=g(),l=h("div"),c=g(),f=h("div"),p=g(),S(u.$$.fragment),this.h()},l(t){a=v(t,"H1",{class:!0});var i=b(a);e=q(i,o),i.forEach(n),s=$(t),l=v(t,"DIV",{class:!0}),b(l).forEach(n),c=$(t),f=v(t,"DIV",{class:!0}),b(f).forEach(n),p=$(t),x(u.$$.fragment,t),this.h()},h(){d(a,"class","svelte-31ojsb"),d(l,"class","space-20-0 svelte-31ojsb"),d(f,"class","divider svelte-31ojsb")},m(t,i){m(t,a,i),C(a,e),m(t,s,i),m(t,l,i),m(t,c,i),m(t,f,i),m(t,p,i),H(u,t,i),_=!0},p(t,i){(!_||i&1)&&o!==(o=t[0].title+"")&&P(e,o);const y={};i&1&&(y.jobs=t[0].jobs),u.$set(y)},i(t){_||(j(u.$$.fragment,t),_=!0)},o(t){k(u.$$.fragment,t),_=!1},d(t){t&&(n(a),n(s),n(l),n(c),n(f),n(p)),T(u,t)}}}function G(r){let a,o,e=!r[1]&&E(r);return{c(){a=h("div"),e&&e.c(),this.h()},l(s){a=v(s,"DIV",{class:!0});var l=b(a);e&&e.l(l),l.forEach(n),this.h()},h(){d(a,"class","container svelte-31ojsb")},m(s,l){m(s,a,l),e&&e.m(a,null),o=!0},p(s,[l]){s[1]?e&&(z(),k(e,1,1,()=>{e=null}),J()):e?(e.p(s,l),l&2&&j(e,1)):(e=E(s),e.c(),j(e,1),e.m(a,null))},i(s){o||(j(e),o=!0)},o(s){k(e),o=!1},d(s){s&&n(a),e&&e.d()}}}function K(r,a,o){let e;I(r,A,c=>o(2,e=c));let s,l=!0;return r.$$.update=()=>{if(r.$$.dirty&5){const c=e,f="experience";c&&c!==(s==null?void 0:s.locale)&&B(c,f).then(p=>{o(0,s=p),o(1,l=!1)})}},[s,l,e]}class R extends V{constructor(a){super(),w(this,a,K,G,D,{})}}export{R as component};
