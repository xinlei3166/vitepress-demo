import{V as r,_ as S,c as k,a as A,w as c,d as s,r as b,o as V,e as l}from"./app.cc117b3e.js";const{defineComponent:w}=r,N=w({name:"component-doc",components:{"render-demo-0":function(){const{vModelText:D,createElementVNode:t,withDirectives:u,createTextVNode:C,resolveComponent:d,withCtx:E,createVNode:y,toDisplayString:a,Fragment:F,openBlock:x,createElementBlock:_}=r,v={style:{"margin-top":"16px"}};function f(o,n){const e=d("xl-button");return x(),_(F,null,[u(t("input",{class:"input",type:"text","onUpdate:modelValue":n[0]||(n[0]=p=>o.input=p)},null,512),[[D,o.input]]),y(e,{type:"primary",onClick:o.onSubmit},{default:E(()=>[C("\u63D0\u4EA4")]),_:1},8,["onClick"]),t("div",v,"\u8F93\u51FA\u5185\u5BB9\uFF1A"+a(o.content),1)],64)}const{ref:m,defineComponent:i}=r,B=i({name:"InputDemo",setup(){const o=m(),n=m();function e(){n.value=o.value}return{input:o,content:n,onSubmit:e}}});return{render:f,...B}}(),"render-demo-1":function(){const{vModelText:D,createElementVNode:t,withDirectives:u,createTextVNode:C,resolveComponent:d,withCtx:E,createVNode:y,toDisplayString:a,Fragment:F,openBlock:x,createElementBlock:_}=r,v={style:{"margin-top":"16px"}};function f(o,n){const e=d("xl-button");return x(),_(F,null,[u(t("input",{class:"input",type:"text","onUpdate:modelValue":n[0]||(n[0]=p=>o.input=p)},null,512),[[D,o.input]]),y(e,{type:"primary",onClick:o.onSubmit},{default:E(()=>[C("\u63D0\u4EA4")]),_:1},8,["onClick"]),t("div",v,"\u8F93\u51FA\u5185\u5BB9\uFF1A"+a(o.content),1)],64)}const{defineComponent:m}=r,{ref:i}=r;return{render:f,...m({setup(o,{expose:n}){n();const e=i(),p=i();function h(){p.value=e.value}const g={input:e,content:p,onSubmit:h,ref:i};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}})}}()}}),G=JSON.parse('{"title":"Vue Script","description":"","frontmatter":{},"headers":[],"relativePath":"components/vue-script.md","lastUpdated":1668163198000}');const T=s("h1",{id:"vue-script",tabindex:"-1"},"Vue Script",-1),I=s("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},"\u57FA\u7840\u7528\u6CD5",-1),z=s("p",null,"\u57FA\u7840\u7684\u6309\u94AE\u7528\u6CD5\u3002",-1),O=s("div",null,[l("\u4F7F\u7528 "),s("code",null,"type"),l("\u3001"),s("code",null,"plain"),l("\u3001"),s("code",null,"round"),l(" \u548C "),s("code",null,"circle"),l(" \u5C5E\u6027\u6765\u5B9A\u4E49 Button \u7684\u6837\u5F0F\u3002")],-1),j=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"input"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"input"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"text"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"input"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xl-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"onSubmit"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u63D0\u4EA4</"),s("span",{style:{color:"#7EE787"}},"xl-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"margin-top: 16px"'),s("span",{style:{color:"#C9D1D9"}},">\u8F93\u51FA\u5185\u5BB9\uFF1A{{ content }}</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref, defineComponent } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#D2A8FF"}},"defineComponent"),s("span",{style:{color:"#FFA657"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  "),s("span",{style:{color:"#C9D1D9"}},"name: "),s("span",{style:{color:"#A5D6FF"}},"'InputDemo'"),s("span",{style:{color:"#FFA657"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"input"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"content"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#FF7B72"}},"function"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"onSubmit"),s("span",{style:{color:"#C9D1D9"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      content.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," input.value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," { input, content, onSubmit }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"less"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".input"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"border"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"solid"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"#ebebeb"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"border-radius"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"4"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"padding"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"14"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"width"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"300"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"font-size"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"16"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"margin-right"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"16"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"input"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"input"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"text"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"input"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xl-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"onSubmit"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u63D0\u4EA4</"),s("span",{style:{color:"#116329"}},"xl-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"margin-top: 16px"'),s("span",{style:{color:"#24292F"}},">\u8F93\u51FA\u5185\u5BB9\uFF1A{{ content }}</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref, defineComponent } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#8250DF"}},"defineComponent"),s("span",{style:{color:"#953800"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  "),s("span",{style:{color:"#24292F"}},"name: "),s("span",{style:{color:"#0A3069"}},"'InputDemo'"),s("span",{style:{color:"#953800"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"input"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"content"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"function"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"onSubmit"),s("span",{style:{color:"#24292F"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      content.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," input.value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," { input, content, onSubmit }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"})")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"less"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".input"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"border"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"solid"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"#ebebeb"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"border-radius"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"4"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"padding"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"14"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"width"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"300"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"font-size"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"16"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"margin-right"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"16"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),M=s("h2",{id:"setup-typescript-\u7528\u6CD5",tabindex:"-1"},"Setup TypeScript \u7528\u6CD5",-1),$=s("p",null,"setup typescript \u7528\u6CD5\u3002",-1),U=s("div",null,[l("\u4F7F\u7528 "),s("code",null,"type"),l("\u3001"),s("code",null,"plain"),l("\u3001"),s("code",null,"round"),l(" \u548C "),s("code",null,"circle"),l(" \u5C5E\u6027\u6765\u5B9A\u4E49 Button \u7684\u6837\u5F0F\u3002")],-1),P=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"input"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"input"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"text"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"input"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xl-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"onSubmit"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u63D0\u4EA4</"),s("span",{style:{color:"#7EE787"}},"xl-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"margin-top: 16px"'),s("span",{style:{color:"#C9D1D9"}},">\u8F93\u51FA\u5185\u5BB9\uFF1A{{ content }}</"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"ts"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"interface"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"IObject"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  ["),s("span",{style:{color:"#FFA657"}},"k"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"string"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"any")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"input"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#79C0FF"}},"any"),s("span",{style:{color:"#C9D1D9"}},">()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"content"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#79C0FF"}},"any"),s("span",{style:{color:"#C9D1D9"}},">()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF7B72"}},"function"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"onSubmit"),s("span",{style:{color:"#C9D1D9"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  content.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," input.value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lang"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"less"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#79C0FF"}},".input"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"border"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"solid"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"#ebebeb"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"border-radius"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"4"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"padding"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"14"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"width"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"300"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"font-size"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"16"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},"margin-right"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"16"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"input"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"input"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"text"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"input"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"/>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xl-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"onSubmit"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u63D0\u4EA4</"),s("span",{style:{color:"#116329"}},"xl-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"margin-top: 16px"'),s("span",{style:{color:"#24292F"}},">\u8F93\u51FA\u5185\u5BB9\uFF1A{{ content }}</"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"ts"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"setup"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"interface"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"IObject"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  ["),s("span",{style:{color:"#953800"}},"k"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"string"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"any")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"input"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#0550AE"}},"any"),s("span",{style:{color:"#24292F"}},">()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"content"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#0550AE"}},"any"),s("span",{style:{color:"#24292F"}},">()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"function"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"onSubmit"),s("span",{style:{color:"#24292F"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  content.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," input.value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lang"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"less"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#0550AE"}},".input"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"border"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"solid"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"#ebebeb"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"border-radius"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"4"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"padding"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"14"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"width"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"300"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"font-size"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"16"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},"margin-right"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"16"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1);function J(D,t,u,C,d,E){const y=b("render-demo-0"),a=b("demo"),F=b("render-demo-1");return V(),k("div",null,[T,I,z,A(a,{customClass:"undefined",sourceCode:`<template>
  <input class="input" type="text" v-model="input"/>
  <xl-button type="primary" @click="onSubmit">\u63D0\u4EA4</xl-button>
  <div style="margin-top: 16px">\u8F93\u51FA\u5185\u5BB9\uFF1A{{ content }}</div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'InputDemo',
  setup() {
    const input = ref()
    const content = ref()

    function onSubmit() {
      content.value = input.value
    }

    return { input, content, onSubmit }
  }
})
<\/script>

<style lang="less">
.input {
  border: 1px solid #ebebeb;
  border-radius: 4px;
  padding: 14px;
  width: 300px;
  font-size: 16px;
  margin-right: 16px;
}
</style>
`},{description:c(()=>[O]),highlight:c(()=>[j]),default:c(()=>[A(y)]),_:1}),M,$,A(a,{customClass:"undefined",sourceCode:`<template>
  <input class="input" type="text" v-model="input"/>
  <xl-button type="primary" @click="onSubmit">\u63D0\u4EA4</xl-button>
  <div style="margin-top: 16px">\u8F93\u51FA\u5185\u5BB9\uFF1A{{ content }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface IObject {
  [k: string]: any
}

const input = ref<any>()
const content = ref<any>()

function onSubmit() {
  content.value = input.value
}
<\/script>

<style lang="less">
.input {
  border: 1px solid #ebebeb;
  border-radius: 4px;
  padding: 14px;
  width: 300px;
  font-size: 16px;
  margin-right: 16px;
}
</style>
`},{description:c(()=>[U]),highlight:c(()=>[P]),default:c(()=>[A(F)]),_:1})])}const H=S(N,[["render",J]]);export{G as __pageData,H as default};
