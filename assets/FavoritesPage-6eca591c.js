import{a as m,o,b as n,w as x,f as S,g as i,e as s,P as k,I as p,d as I,r as F,A as E,s as _,v as b,h as B,i as w,j as u,k as C,x as c,l as v,y as L,z as T,q as f,t as V,_ as D}from"./index-b99a53e8.js";const N=m({__name:"FavoritePageHeader",setup(e){return(a,r)=>(o(),n(S,null,{default:x(()=>[i(p,{to:{name:s(k).main},text:"Поиск",icon:"search",class:"search"},null,8,["to"]),i(p,{customTag:"div",text:"Избранное",icon:"heart",class:"like"})]),_:1}))}}),R=I("favorites",()=>{const e=F([]);return{loadFavorites:async r=>{try{const t=await E.getLikedPhotos(r);e.value=t.data}catch(t){console.error(t.response)}},list:e}}),H=e=>(L("data-v-330764b6"),e=e(),T(),e),M={class:"page"},O=H(()=>c("header",{class:"favorite-header"},[c("h1",{class:"title"},"Избранное")],-1)),U={class:"container"},j=m({__name:"FavoritesPage",setup(e){const a=R(),{list:r}=_(a),t=b(),{username:l}=_(t),h=B(),{loading:y,error:d}=_(h),A=new AbortController;l.value&&a.loadFavorites(l.value),w(()=>A.abort());const P=u(()=>f(()=>import("./PhotoList-5839c445.js"),["assets/PhotoList-5839c445.js","assets/index-b99a53e8.js","assets/index-fdbcf4cd.css","assets/PhotoList-cb6c0cfc.css"])),g=u(()=>f(()=>import("./AppMessage-ca521da8.js"),["assets/AppMessage-ca521da8.js","assets/index-b99a53e8.js","assets/index-fdbcf4cd.css","assets/AppMessage-84d8840f.css"]));return(q,z)=>(o(),C("div",null,[i(N),c("main",M,[O,c("div",U,[s(y)?(o(),n(V,{key:0})):s(d)?(o(),n(v(s(g)),{key:1,text:s(d),type:"error",offset:""},null,8,["text"])):(o(),n(v(s(P)),{key:2,list:s(r)},null,8,["list"]))])])]))}});const $=D(j,[["__scopeId","data-v-330764b6"]]);export{$ as default};
