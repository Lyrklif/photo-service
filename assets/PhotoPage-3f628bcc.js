import{d as m,r as _,A as i,a as P,s as d,o as r,c as l,w as v,b as y,e as p,u as o,P as A,I as g,L as b,f as x,g as C,h as S,i as B,j as I,k as L,l as E,m as T,n as w,_ as D,p as N,q as O}from"./index-93606d8a.js";const h=m("photo",()=>{const a=_(null),e=_(!1),t=_(!1);return{photo:a,isLiked:e,likeProcess:t,loadPhotoData:async s=>{try{e.value=!1,a.value=null;const n=await i.getPhoto(s);a.value=n.data,e.value=n.data.liked_by_user}catch(n){console.error(n.response)}},likePhoto:async()=>{if(a.value)try{t.value=!0,await(e.value?i.unlikePhoto:i.likePhoto)(a.value.id),e.value=!e.value}catch(s){console.error(s.response)}finally{t.value=!1}}}}),R=P({__name:"PhotoPageHeader",setup(a){const e=h(),{isLiked:t,likeProcess:c}=d(e);return(u,s)=>(r(),l(y,null,{default:v(()=>[p(g,{to:{name:o(A).main},text:"Поиск",icon:"search",class:"search"},null,8,["to"]),p(x,{type:o(b).button,text:"Избранное",class:"like",liked:o(t),onClick:o(e).likePhoto},null,8,["type","liked","onClick"])]),_:1}))}}),V=P({__name:"PhotoPage",setup(a){const e=w(),t=h(),c=C(),{loading:u,error:s}=d(c),{photo:n}=d(t),f=new AbortController;t.loadPhotoData(`${e.params.id}`),S(()=>f.abort());const k=B(()=>D(()=>import("./PhotoContend-09ebe6c9.js"),["assets/PhotoContend-09ebe6c9.js","assets/index-93606d8a.js","assets/index-3c6cfcca.css","assets/PhotoContend-6a032638.css"]));return(M,$)=>(r(),I("div",null,[p(R),o(u)&&!o(n)?(r(),l(N,{key:0})):o(s)?(r(),l(L,{key:1,text:o(s),type:"error",offset:""},null,8,["text"])):o(n)?(r(),l(E(o(k)),{key:2})):T("",!0)]))}});const j=O(V,[["__scopeId","data-v-c01b0d18"]]),U=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{U as P,h as u};