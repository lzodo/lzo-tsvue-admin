import{u as N,q as b,R as S,aA as P,a5 as z,ap as m,w as R,T,F as O,U as j,a9 as F,an as x,aB as M,v as I,N as V,aC as q,aD as g,am as C,at as $,aE as D,aF as Z,d as H,aw as K,ar as U,o as k,e as w,$ as Y,g as p,h as G,n as L}from"./index-92b17008.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";function Q(t){let e;const a=N("loading"),l=b(!1),s=S({...t,originalPosition:"",originalOverflow:"",visible:!1});function o(n){s.text=n}function i(){const n=s.parent;if(!n.vLoadingAddClassList){let d=n.getAttribute("loading-number");d=Number.parseInt(d)-1,d?n.setAttribute("loading-number",d.toString()):(x(n,a.bm("parent","relative")),n.removeAttribute("loading-number")),x(n,a.bm("parent","hidden"))}u(),f.unmount()}function u(){var n,d;(d=(n=r.$el)==null?void 0:n.parentNode)==null||d.removeChild(r.$el)}function v(){var n;t.beforeClose&&!t.beforeClose()||(l.value=!0,clearTimeout(e),e=window.setTimeout(c,400),s.visible=!1,(n=t.closed)==null||n.call(t))}function c(){if(!l.value)return;const n=s.parent;l.value=!1,n.vLoadingAddClassList=void 0,i()}const f=P({name:"ElLoading",setup(){return()=>{const n=s.spinner||s.svg,d=m("svg",{class:"circular",viewBox:s.svgViewBox?s.svgViewBox:"0 0 50 50",...n?{innerHTML:n}:{}},[m("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),E=s.text?m("p",{class:a.b("text")},[s.text]):void 0;return m(F,{name:a.b("fade"),onAfterLeave:c},{default:R(()=>[T(O("div",{style:{backgroundColor:s.background||""},class:[a.b("mask"),s.customClass,s.fullscreen?"is-fullscreen":""]},[m("div",{class:a.b("spinner")},[d,E])]),[[j,s.visible]])])})}}}),r=f.mount(document.createElement("div"));return{...z(s),setText:o,removeElLoadingChild:u,close:v,handleAfterLeave:c,vm:r,get $el(){return r.$el}}}let _;const W=function(t={}){if(!M)return;const e=X(t);if(e.fullscreen&&_)return _;const a=Q({...e,closed:()=>{var s;(s=e.closed)==null||s.call(e),e.fullscreen&&(_=void 0)}});ee(e,e.parent,a),A(e,e.parent,a),e.parent.vLoadingAddClassList=()=>A(e,e.parent,a);let l=e.parent.getAttribute("loading-number");return l?l=`${Number.parseInt(l)+1}`:l="1",e.parent.setAttribute("loading-number",l),e.parent.appendChild(a.$el),I(()=>a.visible.value=e.visible),e.fullscreen&&(_=a),a},X=t=>{var e,a,l,s;let o;return V(t.target)?o=(e=document.querySelector(t.target))!=null?e:document.body:o=t.target||document.body,{parent:o===document.body||t.body?document.body:o,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:o===document.body&&((a=t.fullscreen)!=null?a:!0),lock:(l=t.lock)!=null?l:!1,customClass:t.customClass||"",visible:(s=t.visible)!=null?s:!0,target:o}},ee=async(t,e,a)=>{const{nextZIndex:l}=q(),s={};if(t.fullscreen)a.originalPosition.value=g(document.body,"position"),a.originalOverflow.value=g(document.body,"overflow"),s.zIndex=l();else if(t.parent===document.body){a.originalPosition.value=g(document.body,"position"),await I();for(const o of["top","left"]){const i=o==="top"?"scrollTop":"scrollLeft";s[o]=`${t.target.getBoundingClientRect()[o]+document.body[i]+document.documentElement[i]-Number.parseInt(g(document.body,`margin-${o}`),10)}px`}for(const o of["height","width"])s[o]=`${t.target.getBoundingClientRect()[o]}px`}else a.originalPosition.value=g(e,"position");for(const[o,i]of Object.entries(s))a.$el.style[o]=i},A=(t,e,a)=>{const l=N("loading");["absolute","fixed","sticky"].includes(a.originalPosition.value)?x(e,l.bm("parent","relative")):C(e,l.bm("parent","relative")),t.fullscreen&&t.lock?C(e,l.bm("parent","hidden")):x(e,l.bm("parent","hidden"))},h=Symbol("ElLoading"),B=(t,e)=>{var a,l,s,o;const i=e.instance,u=r=>$(e.value)?e.value[r]:void 0,v=r=>{const n=V(r)&&(i==null?void 0:i[r])||r;return n&&b(n)},c=r=>v(u(r)||t.getAttribute(`element-loading-${Z(r)}`)),y=(a=u("fullscreen"))!=null?a:e.modifiers.fullscreen,f={text:c("text"),svg:c("svg"),svgViewBox:c("svgViewBox"),spinner:c("spinner"),background:c("background"),customClass:c("customClass"),fullscreen:y,target:(l=u("target"))!=null?l:y?void 0:t,body:(s=u("body"))!=null?s:e.modifiers.body,lock:(o=u("lock"))!=null?o:e.modifiers.lock};t[h]={options:f,instance:W(f)}},te=(t,e)=>{for(const a of Object.keys(e))D(e[a])&&(e[a].value=t[a])},ae={mounted(t,e){e.value&&B(t,e)},updated(t,e){const a=t[h];e.oldValue!==e.value&&(e.value&&!e.oldValue?B(t,e):e.value&&e.oldValue?$(e.value)&&te(e.value,a.options):a==null||a.instance.close())},unmounted(t){var e;(e=t[h])==null||e.instance.close()}};const se=["src"],le=H({__name:"iframes",setup(t){const e=K();let a=b();const l=b(!0);let s="default",o=b(!1);return U(()=>{switch(l.value=!0,e.params.id){case"iot":s="default",a.value="http://iot.huihezn.com";break;case"mvue":s="mobile",a.value="http://m.vue.lzoxun.top";break;case"docs":s="default",a.value="http://docs.lzoxun.top/docs/other-weblinks/";break;case"case":s="default",a.value="http://case.lzoxun.top";break}setTimeout(()=>{l.value=!1,o.value=!0},500)}),(i,u)=>{const v=ae;return T((k(),w("div",{class:L(["iframes-page page",{isMobile:p(s)=="mobile"}]),"element-loading-background":"#fff"},[Y("div",{class:L(["warp",{isMobile:p(s)=="mobile"}])},[p(o)?(k(),w("iframe",{key:0,src:p(a),title:"description"},null,8,se)):G("",!0)],2)],2)),[[v,l.value]])}}});const re=J(le,[["__scopeId","data-v-5ed2b12c"]]);export{re as default};