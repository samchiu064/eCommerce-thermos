"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[891],{6294:function(t,e,a){var l=a(4301);e["Z"]=(0,l.Q_)("statusStore",{state:()=>({isLoading:!1,cartIsShown:!1,cartLoadingItem:"",cartDeletedItem:"",cartItemIsAdded:!1,cartItemIsOverlaid:!1,couponIsApplied:!1,couponIsValid:!1,orderIsValid:!1,apiRequestIsFailed:!1,apiErrorMessage:""})})},2891:function(t,e,a){a.r(e),a.d(e,{default:function(){return kt}});var l=a(3396),o=a(7139);const s={class:"text-end mt-3"},i={class:"table mt-4"},r=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{width:"120"},"分類"),(0,l._)("th",null,"產品名稱"),(0,l._)("th",{width:"120"},"原價"),(0,l._)("th",{width:"120"},"售價"),(0,l._)("th",{width:"100"},"是否啟用"),(0,l._)("th",{width:"200"},"編輯")])],-1),d={class:"text-right"},n={class:"text-right"},c={key:0,class:"text-success"},u={key:1,class:"text-muted"},p={class:"btn-group"},m=["onClick"],h=["onClick"];function b(t,e,a,b,_,g){const f=(0,l.up)("LoadingOverlay"),w=(0,l.up)("ThePagination"),y=(0,l.up)("DashboardModalProduct"),P=(0,l.up)("DashboardModalDelete");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(f,{active:_.isLoading},null,8,["active"]),(0,l._)("div",s,[(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=t=>g.openModal(!0))},"新增產品")]),(0,l._)("table",i,[r,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.products,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",null,(0,o.zw)(t.category),1),(0,l._)("td",null,(0,o.zw)(t.title),1),(0,l._)("td",d,(0,o.zw)(t.origin_price.toLocaleString("en-us")),1),(0,l._)("td",n,(0,o.zw)(t.price.toLocaleString("en-us")),1),(0,l._)("td",null,[t.is_enabled?((0,l.wg)(),(0,l.iD)("span",c,"啟用")):((0,l.wg)(),(0,l.iD)("span",u,"未啟用"))]),(0,l._)("td",null,[(0,l._)("div",p,[(0,l._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:e=>g.openModal(!1,t)}," 編輯 ",8,m),(0,l._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>g.openDeleteModal(t)}," 刪除 ",8,h)])])])))),128))])]),(0,l.Wm)(w,{pages:_.pagination,onEmitPage:g.getProducts},null,8,["pages","onEmitPage"]),(0,l.Wm)(y,{ref:"productModal",product:_.tempProduct,onUpdateProduct:g.updateProduct},null,8,["product","onUpdateProduct"]),(0,l.Wm)(P,{ref:"deleteModal",item:_.tempProduct,onDeleteItem:g.deleteProduct},null,8,["item","onDeleteItem"])],64)}var _=a(506),g=a(9242);const f={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},w={class:"modal-dialog modal-xl",role:"document"},y={class:"modal-content border-0"},P=(0,l._)("div",{class:"modal-header bg-dark text-white"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,l._)("span",null,"新增產品")]),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},M={class:"row"},k={class:"col-sm-4"},U={class:"mb-3"},I={for:"image",class:"form-label w-100"},x=(0,l.Uk)("輸入圖片網址 "),D={class:"mb-3"},L={for:"majorImage",class:"form-label w-100"},S=(0,l._)("p",null,"上傳主要圖片",-1),C=(0,l._)("i",{class:"fas fa-spinner fa-spin"},null,-1),j=["for"],V=(0,l._)("i",{class:"fas fa-spinner fa-spin"},null,-1),$=["id","onChange"],F={class:"col-sm-8"},Z={class:"mb-3"},z={for:"title",class:"form-label w-100"},E=(0,l.Uk)("標題 "),N={class:"row gx-2"},O={class:"mb-3 col-md-6"},W={for:"category",class:"form-label w-100"},q=(0,l.Uk)("分類 "),A={class:"mb-3 col-md-6"},H={for:"price",class:"form-label w-100"},R=(0,l.Uk)("單位 "),Y={class:"row gx-2"},K={class:"mb-3 col-md-6"},T={for:"origin_price",class:"form-label w-100"},G=(0,l.Uk)("原價 "),Q={class:"mb-3 col-md-6"},B={for:"price",class:"form-label w-100"},J=(0,l.Uk)("售價 "),X=(0,l._)("hr",null,null,-1),tt={class:"mb-3"},et={for:"description",class:"form-label w-100"},at=(0,l.Uk)("產品描述 "),lt={class:"mb-3"},ot={for:"content",class:"form-label w-100"},st=(0,l.Uk)("說明內容 "),it={class:"mb-3"},rt={class:"form-check"},dt={class:"form-check-label",for:"is_enabled"},nt=(0,l.Uk)(" 是否啟用 "),ct={class:"modal-footer"},ut=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function pt(t,e,a,s,i,r){return(0,l.wg)(),(0,l.iD)("div",f,[(0,l._)("div",w,[(0,l._)("div",y,[P,(0,l._)("div",v,[(0,l._)("div",M,[(0,l._)("div",k,[(0,l._)("div",U,[(0,l._)("label",I,[x,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=t=>i.tempProduct.imageUrl=t)},null,512),[[g.nr,i.tempProduct.imageUrl]])])]),(0,l._)("div",D,[(0,l._)("label",L,[S,C,(0,l._)("input",{type:"file",id:"majorImage",class:"form-control",onChange:e[1]||(e[1]=t=>r.uploadFile("major")),ref:"majorImageInput"},null,544)])]),((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(5,(t=>(0,l._)("div",{class:"mb-3",key:t},[(0,l._)("label",{for:`minorImage${t}`,class:"form-label w-100"},[(0,l.Uk)(" 上傳次要圖片 "+(0,o.zw)(t)+" ",1),V,(0,l._)("input",{type:"file",id:`minorImage${t}`,class:"form-control",onChange:e=>r.uploadFile("minor",t),ref_for:!0,ref:"minorImageInput"},null,40,$)],8,j)]))),64))]),(0,l._)("div",F,[(0,l._)("div",Z,[(0,l._)("label",z,[E,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[2]||(e[2]=t=>i.tempProduct.title=t)},null,512),[[g.nr,i.tempProduct.title]])])]),(0,l._)("div",N,[(0,l._)("div",O,[(0,l._)("label",W,[q,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[3]||(e[3]=t=>i.tempProduct.category=t)},null,512),[[g.nr,i.tempProduct.category]])])]),(0,l._)("div",A,[(0,l._)("label",H,[R,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[4]||(e[4]=t=>i.tempProduct.unit=t)},null,512),[[g.nr,i.tempProduct.unit]])])])]),(0,l._)("div",Y,[(0,l._)("div",K,[(0,l._)("label",T,[G,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[5]||(e[5]=t=>i.tempProduct.origin_price=t)},null,512),[[g.nr,i.tempProduct.origin_price]])])]),(0,l._)("div",Q,[(0,l._)("label",B,[J,(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[6]||(e[6]=t=>i.tempProduct.price=t)},null,512),[[g.nr,i.tempProduct.price]])])])]),X,(0,l._)("div",tt,[(0,l._)("label",et,[at,(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[7]||(e[7]=t=>i.tempProduct.description=t)},null,512),[[g.nr,i.tempProduct.description]])])]),(0,l._)("div",lt,[(0,l._)("label",ot,[st,(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[8]||(e[8]=t=>i.tempProduct.content=t)},null,512),[[g.nr,i.tempProduct.content]])])]),(0,l._)("div",it,[(0,l._)("div",rt,[(0,l._)("label",dt,[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[9]||(e[9]=t=>i.tempProduct.is_enabled=t)},null,512),[[g.e8,i.tempProduct.is_enabled]]),nt])])])])])]),(0,l._)("div",ct,[ut,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[10]||(e[10]=e=>t.$emit("update-product",i.tempProduct))}," 確認 ")])])])],512)}var mt=a(1339),ht=a(4301),bt=a(6294),_t={mixins:[mt.Z],props:{product:{type:Object,default:()=>{}}},data(){return{modal:{},tempProduct:{}}},computed:{...(0,ht.Ah)(bt.Z,["apiRequestIsFailed","apiErrorMessage"])},watch:{product(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[])}},methods:{async uploadFile(t,e){const a=e-1,l="major"===t?this.$refs.majorImageInput.files[0]:this.$refs.minorImageInput[a].files[0],o=new FormData;o.append("file-to-upload",l);try{const e=await(0,_.w9)(o);"major"===t?this.tempProduct.imageUrl=e.data.imageUrl:"minor"===t&&(this.tempProduct.imagesUrl[a]=e.data.imageUrl)}catch(s){this.apiRequestIsFailed=!0,this.apiErrorMessage=s}}}},gt=a(89);const ft=(0,gt.Z)(_t,[["render",pt]]);var wt=ft,yt=a(8198),Pt=a(3431),vt={components:{DashboardModalProduct:wt,DashboardModalDelete:yt.Z,ThePagination:Pt.Z},inject:["pushMessageState"],data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},methods:{async getProducts(t=1){this.isLoading=!0;try{const e=await(0,_.rG)(t);this.products=e.data.products,this.pagination=e.data.pagination,this.pushMessageState(e,"產品資料獲取")}catch(e){this.pushMessageState(e,"產品資料獲取")}this.isLoading=!1},openModal(t,e){this.tempProduct=t?{}:e,this.isNew=t,this.$refs.productModal.showModal()},openDeleteModal(t){this.tempProduct=t,this.$refs.deleteModal.showModal()},async updateProduct(t){if(this.isLoading=!0,this.tempProduct=t,this.isNew)try{const t=await(0,_.xO)({data:this.tempProduct});this.pushMessageState(t,"產品資料更新")}catch(e){this.pushMessageState(e,"產品資料更新")}if(!this.isNew)try{const e=await(0,_.Pw)({data:this.tempProduct},t.id);this.pushMessageState(e,"產品資料更新")}catch(e){this.pushMessageState(e,"產品資料更新")}this.isLoading=!1,this.$refs.productModal.hideModal(),this.getProducts()},async deleteProduct(t){this.isLoading=!0;try{const e=await(0,_.mP)(t.id);this.pushMessageState(e,"產品資料刪除")}catch(e){this.pushMessageState(e,"產品資料刪除")}this.isLoading=!1,this.$refs.deleteModal.hideModal(),this.getProducts()}},created(){this.getProducts()}};const Mt=(0,gt.Z)(vt,[["render",b]]);var kt=Mt}}]);
//# sourceMappingURL=891.cdfa9fd1.js.map