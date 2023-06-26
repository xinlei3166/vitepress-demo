import{_ as $,H as P,o as w,c as b,J as k,E as L,a as W,F as Ct,d as et,h as x,a5 as st,a6 as me,C as y,t as lt,f as he,b as Gt,i as ge,j as _e,l as U,w as Ut,m as ye,p as jt,X as ve,D as it,a7 as we,R as xe,n as ut,N as $e,a8 as be,a9 as Xt,r as z,I as zt,a0 as Jt,aa as wt,T as Kt,u as Yt,A as Ce,G as Bt,S as ke,U as Le,Q as xt,ab as Te,ac as Re,ad as Ae,ae as Ee,af as Be,ag as Fe,ah as Pe,ai as De,aj as Se,ak as Ve,M as Me,k as He,al as Ne,am as Ie,an as Oe}from"./chunks/framework.5a6c995c.js";import{t as Ft}from"./chunks/theme.03e61a1b.js";const Ze={};function We(t,n){const e=P("xl-button");return w(),b(Ct,null,[k(e,null,{default:L(()=>[W("默认按钮")]),_:1}),k(e,{type:"primary"},{default:L(()=>[W("主要按钮")]),_:1}),k(e,{type:"success"},{default:L(()=>[W("成功按钮")]),_:1}),k(e,{type:"info"},{default:L(()=>[W("信息按钮")]),_:1}),k(e,{type:"warning"},{default:L(()=>[W("警告按钮")]),_:1}),k(e,{type:"danger"},{default:L(()=>[W("危险按钮")]),_:1})],64)}const Ge=$(Ze,[["render",We]]);const Ue=et({name:"InputDemo",setup(){const t=x(),n=x();function e(){n.value=t.value}return{input:t,content:n,onSubmit:e}}}),je={style:{"margin-top":"16px"}};function Xe(t,n,e,o,s,i){const c=P("xl-button");return w(),b(Ct,null,[st(y("input",{class:"input",type:"text","onUpdate:modelValue":n[0]||(n[0]=r=>t.input=r)},null,512),[[me,t.input]]),k(c,{type:"primary",onClick:t.onSubmit},{default:L(()=>[W("提交")]),_:1},8,["onClick"]),y("div",je,"输出内容："+lt(t.content),1)],64)}const ze=$(Ue,[["render",Xe]]);function Qt(t){return ge()?(_e(t),!0):!1}function dt(t){return typeof t=="function"?t():Gt(t)}const pt=typeof window<"u",Je=()=>{};function Ke(t,n,e={}){const{immediate:o=!0}=e,s=x(!1);let i=null;function c(){i&&(clearTimeout(i),i=null)}function r(){s.value=!1,c()}function d(...l){c(),s.value=!0,i=setTimeout(()=>{s.value=!1,i=null,t(...l)},dt(n))}return o&&(s.value=!0,pt&&d()),Qt(r),{isPending:he(s),start:d,stop:r}}function Ye(t){var n;const e=dt(t);return(n=e==null?void 0:e.$el)!=null?n:e}const Qe=pt?window:void 0,qe=pt?window.navigator:void 0;function tn(...t){let n,e,o,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([e,o,s]=t,n=Qe):[n,e,o,s]=t,!n)return Je;Array.isArray(e)||(e=[e]),Array.isArray(o)||(o=[o]);const i=[],c=()=>{i.forEach(f=>f()),i.length=0},r=(f,p,h,m)=>(f.addEventListener(p,h,m),()=>f.removeEventListener(p,h,m)),d=Ut(()=>[Ye(n),dt(s)],([f,p])=>{c(),f&&i.push(...e.flatMap(h=>o.map(m=>r(f,h,m,p))))},{immediate:!0,flush:"post"}),l=()=>{d(),c()};return Qt(l),l}function en(){const t=x(!1);return ye()&&jt(()=>{t.value=!0}),t}function nn(t){const n=en();return U(()=>(n.value,!!t()))}function on(t={}){const{navigator:n=qe,read:e=!1,source:o,copiedDuring:s=1500,legacy:i=!1}=t,c=["copy","cut"],r=nn(()=>n&&"clipboard"in n),d=U(()=>r.value||i),l=x(""),f=x(!1),p=Ke(()=>f.value=!1,s);function h(){r.value?n.clipboard.readText().then(u=>{l.value=u}):l.value=a()}if(d.value&&e)for(const u of c)tn(u,h);async function m(u=dt(o)){d.value&&u!=null&&(r.value?await n.clipboard.writeText(u):_(u),l.value=u,f.value=!0,p.start())}function _(u){const g=document.createElement("textarea");g.value=u??"",g.style.position="absolute",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),g.remove()}function a(){var u,g,v;return(v=(g=(u=document==null?void 0:document.getSelection)==null?void 0:u.call(document))==null?void 0:g.toString())!=null?v:""}return{isSupported:d,text:l,copied:f,copy:m}}const Pt="demoblock",sn="is-",Z=(t,n,e,o,s)=>{let i=`${t}-${n}`;return e&&(i+=`-${e}`),o&&(i+=`__${o}`),s&&(i+=`--${s}`),i},cn=Symbol("namespaceContextKey"),an=t=>{const n=t||ve(cn,x(Pt));return U(()=>Gt(n)||Pt)},rn=(t,n)=>{const e=an(n);return{namespace:e,b:(a="")=>Z(e.value,t,a,"",""),e:a=>a?Z(e.value,t,"",a,""):"",m:a=>a?Z(e.value,t,"","",a):"",be:(a,u)=>a&&u?Z(e.value,t,a,u,""):"",em:(a,u)=>a&&u?Z(e.value,t,"",a,u):"",bm:(a,u)=>a&&u?Z(e.value,t,a,"",u):"",bem:(a,u,g)=>a&&u&&g?Z(e.value,t,a,u,g):"",is:(a,...u)=>{const g=u.length>=1?u[0]:!0;return a&&g?`${sn}${a}`:""},cssVar:a=>{const u={};for(const g in a)a[g]&&(u[`--${e.value}-${g}`]=a[g]);return u},cssVarName:a=>`--${e.value}-${a}`,cssVarBlock:a=>{const u={};for(const g in a)a[g]&&(u[`--${e.value}-${t}-${g}`]=a[g]);return u},cssVarBlockName:a=>`--${e.value}-${t}-${a}`}};function ln(t){return btoa(unescape(encodeURIComponent(t)))}const un="App.vue",dn=t=>{const n=decodeURIComponent(t),e={[un]:n},o=ln(JSON.stringify(e)),s=`https://play.vuejs.org/#${o}`;return{encoded:o,link:s}},pn={name:"FluentCheckmarkCircle16Filled"},fn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16"},mn=y("path",{fill:"currentColor",d:"M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm2.12 4.164L7.25 9.042L5.854 7.646a.5.5 0 1 0-.708.708l1.75 1.75a.5.5 0 0 0 .708 0l3.224-3.234a.5.5 0 0 0-.708-.706Z"},null,-1),hn=[mn];function gn(t,n,e,o,s,i){return w(),b("svg",fn,hn)}const _n=$(pn,[["render",gn]]),yn={name:"FluentDismissCircle16Filled"},vn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16"},wn=y("path",{fill:"currentColor",d:"M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2ZM6.534 5.839a.5.5 0 0 0-.638.057l-.057.07a.5.5 0 0 0 .057.638L7.293 8L5.896 9.396l-.057.07a.5.5 0 0 0 .057.638l.07.057a.5.5 0 0 0 .638-.057L8 8.707l1.396 1.397l.07.057a.5.5 0 0 0 .638-.057l.057-.07a.5.5 0 0 0-.057-.638L8.707 8l1.397-1.396l.057-.07a.5.5 0 0 0-.057-.638l-.07-.057a.5.5 0 0 0-.638.057L8 7.293L6.604 5.896l-.07-.057Z"},null,-1),xn=[wn];function $n(t,n,e,o,s,i){return w(),b("svg",vn,xn)}const bn=$(yn,[["render",$n]]),Cn={name:"FluentErrorCircle16Filled"},kn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16"},Ln=y("path",{fill:"currentColor",d:"M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 8a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5Zm0-5.5a.5.5 0 0 0-.492.41L7.5 5v3.5l.008.09a.5.5 0 0 0 .984 0L8.5 8.5V5l-.008-.09A.5.5 0 0 0 8 4.5Z"},null,-1),Tn=[Ln];function Rn(t,n,e,o,s,i){return w(),b("svg",kn,Tn)}const An=$(Cn,[["render",Rn]]);let En=0;function Bn(){return"message_"+En++}const Fn=et({components:{FluentCheckmarkCircle16Filled:_n,FluentDismissCircle16Filled:bn,FluentErrorCircle16Filled:An},setup(){const t={info:"FluentErrorCircle16Filled",success:"FluentCheckmarkCircle16Filled",warning:"FluentDismissCircle16Filled",error:"FluentErrorCircle16Filled"},n=x([]);function e(s){const i=Bn(),c={name:i,show:!0,...s};n.value.push(c);const r=s.duration;setTimeout(()=>{o(i)},r*1e3)}function o(s){for(const[i,c]of n.value.entries())if(c.name===s){n.value.splice(i,1);break}}return{components:t,messages:n,add:e,remove:o}}}),Pn={class:"demoblock-message-content"};function Dn(t,n,e,o,s,i){return w(),it(we,{name:"demoblock-fade-transition",tag:"div",class:"demoblock-messages"},{default:L(()=>[(w(!0),b(Ct,null,xe(t.messages,c=>(w(),b("div",{key:c.name,class:"demoblock-message-wrap"},[y("div",{class:ut(["demoblock-message",c.type?`demoblock-message--${c.type}`:""])},[(w(),it($e(t.components[c.type]),{class:"demoblock-message-icon"})),y("div",Pn,lt(c.content),1)],2)]))),128))]),_:1})}const $t=$(Fn,[["render",Dn],["__scopeId","data-v-0d24f71d"]]);$t.newInstance=(t={})=>{const n=document.createElement("div"),s=be({render(){return Xt($t,{...t,ref:"messageRef"})}}).mount(n).$refs.messageRef;return document.body.appendChild(n.firstElementChild),{add(i){s.add(i)},remove(i){s.remove(i)}}};let yt;function Sn(){return yt=yt||$t.newInstance(),yt}function ot(t,{duration:n=3,type:e=""}){Sn().add({content:t,duration:n,type:e})}const Dt={info(t,n){return ot(t,{...n,type:"info"})},warning(t,n){return ot(t,{...n,type:"warning"})},success(t,n){return ot(t,{...n,type:"success"})},error(t,n){return ot(t,{...n,type:"error"})}},Vn={name:"RiFlaskLine"},Mn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Hn=y("path",{fill:"currentColor",d:"M16 2v2h-1v3.243a8 8 0 0 0 .736 3.352l4.281 9.276A1.5 1.5 0 0 1 18.655 22H5.344a1.5 1.5 0 0 1-1.362-2.129l4.281-9.276A8 8 0 0 0 9 7.243V4H8V2h8Zm-2.613 8.001h-2.776a9.986 9.986 0 0 1-.374 1.071l-.158.362L6.124 20h11.75l-3.954-8.566A9.99 9.99 0 0 1 13.387 10ZM11 7.243c0 .253-.01.506-.028.758h2.057a9.59 9.59 0 0 1-.02-.364L13 7.243V4h-2v3.243Z"},null,-1),Nn=[Hn];function In(t,n,e,o,s,i){return w(),b("svg",Mn,Nn)}const On=$(Vn,[["render",In]]),Zn={name:"RiGithubLine"},Wn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Gn=y("path",{fill:"currentColor",d:"M5.884 18.653c-.3-.2-.558-.456-.86-.816a50.59 50.59 0 0 1-.466-.579c-.463-.575-.755-.841-1.056-.95a1 1 0 1 1 .675-1.882c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.588.196 1.15.14c.024-.382.094-.753.202-1.096c-2.968-.725-4.648-2.64-4.648-6.396c0-1.238.37-2.355 1.058-3.291c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.583c.081-.024.127-.034.208-.047c.803-.123 1.937.17 3.415 1.097a11.731 11.731 0 0 1 2.687-.308c.912 0 1.819.103 2.684.308c1.477-.933 2.614-1.227 3.422-1.097c.085.014.158.032.218.051a1 1 0 0 1 .616.58c.487 1.215.52 2.296.302 3.19c.691.936 1.058 2.045 1.058 3.292c0 3.758-1.674 5.666-4.642 6.393c.125.415.19.878.19 1.38c0 .664-.002 1.299-.007 2.01c0 .19-.002.394-.005.706a1 1 0 0 1-.018 1.957c-1.14.228-1.984-.532-1.984-1.524l.002-.447l.005-.705c.005-.707.008-1.338.008-1.997c0-.697-.184-1.152-.426-1.361c-.661-.57-.326-1.654.541-1.751c2.966-.334 4.336-1.483 4.336-4.66c0-.955-.312-1.745-.913-2.405a1 1 0 0 1-.189-1.044c.166-.415.236-.957.095-1.614l-.01.002c-.491.14-1.11.44-1.858.95a1 1 0 0 1-.833.135a9.626 9.626 0 0 0-2.592-.35c-.89 0-1.772.12-2.592.35a1 1 0 0 1-.829-.133c-.753-.507-1.374-.807-1.87-.947c-.143.653-.072 1.194.093 1.607a1 1 0 0 1-.189 1.044c-.597.656-.913 1.459-.913 2.404c0 3.172 1.371 4.33 4.322 4.66c.865.098 1.202 1.178.545 1.749c-.193.167-.43.732-.43 1.364v3.149c0 .986-.834 1.726-1.96 1.529a1 1 0 0 1-.04-1.963v-.99c-.91.062-1.661-.087-2.254-.484Z"},null,-1),Un=[Gn];function jn(t,n,e,o,s,i){return w(),b("svg",Wn,Un)}const Xn=$(Zn,[["render",jn]]),zn={name:"RiFileCopyLine"},Jn={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Kn=y("path",{fill:"currentColor",d:"M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1H7ZM5.002 8L5 20h10V8H5.002ZM9 6h8v10h2V4H9v2Z"},null,-1),Yn=[Kn];function Qn(t,n,e,o,s,i){return w(),b("svg",Jn,Yn)}const qn=$(zn,[["render",Qn]]),to={name:"RiCodeLine"},eo={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},no=y("path",{fill:"currentColor",d:"m23 12l-7.071 7.07l-1.414-1.413L20.172 12l-5.657-5.657l1.414-1.414L23 11.999ZM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12Z"},null,-1),oo=[no];function so(t,n,e,o,s,i){return w(),b("svg",eo,oo)}const io=$(to,[["render",so]]),co={name:"EpCaretTop"},ao={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 1024 1024"},ro=y("path",{fill:"currentColor",d:"M512 320L192 704h639.936z"},null,-1),lo=[ro];function uo(t,n,e,o,s,i){return w(),b("svg",ao,lo)}const po=$(co,[["render",uo]]);function ft(t){return t.split("-")[1]}function qt(t){return t==="y"?"height":"width"}function G(t){return t.split("-")[0]}function mt(t){return["top","bottom"].includes(G(t))?"x":"y"}function St(t,n,e){let{reference:o,floating:s}=t;const i=o.x+o.width/2-s.width/2,c=o.y+o.height/2-s.height/2,r=mt(n),d=qt(r),l=o[d]/2-s[d]/2,f=r==="x";let p;switch(G(n)){case"top":p={x:i,y:o.y-s.height};break;case"bottom":p={x:i,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:c};break;case"left":p={x:o.x-s.width,y:c};break;default:p={x:o.x,y:o.y}}switch(ft(n)){case"start":p[r]-=l*(e&&f?-1:1);break;case"end":p[r]+=l*(e&&f?-1:1)}return p}const fo=async(t,n,e)=>{const{placement:o="bottom",strategy:s="absolute",middleware:i=[],platform:c}=e,r=i.filter(Boolean),d=await(c.isRTL==null?void 0:c.isRTL(n));let l=await c.getElementRects({reference:t,floating:n,strategy:s}),{x:f,y:p}=St(l,o,d),h=o,m={},_=0;for(let a=0;a<r.length;a++){const{name:u,fn:g}=r[a],{x:v,y:C,data:M,reset:E}=await g({x:f,y:p,initialPlacement:o,placement:h,strategy:s,middlewareData:m,rects:l,platform:c,elements:{reference:t,floating:n}});f=v??f,p=C??p,m={...m,[u]:{...m[u],...M}},E&&_<=50&&(_++,typeof E=="object"&&(E.placement&&(h=E.placement),E.rects&&(l=E.rects===!0?await c.getElementRects({reference:t,floating:n,strategy:s}):E.rects),{x:f,y:p}=St(l,h,d)),a=-1)}return{x:f,y:p,placement:h,strategy:s,middlewareData:m}};function mo(t){return typeof t!="number"?function(n){return{top:0,right:0,bottom:0,left:0,...n}}(t):{top:t,right:t,bottom:t,left:t}}function ct(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function te(t,n){var e;n===void 0&&(n={});const{x:o,y:s,platform:i,rects:c,elements:r,strategy:d}=t,{boundary:l="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:h=!1,padding:m=0}=n,_=mo(m),a=r[h?p==="floating"?"reference":"floating":p],u=ct(await i.getClippingRect({element:(e=await(i.isElement==null?void 0:i.isElement(a)))==null||e?a:a.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(r.floating)),boundary:l,rootBoundary:f,strategy:d})),g=p==="floating"?{...c.floating,x:o,y:s}:c.reference,v=await(i.getOffsetParent==null?void 0:i.getOffsetParent(r.floating)),C=await(i.isElement==null?void 0:i.isElement(v))&&await(i.getScale==null?void 0:i.getScale(v))||{x:1,y:1},M=ct(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:g,offsetParent:v,strategy:d}):g);return{top:(u.top-M.top+_.top)/C.y,bottom:(M.bottom-u.bottom+_.bottom)/C.y,left:(u.left-M.left+_.left)/C.x,right:(M.right-u.right+_.right)/C.x}}const ho=Math.min,go=Math.max;function Vt(t,n,e){return go(t,ho(n,e))}const _o=["top","right","bottom","left"];_o.reduce((t,n)=>t.concat(n,n+"-start",n+"-end"),[]);const yo={left:"right",right:"left",bottom:"top",top:"bottom"};function at(t){return t.replace(/left|right|bottom|top/g,n=>yo[n])}function vo(t,n,e){e===void 0&&(e=!1);const o=ft(t),s=mt(t),i=qt(s);let c=s==="x"?o===(e?"end":"start")?"right":"left":o==="start"?"bottom":"top";return n.reference[i]>n.floating[i]&&(c=at(c)),{main:c,cross:at(c)}}const wo={start:"end",end:"start"};function vt(t){return t.replace(/start|end/g,n=>wo[n])}const xo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(n){var e;const{placement:o,middlewareData:s,rects:i,initialPlacement:c,platform:r,elements:d}=n,{mainAxis:l=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:_=!0,...a}=t,u=G(o),g=G(c)===c,v=await(r.isRTL==null?void 0:r.isRTL(d.floating)),C=p||(g||!_?[at(c)]:function(T){const D=at(T);return[vt(T),D,vt(D)]}(c));p||m==="none"||C.push(...function(T,D,O,H){const S=ft(T);let R=function(Y,_t,de){const At=["left","right"],Et=["right","left"],pe=["top","bottom"],fe=["bottom","top"];switch(Y){case"top":case"bottom":return de?_t?Et:At:_t?At:Et;case"left":case"right":return _t?pe:fe;default:return[]}}(G(T),O==="start",H);return S&&(R=R.map(Y=>Y+"-"+S),D&&(R=R.concat(R.map(vt)))),R}(c,_,m,v));const M=[c,...C],E=await te(n,a),nt=[];let K=((e=s.flip)==null?void 0:e.overflows)||[];if(l&&nt.push(E[u]),f){const{main:T,cross:D}=vo(o,i,v);nt.push(E[T],E[D])}if(K=[...K,{placement:o,overflows:nt}],!nt.every(T=>T<=0)){var Lt,Tt;const T=(((Lt=s.flip)==null?void 0:Lt.index)||0)+1,D=M[T];if(D)return{data:{index:T,overflows:K},reset:{placement:D}};let O=(Tt=K.filter(H=>H.overflows[0]<=0).sort((H,S)=>H.overflows[1]-S.overflows[1])[0])==null?void 0:Tt.placement;if(!O)switch(h){case"bestFit":{var Rt;const H=(Rt=K.map(S=>[S.placement,S.overflows.filter(R=>R>0).reduce((R,Y)=>R+Y,0)]).sort((S,R)=>S[1]-R[1])[0])==null?void 0:Rt[0];H&&(O=H);break}case"initialPlacement":O=c}if(o!==O)return{reset:{placement:O}}}return{}}}},$o=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(n){const{x:e,y:o}=n,s=await async function(i,c){const{placement:r,platform:d,elements:l}=i,f=await(d.isRTL==null?void 0:d.isRTL(l.floating)),p=G(r),h=ft(r),m=mt(r)==="x",_=["left","top"].includes(p)?-1:1,a=f&&m?-1:1,u=typeof c=="function"?c(i):c;let{mainAxis:g,crossAxis:v,alignmentAxis:C}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return h&&typeof C=="number"&&(v=h==="end"?-1*C:C),m?{x:v*a,y:g*_}:{x:g*_,y:v*a}}(n,t);return{x:e+s.x,y:o+s.y,data:s}}}};function bo(t){return t==="x"?"y":"x"}const Co=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(n){const{x:e,y:o,placement:s}=n,{mainAxis:i=!0,crossAxis:c=!1,limiter:r={fn:u=>{let{x:g,y:v}=u;return{x:g,y:v}}},...d}=t,l={x:e,y:o},f=await te(n,d),p=mt(G(s)),h=bo(p);let m=l[p],_=l[h];if(i){const u=p==="y"?"bottom":"right";m=Vt(m+f[p==="y"?"top":"left"],m,m-f[u])}if(c){const u=h==="y"?"bottom":"right";_=Vt(_+f[h==="y"?"top":"left"],_,_-f[u])}const a=r.fn({...n,[p]:m,[h]:_});return{...a,data:{x:a.x-e,y:a.y-o}}}}};function A(t){var n;return((n=t.ownerDocument)==null?void 0:n.defaultView)||window}function B(t){return A(t).getComputedStyle(t)}function ee(t){return t instanceof A(t).Node}function I(t){return ee(t)?(t.nodeName||"").toLowerCase():""}function F(t){return t instanceof A(t).HTMLElement}function V(t){return t instanceof A(t).Element}function Mt(t){return typeof ShadowRoot>"u"?!1:t instanceof A(t).ShadowRoot||t instanceof ShadowRoot}function q(t){const{overflow:n,overflowX:e,overflowY:o,display:s}=B(t);return/auto|scroll|overlay|hidden|clip/.test(n+o+e)&&!["inline","contents"].includes(s)}function ko(t){return["table","td","th"].includes(I(t))}function bt(t){const n=kt(),e=B(t);return e.transform!=="none"||e.perspective!=="none"||!n&&!!e.backdropFilter&&e.backdropFilter!=="none"||!n&&!!e.filter&&e.filter!=="none"||["transform","perspective","filter"].some(o=>(e.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(e.contain||"").includes(o))}function kt(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function ht(t){return["html","body","#document"].includes(I(t))}const Ht=Math.min,Q=Math.max,rt=Math.round;function ne(t){const n=B(t);let e=parseFloat(n.width)||0,o=parseFloat(n.height)||0;const s=F(t),i=s?t.offsetWidth:e,c=s?t.offsetHeight:o,r=rt(e)!==i||rt(o)!==c;return r&&(e=i,o=c),{width:e,height:o,fallback:r}}function oe(t){return V(t)?t:t.contextElement}const se={x:1,y:1};function j(t){const n=oe(t);if(!F(n))return se;const e=n.getBoundingClientRect(),{width:o,height:s,fallback:i}=ne(n);let c=(i?rt(e.width):e.width)/o,r=(i?rt(e.height):e.height)/s;return c&&Number.isFinite(c)||(c=1),r&&Number.isFinite(r)||(r=1),{x:c,y:r}}const Nt={x:0,y:0};function ie(t,n,e){var o,s;if(n===void 0&&(n=!0),!kt())return Nt;const i=t?A(t):window;return!e||n&&e!==i?Nt:{x:((o=i.visualViewport)==null?void 0:o.offsetLeft)||0,y:((s=i.visualViewport)==null?void 0:s.offsetTop)||0}}function tt(t,n,e,o){n===void 0&&(n=!1),e===void 0&&(e=!1);const s=t.getBoundingClientRect(),i=oe(t);let c=se;n&&(o?V(o)&&(c=j(o)):c=j(t));const r=ie(i,e,o);let d=(s.left+r.x)/c.x,l=(s.top+r.y)/c.y,f=s.width/c.x,p=s.height/c.y;if(i){const h=A(i),m=o&&V(o)?A(o):o;let _=h.frameElement;for(;_&&o&&m!==h;){const a=j(_),u=_.getBoundingClientRect(),g=getComputedStyle(_);u.x+=(_.clientLeft+parseFloat(g.paddingLeft))*a.x,u.y+=(_.clientTop+parseFloat(g.paddingTop))*a.y,d*=a.x,l*=a.y,f*=a.x,p*=a.y,d+=u.x,l+=u.y,_=A(_).frameElement}}return ct({width:f,height:p,x:d,y:l})}function N(t){return((ee(t)?t.ownerDocument:t.document)||window.document).documentElement}function gt(t){return V(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ce(t){return tt(N(t)).left+gt(t).scrollLeft}function J(t){if(I(t)==="html")return t;const n=t.assignedSlot||t.parentNode||Mt(t)&&t.host||N(t);return Mt(n)?n.host:n}function ae(t){const n=J(t);return ht(n)?n.ownerDocument.body:F(n)&&q(n)?n:ae(n)}function re(t,n){var e;n===void 0&&(n=[]);const o=ae(t),s=o===((e=t.ownerDocument)==null?void 0:e.body),i=A(o);return s?n.concat(i,i.visualViewport||[],q(o)?o:[]):n.concat(o,re(o))}function It(t,n,e){let o;if(n==="viewport")o=function(s,i){const c=A(s),r=N(s),d=c.visualViewport;let l=r.clientWidth,f=r.clientHeight,p=0,h=0;if(d){l=d.width,f=d.height;const m=kt();(!m||m&&i==="fixed")&&(p=d.offsetLeft,h=d.offsetTop)}return{width:l,height:f,x:p,y:h}}(t,e);else if(n==="document")o=function(s){const i=N(s),c=gt(s),r=s.ownerDocument.body,d=Q(i.scrollWidth,i.clientWidth,r.scrollWidth,r.clientWidth),l=Q(i.scrollHeight,i.clientHeight,r.scrollHeight,r.clientHeight);let f=-c.scrollLeft+ce(s);const p=-c.scrollTop;return B(r).direction==="rtl"&&(f+=Q(i.clientWidth,r.clientWidth)-d),{width:d,height:l,x:f,y:p}}(N(t));else if(V(n))o=function(s,i){const c=tt(s,!0,i==="fixed"),r=c.top+s.clientTop,d=c.left+s.clientLeft,l=F(s)?j(s):{x:1,y:1};return{width:s.clientWidth*l.x,height:s.clientHeight*l.y,x:d*l.x,y:r*l.y}}(n,e);else{const s=ie(t);o={...n,x:n.x-s.x,y:n.y-s.y}}return ct(o)}function le(t,n){const e=J(t);return!(e===n||!V(e)||ht(e))&&(B(e).position==="fixed"||le(e,n))}function Ot(t,n){return F(t)&&B(t).position!=="fixed"?n?n(t):t.offsetParent:null}function Zt(t,n){const e=A(t);if(!F(t))return e;let o=Ot(t,n);for(;o&&ko(o)&&B(o).position==="static";)o=Ot(o,n);return o&&(I(o)==="html"||I(o)==="body"&&B(o).position==="static"&&!bt(o))?e:o||function(s){let i=J(s);for(;F(i)&&!ht(i);){if(bt(i))return i;i=J(i)}return null}(t)||e}function Lo(t,n,e){const o=F(n),s=N(n),i=e==="fixed",c=tt(t,!0,i,n);let r={scrollLeft:0,scrollTop:0};const d={x:0,y:0};if(o||!o&&!i)if((I(n)!=="body"||q(s))&&(r=gt(n)),F(n)){const l=tt(n,!0,i,n);d.x=l.x+n.clientLeft,d.y=l.y+n.clientTop}else s&&(d.x=ce(s));return{x:c.left+r.scrollLeft-d.x,y:c.top+r.scrollTop-d.y,width:c.width,height:c.height}}const To={getClippingRect:function(t){let{element:n,boundary:e,rootBoundary:o,strategy:s}=t;const i=e==="clippingAncestors"?function(l,f){const p=f.get(l);if(p)return p;let h=re(l).filter(u=>V(u)&&I(u)!=="body"),m=null;const _=B(l).position==="fixed";let a=_?J(l):l;for(;V(a)&&!ht(a);){const u=B(a),g=bt(a);g||u.position!=="fixed"||(m=null),(_?!g&&!m:!g&&u.position==="static"&&m&&["absolute","fixed"].includes(m.position)||q(a)&&!g&&le(l,a))?h=h.filter(v=>v!==a):m=u,a=J(a)}return f.set(l,h),h}(n,this._c):[].concat(e),c=[...i,o],r=c[0],d=c.reduce((l,f)=>{const p=It(n,f,s);return l.top=Q(p.top,l.top),l.right=Ht(p.right,l.right),l.bottom=Ht(p.bottom,l.bottom),l.left=Q(p.left,l.left),l},It(n,r,s));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:n,offsetParent:e,strategy:o}=t;const s=F(e),i=N(e);if(e===i)return n;let c={scrollLeft:0,scrollTop:0},r={x:1,y:1};const d={x:0,y:0};if((s||!s&&o!=="fixed")&&((I(e)!=="body"||q(i))&&(c=gt(e)),F(e))){const l=tt(e);r=j(e),d.x=l.x+e.clientLeft,d.y=l.y+e.clientTop}return{width:n.width*r.x,height:n.height*r.y,x:n.x*r.x-c.scrollLeft*r.x+d.x,y:n.y*r.y-c.scrollTop*r.y+d.y}},isElement:V,getDimensions:function(t){return ne(t)},getOffsetParent:Zt,getDocumentElement:N,getScale:j,async getElementRects(t){let{reference:n,floating:e,strategy:o}=t;const s=this.getOffsetParent||Zt,i=this.getDimensions;return{reference:Lo(n,await s(e),o),floating:{x:0,y:0,...await i(e)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>B(t).direction==="rtl"},Ro=(t,n,e)=>{const o=new Map,s={platform:To,...e},i={...s.platform,_c:o};return fo(t,n,{...s,platform:i})};const Ao={props:{placement:{type:String,default:"top"},content:{type:String,default:""}},setup(t){const n=x(null),e=x(null),o=x(!1);function s(){Ro(n.value,e.value,{placement:t.placement,middleware:[$o(11),xo(),Co()]}).then(({x:d,y:l,placement:f,middlewareData:p})=>{var h;Object.assign((h=e.value)==null?void 0:h.style,{left:0,top:0,transform:`translate(${d}px, ${l}px)`,willChange:"transform",pointerEvents:"none"})})}function i(){o.value=!0,s()}function c(){o.value=!1}return{reference:n,floating:e,showFloating:o,componentProps:{mouseenter:i,mouseleave:c,focus:i,blur:c},showTooltip:i}}},Eo={class:"demoblock-tooltip"};function Bo(t,n,e,o,s,i){return w(),b("div",Eo,[y("div",zt({ref:"reference",class:"demoblock-tooltip-trigger"},Jt(o.componentProps,!0)),[z(t.$slots,"default",{},void 0,!0)],16),st(y("div",{ref:"floating",class:"demoblock-tooltip-content"},lt(e.content),513),[[wt,o.showFloating]])])}const Fo=$(Ao,[["render",Bo],["__scopeId","data-v-8c328319"]]),Po=et({setup(){return{ns:rn("collapse-transition"),on:{beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,e.scrollHeight!==0?(e.style.maxHeight=`${e.scrollHeight}px`,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom):(e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom),e.style.overflow="hidden"},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){e.scrollHeight!==0&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom}}}}});function Do(t,n,e,o,s,i){return w(),it(Kt,zt({name:t.ns.b()},Jt(t.on)),{default:L(()=>[z(t.$slots,"default")]),_:3},16,["name"])}const So=$(Po,[["render",Do]]);const Vo={components:{RiFlaskLine:On,RiGithubLine:Xn,RiFileCopyLine:qn,RiCodeLine:io,EpCaretTop:po,Tooltip:Fo,CollapseTransition:So},props:{customClass:String,sourceCode:String},setup(t){const{copy:n}=on(),e=Yt(),o=Ce();Ut(()=>o.path,a=>{s.value=a.split("/")});const s=x(o.path.split("/")),i=U(()=>s.value[s.value.length-1].split(".")[0]),c=U(()=>`demo-${i.value}`),r=x(null),d=x(null),l=x(null),f=()=>{const{link:a}=dn(t.sourceCode);pt&&window.open(a)},p=x(!1),h=()=>{p.value=!p.value},m=U(()=>{var a;return((a=e.theme.value.demoblock)==null?void 0:a[e.localeIndex.value])??{"view-source":"查看源代码","hide-source":"隐藏源代码","edit-in-editor":"在 Playground 中编辑","edit-on-github":"在 Github 中编辑","copy-code":"复制代码","copy-success":"复制成功","copy-error":"复制失败"}});return{blockClass:c,locale:m,source:r,control:d,demoblock:l,isExpanded:p,onControlClick:h,onCopy:async()=>{try{n(t.sourceCode),Dt.success(m.value["copy-success"])}catch{Dt.error(m.value["copy-error"])}},onPlaygroundClick:f}}},Mo=t=>(ke("data-v-6a19516d"),t=t(),Le(),t),Ho={class:"demoblock-view"},No=Mo(()=>y("div",{class:"demoblock-divider demoblock-divider--horizontal"},null,-1)),Io={class:"demoblock-op-btns"},Oo={ref:"source",class:"demoblock-source"},Zo={class:"highlight"},Wo={class:"control-text"};function Go(t,n,e,o,s,i){const c=P("RiFlaskLine"),r=P("Tooltip"),d=P("RiGithubLine"),l=P("RiFileCopyLine"),f=P("RiCodeLine"),p=P("CollapseTransition"),h=P("EpCaretTop"),m=P("ClientOnly");return w(),it(m,null,{default:L(()=>[y("div",{ref:"demoblock",class:ut(["demoblock",o.blockClass,e.customClass?e.customClass:""])},[y("div",Ho,[z(t.$slots,"default",{},void 0,!0)]),No,y("div",Io,[Bt("",!0),Bt("",!0),k(r,{placement:"top",content:o.locale["copy-code"]},{default:L(()=>[k(l,{class:"demoblock-op-btn",onClick:o.onCopy},null,8,["onClick"])]),_:1},8,["content"]),k(r,{placement:"top",content:o.locale["view-source"]},{default:L(()=>[k(f,{class:"demoblock-op-btn",onClick:o.onControlClick},null,8,["onClick"])]),_:1},8,["content"])]),k(p,null,{default:L(()=>[st(y("div",Oo,[y("div",Zo,[z(t.$slots,"highlight",{},void 0,!0)])],512),[[wt,o.isExpanded]])]),_:3}),k(Kt,{name:"demoblock-fade-in-linear"},{default:L(()=>[st(y("div",{ref:"control",class:"demoblock-control",onClick:n[0]||(n[0]=(..._)=>o.onControlClick&&o.onControlClick(..._))},[k(h,{class:"control-icon"}),y("span",Wo,lt(o.locale["hide-source"]),1)],512),[[wt,o.isExpanded]])]),_:1})],2)]),_:3})}const Uo=$(Vo,[["render",Go],["__scopeId","data-v-6a19516d"]]);const jo=et({name:"DemoBlock",props:{customClass:String}}),Xo={class:"demoblock-view"};function zo(t,n,e,o,s,i){return w(),b("div",{class:ut(["demoblock",[t.customClass?t.customClass:""]])},[y("div",Xo,[z(t.$slots,"default",{},void 0,!0)])],2)}const Jo=$(jo,[["render",zo],["__scopeId","data-v-4070cf62"]]);function Ko(t){t.component("ButtonDemo",Ge),t.component("InputDemo",ze),t.component("Demo",Uo),t.component("DemoBlock",Jo)}const Yo={name:"XlButton",props:{type:{type:String,default:"default"}}};function Qo(t,n,e,o,s,i){return w(),b("button",{class:ut(["xl-button",e.type?"xl-button--"+e.type:""])},[z(t.$slots,"default")],2)}const Wt=$(Yo,[["render",Qo]]);const qo={...Ft,enhanceApp(t){Ft.enhanceApp(t),Ko(t.app),t.app.component(Wt.name,Wt)}};function ue(t){if(t.extends){const n=ue(t.extends);return{...n,...t,async enhanceApp(e){n.enhanceApp&&await n.enhanceApp(e),t.enhanceApp&&await t.enhanceApp(e)}}}return t}const X=ue(qo),ts=et({name:"VitePressApp",setup(){const{site:t}=Yt();return jt(()=>{He(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),Ne(),Ie(),Oe(),X.setup&&X.setup(),()=>Xt(X.Layout)}});async function es(){const t=os(),n=ns();n.provide(Re,t);const e=Ae(t.route);return n.provide(Ee,e),n.component("Content",Be),n.component("ClientOnly",Fe),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get(){return e.frontmatter.value}},$params:{get(){return e.page.value.params}}}),X.enhanceApp&&await X.enhanceApp({app:n,router:t,siteData:Pe}),{app:n,router:t,data:e}}function ns(){return De(ts)}function os(){let t=xt,n;return Se(e=>{let o=Ve(e);return t&&(n=o),(t||n===o)&&(o=o.replace(/\.js$/,".lean.js")),xt&&(t=!1),Me(()=>import(o),[])},X.NotFound)}xt&&es().then(({app:t,router:n,data:e})=>{n.go().then(()=>{Te(n.route,e.site),t.mount("#app")})});export{es as createApp};
