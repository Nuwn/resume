import{s as K,n as U,r as Y,e as me,f as ne,i as se,h as ve,c as ge,u as pe,g as $e,d as be}from"../chunks/scheduler.66141ec3.js";import{S as j,i as G,g as p,m as ke,s as T,h as $,j as k,n as we,f as _,c as z,k as m,a as D,x as v,y as q,o as Ce,d as y,p as R,b as W,t as I,z as Z,r as A,u as P,v as F,w as H,A as ye,B as X}from"../chunks/index.b5e81050.js";import{e as S}from"../chunks/each.e59479a4.js";import{s as Ee}from"../chunks/screenMode.2c4c102c.js";import{C as Ie,l as Ve}from"../chunks/locale.0c5bb959.js";import{d as Le}from"../chunks/singletons.78d33db1.js";import{b as Q}from"../chunks/paths.9b38fcf4.js";const Ne=[{text:"nuwn@hotmail.com (public)",href:"mailto:nuwn@hotmail.com",value:"nuwn@hotmail.com",icon:"envelope"},{text:"Patric Keisala",href:"https://www.linkedin.com/in/patric-keisala/",value:"https://www.linkedin.com/in/patric-keisala/",icon:"linkedin"},{text:"GitHub | Nuwn",href:"https://github.com/nuwn",value:"https://github.com/nuwn",icon:"github"},{text:"Lazy solutions",href:"https://lazy.solutions",value:"https://lazy.solutions",icon:"hashtag"}],Te={data:Ne};function ze(n){let e,l,s=n[0].text+"",t,o,r,a,i,u,d;return{c(){e=p("div"),l=p("a"),t=ke(s),r=T(),a=p("i"),this.h()},l(b){e=$(b,"DIV",{class:!0});var f=k(e);l=$(f,"A",{href:!0});var c=k(l);t=we(c,s),c.forEach(_),r=z(f),a=$(f,"I",{class:!0}),k(a).forEach(_),f.forEach(_),this.h()},h(){m(l,"href",o=n[0].href),m(a,"class",i="fa fa-solid fa-clone "+(n[2]===n[1].Copied?"green":n[2]===n[1].NotCopied?"red":"")+" svelte-1v1fco9"),m(e,"class","contact-info svelte-1v1fco9")},m(b,f){D(b,e,f),v(e,l),v(l,t),v(e,r),v(e,a),u||(d=q(a,"click",n[4]),u=!0)},p(b,[f]){f&1&&s!==(s=b[0].text+"")&&Ce(t,s),f&1&&o!==(o=b[0].href)&&m(l,"href",o),f&6&&i!==(i="fa fa-solid fa-clone "+(b[2]===b[1].Copied?"green":b[2]===b[1].NotCopied?"red":"")+" svelte-1v1fco9")&&m(a,"class",i)},i:U,o:U,d(b){b&&_(e),u=!1,d()}}}function De(n,e,l){var s;(function(i){i[i.Copied=0]="Copied",i[i.NotCopied=1]="NotCopied",i[i.Null=2]="Null"})(s||(s={}));let{link:t}=e,o=s.Null;async function r(i){try{await Ie(i),l(2,o=s.Copied),setTimeout(()=>{l(2,o=s.Null)},1e3)}catch{l(2,o=s.NotCopied),setTimeout(()=>{l(2,o=s.Null)},1e3)}}const a=()=>r(t.value);return n.$$set=i=>{"link"in i&&l(0,t=i.link)},[t,s,o,r,a]}class _e extends j{constructor(e){super(),G(this,e,De,ze,K,{link:0})}}function ae(n,e,l){const s=n.slice();return s[1]=e[l],s[3]=l,s}function re(n){let e,l,s;return l=new _e({props:{link:n[1]}}),{c(){e=p("li"),A(l.$$.fragment),this.h()},l(t){e=$(t,"LI",{class:!0});var o=k(e);P(l.$$.fragment,o),o.forEach(_),this.h()},h(){m(e,"class","svelte-omdmhn")},m(t,o){D(t,e,o),F(l,e,null),s=!0},p(t,o){const r={};o&1&&(r.link=t[1]),l.$set(r)},i(t){s||(y(l.$$.fragment,t),s=!0)},o(t){I(l.$$.fragment,t),s=!1},d(t){t&&_(e),H(l)}}}function Me(n){let e,l,s=S(n[0]),t=[];for(let r=0;r<s.length;r+=1)t[r]=re(ae(n,s,r));const o=r=>I(t[r],1,1,()=>{t[r]=null});return{c(){e=p("ul");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=$(r,"UL",{class:!0});var a=k(e);for(let i=0;i<t.length;i+=1)t[i].l(a);a.forEach(_),this.h()},h(){m(e,"class","svelte-omdmhn")},m(r,a){D(r,e,a);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null);l=!0},p(r,[a]){if(a&1){s=S(r[0]);let i;for(i=0;i<s.length;i+=1){const u=ae(r,s,i);t[i]?(t[i].p(u,a),y(t[i],1)):(t[i]=re(u),t[i].c(),y(t[i],1),t[i].m(e,null))}for(R(),i=s.length;i<t.length;i+=1)o(i);W()}},i(r){if(!l){for(let a=0;a<s.length;a+=1)y(t[a]);l=!0}},o(r){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)I(t[a]);l=!1},d(r){r&&_(e),Z(t,r)}}}function qe(n,e,l){let{links:s}=e;return n.$$set=t=>{"links"in t&&l(0,s=t.links)},[s]}class Be extends j{constructor(e){super(),G(this,e,qe,Me,K,{links:0})}}function ie(n,e,l){const s=n.slice();return s[16]=e[l],s[18]=l,s}function oe(n){let e,l,s;return l=new _e({props:{link:n[16]}}),{c(){e=p("div"),A(l.$$.fragment),this.h()},l(t){e=$(t,"DIV",{class:!0});var o=k(e);P(l.$$.fragment,o),o.forEach(_),this.h()},h(){m(e,"class","popout-viewer svelte-ty4tq5")},m(t,o){D(t,e,o),F(l,e,null),s=!0},p:U,i(t){s||(y(l.$$.fragment,t),s=!0)},o(t){I(l.$$.fragment,t),s=!1},d(t){t&&_(e),H(l)}}}function ce(n){let e,l,s,t,o,r,a,i,u=n[2].name==="desktop"&&n[1]===n[18]&&oe(n);function d(...c){return n[11](n[18],...c)}function b(...c){return n[12](n[18],...c)}function f(){return n[13](n[18])}return{c(){e=p("li"),l=p("i"),s=T(),u&&u.c(),t=T(),this.h()},l(c){e=$(c,"LI",{class:!0});var h=k(e);l=$(h,"I",{class:!0}),k(l).forEach(_),s=z(h),u&&u.l(h),t=z(h),h.forEach(_),this.h()},h(){m(l,"class","fa fa-solid fa-"+n[16].icon+" svelte-ty4tq5"),m(e,"class",o=ne(n[1]===n[18]?"bland-blue":"")+" svelte-ty4tq5")},m(c,h){D(c,e,h),v(e,l),v(e,s),u&&u.m(e,null),v(e,t),r=!0,a||(i=[q(e,"mouseover",d),q(e,"mouseout",b),q(e,"focus",f),q(e,"blur",n[14])],a=!0)},p(c,h){n=c,n[2].name==="desktop"&&n[1]===n[18]?u?(u.p(n,h),h&6&&y(u,1)):(u=oe(n),u.c(),y(u,1),u.m(e,t)):u&&(R(),I(u,1,1,()=>{u=null}),W()),(!r||h&2&&o!==(o=ne(n[1]===n[18]?"bland-blue":"")+" svelte-ty4tq5"))&&m(e,"class",o)},i(c){r||(y(u),r=!0)},o(c){I(u),r=!1},d(c){c&&_(e),u&&u.d(),a=!1,Y(i)}}}function ue(n){let e,l,s,t,o,r;return l=new Be({props:{links:n[3]}}),{c(){e=p("div"),A(l.$$.fragment),this.h()},l(a){e=$(a,"DIV",{class:!0});var i=k(e);P(l.$$.fragment,i),i.forEach(_),this.h()},h(){m(e,"class",s="content "+(n[0]?"":"hidden")+" svelte-ty4tq5")},m(a,i){D(a,e,i),F(l,e,null),t=!0,o||(r=q(e,"click",ye(n[10])),o=!0)},p(a,i){(!t||i&1&&s!==(s="content "+(a[0]?"":"hidden")+" svelte-ty4tq5"))&&m(e,"class",s)},i(a){t||(y(l.$$.fragment,a),t=!0)},o(a){I(l.$$.fragment,a),t=!1},d(a){a&&_(e),H(l),o=!1,r()}}}function Ue(n){let e,l,s,t,o,r,a,i,u=S(n[3]),d=[];for(let c=0;c<u.length;c+=1)d[c]=ce(ie(n,u,c));const b=c=>I(d[c],1,1,()=>{d[c]=null});let f=n[2].name==="mobile"&&ue(n);return{c(){e=p("div"),l=p("ul");for(let c=0;c<d.length;c+=1)d[c].c();s=T(),f&&f.c(),this.h()},l(c){e=$(c,"DIV",{class:!0,tabindex:!0,role:!0});var h=k(e);l=$(h,"UL",{class:!0});var g=k(l);for(let E=0;E<d.length;E+=1)d[E].l(g);g.forEach(_),s=z(h),f&&f.l(h),h.forEach(_),this.h()},h(){m(l,"class","svelte-ty4tq5"),m(e,"class","contact-menu svelte-ty4tq5"),m(e,"tabindex",t=n[2].name==="mobile"?0:void 0),m(e,"role",o=n[2].name==="mobile"?"button":void 0)},m(c,h){D(c,e,h),v(e,l);for(let g=0;g<d.length;g+=1)d[g]&&d[g].m(l,null);v(e,s),f&&f.m(e,null),r=!0,a||(i=[q(e,"click",function(){se(n[2].name==="mobile"?n[5]:void 0)&&(n[2].name==="mobile"?n[5]:void 0).apply(this,arguments)}),q(e,"keydown",function(){se(n[2].name==="mobile"?n[4]:void 0)&&(n[2].name==="mobile"?n[4]:void 0).apply(this,arguments)})],a=!0)},p(c,[h]){if(n=c,h&974){u=S(n[3]);let g;for(g=0;g<u.length;g+=1){const E=ie(n,u,g);d[g]?(d[g].p(E,h),y(d[g],1)):(d[g]=ce(E),d[g].c(),y(d[g],1),d[g].m(l,null))}for(R(),g=u.length;g<d.length;g+=1)b(g);W()}n[2].name==="mobile"?f?(f.p(n,h),h&4&&y(f,1)):(f=ue(n),f.c(),y(f,1),f.m(e,null)):f&&(R(),I(f,1,1,()=>{f=null}),W()),(!r||h&4&&t!==(t=n[2].name==="mobile"?0:void 0))&&m(e,"tabindex",t),(!r||h&4&&o!==(o=n[2].name==="mobile"?"button":void 0))&&m(e,"role",o)},i(c){if(!r){for(let h=0;h<u.length;h+=1)y(d[h]);y(f),r=!0}},o(c){d=d.filter(Boolean);for(let h=0;h<d.length;h+=1)I(d[h]);I(f),r=!1},d(c){c&&_(e),Z(d,c),f&&f.d(),a=!1,Y(i)}}}function Oe(n,e,l){let s;me(n,Ee,w=>l(2,s=w));const t=Te.data;let o=!1,r=-1;function a(w){(w.key===" "||w.key==="Enter")&&i()}function i(){l(0,o=!o)}function u(w,V){const M=w.currentTarget,O=w.target;M.contains(O)&&l(1,r=V)}function d(w,V){const M=w.currentTarget,O=w.relatedTarget;M.contains(O)||l(1,r=-1)}function b(w){}function f(){}function c(w){ve.call(this,n,w)}return[o,r,s,t,a,i,u,d,b,f,c,(w,V)=>u(V,w),(w,V)=>d(V),w=>void 0,()=>void 0]}class Ae extends j{constructor(e){super(),G(this,e,Oe,Ue,K,{})}}const Pe=()=>{const n=Le;return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},updated:n.updated}},Fe={subscribe(n){return Pe().page.subscribe(n)}};function fe(n,e,l){const s=n.slice();return s[2]=e[l],s}function he(n){let e,l,s,t,o;return{c(){e=p("li"),l=p("a"),s=p("i"),o=T(),this.h()},l(r){e=$(r,"LI",{class:!0});var a=k(e);l=$(a,"A",{href:!0,"aria-current":!0,tabindex:!0,class:!0});var i=k(l);s=$(i,"I",{class:!0}),k(s).forEach(_),i.forEach(_),o=z(a),a.forEach(_),this.h()},h(){m(s,"class","fa fa-solid fa-"+n[2].icon+" svelte-1mt97ma"),m(l,"href",n[2].href),m(l,"aria-current",t=n[0].url.pathname==="{link.href}"),m(l,"tabindex","0"),m(l,"class","svelte-1mt97ma"),m(e,"class","svelte-1mt97ma")},m(r,a){D(r,e,a),v(e,l),v(l,s),v(e,o)},p(r,a){a&1&&t!==(t=r[0].url.pathname==="{link.href}")&&m(l,"aria-current",t)},d(r){r&&_(e)}}}function He(n){let e,l,s=S(n[1]),t=[];for(let o=0;o<s.length;o+=1)t[o]=he(fe(n,s,o));return{c(){e=p("nav"),l=p("ul");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=$(o,"NAV",{class:!0});var r=k(e);l=$(r,"UL",{class:!0});var a=k(l);for(let i=0;i<t.length;i+=1)t[i].l(a);a.forEach(_),r.forEach(_),this.h()},h(){m(l,"class","svelte-1mt97ma"),m(e,"class","page-menu svelte-1mt97ma")},m(o,r){D(o,e,r),v(e,l);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(l,null)},p(o,[r]){if(r&3){s=S(o[1]);let a;for(a=0;a<s.length;a+=1){const i=fe(o,s,a);t[a]?t[a].p(i,r):(t[a]=he(i),t[a].c(),t[a].m(l,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=s.length}},i:U,o:U,d(o){o&&_(e),Z(t,o)}}}function Se(n,e,l){let s;me(n,Fe,o=>l(0,s=o));const t=[{text:"",href:Q+"/",value:"",icon:"user"},{text:"",href:Q+"/experience",value:"",icon:"suitcase"},{text:"",href:Q+"/education",value:"",icon:"graduation-cap"},{text:"",href:Q+"/skills",value:"",icon:"bar-chart"}];return[s,t]}class de extends j{constructor(e){super(),G(this,e,Se,He,K,{})}}function Ke(n){let e,l,s,t,o="EN",r,a,i,u="SE",d,b;return{c(){e=p("div"),l=p("ul"),s=p("li"),t=p("button"),t.textContent=o,r=T(),a=p("li"),i=p("button"),i.textContent=u,this.h()},l(f){e=$(f,"DIV",{});var c=k(e);l=$(c,"UL",{class:!0});var h=k(l);s=$(h,"LI",{class:!0});var g=k(s);t=$(g,"BUTTON",{class:!0,"data-svelte-h":!0}),X(t)!=="svelte-m26hfv"&&(t.textContent=o),g.forEach(_),r=z(h),a=$(h,"LI",{class:!0});var E=k(a);i=$(E,"BUTTON",{class:!0,"data-svelte-h":!0}),X(i)!=="svelte-wnkh07"&&(i.textContent=u),E.forEach(_),h.forEach(_),c.forEach(_),this.h()},h(){m(t,"class","svelte-1hspmw3"),m(s,"class","svelte-1hspmw3"),m(i,"class","svelte-1hspmw3"),m(a,"class","svelte-1hspmw3"),m(l,"class","svelte-1hspmw3")},m(f,c){D(f,e,c),v(e,l),v(l,s),v(s,t),v(l,r),v(l,a),v(a,i),d||(b=[q(t,"click",n[1]),q(i,"click",n[2])],d=!0)},p:U,i:U,o:U,d(f){f&&_(e),d=!1,Y(b)}}}function je(n){function e(t){Ve.set(t)}return[e,()=>e("en"),()=>e("se")]}class Ge extends j{constructor(e){super(),G(this,e,je,Ke,K,{})}}function Je(n){let e,l,s,t,o,r,a,i,u,d,b,f,c,h='<div class="profile-picture-float svelte-s1gwzg"><img src="place.png" alt="" class="svelte-s1gwzg"/></div>',g,E,J,w,V,M;t=new Ae({}),a=new de({}),b=new Ge({});const O=n[1].default,L=ge(O,n,n[0],null);return V=new de({}),{c(){e=p("div"),l=p("div"),s=p("div"),A(t.$$.fragment),o=T(),r=p("div"),A(a.$$.fragment),i=T(),u=p("div"),d=T(),A(b.$$.fragment),f=T(),c=p("div"),c.innerHTML=h,g=T(),E=p("section"),L&&L.c(),J=T(),w=p("div"),A(V.$$.fragment),this.h()},l(C){e=$(C,"DIV",{class:!0});var N=k(e);l=$(N,"DIV",{class:!0});var B=k(l);s=$(B,"DIV",{});var x=k(s);P(t.$$.fragment,x),x.forEach(_),o=z(B),r=$(B,"DIV",{class:!0});var ee=k(r);P(a.$$.fragment,ee),ee.forEach(_),i=z(B),u=$(B,"DIV",{}),k(u).forEach(_),d=z(B),P(b.$$.fragment,B),B.forEach(_),f=z(N),c=$(N,"DIV",{class:!0,"data-svelte-h":!0}),X(c)!=="svelte-pkxr9l"&&(c.innerHTML=h),g=z(N),E=$(N,"SECTION",{class:!0});var te=k(E);L&&L.l(te),te.forEach(_),J=z(N),w=$(N,"DIV",{class:!0});var le=k(w);P(V.$$.fragment,le),le.forEach(_),N.forEach(_),this.h()},h(){m(r,"class","page-menu svelte-s1gwzg"),m(l,"class","left-menu svelte-s1gwzg"),m(c,"class","profile-picture svelte-s1gwzg"),m(E,"class","content svelte-s1gwzg"),m(w,"class","right-menu svelte-s1gwzg"),m(e,"class","main-container svelte-s1gwzg")},m(C,N){D(C,e,N),v(e,l),v(l,s),F(t,s,null),v(l,o),v(l,r),F(a,r,null),v(l,i),v(l,u),v(l,d),F(b,l,null),v(e,f),v(e,c),v(e,g),v(e,E),L&&L.m(E,null),v(e,J),v(e,w),F(V,w,null),M=!0},p(C,[N]){L&&L.p&&(!M||N&1)&&pe(L,O,C,C[0],M?be(O,C[0],N,null):$e(C[0]),null)},i(C){M||(y(t.$$.fragment,C),y(a.$$.fragment,C),y(b.$$.fragment,C),y(L,C),y(V.$$.fragment,C),M=!0)},o(C){I(t.$$.fragment,C),I(a.$$.fragment,C),I(b.$$.fragment,C),I(L,C),I(V.$$.fragment,C),M=!1},d(C){C&&_(e),H(t),H(a),H(b),L&&L.d(C),H(V)}}}function Qe(n,e,l){let{$$slots:s={},$$scope:t}=e;return n.$$set=o=>{"$$scope"in o&&l(0,t=o.$$scope)},[t,s]}class tt extends j{constructor(e){super(),G(this,e,Qe,Je,K,{})}}export{tt as component};
