import{r as d,I as n,i as u,f as b,u as m,b as i,j as e,k as f}from"./index.4fcf8288.js";function h(r){const[a,t]=d.exports.useState([]);return d.exports.useEffect(()=>n(u(r),s=>t(b(s.docs))),[r]),a}function p(){const{id:r}=m(),a=h(r);return i("ul",{className:"w-full h-full overflow-y-auto relative",children:[i("li",{className:"tableItem sticky top-0 left-0 bg-tiber text-white",children:[e("div",{children:"Pos"}),e("div",{children:"Name"}),e("div",{children:"Score"}),e("div",{children:"Date"})]}),a.map(({id:t,name:s,score:o,date:l},c)=>i("li",{className:"tableItem border-2 border-t-0 border-slate-600",children:[e("div",{children:c+1}),e("div",{children:s}),e("div",{children:f(o)}),e("div",{children:l==null?void 0:l.toDate().toLocaleDateString()})]},t))]})}export{p as default};