(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[541],{8803:function(t,e,s){s(1703),
/*!
  * Bootstrap toast.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,a){t.exports=a(s(4130),s(6221),s(1884))}(0,(function(t,e,s){"use strict";const a=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},n=a(t),i=a(e),o=a(s),r=t=>null===t||void 0===t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),l=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let s=t.getAttribute("href");if(!s||!s.includes("#")&&!s.startsWith("."))return null;s.includes("#")&&!s.startsWith("#")&&(s=`#${s.split("#")[1]}`),e=s&&"#"!==s?s.trim():null}return e},c=t=>{const e=l(t);return e?document.querySelector(e):null},u=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),d=(t,e,s)=>{Object.keys(s).forEach((a=>{const n=s[a],i=e[a],o=i&&u(i)?"element":r(i);if(!new RegExp(n).test(o))throw new TypeError(`${t.toUpperCase()}: Option "${a}" provided type "${o}" but expected type "${n}".`)}))},h=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),m=t=>{t.offsetHeight},f=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},g=[],p=t=>{"loading"===document.readyState?(g.length||document.addEventListener("DOMContentLoaded",(()=>{g.forEach((t=>t()))})),g.push(t)):t()},_=t=>{p((()=>{const e=f();if(e){const s=t.NAME,a=e.fn[s];e.fn[s]=t.jQueryInterface,e.fn[s].Constructor=t,e.fn[s].noConflict=()=>(e.fn[s]=a,t.jQueryInterface)}}))},b=(t,e="hide")=>{const s=`click.dismiss${t.EVENT_KEY}`,a=t.NAME;n.default.on(document,s,`[data-bs-dismiss="${a}"]`,(function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),h(this))return;const n=c(this)||this.closest(`.${a}`),i=t.getOrCreateInstance(n);i[e]()}))},v="toast",y="bs.toast",w=`.${y}`,k=`mouseover${w}`,I=`mouseout${w}`,T=`focusin${w}`,$=`focusout${w}`,L=`hide${w}`,x=`hidden${w}`,C=`show${w}`,D=`shown${w}`,E="fade",M="hide",j="show",A="showing",N={animation:"boolean",autohide:"boolean",delay:"number"},S={animation:!0,autohide:!0,delay:5e3};class W extends o.default{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return N}static get Default(){return S}static get NAME(){return v}show(){const t=n.default.trigger(this._element,C);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(E);const e=()=>{this._element.classList.remove(A),n.default.trigger(this._element,D),this._maybeScheduleHide()};this._element.classList.remove(M),m(this._element),this._element.classList.add(j),this._element.classList.add(A),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(j))return;const t=n.default.trigger(this._element,L);if(t.defaultPrevented)return;const e=()=>{this._element.classList.add(M),this._element.classList.remove(A),this._element.classList.remove(j),n.default.trigger(this._element,x)};this._element.classList.add(A),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(j)&&this._element.classList.remove(j),super.dispose()}_getConfig(t){return t={...S,...i.default.getDataAttributes(this._element),..."object"===typeof t&&t?t:{}},d(v,t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){n.default.on(this._element,k,(t=>this._onInteraction(t,!0))),n.default.on(this._element,I,(t=>this._onInteraction(t,!1))),n.default.on(this._element,T,(t=>this._onInteraction(t,!0))),n.default.on(this._element,$,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=W.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return b(W),_(W),W}))},6294:function(t,e,s){"use strict";var a=s(4301);e["Z"]=(0,a.Q_)("statusStore",{state:()=>({isLoading:!1,cartIsShown:!1,cartLoadingItem:"",cartDeletedItem:"",cartItemIsAdded:!1,cartItemIsOverlaid:!1,couponIsApplied:!1,couponIsValid:!1,orderIsValid:!1,apiRequestIsFailed:!1,apiErrorMessage:""})})},4541:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return X}});var a=s(3396);const n={class:"container"};function i(t,e,s,i,o,r){const l=(0,a.up)("DashboardNavbar"),c=(0,a.up)("DashboardToastContainer"),u=(0,a.up)("RouterView");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(l),(0,a.Wm)(c),(0,a.Wm)(u)])}var o=s(6846);const r={class:"navbar navbar-expand-lg p-3"},l={class:"container-fluid"},c=(0,a._)("img",{src:o,alt:"後臺logo圖片",style:{"max-height":"48px"},class:"navbar-brand position-absolute top-50 start-50 translate-middle"},null,-1),u=(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarText"},h={class:"navbar-nav me-auto mb-2 mb-lg-0 w-100"},m={class:"nav-item"},f=(0,a.Uk)("產品"),g={class:"nav-item"},p=(0,a.Uk)("訂單"),_={class:"nav-item"},b=(0,a.Uk)("優惠券"),v={class:"nav-item ms-auto"},y=(0,a.Uk)("登入"),w={class:"nav-item"};function k(t,e,s,n,i,o){const k=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",r,[(0,a._)("div",l,[(0,a.Wm)(k,{to:"/dashboard",class:"navbar-brand"},{default:(0,a.w5)((()=>[c])),_:1}),u,(0,a._)("div",d,[(0,a._)("ul",h,[(0,a._)("li",m,[(0,a.Wm)(k,{to:"/dashboard/products",class:"nav-link link-classic-green fs-5 px-3"},{default:(0,a.w5)((()=>[f])),_:1})]),(0,a._)("li",g,[(0,a.Wm)(k,{to:"/dashboard/orders",class:"nav-link link-classic-green fs-5 px-3"},{default:(0,a.w5)((()=>[p])),_:1})]),(0,a._)("li",_,[(0,a.Wm)(k,{to:"/dashboard/coupons",class:"nav-link link-classic-green fs-5 px-3"},{default:(0,a.w5)((()=>[b])),_:1})]),(0,a._)("li",v,[(0,a.Wm)(k,{to:"/login",class:"nav-link link-classic-green fs-5 px-3 text-right"},{default:(0,a.w5)((()=>[y])),_:1})]),(0,a._)("li",w,[(0,a._)("button",{type:"button",class:"btn nav-link link-classic-green fs-5 px-3 border-0",onClick:e[0]||(e[0]=(...t)=>o.logout&&o.logout(...t))}," 登出 ")])])])])])}var I=s(506),T=s(4301),$=s(6294),L={computed:{...(0,T.Ah)($.Z,["apiRequestIsFailed","apiErrorMessage"])},methods:{async logout(){try{await(0,I.Nd)(),document.cookie=`hexToken=;expires= ${new Date(0).toGMTString()}`,this.$router.push("/login")}catch(t){this.apiRequestIsFailed=!0,this.apiErrorMessage=t}}}},x=s(89);const C=(0,x.Z)(L,[["render",k]]);var D=C;const E={class:"toast-container position-absolute top-0 end-0 pe-3 mt-5"};function M(t,e,s,n,i,o){const r=(0,a.up)("DashboardToastContainerMessage");return(0,a.wg)(),(0,a.iD)("div",E,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.messages,((t,e)=>((0,a.wg)(),(0,a.j4)(r,{key:e,message:t},null,8,["message"])))),128))])}var j=s(7139);const A={class:"toast bg-white",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},N={class:"toast-header"},S={class:"me-auto fw-medium"},W=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),O={class:"toast-body"};function q(t,e,s,n,i,o){return(0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("div",N,[(0,a._)("span",{class:(0,j.C_)(["rounded me-2 p-2",`bg-${o.statusLight}`])},null,2),(0,a._)("strong",S,(0,j.zw)(s.message.title),1),W]),(0,a._)("div",O,(0,j.zw)(s.message.content),1)],512)}var R=s(8803),Z=s.n(R),H={props:{message:{type:Object}},data(){return{}},computed:{statusLight(){return"success"===this.message.status?"success":"danger"}},mounted(){const t=new(Z())(this.$refs.toast,{delay:6e3});t.show()}};const K=(0,x.Z)(H,[["render",q]]);var Q=K,U={components:{DashboardToastContainerMessage:Q},inject:["emitter"],data(){return{messages:[]}},mounted(){this.emitter.on("pushMessages",(t=>{const e={...t};this.messages.push(e),setTimeout((()=>{this.messages.shift()}),6e3)}))}};const V=(0,x.Z)(U,[["render",M]]);var z=V;function F(t){return{all:t=t||new Map,on:function(e,s){var a=t.get(e);a?a.push(s):t.set(e,[s])},off:function(e,s){var a=t.get(e);a&&(s?a.splice(a.indexOf(s)>>>0,1):t.set(e,[]))},emit:function(e,s){var a=t.get(e);a&&a.slice().map((function(t){t(s)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,s)}))}}}const P=F();var Y=P;function G(t,e="更新"){if(t.data.success)Y.emit("pushMessages",{status:"success",title:`${e}成功`});else{const s="string"===typeof t.data.message?[t.data.message]:t.data.message;Y.emit("pushMessages",{status:"failed",title:`${e}失敗`,content:s.join("、")})}}var B={components:{DashboardNavbar:D,DashboardToastContainer:z},provide(){return{emitter:Y,pushMessageState:G}}};const J=(0,x.Z)(B,[["render",i]]);var X=J},6846:function(t,e,s){"use strict";t.exports=s.p+"img/logo_backend.7c0aff22.svg"}}]);
//# sourceMappingURL=541.d4519bd1.js.map