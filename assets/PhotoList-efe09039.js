import{a as n,o as t,j as e,F as _,y as c,z as i,e as o,w as u,B as p,u as d,P as m,C as f,q as y}from"./index-d9b925e5.js";const w={class:"unstyled-list list"},h=n({__name:"PhotoList",props:{list:{type:Array,default:()=>[]}},setup(a){return(k,P)=>{const l=i("router-link");return t(),e("ul",w,[(t(!0),e(_,null,c(a.list,(s,r)=>(t(),e("li",{key:s.id,class:"list__item"},[o(l,{to:{name:d(m).photo,params:{id:s.id}},class:"list__link",style:f({"background-color":s.color})},{default:u(()=>[o(p,{alt:s.alt_description,src:`${s.urls.raw}&w=400&fm=webp&q=80&auto=compress`,srcset:`${s.urls.raw}&w=800&fm=webp&q=80&auto=compress 800w`,class:"list__img",lazy:!!r},null,8,["alt","src","srcset","lazy"])]),_:2},1032,["to","style"])]))),128))])}}});const g=y(h,[["__scopeId","data-v-55f97701"]]);export{g as default};
