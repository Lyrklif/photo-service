import{a as c,o as r,j as l,e as s,B as _,t as n,D as m,q as i,s as h,u as o,L as f,f as y,I as v,c as g,E as k,i as x,_ as P,l as $,m as b}from"./index-30932035.js";import{u as p}from"./PhotoPage-8ea43afe.js";const S={class:"author"},q={class:"author__text"},B={class:"author__name"},L={class:"author__username"},C=c({__name:"PhotoAuthor",props:{name:{type:String,required:!0},username:{type:String,required:!0},image:{type:String,required:!0},imageLarge:{type:String,required:!0}},setup(e){return(a,t)=>(r(),l("div",S,[s(_,{alt:e.name,src:e.image,srcset:`${e.imageLarge} 2x`,class:"author__img"},null,8,["alt","src","srcset"]),n("div",q,[n("p",B,m(e.name),1),n("p",L,"@"+m(e.username),1)])]))}});const I=i(C,[["__scopeId","data-v-4b7e1e05"]]),A={class:"buttons"},N=c({__name:"PhotoButtons",props:{downloadName:{type:String,required:!0},downloadUrl:{type:String,required:!0},liked:{type:Boolean,default:!1}},setup(e){const a=p(),{isLiked:t}=h(a);return(d,u)=>(r(),l("div",A,[s(y,{class:"button like",liked:o(t),type:o(f).button,onClick:o(a).likePhoto},null,8,["liked","type","onClick"]),s(v,{class:"button download",icon:"download",text:"Downloand",download:e.downloadName,href:e.downloadUrl,customTag:"a",target:"_blank"},null,8,["download","href"])]))}});const D=i(N,[["__scopeId","data-v-b02d6be5"]]),T={class:"container header"},E={class:"visually-hidden"},U=c({__name:"PhotoHeader",props:{title:{type:String,required:!0},name:{type:String,required:!0},username:{type:String,required:!0},image:{type:String,required:!0},imageLarge:{type:String,required:!0},download:{type:String,required:!0},liked:{type:Boolean,required:!0}},setup(e){return(a,t)=>(r(),l("header",T,[n("h1",E,m(e.title),1),s(I,{name:e.name,username:e.username,image:e.image,imageLarge:e.imageLarge},null,8,["name","username","image","imageLarge"]),s(D,{class:"buttons",downloadName:e.title,downloadUrl:e.download,liked:e.liked},null,8,["downloadName","downloadUrl","liked"])]))}});const V=i(U,[["__scopeId","data-v-e2fcf666"]]),F=c({__name:"PhotoFull",props:{alt:{type:String,required:!0},src:{type:String,required:!0}},setup(e){return(a,t)=>(r(),g(_,{class:"image",alt:e.alt,src:`${e.src}&w=400&auto=compress,format`,srcset:`${e.src}&w=800&auto=compress,format 800w`,source:[{srcset:`${e.src}&w=1152&auto=compress,format 1152w, ${e.src}&w=576&auto=compress,format`,media:"(min-width: 576px)"},{srcset:`${e.src}&w=1536&auto=compress,format 1536w, ${e.src}&w=768&auto=compress,format`,media:"(min-width: 768px)"},{srcset:`${e.src}&w=2160&auto=compress,format 2160w, ${e.src}&w=1080&auto=compress,format`,media:"(min-width: 1080px)"},{srcset:`${e.src}&w=2560&auto=compress,format 2560w, ${e.src}&w=1280&auto=compress,format`,media:"(min-width: 1280px)"},{srcset:`${e.src}&w=2964&auto=compress,format 2964w, ${e.src}&w=1482&auto=compress,format`,media:"(min-width: 1920px)"}]},null,8,["alt","src","srcset","source"]))}});const H=i(F,[["__scopeId","data-v-d908a954"]]);function R(){return{device:k(()=>{const a=navigator.platform.toLowerCase(),t=/mac|win|linux/i.test(a),d=/tablet|ipad/i.test(a),u=/(android|webos|iphone|ipad|ipod|blackberry|windows phone)/.test(a);return{isDesktop:t,isTablet:d,isMobile:u}})}}const O={class:"container"},j=c({__name:"PhotoContend",setup(e){const a=p(),{photo:t,isLiked:d}=h(a),{device:u}=R(),w=x(()=>P(()=>import("./PhotoBackground-c5eaccf3.js"),["assets/PhotoBackground-c5eaccf3.js","assets/index-30932035.js","assets/index-3c6cfcca.css","assets/PhotoBackground-0de3d792.css"]));return(K,M)=>(r(),l("main",null,[s(V,{title:o(t).alt_description,name:o(t).user.name,username:o(t).user.username,image:o(t).user.profile_image.medium,imageLarge:o(t).user.profile_image.large,download:o(t).links.download,liked:o(d),class:"photo-header"},null,8,["title","name","username","image","imageLarge","download","liked"]),n("div",O,[s(H,{src:o(t).urls.raw,alt:o(t).alt_description},null,8,["src","alt"])]),o(u).isDesktop?(r(),g($(o(w)),{key:0,alt:o(t).alt_description,src:o(t).urls.raw},null,8,["alt","src"])):b("",!0)]))}});const J=i(j,[["__scopeId","data-v-de683c53"]]);export{J as default};
