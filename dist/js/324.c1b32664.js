"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[324,481],{3371:function(t,r,e){e.d(r,{Z:function(){return w}});var s=e(3396),l=e(7139);const a={class:"table-responsive"},o={class:"table text-nowrap align-middle table-borderless border mb-3"},d=(0,s._)("thead",{class:"table-light border-bottom"},[(0,s._)("tr",null,[(0,s._)("th",{colspan:"2",scope:"col",class:"fw-normal"},"訂單資訊")])],-1),n=(0,s._)("th",{class:"fw-medium"},"Email",-1),c=(0,s._)("th",{class:"fw-medium"},"收件人名稱",-1),u=(0,s._)("th",{class:"fw-medium"},"收件人聯絡電話",-1),i=(0,s._)("th",{class:"fw-medium"},"收件人地址",-1),m=(0,s._)("th",{class:"fw-medium"},"備註",-1),p=(0,s._)("tr",null,[(0,s._)("th",{class:"fw-medium"},"付款狀態"),(0,s._)("td",null,"尚未付款")],-1);function _(t,r,e,_,b,f){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("table",o,[d,(0,s._)("tbody",null,[(0,s._)("tr",null,[n,(0,s._)("td",null,(0,l.zw)(e.form.user.email),1)]),(0,s._)("tr",null,[c,(0,s._)("td",null,(0,l.zw)(e.form.user.name),1)]),(0,s._)("tr",null,[u,(0,s._)("td",null,(0,l.zw)(e.form.user.tel),1)]),(0,s._)("tr",null,[i,(0,s._)("td",null,(0,l.zw)(e.form.user.address),1)]),(0,s._)("tr",null,[m,(0,s._)("td",null,(0,l.zw)(e.form.message),1)]),p])])])}var b={props:{form:{type:Object,default:()=>{}}}},f=e(89);const h=(0,f.Z)(b,[["render",_]]);var w=h},1512:function(t,r,e){e.r(r),e.d(r,{default:function(){return k}});var s=e(3396);const l={class:"container p-3 p-md-5"},a={class:"row"},o={class:"col"},d={class:"row"},n={class:"col"},c={class:"row justify-content-center mt-3"},u={class:"col-6 col-lg-3"},i={class:"col-6 col-lg-3"},m=["disabled"],p={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},_=(0,s.Uk)(" 確認訂單 ");function b(t,r,e,b,f,h){const w=(0,s.up)("StoreUserCartProductTable"),v=(0,s.up)("StoreUserCartOrderTable");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",a,[(0,s._)("div",o,[(0,s.Wm)(w,{isSummary:!0})])]),(0,s._)("div",d,[(0,s._)("div",n,[(0,s.Wm)(v,{form:e.tempForm},null,8,["form"])])]),(0,s._)("div",c,[(0,s._)("div",u,[(0,s._)("button",{type:"button",class:"btn btn-outline-secondary rounded-pill w-100 py-2",onClick:r[0]||(r[0]=t=>this.$router.push({name:"order"}))}," 上一步 ")]),(0,s._)("div",i,[(0,s._)("button",{type:"button",class:"btn btn-dark rounded-pill w-100 py-2",onClick:r[1]||(r[1]=(...t)=>h.placeOrder&&h.placeOrder(...t)),disabled:f.isLoading},[f.isLoading?((0,s.wg)(),(0,s.iD)("div",p)):(0,s.kq)("",!0),_],8,m)])])])}var f=e(4827),h=e(5309),w=e(3371),v={components:{StoreUserCartProductTable:h["default"],StoreUserCartOrderTable:w.Z},props:{tempForm:{type:Object,default:()=>{}}},data(){return{orderId:"",isLoading:!1}},methods:{async placeOrder(){this.isLoading=!0;const t=await(0,f.Vh)({data:this.tempForm});try{!0===t.data.success&&(this.orderId=t.data.orderId),this.isLoading=!1,this.$router.push({name:"checkoutOrder",params:{orderId:this.orderId}})}catch(r){}}}},y=e(89);const g=(0,y.Z)(v,[["render",b]]);var k=g}}]);
//# sourceMappingURL=324.c1b32664.js.map