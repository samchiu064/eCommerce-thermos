"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[643],{506:function(t,e,s){s.d(e,{D_:function(){return j},LW:function(){return L},mP:function(){return q},lJ:function(){return y},vT:function(){return U},rG:function(){return R},Ff:function(){return $},xO:function(){return T},w9:function(){return C},BF:function(){return A},Nd:function(){return z},Fn:function(){return P},P5:function(){return F},Pw:function(){return W}});var c=s(6265),r=s.n(c);const i=r().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/admin/"});if(document.cookie){const t=document.cookie.split("; ").find((t=>t.startsWith("hexToken="))).split("=")[1];i.interceptors.request.use((e=>(e.headers.Authorization=t,e)),(t=>Promise.reject(t)))}const o=t=>i.get(`/coupons?page=${t}`),n=t=>i.post("/coupon",t),a=(t,e)=>i.put(`/coupon/${e}`,t),d=t=>i.delete(`/coupon/${t}`),u=r().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/admin/"});if(document.cookie){const t=document.cookie.split("; ").find((t=>t.startsWith("hexToken="))).split("=")[1];u.interceptors.request.use((e=>(e.headers.Authorization=t,e)),(t=>Promise.reject(t)))}const p=t=>u.get(`/orders?page=${t}`),h=(t,e)=>u.put(`/order/${e}`,t),l=t=>u.delete(`/order/${t}`),f=r().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/admin/"});if(document.cookie){const t=document.cookie.split("; ").find((t=>t.startsWith("hexToken="))).split("=")[1];f.interceptors.request.use((e=>(e.headers.Authorization=t,e)),(t=>Promise.reject(t)))}const v=t=>f.get(`/products?page=${t}`),m=t=>f.post("/product",t),k=(t,e)=>f.put(`/product/${e}`,t),x=t=>f.delete(`/product/${t}`);var g=s(2271);const b=r().create({baseURL:"https://vue3-course-api.hexschool.io/api/samchiu064-api/admin/"});if(document.cookie){const t=document.cookie.split("; ").find((t=>t.startsWith("hexToken="))).split("=")[1];b.interceptors.request.use((e=>(e.headers.Authorization=t,e)),(t=>Promise.reject(t)))}const w=t=>b.post("/upload",t),y=o,$=n,P=a,j=d,U=p,F=h,L=l,R=v,T=m,W=k,q=x,z=g.U6,A=g.Fd,C=w},2271:function(t,e,s){s.d(e,{wu:function(){return o},U6:function(){return n},Fd:function(){return a}});var c=s(6265),r=s.n(c);const i=r().create({baseURL:"https://vue3-course-api.hexschool.io/"});if(document.cookie){const t=document.cookie.split("; ").find((t=>t.startsWith("hexToken="))).split("=")[1];i.interceptors.request.use((e=>(e.headers.Authorization=t,e)),(t=>Promise.reject(t)))}const o=t=>i.post("/admin/signin",t),n=()=>i.post("/logout"),a=()=>i.post("/api/user/check")},643:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var c=s(3396);const r={class:"mt-6"},i=(0,c.uE)('<h1 class="fw-regular text-center fs-4"> 歡迎來到CHIRP鳥牌後臺管理系統，請點選上方導覽列或查看下方頁面說明 。 </h1><div class="card-group justify-content-center mt-4"><div class="card text-dark bg-light" style="max-width:18rem;"><div class="card-header">產品</div><div class="card-body"><h5 class="card-title">新增/編輯/刪除產品</h5><p class="card-text"> 商品標題、分類、單位、原價、售價、產品描述、說明內容及產品圖片的新增、編輯及刪除。 </p></div></div><div class="card text-dark bg-light" style="max-width:18rem;"><div class="card-header">訂單</div><div class="card-body"><h5 class="card-title">編輯訂單狀態/刪除訂單</h5><p class="card-text">訂單付款狀態的編輯及個別訂單的刪除。</p></div></div><div class="card text-dark bg-light" style="max-width:18rem;"><div class="card-header">優惠券</div><div class="card-body"><h5 class="card-title">新增/編輯/刪除優惠券</h5><p class="card-text"> 優惠券名稱、折扣百分比、到期日、折扣碼、是否啟用的新增、編輯及刪除。 </p></div></div><div class="card text-dark bg-light" style="max-width:18rem;"><div class="card-header">登入、登出</div><div class="card-body"><h5 class="card-title">管理員登入/登出</h5><p class="card-text">帳號密碼登入及登出功能，需登入後才可進入產品、訂單、優惠券頁面。</p></div></div></div>',2),o=[i];function n(t,e,s,i,n,a){return(0,c.wg)(),(0,c.iD)("div",r,o)}var a=s(506),d={created(){(0,a.BF)().then((t=>{t.data.success||this.$router.push("/login")})).catch((t=>{}))}},u=s(89);const p=(0,u.Z)(d,[["render",n]]);var h=p}}]);
//# sourceMappingURL=643.67b98f3d.js.map