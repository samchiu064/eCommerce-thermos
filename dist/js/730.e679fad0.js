"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[730],{4827:function(e,t,s){s.d(t,{er:function(){return x},Wf:function(){return v},dr:function(){return y},ye:function(){return C},gJ:function(){return b},FC:function(){return w},Vh:function(){return k},sG:function(){return _}});var n=s(6265),i=s.n(n);const o=i().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),a=()=>o.get("/cart"),l=e=>o.post("/cart",e),c=(e,t)=>o.put(`/cart/${t}`,e),r=e=>o.delete(`/cart/${e}`),d=(i().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),i().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"})),u=e=>d.post("/coupon",e),p=i().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),m=e=>p.get(`/order/${e}`),h=e=>p.post("/order",e),g=i().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),f=()=>g.get("/products"),v=a,b=l,_=c,x=r,w=u,y=m,k=h,C=f},4238:function(e,t,s){s.d(t,{a:function(){return l}});var n=s(4827),i=s(4301),o=s(6294);const a=(0,o.Z)(),l=(0,i.Q_)("product",{state:()=>({origin:[]}),getters:{thermos:e=>e.origin.filter((e=>"thermos"===e.category)).map((e=>{const t=e.title.slice(e.title.indexOf("-")+2,e.length),s={"胡克綠":"classic-green","灰玫紅":"classic-red","灰丁寧藍":"classic-blue"},n=s[t]??"unassigned";return{...e,chtColor:t,engColor:n}})).sort(((e,t)=>t.num-e.num)),upcoming:e=>e.origin.filter((e=>"upcoming"===e.category)).map((e=>{const t=e.title.slice(e.title.indexOf("-")+2,e.length),s={"繽紛色彩":"colorful"},n=s[t]??"unassigned";return{...e,chtColor:t,engColor:n}})).sort(((e,t)=>t.num-e.num))},actions:{async getProduct(){try{const e=await(0,n.ye)();this.origin=e.data.products}catch(e){a.apiRequestIsFailed=!0,a.apiErrorMessage=e}}}})},6294:function(e,t,s){var n=s(4301);t["Z"]=(0,n.Q_)("statusStore",{state:()=>({isLoading:!1,cartIsShown:!1,cartLoadingItem:"",cartDeletedItem:"",cartItemIsAdded:!1,cartItemIsOverlaid:!1,couponIsApplied:!1,couponIsValid:!1,orderIsValid:!1,apiRequestIsFailed:!1,apiErrorMessage:""})})},7730:function(e,t,s){s.r(t),s.d(t,{default:function(){return Z}});var n=s(3396),i=s(7139);const o=e=>((0,n.dD)("data-v-1c187238"),e=e(),(0,n.Cn)(),e),a=["id"],l={class:"col text-classic-black flex-column d-none d-md-flex ps-0",style:{"margin-top":"9rem"}},c={class:"ms-auto ps-2"},r={class:"lh-sm d-flex"},d={class:"visually-hidden"},u=o((()=>(0,n._)("h2",{class:"m-0"},[(0,n._)("span",{class:"d-block"},"將外型與實用性"),(0,n._)("span",{class:"d-block"},"合而為一的"),(0,n._)("span",{class:"d-block"},"「流線型瓶身」設計")],-1))),p=(0,n.uE)('<p class="mt-3" data-v-1c187238><span class="d-block" data-v-1c187238>全瓶身採用３０４可水洗不鏽鋼製成</span><span class="d-block" data-v-1c187238>堅固耐用，瓶內特殊的防沾塗層</span><span class="d-block" data-v-1c187238>讓您透過簡易的清洗，達到去除污垢的效果。</span></p><span class="text-muted" style="max-width:90%;" data-v-1c187238><span class="d-none d-xl-block" data-v-1c187238>※此保溫瓶全零件皆可沖洗，可以清水沖洗後晾乾</span><span class="d-none d-xl-block" data-v-1c187238>或以海綿沾中性清潔劑清洗保養。</span></span>',2),m=["src","alt"],h={class:"col-12 col-md-3 text-center vh-100"},g={class:"figure d-flex flex-column justify-content-center h-100"},f=["src","alt"],v={class:"figure-caption"},b=(0,n.Uk)(" 查看更多 "),_={class:"col d-none d-md-flex flex-column justify-content-between text-classic-black pe-2",style:{"margin-top":"10rem"}},x=["src","alt"],w={class:"mt-auto mb-3"},y={class:"lh-sm d-flex"},k=o((()=>(0,n._)("h2",{class:"m-0 ms-3"},[(0,n._)("span",{class:"d-block text-end"},"一體式上蓋"),(0,n._)("span",{class:"d-block"},"極佳的保冷保溫效力")],-1))),C=o((()=>(0,n._)("span",{class:"visually-hidden"},"胡克綠保溫瓶",-1))),H=[C],I=o((()=>(0,n._)("p",{class:"mt-3 me-3 d-inline-block"},[(0,n._)("span",{class:"d-inline d-lg-block"},"一體式上蓋設計可簡易拆卸，讓您從此不再有"),(0,n._)("span",{class:"d-inline d-lg-block text-end"},"墊圈老化的困擾")],-1))),$=o((()=>(0,n._)("span",{class:"d-none d-xl-block text-muted text-offset"},"※經實測此款保溫瓶經過 24 小時後仍保留70% 的熱度",-1))),E={class:"figure align-self-end"},U=o((()=>(0,n._)("figcaption",{class:"figure-caption mb-3 d-inline-block align-bottom"}," ※最長可保溫24小時 ",-1))),L=["src","alt"];function V(e,t,s,o,C,V){const j=(0,n.up)("router-link"),D=(0,n.up)("StoreThermosClassicNavbar");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("main",{class:"container-fluid position-sticky top-0 bg--thermos",style:(0,i.j5)({height:`${C.innerHeight}px`})},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.thermos,((t,s)=>((0,n.wg)(),(0,n.iD)("section",{key:s,id:t.engColor,class:"row overflow-hidden position-absolute top-0 w-100 bg-light",style:(0,i.j5)([{"z-index":"5"},{height:`${this.currentHeights[s]}px`,"z-index":e.thermos.length-s}])},[(0,n._)("article",l,[(0,n._)("div",c,[(0,n._)("div",r,[(0,n._)("span",{class:(0,i.C_)(["badge px-1 me-2",`bg-${t.engColor}`])},[(0,n._)("span",d,(0,i.zw)(t.title),1)],2),u]),p]),(0,n._)("img",{src:t.imagesUrl[1],alt:`${t.title}瓶身圖片`,style:{"max-width":"20.8vw"},class:"img-fluid mt-auto align-self-start"},null,8,m)]),(0,n._)("article",h,[(0,n._)("figure",g,[(0,n._)("img",{src:t.imageUrl,alt:`${t.title}產品圖片`,class:"figure-img main-image img-fluid align-self-center mt-6"},null,8,f),(0,n._)("figcaption",v,[(0,n.Wm)(j,{to:`/thermos/classic/details/${t.engColor}`,class:(0,i.C_)(["btn rounded-pill py-2 px-4 mt-3",`btn-outline-${t.engColor}`])},{default:(0,n.w5)((()=>[b])),_:2},1032,["to","class"])])])]),(0,n._)("article",_,[(0,n._)("img",{src:t.imagesUrl[0],alt:`${t.title}瓶蓋圖片`,style:{"max-width":"12vw"},class:"img-fluid mx-auto flex-shrink-0"},null,8,x),(0,n._)("div",w,[(0,n._)("div",y,[k,(0,n._)("span",{class:(0,i.C_)(["badge py-4 px-1 ms-2",`bg-${t.engColor}`])},H,2)]),I,$]),(0,n._)("figure",E,[U,(0,n._)("img",{src:t.imagesUrl[2],alt:`${t.title}保溫效果圖片`,style:{"max-width":"10.5vw"},class:"figure-img--mobile rounded"},null,8,L)])])],12,a)))),128))],4),(0,n._)("section",{class:"p-0",style:(0,i.j5)({height:`${C.innerHeight}px`})},null,4),(0,n._)("section",{class:"p-0",style:(0,i.j5)({height:`${C.innerHeight}px`})},null,4),(0,n.Wm)(D,{products:e.thermos},null,8,["products"])],64)}var j=s(4238),D=s(4301),M=s(9242);const T=["onClick"],R={key:0};function S(e,t,s,o,a,l){return(0,n.wg)(),(0,n.iD)("ul",{class:"nav flex-column align-items-end position-fixed top-50 end-0 translate-middle-y border border-1 rounded rounded-2 me-2",onMouseenter:t[0]||(t[0]=e=>a.navIsHovered=!0),onFocus:t[1]||(t[1]=e=>a.navIsHovered=!0),onMouseleave:t[2]||(t[2]=(0,M.iM)((e=>a.navIsHovered=!1),["self"])),onFocusout:t[3]||(t[3]=(0,M.iM)((e=>a.navIsHovered=!1),["self"]))},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.products,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t,class:(0,i.C_)(["nav-item pe-1 py-lg-0",`text-${e.engColor}`])},[(0,n._)("button",{type:"button",class:"btn btn-link text-decoration-none text-reset d-flex justify-content-end align-items-center",onClick:(0,M.iM)((s=>l.switchItem(t,e.engColor)),["prevent"])},[(0,n._)("span",{class:(0,i.C_)(["label fs-md-7",{active:l.isActive===t}])},[(0,n.Wm)(M.uT,{name:"fade"},{default:(0,n.w5)((()=>[a.navIsHovered?((0,n.wg)(),(0,n.iD)("span",R,(0,i.zw)(e.chtColor),1)):(0,n.kq)("",!0)])),_:2},1024)],2),(0,n._)("span",{class:(0,i.C_)(["bullet",`bg-${e.engColor}`])},null,2)],8,T)],2)))),128))],32)}var A={props:{products:{type:Array,required:!0,show:!1}},data(){return{innerHeight:window.innerHeight,topVisible:document.documentElement.scrollTop,activeColor:"classic-green",navIsHovered:!1}},computed:{isActive(){return this.topVisible>=this.innerHeight?2:this.topVisible>0?1:0},itemIndex(){return"classic-green"===this.$route.params.color?0:"classic-red"===this.$route.params.color?1:"classic-blue"===this.$route.params.color?2:0}},methods:{switchItem(e,t){const{innerHeight:s}=window;document.documentElement.scrollTop=.97*s*e,this.activeColor=t},toggleNav(){this.navIsHover=!0}},mounted(){document.addEventListener("scroll",(()=>{this.topVisible=document.documentElement.scrollTop})),setTimeout((()=>{this.switchItem(this.itemIndex,this.$route.params.color)}),100)}},F=s(89);const P=(0,F.Z)(A,[["render",S],["__scopeId","data-v-ec02e74a"]]);var q=P,z={components:{StoreThermosClassicNavbar:q},data(){return{currentHeights:[],topVisible:0,innerHeight:window.innerHeight}},computed:{...(0,D.rn)(j.a,["thermos"])},methods:{revealSection(){this.thermos.forEach(((e,t)=>{this.currentHeights[t]=this.calcCurrentHeight(t)})),this.topVisible=document.documentElement.scrollTop},calcCurrentHeight(e){return Math.min(this.innerHeight,Math.max(0,this.innerHeight-this.topVisible+this.innerHeight*e))},...(0,D.nv)(j.a,["getProduct"])},async created(){this.$Progress.start(),await this.getProduct(),this.$Progress.finish()},mounted(){document.addEventListener("scroll",this.revealSection)},beforeUnmount(){document.removeEventListener("scroll",this.revealSection)}};const W=(0,F.Z)(z,[["render",V],["__scopeId","data-v-1c187238"]]);var Z=W}}]);
//# sourceMappingURL=730.e679fad0.js.map