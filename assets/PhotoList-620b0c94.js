import{a as _,o as t,j as e,F as n,y as c,z as i,e as a,w as u,B as p,u as d,P as f,q as m}from"./index-1d494fde.js";const y={class:"unstyled-list list"},h=_({__name:"PhotoList",props:{list:{type:Array,default:()=>[]}},setup(l){return(k,x)=>{const o=i("router-link");return t(),e("ul",y,[(t(!0),e(n,null,c(l.list,(s,r)=>(t(),e("li",{key:s.id,class:"list__item"},[a(o,{to:{name:d(f).photo,params:{id:s.id}},class:"list__link"},{default:u(()=>[a(p,{alt:s.alt_description,src:s.urls.small,srcset:`${s.urls.regular} 2x`,class:"list__img",lazy:!!r},null,8,["alt","src","srcset","lazy"])]),_:2},1032,["to"])]))),128))])}}});const g=m(h,[["__scopeId","data-v-2cbfd678"]]);export{g as default};