import{a as h,o,b as n,w as x,f as S,g as i,e as s,P as F,I as p,d as k,r as I,A as E,s as _,v as B,h as w,i as C,j as u,k as L,x as c,l as v,y as T,z as V,q as f,t as b,_ as D}from"./index-57fa8b2e.js";const N=h({__name:"FavoritePageHeader",setup(e){return(a,r)=>(o(),n(S,null,{default:x(()=>[i(p,{to:{name:s(F).main},text:"Search",icon:"search",class:"search"},null,8,["to"]),i(p,{customTag:"div",text:"Favorites",icon:"heart",class:"like"})]),_:1}))}}),R=k("favorites",()=>{const e=I([]);return{loadFavorites:async r=>{try{const t=await E.getLikedPhotos(r);e.value=t.data}catch(t){console.error(t.response)}},list:e}}),H=e=>(T("data-v-094ad36d"),e=e(),V(),e),M={class:"page"},O=H(()=>c("header",{class:"favorite-header"},[c("h1",{class:"title"},"Favorites")],-1)),U={class:"container"},j=h({__name:"FavoritesPage",setup(e){const a=R(),{list:r}=_(a),t=B(),{username:l}=_(t),m=w(),{loading:y,error:d}=_(m),A=new AbortController;l.value&&a.loadFavorites(l.value),C(()=>A.abort());const P=u(()=>f(()=>import("./PhotoList-0c8a8691.js"),["assets/PhotoList-0c8a8691.js","assets/index-57fa8b2e.js","assets/index-a63f3a2c.css","assets/PhotoList-a09ae426.css"])),g=u(()=>f(()=>import("./AppMessage-fef0ea14.js"),["assets/AppMessage-fef0ea14.js","assets/index-57fa8b2e.js","assets/index-a63f3a2c.css","assets/AppMessage-84d8840f.css"]));return(q,z)=>(o(),L("div",null,[i(N),c("main",M,[O,c("div",U,[s(y)?(o(),n(b,{key:0})):s(d)?(o(),n(v(s(g)),{key:1,text:s(d),type:"error",offset:""},null,8,["text"])):(o(),n(v(s(P)),{key:2,list:s(r)},null,8,["list"]))])])]))}});const $=D(j,[["__scopeId","data-v-094ad36d"]]);export{$ as default};
