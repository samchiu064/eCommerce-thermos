"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[975],{3975:function(t,e,s){s.r(e),s.d(e,{default:function(){return q}});var a=s(3396),l=s(7139);const o={class:"table mt-4"},n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"訂單編號"),(0,a._)("th",null,"Email"),(0,a._)("th",null,"購買款項"),(0,a._)("th",null,"應付金額"),(0,a._)("th",null,"是否付款"),(0,a._)("th",null,"編輯")])],-1),i={class:"text-right"},d={class:"text-right"},r=["onClick"],c=(0,a._)("span",null,"已付款",-1),u=[c],p=["onClick"],h=(0,a._)("span",null,"未付款",-1),g=[h],_={class:"btn-group"},b=["onClick"];function m(t,e,s,c,h,m){const w=(0,a.up)("LoadingOverlay"),y=(0,a.up)("DashboardOrderList"),f=(0,a.up)("ThePagination"),D=(0,a.up)("DashboardModalDelete");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(w,{active:h.isLoading},null,8,["active"]),(0,a._)("table",o,[n,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(h.orders,((t,e)=>((0,a.wg)(),(0,a.iD)("tr",{key:t+e},[(0,a._)("td",null,(0,l.zw)(t.id),1),(0,a._)("td",null,(0,l.zw)(t.user.email),1),(0,a._)("td",i,[(0,a.Wm)(y,{order:t,form:t.user},null,8,["order","form"])]),(0,a._)("td",d,(0,l.zw)(t.total.toLocaleString("en-us")),1),(0,a._)("td",null,[t.is_paid?((0,a.wg)(),(0,a.iD)("button",{key:0,type:"button",class:"btn btn-sm btn-outline-success",title:"更改為未付款","data-bs-toggle":"tooltip","data-bs-placement":"bottom",onClick:e=>m.changePaymentStatus(t.is_paid,t.id)},u,8,r)):(0,a.kq)("",!0),t.is_paid?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:1,type:"button",class:"btn btn-sm btn-outline-danger",title:"更改為已付款","data-bs-toggle":"tooltip","data-bs-placement":"bottom",onClick:e=>m.changePaymentStatus(t.is_paid,t.id)},g,8,p))]),(0,a._)("td",null,[(0,a._)("div",_,[(0,a._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>m.openDeleteModal(t)}," 刪除 ",8,b)])])])))),128))])]),(0,a.Wm)(f,{pages:h.pagination,onEmitPage:m.getProducts},null,8,["pages","onEmitPage"]),(0,a.Wm)(D,{ref:"deleteModal",item:h.tempOrder,onDeleteItem:m.deleteOrder},null,8,["item","onDeleteItem"])],64)}var w=s(506);const y={class:"table table-striped table-hover"},f=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col"},"品名"),(0,a._)("th",{scope:"col"},"數量"),(0,a._)("th",{scope:"col",class:"text-end"},"單價")])],-1),D={scope:"row"},k={class:"text-end"},M={class:"table table-striped table-hover"},L=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col"},"Email"),(0,a._)("th",{scope:"col"},"收件人名稱"),(0,a._)("th",{scope:"col"},"收件人連絡電話"),(0,a._)("th",{scope:"col"},"收件人地址")])],-1),P={scope:"row"},v={scope:"row"},S={scope:"row"},z={scope:"row"};function O(t,e,s,o,n,i){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("table",y,[f,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.order.products,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",D,(0,l.zw)(t.product.title),1),(0,a._)("td",null,(0,l.zw)(t.qty)+"/"+(0,l.zw)(t.product.unit),1),(0,a._)("td",k,(0,l.zw)(t.product.price?.toLocaleString("en-us")),1)])))),128))])]),(0,a._)("table",M,[L,(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",P,(0,l.zw)(s.form.email),1),(0,a._)("td",v,(0,l.zw)(s.form.name),1),(0,a._)("td",S,(0,l.zw)(s.form.tel),1),(0,a._)("td",z,(0,l.zw)(s.form.address),1)])])])],64)}var C={props:{order:{type:Object,default:()=>{}},form:{type:Object,default:()=>{}}}},j=s(89);const W=(0,j.Z)(C,[["render",O]]);var x=W,E=s(8198),H=s(3431),Y={components:{ThePagination:H.Z,DashboardOrderList:x,DashboardModalDelete:E.Z},inject:["pushMessageState"],data(){return{orders:[],pagination:{},isLoading:!1,tempOrder:{}}},methods:{async getProducts(t=1){this.isLoading=!0;try{const e=await(0,w.vT)(t);this.orders=e.data.orders,this.pagination=e.data.pagination,this.pushMessageState(e,"產品資料獲取")}catch(e){this.pushMessageState(e,"產品資料獲取")}this.isLoading=!1},async changePaymentStatus(t,e){this.isLoading=!0;const s=!t;try{const t=await(0,w.P5)({data:{is_paid:s}},e);this.pushMessageState(t,"訂單狀態更新"),this.getProducts()}catch(a){this.pushMessageState(a,"優惠券資料刪除")}this.isLoading=!1},async deleteOrder(t){this.isLoading=!0;try{const{id:e}=t,s=await(0,w.LW)(e);this.pushMessageState(s,"訂單刪除"),this.getProducts(),this.$refs.deleteModal.hideModal()}catch(e){this.pushMessageState(e,"訂單刪除")}this.isLoading=!1},openDeleteModal(t){this.tempOrder={...t,title:"此筆訂單"},this.$refs.deleteModal.showModal()}},created(){this.getProducts()}};const Z=(0,j.Z)(Y,[["render",m]]);var q=Z}}]);
//# sourceMappingURL=975.bd0e49f5.js.map