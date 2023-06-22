import{c as w,I as z,i as _,B as y,a6 as V,b2 as K,D as v,h,G as U,K as G,L as $,o as L,a2 as F,T as J,ay as Z,an as O,b3 as ee,b4 as te,z as S,a7 as X,_ as I,ap as E,b5 as Q,A as ne,a5 as le,H as oe,aW as ie,J as ae,aX as re,a3 as se,F as H,b6 as ce,b7 as ue,Y as de,b8 as fe,b9 as ve,aA as he,ba as M}from"./app-8227939a.js";const xe=w({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:g}){const{proxy:{$q:n}}=z(),t=_(V,y);if(t===y)return console.error("QPage needs to be a deep child of QLayout"),y;if(_(K,y)===y)return console.error("QPage needs to be child of QPageContainer"),y;const r=v(()=>{const s=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const o=t.isContainer.value===!0?t.containerHeight.value:n.screen.height;return e.styleFn(s,o)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-s+"px":n.screen.height===0?s!==0?`calc(100vh - ${s}px)`:"100vh":n.screen.height-s+"px"}}),u=v(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:r.value},U(g.default))}}),qe=w({name:"QPageContainer",setup(e,{slots:g}){const{proxy:{$q:n}}=z(),t=_(V,y);if(t===y)return console.error("QPageContainer needs to be child of QLayout"),y;G(K,!0);const a=v(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>h("div",{class:"q-page-container",style:a.value},U(g.default))}}),{passive:N}=O,ge=["both","horizontal","vertical"],me=w({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ge.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:g}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,a,r;$(()=>e.scrollTarget,()=>{o(),s()});function u(){t!==null&&t();const f=Math.max(0,ee(a)),p=te(a),b={top:f-n.position.top,left:p-n.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const x=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";n.position={top:f,left:p},n.directionChanged=n.direction!==x,n.delta=b,n.directionChanged===!0&&(n.direction=x,n.inflectionPoint=n.position),g("scroll",{...n})}function s(){a=Z(r,e.scrollTarget),a.addEventListener("scroll",l,N),l(!0)}function o(){a!==void 0&&(a.removeEventListener("scroll",l,N),a=void 0)}function l(f){if(f===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[p,b]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{b(p),t=null}}}const{proxy:d}=z();return $(()=>d.$q.lang.rtl,u),L(()=>{r=d.$el.parentNode,s()}),F(()=>{t!==null&&t(),o()}),Object.assign(d,{trigger:l,getPosition:()=>n}),J}});function be(){const e=S(!X.value);return e.value===!1&&L(()=>{e.value=!0}),e}const Y=typeof ResizeObserver<"u",j=Y===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},W=w({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:g}){let n=null,t,a={width:-1,height:-1};function r(o){o===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:o,offsetHeight:l}=t;(o!==a.width||l!==a.height)&&(a={width:o,height:l},g("resize",a))}}const{proxy:s}=z();if(Y===!0){let o;const l=d=>{t=s.$el.parentNode,t?(o=new ResizeObserver(r),o.observe(t),u()):d!==!0&&I(()=>{l(!0)})};return L(()=>{l()}),F(()=>{n!==null&&clearTimeout(n),o!==void 0&&(o.disconnect!==void 0?o.disconnect():t&&o.unobserve(t))}),J}else{let d=function(){n!==null&&(clearTimeout(n),n=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",r,O.passive),l=void 0)},f=function(){d(),t&&t.contentDocument&&(l=t.contentDocument.defaultView,l.addEventListener("resize",r,O.passive),u())};const o=be();let l;return L(()=>{I(()=>{t=s.$el,t&&f()})}),F(d),s.trigger=r,()=>{if(o.value===!0)return h("object",{style:j.style,tabindex:-1,type:"text/html",data:j.url,"aria-hidden":"true",onLoad:f})}}}}),we=w({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:g,emit:n}){const{proxy:{$q:t}}=z(),a=S(null),r=S(t.screen.height),u=S(e.container===!0?0:t.screen.width),s=S({position:0,direction:"down",inflectionPoint:0}),o=S(0),l=S(X.value===!0?0:E()),d=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),f=v(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),p=v(()=>l.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),b=v(()=>l.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function x(i){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};s.value=m,e.onScroll!==void 0&&n("scroll",m)}}function k(i){const{height:m,width:q}=i;let R=!1;r.value!==m&&(R=!0,r.value=m,e.onScrollHeight!==void 0&&n("scrollHeight",m),C()),u.value!==q&&(R=!0,u.value=q),R===!0&&e.onResize!==void 0&&n("resize",i)}function c({height:i}){o.value!==i&&(o.value=i,C())}function C(){if(e.container===!0){const i=r.value>o.value?E():0;l.value!==i&&(l.value=i)}}let T=null;const A={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:a,height:r,containerHeight:o,scrollbarWidth:l,totalWidth:v(()=>u.value+l.value),rows:v(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:Q({size:0,offset:0,space:!1}),right:Q({size:300,offset:0,space:!1}),footer:Q({size:0,offset:0,space:!1}),left:Q({size:300,offset:0,space:!1}),scroll:s,animate(){T!==null?clearTimeout(T):document.body.classList.add("q-body--layout-animate"),T=setTimeout(()=>{T=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,m,q){A[i][m]=q}};if(G(V,A),E()>0){let q=function(){i=null,m.classList.remove("hide-scrollbar")},R=function(){if(i===null){if(m.scrollHeight>t.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(q,300)},B=function(D){i!==null&&D==="remove"&&(clearTimeout(i),q()),window[`${D}EventListener`]("resize",R)},i=null;const m=document.body;$(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),ne(()=>{B("remove")})}return()=>{const i=le(g.default,[h(me,{onScroll:x}),h(W,{onResize:k})]),m=h("div",{class:d.value,style:f.value,ref:e.container===!0?void 0:a,tabindex:-1},i);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:a},[h(W,{onResize:c}),h("div",{class:"absolute-full",style:p.value},[h("div",{class:"scroll",style:b.value},[m])])]):m}}}),ye={xs:8,sm:10,md:14,lg:20,xl:24},ze=w({name:"QChip",props:{...oe,...ie,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:g,emit:n}){const{proxy:{$q:t}}=z(),a=ae(e,t),r=re(e,ye),u=v(()=>e.selected===!0||e.icon!==void 0),s=v(()=>e.selected===!0?e.iconSelected||t.iconSet.chip.selected:e.icon),o=v(()=>e.iconRemove||t.iconSet.chip.remove),l=v(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),d=v(()=>{const c=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(c?` text-${c} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(l.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(a.value===!0?" q-chip--dark q-dark":"")}),f=v(()=>{const c=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},C={...c,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||t.lang.label.remove};return{chip:c,remove:C}});function p(c){c.keyCode===13&&b(c)}function b(c){e.disable||(n("update:selected",!e.selected),n("click",c))}function x(c){(c.keyCode===void 0||c.keyCode===13)&&(de(c),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function k(){const c=[];l.value===!0&&c.push(h("div",{class:"q-focus-helper"})),u.value===!0&&c.push(h(H,{class:"q-chip__icon q-chip__icon--left",name:s.value}));const C=e.label!==void 0?[h("div",{class:"ellipsis"},[e.label])]:void 0;return c.push(h("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},ce(g.default,C))),e.iconRight&&c.push(h(H,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&c.push(h(H,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:o.value,...f.value.remove,onClick:x,onKeyup:x})),c}return()=>{if(e.modelValue===!1)return;const c={class:d.value,style:r.value};return l.value===!0&&Object.assign(c,f.value.chip,{onClick:b,onKeyup:p}),se("div",c,k(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[ue,e.ripple]])}}});function Ce(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),fe.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}let P=0;const $e={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Re=["update:fullscreen","fullscreen"];function Pe(){const e=z(),{props:g,emit:n,proxy:t}=e;let a,r,u;const s=S(!1);ve(e)===!0&&$(()=>t.$route.fullPath,()=>{g.noRouteFullscreenExit!==!0&&d()}),$(()=>g.fullscreen,f=>{s.value!==f&&o()}),$(s,f=>{n("update:fullscreen",f),n("fullscreen",f)});function o(){s.value===!0?d():l()}function l(){s.value!==!0&&(s.value=!0,u=t.$el.parentNode,u.replaceChild(r,t.$el),document.body.appendChild(t.$el),P++,P===1&&document.body.classList.add("q-body--fullscreen-mixin"),a={handler:d},M.add(a))}function d(){s.value===!0&&(a!==void 0&&(M.remove(a),a=void 0),u.replaceChild(t.$el,r),s.value=!1,P=Math.max(0,P-1),P===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),t.$el.scrollIntoView!==void 0&&setTimeout(()=>{t.$el.scrollIntoView()})))}return he(()=>{r=document.createElement("span")}),L(()=>{g.fullscreen===!0&&l()}),F(d),Object.assign(t,{toggleFullscreen:o,setFullscreen:l,exitFullscreen:d}),{inFullscreen:s,toggleFullscreen:o}}const pe=h("div",{class:"q-space"}),Le=w({name:"QSpace",setup(){return()=>pe}});export{xe as Q,ze as a,Re as b,Ce as c,Pe as d,W as e,Le as f,qe as g,we as h,$e as u};
