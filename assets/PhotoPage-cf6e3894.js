import{d as g,r as u,A as i,a as k,s as d,o as r,c as l,w as x,b as C,e as p,u as o,P as b,I as E,L as I,f as L,g as S,h as B,i as P,j as T,k as h,l as D,m as w,_ as f,n as N,p as O}from"./index-f0e8152d.js";const m=g("photo",()=>{const a=u(null),e=u(!1),t=u(!1);return{photo:a,isLiked:e,likeProcess:t,loadPhotoData:async s=>{try{e.value=!1,a.value=null;const n=await i.getPhoto(s);a.value=n.data,e.value=n.data.liked_by_user}catch(n){console.error(n.response)}},likePhoto:async()=>{if(a.value)try{t.value=!0,await(e.value?i.unlikePhoto:i.likePhoto)(a.value.id),e.value=!e.value}catch(s){console.error(s.response)}finally{t.value=!1}}}}),R=k({__name:"PhotoPageHeader",setup(a){const e=m(),{isLiked:t,likeProcess:c}=d(e);return(_,s)=>(r(),l(C,null,{default:x(()=>[p(E,{to:{name:o(b).main},text:"Поиск",icon:"search",class:"search"},null,8,["to"]),p(L,{type:o(I).button,text:"Избранное",class:"like",liked:o(t),onClick:o(e).likePhoto},null,8,["type","liked","onClick"])]),_:1}))}}),V=k({__name:"PhotoPage",setup(a){const e=w(),t=m(),c=S(),{loading:_,error:s}=d(c),{photo:n}=d(t),v=new AbortController;t.loadPhotoData(`${e.params.id}`),B(()=>v.abort());const y=P(()=>f(()=>import("./PhotoDetails-fc06e37a.js"),["assets/PhotoDetails-fc06e37a.js","assets/index-f0e8152d.js","assets/index-d73771a2.css","assets/PhotoDetails-4fb739e8.css"])),A=P(()=>f(()=>import("./AppMessage-140db0df.js"),["assets/AppMessage-140db0df.js","assets/index-f0e8152d.js","assets/index-d73771a2.css","assets/AppMessage-84d8840f.css"]));return(M,$)=>(r(),T("div",null,[p(R),o(_)&&!o(n)?(r(),l(N,{key:0})):o(s)?(r(),l(h(o(A)),{key:1,text:o(s),type:"error",offset:""},null,8,["text"])):o(n)?(r(),l(h(o(y)),{key:2})):D("",!0)]))}});const j=O(V,[["__scopeId","data-v-283d218f"]]),U=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{U as P,m as u};
