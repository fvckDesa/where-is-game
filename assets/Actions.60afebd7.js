import{_ as c,r as i,$ as l,j as t,Z as u,d as r,a0 as f,F as d,L as m}from"./index.24d213bf.js";const h="/where-is-game/assets/email-illustration.a44e6dcb.svg";function g(e){switch(e){case"verifyEmail":return"email verification";default:throw new Error(`Action ${e} not found`)}}function x(e,s){switch(e){case"verifyEmail":return s?"Your Email is successfully verified":"Your Email is not verified";default:throw new Error(`Action ${e} not found`)}}function p(e){switch(e){case"verifyEmail":return h;default:throw new Error(`Action ${e} not found`)}}function v(){const[e]=c(),[s,a]=i.exports.useState(),[o,n]=i.exports.useState(!0);return i.exports.useEffect(()=>{e.get("mode")==="verifyEmail"&&l(e.get("oobCode")).then(()=>a(!0)).catch(()=>a(!1)).finally(()=>n(!1))},[]),t(u,{title:g(e.get("mode")),children:r("div",{className:"flex flex-col justify-center items-center gap-4",children:[t("img",{className:"w-48 h-48",src:p(e.get("mode")),alt:"illustration"}),o?t(f,{size:40,lineWeight:5,speed:2,color:"black"}):r(d,{children:[r("span",{className:"font-semibold text-lg text-center",children:[x(e.get("mode"),s),t("br",{}),!s&&"The code has expired"]}),t(m,{to:"/",className:"flex justify-center items-center gap-2 w-32 p-2 rounded-lg font-semibold bg-tiber-500 text-white cursor-pointer hover:bg-tiber-600",replace:!0,children:"Back Home"})]})]})})}export{v as default};