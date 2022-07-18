"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[277],{4827:function(t,e,a){a.d(e,{er:function(){return I},Wf:function(){return v},dr:function(){return E},ye:function(){return k},gJ:function(){return y},FC:function(){return f},Vh:function(){return w},sG:function(){return _}});var s=a(6265),l=a.n(s);const r=l().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),c=()=>r.get("/cart"),i=t=>r.post("/cart",t),o=(t,e)=>r.put(`/cart/${e}`,t),d=t=>r.delete(`/cart/${t}`),n=(l().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),l().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"})),u=t=>n.post("/coupon",t),p=l().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),m=t=>p.get(`/order/${t}`),b=t=>p.post("/order",t),g=l().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),h=()=>g.get("/products"),v=c,y=i,_=o,I=d,f=u,E=m,w=b,k=h},4677:function(t,e,a){a.d(e,{x:function(){return i}});var s=a(4827),l=a(4301),r=a(6294);const c=(0,r.Z)(),i=(0,l.Q_)("cart",{state:()=>({cart:{},itemQty:0}),getters:{discount(){return this.cart.total-this.cart.final_total}},actions:{async getCartList(){c.isLoading=!0;try{const t=await(0,s.Wf)();this.cart=t.data.data}catch(t){c.apiRequestIsFailed=!0,c.apiErrorMessage=t}c.isLoading=!1},async addCartItem(t,e){c.cartLoadingItem=t,c.cartItemIsAdded=!1;try{await(0,s.gJ)({data:{product_id:t,qty:e}}),c.cartLoadingItem="",c.cartItemIsAdded=!0}catch(a){c.cartItemIsAdded=!1,c.apiRequestIsFailed=!0,c.apiErrorMessage=a}this.getCartList()},async updateCartItem({productId:t,qty:e},a){c.cartLoadingItem=t;try{const l=e<=0?1:e;await(0,s.sG)({data:{product_id:t,qty:l}},a),this.getCartList()}catch(l){c.apiRequestIsFailed=!0,c.apiErrorMessage=l}c.cartLoadingItem=""},async deleteCartItem(t){c.cartDeletedItem=t;try{await(0,s.er)(t),this.getCartList()}catch(e){c.apiRequestIsFailed=!0,c.apiErrorMessage=e}this.cancelOverlay()},overlayCartItem(t){c.cartItemIsOverlaid=!0,c.cartDeletedItem=t},cancelOverlay(){c.cartItemIsOverlaid=!1,c.cartDeletedItem=""}}})},4238:function(t,e,a){a.d(e,{a:function(){return i}});var s=a(4827),l=a(4301),r=a(6294);const c=(0,r.Z)(),i=(0,l.Q_)("product",{state:()=>({origin:[]}),getters:{thermos:t=>t.origin.filter((t=>"thermos"===t.category)).map((t=>{const e=t.title.slice(t.title.indexOf("-")+2,t.length),a={"胡克綠":"classic-green","灰玫紅":"classic-red","灰丁寧藍":"classic-blue"},s=a[e]??"unassigned";return{...t,chtColor:e,engColor:s}})).sort(((t,e)=>e.num-t.num)),upcoming:t=>t.origin.filter((t=>"upcoming"===t.category)).map((t=>{const e=t.title.slice(t.title.indexOf("-")+2,t.length),a={"繽紛色彩":"colorful"},s=a[e]??"unassigned";return{...t,chtColor:e,engColor:s}})).sort(((t,e)=>e.num-t.num))},actions:{async getProduct(){try{const t=await(0,s.ye)();this.origin=t.data.products}catch(t){c.apiRequestIsFailed=!0,c.apiErrorMessage=t}}}})},6294:function(t,e,a){var s=a(4301);e["Z"]=(0,s.Q_)("statusStore",{state:()=>({isLoading:!1,cartIsShown:!1,cartLoadingItem:"",cartDeletedItem:"",cartItemIsAdded:!1,cartItemIsOverlaid:!1,couponIsApplied:!1,couponIsValid:!1,orderIsValid:!1,apiRequestIsFailed:!1,apiErrorMessage:""})})},5922:function(t,e,a){a.d(e,{Z:function(){return b}});var s=a(3396);const l=["disabled"],r={for:"qty",class:"w-25 align-middle"},c=["disabled","value"],i=["disabled"];function o(t,e,a,o,d,n){return(0,s.wg)(),(0,s.iD)(s.HY,null,[a.hasOperators?((0,s.wg)(),(0,s.iD)("button",{key:0,type:"button",class:"btn bi bi-dash fs-3 text-black-50",disabled:t.cartDeletedItem===a.productId||1===a.qty,onClick:e[0]||(e[0]=e=>t.$emit("updateItem",{qty:a.qty-1,productId:a.productId}))},null,8,l)):(0,s.kq)("",!0),(0,s._)("label",r,[(0,s._)("input",{type:"number",class:"rounded form-control text-center w-100 text-black-50 bg-transparent px-2",id:"qty",min:"1",disabled:t.cartDeletedItem===a.productId||!a.hasOperators&&!a.editable,value:a.qty,onChange:e[1]||(e[1]=e=>t.$emit("update:value",Number(e.target.value)))},null,40,c)]),a.hasOperators?((0,s.wg)(),(0,s.iD)("button",{key:1,type:"button",class:"btn bi bi-plus fs-3 text-black-50",disabled:t.cartDeletedItem===a.productId,onClick:e[2]||(e[2]=e=>t.$emit("updateItem",{qty:a.qty+1,productId:a.productId}))},null,8,i)):(0,s.kq)("",!0)],64)}var d=a(6294),n=a(4301),u={props:{hasOperators:{type:Boolean,default:!0},qty:{type:Number,default:1},productId:{type:String,default:"defaultId"},editable:{type:Boolean,default:!0}},emits:["updateItem","update:value"],computed:{...(0,n.rn)(d.Z,["cartDeletedItem"])}},p=a(89);const m=(0,p.Z)(u,[["render",o],["__scopeId","data-v-45372ad7"]]);var b=m},2277:function(t,e,a){a.r(e),a.d(e,{default:function(){return Gt}});var s=a(3396),l=a(7139),r=a(9242);const c=t=>((0,s.dD)("data-v-af14e4c4"),t=t(),(0,s.Cn)(),t),i={class:"bg-light"},o={class:"container p-3 p-md-5 mt-3"},d={class:"row row-cols-1 row-cols-md-2 mb-2"},n={class:"col d-flex flex-column flex-xl-row"},u={class:"d-flex flex-row flex-xl-column justify-content-center justify-content-xl-start order-2 order-xl-1 mt-2 mt-xl-0"},p={class:"img-thumbnail d-flex justify-content-center align-items-center"},m=["src"],b={class:"img-thumbnail d-flex justify-content-center align-items-center"},g=["src"],h={class:"img-thumbnail d-flex justify-content-center align-items-center"},v=["src"],y={class:"text-center d-flex align-items-center justify-content-center flex-grow-1 order-1 order-xl-2"},_=["src","alt"],I={class:"col"},f={class:"text-center text-md-start m-auto mx-md-0"},E={class:"mt-3 mt-md-0"},w=c((()=>(0,s._)("h3",{style:{display:"none"}},"價格",-1))),k={class:"fs-3 fw-bold"},B={class:"mt-3 mb-4"},x=c((()=>(0,s._)("h3",{class:"fs-6 fw-bold"},"顏色",-1))),C={class:"nav"},P={class:"mt-1"},U=c((()=>(0,s._)("div",{class:"mt-3 mb-4"},[(0,s._)("h3",{class:"fs-6 fw-bold"},"配送方式"),(0,s._)("label",{for:"home-delivery",class:"ps-3"},[(0,s._)("input",{type:"radio",name:"homeDelivery",id:"home-delivery",checked:""}),(0,s.Uk)(" 宅配配送 ")])],-1))),A={class:"mt-3"},D=c((()=>(0,s._)("h3",{class:"fs-6 fw-bold"},"數量",-1))),q=c((()=>(0,s._)("span",{class:"align-middle"},"庫存充足",-1))),F={class:"mt-4 mb-5 text-center text-md-start"},L=["disabled"],T={class:"d-inline-block position-relative ms-4 w-45"},R=["disabled"],$={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},S=c((()=>(0,s._)("span",{class:"visually-hidden"},"Loading...",-1))),W=[S],O={key:1,class:"bi bi-cart-dash text-white me-1"},Z=(0,s.Uk)(" 加入購物車 "),H=c((()=>(0,s._)("i",{class:"bi bi-check"},null,-1))),j=(0,s.Uk)("商品成功加入購物車"),M=[H,j],z={class:"bg-white"},Y={class:"container p-3 p-md-5"},N={class:"row row-cols-1"},Q=c((()=>(0,s._)("span",{class:"link-classic-green"},"商品詳情",-1))),G=c((()=>(0,s._)("dl",null,[(0,s._)("dt",null,"產品規格"),(0,s._)("dd",null,[(0,s._)("ul",null,[(0,s._)("li",null,"容量(cc)：480"),(0,s._)("li",null,"長Ｘ寬Ｘ高(cm)：6.6x7.2x21.8"),(0,s._)("li",null,"重量(kg)：0.19"),(0,s._)("li",null,"保溫效力(24小時)：68oc以上"),(0,s._)("li",null,"保冷效力(24小時)：8oc以下"),(0,s._)("li",null,"外蓋/本體材質：PP/不鏽鋼SUS304")])])],-1))),V=c((()=>(0,s._)("span",{class:"link-classic-green"},"運送資訊",-1))),J=c((()=>(0,s._)("dl",null,[(0,s._)("dt",null,"寄送時間"),(0,s._)("dd",null,"宅配配送全台灣24h到貨；超商取貨全台灣72h到貨。全年無休，週末假日照常出貨。"),(0,s._)("dt",null,"運送方式"),(0,s._)("dd",null,[(0,s.Uk)(" 透過宅配送達。除網頁另有特別標示外，均為常溫配送。"),(0,s._)("br"),(0,s.Uk)(" 消費者訂購之商品若經配送兩次無法送達，再經本公司以電話與Email均無法聯繫逾三天者，本公司將取消該筆訂單，並且全額退款。 ")]),(0,s._)("dt",null,"運送範圍"),(0,s._)("dd",null," 限台灣本島與離島地區註，部分離島地區包括連江馬祖、綠島、蘭嶼、琉球鄉…等貨件，將送至到岸船公司碼頭，需請收貨人自行至碼頭取貨。注意！收件地址請勿為郵政信箱。 ")],-1))),K=c((()=>(0,s._)("span",{class:"link-classic-green"},"退款政策",-1))),X=c((()=>(0,s._)("dl",null,[(0,s._)("dt",null,"退款須知"),(0,s._)("dd",null,[(0,s.Uk)(" 消費者可以依照消費者保護法的規定，享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，請留意，您所退回的商品必須回復原狀（須回復至商品到貨時的原始狀態） 並且保持完整包裝（包括商品本體、配件、贈品、保證書、原廠包裝及所有附隨文件或資料的完整性），切勿缺漏任何配件或損毀原廠外盒。"),(0,s._)("br"),(0,s.Uk)(" 若因您要求退貨或換貨、或因本公司無法接受您全部或部分之訂單、或因契約解除或失其效力，而需為您辦理退款事宜時，您同意本公司得代您處理發票或折讓單等相關法令所要 求之單據，以利本公司為您辦理退款。"),(0,s._)("br"),(0,s.Uk)(" 本公司收到您所提出的申請後，若經確認無誤，將依消費者保護法之相關規定，返還您已支付之對價（含信用卡交易），退款日當天會再發送E-mail通知函給您。 ")])],-1))),tt={class:"row"};function et(t,e,a,c,S,H){const j=(0,s.up)("router-link"),et=(0,s.up)("StoreProductInput"),at=(0,s.up)("StoreTabsProductDetail"),st=(0,s.up)("StoreProductCard");return(0,s.wg)(),(0,s.iD)("main",null,[(0,s._)("section",i,[(0,s._)("div",o,[(0,s._)("div",d,[(0,s._)("div",n,[(0,s._)("div",u,[(0,s._)("div",p,[(0,s._)("button",{type:"button",class:(0,l.C_)(["btn btn-link text-decoration-none text-reset w-100 h-100 p-0 m-0",{"outline-selected":S.displayImageUrl===S.tempProduct.imageUrl}]),onClick:e[0]||(e[0]=t=>H.switchDisplayImage(S.tempProduct.imageUrl))},[((0,s.wg)(),(0,s.iD)("img",{class:"mw-100 h-100 p-3",src:S.tempProduct.imageUrl,key:S.tempProduct.id,alt:"保溫瓶全貌圖"},null,8,m))],2)]),(0,s._)("div",b,[(0,s._)("button",{type:"button",class:(0,l.C_)(["btn btn-link text-decoration-none text-reset w-100 h-100 p-0 m-0",{"outline-selected":S.displayImageUrl===S.tempProduct.imagesUrl[3]}]),onClick:e[1]||(e[1]=t=>H.switchDisplayImage(S.tempProduct.imagesUrl[3]))},[S.dataReady?((0,s.wg)(),(0,s.iD)("img",{class:"mw-100 h-100 p-3",src:S.tempProduct.imagesUrl[3],key:S.tempProduct.id,alt:"保溫瓶瓶蓋細節圖"},null,8,g)):(0,s.kq)("",!0)],2)]),(0,s._)("div",h,[(0,s._)("button",{type:"button",class:(0,l.C_)(["btn btn-link text-decoration-none text-reset w-100 h-100 p-0 m-0",{"outline-selected":S.displayImageUrl===S.tempProduct.imagesUrl[4]}]),onClick:e[2]||(e[2]=t=>H.switchDisplayImage(S.tempProduct.imagesUrl[4]))},[S.dataReady?((0,s.wg)(),(0,s.iD)("img",{class:"mw-100 h-100 p-3",src:S.tempProduct.imagesUrl[4],key:S.tempProduct.id,alt:"保溫瓶底部細節圖"},null,8,v)):(0,s.kq)("",!0)],2)])]),(0,s._)("div",y,[(0,s.Wm)(r.uT,null,{default:(0,s.w5)((()=>[S.dataReady?((0,s.wg)(),(0,s.iD)("img",{src:S.displayImageUrl,key:S.tempProduct.id,alt:`${S.tempProduct.title}圖片`,class:"img-box me-0"},null,8,_)):(0,s.kq)("",!0)])),_:1})])]),(0,s._)("div",I,[(0,s._)("div",f,[(0,s._)("h2",E,(0,l.zw)(S.tempProduct.title),1),w,(0,s._)("span",k,"NT $"+(0,l.zw)(S.tempProduct.price?.toLocaleString("en-us")),1),(0,s._)("p",B,(0,l.zw)(S.tempProduct.description),1)]),(0,s._)("div",null,[x,(0,s._)("ul",C,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.thermos,((t,e)=>((0,s.wg)(),(0,s.iD)("li",{key:e,class:"nav-item m-3 mb-1 text-center"},[(0,s.Wm)(j,{to:`/thermos/classic/details/${t.engColor}`,class:(0,l.C_)(["btn bg-classic-green p-3 rounded-circle d-inline-block",[{"outline-selected":S.tempProduct.engColor===t.engColor},`bg-${t.engColor}`]]),onClick:(0,r.iM)((e=>H.switchProduct(t)),["prevent"])},null,8,["to","class","onClick"]),(0,s._)("p",P,(0,l.zw)(t.chtColor),1)])))),128))])]),U,(0,s._)("div",A,[D,(0,s.Wm)(et,{qty:S.tempProduct.qty,onUpdateItem:H.updateItem,"onUpdate:value":e[3]||(e[3]=t=>S.tempProduct.qty=t)},null,8,["qty","onUpdateItem"]),q]),(0,s._)("div",F,[(0,s._)("button",{type:"button",class:"btn btn-outline-secondary rounded-pill w-45 py-2",disabled:t.cartLoadingItem===S.tempProduct.id,onClick:e[4]||(e[4]=t=>H.purchaseItem(S.tempProduct.id,S.tempProduct.qty))}," 立即購買 ",8,L),(0,s._)("div",T,[(0,s._)("button",{type:"button",class:"btn btn-dark rounded-pill w-100 py-2",disabled:t.cartLoadingItem===S.tempProduct.id,onClick:e[5]||(e[5]=e=>t.addCartItem(S.tempProduct.id,S.tempProduct.qty))},[t.cartLoadingItem===S.tempProduct.id?((0,s.wg)(),(0,s.iD)("div",$,W)):((0,s.wg)(),(0,s.iD)("i",O)),Z],8,R),(0,s._)("span",{class:(0,l.C_)(["text-success w-100 position-absolute top-100 start-50 translate-middle text-center",{"cart-message--success":t.cartItemIsAdded,invisible:!t.cartItemIsAdded}])},M,2)])])])])])]),(0,s._)("section",z,[(0,s._)("div",Y,[(0,s._)("div",N,[(0,s.Wm)(at,null,{titleFirstTab:(0,s.w5)((()=>[Q])),firstTab:(0,s.w5)((()=>[G])),titleSecondTab:(0,s.w5)((()=>[V])),secondTab:(0,s.w5)((()=>[J])),titleThirdTab:(0,s.w5)((()=>[K])),thirdTab:(0,s.w5)((()=>[X])),_:1})]),(0,s._)("div",tt,[(0,s.Wm)(st,{products:t.upcoming},null,8,["products"])])])])])}var at=a(4301),st=a(4238),lt=a(4677),rt=a(6294);const ct={class:"col"},it={class:"nav nav-tabs",id:"nav-tab",role:"tablist"},ot={type:"button",class:"nav-link active",id:"nav-details-tab","data-bs-toggle":"tab","data-bs-target":"#nav-home",role:"tab","aria-controls":"nav-home","aria-selected":"true"},dt=(0,s.Uk)("商品詳情"),nt={type:"button",class:"nav-link",id:"nav-delivery-tab","data-bs-toggle":"tab","data-bs-target":"#nav-profile",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},ut=(0,s.Uk)("運送資訊"),pt={type:"button",class:"nav-link",id:"nav-refund-tab","data-bs-toggle":"tab","data-bs-target":"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},mt=(0,s.Uk)("退款政策"),bt={class:"col tab-content",id:"nav-tabContent"},gt={class:"tab-pane fade show active border border-top-0 p-3",id:"nav-home",role:"tabpanel","aria-labelledby":"nav-details-tab"},ht=(0,s.Uk)("更新中"),vt={class:"tab-pane fade border border-top-0 p-3",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-delivery-tab"},yt=(0,s.Uk)("更新中"),_t={class:"tab-pane fade border border-top-0 p-3",id:"nav-contact",role:"tabpanel","aria-labelledby":"nav-refund-tab"},It=(0,s._)("dl",null,[(0,s._)("dt",null,"退款須知"),(0,s._)("dd",null,[(0,s.Uk)(" 消費者可以依照消費者保護法的規定，享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，請留意，您所退回的商品必須回復原狀（須回復至商品到貨時的原始狀態） 並且保持完整包裝（包括商品本體、配件、贈品、保證書、原廠包裝及所有附隨文件或資料的完整性），切勿缺漏任何配件或損毀原廠外盒。"),(0,s._)("br"),(0,s.Uk)(" 若因您要求退貨或換貨、或因本公司無法接受您全部或部分之訂單、或因契約解除或失其效力，而需為您辦理退款事宜時，您同意本公司得代您處理發票或折讓單等相關法令所要 求之單據，以利本公司為您辦理退款。"),(0,s._)("br"),(0,s.Uk)(" 本公司收到您所提出的申請後，若經確認無誤，將依消費者保護法之相關規定，返還您已支付之對價（含信用卡交易），退款日當天會再發送E-mail通知函給您。 ")])],-1);function ft(t,e,a,l,r,c){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",ct,[(0,s._)("div",it,[(0,s._)("button",ot,[(0,s.WI)(t.$slots,"titleFirstTab",{},(()=>[dt]))]),(0,s._)("button",nt,[(0,s.WI)(t.$slots,"titleSecondTab",{},(()=>[ut]))]),(0,s._)("button",pt,[(0,s.WI)(t.$slots,"titleThirdTab",{},(()=>[mt]))])])]),(0,s._)("div",bt,[(0,s._)("div",gt,[(0,s.WI)(t.$slots,"firstTab",{},(()=>[ht]))]),(0,s._)("div",vt,[(0,s.WI)(t.$slots,"secondTab",{},(()=>[yt]))]),(0,s._)("div",_t,[(0,s.WI)(t.$slots,"thirdTab",{},(()=>[It]))])])],64)}var Et={},wt=a(89);const kt=(0,wt.Z)(Et,[["render",ft]]);var Bt=kt,xt=a(5922),Ct=a(6377),Pt=a(5318),Ut=a(9217);const At=t=>((0,s.dD)("data-v-cc671420"),t=t(),(0,s.Cn)(),t),Dt={class:"row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-3 mx-auto"},qt=At((()=>(0,s._)("span",{class:"col-12 col-md-12 col-lg-12"}," 即將上架 ",-1))),Ft={class:"card pe-auto"},Lt={class:"position-relative"},Tt=["src"],Rt=(0,s.uE)('<div class="overlay w-100 h-100 position-absolute top-0 start-0" data-v-cc671420><div class="calendar-box position-absolute top-50 start-50 translate-middle" data-v-cc671420><p class="text-center my-1" data-v-cc671420>上架時通知我</p><div class="calendar-links d-flex" data-v-cc671420><a href="https://calendar.google.com/calendar/render?action=TEMPLATE&amp;dates=20220729%2F20220730&amp;details=%E9%97%9C%E6%B3%A8%E6%88%91%E5%80%91%3A%20https%3A%2F%2Fsamchiu064.github.io%2FCHIRP-thermos%2F%23%2F&amp;text=CHIRP%20%E9%B3%A5%E7%89%8C%E4%BF%9D%E6%BA%AB%E7%93%B6%E6%96%B0%E5%93%81%E4%B8%8A%E6%9E%B6%20-%20%E6%96%B0%E4%B8%80%E4%BB%A3%E4%BF%9D%E5%86%B7%E7%93%B6%20-%20%E7%B9%BD%E7%B4%9B%E8%89%B2%E5%BD%A9" title="將活動加入到我的行事曆" class="calendar-link m-3 mt-2" target="_blank" data-v-cc671420><span class="visually-hidden" data-v-cc671420>加入到我的 Google 行事曆</span><img src="'+Ct+'" alt="google 行事曆連結" data-v-cc671420></a><a href="https://outlook.live.com/calendar/0/deeplink/compose?allday=true&amp;body=%E9%97%9C%E6%B3%A8%E6%88%91%E5%80%91%3A%20https%3A%2F%2Fsamchiu064.github.io%2FCHIRP-thermos%2F%23%2F&amp;enddt=2022-07-30T16%3A00%3A00%2B00%3A00&amp;path=%2Fcalendar%2Faction%2Fcompose&amp;rru=addevent&amp;startdt=2022-07-29T16%3A00%3A00%2B00%3A00&amp;subject=CHIRP%20%E9%B3%A5%E7%89%8C%E4%BF%9D%E6%BA%AB%E7%93%B6%E6%96%B0%E5%93%81%E4%B8%8A%E6%9E%B6%20-%20%E6%96%B0%E4%B8%80%E4%BB%A3%E4%BF%9D%E5%86%B7%E7%93%B6%20-%20%E7%B9%BD%E7%B4%9B%E8%89%B2%E5%BD%A9" title="將活動加入到我的行事曆" class="calendar-link m-3 mt-2" target="_blank" data-v-cc671420><span class="visually-hidden" data-v-cc671420>加入到我的 Outlook 行事曆</span><img src="'+Pt+'" alt="outlook 行事曆連結" data-v-cc671420></a><a href="https://calendar.yahoo.com/?desc=%E9%97%9C%E6%B3%A8%E6%88%91%E5%80%91%3A%20https%3A%2F%2Fsamchiu064.github.io%2FCHIRP-thermos%2F%23%2F&amp;dur=allday&amp;et=20220730&amp;st=20220729&amp;title=CHIRP%20%E9%B3%A5%E7%89%8C%E4%BF%9D%E6%BA%AB%E7%93%B6%E6%96%B0%E5%93%81%E4%B8%8A%E6%9E%B6%20-%20%E6%96%B0%E4%B8%80%E4%BB%A3%E4%BF%9D%E5%86%B7%E7%93%B6%20-%20%E7%B9%BD%E7%B4%9B%E8%89%B2%E5%BD%A9&amp;v=60" title="將活動加入到我的行事曆" class="calendar-link m-3 mt-2" target="_blank" data-v-cc671420><span class="visually-hidden" data-v-cc671420>加入到我的 Yahoo 行事曆</span><img src="'+Ut+'" alt="yahoo 行事曆連結" data-v-cc671420></a></div></div></div>',1),$t={class:"card-body"},St=At((()=>(0,s._)("p",{class:"text-center mb-1"},[(0,s._)("i",{class:"bi bi-hand-index fs-5 click-hint"})],-1))),Wt={class:"card-sub-title text-center fs-7 fw-normal"},Ot={class:"card-title text-center fs-6"},Zt=At((()=>(0,s._)("hr",null,null,-1))),Ht={class:"card-text text-center fs-6"};function jt(t,e,a,r,c,i){return(0,s.wg)(),(0,s.iD)("section",Dt,[qt,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.products,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"col",key:t+e},[(0,s._)("div",Ft,[(0,s._)("div",Lt,[(0,s._)("img",{src:t.imageUrl,class:"img-box rounded w-100",alt:"商品圖片"},null,8,Tt),Rt]),(0,s._)("div",$t,[St,(0,s._)("h5",Wt,(0,l.zw)(t.chtColor),1),(0,s._)("h4",Ot,(0,l.zw)(t.title),1),Zt,(0,s._)("p",Ht,"NT$ "+(0,l.zw)(t.price.toLocaleString("en-us")),1)])])])))),128))])}var Mt={props:{products:{type:Array,default:()=>[]}}};const zt=(0,wt.Z)(Mt,[["render",jt],["__scopeId","data-v-cc671420"]]);var Yt=zt,Nt={components:{StoreProductInput:xt.Z,StoreTabsProductDetail:Bt,StoreProductCard:Yt},data(){return{tempProduct:{imagesUrl:[]},displayImageUrl:"",dataReady:!1}},computed:{...(0,at.rn)(st.a,["thermos","upcoming"]),...(0,at.rn)(rt.Z,["cartLoadingItem"]),...(0,at.Ah)(rt.Z,["cartItemIsAdded"])},methods:{switchProduct(t){this.tempProduct={...t,qty:1},this.displayImageUrl=t.imageUrl},switchDisplayImage(t){this.displayImageUrl=t},updateItem({qty:t}){const e=t<=0?1:t;this.tempProduct.qty=e},async purchaseItem(t,e){await this.addCartItem(t,e),this.cartItemIsAdded=!1,this.$router.push({name:"cart"})},async renderProduct(){await this.getProduct();const{color:t}=this.$route.params;this.tempProduct="classic-red"===t?{...this.thermos[1],qty:1}:"classic-blue"===t?{...this.thermos[2],qty:1}:{...this.thermos[0],qty:1},this.displayImageUrl=this.tempProduct.imageUrl},...(0,at.nv)(st.a,["getProduct"]),...(0,at.nv)(lt.x,["addCartItem"])},async mounted(){this.$Progress.start(),await this.renderProduct(),this.dataReady=!0,this.$Progress.finish()}};const Qt=(0,wt.Z)(Nt,[["render",et],["__scopeId","data-v-af14e4c4"]]);var Gt=Qt},6377:function(t,e,a){t.exports=a.p+"img/google.9725924c.svg"},5318:function(t,e,a){t.exports=a.p+"img/outlook.5a897eeb.svg"},9217:function(t,e,a){t.exports=a.p+"img/yahoo.f7dadc57.svg"}}]);
//# sourceMappingURL=277.2c252927.js.map