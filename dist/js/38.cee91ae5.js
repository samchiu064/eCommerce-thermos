"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[38],{4827:function(t,e,s){s.d(e,{er:function(){return x},Wf:function(){return v},dr:function(){return y},ye:function(){return C},gJ:function(){return b},FC:function(){return w},Vh:function(){return k},sG:function(){return _}});var n=s(6265),i=s.n(n);const a=i().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),l=()=>a.get("/cart"),c=t=>a.post("/cart",t),o=(t,e)=>a.put(`/cart/${e}`,t),r=t=>a.delete(`/cart/${t}`),d=(i().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),i().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"})),u=t=>d.post("/coupon",t),p=i().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),m=t=>p.get(`/order/${t}`),h=t=>p.post("/order",t),g=i().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/"}),f=()=>g.get("/products"),v=l,b=c,_=o,x=r,w=u,y=m,k=h,C=f},4238:function(t,e,s){s.d(e,{a:function(){return a}});var n=s(4827),i=s(4301);const a=(0,i.Q_)("product",{state:()=>({origin:[]}),getters:{thermos:t=>t.origin.filter((t=>"thermos"===t.category)).map((t=>{const e=t.title.slice(t.title.indexOf("-")+2,t.length),s={"胡克綠":"classic-green","灰玫紅":"classic-red","灰丁寧藍":"classic-blue"},n=s[e]??"unassigned";return{...t,chtColor:e,engColor:n}})).sort(((t,e)=>e.num-t.num))},actions:{async getProduct(){await(0,n.ye)().then((t=>{t.data.success&&(this.origin=t.data.products)})).catch((t=>{}))}}})},6038:function(t,e,s){s.r(e),s.d(e,{default:function(){return Y}});var n=s(3396),i=s(7139);const a=t=>((0,n.dD)("data-v-7dd15e98"),t=t(),(0,n.Cn)(),t),l={class:"col mt-17 mt-lg-9 text-classic-black flex-column d-none d-md-flex ps-0"},c={class:"ms-auto ps-2"},o={class:"lh-sm d-flex"},r={class:"visually-hidden"},d=a((()=>(0,n._)("h2",{class:"m-0"},[(0,n._)("span",{class:"d-block"},"將外型與實用性"),(0,n._)("span",{class:"d-block"},"合而為一的"),(0,n._)("span",{class:"d-block"},"「流線型瓶身」設計")],-1))),u=(0,n.uE)('<p class="mt-3" data-v-7dd15e98><span class="d-block" data-v-7dd15e98>全瓶身採用３０４可水洗不鏽鋼製成</span><span class="d-block" data-v-7dd15e98>堅固耐用，瓶內特殊的防沾塗層</span><span class="d-block" data-v-7dd15e98>讓您透過簡易的清洗，達到去除污垢的效果。</span></p><span class="text-muted" style="max-width:90%;" data-v-7dd15e98><span class="d-inline d-lg-block" data-v-7dd15e98>※此保溫瓶全零件皆可沖洗，可以清水沖洗後晾乾</span><span class="d-inline d-lg-block" data-v-7dd15e98>或以海綿沾中性清潔劑清洗保養。</span></span>',2),p=["src","alt"],m={class:"col-12 col-md-3 text-center vh-100"},h={class:"figure d-flex flex-column justify-content-center h-100"},g=["src","alt"],f={class:"figure-caption"},v=(0,n.Uk)(" 查看更多 "),b={class:"col d-none d-md-flex flex-column align-items-end mt-8 text-classic-black pe-2"},_=["src","alt"],x={class:"ms-auto",dir:"rtl"},w={class:"mt-19 mt-lg-12 lh-sm d-flex"},y=a((()=>(0,n._)("span",{class:"visually-hidden"},"胡克綠保溫瓶",-1))),k=[y],C=a((()=>(0,n._)("h2",{class:"m-0"},[(0,n._)("span",{class:"d-block"},"一體式上蓋"),(0,n._)("span",{class:"d-block"},"極佳的保冷保溫效力")],-1))),H=(0,n.uE)('<p class="mt-3" data-v-7dd15e98><span class="d-inline d-lg-block" data-v-7dd15e98>一體式上蓋設計可簡易拆卸，讓您從此不再有</span><span class="d-inline d-lg-block" data-v-7dd15e98>墊圈老化的困擾。</span></p><span class="d-inline d-lg-block text-muted" data-v-7dd15e98>經實測此款保溫瓶經過 24 小時後仍保留 70% 的熱度※</span><span class="d-inline d-lg-block text-muted" data-v-7dd15e98></span>',3),$={class:"figure me-4 mb-4 mt-auto"},U=a((()=>(0,n._)("figcaption",{class:"figure-caption mb-3 d-inline-block align-bottom"}," ※最長可保溫24小時 ",-1))),E=["src","alt"];function j(t,e,s,a,y,j){const L=(0,n.up)("router-link"),V=(0,n.up)("StoreThermosClassicNavbar");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("main",{class:"container-fluid position-sticky top-0 bg--thermos",style:(0,i.j5)({height:`${y.innerHeight}px`})},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.thermos,((e,s)=>((0,n.wg)(),(0,n.iD)("section",{key:s,class:"row overflow-hidden position-absolute top-0 w-100 bg-light",style:(0,i.j5)([{"z-index":"5"},{height:`${this.currentHeights[s]}px`,"z-index":t.thermos.length-s}])},[(0,n._)("article",l,[(0,n._)("div",c,[(0,n._)("div",o,[(0,n._)("span",{class:(0,i.C_)(["badge px-1 me-2",`bg-${e.engColor}`])},[(0,n._)("span",r,(0,i.zw)(e.title),1)],2),d]),u]),(0,n._)("img",{src:e.imagesUrl[1],alt:e.title+"瓶身圖片",style:{"max-width":"20.8vw"},class:"img-fluid mt-auto align-self-start"},null,8,p)]),(0,n._)("article",m,[(0,n._)("figure",h,[(0,n._)("img",{src:e.imageUrl,alt:e.title+"產品圖片",class:"figure-img main-image img-fluid align-self-center mt-5 mt-md-6"},null,8,g),(0,n._)("figcaption",f,[(0,n.Wm)(L,{to:`/thermos/classic/details/${e.engColor}`,class:(0,i.C_)(["btn rounded-pill py-2 px-4 mt-3",`btn-outline-${e.engColor}`])},{default:(0,n.w5)((()=>[v])),_:2},1032,["to","class"])])])]),(0,n._)("article",b,[(0,n._)("img",{src:e.imagesUrl[0],alt:e.title+"瓶蓋圖片",style:{"max-width":"12vw"},class:"img-fluid mx-auto"},null,8,_),(0,n._)("div",x,[(0,n._)("div",w,[(0,n._)("span",{class:(0,i.C_)(["badge py-4 px-1 ms-2",`bg-${e.engColor}`])},k,2),C]),H]),(0,n._)("figure",$,[U,(0,n._)("img",{src:e.imagesUrl[2],alt:e.title+"保溫效果圖片",style:{"max-width":"10.5vw"},class:"figure-img--mobile rounded"},null,8,E)])])],4)))),128))],4),(0,n._)("section",{class:"p-0",style:(0,i.j5)({height:`${y.innerHeight}px`})},null,4),(0,n._)("section",{class:"p-0",style:(0,i.j5)({height:`${y.innerHeight}px`})},null,4),(0,n.Wm)(V,{products:t.thermos},null,8,["products"])],64)}var L=s(4238),V=s(4301),D=s(9242);const T={class:"nav pe-2 flex-column position-fixed top-50 end-0 translate-middle-y text-end fs-8"},M=["onMousedown"];function P(t,e,s,a,l,c){return(0,n.wg)(),(0,n.iD)("ul",T,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.products,((t,e)=>((0,n.wg)(),(0,n.iD)("li",{key:e,class:(0,i.C_)(["nav-item",`text-${t.engColor}`])},[(0,n._)("a",{href:"javascript:",class:"d-flex justify-content-end align-items-center",onMousedown:(0,D.iM)((s=>c.switchItem(e,t.engColor)),["prevent"])},[(0,n._)("span",{class:(0,i.C_)(["label",{active:c.isActive===e}])},(0,i.zw)(t.chtColor),3),(0,n._)("span",{class:(0,i.C_)(["bullet",`bg-${t.engColor}`])},null,2)],40,M)],2)))),128))])}var R={props:{products:{type:Array,required:!0,show:!1}},data(){return{innerHeight:window.innerHeight,topVisible:document.documentElement.scrollTop,activeColor:"classic-green"}},computed:{isActive(){return this.topVisible>=this.innerHeight?2:this.topVisible>0?1:0}},methods:{switchItem(t,e){const{innerHeight:s}=window;document.documentElement.scrollTop=.97*s*t,this.activeColor=e}},mounted(){document.addEventListener("scroll",(()=>{this.topVisible=document.documentElement.scrollTop}))}},S=s(89);const z=(0,S.Z)(R,[["render",P],["__scopeId","data-v-5642f89e"]]);var I=z,A={components:{StoreThermosClassicNavbar:I},data(){return{currentHeights:[],topVisible:0,innerHeight:window.innerHeight}},computed:{...(0,V.rn)(L.a,["thermos"])},methods:{revealSection(){this.thermos.forEach(((t,e)=>{this.currentHeights[e]=this.calcCurrentHeight(e)})),this.topVisible=document.documentElement.scrollTop},calcCurrentHeight(t){return Math.min(this.innerHeight,Math.max(0,this.innerHeight-this.topVisible+this.innerHeight*t))},...(0,V.nv)(L.a,["getProduct"])},async created(){this.$Progress.start(),await this.getProduct(),this.$Progress.finish()},mounted(){document.addEventListener("scroll",this.revealSection)},beforeUnmount(){document.removeEventListener("scroll",this.revealSection)}};const W=(0,S.Z)(A,[["render",j],["__scopeId","data-v-7dd15e98"]]);var Y=W}}]);
//# sourceMappingURL=38.cee91ae5.js.map