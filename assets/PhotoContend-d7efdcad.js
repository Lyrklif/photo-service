import{a as n,o as s,i as l,e as o,z as m,q as c,B as _,p as i,s as g,u as a,L as y,f,I as v,c as h,C as k,l as w}from"./index-5d19477a.js";import{u as p}from"./PhotoPage-5b9b2c52.js";const b={class:"author"},x={class:"author__text"},P={class:"author__name"},S={class:"author__username"},q=n({__name:"PhotoAuthor",props:{name:{type:String,required:!0},username:{type:String,required:!0},image:{type:String,required:!0},imageLarge:{type:String,required:!0}},setup(e){return(r,t)=>(s(),l("div",b,[o(m,{alt:e.name,src:e.image,srcset:`${e.imageLarge} 2x`,class:"author__img"},null,8,["alt","src","srcset"]),c("div",x,[c("p",P,_(e.name),1),c("p",S,"@"+_(e.username),1)])]))}});const L=i(q,[["__scopeId","data-v-4b7e1e05"]]),B={class:"buttons"},$=n({__name:"PhotoButtons",props:{downloadName:{type:String,required:!0},downloadUrl:{type:String,required:!0},liked:{type:Boolean,default:!1}},setup(e){const r=p(),{isLiked:t}=g(r);return(u,d)=>(s(),l("div",B,[o(f,{class:"button like",liked:a(t),type:a(y).button,onClick:a(r).likePhoto},null,8,["liked","type","onClick"]),o(v,{class:"button download",icon:"download",text:"Downloand",download:e.downloadName,href:e.downloadUrl,customTag:"a",target:"_blank"},null,8,["download","href"])]))}});const I=i($,[["__scopeId","data-v-b02d6be5"]]),C={class:"container header"},N={class:"visually-hidden"},A=n({__name:"PhotoHeader",props:{title:{type:String,required:!0},name:{type:String,required:!0},username:{type:String,required:!0},image:{type:String,required:!0},imageLarge:{type:String,required:!0},download:{type:String,required:!0},liked:{type:Boolean,required:!0}},setup(e){return(r,t)=>(s(),l("header",C,[c("h1",N,_(e.title),1),o(L,{name:e.name,username:e.username,image:e.image,imageLarge:e.imageLarge},null,8,["name","username","image","imageLarge"]),o(I,{class:"buttons",downloadName:e.title,downloadUrl:e.download,liked:e.liked},null,8,["downloadName","downloadUrl","liked"])]))}});const T=i(A,[["__scopeId","data-v-e2fcf666"]]),U=n({__name:"PhotoFull",props:{alt:{type:String,required:!0},src:{type:String,required:!0},srcMedium:{type:String,required:!0},srcLarge:{type:String,required:!0}},setup(e){return(r,t)=>(s(),h(m,{class:"image",alt:e.alt,src:e.src,srcset:`${e.srcMedium} 2x`,source:[{srcset:`${e.srcLarge} 2x, ${e.srcMedium}`,media:"(min-width: 768px)"}]},null,8,["alt","src","srcset","source"]))}});const D=i(U,[["__scopeId","data-v-19cc6fa6"]]),M={class:"bg-image-wp"},V=n({__name:"PhotoBackground",props:{alt:{type:String,required:!0},image:{type:String,required:!0},imageLarge:{type:String,required:!0}},setup(e){return(r,t)=>(s(),l("div",M,[o(m,{alt:e.alt,src:e.image,srcset:`${e.imageLarge} 2x`,class:"bg-image",lazy:""},null,8,["alt","src","srcset"])]))}});const F=i(V,[["__scopeId","data-v-9a62ff28"]]);function H(){return{device:k(()=>{const r=navigator.platform.toLowerCase(),t=/mac|win|linux/i.test(r),u=/tablet|ipad/i.test(r),d=/(android|webos|iphone|ipad|ipod|blackberry|windows phone)/.test(r);return{isDesktop:t,isTablet:u,isMobile:d}})}}const z={class:"container"},E=n({__name:"PhotoContend",setup(e){const r=p(),{photo:t,isLiked:u}=g(r),{device:d}=H();return(R,K)=>(s(),l("main",null,[o(T,{title:a(t).alt_description,name:a(t).user.name,username:a(t).user.username,image:a(t).user.profile_image.medium,imageLarge:a(t).user.profile_image.large,download:a(t).links.download,liked:a(u),class:"photo-header"},null,8,["title","name","username","image","imageLarge","download","liked"]),c("div",z,[o(D,{"src-large":a(t).urls.full,"src-medium":a(t).urls.regular,src:a(t).urls.small,alt:a(t).alt_description},null,8,["src-large","src-medium","src","alt"])]),a(d).isDesktop?(s(),h(F,{key:0,alt:a(t).alt_description,image:a(t).urls.regular,imageLarge:a(t).urls.full},null,8,["alt","image","imageLarge"])):w("",!0)]))}});const G=i(E,[["__scopeId","data-v-6533b3c6"]]);export{G as default};
