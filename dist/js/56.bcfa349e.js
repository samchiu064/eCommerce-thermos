"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[56],{4827:function(t,r,e){e.d(r,{er:function(){return v},Wf:function(){return g},dr:function(){return I},ye:function(){return x},gJ:function(){return w},FC:function(){return y},Vh:function(){return k},sG:function(){return b}});var s=e(6265),o=e.n(s);const n=o().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),a=()=>n.get("/cart"),d=t=>n.post("/cart",t),l=(t,r)=>n.put(`/cart/${r}`,t),c=t=>n.delete(`/cart/${t}`),i=(o().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),o().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"})),u=t=>i.post("/coupon",t),p=o().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),h=t=>p.get(`/order/${t}`),f=t=>p.post("/order",t),_=o().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),m=()=>_.get("/products"),g=a,w=d,b=l,v=c,y=u,I=h,k=f,x=m},2347:function(t,r,e){e.d(r,{Z:function(){return _}});var s=e(3396),o=e(7139);const n={class:"table"},a=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col"},"品名"),(0,s._)("th",{scope:"col"},"數量"),(0,s._)("th",{scope:"col",class:"text-end"},"單價")])],-1),d={scope:"row"},l={class:"text-end"},c={class:"text-end"},i=(0,s._)("th",{scope:"row",colspan:"2"},"總價",-1);function u(t,r,e,u,p,h){return(0,s.wg)(),(0,s.iD)("table",n,[a,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.order.products,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",d,(0,o.zw)(t.product.title),1),(0,s._)("td",null,(0,o.zw)(t.qty)+"/"+(0,o.zw)(t.product.unit),1),(0,s._)("td",l,(0,o.zw)(t.product.price?.toLocaleString("en-us")),1)])))),128))]),(0,s._)("tfoot",c,[i,(0,s._)("td",null,"NT$ "+(0,o.zw)(e.order.total?.toLocaleString("en-us")),1)])])}var p={props:{order:{type:Object,default:()=>{}}}},h=e(89);const f=(0,h.Z)(p,[["render",u]]);var _=f},3371:function(t,r,e){e.d(r,{Z:function(){return w}});var s=e(3396),o=e(7139);const n={class:"table-responsive"},a={class:"table text-nowrap align-middle table-borderless border mb-3"},d=(0,s._)("thead",{class:"table-light border-bottom"},[(0,s._)("tr",null,[(0,s._)("th",{colspan:"2",scope:"col",class:"fw-normal"},"訂單資訊")])],-1),l=(0,s._)("th",{class:"fw-medium"},"Email",-1),c=(0,s._)("th",{class:"fw-medium"},"收件人名稱",-1),i=(0,s._)("th",{class:"fw-medium"},"收件人聯絡電話",-1),u=(0,s._)("th",{class:"fw-medium"},"收件人地址",-1),p=(0,s._)("th",{class:"fw-medium"},"備註",-1),h=(0,s._)("tr",null,[(0,s._)("th",{class:"fw-medium"},"付款狀態"),(0,s._)("td",null,"尚未付款")],-1);function f(t,r,e,f,_,m){return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("table",a,[d,(0,s._)("tbody",null,[(0,s._)("tr",null,[l,(0,s._)("td",null,(0,o.zw)(e.form.user.email),1)]),(0,s._)("tr",null,[c,(0,s._)("td",null,(0,o.zw)(e.form.user.name),1)]),(0,s._)("tr",null,[i,(0,s._)("td",null,(0,o.zw)(e.form.user.tel),1)]),(0,s._)("tr",null,[u,(0,s._)("td",null,(0,o.zw)(e.form.user.address),1)]),(0,s._)("tr",null,[p,(0,s._)("td",null,(0,o.zw)(e.form.message),1)]),h])])])}var _={props:{form:{type:Object,default:()=>{}}}},m=e(89);const g=(0,m.Z)(_,[["render",f]]);var w=g},4056:function(t,r,e){e.r(r),e.d(r,{default:function(){return x}});var s=e(3396),o=e(9242);const n=t=>((0,s.dD)("data-v-22cb3fe7"),t=t(),(0,s.Cn)(),t),a={class:"container"},d=n((()=>(0,s._)("div",{class:"row justify-content-center mt-6"},[(0,s._)("div",{class:"col col-lg-6"},[(0,s._)("p",{class:"text-center fs-5 fw-medium"},"請輸入您的 20 碼訂單號碼以獲取訂單資訊")])],-1))),l={class:"row justify-content-center"},c={class:"col col-lg-6"},i={class:"input-group"},u={key:0,class:"text-danger fs-7 ps-3 m-0"},p={key:1,class:"text-danger fs-7 ps-3 m-0"},h={class:"row justify-content-center m-0 mt-4"},f={class:"col col-lg-6"},_={class:"row justify-content-center m-0"},m={class:"col col-lg-6"};function g(t,r,e,n,g,w){const b=(0,s.up)("StoreUserCartOrderList"),v=(0,s.up)("StoreUserCartOrderTable");return(0,s.wg)(),(0,s.iD)("div",a,[d,(0,s._)("div",l,[(0,s._)("div",c,[(0,s._)("div",i,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"訂單號碼","aria-label":"訂單號碼","aria-describedby":"button-addon2",maxlength:"20","onUpdate:modelValue":r[0]||(r[0]=t=>g.orderId=t)},null,512),[[o.nr,g.orderId]]),(0,s._)("button",{type:"button",class:"btn btn-outline-secondary",id:"button-addon2",onClick:r[1]||(r[1]=t=>w.getOrderList(g.orderId))}," 查詢 ")]),!g.orderIsValid&&0!==g.orderId.length&&g.orderId.length<20?((0,s.wg)(),(0,s.iD)("span",u,"錯誤的訂單號碼 ")):(0,s.kq)("",!0),g.orderNotFound?((0,s.wg)(),(0,s.iD)("span",p,"找不到這筆訂單 ")):(0,s.kq)("",!0)])]),(0,s._)("div",h,[(0,s._)("div",f,[g.orderIsValid?((0,s.wg)(),(0,s.j4)(b,{key:0,order:g.order},null,8,["order"])):(0,s.kq)("",!0)])]),(0,s._)("div",_,[(0,s._)("div",m,[g.orderIsValid?((0,s.wg)(),(0,s.j4)(v,{key:0,form:w.form},null,8,["form"])):(0,s.kq)("",!0)])])])}var w=e(2347),b=e(3371),v=e(4827),y={components:{StoreUserCartOrderList:w.Z,StoreUserCartOrderTable:b.Z},data(){return{order:{},orderId:"",orderIsValid:!1,orderNotFound:!1}},computed:{form(){const t={};return t.message=this.order.message??"",t.user={...this.order.user},t}},methods:{async getOrderList(t){if(this.orderIsValid=!1,t.length<20)return;this.$Progress.start();const r=await(0,v.dr)(t);try{if(!r.data.order)return this.orderNotFound=!0,void this.$Progress.finish();!0===r.data.success&&(this.order=r.data.order,this.orderNotFound=!1,this.orderIsValid=!0),this.$Progress.finish()}catch(e){this.$Progress.fail(),this.orderIsValid=!1}}},created(){this.$route.query.order_id&&(this.orderId=this.$route.query.order_id,this.getOrderList(this.$route.query.order_id))}},I=e(89);const k=(0,I.Z)(y,[["render",g],["__scopeId","data-v-22cb3fe7"]]);var x=k}}]);
//# sourceMappingURL=56.bcfa349e.js.map