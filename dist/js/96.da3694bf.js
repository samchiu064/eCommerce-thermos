"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[96],{4827:function(t,e,a){a.d(e,{er:function(){return v},Wf:function(){return g},dr:function(){return _},ye:function(){return q},gJ:function(){return h},FC:function(){return w},Vh:function(){return k},sG:function(){return f}});var r=a(6265),s=a.n(r);const d=s().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),c=()=>d.get("/cart"),i=t=>d.post("/cart",t),l=(t,e)=>d.put(`/cart/${e}`,t),o=t=>d.delete(`/cart/${t}`),n=(s().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),s().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"})),u=t=>n.post("/coupon",t),p=s().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),m=t=>p.get(`/order/${t}`),b=t=>p.post("/order",t),I=s().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),y=()=>I.get("/products"),g=c,h=i,f=l,v=o,w=u,_=m,k=b,q=y},4677:function(t,e,a){a.d(e,{x:function(){return i}});var r=a(4827),s=a(4301),d=a(6294);const c=(0,d.Z)(),i=(0,s.Q_)("cart",{state:()=>({cart:{},itemQty:0}),getters:{discount(){return this.cart.total-this.cart.final_total}},actions:{async getCartList(){c.isLoading=!0;try{const t=await(0,r.Wf)();this.cart=t.data.data}catch(t){c.apiRequestIsFailed=!0,c.apiErrorMessage=t}c.isLoading=!1},async addCartItem(t,e){c.cartLoadingItem=t,c.cartItemIsAdded=!1;try{await(0,r.gJ)({data:{product_id:t,qty:e}}),c.cartLoadingItem="",c.cartItemIsAdded=!0}catch(a){c.cartItemIsAdded=!1,c.apiRequestIsFailed=!0,c.apiErrorMessage=a}this.getCartList()},async updateCartItem({productId:t,qty:e},a){c.cartLoadingItem=t;try{const s=e<=0?1:e;await(0,r.sG)({data:{product_id:t,qty:s}},a),this.getCartList()}catch(s){c.apiRequestIsFailed=!0,c.apiErrorMessage=s}c.cartLoadingItem=""},async deleteCartItem(t){c.cartDeletedItem=t;try{await(0,r.er)(t),this.getCartList()}catch(e){c.apiRequestIsFailed=!0,c.apiErrorMessage=e}this.cancelOverlay()},overlayCartItem(t){c.cartItemIsOverlaid=!0,c.cartDeletedItem=t},cancelOverlay(){c.cartItemIsOverlaid=!1,c.cartDeletedItem=""}}})},6294:function(t,e,a){var r=a(4301);e["Z"]=(0,r.Q_)("statusStore",{state:()=>({isLoading:!1,cartIsShown:!1,cartLoadingItem:"",cartDeletedItem:"",cartItemIsAdded:!1,cartItemIsOverlaid:!1,couponIsApplied:!1,couponIsValid:!1,orderIsValid:!1,apiRequestIsFailed:!1,apiErrorMessage:""})})},5922:function(t,e,a){a.d(e,{Z:function(){return b}});var r=a(3396);const s=["disabled"],d={for:"qty",class:"w-25 align-middle"},c=["disabled","value"],i=["disabled"];function l(t,e,a,l,o,n){return(0,r.wg)(),(0,r.iD)(r.HY,null,[a.hasOperators?((0,r.wg)(),(0,r.iD)("button",{key:0,type:"button",class:"btn bi bi-dash fs-3 text-black-50",disabled:t.cartDeletedItem===a.productId||1===a.qty,onClick:e[0]||(e[0]=e=>t.$emit("updateItem",{qty:a.qty-1,productId:a.productId}))},null,8,s)):(0,r.kq)("",!0),(0,r._)("label",d,[(0,r._)("input",{type:"number",class:"rounded form-control text-center w-100 text-black-50 bg-transparent px-2",id:"qty",min:"1",disabled:t.cartDeletedItem===a.productId||!a.hasOperators&&!a.editable,value:a.qty,onChange:e[1]||(e[1]=e=>t.$emit("update:value",Number(e.target.value)))},null,40,c)]),a.hasOperators?((0,r.wg)(),(0,r.iD)("button",{key:1,type:"button",class:"btn bi bi-plus fs-3 text-black-50",disabled:t.cartDeletedItem===a.productId,onClick:e[2]||(e[2]=e=>t.$emit("updateItem",{qty:a.qty+1,productId:a.productId}))},null,8,i)):(0,r.kq)("",!0)],64)}var o=a(6294),n=a(4301),u={props:{hasOperators:{type:Boolean,default:!0},qty:{type:Number,default:1},productId:{type:String,default:"defaultId"},editable:{type:Boolean,default:!0}},emits:["updateItem","update:value"],computed:{...(0,n.rn)(o.Z,["cartDeletedItem"])}},p=a(89);const m=(0,p.Z)(u,[["render",l],["__scopeId","data-v-45372ad7"]]);var b=m},7096:function(t,e,a){a.r(e),a.d(e,{default:function(){return P}});var r=a(3396),s=a(7139);const d=t=>((0,r.dD)("data-v-37785a0e"),t=t(),(0,r.Cn)(),t),c={class:"table align-middle table-borderless text-center border mb-3"},i={class:"table-light border-bottom"},l=d((()=>(0,r._)("th",{class:"fw-normal",scope:"col"},"商品資訊",-1))),o=d((()=>(0,r._)("th",{class:"d-none d-md-table-cell fw-normal",scope:"col"},"商品價格",-1))),n=d((()=>(0,r._)("th",{class:"d-none d-md-table-cell fw-normal",scope:"col",width:"180"},"數量",-1))),u={key:0,class:"d-none d-md-table-cell fw-normal",scope:"col"},p={class:"col-12 col-md-auto text-center text-md-start"},m={class:"figure figure--spacing-mobile d-flex justify-content-start align-items-center flex-column flex-md-row m-0"},b={class:"img-box d-flex justify-content-center align-items-center border ms-1 me-2"},I=["src","alt"],y={class:"fs-6 m-0 pt-3 pt-md-0"},g={class:"col-12 col-md-auto p-2"},h={class:"col-12 col-md-auto p-0"},f={key:1,class:"spinner-border spinner-border-sm",role:"status"},v=d((()=>(0,r._)("span",{class:"visually-hidden"},"Loading...",-1))),w=[v],_={key:0,class:"col-12 col-md-auto p-0"},k=["onClick"],q={key:1,class:"spinner-border spinner-border-sm align-middle",role:"status"},x=d((()=>(0,r._)("span",{class:"visually-hidden"},"Loading...",-1))),C=[x],D={key:1,class:"overlay w-100 h-100 position-absolute top-0 start-0"},L={class:"w-100 position-absolute top-50 start-50 translate-middle"},O=d((()=>(0,r._)("p",{class:"text-center text-light"},"確定要刪除嗎？",-1))),U={class:"d-flex justify-content-center",role:"group","aria-label":"Basic example"},S=["onClick"],R={key:0,class:"border-top"},$={colspan:"4",class:"text-end fw-medium"},Z=(0,r.Uk)(" 折扣"),j={class:"fw-medium ps-3"},F={colspan:"4",class:"text-end fw-bold"},A=(0,r.Uk)(" 本訂單須支付金額"),E={class:"fw-bold ps-3"},M={key:1,colspan:"4",class:"p-4"},N=(0,r.Uk)(" 您的購物車目前沒有任何商品，"),Q=(0,r.Uk)("去購物");function z(t,e,a,d,v,x){const z=(0,r.up)("StoreProductInput"),B=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("table",c,[(0,r._)("thead",i,[(0,r._)("tr",null,[l,o,n,a.isSummary?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("th",u,"變更明細"))])]),(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.cart.carts,(d=>((0,r.wg)(),(0,r.iD)("tr",{key:d.product.id,class:(0,s.C_)([{"td-deleted":t.cartDeletedItem===d.id,"text-muted":t.cartDeletedItem===d.id},"d-flex d-sm-table-row table-row--divider-light flex-wrap justify-content-center m-2 position-relative"])},[(0,r._)("td",p,[(0,r._)("figure",m,[(0,r._)("div",b,[(0,r._)("img",{src:d.product.imageUrl,alt:`${d.product.title}圖片`,class:"img-fluid img-cart-item p-1 rounded"},null,8,I)]),(0,r._)("figcaption",null,[(0,r._)("h2",y,(0,s.zw)(d.product.title),1)])])]),(0,r._)("td",g," NT$ "+(0,s.zw)(d.product.price.toLocaleString("en-us")),1),(0,r._)("td",h,[t.cartLoadingItem!==d.product.id?((0,r.wg)(),(0,r.j4)(z,{key:0,hasOperators:x.hasOperators,editable:x.editable,qty:d.qty,productId:d.product.id,onUpdateItem:e=>t.updateCartItem(e,d.id),"onUpdate:value":t=>x.updateQty(t,d.product.id,d.id)},null,8,["hasOperators","editable","qty","productId","onUpdateItem","onUpdate:value"])):(0,r.kq)("",!0),t.cartLoadingItem===d.product.id?((0,r.wg)(),(0,r.iD)("div",f,w)):(0,r.kq)("",!0)]),a.isSummary?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("td",_,[t.cartDeletedItem!==d.id?((0,r.wg)(),(0,r.iD)("button",{key:0,type:"button",class:"btn btn-deleted bi bi-trash",onClick:e=>t.overlayCartItem(d.id)},null,8,k)):(0,r.kq)("",!0),t.cartDeletedItem===d.id?((0,r.wg)(),(0,r.iD)("div",q,C)):(0,r.kq)("",!0)])),d.id===t.cartDeletedItem?((0,r.wg)(),(0,r.iD)("td",D,[(0,r._)("div",L,[O,(0,r._)("div",U,[(0,r._)("button",{type:"button",class:"btn btn-danger me-1",onClick:e=>t.deleteCartItem(d.id)}," 刪除產品 ",8,S),(0,r._)("button",{type:"button",class:"btn btn-light ms-1",onClick:e[0]||(e[0]=(...e)=>t.cancelOverlay&&t.cancelOverlay(...e))}," 返回 ")])])])):(0,r.kq)("",!0)],2)))),128))]),a.isSummary?((0,r.wg)(),(0,r.iD)("tfoot",R,[(0,r._)("tr",null,[(0,r._)("td",$,[Z,(0,r._)("span",j,"- NT$ "+(0,s.zw)(t.discount)+"元",1)])]),(0,r._)("tr",null,[(0,r._)("td",F,[A,(0,r._)("span",E," NT$ "+(0,s.zw)(t.cart.final_total?.toLocaleString("en-us"))+"元",1)])])])):(0,r.kq)("",!0),0===this.cart.carts?.length?((0,r.wg)(),(0,r.iD)("td",M,[N,(0,r.Wm)(B,{to:"/thermos/classic/details/classic-green",class:"text-decoration-none link-classic-green fw-medium"},{default:(0,r.w5)((()=>[Q])),_:1})])):(0,r.kq)("",!0)])])}var B=a(4301),T=a(4677),V=a(6294),W=a(5922),G={components:{StoreProductInput:W.Z},props:{isSummary:{type:Boolean,default:!1}},data(){return{tempItem:[]}},computed:{hasOperators(){return!this.isSummary},editable(){return!this.isSummary},...(0,B.rn)(T.x,["cart","discount"]),...(0,B.rn)(V.Z,["cartLoadingItem","cartDeletedItem"])},methods:{async updateQty(t,e,a){await this.updateCartItem({productId:e,qty:t},a)},...(0,B.nv)(T.x,["getCartList","updateCartItem","deleteCartItem","overlayCartItem","cancelOverlay"])},created(){this.getCartList()}},H=a(89);const J=(0,H.Z)(G,[["render",z],["__scopeId","data-v-37785a0e"]]);var P=J}}]);
//# sourceMappingURL=96.da3694bf.js.map