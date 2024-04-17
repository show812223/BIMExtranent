import{a2 as Be,aX as Le,d as Xe,v as ye,x as Ze,y as Ge,aY as ge,t as he,N as q,r as N,aA as z,ay as ce,H as M,aR as D,aZ as Ue,c as x,a8 as ue,$ as L,aw as be,F as fe,a_ as Me,a$ as Ke,aH as ve,an as _e,b0 as we,a1 as $,aS as Qe,au as j,b1 as Je,o as et,ad as Fe,ao as tt,b2 as nt,b3 as ot,O as Re,V as pe,P as Ne,a4 as at,W as He,X as rt,Z as Ve,e as it,Q as De,z as V,b4 as lt,R as st,S as ct,a6 as ut,a0 as ft,as as vt}from"./CDMwRna9.js";import{p as Se,i as ne,j as oe,k as Ee,g as dt,B as ae,l as xe,o as ke,n as mt,q as yt,a as gt,r as ht,s as bt}from"./BUuIBmwz.js";import{c as wt,m as St,u as Et,d as xt,M as kt,a as Ot}from"./Dxkh4y_u.js";const U=new WeakMap;function Ct(e,t){Object.keys(t).forEach(n=>{if(Be(n)){const o=Le(n),a=U.get(e);if(t[n]==null)a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===t[n])){e.addEventListener(o,t[n]);const r=a||new Set;r.add([o,t[n]]),U.has(e)||U.set(e,r)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function Pt(e,t){Object.keys(t).forEach(n=>{if(Be(n)){const o=Le(n),a=U.get(e);a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))})}else e.removeAttribute(n)})}function Ie(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function At(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?Tt(e):de(e))return e;e=e.parentElement}return document.scrollingElement}function Q(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(de(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function de(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Tt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function Bt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Lt={class:"mb-4"},Mt={class:"text-h6 font-weight-bold"},_t={key:0,class:"text-body-1"},dn=Xe({__name:"LabelValue",props:{label:{default:""},isText:{type:Boolean,default:!0}},setup(e){return(t,n)=>(he(),ye("div",Lt,[Ze("div",Mt,Ge(t.label),1),t.isText?(he(),ye("div",_t,[ge(t.$slots,"value")])):ge(t.$slots,"value",{key:1})]))}});function re(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Ft(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Oe(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,r=n==="top"?0:n==="bottom"?t.height:n;return re({x:a,y:r},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,r=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return re({x:a,y:r},t)}return re({x:t.width/2,y:t.height/2},t)}const We={static:Nt,connected:Vt},Rt=q({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in We},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function pt(e,t){const n=N({}),o=N();z&&ce(()=>!!(t.isActive.value&&e.locationStrategy),r=>{var l,i;M(()=>e.locationStrategy,r),D(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(l=e.locationStrategy(t,e,n))==null?void 0:l.updateLocation:o.value=(i=We[e.locationStrategy](t,e,n))==null?void 0:i.updateLocation});function a(r){var l;(l=o.value)==null||l.call(o,r)}return{contentStyles:n,updateLocation:o}}function Nt(){}function Ht(e,t){t?e.style.removeProperty("left"):e.style.removeProperty("right");const n=mt(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function Vt(e,t,n){(Array.isArray(e.target.value)||Bt(e.target.value))&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=Ue(()=>{const c=Se(t.location,e.isRtl.value),u=t.origin==="overlap"?c:t.origin==="auto"?ne(c):Se(t.origin,e.isRtl.value);return c.side===u.side&&c.align===oe(u).align?{preferredAnchor:Ee(c),preferredOrigin:Ee(u)}:{preferredAnchor:c,preferredOrigin:u}}),[l,i,m,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(c=>x(()=>{const u=parseFloat(t[c]);return isNaN(u)?1/0:u})),y=x(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const c=t.offset.split(" ").map(parseFloat);return c.length<2&&c.push(0),c}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let g=!1;const k=new ResizeObserver(()=>{g&&O()});M([e.target,e.contentEl],(c,u)=>{let[A,T]=c,[S,h]=u;S&&!Array.isArray(S)&&k.unobserve(S),A&&!Array.isArray(A)&&k.observe(A),h&&k.unobserve(h),T&&k.observe(T)},{immediate:!0}),D(()=>{k.disconnect()});function O(){if(g=!1,requestAnimationFrame(()=>g=!0),!e.target.value||!e.contentEl.value)return;const c=dt(e.target.value),u=Ht(e.contentEl.value,e.isRtl.value),A=Q(e.contentEl.value),T=12;A.length||(A.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(u.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),u.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const S=A.reduce((E,b)=>{const v=b.getBoundingClientRect(),d=new ae({x:b===document.documentElement?0:v.x,y:b===document.documentElement?0:v.y,width:b.clientWidth,height:b.clientHeight});return E?new ae({x:Math.max(E.left,d.left),y:Math.max(E.top,d.top),width:Math.min(E.right,d.right)-Math.max(E.left,d.left),height:Math.min(E.bottom,d.bottom)-Math.max(E.top,d.top)}):d},void 0);S.x+=T,S.y+=T,S.width-=T*2,S.height-=T*2;let h={anchor:a.value,origin:r.value};function I(E){const b=new ae(u),v=Oe(E.anchor,c),d=Oe(E.origin,b);let{x:R,y:_}=Ft(v,d);switch(E.anchor.side){case"top":_-=y.value[0];break;case"bottom":_+=y.value[0];break;case"left":R-=y.value[0];break;case"right":R+=y.value[0];break}switch(E.anchor.align){case"top":_-=y.value[1];break;case"bottom":_+=y.value[1];break;case"left":R-=y.value[1];break;case"right":R+=y.value[1];break}return b.x+=R,b.y+=_,b.width=Math.min(b.width,m.value),b.height=Math.min(b.height,f.value),{overflows:ke(b,S),x:R,y:_}}let F=0,C=0;const s={x:0,y:0},B={x:!1,y:!1};let ee=-1;for(;!(ee++>10);){const{x:E,y:b,overflows:v}=I(h);F+=E,C+=b,u.x+=E,u.y+=b;{const d=xe(h.anchor),R=v.x.before||v.x.after,_=v.y.before||v.y.after;let Y=!1;if(["x","y"].forEach(P=>{if(P==="x"&&R&&!B.x||P==="y"&&_&&!B.y){const p={anchor:{...h.anchor},origin:{...h.origin}},Z=P==="x"?d==="y"?oe:ne:d==="y"?ne:oe;p.anchor=Z(p.anchor),p.origin=Z(p.origin);const{overflows:W}=I(p);(W[P].before<=v[P].before&&W[P].after<=v[P].after||W[P].before+W[P].after<(v[P].before+v[P].after)/2)&&(h=p,Y=B[P]=!0)}}),Y)continue}v.x.before&&(F+=v.x.before,u.x+=v.x.before),v.x.after&&(F-=v.x.after,u.x-=v.x.after),v.y.before&&(C+=v.y.before,u.y+=v.y.before),v.y.after&&(C-=v.y.after,u.y-=v.y.after);{const d=ke(u,S);s.x=S.width-d.x.before-d.x.after,s.y=S.height-d.y.before-d.y.after,F+=d.x.before,u.x+=d.x.before,C+=d.y.before,u.y+=d.y.before}break}const te=xe(h.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${h.anchor.side} ${h.anchor.align}`,transformOrigin:`${h.origin.side} ${h.origin.align}`,top:L(ie(C)),left:e.isRtl.value?void 0:L(ie(F)),right:e.isRtl.value?L(ie(-F)):void 0,minWidth:L(te==="y"?Math.min(l.value,c.width):l.value),maxWidth:L(Ce(be(s.x,l.value===1/0?0:l.value,m.value))),maxHeight:L(Ce(be(s.y,i.value===1/0?0:i.value,f.value)))}),{available:s,contentBox:u}}return M(()=>[a.value,r.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>O()),ue(()=>{const c=O();if(!c)return;const{available:u,contentBox:A}=c;A.height>u.y&&requestAnimationFrame(()=>{O(),requestAnimationFrame(()=>{O()})})}),{updateLocation:O}}function ie(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ce(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let le=!0;const J=[];function Dt(e){!le||J.length?(J.push(e),se()):(le=!1,e(),se())}let Pe=-1;function se(){cancelAnimationFrame(Pe),Pe=requestAnimationFrame(()=>{const e=J.shift();e&&e(),J.length?se():le=!0})}const K={none:null,close:$t,block:zt,reposition:qt},It=q({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in K}},"VOverlay-scroll-strategies");function Wt(e,t){if(!z)return;let n;fe(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=Me(),await new Promise(o=>setTimeout(o)),n.active&&n.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(o=K[e.scrollStrategy])==null||o.call(K,t,e,n)}))}),D(()=>{n==null||n.stop()})}function $t(e){function t(n){e.isActive.value=!1}$e(e.targetEl.value??e.contentEl.value,t)}function zt(e,t){var l;const n=(l=e.root.value)==null?void 0:l.offsetParent,o=[...new Set([...Q(e.targetEl.value,t.contained?n:void 0),...Q(e.contentEl.value,t.contained?n:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(i=>de(i)&&i)(n||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,m)=>{i.style.setProperty("--v-body-scroll-x",L(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",L(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",L(a)),i.classList.add("v-overlay-scroll-blocked")}),D(()=>{o.forEach((i,m)=>{const f=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),y=parseFloat(i.style.getPropertyValue("--v-body-scroll-y")),g=i.style.scrollBehavior;i.style.scrollBehavior="auto",i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-f,i.scrollTop=-y,i.style.scrollBehavior=g}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function qt(e,t,n){let o=!1,a=-1,r=-1;function l(i){Dt(()=>{var y,g;const m=performance.now();(g=(y=e.updateLocation).value)==null||g.call(y,i),o=(performance.now()-m)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{n.run(()=>{$e(e.targetEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(i)})})):l(i)})})}),D(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function $e(e,t){const n=[document,...Q(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),D(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}const jt=Symbol.for("vuetify:v-menu"),Yt=q({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Xt(e,t){let n=()=>{};function o(l){n==null||n();const i=Number(l?e.openDelay:e.closeDelay);return new Promise(m=>{n=Ke(i,()=>{t==null||t(l),m(l)})})}function a(){return o(!0)}function r(){return o(!1)}return{clearDelay:n,runOpenDelay:a,runCloseDelay:r}}const Zt=q({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Yt()},"VOverlay-activator");function Gt(e,t){let{isActive:n,isTop:o}=t;const a=ve("useActivator"),r=N();let l=!1,i=!1,m=!0;const f=x(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),y=x(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!f.value),{runOpenDelay:g,runCloseDelay:k}=Xt(e,s=>{s===(e.openOnHover&&l||f.value&&i)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==s&&(m=!0),n.value=s)}),O=N(),c={onClick:s=>{s.stopPropagation(),r.value=s.currentTarget||s.target,n.value||(O.value=[s.clientX,s.clientY]),n.value=!n.value},onMouseenter:s=>{var B;(B=s.sourceCapabilities)!=null&&B.firesTouchEvents||(l=!0,r.value=s.currentTarget||s.target,g())},onMouseleave:s=>{l=!1,k()},onFocus:s=>{Qe(s.target,":focus-visible")!==!1&&(i=!0,s.stopPropagation(),r.value=s.currentTarget||s.target,g())},onBlur:s=>{i=!1,s.stopPropagation(),k()}},u=x(()=>{const s={};return y.value&&(s.onClick=c.onClick),e.openOnHover&&(s.onMouseenter=c.onMouseenter,s.onMouseleave=c.onMouseleave),f.value&&(s.onFocus=c.onFocus,s.onBlur=c.onBlur),s}),A=x(()=>{const s={};if(e.openOnHover&&(s.onMouseenter=()=>{l=!0,g()},s.onMouseleave=()=>{l=!1,k()}),f.value&&(s.onFocusin=()=>{i=!0,g()},s.onFocusout=()=>{i=!1,k()}),e.closeOnContentClick){const B=_e(jt,null);s.onClick=()=>{n.value=!1,B==null||B.closeParents()}}return s}),T=x(()=>{const s={};return e.openOnHover&&(s.onMouseenter=()=>{m&&(l=!0,m=!1,g())},s.onMouseleave=()=>{l=!1,k()}),s});M(o,s=>{s&&(e.openOnHover&&!l&&(!f.value||!i)||f.value&&!i&&(!e.openOnHover||!l))&&(n.value=!1)}),M(n,s=>{s||setTimeout(()=>{O.value=void 0})},{flush:"post"});const S=N();fe(()=>{S.value&&ue(()=>{r.value=we(S.value)})});const h=N(),I=x(()=>e.target==="cursor"&&O.value?O.value:h.value?we(h.value):ze(e.target,a)||r.value),F=x(()=>Array.isArray(I.value)?void 0:I.value);let C;return M(()=>!!e.activator,s=>{s&&z?(C=Me(),C.run(()=>{Ut(e,a,{activatorEl:r,activatorEvents:u})})):C&&C.stop()},{flush:"post",immediate:!0}),D(()=>{C==null||C.stop()}),{activatorEl:r,activatorRef:S,target:I,targetEl:F,targetRef:h,activatorEvents:u,contentEvents:A,scrimEvents:T}}function Ut(e,t,n){let{activatorEl:o,activatorEvents:a}=n;M(()=>e.activator,(m,f)=>{if(f&&m!==f){const y=i(f);y&&l(y)}m&&ue(()=>r())},{immediate:!0}),M(()=>e.activatorProps,()=>{r()}),D(()=>{l()});function r(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;m&&Ct(m,$(a.value,f))}function l(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;m&&Pt(m,$(a.value,f))}function i(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const f=ze(m,t);return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:void 0,o.value}}function ze(e,t){var o,a;if(!e)return;let n;if(e==="parent"){let r=(a=(o=t==null?void 0:t.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;n=r}else typeof e=="string"?n=document.querySelector(e):"$el"in e?n=e.$el:n=e;return n}function Kt(){if(!z)return j(!1);const{ssr:e}=Je();if(e){const t=j(!1);return et(()=>{t.value=!0}),t}else return j(!0)}const Qt=q({eager:Boolean},"lazy");function Jt(e,t){const n=j(!1),o=x(()=>n.value||e.eager||t.value);M(t,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:o,onAfterLeave:a}}function en(){const t=ve("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const Ae=Symbol.for("vuetify:stack"),X=Fe([]);function tn(e,t,n){const o=ve("useStack"),a=!n,r=_e(Ae,void 0),l=Fe({activeChildren:new Set});tt(Ae,l);const i=j(+t.value);ce(e,()=>{var g;const y=(g=X.at(-1))==null?void 0:g[1];i.value=y?y+10:+t.value,a&&X.push([o.uid,i.value]),r==null||r.activeChildren.add(o.uid),D(()=>{if(a){const k=nt(X).findIndex(O=>O[0]===o.uid);X.splice(k,1)}r==null||r.activeChildren.delete(o.uid)})});const m=j(!0);a&&fe(()=>{var g;const y=((g=X.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>m.value=y)});const f=x(()=>!l.activeChildren.size);return{globalTop:ot(m),localTop:f,stackStyles:x(()=>({zIndex:i.value}))}}function nn(e){return{teleportTarget:x(()=>{const n=e.value;if(n===!0||!z)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function on(){return!0}function qe(e,t,n){if(!e||je(e,n)===!1)return!1;const o=Ie(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(r=>r==null?void 0:r.contains(e.target))}function je(e,t){return(typeof t.value=="object"&&t.value.closeConditional||on)(e)}function an(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&qe(e,t,n)&&setTimeout(()=>{je(e,n)&&o&&o(e)},0)}function Te(e,t){const n=Ie(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const rn={mounted(e,t){const n=a=>an(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=qe(a,e,t)};Te(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(Te(e,n=>{var r;if(!n||!((r=e._clickOutside)!=null&&r[t.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[t.instance.$.uid])}};function ln(e){const{modelValue:t,color:n,...o}=e;return V(vt,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&V("div",$({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const sn=q({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Zt(),...Re(),...wt(),...Qt(),...Rt(),...It(),...pe(),...St()},"VOverlay"),mn=Ne()({name:"VOverlay",directives:{ClickOutside:rn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...sn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const r=at(e,"modelValue"),l=x({get:()=>r.value,set:w=>{w&&e.disabled||(r.value=w)}}),{teleportTarget:i}=nn(x(()=>e.attach||e.contained)),{themeClasses:m}=He(e),{rtlClasses:f,isRtl:y}=rt(),{hasContent:g,onAfterLeave:k}=Jt(e,l),O=Et(x(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:c,localTop:u,stackStyles:A}=tn(l,Ve(e,"zIndex"),e._disableGlobalStack),{activatorEl:T,activatorRef:S,target:h,targetEl:I,targetRef:F,activatorEvents:C,contentEvents:s,scrimEvents:B}=Gt(e,{isActive:l,isTop:u}),{dimensionStyles:ee}=xt(e),te=Kt(),{scopeId:E}=en();M(()=>e.disabled,w=>{w&&(l.value=!1)});const b=N(),v=N(),d=N(),{contentStyles:R,updateLocation:_}=pt(e,{isRtl:y,contentEl:d,target:h,isActive:l});Wt(e,{root:b,contentEl:d,targetEl:I,isActive:l,updateLocation:_});function Y(w){a("click:outside",w),e.persistent?G():l.value=!1}function P(w){return l.value&&c.value&&(!e.scrim||w.target===v.value)}z&&M(l,w=>{w?window.addEventListener("keydown",p):window.removeEventListener("keydown",p)},{immediate:!0}),it(()=>{z&&window.removeEventListener("keydown",p)});function p(w){var H,me;w.key==="Escape"&&c.value&&(e.persistent?G():(l.value=!1,(H=d.value)!=null&&H.contains(document.activeElement)&&((me=T.value)==null||me.focus())))}const Z=yt();ce(()=>e.closeOnBack,()=>{ht(Z,w=>{c.value&&l.value?(w(!1),e.persistent?G():l.value=!1):w()})});const W=N();M(()=>l.value&&(e.absolute||e.contained)&&i.value==null,w=>{if(w){const H=At(b.value);H&&H!==document.scrollingElement&&(W.value=H.scrollTop)}});function G(){e.noClickAnimation||d.value&&gt(d.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:bt})}function Ye(){k(),a("afterLeave")}return De(()=>{var w;return V(ft,null,[(w=n.activator)==null?void 0:w.call(n,{isActive:l.value,props:$({ref:S,targetRef:F},C.value,e.activatorProps)}),te.value&&g.value&&V(lt,{disabled:!i.value,to:i.value},{default:()=>[V("div",$({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},m.value,f.value,e.class],style:[A.value,{"--v-overlay-opacity":e.opacity,top:L(W.value)},e.style],ref:b},E,o),[V(ln,$({color:O,modelValue:l.value&&!!e.scrim,ref:v},B.value),null),V(kt,{appear:!0,persisted:!0,transition:e.transition,target:h.value,onAfterLeave:Ye},{default:()=>{var H;return[st(V("div",$({ref:d,class:["v-overlay__content",e.contentClass],style:[ee.value,R.value]},s.value,e.contentProps),[(H=n.default)==null?void 0:H.call(n,{isActive:l})]),[[ct,l.value],[ut("click-outside"),{handler:Y,closeConditional:P,include:()=>[T.value]}]])]}})])]})])}),{activatorEl:T,scrimEl:v,target:h,animateClick:G,contentEl:d,globalTop:c,localTop:u,updateLocation:_}}}),cn=q({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...Re(),...pe()},"VDivider"),yn=Ne()({name:"VDivider",props:cn(),setup(e,t){let{attrs:n}=t;const{themeClasses:o}=He(e),{textColorClasses:a,textColorStyles:r}=Ot(Ve(e,"color")),l=x(()=>{const i={};return e.length&&(i[e.vertical?"maxHeight":"maxWidth"]=L(e.length)),e.thickness&&(i[e.vertical?"borderRightWidth":"borderTopWidth"]=L(e.thickness)),i});return De(()=>V("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,a.value,e.class],style:[l.value,r.value,e.style],"aria-orientation":!n.role||n.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null)),{}}});export{mn as V,dn as _,yn as a,sn as m,en as u};
