"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[844],{4827:function(t,e,a){a.d(e,{er:function(){return _},Wf:function(){return y},dr:function(){return x},ye:function(){return v},gJ:function(){return I},FC:function(){return w},Vh:function(){return C},sG:function(){return b}});var s=a(6265),o=a.n(s);const c=o().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),n=()=>c.get("/cart"),i=t=>c.post("/cart",t),r=(t,e)=>c.put(`/cart/${e}`,t),l=t=>c.delete(`/cart/${t}`),d=(o().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),o().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"})),u=t=>d.post("/coupon",t),p=o().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),m=t=>p.get(`/order/${t}`),h=t=>p.post("/order",t),f=o().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),g=()=>f.get("/products"),y=n,I=i,b=r,_=l,w=u,x=m,C=h,v=g},4677:function(t,e,a){a.d(e,{x:function(){return i}});var s=a(4827),o=a(4301),c=a(6294);const n=(0,c.Z)(),i=(0,o.Q_)("cart",{state:()=>({cart:{},itemQty:0}),getters:{discount(){return this.cart.total-this.cart.final_total}},actions:{async getCartList(){n.isLoading=!0;const t=await(0,s.Wf)();try{this.cart=t.data.data}catch(e){}n.isLoading=!1},async addCartItem(t,e){n.cartLoadingItem=t,n.cartItemIsAdded=!1;await(0,s.gJ)({data:{product_id:t,qty:e}});try{n.cartLoadingItem="",n.cartItemIsAdded=!0}catch(a){n.cartItemIsAdded=!1}this.getCartList()},async updateCartItem({itemId:t,qty:e}){const a=e<=0?1:e;n.cartLoadingItem=t;await(0,s.sG)({data:{product_id:t,qty:a}},t);n.cartLoadingItem="",this.getCartList()},async deleteCartItem(t){n.cartDeletedItem=t;await(0,s.er)(t);this.cancelOverlay(),this.getCartList()},overlayCartItem(t){n.cartItemIsOverlaid=!0,n.cartDeletedItem=t},cancelOverlay(){n.cartItemIsOverlaid=!1,n.cartDeletedItem=""}}})},6294:function(t,e,a){var s=a(4301);e["Z"]=(0,s.Q_)("statusStore",{state:()=>({isLoading:!1,cartIsShown:!1,cartLoadingItem:"",cartDeletedItem:"",cartItemIsAdded:!1,cartItemIsOverlaid:!1,couponIsApplied:!1,couponIsValid:!1,orderIsValid:!1})})},6844:function(t,e,a){a.r(e),a.d(e,{default:function(){return J}});var s=a(3396),o=a(7139),c=a(9242);const n=t=>((0,s.dD)("data-v-0f15ca72"),t=t(),(0,s.Cn)(),t),i={class:"col-12 col-lg-4"},r={class:"card"},l=n((()=>(0,s._)("h4",{class:"card-header fs-6 py-2 text-center"},"您的訂單",-1))),d={class:"list-group list-group-flush"},u={class:"list-group-item d-flex justify-content-between align-items-center py-3 px-0 mx-3"},p=n((()=>(0,s._)("h5",{class:"fs-6 m-0 fw-normal"},"小計",-1))),m={class:"fs-6 m-0 fw-medium"},h=n((()=>(0,s._)("li",{class:"list-group-item d-flex justify-content-between align-items-center py-3 px-0 mx-3"},[(0,s._)("h5",{class:"fs-6 m-0 fw-normal"},"運費"),(0,s._)("p",{class:"fs-6 m-0 fw-medium"},"免運費")],-1))),f={class:"list-group-item accordion accordion-flush py-3 px-0 mx-3"},g={class:"accordion-item"},y=n((()=>(0,s._)("h2",{class:"accordion-header",id:"flush-headingOne"},[(0,s._)("button",{type:"button",class:"accordion-button collapsed px-3","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"true","aria-controls":"flush-collapseOne"}," 套用折扣碼 ")],-1))),I={id:"flush-collapseOne",class:"accordion-collapse collapse","aria-labelledby":"flush-headingOne","data-bs-parent":"#accordionFlushExample"},b={class:"accordion-body"},_={class:"list-group-flush ps-0"},w=n((()=>(0,s._)("p",null,"已套用",-1))),x={class:"d-flex justify-content-between ps-2"},C={key:0,class:"text-danger fs-7 ps-3 m-0"},v={class:"list-group-item d-flex justify-content-between align-items-center pt-3 px-0 mx-3 border-bottom-0"},L=n((()=>(0,s._)("h5",{class:"fs-6 m-0"},"折扣",-1))),A={class:"fs-6 m-0 fw-medium"},k={class:"list-group-item d-flex justify-content-between align-items-center pb-3 px-0 mx-3 border-bottom-0"},V=n((()=>(0,s._)("h5",{class:"fs-5 m-0 fw-bold"},"總計",-1))),O={class:"fs-5 m-0 fw-bold"},j={class:"list-group-item d-flex justify-content-between align-items-center py-3 px-0 mx-3"},D=["disabled"];function $(t,e,a,n,$,S){return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",r,[l,(0,s._)("ul",d,[(0,s._)("li",u,[p,(0,s._)("p",m,"NT$ "+(0,o.zw)(t.cart.total?.toLocaleString("en-us")),1)]),h,(0,s._)("li",f,[(0,s._)("div",g,[y,(0,s._)("div",I,[(0,s._)("div",b,[(0,s._)("ul",_,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.couponList,((t,e)=>((0,s.wg)(),(0,s.iD)("li",{key:t+e,class:"d-flex justify-content-between ps-2"},[(0,s._)("p",null,(0,o.zw)(t),1),w])))),128)),(0,s._)("li",x,[(0,s.wy)((0,s._)("input",{class:"form-control form-control-sm w-70",type:"text",placeholder:"請輸入折扣碼 summer","aria-label":"折扣碼輸入處","onUpdate:modelValue":e[0]||(e[0]=e=>t.couponCode=e),onClick:e[1]||(e[1]=()=>{t.couponIsValid=!0,t.couponIsApplied=!1})},null,512),[[c.nr,t.couponCode]]),(0,s._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:e[2]||(e[2]=(...t)=>S.addCoupon&&S.addCoupon(...t))}," 套用 ")])]),!t.couponIsValid&&0!==t.couponCode.length||t.couponIsApplied?((0,s.wg)(),(0,s.iD)("span",C,(0,o.zw)(S.errorMessage),1)):(0,s.kq)("",!0)])])])]),(0,s._)("li",v,[L,(0,s._)("p",A,"- "+(0,o.zw)(t.discount?.toLocaleString("en-us")),1)]),(0,s._)("li",k,[V,(0,s._)("p",O,"NT $"+(0,o.zw)(t.cart.final_total?.toLocaleString("en-us")),1)]),(0,s._)("li",j,[(0,s._)("button",{type:"button",class:"btn btn-dark w-100 rounded-pill",disabled:0===this.cart.carts?.length||"order"===this.$route.name&&!a.formIsValid,onClick:e[3]||(e[3]=t=>this.$router.push({name:a.nextPage}))}," 下一步 ",8,D)])])])])}var S=a(4301),U=a(4827),q=a(6294);const z=(0,q.Z)(),R=(0,S.Q_)("coupon",{state:()=>({couponCode:"",couponList:[]}),actions:{async applyCoupon(){const t=this.couponCode,e=await(0,U.FC)({data:{code:t}});try{if(e.data.success){if(this.couponList.includes(t))return void(z.couponIsApplied=!0);this.couponList.push(t),this.couponCode=""}else z.couponIsValid=!1}catch(a){}}}});var Z=a(4677),Q={props:{nextPage:{type:String,required:!0},formIsValid:{type:Boolean,default:()=>!0}},computed:{errorMessage(){return this.couponIsValid?this.couponIsApplied?"已套用的優惠券":"":"無效的優惠券"},...(0,S.rn)(Z.x,["discount"]),...(0,S.Ah)(Z.x,["cart"]),...(0,S.Ah)(R,["couponCode","couponList"]),...(0,S.Ah)(q.Z,["couponIsApplied","couponIsValid"])},methods:{async addCoupon(){await this.applyCoupon(),await this.getCartList()},...(0,S.nv)(Z.x,["getCartList"]),...(0,S.nv)(R,["applyCoupon"])}},F=a(89);const G=(0,F.Z)(Q,[["render",$],["__scopeId","data-v-0f15ca72"]]);var J=G}}]);
//# sourceMappingURL=844.4b493c6b.js.map