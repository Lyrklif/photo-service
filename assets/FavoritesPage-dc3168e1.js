import{a as u,o,c as r,w as y,b as P,e as c,u as t,P as I,I as g,L as k,f as x,d as S,r as B,A as E,g as F,s as i,h as L,i as l,j as b,q as n,k as p,t as T,v as w,_ as d,n as C,p as N}from"./index-f0e8152d.js";const V=u({__name:"FavoritePageHeader",setup(e){return(a,s)=>(o(),r(P,null,{default:y(()=>[c(g,{to:{name:t(I).main},text:"Поиск",icon:"search",class:"search"},null,8,["to"]),c(x,{type:t(k).static,text:"Избранное",class:"like"},null,8,["type"])]),_:1}))}}),R=S("favorites",()=>{const e=B([]);return{loadFavorites:async()=>{try{const s=await E.getLikedPhotos();e.value=s.data}catch(s){console.error(s.response)}},list:e}}),D=e=>(T("data-v-7eb2988c"),e=e(),w(),e),O={class:"page"},H=D(()=>n("header",{class:"favorite-header"},[n("h1",{class:"title"},"Избранное")],-1)),M={class:"container"},U=u({__name:"FavoritesPage",setup(e){const a=R(),s=F(),{loading:v,error:_}=i(s),{list:f}=i(a),h=new AbortController;a.loadFavorites(),L(()=>h.abort());const m=l(()=>d(()=>import("./PhotoList-280353d7.js"),["assets/PhotoList-280353d7.js","assets/index-f0e8152d.js","assets/index-d73771a2.css","assets/PhotoList-cb6c0cfc.css"])),A=l(()=>d(()=>import("./AppMessage-140db0df.js"),["assets/AppMessage-140db0df.js","assets/index-f0e8152d.js","assets/index-d73771a2.css","assets/AppMessage-84d8840f.css"]));return(j,q)=>(o(),b("div",null,[c(V),n("main",O,[H,n("div",M,[t(v)?(o(),r(C,{key:0})):t(_)?(o(),r(p(t(A)),{key:1,text:t(_),type:"error",offset:""},null,8,["text"])):(o(),r(p(t(m)),{key:2,list:t(f)},null,8,["list"]))])])]))}});const K=N(U,[["__scopeId","data-v-7eb2988c"]]);export{K as default};
