function mT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function gT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var C={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Io=Symbol.for("react.element"),yT=Symbol.for("react.portal"),vT=Symbol.for("react.fragment"),wT=Symbol.for("react.strict_mode"),_T=Symbol.for("react.profiler"),ET=Symbol.for("react.provider"),TT=Symbol.for("react.context"),ST=Symbol.for("react.forward_ref"),kT=Symbol.for("react.suspense"),IT=Symbol.for("react.memo"),CT=Symbol.for("react.lazy"),am=Symbol.iterator;function RT(t){return t===null||typeof t!="object"?null:(t=am&&t[am]||t["@@iterator"],typeof t=="function"?t:null)}var Xy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yy=Object.assign,Jy={};function qi(t,e,n){this.props=t,this.context=e,this.refs=Jy,this.updater=n||Xy}qi.prototype.isReactComponent={};qi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zy(){}Zy.prototype=qi.prototype;function Od(t,e,n){this.props=t,this.context=e,this.refs=Jy,this.updater=n||Xy}var Ld=Od.prototype=new Zy;Ld.constructor=Od;Yy(Ld,qi.prototype);Ld.isPureReactComponent=!0;var lm=Array.isArray,ev=Object.prototype.hasOwnProperty,bd={current:null},tv={key:!0,ref:!0,__self:!0,__source:!0};function nv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ev.call(e,r)&&!tv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Io,type:t,key:s,ref:o,props:i,_owner:bd.current}}function xT(t,e){return{$$typeof:Io,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===Io}function NT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var um=/\/+/g;function oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NT(""+t.key):e.toString(36)}function Na(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Io:case yT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+oc(o,0):r,lm(i)?(n="",t!=null&&(n=t.replace(um,"$&/")+"/"),Na(i,e,n,"",function(u){return u})):i!=null&&(Ud(i)&&(i=xT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(um,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",lm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+oc(s,a);o+=Na(s,e,n,l,i)}else if(l=RT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+oc(s,a++),o+=Na(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function na(t,e,n){if(t==null)return t;var r=[],i=0;return Na(t,r,"","",function(s){return e.call(n,s,i++)}),r}function AT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rt={current:null},Aa={transition:null},DT={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:Aa,ReactCurrentOwner:bd};K.Children={map:na,forEach:function(t,e,n){na(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return na(t,function(){e++}),e},toArray:function(t){return na(t,function(e){return e})||[]},only:function(t){if(!Ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=qi;K.Fragment=vT;K.Profiler=_T;K.PureComponent=Od;K.StrictMode=wT;K.Suspense=kT;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DT;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ev.call(e,l)&&!tv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Io,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:TT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ET,_context:t},t.Consumer=t};K.createElement=nv;K.createFactory=function(t){var e=nv.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:ST,render:t}};K.isValidElement=Ud;K.lazy=function(t){return{$$typeof:CT,_payload:{_status:-1,_result:t},_init:AT}};K.memo=function(t,e){return{$$typeof:IT,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=Aa.transition;Aa.transition={};try{t()}finally{Aa.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return rt.current.useCallback(t,e)};K.useContext=function(t){return rt.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return rt.current.useDeferredValue(t)};K.useEffect=function(t,e){return rt.current.useEffect(t,e)};K.useId=function(){return rt.current.useId()};K.useImperativeHandle=function(t,e,n){return rt.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return rt.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return rt.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return rt.current.useMemo(t,e)};K.useReducer=function(t,e,n){return rt.current.useReducer(t,e,n)};K.useRef=function(t){return rt.current.useRef(t)};K.useState=function(t){return rt.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return rt.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return rt.current.useTransition()};K.version="18.2.0";(function(t){t.exports=K})(C);const rv=gT(C.exports),nh=mT({__proto__:null,default:rv},[C.exports]);var rh={},iv={exports:{}},_t={},sv={exports:{}},ov={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,B){var j=P.length;P.push(B);e:for(;0<j;){var ge=j-1>>>1,xe=P[ge];if(0<i(xe,B))P[ge]=B,P[j]=xe,j=ge;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var B=P[0],j=P.pop();if(j!==B){P[0]=j;e:for(var ge=0,xe=P.length,ea=xe>>>1;ge<ea;){var pr=2*(ge+1)-1,sc=P[pr],mr=pr+1,ta=P[mr];if(0>i(sc,j))mr<xe&&0>i(ta,sc)?(P[ge]=ta,P[mr]=j,ge=mr):(P[ge]=sc,P[pr]=j,ge=pr);else if(mr<xe&&0>i(ta,j))P[ge]=ta,P[mr]=j,ge=mr;else break e}}return B}function i(P,B){var j=P.sortIndex-B.sortIndex;return j!==0?j:P.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=P)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function w(P){if(v=!1,m(P),!y)if(n(l)!==null)y=!0,rc(I);else{var B=n(u);B!==null&&ic(w,B.startTime-P)}}function I(P,B){y=!1,v&&(v=!1,p(O),O=-1),g=!0;var j=d;try{for(m(B),h=n(l);h!==null&&(!(h.expirationTime>B)||P&&!At());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,d=h.priorityLevel;var xe=ge(h.expirationTime<=B);B=t.unstable_now(),typeof xe=="function"?h.callback=xe:h===n(l)&&r(l),m(B)}else r(l);h=n(l)}if(h!==null)var ea=!0;else{var pr=n(u);pr!==null&&ic(w,pr.startTime-B),ea=!1}return ea}finally{h=null,d=j,g=!1}}var x=!1,N=null,O=-1,Z=5,H=-1;function At(){return!(t.unstable_now()-H<Z)}function us(){if(N!==null){var P=t.unstable_now();H=P;var B=!0;try{B=N(!0,P)}finally{B?cs():(x=!1,N=null)}}else x=!1}var cs;if(typeof f=="function")cs=function(){f(us)};else if(typeof MessageChannel<"u"){var om=new MessageChannel,pT=om.port2;om.port1.onmessage=us,cs=function(){pT.postMessage(null)}}else cs=function(){E(us,0)};function rc(P){N=P,x||(x=!0,cs())}function ic(P,B){O=E(function(){P(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,rc(I))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var j=d;d=B;try{return P()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=d;d=P;try{return B()}finally{d=j}},t.unstable_scheduleCallback=function(P,B,j){var ge=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ge+j:ge):j=ge,P){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=j+xe,P={id:c++,callback:B,priorityLevel:P,startTime:j,expirationTime:xe,sortIndex:-1},j>ge?(P.sortIndex=j,e(u,P),n(l)===null&&P===n(u)&&(v?(p(O),O=-1):v=!0,ic(w,j-ge))):(P.sortIndex=xe,e(l,P),y||g||(y=!0,rc(I))),P},t.unstable_shouldYield=At,t.unstable_wrapCallback=function(P){var B=d;return function(){var j=d;d=B;try{return P.apply(this,arguments)}finally{d=j}}}})(ov);(function(t){t.exports=ov})(sv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av=C.exports,vt=sv.exports;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lv=new Set,Ws={};function Hr(t,e){Ri(t,e),Ri(t+"Capture",e)}function Ri(t,e){for(Ws[t]=e,t=0;t<e.length;t++)lv.add(e[t])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ih=Object.prototype.hasOwnProperty,PT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cm={},hm={};function OT(t){return ih.call(hm,t)?!0:ih.call(cm,t)?!1:PT.test(t)?hm[t]=!0:(cm[t]=!0,!1)}function LT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bT(t,e,n,r){if(e===null||typeof e>"u"||LT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function it(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new it(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new it(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new it(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new it(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new it(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new it(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new it(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new it(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new it(t,5,!1,t.toLowerCase(),null,!1,!1)});var Md=/[\-:]([a-z])/g;function $d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Md,$d);$e[e]=new it(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Md,$d);$e[e]=new it(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Md,$d);$e[e]=new it(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new it(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new it(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fd(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bT(e,n,i,r)&&(n=null),r||i===null?OT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sn=av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ra=Symbol.for("react.element"),ri=Symbol.for("react.portal"),ii=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),sh=Symbol.for("react.profiler"),uv=Symbol.for("react.provider"),cv=Symbol.for("react.context"),zd=Symbol.for("react.forward_ref"),oh=Symbol.for("react.suspense"),ah=Symbol.for("react.suspense_list"),Bd=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),hv=Symbol.for("react.offscreen"),dm=Symbol.iterator;function hs(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,ac;function Es(t){if(ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ac=e&&e[1]||""}return`
`+ac+t}var lc=!1;function uc(t,e){if(!t||lc)return"";lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Es(t):""}function UT(t){switch(t.tag){case 5:return Es(t.type);case 16:return Es("Lazy");case 13:return Es("Suspense");case 19:return Es("SuspenseList");case 0:case 2:case 15:return t=uc(t.type,!1),t;case 11:return t=uc(t.type.render,!1),t;case 1:return t=uc(t.type,!0),t;default:return""}}function lh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ii:return"Fragment";case ri:return"Portal";case sh:return"Profiler";case Vd:return"StrictMode";case oh:return"Suspense";case ah:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cv:return(t.displayName||"Context")+".Consumer";case uv:return(t._context.displayName||"Context")+".Provider";case zd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bd:return e=t.displayName||null,e!==null?e:lh(t.type)||"Memo";case xn:e=t._payload,t=t._init;try{return lh(t(e))}catch{}}return null}function MT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lh(e);case 8:return e===Vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $T(t){var e=dv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ia(t){t._valueTracker||(t._valueTracker=$T(t))}function fv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function uh(t,e){var n=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function fm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pv(t,e){e=e.checked,e!=null&&Fd(t,"checked",e,!1)}function ch(t,e){pv(t,e);var n=Yn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hh(t,e.type,n):e.hasOwnProperty("defaultValue")&&hh(t,e.type,Yn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hh(t,e,n){(e!=="number"||Xa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ts=Array.isArray;function gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function dh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Ts(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yn(n)}}function mv(t,e){var n=Yn(e.value),r=Yn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sa,yv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sa=sa||document.createElement("div"),sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},FT=["Webkit","ms","Moz","O"];Object.keys(Ds).forEach(function(t){FT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ds[e]=Ds[t]})});function vv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ds.hasOwnProperty(t)&&Ds[t]?(""+e).trim():e+"px"}function wv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var VT=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ph(t,e){if(e){if(VT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function mh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gh=null;function jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yh=null,yi=null,vi=null;function ym(t){if(t=xo(t)){if(typeof yh!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Yl(e),yh(t.stateNode,t.type,e))}}function _v(t){yi?vi?vi.push(t):vi=[t]:yi=t}function Ev(){if(yi){var t=yi,e=vi;if(vi=yi=null,ym(t),e)for(t=0;t<e.length;t++)ym(e[t])}}function Tv(t,e){return t(e)}function Sv(){}var cc=!1;function kv(t,e,n){if(cc)return t(e,n);cc=!0;try{return Tv(t,e,n)}finally{cc=!1,(yi!==null||vi!==null)&&(Sv(),Ev())}}function Gs(t,e){var n=t.stateNode;if(n===null)return null;var r=Yl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var vh=!1;if(fn)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){vh=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{vh=!1}function zT(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ps=!1,Ya=null,Ja=!1,wh=null,BT={onError:function(t){Ps=!0,Ya=t}};function jT(t,e,n,r,i,s,o,a,l){Ps=!1,Ya=null,zT.apply(BT,arguments)}function HT(t,e,n,r,i,s,o,a,l){if(jT.apply(this,arguments),Ps){if(Ps){var u=Ya;Ps=!1,Ya=null}else throw Error(S(198));Ja||(Ja=!0,wh=u)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Iv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vm(t){if(qr(t)!==t)throw Error(S(188))}function qT(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return vm(i),t;if(s===r)return vm(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Cv(t){return t=qT(t),t!==null?Rv(t):null}function Rv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Rv(t);if(e!==null)return e;t=t.sibling}return null}var xv=vt.unstable_scheduleCallback,wm=vt.unstable_cancelCallback,WT=vt.unstable_shouldYield,KT=vt.unstable_requestPaint,ye=vt.unstable_now,GT=vt.unstable_getCurrentPriorityLevel,Hd=vt.unstable_ImmediatePriority,Nv=vt.unstable_UserBlockingPriority,Za=vt.unstable_NormalPriority,QT=vt.unstable_LowPriority,Av=vt.unstable_IdlePriority,Kl=null,Ht=null;function XT(t){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:ZT,YT=Math.log,JT=Math.LN2;function ZT(t){return t>>>=0,t===0?32:31-(YT(t)/JT|0)|0}var oa=64,aa=4194304;function Ss(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function el(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ss(a):(s&=o,s!==0&&(r=Ss(s)))}else o=n&~i,o!==0?r=Ss(o):s!==0&&(r=Ss(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bt(e),i=1<<n,r|=t[n],e&=~i;return r}function eS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=eS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _h(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dv(){var t=oa;return oa<<=1,(oa&4194240)===0&&(oa=64),t}function hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bt(e),t[e]=n}function nS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function Pv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ov,Wd,Lv,bv,Uv,Eh=!1,la=[],Fn=null,Vn=null,zn=null,Qs=new Map,Xs=new Map,An=[],rS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _m(t,e){switch(t){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(e.pointerId)}}function fs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xo(e),e!==null&&Wd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iS(t,e,n,r,i){switch(e){case"focusin":return Fn=fs(Fn,t,e,n,r,i),!0;case"dragenter":return Vn=fs(Vn,t,e,n,r,i),!0;case"mouseover":return zn=fs(zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Qs.set(s,fs(Qs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xs.set(s,fs(Xs.get(s)||null,t,e,n,r,i)),!0}return!1}function Mv(t){var e=wr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=Iv(n),e!==null){t.blockedOn=e,Uv(t.priority,function(){Lv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Da(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Th(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);gh=r,n.target.dispatchEvent(r),gh=null}else return e=xo(n),e!==null&&Wd(e),t.blockedOn=n,!1;e.shift()}return!0}function Em(t,e,n){Da(t)&&n.delete(e)}function sS(){Eh=!1,Fn!==null&&Da(Fn)&&(Fn=null),Vn!==null&&Da(Vn)&&(Vn=null),zn!==null&&Da(zn)&&(zn=null),Qs.forEach(Em),Xs.forEach(Em)}function ps(t,e){t.blockedOn===e&&(t.blockedOn=null,Eh||(Eh=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,sS)))}function Ys(t){function e(i){return ps(i,t)}if(0<la.length){ps(la[0],t);for(var n=1;n<la.length;n++){var r=la[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Fn!==null&&ps(Fn,t),Vn!==null&&ps(Vn,t),zn!==null&&ps(zn,t),Qs.forEach(e),Xs.forEach(e),n=0;n<An.length;n++)r=An[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<An.length&&(n=An[0],n.blockedOn===null);)Mv(n),n.blockedOn===null&&An.shift()}var wi=Sn.ReactCurrentBatchConfig,tl=!0;function oS(t,e,n,r){var i=ee,s=wi.transition;wi.transition=null;try{ee=1,Kd(t,e,n,r)}finally{ee=i,wi.transition=s}}function aS(t,e,n,r){var i=ee,s=wi.transition;wi.transition=null;try{ee=4,Kd(t,e,n,r)}finally{ee=i,wi.transition=s}}function Kd(t,e,n,r){if(tl){var i=Th(t,e,n,r);if(i===null)Ec(t,e,r,nl,n),_m(t,r);else if(iS(i,t,e,n,r))r.stopPropagation();else if(_m(t,r),e&4&&-1<rS.indexOf(t)){for(;i!==null;){var s=xo(i);if(s!==null&&Ov(s),s=Th(t,e,n,r),s===null&&Ec(t,e,r,nl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ec(t,e,r,null,n)}}var nl=null;function Th(t,e,n,r){if(nl=null,t=jd(r),t=wr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Iv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nl=t,null}function $v(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(GT()){case Hd:return 1;case Nv:return 4;case Za:case QT:return 16;case Av:return 536870912;default:return 16}default:return 16}}var Un=null,Gd=null,Pa=null;function Fv(){if(Pa)return Pa;var t,e=Gd,n=e.length,r,i="value"in Un?Un.value:Un.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Pa=i.slice(t,1<r?1-r:void 0)}function Oa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ua(){return!0}function Tm(){return!1}function Et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ua:Tm,this.isPropagationStopped=Tm,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),e}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qd=Et(Wi),Ro=de({},Wi,{view:0,detail:0}),lS=Et(Ro),dc,fc,ms,Gl=de({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ms&&(ms&&t.type==="mousemove"?(dc=t.screenX-ms.screenX,fc=t.screenY-ms.screenY):fc=dc=0,ms=t),dc)},movementY:function(t){return"movementY"in t?t.movementY:fc}}),Sm=Et(Gl),uS=de({},Gl,{dataTransfer:0}),cS=Et(uS),hS=de({},Ro,{relatedTarget:0}),pc=Et(hS),dS=de({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),fS=Et(dS),pS=de({},Wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mS=Et(pS),gS=de({},Wi,{data:0}),km=Et(gS),yS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _S(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wS[t])?!!e[t]:!1}function Xd(){return _S}var ES=de({},Ro,{key:function(t){if(t.key){var e=yS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xd,charCode:function(t){return t.type==="keypress"?Oa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TS=Et(ES),SS=de({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Im=Et(SS),kS=de({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xd}),IS=Et(kS),CS=de({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),RS=Et(CS),xS=de({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),NS=Et(xS),AS=[9,13,27,32],Yd=fn&&"CompositionEvent"in window,Os=null;fn&&"documentMode"in document&&(Os=document.documentMode);var DS=fn&&"TextEvent"in window&&!Os,Vv=fn&&(!Yd||Os&&8<Os&&11>=Os),Cm=String.fromCharCode(32),Rm=!1;function zv(t,e){switch(t){case"keyup":return AS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var si=!1;function PS(t,e){switch(t){case"compositionend":return Bv(e);case"keypress":return e.which!==32?null:(Rm=!0,Cm);case"textInput":return t=e.data,t===Cm&&Rm?null:t;default:return null}}function OS(t,e){if(si)return t==="compositionend"||!Yd&&zv(t,e)?(t=Fv(),Pa=Gd=Un=null,si=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vv&&e.locale!=="ko"?null:e.data;default:return null}}var LS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!LS[t.type]:e==="textarea"}function jv(t,e,n,r){_v(r),e=rl(e,"onChange"),0<e.length&&(n=new Qd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ls=null,Js=null;function bS(t){e0(t,0)}function Ql(t){var e=li(t);if(fv(e))return t}function US(t,e){if(t==="change")return e}var Hv=!1;if(fn){var mc;if(fn){var gc="oninput"in document;if(!gc){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),gc=typeof Nm.oninput=="function"}mc=gc}else mc=!1;Hv=mc&&(!document.documentMode||9<document.documentMode)}function Am(){Ls&&(Ls.detachEvent("onpropertychange",qv),Js=Ls=null)}function qv(t){if(t.propertyName==="value"&&Ql(Js)){var e=[];jv(e,Js,t,jd(t)),kv(bS,e)}}function MS(t,e,n){t==="focusin"?(Am(),Ls=e,Js=n,Ls.attachEvent("onpropertychange",qv)):t==="focusout"&&Am()}function $S(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ql(Js)}function FS(t,e){if(t==="click")return Ql(e)}function VS(t,e){if(t==="input"||t==="change")return Ql(e)}function zS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mt=typeof Object.is=="function"?Object.is:zS;function Zs(t,e){if(Mt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ih.call(e,i)||!Mt(t[i],e[i]))return!1}return!0}function Dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pm(t,e){var n=Dm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dm(n)}}function Wv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kv(){for(var t=window,e=Xa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xa(t.document)}return e}function Jd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function BS(t){var e=Kv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Wv(n.ownerDocument.documentElement,n)){if(r!==null&&Jd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pm(n,s);var o=Pm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jS=fn&&"documentMode"in document&&11>=document.documentMode,oi=null,Sh=null,bs=null,kh=!1;function Om(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kh||oi==null||oi!==Xa(r)||(r=oi,"selectionStart"in r&&Jd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bs&&Zs(bs,r)||(bs=r,r=rl(Sh,"onSelect"),0<r.length&&(e=new Qd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=oi)))}function ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ai={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},yc={},Gv={};fn&&(Gv=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);function Xl(t){if(yc[t])return yc[t];if(!ai[t])return t;var e=ai[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gv)return yc[t]=e[n];return t}var Qv=Xl("animationend"),Xv=Xl("animationiteration"),Yv=Xl("animationstart"),Jv=Xl("transitionend"),Zv=new Map,Lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){Zv.set(t,e),Hr(e,[t])}for(var vc=0;vc<Lm.length;vc++){var wc=Lm[vc],HS=wc.toLowerCase(),qS=wc[0].toUpperCase()+wc.slice(1);rr(HS,"on"+qS)}rr(Qv,"onAnimationEnd");rr(Xv,"onAnimationIteration");rr(Yv,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(Jv,"onTransitionEnd");Ri("onMouseEnter",["mouseout","mouseover"]);Ri("onMouseLeave",["mouseout","mouseover"]);Ri("onPointerEnter",["pointerout","pointerover"]);Ri("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function bm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,HT(r,e,void 0,t),t.currentTarget=null}function e0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;bm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;bm(i,a,u),s=l}}}if(Ja)throw t=wh,Ja=!1,wh=null,t}function ie(t,e){var n=e[Nh];n===void 0&&(n=e[Nh]=new Set);var r=t+"__bubble";n.has(r)||(t0(e,t,2,!1),n.add(r))}function _c(t,e,n){var r=0;e&&(r|=4),t0(n,t,r,e)}var ha="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[ha]){t[ha]=!0,lv.forEach(function(n){n!=="selectionchange"&&(WS.has(n)||_c(n,!1,t),_c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ha]||(e[ha]=!0,_c("selectionchange",!1,e))}}function t0(t,e,n,r){switch($v(e)){case 1:var i=oS;break;case 4:i=aS;break;default:i=Kd}n=i.bind(null,e,n,t),i=void 0,!vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ec(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=wr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}kv(function(){var u=s,c=jd(n),h=[];e:{var d=Zv.get(t);if(d!==void 0){var g=Qd,y=t;switch(t){case"keypress":if(Oa(n)===0)break e;case"keydown":case"keyup":g=TS;break;case"focusin":y="focus",g=pc;break;case"focusout":y="blur",g=pc;break;case"beforeblur":case"afterblur":g=pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=cS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=IS;break;case Qv:case Xv:case Yv:g=fS;break;case Jv:g=RS;break;case"scroll":g=lS;break;case"wheel":g=NS;break;case"copy":case"cut":case"paste":g=mS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Im}var v=(e&4)!==0,E=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Gs(f,p),w!=null&&v.push(to(f,w,m)))),E)break;f=f.return}0<v.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==gh&&(y=n.relatedTarget||n.fromElement)&&(wr(y)||y[pn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?wr(y):null,y!==null&&(E=qr(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Sm,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Im,w="onPointerLeave",p="onPointerEnter",f="pointer"),E=g==null?d:li(g),m=y==null?d:li(y),d=new v(w,f+"leave",g,n,c),d.target=E,d.relatedTarget=m,w=null,wr(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=E,w=v),E=w,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=Zr(m))f++;for(m=0,w=p;w;w=Zr(w))m++;for(;0<f-m;)v=Zr(v),f--;for(;0<m-f;)p=Zr(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Zr(v),p=Zr(p)}v=null}else v=null;g!==null&&Um(h,d,g,v,!1),y!==null&&E!==null&&Um(h,E,y,v,!0)}}e:{if(d=u?li(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var I=US;else if(xm(d))if(Hv)I=VS;else{I=$S;var x=MS}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=FS);if(I&&(I=I(t,u))){jv(h,I,n,c);break e}x&&x(t,d,u),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&hh(d,"number",d.value)}switch(x=u?li(u):window,t){case"focusin":(xm(x)||x.contentEditable==="true")&&(oi=x,Sh=u,bs=null);break;case"focusout":bs=Sh=oi=null;break;case"mousedown":kh=!0;break;case"contextmenu":case"mouseup":case"dragend":kh=!1,Om(h,n,c);break;case"selectionchange":if(jS)break;case"keydown":case"keyup":Om(h,n,c)}var N;if(Yd)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else si?zv(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Vv&&n.locale!=="ko"&&(si||O!=="onCompositionStart"?O==="onCompositionEnd"&&si&&(N=Fv()):(Un=c,Gd="value"in Un?Un.value:Un.textContent,si=!0)),x=rl(u,O),0<x.length&&(O=new km(O,t,null,n,c),h.push({event:O,listeners:x}),N?O.data=N:(N=Bv(n),N!==null&&(O.data=N)))),(N=DS?PS(t,n):OS(t,n))&&(u=rl(u,"onBeforeInput"),0<u.length&&(c=new km("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}e0(h,e)})}function to(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Gs(t,n),s!=null&&r.unshift(to(t,s,i)),s=Gs(t,e),s!=null&&r.push(to(t,s,i))),t=t.return}return r}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Um(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Gs(n,s),l!=null&&o.unshift(to(n,l,a))):i||(l=Gs(n,s),l!=null&&o.push(to(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var KS=/\r\n?/g,GS=/\u0000|\uFFFD/g;function Mm(t){return(typeof t=="string"?t:""+t).replace(KS,`
`).replace(GS,"")}function da(t,e,n){if(e=Mm(e),Mm(t)!==e&&n)throw Error(S(425))}function il(){}var Ih=null,Ch=null;function Rh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xh=typeof setTimeout=="function"?setTimeout:void 0,QS=typeof clearTimeout=="function"?clearTimeout:void 0,$m=typeof Promise=="function"?Promise:void 0,XS=typeof queueMicrotask=="function"?queueMicrotask:typeof $m<"u"?function(t){return $m.resolve(null).then(t).catch(YS)}:xh;function YS(t){setTimeout(function(){throw t})}function Tc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ys(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ys(e)}function Bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ki=Math.random().toString(36).slice(2),zt="__reactFiber$"+Ki,no="__reactProps$"+Ki,pn="__reactContainer$"+Ki,Nh="__reactEvents$"+Ki,JS="__reactListeners$"+Ki,ZS="__reactHandles$"+Ki;function wr(t){var e=t[zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pn]||n[zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fm(t);t!==null;){if(n=t[zt])return n;t=Fm(t)}return e}t=n,n=t.parentNode}return null}function xo(t){return t=t[zt]||t[pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Yl(t){return t[no]||null}var Ah=[],ui=-1;function ir(t){return{current:t}}function oe(t){0>ui||(t.current=Ah[ui],Ah[ui]=null,ui--)}function ne(t,e){ui++,Ah[ui]=t.current,t.current=e}var Jn={},Qe=ir(Jn),ut=ir(!1),Pr=Jn;function xi(t,e){var n=t.type.contextTypes;if(!n)return Jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ct(t){return t=t.childContextTypes,t!=null}function sl(){oe(ut),oe(Qe)}function Vm(t,e,n){if(Qe.current!==Jn)throw Error(S(168));ne(Qe,e),ne(ut,n)}function n0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,MT(t)||"Unknown",i));return de({},n,r)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jn,Pr=Qe.current,ne(Qe,t),ne(ut,ut.current),!0}function zm(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=n0(t,e,Pr),r.__reactInternalMemoizedMergedChildContext=t,oe(ut),oe(Qe),ne(Qe,t)):oe(ut),ne(ut,n)}var tn=null,Jl=!1,Sc=!1;function r0(t){tn===null?tn=[t]:tn.push(t)}function ek(t){Jl=!0,r0(t)}function sr(){if(!Sc&&tn!==null){Sc=!0;var t=0,e=ee;try{var n=tn;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}tn=null,Jl=!1}catch(i){throw tn!==null&&(tn=tn.slice(t+1)),xv(Hd,sr),i}finally{ee=e,Sc=!1}}return null}var ci=[],hi=0,al=null,ll=0,Tt=[],St=0,Or=null,sn=1,on="";function gr(t,e){ci[hi++]=ll,ci[hi++]=al,al=t,ll=e}function i0(t,e,n){Tt[St++]=sn,Tt[St++]=on,Tt[St++]=Or,Or=t;var r=sn;t=on;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,sn=1<<32-bt(e)+i|n<<i|r,on=s+t}else sn=1<<s|n<<i|r,on=t}function Zd(t){t.return!==null&&(gr(t,1),i0(t,1,0))}function ef(t){for(;t===al;)al=ci[--hi],ci[hi]=null,ll=ci[--hi],ci[hi]=null;for(;t===Or;)Or=Tt[--St],Tt[St]=null,on=Tt[--St],Tt[St]=null,sn=Tt[--St],Tt[St]=null}var yt=null,mt=null,le=!1,Lt=null;function s0(t,e){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yt=t,mt=Bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yt=t,mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:sn,overflow:on}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yt=t,mt=null,!0):!1;default:return!1}}function Dh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ph(t){if(le){var e=mt;if(e){var n=e;if(!Bm(t,e)){if(Dh(t))throw Error(S(418));e=Bn(n.nextSibling);var r=yt;e&&Bm(t,e)?s0(r,n):(t.flags=t.flags&-4097|2,le=!1,yt=t)}}else{if(Dh(t))throw Error(S(418));t.flags=t.flags&-4097|2,le=!1,yt=t}}}function jm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function fa(t){if(t!==yt)return!1;if(!le)return jm(t),le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rh(t.type,t.memoizedProps)),e&&(e=mt)){if(Dh(t))throw o0(),Error(S(418));for(;e;)s0(t,e),e=Bn(e.nextSibling)}if(jm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mt=Bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mt=null}}else mt=yt?Bn(t.stateNode.nextSibling):null;return!0}function o0(){for(var t=mt;t;)t=Bn(t.nextSibling)}function Ni(){mt=yt=null,le=!1}function tf(t){Lt===null?Lt=[t]:Lt.push(t)}var tk=Sn.ReactCurrentBatchConfig;function Pt(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ul=ir(null),cl=null,di=null,nf=null;function rf(){nf=di=cl=null}function sf(t){var e=ul.current;oe(ul),t._currentValue=e}function Oh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _i(t,e){cl=t,nf=di=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(lt=!0),t.firstContext=null)}function Rt(t){var e=t._currentValue;if(nf!==t)if(t={context:t,memoizedValue:e,next:null},di===null){if(cl===null)throw Error(S(308));di=t,cl.dependencies={lanes:0,firstContext:t}}else di=di.next=t;return e}var _r=null;function of(t){_r===null?_r=[t]:_r.push(t)}function a0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,of(e)):(n.next=i.next,i.next=n),e.interleaved=n,mn(t,r)}function mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nn=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(X&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,mn(t,n)}return i=r.interleaved,i===null?(e.next=e,of(r)):(e.next=i.next,i.next=e),r.interleaved=e,mn(t,n)}function La(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qd(t,n)}}function Hm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hl(t,e,n,r){var i=t.updateQueue;Nn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=de({},h,d);break e;case 2:Nn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);br|=o,t.lanes=o,t.memoizedState=h}}function qm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var u0=new av.Component().refs;function Lh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:de({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=nt(),i=qn(t),s=hn(r,i);s.payload=e,n!=null&&(s.callback=n),e=jn(t,s,i),e!==null&&(Ut(e,t,i,r),La(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=nt(),i=qn(t),s=hn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=jn(t,s,i),e!==null&&(Ut(e,t,i,r),La(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nt(),r=qn(t),i=hn(n,r);i.tag=2,e!=null&&(i.callback=e),e=jn(t,i,r),e!==null&&(Ut(e,t,r,n),La(e,t,r))}};function Wm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zs(n,r)||!Zs(i,s):!0}function c0(t,e,n){var r=!1,i=Jn,s=e.contextType;return typeof s=="object"&&s!==null?s=Rt(s):(i=ct(e)?Pr:Qe.current,r=e.contextTypes,s=(r=r!=null)?xi(t,i):Jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Km(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function bh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=u0,af(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rt(s):(s=ct(e)?Pr:Qe.current,i.context=xi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zl.enqueueReplaceState(i,i.state,null),hl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===u0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function pa(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gm(t){var e=t._init;return e(t._payload)}function h0(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Wn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=Ac(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var I=m.type;return I===ii?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===xn&&Gm(I)===f.type)?(w=i(f,m.props),w.ref=gs(p,f,m),w.return=p,w):(w=Va(m.type,m.key,m.props,null,p.mode,w),w.ref=gs(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Dc(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,I){return f===null||f.tag!==7?(f=Rr(m,p.mode,w,I),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ac(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ra:return m=Va(f.type,f.key,f.props,null,p.mode,m),m.ref=gs(p,null,f),m.return=p,m;case ri:return f=Dc(f,p.mode,m),f.return=p,f;case xn:var w=f._init;return h(p,w(f._payload),m)}if(Ts(f)||hs(f))return f=Rr(f,p.mode,m,null),f.return=p,f;pa(p,f)}return null}function d(p,f,m,w){var I=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ra:return m.key===I?l(p,f,m,w):null;case ri:return m.key===I?u(p,f,m,w):null;case xn:return I=m._init,d(p,f,I(m._payload),w)}if(Ts(m)||hs(m))return I!==null?null:c(p,f,m,w,null);pa(p,m)}return null}function g(p,f,m,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ra:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,I);case ri:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,I);case xn:var x=w._init;return g(p,f,m,x(w._payload),I)}if(Ts(w)||hs(w))return p=p.get(m)||null,c(f,p,w,I,null);pa(f,w)}return null}function y(p,f,m,w){for(var I=null,x=null,N=f,O=f=0,Z=null;N!==null&&O<m.length;O++){N.index>O?(Z=N,N=null):Z=N.sibling;var H=d(p,N,m[O],w);if(H===null){N===null&&(N=Z);break}t&&N&&H.alternate===null&&e(p,N),f=s(H,f,O),x===null?I=H:x.sibling=H,x=H,N=Z}if(O===m.length)return n(p,N),le&&gr(p,O),I;if(N===null){for(;O<m.length;O++)N=h(p,m[O],w),N!==null&&(f=s(N,f,O),x===null?I=N:x.sibling=N,x=N);return le&&gr(p,O),I}for(N=r(p,N);O<m.length;O++)Z=g(N,p,O,m[O],w),Z!==null&&(t&&Z.alternate!==null&&N.delete(Z.key===null?O:Z.key),f=s(Z,f,O),x===null?I=Z:x.sibling=Z,x=Z);return t&&N.forEach(function(At){return e(p,At)}),le&&gr(p,O),I}function v(p,f,m,w){var I=hs(m);if(typeof I!="function")throw Error(S(150));if(m=I.call(m),m==null)throw Error(S(151));for(var x=I=null,N=f,O=f=0,Z=null,H=m.next();N!==null&&!H.done;O++,H=m.next()){N.index>O?(Z=N,N=null):Z=N.sibling;var At=d(p,N,H.value,w);if(At===null){N===null&&(N=Z);break}t&&N&&At.alternate===null&&e(p,N),f=s(At,f,O),x===null?I=At:x.sibling=At,x=At,N=Z}if(H.done)return n(p,N),le&&gr(p,O),I;if(N===null){for(;!H.done;O++,H=m.next())H=h(p,H.value,w),H!==null&&(f=s(H,f,O),x===null?I=H:x.sibling=H,x=H);return le&&gr(p,O),I}for(N=r(p,N);!H.done;O++,H=m.next())H=g(N,p,O,H.value,w),H!==null&&(t&&H.alternate!==null&&N.delete(H.key===null?O:H.key),f=s(H,f,O),x===null?I=H:x.sibling=H,x=H);return t&&N.forEach(function(us){return e(p,us)}),le&&gr(p,O),I}function E(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===ii&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ra:e:{for(var I=m.key,x=f;x!==null;){if(x.key===I){if(I=m.type,I===ii){if(x.tag===7){n(p,x.sibling),f=i(x,m.props.children),f.return=p,p=f;break e}}else if(x.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===xn&&Gm(I)===x.type){n(p,x.sibling),f=i(x,m.props),f.ref=gs(p,x,m),f.return=p,p=f;break e}n(p,x);break}else e(p,x);x=x.sibling}m.type===ii?(f=Rr(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Va(m.type,m.key,m.props,null,p.mode,w),w.ref=gs(p,f,m),w.return=p,p=w)}return o(p);case ri:e:{for(x=m.key;f!==null;){if(f.key===x)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Dc(m,p.mode,w),f.return=p,p=f}return o(p);case xn:return x=m._init,E(p,f,x(m._payload),w)}if(Ts(m))return y(p,f,m,w);if(hs(m))return v(p,f,m,w);pa(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Ac(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return E}var Ai=h0(!0),d0=h0(!1),No={},qt=ir(No),ro=ir(No),io=ir(No);function Er(t){if(t===No)throw Error(S(174));return t}function lf(t,e){switch(ne(io,e),ne(ro,t),ne(qt,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fh(e,t)}oe(qt),ne(qt,e)}function Di(){oe(qt),oe(ro),oe(io)}function f0(t){Er(io.current);var e=Er(qt.current),n=fh(e,t.type);e!==n&&(ne(ro,t),ne(qt,n))}function uf(t){ro.current===t&&(oe(qt),oe(ro))}var ce=ir(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kc=[];function cf(){for(var t=0;t<kc.length;t++)kc[t]._workInProgressVersionPrimary=null;kc.length=0}var ba=Sn.ReactCurrentDispatcher,Ic=Sn.ReactCurrentBatchConfig,Lr=0,he=null,ke=null,De=null,fl=!1,Us=!1,so=0,nk=0;function Ve(){throw Error(S(321))}function hf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mt(t[n],e[n]))return!1;return!0}function df(t,e,n,r,i,s){if(Lr=s,he=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ba.current=t===null||t.memoizedState===null?ok:ak,t=n(r,i),Us){s=0;do{if(Us=!1,so=0,25<=s)throw Error(S(301));s+=1,De=ke=null,e.updateQueue=null,ba.current=lk,t=n(r,i)}while(Us)}if(ba.current=pl,e=ke!==null&&ke.next!==null,Lr=0,De=ke=he=null,fl=!1,e)throw Error(S(300));return t}function ff(){var t=so!==0;return so=0,t}function Vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?he.memoizedState=De=t:De=De.next=t,De}function xt(){if(ke===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=De===null?he.memoizedState:De.next;if(e!==null)De=e,ke=t;else{if(t===null)throw Error(S(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},De===null?he.memoizedState=De=t:De=De.next=t}return De}function oo(t,e){return typeof e=="function"?e(t):e}function Cc(t){var e=xt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Lr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,he.lanes|=c,br|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Mt(r,e.memoizedState)||(lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,he.lanes|=s,br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Rc(t){var e=xt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Mt(s,e.memoizedState)||(lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function p0(){}function m0(t,e){var n=he,r=xt(),i=e(),s=!Mt(r.memoizedState,i);if(s&&(r.memoizedState=i,lt=!0),r=r.queue,pf(v0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,ao(9,y0.bind(null,n,r,i,e),void 0,null),Pe===null)throw Error(S(349));(Lr&30)!==0||g0(n,e,i)}return i}function g0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function y0(t,e,n,r){e.value=n,e.getSnapshot=r,w0(e)&&_0(t)}function v0(t,e,n){return n(function(){w0(e)&&_0(t)})}function w0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mt(t,n)}catch{return!0}}function _0(t){var e=mn(t,1);e!==null&&Ut(e,t,1,-1)}function Qm(t){var e=Vt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:t},e.queue=t,t=t.dispatch=sk.bind(null,he,t),[e.memoizedState,t]}function ao(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function E0(){return xt().memoizedState}function Ua(t,e,n,r){var i=Vt();he.flags|=t,i.memoizedState=ao(1|e,n,void 0,r===void 0?null:r)}function eu(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&hf(r,o.deps)){i.memoizedState=ao(e,n,s,r);return}}he.flags|=t,i.memoizedState=ao(1|e,n,s,r)}function Xm(t,e){return Ua(8390656,8,t,e)}function pf(t,e){return eu(2048,8,t,e)}function T0(t,e){return eu(4,2,t,e)}function S0(t,e){return eu(4,4,t,e)}function k0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function I0(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,k0.bind(null,e,t),n)}function mf(){}function C0(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function R0(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function x0(t,e,n){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,lt=!0),t.memoizedState=n):(Mt(n,e)||(n=Dv(),he.lanes|=n,br|=n,t.baseState=!0),e)}function rk(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=Ic.transition;Ic.transition={};try{t(!1),e()}finally{ee=n,Ic.transition=r}}function N0(){return xt().memoizedState}function ik(t,e,n){var r=qn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},A0(t))D0(e,n);else if(n=a0(t,e,n,r),n!==null){var i=nt();Ut(n,t,r,i),P0(n,e,r)}}function sk(t,e,n){var r=qn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(A0(t))D0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Mt(a,o)){var l=e.interleaved;l===null?(i.next=i,of(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=a0(t,e,i,r),n!==null&&(i=nt(),Ut(n,t,r,i),P0(n,e,r))}}function A0(t){var e=t.alternate;return t===he||e!==null&&e===he}function D0(t,e){Us=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P0(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qd(t,n)}}var pl={readContext:Rt,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},ok={readContext:Rt,useCallback:function(t,e){return Vt().memoizedState=[t,e===void 0?null:e],t},useContext:Rt,useEffect:Xm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ua(4194308,4,k0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ua(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ua(4,2,t,e)},useMemo:function(t,e){var n=Vt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Vt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ik.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var e=Vt();return t={current:t},e.memoizedState=t},useState:Qm,useDebugValue:mf,useDeferredValue:function(t){return Vt().memoizedState=t},useTransition:function(){var t=Qm(!1),e=t[0];return t=rk.bind(null,t[1]),Vt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=he,i=Vt();if(le){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Pe===null)throw Error(S(349));(Lr&30)!==0||g0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xm(v0.bind(null,r,s,t),[t]),r.flags|=2048,ao(9,y0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Vt(),e=Pe.identifierPrefix;if(le){var n=on,r=sn;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=so++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ak={readContext:Rt,useCallback:C0,useContext:Rt,useEffect:pf,useImperativeHandle:I0,useInsertionEffect:T0,useLayoutEffect:S0,useMemo:R0,useReducer:Cc,useRef:E0,useState:function(){return Cc(oo)},useDebugValue:mf,useDeferredValue:function(t){var e=xt();return x0(e,ke.memoizedState,t)},useTransition:function(){var t=Cc(oo)[0],e=xt().memoizedState;return[t,e]},useMutableSource:p0,useSyncExternalStore:m0,useId:N0,unstable_isNewReconciler:!1},lk={readContext:Rt,useCallback:C0,useContext:Rt,useEffect:pf,useImperativeHandle:I0,useInsertionEffect:T0,useLayoutEffect:S0,useMemo:R0,useReducer:Rc,useRef:E0,useState:function(){return Rc(oo)},useDebugValue:mf,useDeferredValue:function(t){var e=xt();return ke===null?e.memoizedState=t:x0(e,ke.memoizedState,t)},useTransition:function(){var t=Rc(oo)[0],e=xt().memoizedState;return[t,e]},useMutableSource:p0,useSyncExternalStore:m0,useId:N0,unstable_isNewReconciler:!1};function Pi(t,e){try{var n="",r=e;do n+=UT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function xc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Uh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uk=typeof WeakMap=="function"?WeakMap:Map;function O0(t,e,n){n=hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gl||(gl=!0,Wh=r),Uh(t,e)},n}function L0(t,e,n){n=hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uh(t,e),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ym(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Sk.bind(null,t,e,n),e.then(t,t))}function Jm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zm(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hn(-1,1),e.tag=2,jn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var ck=Sn.ReactCurrentOwner,lt=!1;function Ze(t,e,n,r){e.child=t===null?d0(e,null,n,r):Ai(e,t.child,n,r)}function eg(t,e,n,r,i){n=n.render;var s=e.ref;return _i(e,i),r=df(t,e,n,r,s,i),n=ff(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(le&&n&&Zd(e),e.flags|=1,Ze(t,e,r,i),e.child)}function tg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Sf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,b0(t,e,s,r,i)):(t=Va(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zs,n(o,r)&&t.ref===e.ref)return gn(t,e,i)}return e.flags|=1,t=Wn(s,r),t.ref=e.ref,t.return=e,e.child=t}function b0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Zs(s,r)&&t.ref===e.ref)if(lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(lt=!0);else return e.lanes=t.lanes,gn(t,e,i)}return Mh(t,e,n,r,i)}function U0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(pi,pt),pt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(pi,pt),pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ne(pi,pt),pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ne(pi,pt),pt|=r;return Ze(t,e,i,n),e.child}function M0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mh(t,e,n,r,i){var s=ct(n)?Pr:Qe.current;return s=xi(e,s),_i(e,i),n=df(t,e,n,r,s,i),r=ff(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,gn(t,e,i)):(le&&r&&Zd(e),e.flags|=1,Ze(t,e,n,i),e.child)}function ng(t,e,n,r,i){if(ct(n)){var s=!0;ol(e)}else s=!1;if(_i(e,i),e.stateNode===null)Ma(t,e),c0(e,n,r),bh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=ct(n)?Pr:Qe.current,u=xi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Km(e,o,r,u),Nn=!1;var d=e.memoizedState;o.state=d,hl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ut.current||Nn?(typeof c=="function"&&(Lh(e,n,c,r),l=e.memoizedState),(a=Nn||Wm(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,l0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Pt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rt(l):(l=ct(n)?Pr:Qe.current,l=xi(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Km(e,o,r,l),Nn=!1,d=e.memoizedState,o.state=d,hl(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||ut.current||Nn?(typeof g=="function"&&(Lh(e,n,g,r),y=e.memoizedState),(u=Nn||Wm(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return $h(t,e,n,r,s,i)}function $h(t,e,n,r,i,s){M0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zm(e,n,!1),gn(t,e,s);r=e.stateNode,ck.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ai(e,t.child,null,s),e.child=Ai(e,null,a,s)):Ze(t,e,a,s),e.memoizedState=r.state,i&&zm(e,n,!0),e.child}function $0(t){var e=t.stateNode;e.pendingContext?Vm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vm(t,e.context,!1),lf(t,e.containerInfo)}function rg(t,e,n,r,i){return Ni(),tf(i),e.flags|=256,Ze(t,e,n,r),e.child}var Fh={dehydrated:null,treeContext:null,retryLane:0};function Vh(t){return{baseLanes:t,cachePool:null,transitions:null}}function F0(t,e,n){var r=e.pendingProps,i=ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ne(ce,i&1),t===null)return Ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ru(o,r,0,null),t=Rr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vh(n),e.memoizedState=Fh,t):gf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return hk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Wn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wn(a,s):(s=Rr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fh,r}return s=t.child,t=s.sibling,r=Wn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gf(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ma(t,e,n,r){return r!==null&&tf(r),Ai(e,t.child,null,n),t=gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=xc(Error(S(422))),ma(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ru({mode:"visible",children:r.children},i,0,null),s=Rr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Ai(e,t.child,null,o),e.child.memoizedState=Vh(o),e.memoizedState=Fh,s);if((e.mode&1)===0)return ma(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=xc(s,r,void 0),ma(t,e,o,r)}if(a=(o&t.childLanes)!==0,lt||a){if(r=Pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,mn(t,i),Ut(r,t,i,-1))}return Tf(),r=xc(Error(S(421))),ma(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=kk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,mt=Bn(i.nextSibling),yt=e,le=!0,Lt=null,t!==null&&(Tt[St++]=sn,Tt[St++]=on,Tt[St++]=Or,sn=t.id,on=t.overflow,Or=e),e=gf(e,r.children),e.flags|=4096,e)}function ig(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Oh(t.return,e,n)}function Nc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function V0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ze(t,e,r.children,n),r=ce.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ig(t,n,e);else if(t.tag===19)ig(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(ce,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Nc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Nc(e,!0,n,null,s);break;case"together":Nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ma(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=Wn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dk(t,e,n){switch(e.tag){case 3:$0(e),Ni();break;case 5:f0(e);break;case 1:ct(e.type)&&ol(e);break;case 4:lf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ne(ul,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(ce,ce.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?F0(t,e,n):(ne(ce,ce.current&1),t=gn(t,e,n),t!==null?t.sibling:null);ne(ce,ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return V0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(ce,ce.current),r)break;return null;case 22:case 23:return e.lanes=0,U0(t,e,n)}return gn(t,e,n)}var z0,zh,B0,j0;z0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zh=function(){};B0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Er(qt.current);var s=null;switch(n){case"input":i=uh(t,i),r=uh(t,r),s=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),s=[];break;case"textarea":i=dh(t,i),r=dh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=il)}ph(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ws.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ws.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ie("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};j0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ys(t,e){if(!le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ze(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fk(t,e,n){var r=e.pendingProps;switch(ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(e),null;case 1:return ct(e.type)&&sl(),ze(e),null;case 3:return r=e.stateNode,Di(),oe(ut),oe(Qe),cf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Lt!==null&&(Qh(Lt),Lt=null))),zh(t,e),ze(e),null;case 5:uf(e);var i=Er(io.current);if(n=e.type,t!==null&&e.stateNode!=null)B0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return ze(e),null}if(t=Er(qt.current),fa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[zt]=e,r[no]=s,t=(e.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<ks.length;i++)ie(ks[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":fm(r,s),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ie("invalid",r);break;case"textarea":mm(r,s),ie("invalid",r)}ph(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&da(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&da(r.textContent,a,t),i=["children",""+a]):Ws.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":ia(r),pm(r,s,!0);break;case"textarea":ia(r),gm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=il)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[zt]=e,t[no]=r,z0(t,e,!1,!1),e.stateNode=t;e:{switch(o=mh(n,r),n){case"dialog":ie("cancel",t),ie("close",t),i=r;break;case"iframe":case"object":case"embed":ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<ks.length;i++)ie(ks[i],t);i=r;break;case"source":ie("error",t),i=r;break;case"img":case"image":case"link":ie("error",t),ie("load",t),i=r;break;case"details":ie("toggle",t),i=r;break;case"input":fm(t,r),i=uh(t,r),ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),ie("invalid",t);break;case"textarea":mm(t,r),i=dh(t,r),ie("invalid",t);break;default:i=r}ph(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ks(t,l):typeof l=="number"&&Ks(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ws.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ie("scroll",t):l!=null&&Fd(t,s,l,o))}switch(n){case"input":ia(t),pm(t,r,!1);break;case"textarea":ia(t),gm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ze(e),null;case 6:if(t&&e.stateNode!=null)j0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Er(io.current),Er(qt.current),fa(e)){if(r=e.stateNode,n=e.memoizedProps,r[zt]=e,(s=r.nodeValue!==n)&&(t=yt,t!==null))switch(t.tag){case 3:da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=e,e.stateNode=r}return ze(e),null;case 13:if(oe(ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(le&&mt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)o0(),Ni(),e.flags|=98560,s=!1;else if(s=fa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[zt]=e}else Ni(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ze(e),s=!1}else Lt!==null&&(Qh(Lt),Lt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ce.current&1)!==0?Ie===0&&(Ie=3):Tf())),e.updateQueue!==null&&(e.flags|=4),ze(e),null);case 4:return Di(),zh(t,e),t===null&&eo(e.stateNode.containerInfo),ze(e),null;case 10:return sf(e.type._context),ze(e),null;case 17:return ct(e.type)&&sl(),ze(e),null;case 19:if(oe(ce),s=e.memoizedState,s===null)return ze(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ys(s,!1);else{if(Ie!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=dl(t),o!==null){for(e.flags|=128,ys(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(ce,ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&ye()>Oi&&(e.flags|=128,r=!0,ys(s,!1),e.lanes=4194304)}else{if(!r)if(t=dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!le)return ze(e),null}else 2*ye()-s.renderingStartTime>Oi&&n!==1073741824&&(e.flags|=128,r=!0,ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ye(),e.sibling=null,n=ce.current,ne(ce,r?n&1|2:n&1),e):(ze(e),null);case 22:case 23:return Ef(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(pt&1073741824)!==0&&(ze(e),e.subtreeFlags&6&&(e.flags|=8192)):ze(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function pk(t,e){switch(ef(e),e.tag){case 1:return ct(e.type)&&sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Di(),oe(ut),oe(Qe),cf(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return uf(e),null;case 13:if(oe(ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return oe(ce),null;case 4:return Di(),null;case 10:return sf(e.type._context),null;case 22:case 23:return Ef(),null;case 24:return null;default:return null}}var ga=!1,je=!1,mk=typeof WeakSet=="function"?WeakSet:Set,D=null;function fi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(t,e,r)}else n.current=null}function Bh(t,e,n){try{n()}catch(r){pe(t,e,r)}}var sg=!1;function gk(t,e){if(Ih=tl,t=Kv(),Jd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ch={focusedElem:t,selectionRange:n},tl=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,E=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Pt(e.type,v),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){pe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return y=sg,sg=!1,y}function Ms(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Bh(e,n,s)}i=i.next}while(i!==r)}}function tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function H0(t){var e=t.alternate;e!==null&&(t.alternate=null,H0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zt],delete e[no],delete e[Nh],delete e[JS],delete e[ZS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function q0(t){return t.tag===5||t.tag===3||t.tag===4}function og(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=il));else if(r!==4&&(t=t.child,t!==null))for(Hh(t,e,n),t=t.sibling;t!==null;)Hh(t,e,n),t=t.sibling}function qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qh(t,e,n),t=t.sibling;t!==null;)qh(t,e,n),t=t.sibling}var Le=null,Ot=!1;function Cn(t,e,n){for(n=n.child;n!==null;)W0(t,e,n),n=n.sibling}function W0(t,e,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Kl,n)}catch{}switch(n.tag){case 5:je||fi(n,e);case 6:var r=Le,i=Ot;Le=null,Cn(t,e,n),Le=r,Ot=i,Le!==null&&(Ot?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Ot?(t=Le,n=n.stateNode,t.nodeType===8?Tc(t.parentNode,n):t.nodeType===1&&Tc(t,n),Ys(t)):Tc(Le,n.stateNode));break;case 4:r=Le,i=Ot,Le=n.stateNode.containerInfo,Ot=!0,Cn(t,e,n),Le=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Bh(n,e,o),i=i.next}while(i!==r)}Cn(t,e,n);break;case 1:if(!je&&(fi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){pe(n,e,a)}Cn(t,e,n);break;case 21:Cn(t,e,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Cn(t,e,n),je=r):Cn(t,e,n);break;default:Cn(t,e,n)}}function ag(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mk),e.forEach(function(r){var i=Ik.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Le=a.stateNode,Ot=!1;break e;case 3:Le=a.stateNode.containerInfo,Ot=!0;break e;case 4:Le=a.stateNode.containerInfo,Ot=!0;break e}a=a.return}if(Le===null)throw Error(S(160));W0(s,o,i),Le=null,Ot=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){pe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)K0(e,t),e=e.sibling}function K0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),Ft(t),r&4){try{Ms(3,t,t.return),tu(3,t)}catch(v){pe(t,t.return,v)}try{Ms(5,t,t.return)}catch(v){pe(t,t.return,v)}}break;case 1:Dt(e,t),Ft(t),r&512&&n!==null&&fi(n,n.return);break;case 5:if(Dt(e,t),Ft(t),r&512&&n!==null&&fi(n,n.return),t.flags&32){var i=t.stateNode;try{Ks(i,"")}catch(v){pe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&pv(i,s),mh(a,o);var u=mh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?wv(i,h):c==="dangerouslySetInnerHTML"?yv(i,h):c==="children"?Ks(i,h):Fd(i,c,h,u)}switch(a){case"input":ch(i,s);break;case"textarea":mv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?gi(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?gi(i,!!s.multiple,s.defaultValue,!0):gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[no]=s}catch(v){pe(t,t.return,v)}}break;case 6:if(Dt(e,t),Ft(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){pe(t,t.return,v)}}break;case 3:if(Dt(e,t),Ft(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ys(e.containerInfo)}catch(v){pe(t,t.return,v)}break;case 4:Dt(e,t),Ft(t);break;case 13:Dt(e,t),Ft(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wf=ye())),r&4&&ag(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(je=(u=je)||c,Dt(e,t),je=u):Dt(e,t),Ft(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(D=t,c=t.child;c!==null;){for(h=D=c;D!==null;){switch(d=D,g=d.child,d.tag){case 0:case 11:case 14:case 15:Ms(4,d,d.return);break;case 1:fi(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){pe(r,n,v)}}break;case 5:fi(d,d.return);break;case 22:if(d.memoizedState!==null){ug(h);continue}}g!==null?(g.return=d,D=g):ug(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=vv("display",o))}catch(v){pe(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){pe(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Dt(e,t),Ft(t),r&4&&ag(t);break;case 21:break;default:Dt(e,t),Ft(t)}}function Ft(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(q0(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ks(i,""),r.flags&=-33);var s=og(t);qh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=og(t);Hh(t,a,o);break;default:throw Error(S(161))}}catch(l){pe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yk(t,e,n){D=t,G0(t)}function G0(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ga;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||je;a=ga;var u=je;if(ga=o,(je=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?cg(i):l!==null?(l.return=o,D=l):cg(i);for(;s!==null;)D=s,G0(s),s=s.sibling;D=i,ga=a,je=u}lg(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,D=s):lg(t)}}function lg(t){for(;D!==null;){var e=D;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:je||tu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ys(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}je||e.flags&512&&jh(e)}catch(d){pe(e,e.return,d)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function ug(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function cg(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tu(4,e)}catch(l){pe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){pe(e,i,l)}}var s=e.return;try{jh(e)}catch(l){pe(e,s,l)}break;case 5:var o=e.return;try{jh(e)}catch(l){pe(e,o,l)}}}catch(l){pe(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var vk=Math.ceil,ml=Sn.ReactCurrentDispatcher,yf=Sn.ReactCurrentOwner,It=Sn.ReactCurrentBatchConfig,X=0,Pe=null,_e=null,Ue=0,pt=0,pi=ir(0),Ie=0,lo=null,br=0,nu=0,vf=0,$s=null,ot=null,wf=0,Oi=1/0,en=null,gl=!1,Wh=null,Hn=null,ya=!1,Mn=null,yl=0,Fs=0,Kh=null,$a=-1,Fa=0;function nt(){return(X&6)!==0?ye():$a!==-1?$a:$a=ye()}function qn(t){return(t.mode&1)===0?1:(X&2)!==0&&Ue!==0?Ue&-Ue:tk.transition!==null?(Fa===0&&(Fa=Dv()),Fa):(t=ee,t!==0||(t=window.event,t=t===void 0?16:$v(t.type)),t)}function Ut(t,e,n,r){if(50<Fs)throw Fs=0,Kh=null,Error(S(185));Co(t,n,r),((X&2)===0||t!==Pe)&&(t===Pe&&((X&2)===0&&(nu|=n),Ie===4&&Dn(t,Ue)),ht(t,r),n===1&&X===0&&(e.mode&1)===0&&(Oi=ye()+500,Jl&&sr()))}function ht(t,e){var n=t.callbackNode;tS(t,e);var r=el(t,t===Pe?Ue:0);if(r===0)n!==null&&wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wm(n),e===1)t.tag===0?ek(hg.bind(null,t)):r0(hg.bind(null,t)),XS(function(){(X&6)===0&&sr()}),n=null;else{switch(Pv(r)){case 1:n=Hd;break;case 4:n=Nv;break;case 16:n=Za;break;case 536870912:n=Av;break;default:n=Za}n=nw(n,Q0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Q0(t,e){if($a=-1,Fa=0,(X&6)!==0)throw Error(S(327));var n=t.callbackNode;if(Ei()&&t.callbackNode!==n)return null;var r=el(t,t===Pe?Ue:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=vl(t,r);else{e=r;var i=X;X|=2;var s=Y0();(Pe!==t||Ue!==e)&&(en=null,Oi=ye()+500,Cr(t,e));do try{Ek();break}catch(a){X0(t,a)}while(1);rf(),ml.current=s,X=i,_e!==null?e=0:(Pe=null,Ue=0,e=Ie)}if(e!==0){if(e===2&&(i=_h(t),i!==0&&(r=i,e=Gh(t,i))),e===1)throw n=lo,Cr(t,0),Dn(t,r),ht(t,ye()),n;if(e===6)Dn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!wk(i)&&(e=vl(t,r),e===2&&(s=_h(t),s!==0&&(r=s,e=Gh(t,s))),e===1))throw n=lo,Cr(t,0),Dn(t,r),ht(t,ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:yr(t,ot,en);break;case 3:if(Dn(t,r),(r&130023424)===r&&(e=wf+500-ye(),10<e)){if(el(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xh(yr.bind(null,t,ot,en),e);break}yr(t,ot,en);break;case 4:if(Dn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vk(r/1960))-r,10<r){t.timeoutHandle=xh(yr.bind(null,t,ot,en),r);break}yr(t,ot,en);break;case 5:yr(t,ot,en);break;default:throw Error(S(329))}}}return ht(t,ye()),t.callbackNode===n?Q0.bind(null,t):null}function Gh(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=vl(t,e),t!==2&&(e=ot,ot=n,e!==null&&Qh(e)),t}function Qh(t){ot===null?ot=t:ot.push.apply(ot,t)}function wk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Mt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dn(t,e){for(e&=~vf,e&=~nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bt(e),r=1<<n;t[n]=-1,e&=~r}}function hg(t){if((X&6)!==0)throw Error(S(327));Ei();var e=el(t,0);if((e&1)===0)return ht(t,ye()),null;var n=vl(t,e);if(t.tag!==0&&n===2){var r=_h(t);r!==0&&(e=r,n=Gh(t,r))}if(n===1)throw n=lo,Cr(t,0),Dn(t,e),ht(t,ye()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,ot,en),ht(t,ye()),null}function _f(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(Oi=ye()+500,Jl&&sr())}}function Ur(t){Mn!==null&&Mn.tag===0&&(X&6)===0&&Ei();var e=X;X|=1;var n=It.transition,r=ee;try{if(It.transition=null,ee=1,t)return t()}finally{ee=r,It.transition=n,X=e,(X&6)===0&&sr()}}function Ef(){pt=pi.current,oe(pi)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QS(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(ef(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sl();break;case 3:Di(),oe(ut),oe(Qe),cf();break;case 5:uf(r);break;case 4:Di();break;case 13:oe(ce);break;case 19:oe(ce);break;case 10:sf(r.type._context);break;case 22:case 23:Ef()}n=n.return}if(Pe=t,_e=t=Wn(t.current,null),Ue=pt=e,Ie=0,lo=null,vf=nu=br=0,ot=$s=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}_r=null}return t}function X0(t,e){do{var n=_e;try{if(rf(),ba.current=pl,fl){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fl=!1}if(Lr=0,De=ke=he=null,Us=!1,so=0,yf.current=null,n===null||n.return===null){Ie=1,lo=e,_e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Jm(o);if(g!==null){g.flags&=-257,Zm(g,o,a,s,e),g.mode&1&&Ym(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if((e&1)===0){Ym(s,u,e),Tf();break e}l=Error(S(426))}}else if(le&&a.mode&1){var E=Jm(o);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),Zm(E,o,a,s,e),tf(Pi(l,a));break e}}s=l=Pi(l,a),Ie!==4&&(Ie=2),$s===null?$s=[s]:$s.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=O0(s,l,e);Hm(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Hn===null||!Hn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=L0(s,a,e);Hm(s,w);break e}}s=s.return}while(s!==null)}Z0(n)}catch(I){e=I,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(1)}function Y0(){var t=ml.current;return ml.current=pl,t===null?pl:t}function Tf(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Pe===null||(br&268435455)===0&&(nu&268435455)===0||Dn(Pe,Ue)}function vl(t,e){var n=X;X|=2;var r=Y0();(Pe!==t||Ue!==e)&&(en=null,Cr(t,e));do try{_k();break}catch(i){X0(t,i)}while(1);if(rf(),X=n,ml.current=r,_e!==null)throw Error(S(261));return Pe=null,Ue=0,Ie}function _k(){for(;_e!==null;)J0(_e)}function Ek(){for(;_e!==null&&!WT();)J0(_e)}function J0(t){var e=tw(t.alternate,t,pt);t.memoizedProps=t.pendingProps,e===null?Z0(t):_e=e,yf.current=null}function Z0(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=fk(n,e,pt),n!==null){_e=n;return}}else{if(n=pk(n,e),n!==null){n.flags&=32767,_e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ie=6,_e=null;return}}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);Ie===0&&(Ie=5)}function yr(t,e,n){var r=ee,i=It.transition;try{It.transition=null,ee=1,Tk(t,e,n,r)}finally{It.transition=i,ee=r}return null}function Tk(t,e,n,r){do Ei();while(Mn!==null);if((X&6)!==0)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nS(t,s),t===Pe&&(_e=Pe=null,Ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ya||(ya=!0,nw(Za,function(){return Ei(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=It.transition,It.transition=null;var o=ee;ee=1;var a=X;X|=4,yf.current=null,gk(t,n),K0(n,t),BS(Ch),tl=!!Ih,Ch=Ih=null,t.current=n,yk(n),KT(),X=a,ee=o,It.transition=s}else t.current=n;if(ya&&(ya=!1,Mn=t,yl=i),s=t.pendingLanes,s===0&&(Hn=null),XT(n.stateNode),ht(t,ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gl)throw gl=!1,t=Wh,Wh=null,t;return(yl&1)!==0&&t.tag!==0&&Ei(),s=t.pendingLanes,(s&1)!==0?t===Kh?Fs++:(Fs=0,Kh=t):Fs=0,sr(),null}function Ei(){if(Mn!==null){var t=Pv(yl),e=It.transition,n=ee;try{if(It.transition=null,ee=16>t?16:t,Mn===null)var r=!1;else{if(t=Mn,Mn=null,yl=0,(X&6)!==0)throw Error(S(331));var i=X;for(X|=4,D=t.current;D!==null;){var s=D,o=s.child;if((D.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:Ms(8,c,s)}var h=c.child;if(h!==null)h.return=c,D=h;else for(;D!==null;){c=D;var d=c.sibling,g=c.return;if(H0(c),c===u){D=null;break}if(d!==null){d.return=g,D=d;break}D=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}D=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ms(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,D=p;break e}D=s.return}}var f=t.current;for(D=f;D!==null;){o=D;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,D=m;else e:for(o=f;D!==null;){if(a=D,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:tu(9,a)}}catch(I){pe(a,a.return,I)}if(a===o){D=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,D=w;break e}D=a.return}}if(X=i,sr(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Kl,t)}catch{}r=!0}return r}finally{ee=n,It.transition=e}}return!1}function dg(t,e,n){e=Pi(n,e),e=O0(t,e,1),t=jn(t,e,1),e=nt(),t!==null&&(Co(t,1,e),ht(t,e))}function pe(t,e,n){if(t.tag===3)dg(t,t,n);else for(;e!==null;){if(e.tag===3){dg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){t=Pi(n,t),t=L0(e,t,1),e=jn(e,t,1),t=nt(),e!==null&&(Co(e,1,t),ht(e,t));break}}e=e.return}}function Sk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=nt(),t.pingedLanes|=t.suspendedLanes&n,Pe===t&&(Ue&n)===n&&(Ie===4||Ie===3&&(Ue&130023424)===Ue&&500>ye()-wf?Cr(t,0):vf|=n),ht(t,e)}function ew(t,e){e===0&&((t.mode&1)===0?e=1:(e=aa,aa<<=1,(aa&130023424)===0&&(aa=4194304)));var n=nt();t=mn(t,e),t!==null&&(Co(t,e,n),ht(t,n))}function kk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ew(t,n)}function Ik(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),ew(t,n)}var tw;tw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ut.current)lt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return lt=!1,dk(t,e,n);lt=(t.flags&131072)!==0}else lt=!1,le&&(e.flags&1048576)!==0&&i0(e,ll,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ma(t,e),t=e.pendingProps;var i=xi(e,Qe.current);_i(e,n),i=df(null,e,r,t,i,n);var s=ff();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ct(r)?(s=!0,ol(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,af(e),i.updater=Zl,e.stateNode=i,i._reactInternals=e,bh(e,r,t,n),e=$h(null,e,r,!0,s,n)):(e.tag=0,le&&s&&Zd(e),Ze(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ma(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Rk(r),t=Pt(r,t),i){case 0:e=Mh(null,e,r,t,n);break e;case 1:e=ng(null,e,r,t,n);break e;case 11:e=eg(null,e,r,t,n);break e;case 14:e=tg(null,e,r,Pt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Mh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),ng(t,e,r,i,n);case 3:e:{if($0(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,l0(t,e),hl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Pi(Error(S(423)),e),e=rg(t,e,r,n,i);break e}else if(r!==i){i=Pi(Error(S(424)),e),e=rg(t,e,r,n,i);break e}else for(mt=Bn(e.stateNode.containerInfo.firstChild),yt=e,le=!0,Lt=null,n=d0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ni(),r===i){e=gn(t,e,n);break e}Ze(t,e,r,n)}e=e.child}return e;case 5:return f0(e),t===null&&Ph(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rh(r,i)?o=null:s!==null&&Rh(r,s)&&(e.flags|=32),M0(t,e),Ze(t,e,o,n),e.child;case 6:return t===null&&Ph(e),null;case 13:return F0(t,e,n);case 4:return lf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ai(e,null,r,n):Ze(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),eg(t,e,r,i,n);case 7:return Ze(t,e,e.pendingProps,n),e.child;case 8:return Ze(t,e,e.pendingProps.children,n),e.child;case 12:return Ze(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ne(ul,r._currentValue),r._currentValue=o,s!==null)if(Mt(s.value,o)){if(s.children===i.children&&!ut.current){e=gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=hn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Oh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Oh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ze(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_i(e,n),i=Rt(i),r=r(i),e.flags|=1,Ze(t,e,r,n),e.child;case 14:return r=e.type,i=Pt(r,e.pendingProps),i=Pt(r.type,i),tg(t,e,r,i,n);case 15:return b0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Ma(t,e),e.tag=1,ct(r)?(t=!0,ol(e)):t=!1,_i(e,n),c0(e,r,i),bh(e,r,i,n),$h(null,e,r,!0,t,n);case 19:return V0(t,e,n);case 22:return U0(t,e,n)}throw Error(S(156,e.tag))};function nw(t,e){return xv(t,e)}function Ck(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(t,e,n,r){return new Ck(t,e,n,r)}function Sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rk(t){if(typeof t=="function")return Sf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zd)return 11;if(t===Bd)return 14}return 2}function Wn(t,e){var n=t.alternate;return n===null?(n=kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Va(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Sf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ii:return Rr(n.children,i,s,e);case Vd:o=8,i|=8;break;case sh:return t=kt(12,n,e,i|2),t.elementType=sh,t.lanes=s,t;case oh:return t=kt(13,n,e,i),t.elementType=oh,t.lanes=s,t;case ah:return t=kt(19,n,e,i),t.elementType=ah,t.lanes=s,t;case hv:return ru(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uv:o=10;break e;case cv:o=9;break e;case zd:o=11;break e;case Bd:o=14;break e;case xn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rr(t,e,n,r){return t=kt(7,t,r,e),t.lanes=n,t}function ru(t,e,n,r){return t=kt(22,t,r,e),t.elementType=hv,t.lanes=n,t.stateNode={isHidden:!1},t}function Ac(t,e,n){return t=kt(6,t,null,e),t.lanes=n,t}function Dc(t,e,n){return e=kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hc(0),this.expirationTimes=hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function kf(t,e,n,r,i,s,o,a,l){return t=new xk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},af(s),t}function Nk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function rw(t){if(!t)return Jn;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(ct(n))return n0(t,n,e)}return e}function iw(t,e,n,r,i,s,o,a,l){return t=kf(n,r,!0,t,i,s,o,a,l),t.context=rw(null),n=t.current,r=nt(),i=qn(n),s=hn(r,i),s.callback=e!=null?e:null,jn(n,s,i),t.current.lanes=i,Co(t,i,r),ht(t,r),t}function iu(t,e,n,r){var i=e.current,s=nt(),o=qn(i);return n=rw(n),e.context===null?e.context=n:e.pendingContext=n,e=hn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=jn(i,e,o),t!==null&&(Ut(t,i,o,s),La(t,i,o)),o}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function If(t,e){fg(t,e),(t=t.alternate)&&fg(t,e)}function Ak(){return null}var sw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cf(t){this._internalRoot=t}su.prototype.render=Cf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));iu(t,e,null,null)};su.prototype.unmount=Cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){iu(null,t,null,null)}),e[pn]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var e=bv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<An.length&&e!==0&&e<An[n].priority;n++);An.splice(n,0,t),n===0&&Mv(t)}};function Rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pg(){}function Dk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=wl(o);s.call(u)}}var o=iw(e,r,t,0,null,!1,!1,"",pg);return t._reactRootContainer=o,t[pn]=o.current,eo(t.nodeType===8?t.parentNode:t),Ur(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=wl(l);a.call(u)}}var l=kf(t,0,!1,null,null,!1,!1,"",pg);return t._reactRootContainer=l,t[pn]=l.current,eo(t.nodeType===8?t.parentNode:t),Ur(function(){iu(e,l,n,r)}),l}function au(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=wl(o);a.call(l)}}iu(e,o,t,i)}else o=Dk(n,e,t,i,r);return wl(o)}Ov=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ss(e.pendingLanes);n!==0&&(qd(e,n|1),ht(e,ye()),(X&6)===0&&(Oi=ye()+500,sr()))}break;case 13:Ur(function(){var r=mn(t,1);if(r!==null){var i=nt();Ut(r,t,1,i)}}),If(t,1)}};Wd=function(t){if(t.tag===13){var e=mn(t,134217728);if(e!==null){var n=nt();Ut(e,t,134217728,n)}If(t,134217728)}};Lv=function(t){if(t.tag===13){var e=qn(t),n=mn(t,e);if(n!==null){var r=nt();Ut(n,t,e,r)}If(t,e)}};bv=function(){return ee};Uv=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};yh=function(t,e,n){switch(e){case"input":if(ch(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yl(r);if(!i)throw Error(S(90));fv(r),ch(r,i)}}}break;case"textarea":mv(t,n);break;case"select":e=n.value,e!=null&&gi(t,!!n.multiple,e,!1)}};Tv=_f;Sv=Ur;var Pk={usingClientEntryPoint:!1,Events:[xo,li,Yl,_v,Ev,_f]},vs={findFiberByHostInstance:wr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ok={bundleType:vs.bundleType,version:vs.version,rendererPackageName:vs.rendererPackageName,rendererConfig:vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cv(t),t===null?null:t.stateNode},findFiberByHostInstance:vs.findFiberByHostInstance||Ak,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!va.isDisabled&&va.supportsFiber)try{Kl=va.inject(Ok),Ht=va}catch{}}_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pk;_t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rf(e))throw Error(S(200));return Nk(t,e,null,n)};_t.createRoot=function(t,e){if(!Rf(t))throw Error(S(299));var n=!1,r="",i=sw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=kf(t,1,!1,null,null,n,!1,r,i),t[pn]=e.current,eo(t.nodeType===8?t.parentNode:t),new Cf(e)};_t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Cv(e),t=t===null?null:t.stateNode,t};_t.flushSync=function(t){return Ur(t)};_t.hydrate=function(t,e,n){if(!ou(e))throw Error(S(200));return au(null,t,e,!0,n)};_t.hydrateRoot=function(t,e,n){if(!Rf(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=sw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=iw(e,null,t,1,n!=null?n:null,i,!1,s,o),t[pn]=e.current,eo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new su(e)};_t.render=function(t,e,n){if(!ou(e))throw Error(S(200));return au(null,t,e,!1,n)};_t.unmountComponentAtNode=function(t){if(!ou(t))throw Error(S(40));return t._reactRootContainer?(Ur(function(){au(null,null,t,!1,function(){t._reactRootContainer=null,t[pn]=null})}),!0):!1};_t.unstable_batchedUpdates=_f;_t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ou(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return au(t,e,n,!1,r)};_t.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=_t})(iv);var mg=iv.exports;rh.createRoot=mg.createRoot,rh.hydrateRoot=mg.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uo.apply(this,arguments)}var $n;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($n||($n={}));const gg="popstate";function Lk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Xh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_l(i)}return Uk(e,n,null,t)}function Te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function bk(){return Math.random().toString(36).substr(2,8)}function yg(t,e){return{usr:t.state,key:t.key,idx:e}}function Xh(t,e,n,r){return n===void 0&&(n=null),uo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gi(e):e,{state:n,key:e&&e.key||r||bk()})}function _l(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Uk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=$n.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(uo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=$n.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:v.location,delta:p})}function d(E,p){a=$n.Push;let f=Xh(v.location,E,p);n&&n(f,E),u=c()+1;let m=yg(f,u),w=v.createHref(f);try{o.pushState(m,"",w)}catch{i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function g(E,p){a=$n.Replace;let f=Xh(v.location,E,p);n&&n(f,E),u=c();let m=yg(f,u),w=v.createHref(f);o.replaceState(m,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function y(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:_l(E);return Te(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(gg,h),l=E,()=>{i.removeEventListener(gg,h),l=null}},createHref(E){return e(i,E)},createURL:y,encodeLocation(E){let p=y(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:g,go(E){return o.go(E)}};return v}var vg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(vg||(vg={}));function Mk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Gi(e):e,i=xf(r.pathname||"/",n);if(i==null)return null;let s=ow(t);$k(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Kk(s[a],Xk(i));return o}function ow(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Te(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ow(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:qk(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of aw(s.path))i(s,o,l)}),e}function aw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=aw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function $k(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Wk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Fk=/^:\w+$/,Vk=3,zk=2,Bk=1,jk=10,Hk=-2,wg=t=>t==="*";function qk(t,e){let n=t.split("/"),r=n.length;return n.some(wg)&&(r+=Hk),e&&(r+=zk),n.filter(i=>!wg(i)).reduce((i,s)=>i+(Fk.test(s)?Vk:s===""?Bk:jk),r)}function Wk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Kk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Gk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Kn([i,c.pathname]),pathnameBase:eI(Kn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Kn([i,c.pathnameBase]))}return s}function Gk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Qk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=Yk(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Qk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Nf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Xk(t){try{return decodeURI(t)}catch(e){return Nf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Yk(t,e){try{return decodeURIComponent(t)}catch(n){return Nf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function xf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Nf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Jk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gi(t):t;return{pathname:n?n.startsWith("/")?n:Zk(n,e):e,search:tI(r),hash:nI(i)}}function Zk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function uw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gi(t):(i=uo({},t),Te(!i.pathname||!i.pathname.includes("?"),Pc("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),Pc("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),Pc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=Jk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kn=t=>t.join("/").replace(/\/\/+/g,"/"),eI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const iI=["post","put","patch","delete"];[...iI];var lu={exports:{}},uu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sI=C.exports,oI=Symbol.for("react.element"),aI=Symbol.for("react.fragment"),lI=Object.prototype.hasOwnProperty,uI=sI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cI={key:!0,ref:!0,__self:!0,__source:!0};function cw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)lI.call(e,r)&&!cI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:oI,type:t,key:s,ref:o,props:i,_owner:uI.current}}uu.Fragment=aI;uu.jsx=cw;uu.jsxs=cw;(function(t){t.exports=uu})(lu);const hw=lu.exports.Fragment,_=lu.exports.jsx,Q=lu.exports.jsxs;/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yh(){return Yh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yh.apply(this,arguments)}function hI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const dI=typeof Object.is=="function"?Object.is:hI,{useState:fI,useEffect:pI,useLayoutEffect:mI,useDebugValue:gI}=nh;function yI(t,e,n){const r=e(),[{inst:i},s]=fI({inst:{value:r,getSnapshot:e}});return mI(()=>{i.value=r,i.getSnapshot=e,Oc(i)&&s({inst:i})},[t,r,e]),pI(()=>(Oc(i)&&s({inst:i}),t(()=>{Oc(i)&&s({inst:i})})),[t]),gI(r),r}function Oc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!dI(n,r)}catch{return!0}}function vI(t,e,n){return e()}const wI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_I=!wI,EI=_I?vI:yI;"useSyncExternalStore"in nh&&(t=>t.useSyncExternalStore)(nh);const dw=C.exports.createContext(null),cu=C.exports.createContext(null),Qi=C.exports.createContext(null),hu=C.exports.createContext(null),or=C.exports.createContext({outlet:null,matches:[]}),fw=C.exports.createContext(null);function TI(t,e){let{relative:n}=e===void 0?{}:e;Xi()||Te(!1);let{basename:r,navigator:i}=C.exports.useContext(Qi),{hash:s,pathname:o,search:a}=Af(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Xi(){return C.exports.useContext(hu)!=null}function ar(){return Xi()||Te(!1),C.exports.useContext(hu).location}function du(){Xi()||Te(!1);let{basename:t,navigator:e}=C.exports.useContext(Qi),{matches:n}=C.exports.useContext(or),{pathname:r}=ar(),i=JSON.stringify(lw(n).map(a=>a.pathnameBase)),s=C.exports.useRef(!1);return C.exports.useEffect(()=>{s.current=!0}),C.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=uw(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Kn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}const SI=C.exports.createContext(null);function kI(t){let e=C.exports.useContext(or).outlet;return e&&_(SI.Provider,{value:t,children:e})}function CU(){let{matches:t}=C.exports.useContext(or),e=t[t.length-1];return e?e.params:{}}function Af(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=C.exports.useContext(or),{pathname:i}=ar(),s=JSON.stringify(lw(r).map(o=>o.pathnameBase));return C.exports.useMemo(()=>uw(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function II(t,e){Xi()||Te(!1);let{navigator:n}=C.exports.useContext(Qi),r=C.exports.useContext(cu),{matches:i}=C.exports.useContext(or),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ar(),u;if(e){var c;let v=typeof e=="string"?Gi(e):e;a==="/"||((c=v.pathname)==null?void 0:c.startsWith(a))||Te(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",g=Mk(t,{pathname:d}),y=NI(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Kn([a,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Kn([a,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&y?_(hu.Provider,{value:{location:Yh({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:$n.Pop},children:y}):y}function CI(){let t=OI(),e=rI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null;return Q(hw,{children:[_("h2",{children:"Unexpected Application Error!"}),_("h3",{style:{fontStyle:"italic"},children:e}),n?_("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}class RI extends C.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?_(or.Provider,{value:this.props.routeContext,children:_(fw.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function xI(t){let{routeContext:e,match:n,children:r}=t,i=C.exports.useContext(dw);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_(or.Provider,{value:e,children:r})}function NI(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Te(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||_(CI,{}):null,c=e.concat(r.slice(0,a+1)),h=()=>_(xI,{match:o,routeContext:{outlet:s,matches:c},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?_(RI,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var _g;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(_g||(_g={}));var El;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(El||(El={}));function AI(t){let e=C.exports.useContext(cu);return e||Te(!1),e}function DI(t){let e=C.exports.useContext(or);return e||Te(!1),e}function PI(t){let e=DI(),n=e.matches[e.matches.length-1];return n.route.id||Te(!1),n.route.id}function OI(){var t;let e=C.exports.useContext(fw),n=AI(El.UseRouteError),r=PI(El.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function pw(t){let{to:e,replace:n,state:r,relative:i}=t;Xi()||Te(!1);let s=C.exports.useContext(cu),o=du();return C.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function mw(t){return kI(t.context)}function Ne(t){Te(!1)}function LI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=$n.Pop,navigator:s,static:o=!1}=t;Xi()&&Te(!1);let a=e.replace(/^\/*/,"/"),l=C.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Gi(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,y=C.exports.useMemo(()=>{let v=xf(u,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:g}},[a,u,c,h,d,g]);return y==null?null:_(Qi.Provider,{value:l,children:_(hu.Provider,{children:n,value:{location:y,navigationType:i}})})}function bI(t){let{children:e,location:n}=t,r=C.exports.useContext(dw),i=r&&!e?r.router.routes:Jh(e);return II(i,n)}var Eg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Eg||(Eg={}));new Promise(()=>{});function Jh(t,e){e===void 0&&(e=[]);let n=[];return C.exports.Children.forEach(t,(r,i)=>{if(!C.exports.isValidElement(r))return;if(r.type===C.exports.Fragment){n.push.apply(n,Jh(r.props.children,e));return}r.type!==Ne&&Te(!1),!r.props.index||!r.props.children||Te(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Jh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function UI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function MI(t,e){return t.button===0&&(!e||e==="_self")&&!UI(t)}function Zh(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function $I(t,e){let n=Zh(t);if(e)for(let r of e.keys())n.has(r)||e.getAll(r).forEach(i=>{n.append(r,i)});return n}const FI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],VI=["aria-current","caseSensitive","className","end","style","to","children"];function zI(t){let{basename:e,children:n,window:r}=t,i=C.exports.useRef();i.current==null&&(i.current=Lk({window:r,v5Compat:!0}));let s=i.current,[o,a]=C.exports.useState({action:s.action,location:s.location});return C.exports.useLayoutEffect(()=>s.listen(a),[s]),_(LI,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const BI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yw=C.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=gw(e,FI),{basename:d}=C.exports.useContext(Qi),g,y=!1;if(typeof u=="string"&&jI.test(u)&&(g=u,BI)){let f=new URL(window.location.href),m=u.startsWith("//")?new URL(f.protocol+u):new URL(u),w=xf(m.pathname,d);m.origin===f.origin&&w!=null?u=w+m.search+m.hash:y=!0}let v=TI(u,{relative:i}),E=HI(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||E(f)}return _("a",{...h,href:g||v,onClick:y||s?r:p,ref:n,target:l})}),za=C.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=gw(e,VI),h=Af(l,{relative:c.relative}),d=ar(),g=C.exports.useContext(cu),{navigator:y}=C.exports.useContext(Qi),v=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,E=d.pathname,p=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(E=E.toLowerCase(),p=p?p.toLowerCase():null,v=v.toLowerCase());let f=E===v||!o&&E.startsWith(v)&&E.charAt(v.length)==="/",m=p!=null&&(p===v||!o&&p.startsWith(v)&&p.charAt(v.length)==="/"),w=f?r:void 0,I;typeof s=="function"?I=s({isActive:f,isPending:m}):I=[s,f?"active":null,m?"pending":null].filter(Boolean).join(" ");let x=typeof a=="function"?a({isActive:f,isPending:m}):a;return _(yw,{...c,"aria-current":w,className:I,ref:n,style:x,to:l,children:typeof u=="function"?u({isActive:f,isPending:m}):u})});var Tg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Tg||(Tg={}));var Sg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Sg||(Sg={}));function HI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=du(),l=ar(),u=Af(t,{relative:o});return C.exports.useCallback(c=>{if(MI(c,n)){c.preventDefault();let h=r!==void 0?r:_l(l)===_l(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function RU(t){let e=C.exports.useRef(Zh(t)),n=C.exports.useRef(!1),r=ar(),i=C.exports.useMemo(()=>$I(r.search,n.current?null:e.current),[r.search]),s=du(),o=C.exports.useCallback((a,l)=>{const u=Zh(typeof a=="function"?a(i):a);n.current=!0,s("?"+u,l)},[s,i]);return[i,o]}var R={exports:{}},qI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",WI=qI,KI=WI;function vw(){}function ww(){}ww.resetWarningCache=vw;var GI=function(){function t(r,i,s,o,a,l){if(l!==KI){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ww,resetWarningCache:vw};return n.PropTypes=n,n};R.exports=GI();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ew={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_w(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new XI;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YI=function(t){const e=_w(t);return Ew.encodeByteArray(e,!0)},Tl=function(t){return YI(t).replace(/\./g,"")},Tw=function(t){try{return Ew.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=()=>JI().__FIREBASE_DEFAULTS__,eC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tw(t[1]);return e&&JSON.parse(e)},fu=()=>{try{return ZI()||eC()||tC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sw=t=>{var e,n;return(n=(e=fu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kw=t=>{const e=Sw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nC=()=>{var t;return(t=fu())===null||t===void 0?void 0:t.config},Iw=t=>{var e;return(e=fu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Tl(JSON.stringify(n)),Tl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function sC(){var t;const e=(t=fu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lC(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uC(){try{return typeof indexedDB=="object"}catch{return!1}}function cC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hC,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ao.prototype.create)}}class Ao{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,a,r)}}function dC(t,e){return t.replace(fC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fC=/\{\$([^}]+)}/g;function pC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(kg(s)&&kg(o)){if(!Sl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Is(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Cs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mC(t,e){const n=new gC(t,e);return n.subscribe.bind(n)}class gC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Lc),i.error===void 0&&(i.error=Lc),i.complete===void 0&&(i.complete=Lc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_C(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wC(t){return t===vr?void 0:t}function _C(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const TC={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},SC=Y.INFO,kC={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},IC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Df{constructor(e){this.name=e,this._logLevel=SC,this._logHandler=IC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const CC=(t,e)=>e.some(n=>t instanceof n);let Ig,Cg;function RC(){return Ig||(Ig=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xC(){return Cg||(Cg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rw=new WeakMap,ed=new WeakMap,xw=new WeakMap,bc=new WeakMap,Pf=new WeakMap;function NC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rw.set(n,t)}).catch(()=>{}),Pf.set(e,t),e}function AC(t){if(ed.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ed.set(t,e)}let td={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ed.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DC(t){td=t(td)}function PC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Uc(this),e,...n);return xw.set(r,e.sort?e.sort():[e]),Gn(r)}:xC().includes(t)?function(...e){return t.apply(Uc(this),e),Gn(Rw.get(this))}:function(...e){return Gn(t.apply(Uc(this),e))}}function OC(t){return typeof t=="function"?PC(t):(t instanceof IDBTransaction&&AC(t),CC(t,RC())?new Proxy(t,td):t)}function Gn(t){if(t instanceof IDBRequest)return NC(t);if(bc.has(t))return bc.get(t);const e=OC(t);return e!==t&&(bc.set(t,e),Pf.set(e,t)),e}const Uc=t=>Pf.get(t);function LC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Gn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gn(o.result),l.oldVersion,l.newVersion,Gn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const bC=["get","getKey","getAll","getAllKeys","count"],UC=["put","add","delete","clear"],Mc=new Map;function Rg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mc.get(e))return Mc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=UC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Mc.set(e,s),s}DC(t=>({...t,get:(e,n,r)=>Rg(e,n)||t.get(e,n,r),has:(e,n)=>!!Rg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($C(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $C(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nd="@firebase/app",xg="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Df("@firebase/app"),FC="@firebase/app-compat",VC="@firebase/analytics-compat",zC="@firebase/analytics",BC="@firebase/app-check-compat",jC="@firebase/app-check",HC="@firebase/auth",qC="@firebase/auth-compat",WC="@firebase/database",KC="@firebase/database-compat",GC="@firebase/functions",QC="@firebase/functions-compat",XC="@firebase/installations",YC="@firebase/installations-compat",JC="@firebase/messaging",ZC="@firebase/messaging-compat",eR="@firebase/performance",tR="@firebase/performance-compat",nR="@firebase/remote-config",rR="@firebase/remote-config-compat",iR="@firebase/storage",sR="@firebase/storage-compat",oR="@firebase/firestore",aR="@firebase/firestore-compat",lR="firebase",uR="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="[DEFAULT]",cR={[nd]:"fire-core",[FC]:"fire-core-compat",[zC]:"fire-analytics",[VC]:"fire-analytics-compat",[jC]:"fire-app-check",[BC]:"fire-app-check-compat",[HC]:"fire-auth",[qC]:"fire-auth-compat",[WC]:"fire-rtdb",[KC]:"fire-rtdb-compat",[GC]:"fire-fn",[QC]:"fire-fn-compat",[XC]:"fire-iid",[YC]:"fire-iid-compat",[JC]:"fire-fcm",[ZC]:"fire-fcm-compat",[eR]:"fire-perf",[tR]:"fire-perf-compat",[nR]:"fire-rc",[rR]:"fire-rc-compat",[iR]:"fire-gcs",[sR]:"fire-gcs-compat",[oR]:"fire-fst",[aR]:"fire-fst-compat","fire-js":"fire-js",[lR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=new Map,id=new Map;function hR(t,e){try{t.container.addComponent(e)}catch(n){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $r(t){const e=t.name;if(id.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;id.set(e,t);for(const n of kl.values())hR(n,t);return!0}function pu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qn=new Ao("app","Firebase",dR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=uR;function Nw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:rd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(n||(n=nC()),!n)throw Qn.create("no-options");const s=kl.get(i);if(s){if(Sl(n,s.options)&&Sl(r,s.config))return s;throw Qn.create("duplicate-app",{appName:i})}const o=new EC(i);for(const l of id.values())o.addComponent(l);const a=new fR(n,r,o);return kl.set(i,a),a}function Of(t=rd){const e=kl.get(t);if(!e&&t===rd)return Nw();if(!e)throw Qn.create("no-app",{appName:t});return e}function Wt(t,e,n){var r;let i=(r=cR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(a.join(" "));return}$r(new Zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="firebase-heartbeat-database",mR=1,co="firebase-heartbeat-store";let $c=null;function Aw(){return $c||($c=LC(pR,mR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(co)}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),$c}async function gR(t){try{return(await Aw()).transaction(co).objectStore(co).get(Dw(t))}catch(e){if(e instanceof Jt)Mr.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(n.message)}}}async function Ng(t,e){try{const r=(await Aw()).transaction(co,"readwrite");return await r.objectStore(co).put(e,Dw(t)),r.done}catch(n){if(n instanceof Jt)Mr.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mr.warn(r.message)}}}function Dw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=1024,vR=30*24*60*60*1e3;class wR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ER(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ag();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=vR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ag(),{heartbeatsToSend:n,unsentEntries:r}=_R(this._heartbeatsCache.heartbeats),i=Tl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ag(){return new Date().toISOString().substring(0,10)}function _R(t,e=yR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ER{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uC()?cC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dg(t){return Tl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t){$r(new Zn("platform-logger",e=>new MC(e),"PRIVATE")),$r(new Zn("heartbeat",e=>new wR(e),"PRIVATE")),Wt(nd,xg,t),Wt(nd,xg,"esm2017"),Wt("fire-js","")}TR("");var SR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Lf=Lf||{},F=SR||self;function Il(){}function mu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Po(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function kR(t){return Object.prototype.hasOwnProperty.call(t,Fc)&&t[Fc]||(t[Fc]=++IR)}var Fc="closure_uid_"+(1e9*Math.random()>>>0),IR=0;function CR(t,e,n){return t.call.apply(t.bind,arguments)}function RR(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function We(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?We=CR:We=RR,We.apply(null,arguments)}function wa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Fe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function lr(){this.s=this.s,this.o=this.o}var xR=0;lr.prototype.s=!1;lr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),xR!=0)&&kR(this)};lr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Pw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function bf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Pg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(mu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var NR=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",Il,e),F.removeEventListener("test",Il,e)}catch{}return t}();function Cl(t){return/^[\s\xa0]*$/.test(t)}var Og=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Vc(t,e){return t<e?-1:t>e?1:0}function gu(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function Bt(t){return gu().indexOf(t)!=-1}function Uf(t){return Uf[" "](t),t}Uf[" "]=Il;function AR(t){var e=OR;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var DR=Bt("Opera"),Li=Bt("Trident")||Bt("MSIE"),Ow=Bt("Edge"),sd=Ow||Li,Lw=Bt("Gecko")&&!(gu().toLowerCase().indexOf("webkit")!=-1&&!Bt("Edge"))&&!(Bt("Trident")||Bt("MSIE"))&&!Bt("Edge"),PR=gu().toLowerCase().indexOf("webkit")!=-1&&!Bt("Edge");function bw(){var t=F.document;return t?t.documentMode:void 0}var Rl;e:{var zc="",Bc=function(){var t=gu();if(Lw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ow)return/Edge\/([\d\.]+)/.exec(t);if(Li)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(PR)return/WebKit\/(\S+)/.exec(t);if(DR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bc&&(zc=Bc?Bc[1]:""),Li){var jc=bw();if(jc!=null&&jc>parseFloat(zc)){Rl=String(jc);break e}}Rl=zc}var OR={};function LR(){return AR(function(){let t=0;const e=Og(String(Rl)).split("."),n=Og("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Vc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Vc(i[2].length==0,s[2].length==0)||Vc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var od;if(F.document&&Li){var Lg=bw();od=Lg||parseInt(Rl,10)||void 0}else od=void 0;var bR=od;function ho(t,e){if(Ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Lw){e:{try{Uf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:UR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ho.X.h.call(this)}}Fe(ho,Ke);var UR={2:"touch",3:"pen",4:"mouse"};ho.prototype.h=function(){ho.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Oo="closure_listenable_"+(1e6*Math.random()|0),MR=0;function $R(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++MR,this.ba=this.ea=!1}function yu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Mf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Uw(t){const e={};for(const n in t)e[n]=t[n];return e}const bg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<bg.length;s++)n=bg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function vu(t){this.src=t,this.g={},this.h=0}vu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ld(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new $R(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function ad(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Pw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(yu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ld(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var $f="closure_lm_"+(1e6*Math.random()|0),Hc={};function $w(t,e,n,r,i){if(r&&r.once)return Vw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$w(t,e[s],n,r,i);return null}return n=zf(n),t&&t[Oo]?t.N(e,n,Po(r)?!!r.capture:!!r,i):Fw(t,e,n,!1,r,i)}function Fw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Po(i)?!!i.capture:!!i,a=Vf(t);if(a||(t[$f]=a=new vu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=FR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)NR||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Bw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function FR(){function t(n){return e.call(t.src,t.listener,n)}const e=VR;return t}function Vw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Vw(t,e[s],n,r,i);return null}return n=zf(n),t&&t[Oo]?t.O(e,n,Po(r)?!!r.capture:!!r,i):Fw(t,e,n,!0,r,i)}function zw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)zw(t,e[s],n,r,i);else r=Po(r)?!!r.capture:!!r,n=zf(n),t&&t[Oo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ld(s,n,r,i),-1<n&&(yu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ld(e,n,r,i)),(n=-1<t?e[t]:null)&&Ff(n))}function Ff(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Oo])ad(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Bw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Vf(e))?(ad(n,t),n.h==0&&(n.src=null,e[$f]=null)):yu(t)}}}function Bw(t){return t in Hc?Hc[t]:Hc[t]="on"+t}function VR(t,e){if(t.ba)t=!0;else{e=new ho(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Ff(t),t=n.call(r,e)}return t}function Vf(t){return t=t[$f],t instanceof vu?t:null}var qc="__closure_events_fn_"+(1e9*Math.random()>>>0);function zf(t){return typeof t=="function"?t:(t[qc]||(t[qc]=function(e){return t.handleEvent(e)}),t[qc])}function Oe(){lr.call(this),this.i=new vu(this),this.P=this,this.I=null}Fe(Oe,lr);Oe.prototype[Oo]=!0;Oe.prototype.removeEventListener=function(t,e,n,r){zw(this,t,e,n,r)};function Me(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ke(e,t);else if(e instanceof Ke)e.target=e.target||t;else{var i=e;e=new Ke(r,t),Mw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=_a(o,r,!0,e)&&i}if(o=e.g=t,i=_a(o,r,!0,e)&&i,i=_a(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=_a(o,r,!1,e)&&i}Oe.prototype.M=function(){if(Oe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)yu(n[r]);delete t.g[e],t.h--}}this.I=null};Oe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function _a(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&ad(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Bf=F.JSON.stringify;function zR(){var t=qw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class BR{constructor(){this.h=this.g=null}add(e,n){const r=jw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var jw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new jR,t=>t.reset());class jR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function HR(t){F.setTimeout(()=>{throw t},0)}function Hw(t,e){ud||qR(),cd||(ud(),cd=!0),qw.add(t,e)}var ud;function qR(){var t=F.Promise.resolve(void 0);ud=function(){t.then(WR)}}var cd=!1,qw=new BR;function WR(){for(var t;t=zR();){try{t.h.call(t.g)}catch(n){HR(n)}var e=jw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}cd=!1}function wu(t,e){Oe.call(this),this.h=t||1,this.g=e||F,this.j=We(this.lb,this),this.l=Date.now()}Fe(wu,Oe);L=wu.prototype;L.ca=!1;L.R=null;L.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Me(this,"tick"),this.ca&&(jf(this),this.start()))}};L.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jf(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}L.M=function(){wu.X.M.call(this),jf(this),delete this.g};function Hf(t,e,n){if(typeof t=="function")n&&(t=We(t,n));else if(t&&typeof t.handleEvent=="function")t=We(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function Ww(t){t.g=Hf(()=>{t.g=null,t.i&&(t.i=!1,Ww(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class KR extends lr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ww(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fo(t){lr.call(this),this.h=t,this.g={}}Fe(fo,lr);var Ug=[];function Kw(t,e,n,r){Array.isArray(n)||(n&&(Ug[0]=n.toString()),n=Ug);for(var i=0;i<n.length;i++){var s=$w(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Gw(t){Mf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ff(e)},t),t.g={}}fo.prototype.M=function(){fo.X.M.call(this),Gw(this)};fo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _u(){this.g=!0}_u.prototype.Aa=function(){this.g=!1};function GR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function QR(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function mi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+YR(t,n)+(r?" "+r:"")})}function XR(t,e){t.info(function(){return"TIMEOUT: "+e})}_u.prototype.info=function(){};function YR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Bf(n)}catch{return e}}var Wr={},Mg=null;function Eu(){return Mg=Mg||new Oe}Wr.Pa="serverreachability";function Qw(t){Ke.call(this,Wr.Pa,t)}Fe(Qw,Ke);function po(t){const e=Eu();Me(e,new Qw(e))}Wr.STAT_EVENT="statevent";function Xw(t,e){Ke.call(this,Wr.STAT_EVENT,t),this.stat=e}Fe(Xw,Ke);function et(t){const e=Eu();Me(e,new Xw(e,t))}Wr.Qa="timingevent";function Yw(t,e){Ke.call(this,Wr.Qa,t),this.size=e}Fe(Yw,Ke);function Lo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var Tu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Jw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function qf(){}qf.prototype.h=null;function $g(t){return t.h||(t.h=t.i())}function Zw(){}var bo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Wf(){Ke.call(this,"d")}Fe(Wf,Ke);function Kf(){Ke.call(this,"c")}Fe(Kf,Ke);var hd;function Su(){}Fe(Su,qf);Su.prototype.g=function(){return new XMLHttpRequest};Su.prototype.i=function(){return{}};hd=new Su;function Uo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new fo(this),this.O=JR,t=sd?125:void 0,this.T=new wu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new e_}function e_(){this.i=null,this.g="",this.h=!1}var JR=45e3,dd={},xl={};L=Uo.prototype;L.setTimeout=function(t){this.O=t};function fd(t,e,n){t.K=1,t.v=Iu(yn(e)),t.s=n,t.P=!0,t_(t,null)}function t_(t,e){t.F=Date.now(),Mo(t),t.A=yn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),u_(n.i,"t",r),t.C=0,n=t.l.H,t.h=new e_,t.g=A_(t.l,n?e:null,!t.s),0<t.N&&(t.L=new KR(We(t.La,t,t.g),t.N)),Kw(t.S,t.g,"readystatechange",t.ib),e=t.H?Uw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),po(),GR(t.j,t.u,t.A,t.m,t.U,t.s)}L.ib=function(t){t=t.target;const e=this.L;e&&an(t)==3?e.l():this.La(t)};L.La=function(t){try{if(t==this.g)e:{const c=an(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||sd||this.g&&(this.h.h||this.g.fa()||Bg(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?po(3):po(2)),ku(this);var n=this.g.aa();this.Y=n;t:if(n_(this)){var r=Bg(this.g);t="";var i=r.length,s=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tr(this),Vs(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,QR(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Cl(a)){var u=a;break t}}u=null}if(n=u)mi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,pd(this,n);else{this.i=!1,this.o=3,et(12),Tr(this),Vs(this);break e}}this.P?(r_(this,c,o),sd&&this.i&&c==3&&(Kw(this.S,this.T,"tick",this.hb),this.T.start())):(mi(this.j,this.m,o,null),pd(this,o)),c==4&&Tr(this),this.i&&!this.I&&(c==4?C_(this.l,this):(this.i=!1,Mo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),Tr(this),Vs(this)}}}catch{}finally{}};function n_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function r_(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=ZR(t,n),i==xl){e==4&&(t.o=4,et(14),r=!1),mi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==dd){t.o=4,et(15),mi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else mi(t.j,t.m,i,null),pd(t,i);n_(t)&&i!=xl&&i!=dd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,et(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ep(e),e.K=!0,et(11))):(mi(t.j,t.m,n,"[Invalid Chunked Response]"),Tr(t),Vs(t))}L.hb=function(){if(this.g){var t=an(this.g),e=this.g.fa();this.C<e.length&&(ku(this),r_(this,t,e),this.i&&t!=4&&Mo(this))}};function ZR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?xl:(n=Number(e.substring(n,r)),isNaN(n)?dd:(r+=1,r+n>e.length?xl:(e=e.substr(r,n),t.C=r+n,e)))}L.cancel=function(){this.I=!0,Tr(this)};function Mo(t){t.V=Date.now()+t.O,i_(t,t.O)}function i_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Lo(We(t.gb,t),e)}function ku(t){t.B&&(F.clearTimeout(t.B),t.B=null)}L.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(XR(this.j,this.A),this.K!=2&&(po(),et(17)),Tr(this),this.o=2,Vs(this)):i_(this,this.V-t)};function Vs(t){t.l.G==0||t.I||C_(t.l,t)}function Tr(t){ku(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,jf(t.T),Gw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function pd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||md(n.h,t))){if(!t.J&&md(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Dl(n),xu(n);else break e;Zf(n),et(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Lo(We(n.cb,n),6e3));if(1>=d_(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Sr(n,11)}else if((t.J||n.g==t)&&Dl(n),!Cl(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Gf(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,ue(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=N_(r,r.H?r.ka:null,r.V),o.J){f_(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(ku(a),Mo(a)),r.g=o}else k_(r);0<n.i.length&&Nu(n)}else u[0]!="stop"&&u[0]!="close"||Sr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Sr(n,7):Jf(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}po(4)}catch{}}function ex(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(mu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function tx(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(mu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function s_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(mu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=tx(t),r=ex(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var o_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof xr){this.h=e!==void 0?e:t.h,Nl(this,t.j),this.s=t.s,this.g=t.g,Al(this,t.m),this.l=t.l,e=t.i;var n=new mo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Fg(this,n),this.o=t.o}else t&&(n=String(t).match(o_))?(this.h=!!e,Nl(this,n[1]||"",!0),this.s=Rs(n[2]||""),this.g=Rs(n[3]||"",!0),Al(this,n[4]),this.l=Rs(n[5]||"",!0),Fg(this,n[6]||"",!0),this.o=Rs(n[7]||"")):(this.h=!!e,this.i=new mo(null,this.h))}xr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(xs(e,Vg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(xs(e,Vg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(xs(n,n.charAt(0)=="/"?sx:ix,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",xs(n,ax)),t.join("")};function yn(t){return new xr(t)}function Nl(t,e,n){t.j=n?Rs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Al(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fg(t,e,n){e instanceof mo?(t.i=e,lx(t.i,t.h)):(n||(e=xs(e,ox)),t.i=new mo(e,t.h))}function ue(t,e,n){t.i.set(e,n)}function Iu(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Rs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function xs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vg=/[#\/\?@]/g,ix=/[#\?:]/g,sx=/[#\?]/g,ox=/[#\?@]/g,ax=/#/g;function mo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ur(t){t.g||(t.g=new Map,t.h=0,t.i&&nx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=mo.prototype;L.add=function(t,e){ur(this),this.i=null,t=Ji(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function a_(t,e){ur(t),e=Ji(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function l_(t,e){return ur(t),e=Ji(t,e),t.g.has(e)}L.forEach=function(t,e){ur(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.oa=function(){ur(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.W=function(t){ur(this);let e=[];if(typeof t=="string")l_(this,t)&&(e=e.concat(this.g.get(Ji(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return ur(this),this.i=null,t=Ji(this,t),l_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function u_(t,e,n){a_(t,e),0<n.length&&(t.i=null,t.g.set(Ji(t,e),bf(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ji(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lx(t,e){e&&!t.j&&(ur(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(a_(this,r),u_(this,i,n))},t)),t.j=e}var ux=class{constructor(t,e){this.h=t,this.g=e}};function c_(t){this.l=t||cx,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ga&&F.g.Ga()&&F.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cx=10;function h_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function d_(t){return t.h?1:t.g?t.g.size:0}function md(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Gf(t,e){t.g?t.g.add(e):t.h=e}function f_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}c_.prototype.cancel=function(){if(this.i=p_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function p_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return bf(t.i)}function Qf(){}Qf.prototype.stringify=function(t){return F.JSON.stringify(t,void 0)};Qf.prototype.parse=function(t){return F.JSON.parse(t,void 0)};function hx(){this.g=new Qf}function dx(t,e,n){const r=n||"";try{s_(t,function(i,s){let o=i;Po(i)&&(o=Bf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function fx(t,e){const n=new _u;if(F.Image){const r=new Image;r.onload=wa(Ea,n,r,"TestLoadImage: loaded",!0,e),r.onerror=wa(Ea,n,r,"TestLoadImage: error",!1,e),r.onabort=wa(Ea,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=wa(Ea,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ea(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function $o(t){this.l=t.ac||null,this.j=t.jb||!1}Fe($o,qf);$o.prototype.g=function(){return new Cu(this.l,this.j)};$o.prototype.i=function(t){return function(){return t}}({});function Cu(t,e){Oe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Xf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Fe(Cu,Oe);var Xf=0;L=Cu.prototype;L.open=function(t,e){if(this.readyState!=Xf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,go(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||F).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fo(this)),this.readyState=Xf};L.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,go(this)),this.g&&(this.readyState=3,go(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;m_(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function m_(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}L.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fo(this):go(this),this.readyState==3&&m_(this)}};L.Va=function(t){this.g&&(this.response=this.responseText=t,Fo(this))};L.Ua=function(t){this.g&&(this.response=t,Fo(this))};L.ga=function(){this.g&&Fo(this)};function Fo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,go(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function go(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Cu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var px=F.JSON.parse;function me(t){Oe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=g_,this.K=this.L=!1}Fe(me,Oe);var g_="",mx=/^https?$/i,gx=["POST","PUT"];L=me.prototype;L.Ka=function(t){this.L=t};L.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():hd.g(),this.C=this.u?$g(this.u):$g(hd),this.g.onreadystatechange=We(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){zg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=Pw(gx,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{w_(this),0<this.B&&((this.K=yx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=We(this.qa,this)):this.A=Hf(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){zg(this,s)}};function yx(t){return Li&&LR()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.qa=function(){typeof Lf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function zg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,y_(t),Ru(t)}function y_(t){t.D||(t.D=!0,Me(t,"complete"),Me(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Me(this,"complete"),Me(this,"abort"),Ru(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ru(this,!0)),me.X.M.call(this)};L.Ha=function(){this.s||(this.F||this.v||this.l?v_(this):this.fb())};L.fb=function(){v_(this)};function v_(t){if(t.h&&typeof Lf<"u"&&(!t.C[1]||an(t)!=4||t.aa()!=2)){if(t.v&&an(t)==4)Hf(t.Ha,0,t);else if(Me(t,"readystatechange"),an(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(o_)[1]||null;if(!i&&F.self&&F.self.location){var s=F.self.location.protocol;i=s.substr(0,s.length-1)}r=!mx.test(i?i.toLowerCase():"")}n=r}if(n)Me(t,"complete"),Me(t,"success");else{t.m=6;try{var o=2<an(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",y_(t)}}finally{Ru(t)}}}}function Ru(t,e){if(t.g){w_(t);const n=t.g,r=t.C[0]?Il:null;t.g=null,t.C=null,e||Me(t,"ready");try{n.onreadystatechange=r}catch{}}}function w_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}function an(t){return t.g?t.g.readyState:0}L.aa=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}};L.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),px(e)}};function Bg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case g_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Ea=function(){return this.m};L.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function __(t){let e="";return Mf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Yf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=__(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function ws(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function E_(t){this.Ca=0,this.i=[],this.j=new _u,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ws("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ws("baseRetryDelayMs",5e3,t),this.bb=ws("retryDelaySeedMs",1e4,t),this.$a=ws("forwardChannelMaxRetries",2,t),this.ta=ws("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new c_(t&&t.concurrentRequestLimit),this.Fa=new hx,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}L=E_.prototype;L.ma=8;L.G=1;function Jf(t){if(T_(t),t.G==3){var e=t.U++,n=yn(t.F);ue(n,"SID",t.I),ue(n,"RID",e),ue(n,"TYPE","terminate"),Vo(t,n),e=new Uo(t,t.j,e,void 0),e.K=2,e.v=Iu(yn(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(e.v.toString(),"")),!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=A_(e.l,null),e.g.da(e.v)),e.F=Date.now(),Mo(e)}x_(t)}function xu(t){t.g&&(ep(t),t.g.cancel(),t.g=null)}function T_(t){xu(t),t.u&&(F.clearTimeout(t.u),t.u=null),Dl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function Nu(t){h_(t.h)||t.m||(t.m=!0,Hw(t.Ja,t),t.C=0)}function vx(t,e){return d_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Lo(We(t.Ja,t,e),R_(t,t.C)),t.C++,!0)}L.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Uo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Uw(s),Mw(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=S_(this,i,e),n=yn(this.F),ue(n,"RID",t),ue(n,"CVER",22),this.D&&ue(n,"X-HTTP-Session-Id",this.D),Vo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(__(s)))+"&"+e:this.o&&Yf(n,this.o,s)),Gf(this.h,i),this.Ya&&ue(n,"TYPE","init"),this.O?(ue(n,"$req",e),ue(n,"SID","null"),i.Z=!0,fd(i,n,null)):fd(i,n,e),this.G=2}}else this.G==3&&(t?jg(this,t):this.i.length==0||h_(this.h)||jg(this))};function jg(t,e){var n;e?n=e.m:n=t.U++;const r=yn(t.F);ue(r,"SID",t.I),ue(r,"RID",n),ue(r,"AID",t.T),Vo(t,r),t.o&&t.s&&Yf(r,t.o,t.s),n=new Uo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=S_(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Gf(t.h,n),fd(n,r,e)}function Vo(t,e){t.ia&&Mf(t.ia,function(n,r){ue(e,r,n)}),t.l&&s_({},function(n,r){ue(e,r,n)})}function S_(t,e,n){n=Math.min(t.i.length,n);var r=t.l?We(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{dx(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function k_(t){t.g||t.u||(t.Z=1,Hw(t.Ia,t),t.A=0)}function Zf(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Lo(We(t.Ia,t),R_(t,t.A)),t.A++,!0)}L.Ia=function(){if(this.u=null,I_(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Lo(We(this.eb,this),t)}};L.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,et(10),xu(this),I_(this))};function ep(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function I_(t){t.g=new Uo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=yn(t.sa);ue(e,"RID","rpc"),ue(e,"SID",t.I),ue(e,"CI",t.L?"0":"1"),ue(e,"AID",t.T),ue(e,"TYPE","xmlhttp"),Vo(t,e),t.o&&t.s&&Yf(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Iu(yn(e)),n.s=null,n.P=!0,t_(n,t)}L.cb=function(){this.v!=null&&(this.v=null,xu(this),Zf(this),et(19))};function Dl(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function C_(t,e){var n=null;if(t.g==e){Dl(t),ep(t),t.g=null;var r=2}else if(md(t.h,e))n=e.D,f_(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Eu(),Me(r,new Yw(r,n)),Nu(t)}else k_(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&vx(t,e)||r==2&&Zf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Sr(t,5);break;case 4:Sr(t,10);break;case 3:Sr(t,6);break;default:Sr(t,2)}}}function R_(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Sr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=We(t.kb,t);n||(n=new xr("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Nl(n,"https"),Iu(n)),fx(n.toString(),r)}else et(2);t.G=0,t.l&&t.l.va(e),x_(t),T_(t)}L.kb=function(t){t?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function x_(t){if(t.G=0,t.la=[],t.l){const e=p_(t.h);(e.length!=0||t.i.length!=0)&&(Pg(t.la,e),Pg(t.la,t.i),t.h.i.length=0,bf(t.i),t.i.length=0),t.l.ua()}}function N_(t,e,n){var r=n instanceof xr?yn(n):new xr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Al(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new xr(null,void 0);r&&Nl(s,r),e&&(s.g=e),i&&Al(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ue(r,n,e),ue(r,"VER",t.ma),Vo(t,r),r}function A_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new me(new $o({jb:!0})):new me(t.ra),e.Ka(t.H),e}function D_(){}L=D_.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Ra=function(){};function Pl(){if(Li&&!(10<=Number(bR)))throw Error("Environmental error: no available transport.")}Pl.prototype.g=function(t,e){return new wt(t,e)};function wt(t,e){Oe.call(this),this.g=new E_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Cl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Cl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zi(this)}Fe(wt,Oe);wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;et(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=N_(t,null,t.V),Nu(t)};wt.prototype.close=function(){Jf(this.g)};wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Bf(t),t=n);e.i.push(new ux(e.ab++,t)),e.G==3&&Nu(e)};wt.prototype.M=function(){this.g.l=null,delete this.j,Jf(this.g),delete this.g,wt.X.M.call(this)};function P_(t){Wf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Fe(P_,Wf);function O_(){Kf.call(this),this.status=1}Fe(O_,Kf);function Zi(t){this.g=t}Fe(Zi,D_);Zi.prototype.xa=function(){Me(this.g,"a")};Zi.prototype.wa=function(t){Me(this.g,new P_(t))};Zi.prototype.va=function(t){Me(this.g,new O_)};Zi.prototype.ua=function(){Me(this.g,"b")};Pl.prototype.createWebChannel=Pl.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;Tu.NO_ERROR=0;Tu.TIMEOUT=8;Tu.HTTP_ERROR=6;Jw.COMPLETE="complete";Zw.EventType=bo;bo.OPEN="a";bo.CLOSE="b";bo.ERROR="c";bo.MESSAGE="d";Oe.prototype.listen=Oe.prototype.N;me.prototype.listenOnce=me.prototype.O;me.prototype.getLastError=me.prototype.Oa;me.prototype.getLastErrorCode=me.prototype.Ea;me.prototype.getStatus=me.prototype.aa;me.prototype.getResponseJson=me.prototype.Sa;me.prototype.getResponseText=me.prototype.fa;me.prototype.send=me.prototype.da;me.prototype.setWithCredentials=me.prototype.Ka;var wx=function(){return new Pl},_x=function(){return Eu()},Wc=Tu,Ex=Jw,Tx=Wr,Hg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Sx=$o,Ta=Zw,kx=me;const qg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Df("@firebase/firestore");function Wg(){return Fr.logLevel}function b(t,...e){if(Fr.logLevel<=Y.DEBUG){const n=e.map(tp);Fr.debug(`Firestore (${es}): ${t}`,...n)}}function vn(t,...e){if(Fr.logLevel<=Y.ERROR){const n=e.map(tp);Fr.error(`Firestore (${es}): ${t}`,...n)}}function gd(t,...e){if(Fr.logLevel<=Y.WARN){const n=e.map(tp);Fr.warn(`Firestore (${es}): ${t}`,...n)}}function tp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t="Unexpected state"){const e=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function re(t,e){t||$()}function z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ix{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Be.UNAUTHENTICATED))}shutdown(){}}class Cx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Rx{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new L_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Be(e)}}class xx{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(re(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Nx{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new xx(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ax{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dx{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.A=n.token,new Ax(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Px(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function bi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Se(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new Se(0,0))}static max(){return new V(new Se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends yo{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const Ox=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends yo{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return Ox.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(se.fromString(e))}static fromName(e){return new U(se.fromString(e).popFirst(5))}static empty(){return new U(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new se(e.slice()))}}function Lx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=V.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new er(i,U.empty(),e)}function bx(t){return new er(t.readTime,t.key,-1)}class er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new er(V.min(),U.empty(),-1)}static max(){return new er(V.max(),U.empty(),-1)}}function Ux(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=U.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $x{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==Mx)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Bo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}np.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class vo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function U_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t){return t==null}function Ol(t){return t===0&&1/t==-1/0}function Vx(t){return typeof t=="number"&&Number.isInteger(t)&&!Ol(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new zx("Invalid base64 string: "+i):i}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const Bx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(t){if(re(!!t),typeof t=="string"){let e=0;const n=Bx.exec(t);if(re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ui(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $_(t){const e=t.mapValue.fields.__previous_value__;return M_(e)?$_(e):e}function wo(t){const e=tr(t.mapValue.fields.__local_write_time__.timestampValue);return new Se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?M_(t)?4:jx(t)?9007199254740991:10:$()}function Yt(t,e){if(t===e)return!0;const n=Vr(t);if(n!==Vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wo(t).isEqual(wo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=tr(r.timestampValue),o=tr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ui(r.bytesValue).isEqual(Ui(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return we(r.geoPointValue.latitude)===we(i.geoPointValue.latitude)&&we(r.geoPointValue.longitude)===we(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return we(r.integerValue)===we(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=we(r.doubleValue),o=we(i.doubleValue);return s===o?Ol(s)===Ol(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return bi(t.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Kg(s)!==Kg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Yt(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function _o(t,e){return(t.values||[]).find(n=>Yt(n,e))!==void 0}function Mi(t,e){if(t===e)return 0;const n=Vr(t),r=Vr(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=we(i.integerValue||i.doubleValue),a=we(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Gg(t.timestampValue,e.timestampValue);case 4:return Gg(wo(t),wo(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ui(i),a=Ui(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=J(o[l],a[l]);if(u!==0)return u}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=J(we(i.latitude),we(s.latitude));return o!==0?o:J(we(i.longitude),we(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Mi(o[l],a[l]);if(u)return u}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Sa.mapValue&&s===Sa.mapValue)return 0;if(i===Sa.mapValue)return 1;if(s===Sa.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=J(a[c],u[c]);if(h!==0)return h;const d=Mi(o[a[c]],l[u[c]]);if(d!==0)return d}return J(a.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function Gg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=tr(t),r=tr(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function $i(t){return yd(t)}function yd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=tr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ui(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=yd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${yd(r.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function Qg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vd(t){return!!t&&"integerValue"in t}function rp(t){return!!t&&"arrayValue"in t}function Xg(t){return!!t&&"nullValue"in t}function Yg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ba(t){return!!t&&"mapValue"in t}function zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Kr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){this.position=e,this.inclusive=n}}function Jg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),n.key):r=Mi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{}class Ee extends F_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new qx(e,n,r):n==="array-contains"?new Gx(e,r):n==="in"?new Qx(e,r):n==="not-in"?new Xx(e,r):n==="array-contains-any"?new Yx(e,r):new Ee(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Wx(e,r):new Kx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mi(n,this.value)):n!==null&&Vr(this.value)===Vr(n)&&this.matchesComparison(Mi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class $t extends F_{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new $t(e,n)}matches(e){return V_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function V_(t){return t.op==="and"}function z_(t){return Hx(t)&&V_(t)}function Hx(t){for(const e of t.filters)if(e instanceof $t)return!1;return!0}function wd(t){if(t instanceof Ee)return t.field.canonicalString()+t.op.toString()+$i(t.value);if(z_(t))return t.filters.map(e=>wd(e)).join(",");{const e=t.filters.map(n=>wd(n)).join(",");return`${t.op}(${e})`}}function B_(t,e){return t instanceof Ee?function(n,r){return r instanceof Ee&&n.op===r.op&&n.field.isEqual(r.field)&&Yt(n.value,r.value)}(t,e):t instanceof $t?function(n,r){return r instanceof $t&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&B_(s,r.filters[o]),!0):!1}(t,e):void $()}function j_(t){return t instanceof Ee?function(e){return`${e.field.canonicalString()} ${e.op} ${$i(e.value)}`}(t):t instanceof $t?function(e){return e.op.toString()+" {"+e.getFilters().map(j_).join(" ,")+"}"}(t):"Filter"}class qx extends Ee{constructor(e,n,r){super(e,n,r),this.key=U.fromName(r.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.matchesComparison(n)}}class Wx extends Ee{constructor(e,n){super(e,"in",n),this.keys=H_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Kx extends Ee{constructor(e,n){super(e,"not-in",n),this.keys=H_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function H_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>U.fromName(r.referenceValue))}class Gx extends Ee{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rp(n)&&_o(n.arrayValue,this.value)}}class Qx extends Ee{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_o(this.value.arrayValue,n)}}class Xx extends Ee{constructor(e,n){super(e,"not-in",n)}matches(e){if(_o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_o(this.value.arrayValue,n)}}class Yx extends Ee{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_o(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n="asc"){this.field=e,this.dir=n}}function Jx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.comparator=e,this.root=n||be.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ka(this.root,e,this.comparator,!0)}}class ka{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:be.RED,this.left=i!=null?i:be.EMPTY,this.right=s!=null?s:be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new be(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new be(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ey(this.data.getIterator())}getIteratorFrom(e){return new ey(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ce(this.comparator);return n.data=e,n}}class ey{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new gt([])}unionWith(e){let n=new Ce(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ba(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zs(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=zs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ba(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ba(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Kr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new at(zs(this.value))}}function q_(t){const e=[];return Kr(t.fields,(n,r)=>{const i=new qe([n]);if(Ba(r)){const s=q_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new He(e,0,V.min(),V.min(),V.min(),at.empty(),0)}static newFoundDocument(e,n,r,i){return new He(e,1,n,V.min(),r,i,0)}static newNoDocument(e,n){return new He(e,2,n,V.min(),V.min(),at.empty(),0)}static newUnknownDocument(e,n){return new He(e,3,n,V.min(),V.min(),at.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this._t=null}}function ty(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Zx(t,e,n,r,i,s,o)}function ip(t){const e=z(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Au(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$i(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$i(r)).join(",")),e._t=n}return e._t}function sp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Jx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!B_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zg(t.startAt,e.startAt)&&Zg(t.endAt,e.endAt)}function _d(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function eN(t,e,n,r,i,s,o,a){return new ts(t,e,n,r,i,s,o,a)}function Du(t){return new ts(t)}function ny(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function op(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Pu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function W_(t){return t.collectionGroup!==null}function Si(t){const e=z(t);if(e.wt===null){e.wt=[];const n=Pu(e),r=op(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Ti(n)),e.wt.push(new Ti(qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ti(qe.keyField(),s))}}}return e.wt}function wn(t){const e=z(t);if(!e.gt)if(e.limitType==="F")e.gt=ty(e.path,e.collectionGroup,Si(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Si(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ti(s.field,o))}const r=e.endAt?new Ll(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ll(e.startAt.position,e.startAt.inclusive):null;e.gt=ty(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.gt}function Ed(t,e){e.getFirstInequalityField(),Pu(t);const n=t.filters.concat([e]);return new ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bl(t,e,n){return new ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ou(t,e){return sp(wn(t),wn(e))&&t.limitType===e.limitType}function K_(t){return`${ip(wn(t))}|lt:${t.limitType}`}function Td(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>j_(r)).join(", ")}]`),Au(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$i(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$i(r)).join(",")),`Target(${n})`}(wn(t))}; limitType=${t.limitType})`}function Lu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):U.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Si(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Jg(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Si(n),r)||n.endAt&&!function(i,s,o){const a=Jg(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Si(n),r))}(t,e)}function tN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function G_(t){return(e,n)=>{let r=!1;for(const i of Si(t)){const s=nN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function nN(t,e,n){const r=t.field.isKeyField()?U.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Mi(a,l):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ol(e)?"-0":e}}function X_(t){return{integerValue:""+t}}function rN(t,e){return Vx(e)?X_(e):Q_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this._=void 0}}function iN(t,e,n){return t instanceof Eo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Fi?J_(t,e):t instanceof Vi?Z_(t,e):function(r,i){const s=Y_(r,i),o=ry(s)+ry(r.It);return vd(s)&&vd(r.It)?X_(o):Q_(r.Tt,o)}(t,e)}function sN(t,e,n){return t instanceof Fi?J_(t,e):t instanceof Vi?Z_(t,e):n}function Y_(t,e){return t instanceof Ul?vd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Eo extends bu{}class Fi extends bu{constructor(e){super(),this.elements=e}}function J_(t,e){const n=e1(e);for(const r of t.elements)n.some(i=>Yt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Vi extends bu{constructor(e){super(),this.elements=e}}function Z_(t,e){let n=e1(e);for(const r of t.elements)n=n.filter(i=>!Yt(i,r));return{arrayValue:{values:n}}}class Ul extends bu{constructor(e,n){super(),this.Tt=e,this.It=n}}function ry(t){return we(t.integerValue||t.doubleValue)}function e1(t){return rp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n){this.field=e,this.transform=n}}function oN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Fi&&r instanceof Fi||n instanceof Vi&&r instanceof Vi?bi(n.elements,r.elements,Yt):n instanceof Ul&&r instanceof Ul?Yt(n.It,r.It):n instanceof Eo&&r instanceof Eo}(t.transform,e.transform)}class aN{constructor(e,n){this.version=e,this.transformResults=n}}class Ct{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ct}static exists(e){return new Ct(void 0,e)}static updateTime(e){return new Ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ja(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Uu{}function t1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lp(t.key,Ct.none()):new jo(t.key,t.data,Ct.none());{const n=t.data,r=at.empty();let i=new Ce(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new cr(t.key,r,new gt(i.toArray()),Ct.none())}}function lN(t,e,n){t instanceof jo?function(r,i,s){const o=r.value.clone(),a=sy(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof cr?function(r,i,s){if(!ja(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=sy(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(n1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof jo?function(i,s,o,a){if(!ja(i.precondition,s))return o;const l=i.value.clone(),u=oy(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof cr?function(i,s,o,a){if(!ja(i.precondition,s))return o;const l=oy(i.fieldTransforms,a,s),u=s.data;return u.setAll(n1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ja(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function uN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Y_(r.transform,i||null);s!=null&&(n===null&&(n=at.empty()),n.set(r.field,s))}return n||null}function iy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&bi(n,r,(i,s)=>oN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class jo extends Uu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class cr extends Uu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function n1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sy(t,e,n){const r=new Map;re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sN(o,a,n[i]))}return r}function oy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,iN(s,o,e))}return r}class lp extends Uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cN extends Uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,G;function dN(t){switch(t){default:return $();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function r1(t){if(t===void 0)return vn("GRPC error has no .code"),T.UNKNOWN;switch(t){case ve.OK:return T.OK;case ve.CANCELLED:return T.CANCELLED;case ve.UNKNOWN:return T.UNKNOWN;case ve.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case ve.INTERNAL:return T.INTERNAL;case ve.UNAVAILABLE:return T.UNAVAILABLE;case ve.UNAUTHENTICATED:return T.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case ve.NOT_FOUND:return T.NOT_FOUND;case ve.ALREADY_EXISTS:return T.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return T.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case ve.ABORTED:return T.ABORTED;case ve.OUT_OF_RANGE:return T.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return T.UNIMPLEMENTED;case ve.DATA_LOSS:return T.DATA_LOSS;default:return $()}}(G=ve||(ve={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Kr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return U_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=new Re(U.comparator);function _n(){return fN}const i1=new Re(U.comparator);function Ns(...t){let e=i1;for(const n of t)e=e.insert(n.key,n);return e}function s1(t){let e=i1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function kr(){return js()}function o1(){return js()}function js(){return new ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const pN=new Re(U.comparator),mN=new Ce(U.comparator);function q(...t){let e=mN;for(const n of t)e=e.add(n);return e}const gN=new Ce(J);function a1(){return gN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ho.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Mu(V.min(),i,a1(),_n(),q())}}class Ho{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ho(r,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,r,i){this.Et=e,this.removedTargetIds=n,this.key=r,this.At=i}}class l1{constructor(e,n){this.targetId=e,this.Rt=n}}class u1{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ay{constructor(){this.bt=0,this.vt=uy(),this.Pt=Ye.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=q(),n=q(),r=q();return this.vt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new Ho(this.Pt,this.Vt,e,n,r)}kt(){this.St=!1,this.vt=uy()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class yN{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=_n(),this.Kt=ly(),this.Gt=new Ce(J)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const r=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&r.xt(e.resumeToken);break;case 1:r.$t(),r.Dt||r.kt(),r.xt(e.resumeToken);break;case 2:r.$t(),r.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(r.Bt(),r.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),r.xt(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((r,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,r=e.Rt.count,i=this.Xt(n);if(i){const s=i.target;if(_d(s))if(r===0){const o=new U(s.path);this.zt(n,o,He.newNoDocument(o,V.min()))}else re(r===1);else this.te(n)!==r&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&_d(a.target)){const l=new U(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,He.newNoDocument(l,e))}s.Ct&&(n.set(o,s.Nt()),s.kt())}});let r=q();this.Kt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Mu(e,n,this.Gt,this.Ut,r);return this.Ut=_n(),this.Kt=ly(),this.Gt=new Ce(J),i}jt(e,n){if(!this.Jt(e))return;const r=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,r){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new ay,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Ce(J),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new ay),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function ly(){return new Re(U.comparator)}function uy(){return new Re(U.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_N=(()=>({and:"AND",or:"OR"}))();class EN{constructor(e,n){this.databaseId=e,this.yt=n}}function Ml(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function c1(t,e){return t.yt?e.toBase64():e.toUint8Array()}function TN(t,e){return Ml(t,e.toTimestamp())}function Kt(t){return re(!!t),V.fromTimestamp(function(e){const n=tr(e);return new Se(n.seconds,n.nanos)}(t))}function up(t,e){return function(n){return new se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function h1(t){const e=se.fromString(t);return re(m1(e)),e}function Sd(t,e){return up(t.databaseId,e.path)}function Kc(t,e){const n=h1(e);if(n.get(1)!==t.databaseId.projectId)throw new A(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(d1(n))}function kd(t,e){return up(t.databaseId,e)}function SN(t){const e=h1(t);return e.length===4?se.emptyPath():d1(e)}function Id(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function d1(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cy(t,e,n){return{name:Sd(t,e),fields:n.value.mapValue.fields}}function kN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.yt?(re(u===void 0||typeof u=="string"),Ye.fromBase64String(u||"")):(re(u===void 0||u instanceof Uint8Array),Ye.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:r1(l.code);return new A(u,l.message||"")}(o);n=new u1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Kc(t,r.document.name),s=Kt(r.document.updateTime),o=r.document.createTime?Kt(r.document.createTime):V.min(),a=new at({mapValue:{fields:r.document.fields}}),l=He.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ha(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Kc(t,r.document),s=r.readTime?Kt(r.readTime):V.min(),o=He.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ha([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Kc(t,r.document),s=r.removedTargetIds||[];n=new Ha([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new hN(i),o=r.targetId;n=new l1(o,s)}}return n}function IN(t,e){let n;if(e instanceof jo)n={update:cy(t,e.key,e.value)};else if(e instanceof lp)n={delete:Sd(t,e.key)};else if(e instanceof cr)n={update:cy(t,e.key,e.data),updateMask:LN(e.fieldMask)};else{if(!(e instanceof cN))return $();n={verify:Sd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Eo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Fi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Vi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ul)return{fieldPath:s.field.canonicalString(),increment:o.It};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:TN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function CN(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Kt(r.updateTime):Kt(i);return s.isEqual(V.min())&&(s=Kt(i)),new aN(s,r.transformResults||[])}(n,e))):[]}function RN(t,e){return{documents:[kd(t,e.path)]}}function xN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=kd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=kd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return p1($t.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ti(c.field),direction:DN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.yt||Au(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function NN(t){let e=SN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=f1(c);return h instanceof $t&&z_(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ti(ni(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Au(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Ll(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Ll(d,h)}(n.endAt)),eN(e,i,o,s,a,"F",l,u)}function AN(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function f1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ni(e.unaryFilter.field);return Ee.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ni(e.unaryFilter.field);return Ee.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ni(e.unaryFilter.field);return Ee.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ni(e.unaryFilter.field);return Ee.create(s,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(e){return Ee.create(ni(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return $t.create(e.compositeFilter.filters.map(n=>f1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(t):$()}function DN(t){return vN[t]}function PN(t){return wN[t]}function ON(t){return _N[t]}function ti(t){return{fieldPath:t.canonicalString()}}function ni(t){return qe.fromServerFormat(t.fieldPath)}function p1(t){return t instanceof Ee?function(e){if(e.op==="=="){if(Yg(e.value))return{unaryFilter:{field:ti(e.field),op:"IS_NAN"}};if(Xg(e.value))return{unaryFilter:{field:ti(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Yg(e.value))return{unaryFilter:{field:ti(e.field),op:"IS_NOT_NAN"}};if(Xg(e.value))return{unaryFilter:{field:ti(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ti(e.field),op:PN(e.op),value:e.value}}}(t):t instanceof $t?function(e){const n=e.getFilters().map(r=>p1(r));return n.length===1?n[0]:{compositeFilter:{op:ON(e.op),filters:n}}}(t):$()}function LN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function m1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=o1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=t1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(V.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&bi(this.mutations,e.mutations,(n,r)=>iy(n,r))&&bi(this.baseMutations,e.baseMutations,(n,r)=>iy(n,r))}}class cp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){re(e.mutations.length===r.length);let i=pN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new cp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,r,i,s=V.min(),o=V.min(),a=Ye.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e){this.oe=e}}function $N(t){const e=NN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(){this.Ze=new VN}addToCollectionParentIndex(e,n){return this.Ze.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(er.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(er.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class VN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ce(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ce(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new zi(0)}static Sn(){return new zi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(){this.changes=new ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Bs(r.mutation,i,gt.empty(),Se.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ns();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=_n();const o=js(),a=js();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof cr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Bs(c.mutation,u,c.mutation.getFieldMask(),Se.now())):o.set(u.key,gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new BN(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=js();let i=new Re((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||gt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=o1();c.forEach(d=>{if(!s.has(d)){const g=t1(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return U.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):W_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):k.resolve(kr());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?k.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:s1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new U(n)).next(r=>{let i=Ns();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ns();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(u,c){return new ts(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,He.newInvalidDocument(u)))});let o=Ns();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Bs(u.mutation,l,gt.empty(),Se.now()),Lu(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return k.resolve(this.es.get(n))}saveBundleMetadata(e,n){var r;return this.es.set(n.id,{id:(r=n).id,version:r.version,createTime:Kt(r.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(r){return{name:r.name,query:$N(r.bundledQuery),readTime:Kt(r.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(){this.overlays=new Re(U.comparator),this.ss=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kr();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ce(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ss.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ss.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=kr(),s=n.length+1,o=new U(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=kr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=kr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}ce(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(r.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UN(n,r));let s=this.ss.get(n);s===void 0&&(s=q(),this.ss.set(n,s)),this.ss.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(){this.rs=new Ce(Ae.os),this.us=new Ce(Ae.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const r=new Ae(e,n);this.rs=this.rs.add(r),this.us=this.us.add(r)}hs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ls(new Ae(e,n))}fs(e,n){e.forEach(r=>this.removeReference(r,n))}ds(e){const n=new U(new se([])),r=new Ae(n,e),i=new Ae(n,e+1),s=[];return this.us.forEachInRange([r,i],o=>{this.ls(o),s.push(o.key)}),s}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new U(new se([])),r=new Ae(n,e),i=new Ae(n,e+1);let s=q();return this.us.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ae(e,0),r=this.rs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ae{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return U.comparator(e.key,n.key)||J(e.gs,n.gs)}static cs(e,n){return J(e.gs,n.gs)||U.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Ce(Ae.os)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Ae(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ts(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ae(n,0),i=new Ae(n,Number.POSITIVE_INFINITY),s=[];return this.ps.forEachInRange([r,i],o=>{const a=this.Is(o.gs);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ce(J);return n.forEach(i=>{const s=new Ae(i,0),o=new Ae(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([s,o],a=>{r=r.add(a.gs)})}),k.resolve(this.Es(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;U.isDocumentKey(s)||(s=s.child(""));const o=new Ae(new U(s),0);let a=new Ce(J);return this.ps.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gs)),!0)},o),k.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(r=>{const i=this.Is(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){re(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ps;return k.forEach(n.mutations,i=>{const s=new Ae(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=r})}bn(e){}containsKey(e,n){const r=new Ae(n,0),i=this.ps.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.Rs=e,this.docs=new Re(U.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():He.newInvalidDocument(n))}getEntries(e,n){let r=_n();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():He.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=_n();const o=n.path,a=new U(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ux(bx(c),r)<=0||(i.has(c.key)||Lu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$()}bs(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GN(this)}getSize(e){return k.resolve(this.size)}}class GN extends zN{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.persistence=e,this.vs=new ns(n=>ip(n),sp),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new hp,this.targetCount=0,this.Ss=zi.Vn()}forEachTarget(e,n){return this.vs.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ps&&(this.Ps=n),k.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new zi(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.xn(n),k.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.vs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.vs.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Vs.hs(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Vs.fs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Vs.ws(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new np(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new QN(this),this.indexManager=new FN,this.remoteDocumentCache=function(r){return new KN(r)}(r=>this.referenceDelegate.ks(r)),this.Tt=new MN(n),this.Os=new HN(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ds[e.toKey()];return r||(r=new WN(n,this.referenceDelegate),this.Ds[e.toKey()]=r),r}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new YN(this.Cs.next());return this.referenceDelegate.Ms(),r(i).next(s=>this.referenceDelegate.Fs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}$s(e,n){return k.or(Object.values(this.Ds).map(r=>()=>r.containsKey(e,n)))}}class YN extends $x{constructor(e){super(),this.currentSequenceNumber=e}}class dp{constructor(e){this.persistence=e,this.Bs=new hp,this.Ls=null}static qs(e){return new dp(e)}get Us(){if(this.Ls)return this.Ls;throw $()}addReference(e,n,r){return this.Bs.addReference(r,n),this.Us.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.Bs.removeReference(r,n),this.Us.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),k.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Us.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Us,r=>{const i=U.fromPath(r);return this.Ks(e,i).next(s=>{s||n.removeEntry(i,V.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(r=>{r?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return k.or([()=>k.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ci=r,this.xi=i}static Ni(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new fp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Mi(e,n).next(s=>s||this.Fi(e,n,i,r)).next(s=>s||this.$i(e,n))}Mi(e,n){if(ny(n))return k.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bl(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Bi(n,a);return this.Li(n,u,o,l.readTime)?this.Mi(e,bl(n,null,"F")):this.qi(e,u,n,l)}))})))}Fi(e,n,r,i){return ny(n)||i.isEqual(V.min())?this.$i(e,n):this.Oi.getDocuments(e,r).next(s=>{const o=this.Bi(n,s);return this.Li(n,o,r,i)?this.$i(e,n):(Wg()<=Y.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Td(n)),this.qi(e,o,n,Lx(i,-1)))})}Bi(e,n){let r=new Ce(G_(e));return n.forEach((i,s)=>{Lu(e,s)&&(r=r.add(s))}),r}Li(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}$i(e,n){return Wg()<=Y.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",Td(n)),this.Oi.getDocumentsMatchingQuery(e,n,er.min())}qi(e,n,r,i){return this.Oi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n,r,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new Re(J),this.Gi=new ns(s=>ip(s),sp),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(r)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jN(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function eA(t,e,n,r){return new ZN(t,e,n,r)}async function g1(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function tA(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=k.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);re(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=q();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function y1(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function nA(t,e){const n=z(t),r=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ye.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,E){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,g,c)&&a.push(n.Ns.updateTargetData(s,g))});let l=_n(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(rA(s,o,e.documentUpdates).next(c=>{l=c.Hi,u=c.Ji})),!r.isEqual(V.min())){const c=n.Ns.getLastRemoteSnapshotVersion(s).next(h=>n.Ns.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ki=i,s))}function rA(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=_n();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(V.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function iA(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sA(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ns.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):n.Ns.allocateTargetId(r).next(o=>(i=new Nr(e,o,0,r.currentSequenceNumber),n.Ns.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ki.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(r.targetId,r),n.Gi.set(e,r.targetId)),r})}async function Cd(t,e,n){const r=z(t),i=r.Ki.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Bo(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ki=r.Ki.remove(e),r.Gi.delete(i.target)}function hy(t,e,n){const r=z(t);let i=V.min(),s=q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=z(a),h=c.Gi.get(u);return h!==void 0?k.resolve(c.Ki.get(h)):c.Ns.getTargetData(l,u)}(r,o,wn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Ui.getDocumentsMatchingQuery(o,e,n?i:V.min(),n?s:q())).next(a=>(oA(r,tN(e),a),{documents:a,Yi:s})))}function oA(t,e,n){let r=t.Qi.get(e)||V.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Qi.set(e,r)}class dy{constructor(){this.activeTargetIds=a1()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aA{constructor(){this.Ur=new dy,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,r){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new dy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,r,i,s){const o=this.fo(e,n);b("RestConnection","Sending: ",o,r);const a={};return this._o(a,i,s),this.wo(e,o,a,r).then(l=>(b("RestConnection","Received: ",l),l),l=>{throw gd("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}mo(e,n,r,i,s,o){return this.lo(e,n,r,i,s)}_o(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+es,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}fo(e,n){const r=uA[e];return`${this.co}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,r,i){return new Promise((s,o)=>{const a=new kx;a.setWithCredentials(!0),a.listenOnce(Ex.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Wc.NO_ERROR:const u=a.getResponseJson();b("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Wc.TIMEOUT:b("Connection",'RPC "'+e+'" timed out'),o(new A(T.DEADLINE_EXCEEDED,"Request time out"));break;case Wc.HTTP_ERROR:const c=a.getStatus();if(b("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(y){const v=y.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(v)>=0?v:T.UNKNOWN}(d.status);o(new A(g,d.message))}else o(new A(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(T.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{b("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}yo(e,n,r){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=wx(),o=_x(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Sx({})),this._o(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");b("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new cA({Yr:y=>{h?b("Connection","Not sending because WebChannel is closed:",y):(c||(b("Connection","Opening WebChannel transport."),u.open(),c=!0),b("Connection","WebChannel sending:",y),u.send(y))},Zr:()=>u.close()}),g=(y,v,E)=>{y.listen(v,p=>{try{E(p)}catch(f){setTimeout(()=>{throw f},0)}})};return g(u,Ta.EventType.OPEN,()=>{h||b("Connection","WebChannel transport opened.")}),g(u,Ta.EventType.CLOSE,()=>{h||(h=!0,b("Connection","WebChannel transport closed"),d.oo())}),g(u,Ta.EventType.ERROR,y=>{h||(h=!0,gd("Connection","WebChannel transport errored:",y),d.oo(new A(T.UNAVAILABLE,"The operation could not be completed")))}),g(u,Ta.EventType.MESSAGE,y=>{var v;if(!h){const E=y.data[0];re(!!E);const p=E,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){b("Connection","WebChannel received error:",f);const m=f.status;let w=function(x){const N=ve[x];if(N!==void 0)return r1(N)}(m),I=f.message;w===void 0&&(w=T.INTERNAL,I="Unknown error status: "+m+" with message "+f.message),h=!0,d.oo(new A(w,I)),u.close()}else b("Connection","WebChannel received:",E),d.uo(E)}}),g(o,Tx.STAT_EVENT,y=>{y.stat===Hg.PROXY?b("Connection","Detected buffering proxy"):y.stat===Hg.NOPROXY&&b("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Gc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t){return new EN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ys=e,this.timerId=n,this.po=r,this.Io=i,this.To=s,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),r=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n,r,i,s,o,a,l){this.Ys=e,this.So=r,this.Do=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new v1(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Co===n&&this.jo(r,i)},r=>{e(()=>{const i=new A(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.zo(i)})})}jo(e,n){const r=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{r(()=>this.zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dA extends w1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=kN(this.Tt,e),r=function(i){if(!("targetChange"in i))return V.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?V.min():s.readTime?Kt(s.readTime):V.min()}(e);return this.listener.Ho(n,r)}Jo(e){const n={};n.database=Id(this.Tt),n.addTarget=function(i,s){let o;const a=s.target;return o=_d(a)?{documents:RN(i,a)}:{query:xN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=c1(i,s.resumeToken):s.snapshotVersion.compareTo(V.min())>0&&(o.readTime=Ml(i,s.snapshotVersion.toTimestamp())),o}(this.Tt,e);const r=AN(this.Tt,e);r&&(n.labels=r),this.qo(n)}Yo(e){const n={};n.database=Id(this.Tt),n.removeTarget=e,this.qo(n)}}class fA extends w1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=CN(e.writeResults,e.commitTime),r=Kt(e.commitTime);return this.listener.eu(r,n)}return re(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Id(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>IN(this.Tt,r))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new A(T.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.lo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(T.UNKNOWN,i.toString())})}mo(e,n,r,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.mo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(T.UNKNOWN,s.toString())})}terminate(){this.iu=!0}}class mA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(vn(n),this.cu=!1):b("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=s,this.yu.Gr(o=>{r.enqueueAndForget(async()=>{Gr(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=z(a);l.mu.add(4),await qo(l),l.pu.set("Unknown"),l.mu.delete(4),await Fu(l)}(this))})}),this.pu=new mA(r,i)}}async function Fu(t){if(Gr(t))for(const e of t.gu)await e(!0)}async function qo(t){for(const e of t.gu)await e(!1)}function _1(t,e){const n=z(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),gp(n)?mp(n):rs(n).Mo()&&pp(n,e))}function E1(t,e){const n=z(t),r=rs(n);n.wu.delete(e),r.Mo()&&T1(n,e),n.wu.size===0&&(r.Mo()?r.Bo():Gr(n)&&n.pu.set("Unknown"))}function pp(t,e){t.Iu.Ft(e.targetId),rs(t).Jo(e)}function T1(t,e){t.Iu.Ft(e),rs(t).Yo(e)}function mp(t){t.Iu=new yN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),rs(t).start(),t.pu.au()}function gp(t){return Gr(t)&&!rs(t).Oo()&&t.wu.size>0}function Gr(t){return z(t).mu.size===0}function S1(t){t.Iu=void 0}async function yA(t){t.wu.forEach((e,n)=>{pp(t,e)})}async function vA(t,e){S1(t),gp(t)?(t.pu.fu(e),mp(t)):t.pu.set("Unknown")}async function wA(t,e,n){if(t.pu.set("Online"),e instanceof u1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.wu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.wu.delete(o),r.Iu.removeTarget(o))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $l(t,r)}else if(e instanceof Ha?t.Iu.Qt(e):e instanceof l1?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(V.min()))try{const r=await y1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Iu.ee(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.wu.get(l);u&&i.wu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(Ye.EMPTY_BYTE_STRING,l.snapshotVersion)),T1(i,a);const u=new Nr(l.target,a,1,l.sequenceNumber);pp(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await $l(t,r)}}async function $l(t,e,n){if(!Bo(e))throw e;t.mu.add(1),await qo(t),t.pu.set("Offline"),n||(n=()=>y1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Fu(t)})}function k1(t,e){return e().catch(n=>$l(t,n,e))}async function Vu(t){const e=z(t),n=nr(e);let r=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;_A(e);)try{const i=await iA(e.localStore,r);if(i===null){e._u.length===0&&n.Bo();break}r=i.batchId,EA(e,i)}catch(i){await $l(e,i)}I1(e)&&C1(e)}function _A(t){return Gr(t)&&t._u.length<10}function EA(t,e){t._u.push(e);const n=nr(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function I1(t){return Gr(t)&&!nr(t).Oo()&&t._u.length>0}function C1(t){nr(t).start()}async function TA(t){nr(t).su()}async function SA(t){const e=nr(t);for(const n of t._u)e.tu(n.mutations)}async function kA(t,e,n){const r=t._u.shift(),i=cp.from(r,e,n);await k1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vu(t)}async function IA(t,e){e&&nr(t).Xo&&await async function(n,r){if(i=r.code,dN(i)&&i!==T.ABORTED){const s=n._u.shift();nr(n).$o(),await k1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Vu(n)}var i}(t,e),I1(t)&&C1(t)}async function py(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=Gr(n);n.mu.add(3),await qo(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Fu(n)}async function CA(t,e){const n=z(t);e?(n.mu.delete(2),await Fu(n)):e||(n.mu.add(2),await qo(n),n.pu.set("Unknown"))}function rs(t){return t.Tu||(t.Tu=function(e,n,r){const i=z(e);return i.ru(),new dA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:yA.bind(null,t),no:vA.bind(null,t),Ho:wA.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),gp(t)?mp(t):t.pu.set("Unknown")):(await t.Tu.stop(),S1(t))})),t.Tu}function nr(t){return t.Eu||(t.Eu=function(e,n,r){const i=z(e);return i.ru(),new fA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:TA.bind(null,t),no:IA.bind(null,t),nu:SA.bind(null,t),eu:kA.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await Vu(t)):(await t.Eu.stop(),t._u.length>0&&(b("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new yp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vp(t,e){if(vn("AsyncQueue",`${e}: ${t}`),Bo(t))return new A(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.comparator=e?(n,r)=>e(n,r)||U.comparator(n.key,r.key):(n,r)=>U.comparator(n.key,r.key),this.keyedMap=Ns(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new ki(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ki;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.Au=new Re(U.comparator)}track(e){const n=e.doc.key,r=this.Au.get(n);r?e.type!==0&&r.type===3?this.Au=this.Au.insert(n,e):e.type===3&&r.type!==1?this.Au=this.Au.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Au=this.Au.remove(n):e.type===1&&r.type===2?this.Au=this.Au.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):$():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bi(e,n,ki.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ou(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(){this.bu=void 0,this.listeners=[]}}class xA{constructor(){this.queries=new ns(e=>K_(e),Ou),this.onlineState="Unknown",this.vu=new Set}}async function wp(t,e){const n=z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new RA),i)try{s.bu=await n.onListen(r)}catch(o){const a=vp(o,`Initialization of query '${Td(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.bu&&e.Vu(s.bu)&&Ep(n)}async function _p(t,e){const n=z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function NA(t,e){const n=z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Vu(i)&&(r=!0);o.bu=i}}r&&Ep(n)}function AA(t,e,n){const r=z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ep(t){t.vu.forEach(e=>{e.next()})}class Tp{constructor(e,n,r){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Bi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ou||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.key=e}}class x1{constructor(e){this.key=e}}class DA{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=q(),this.mutatedKeys=q(),this.ju=G_(e),this.zu=new ki(this.ju)}get Wu(){return this.Ku}Hu(e,n){const r=n?n.Ju:new my,i=n?n.zu:this.zu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Lu(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;d&&g?d.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),E=!0):this.Yu(d,g)||(r.track({type:2,doc:g}),E=!0,(l&&this.ju(g,l)>0||u&&this.ju(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),E=!0):d&&!g&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{zu:o,Ju:r,Li:a,mutatedKeys:s}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const s=e.Ju.Ru();s.sort((u,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return g(h)-g(d)}(u.type,c.type)||this.ju(u.doc,c.doc)),this.Zu(r);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,s.length!==0||l?{snapshot:new Bi(this.query,e.zu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new my,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=q(),this.zu.forEach(r=>{this.ec(r.key)&&(this.Qu=this.Qu.add(r.key))});const n=[];return e.forEach(r=>{this.Qu.has(r)||n.push(new x1(r))}),this.Qu.forEach(r=>{e.has(r)||n.push(new R1(r))}),n}nc(e){this.Ku=e.Yi,this.Qu=q();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Bi.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class PA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OA{constructor(e){this.key=e,this.ic=!1}}class LA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new ns(a=>K_(a),Ou),this.uc=new Map,this.cc=new Set,this.ac=new Re(U.comparator),this.hc=new Map,this.lc=new hp,this.fc={},this.dc=new Map,this._c=zi.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function bA(t,e){const n=qA(t);let r,i;const s=n.oc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.sc();else{const o=await sA(n.localStore,wn(e));n.isPrimaryClient&&_1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await UA(n,e,r,a==="current",o.resumeToken)}return i}async function UA(t,e,n,r,i){t.mc=(h,d,g)=>async function(y,v,E,p){let f=v.view.Hu(E);f.Li&&(f=await hy(y.localStore,v.query,!1).then(({documents:I})=>v.view.Hu(I,f)));const m=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(f,y.isPrimaryClient,m);return yy(y,v.targetId,w.tc),w.snapshot}(t,h,d,g);const s=await hy(t.localStore,e,!0),o=new DA(e,s.Yi),a=o.Hu(s.documents),l=Ho.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);yy(t,n,u.tc);const c=new PA(e,n,o);return t.oc.set(e,c),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function MA(t,e){const n=z(t),r=n.oc.get(e),i=n.uc.get(r.targetId);if(i.length>1)return n.uc.set(r.targetId,i.filter(s=>!Ou(s,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Cd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),E1(n.remoteStore,r.targetId),Rd(n,r.targetId)}).catch(zo)):(Rd(n,r.targetId),await Cd(n.localStore,r.targetId,!0))}async function $A(t,e,n){const r=WA(t);try{const i=await function(s,o){const a=z(s),l=Se.now(),u=o.reduce((d,g)=>d.add(g.key),q());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=_n(),y=q();return a.ji.getEntries(d,u).next(v=>{g=v,g.forEach((E,p)=>{p.isValidDocument()||(y=y.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{c=v;const E=[];for(const p of o){const f=uN(p,c.get(p.key).overlayedDocument);f!=null&&E.push(new cr(p.key,f,q_(f.value.mapValue),Ct.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:s1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.fc[s.currentUser.toKey()];l||(l=new Re(J)),l=l.insert(o,a),s.fc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Wo(r,i.changes),await Vu(r.remoteStore)}catch(i){const s=vp(i,"Failed to persist write");n.reject(s)}}async function N1(t,e){const n=z(t);try{const r=await nA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.hc.get(s);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?re(o.ic):i.removedDocuments.size>0&&(re(o.ic),o.ic=!1))}),await Wo(n,r,e)}catch(r){await zo(r)}}function gy(t,e,n){const r=z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.oc.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=z(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Pu(o)&&(l=!0)}),l&&Ep(a)}(r.eventManager,e),i.length&&r.rc.Ho(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function FA(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.hc.get(e),s=i&&i.key;if(s){let o=new Re(U.comparator);o=o.insert(s,He.newNoDocument(s,V.min()));const a=q().add(s),l=new Mu(V.min(),new Map,new Ce(J),o,a);await N1(r,l),r.ac=r.ac.remove(s),r.hc.delete(e),Sp(r)}else await Cd(r.localStore,e,!1).then(()=>Rd(r,e,n)).catch(zo)}async function VA(t,e){const n=z(t),r=e.batch.batchId;try{const i=await tA(n.localStore,e);D1(n,r,null),A1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wo(n,i)}catch(i){await zo(i)}}async function zA(t,e,n){const r=z(t);try{const i=await function(s,o){const a=z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(re(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);D1(r,e,n),A1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wo(r,i)}catch(i){await zo(i)}}function A1(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function D1(t,e,n){const r=z(t);let i=r.fc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fc[r.currentUser.toKey()]=i}}function Rd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.uc.get(e))t.oc.delete(r),n&&t.rc.gc(r,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(r=>{t.lc.containsKey(r)||P1(t,r)})}function P1(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(E1(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Sp(t))}function yy(t,e,n){for(const r of n)r instanceof R1?(t.lc.addReference(r.key,e),BA(t,r)):r instanceof x1?(b("SyncEngine","Document no longer in limbo: "+r.key),t.lc.removeReference(r.key,e),t.lc.containsKey(r.key)||P1(t,r.key)):$()}function BA(t,e){const n=e.key,r=n.path.canonicalString();t.ac.get(n)||t.cc.has(r)||(b("SyncEngine","New document in limbo: "+n),t.cc.add(r),Sp(t))}function Sp(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new U(se.fromString(e)),r=t._c.next();t.hc.set(r,new OA(n)),t.ac=t.ac.insert(n,r),_1(t.remoteStore,new Nr(wn(Du(n.path)),r,2,np.at))}}async function Wo(t,e,n){const r=z(t),i=[],s=[],o=[];r.oc.isEmpty()||(r.oc.forEach((a,l)=>{o.push(r.mc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=fp.Ni(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.rc.Ho(i),await async function(a,l){const u=z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>k.forEach(l,h=>k.forEach(h.Ci,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>k.forEach(h.xi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Bo(c))throw c;b("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ki.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(h,y)}}}(r.localStore,s))}async function jA(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await g1(n.localStore,e);n.currentUser=e,function(i,s){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new A(T.CANCELLED,s))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wo(n,r.Wi)}}function HA(t,e){const n=z(t),r=n.hc.get(e);if(r&&r.ic)return q().add(r.key);{let i=q();const s=n.uc.get(e);if(!s)return i;for(const o of s){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function qA(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=N1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FA.bind(null,e),e.rc.Ho=NA.bind(null,e.eventManager),e.rc.gc=AA.bind(null,e.eventManager),e}function WA(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zA.bind(null,e),e}class KA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=$u(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return eA(this.persistence,new JN,e.initialUser,this.Tt)}Tc(e){return new XN(dp.qs,this.Tt)}Ic(e){return new aA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class GA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jA.bind(null,this.syncEngine),await CA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new xA}createDatastore(e){const n=$u(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new hA(i));var i;return function(s,o,a,l){return new pA(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>gy(this.syncEngine,a,0),o=fy.C()?new fy:new lA,new gA(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new LA(r,i,s,o,a,l);return u&&(c.wc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=z(e);b("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await qo(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Be.UNAUTHENTICATED,this.clientId=b_.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function XA(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await g1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function YA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JA(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>py(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>py(e.remoteStore,s)),t.onlineComponents=e}async function JA(t){return t.offlineComponents||(b("FirestoreClient","Using default OfflineComponentProvider"),await XA(t,new KA)),t.offlineComponents}async function O1(t){return t.onlineComponents||(b("FirestoreClient","Using default OnlineComponentProvider"),await YA(t,new GA)),t.onlineComponents}function ZA(t){return O1(t).then(e=>e.syncEngine)}async function Fl(t){const e=await O1(t),n=e.eventManager;return n.onListen=bA.bind(null,e.syncEngine),n.onUnlisten=MA.bind(null,e.syncEngine),n}function eD(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new kp({next:h=>{s.enqueueAndForget(()=>_p(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new A(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new A(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Tp(Du(o.path),u,{includeMetadataChanges:!0,Ou:!0});return wp(i,c)}(await Fl(t),t.asyncQueue,e,n,r)),r.promise}function tD(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new kp({next:h=>{s.enqueueAndForget(()=>_p(i,c)),h.fromCache&&a.source==="server"?l.reject(new A(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Tp(o,u,{includeMetadataChanges:!0,Ou:!0});return wp(i,c)}(await Fl(t),t.asyncQueue,e,n,r)),r.promise}const vy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t,e,n){if(!n)throw new A(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nD(t,e,n,r){if(e===!0&&r===!0)throw new A(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wy(t){if(!U.isDocumentKey(t))throw new A(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _y(t){if(U.isDocumentKey(t))throw new A(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zu(t);throw new A(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function rD(t,e){if(e<=0)throw new A(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,nD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ey({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ey(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ix;switch(n.type){case"gapi":const r=n.client;return new Nx(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=vy.get(e);n&&(b("ComponentProvider","Removing Datastore"),vy.delete(e),n.terminate())}(this),Promise.resolve()}}function iD(t,e,n,r={}){var i;const s=(t=dt(t,Bu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&gd("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Be.MOCK_USER;else{o=Cw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new A(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Be(l)}t._authCredentials=new Cx(new L_(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}}class kn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kn(this.firestore,e,this._query)}}class Xn extends kn{constructor(e,n,r){super(e,n,Du(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new U(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function Qr(t,e,...n){if(t=W(t),L1("collection","path",e),t instanceof Bu){const r=se.fromString(e,...n);return _y(r),new Xn(t,null,r)}{if(!(t instanceof Ge||t instanceof Xn))throw new A(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return _y(r),new Xn(t.firestore,null,r)}}function ju(t,e,...n){if(t=W(t),arguments.length===1&&(e=b_.R()),L1("doc","path",e),t instanceof Bu){const r=se.fromString(e,...n);return wy(r),new Ge(t,null,new U(r))}{if(!(t instanceof Ge||t instanceof Xn))throw new A(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return wy(r),new Ge(t.firestore,t instanceof Xn?t.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new v1(this,"async_queue_retry"),this.Hc=()=>{const n=Gc();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Gc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new dn;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Bo(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(r=>{this.Qc=r,this.jc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw vn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.jc=!1,r))));return this.qc=n,n}enqueueAfterDelay(e,n,r){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=yp.createAndSchedule(this,e,n,r,s=>this.Xc(s));return this.Gc.push(i),i}Jc(){this.Qc&&$()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Ty(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class En extends Bu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new sD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||b1(this),this._firestoreClient.terminate()}}function oD(t,e){const n=typeof t=="object"?t:Of(),r=typeof t=="string"?t:e||"(default)",i=pu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=kw("firestore");s&&iD(i,...s)}return i}function Hu(t){return t._firestoreClient||b1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function b1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new Fx(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new QA(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ji(Ye.fromBase64String(e))}catch(n){throw new A(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ji(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=/^__.*__$/;class lD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new jo(e,this.data,n,this.fieldTransforms)}}class U1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function M1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Wu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.Tt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ia(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Wu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.aa(e),i}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Vl(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(M1(this.ra)&&aD.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class uD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=r||$u(e)}wa(e,n,r,i=!1){return new Wu({ra:e,methodName:n,_a:r,path:qe.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Ku(t){const e=t._freezeSettings(),n=$u(t._databaseId);return new uD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $1(t,e,n,r,i,s={}){const o=t.wa(s.merge||s.mergeFields?2:0,e,n,i);Rp("Data must be an object, but it was:",o,r);const a=V1(r,o);let l,u;if(s.merge)l=new gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=xd(e,h,n);if(!o.contains(d))throw new A(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);B1(c,d)||c.push(d)}l=new gt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new lD(new at(a),l,u)}class Gu extends is{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gu}}function F1(t,e,n){return new Wu({ra:3,_a:e.settings._a,methodName:t._methodName,ca:n},e.databaseId,e.Tt,e.ignoreUndefinedProperties)}class Cp extends is{_toFieldTransform(e){return new ap(e.path,new Eo)}isEqual(e){return e instanceof Cp}}class cD extends is{constructor(e,n){super(e),this.ma=n}_toFieldTransform(e){const n=F1(this,e,!0),r=this.ma.map(s=>Xr(s,n)),i=new Fi(r);return new ap(e.path,i)}isEqual(e){return this===e}}class hD extends is{constructor(e,n){super(e),this.ma=n}_toFieldTransform(e){const n=F1(this,e,!0),r=this.ma.map(s=>Xr(s,n)),i=new Vi(r);return new ap(e.path,i)}isEqual(e){return this===e}}function dD(t,e,n,r){const i=t.wa(1,e,n);Rp("Data must be an object, but it was:",i,r);const s=[],o=at.empty();Kr(r,(l,u)=>{const c=xp(e,l,n);u=W(u);const h=i.ha(c);if(u instanceof Gu)s.push(c);else{const d=Xr(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new gt(s);return new U1(o,a,i.fieldTransforms)}function fD(t,e,n,r,i,s){const o=t.wa(1,e,n),a=[xd(e,r,n)],l=[i];if(s.length%2!=0)throw new A(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(xd(e,s[d])),l.push(s[d+1]);const u=[],c=at.empty();for(let d=a.length-1;d>=0;--d)if(!B1(u,a[d])){const g=a[d];let y=l[d];y=W(y);const v=o.ha(g);if(y instanceof Gu)u.push(g);else{const E=Xr(y,v);E!=null&&(u.push(g),c.set(g,E))}}const h=new gt(u);return new U1(c,h,o.fieldTransforms)}function pD(t,e,n,r=!1){return Xr(n,t.wa(r?4:3,e))}function Xr(t,e){if(z1(t=W(t)))return Rp("Unsupported field value:",e,t),V1(t,e);if(t instanceof is)return function(n,r){if(!M1(r.ra))throw r.fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Xr(o,r.la(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=W(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rN(r.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Se.fromDate(n);return{timestampValue:Ml(r.Tt,i)}}if(n instanceof Se){const i=new Se(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ml(r.Tt,i)}}if(n instanceof Ip)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ji)return{bytesValue:c1(r.Tt,n._byteString)};if(n instanceof Ge){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:up(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.fa(`Unsupported field value: ${zu(n)}`)}(t,e)}function V1(t,e){const n={};return U_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kr(t,(r,i)=>{const s=Xr(i,e.ua(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function z1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof Ip||t instanceof ji||t instanceof Ge||t instanceof is)}function Rp(t,e,n){if(!z1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=zu(n);throw r==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+r)}}function xd(t,e,n){if((e=W(e))instanceof qu)return e._internalPath;if(typeof e=="string")return xp(t,e);throw Vl("Field path arguments must be of type string or ",t,!1,void 0,n)}const mD=new RegExp("[~\\*/\\[\\]]");function xp(t,e,n){if(e.search(mD)>=0)throw Vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qu(...e.split("."))._internalPath}catch{throw Vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new A(T.INVALID_ARGUMENT,a+t+l)}function B1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Np("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gD extends j1{data(){return super.data()}}function Np(t,e){return typeof e=="string"?xp(t,e):e instanceof qu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ap{}class Dp extends Ap{}function Qu(t,e,...n){let r=[];e instanceof Ap&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Op).length,o=i.filter(a=>a instanceof Pp).length;if(s>1||s>0&&o>0)throw new A(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Pp extends Dp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Pp(e,n,r)}_apply(e){const n=this._parse(e);return W1(e._query,n),new kn(e.firestore,e.converter,Ed(e._query,n))}_parse(e){const n=Ku(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new A(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ky(c,u);const d=[];for(const g of c)d.push(Sy(a,i,g));h={arrayValue:{values:d}}}else h=Sy(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ky(c,u),h=pD(o,s,c,u==="in"||u==="not-in");return Ee.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Op extends Ap{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Op(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:$t.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)W1(s,a),s=Ed(s,a)}(e._query,n),new kn(e.firestore,e.converter,Ed(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Lp extends Dp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Lp(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new A(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new A(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ti(i,s);return function(a,l){if(op(a)===null){const u=Pu(a);u!==null&&K1(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new kn(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new ts(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function q1(t,e="asc"){const n=e,r=Np("orderBy",t);return Lp._create(r,n)}class bp extends Dp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new bp(e,n,r)}_apply(e){return new kn(e.firestore,e.converter,bl(e._query,this._limit,this._limitType))}}function yD(t){return rD("limit",t),bp._create("limit",t,"F")}function Sy(t,e,n){if(typeof(n=W(n))=="string"){if(n==="")throw new A(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!W_(e)&&n.indexOf("/")!==-1)throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!U.isDocumentKey(r))throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Qg(t,new U(r))}if(n instanceof Ge)return Qg(t,n._key);throw new A(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zu(n)}.`)}function ky(t,e){if(!Array.isArray(t)||t.length===0)throw new A(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function W1(t,e){if(e.isInequality()){const r=Pu(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new A(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=op(t);s!==null&&K1(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function K1(t,e,n){if(!n.isEqual(e))throw new A(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class vD{convertValue(e,n="none"){switch(Vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){const r={};return Kr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Ip(we(e.latitude),we(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wo(e));default:return null}}convertTimestamp(e){const n=tr(e);return new Se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);re(m1(r));const i=new vo(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(n)||vn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Q1 extends j1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Np("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qa extends Q1{data(e={}){return super.data(e)}}class X1{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new As(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qa(this._firestore,this._userDataWriter,r.key,r,new As(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new qa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new As(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new qa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new As(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:wD(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(t){t=dt(t,Ge);const e=dt(t.firestore,En);return eD(Hu(e),t._key).then(n=>J1(e,t,n))}class Up extends vD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ji(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function Nd(t){t=dt(t,kn);const e=dt(t.firestore,En),n=Hu(e),r=new Up(e);return H1(t._query),tD(n,t._query).then(i=>new X1(e,r,t,i))}function ED(t,e,n){t=dt(t,Ge);const r=dt(t.firestore,En),i=G1(t.converter,e,n);return Xu(r,[$1(Ku(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ct.none())])}function ss(t,e,n,...r){t=dt(t,Ge);const i=dt(t.firestore,En),s=Ku(i);let o;return o=typeof(e=W(e))=="string"||e instanceof qu?fD(s,"updateDoc",t._key,e,n,r):dD(s,"updateDoc",t._key,e),Xu(i,[o.toMutation(t._key,Ct.exists(!0))])}function Qc(t){return Xu(dt(t.firestore,En),[new lp(t._key,Ct.none())])}function Mp(t,e){const n=dt(t.firestore,En),r=ju(t),i=G1(t.converter,e);return Xu(n,[$1(Ku(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ct.exists(!1))]).then(()=>r)}function Y1(t,...e){var n,r,i;t=W(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ty(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Ty(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Ge)u=dt(t.firestore,En),c=Du(t._key.path),l={next:h=>{e[o]&&e[o](J1(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=dt(t,kn);u=dt(h.firestore,En),c=h._query;const d=new Up(u);l={next:g=>{e[o]&&e[o](new X1(u,d,h,g))},error:e[o+1],complete:e[o+2]},H1(t._query)}return function(h,d,g,y){const v=new kp(y),E=new Tp(d,v,g);return h.asyncQueue.enqueueAndForget(async()=>wp(await Fl(h),E)),()=>{v.Pc(),h.asyncQueue.enqueueAndForget(async()=>_p(await Fl(h),E))}}(Hu(u),c,a,l)}function Xu(t,e){return function(n,r){const i=new dn;return n.asyncQueue.enqueueAndForget(async()=>$A(await ZA(n),r,i)),i.promise}(Hu(t),e)}function J1(t,e,n){const r=n.docs.get(e._key),i=new Up(t);return new Q1(t,i,e._key,r,new As(n.hasPendingWrites,n.fromCache),e.converter)}function Z1(){return new Cp("serverTimestamp")}function TD(...t){return new cD("arrayUnion",t)}function SD(...t){return new hD("arrayRemove",t)}(function(t,e=!0){(function(n){es=n})(Yi),$r(new Zn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new En(new Rx(n.getProvider("auth-internal")),new Dx(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Wt(qg,"3.8.4",t),Wt(qg,"3.8.4","esm2017")})();const kD=R.exports.exact({x:R.exports.number,y:R.exports.number}),eE=R.exports.exact({id:R.exports.string,name:R.exports.string,image:R.exports.string,coords:kD,found:R.exports.bool}),ID=R.exports.exact({name:R.exports.string,image:R.exports.string,id:R.exports.string,createdAt:R.exports.instanceOf(Se),user:R.exports.string}),CD=R.exports.instanceOf(HTMLElement),RD=t=>R.exports.shape({current:t}),Yr=R.exports.oneOfType([R.exports.arrayOf(R.exports.node),R.exports.node]);function $p(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function tE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xD=tE,nE=new Ao("auth","Firebase",tE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=new Df("@firebase/auth");function Wa(t,...e){Iy.logLevel<=Y.ERROR&&Iy.error(`Auth (${Yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,...e){throw Vp(t,...e)}function Gt(t,...e){return Vp(t,...e)}function rE(t,e,n){const r=Object.assign(Object.assign({},xD()),{[e]:n});return new Ao("auth","Firebase",r).create(e,{appName:t.name})}function Fp(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Nt(t,"argument-error"),rE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nE.create(t,...e)}function M(t,e,...n){if(!t)throw Vp(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wa(e),new Error(e)}function Tn(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=new Map;function un(t){Tn(t instanceof Function,"Expected a class definition");let e=Cy.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cy.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t,e){const n=pu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Sl(s,e!=null?e:{}))return i;Nt(i,"already-initialized")}return n.initialize({options:e})}function AD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iE(){return Ry()==="http:"||Ry()==="https:"}function Ry(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iE()||oC()||"connection"in navigator)?navigator.onLine:!0}function PD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=iC()||aC()}get(){return DD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=new Ko(3e4,6e4);function hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function In(t,e,n,r,i={}){return oE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Do(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),sE.fetch()(aE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function oE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},OD),e);try{const i=new bD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ia(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ia(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ia(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ia(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw rE(t,c,u);Nt(t,c)}}catch(i){if(i instanceof Jt)throw i;Nt(t,"internal-error",{message:String(i)})}}async function Go(t,e,n,r,i={}){const s=await In(t,e,n,r,i);return"mfaPendingCredential"in s&&Nt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function aE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zp(t.config,i):`${t.config.apiScheme}://${i}`}class bD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),LD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD(t,e){return In(t,"POST","/v1/accounts:delete",e)}async function MD(t,e){return In(t,"POST","/v1/accounts:update",e)}async function $D(t,e){return In(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FD(t,e=!1){const n=W(t),r=await n.getIdToken(e),i=Bp(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hs(Xc(i.auth_time)),issuedAtTime:Hs(Xc(i.iat)),expirationTime:Hs(Xc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xc(t){return Number(t)*1e3}function Bp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Tw(n);return i?JSON.parse(i):(Wa("Failed to decode base64 JWT payload"),null)}catch(i){return Wa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function VD(t){const e=Bp(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&zD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hi(t,$D(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?qD(s.providerUserInfo):[],a=HD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new lE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function jD(t){const e=W(t);await To(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qD(t){return t.map(e=>{var{providerId:n}=e,r=$p(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WD(t,e){const n=await oE(t,{},async()=>{const r=Do({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=aE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):VD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new So;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new So,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ar{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$p(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hi(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FD(this,e)}reload(){return jD(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ar(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await To(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hi(this,UD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:I,providerData:x,stsTokenManager:N}=n;M(m&&N,e,"internal-error");const O=So.fromJSON(this.name,N);M(typeof m=="string",e,"internal-error"),Rn(h,e.name),Rn(d,e.name),M(typeof w=="boolean",e,"internal-error"),M(typeof I=="boolean",e,"internal-error"),Rn(g,e.name),Rn(y,e.name),Rn(v,e.name),Rn(E,e.name),Rn(p,e.name),Rn(f,e.name);const Z=new Ar({uid:m,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:I,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:O,createdAt:p,lastLoginAt:f});return x&&Array.isArray(x)&&(Z.providerData=x.map(H=>Object.assign({},H))),E&&(Z._redirectEventId=E),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new So;i.updateFromServerResponse(n);const s=new Ar({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await To(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uE.type="NONE";const xy=uE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t,e,n){return`firebase:${t}:${e}:${n}`}class Ii{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ka(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ka("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ar._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ii(un(xy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||un(xy);const o=Ka(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ar._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ii(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ii(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pE(e))return"Blackberry";if(mE(e))return"Webos";if(jp(e))return"Safari";if((e.includes("chrome/")||hE(e))&&!e.includes("edge/"))return"Chrome";if(fE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cE(t=Xe()){return/firefox\//i.test(t)}function jp(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hE(t=Xe()){return/crios\//i.test(t)}function dE(t=Xe()){return/iemobile/i.test(t)}function fE(t=Xe()){return/android/i.test(t)}function pE(t=Xe()){return/blackberry/i.test(t)}function mE(t=Xe()){return/webos/i.test(t)}function Yu(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KD(t=Xe()){var e;return Yu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GD(){return lC()&&document.documentMode===10}function gE(t=Xe()){return Yu(t)||fE(t)||mE(t)||pE(t)||/windows phone/i.test(t)||dE(t)}function QD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t,e=[]){let n;switch(t){case"Browser":n=Ny(Xe());break;case"Worker":n=`${Ny(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ay(this),this.idTokenSubscription=new Ay(this),this.beforeStateQueue=new XD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ii.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await To(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?W(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ao("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Ii.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function os(t){return W(t)}class Ay{constructor(e){this.auth=e,this.observer=null,this.addObserver=mC(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function JD(t,e,n){const r=os(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=vE(e),{host:o,port:a}=ZD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||eP()}function vE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZD(t){const e=vE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Dy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Dy(o)}}}function Dy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function wE(t,e){return In(t,"POST","/v1/accounts:update",e)}async function tP(t,e){return In(t,"POST","/v1/accounts:update",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,e){return Go(t,"POST","/v1/accounts:signInWithPassword",hr(t,e))}async function rP(t,e){return In(t,"POST","/v1/accounts:sendOobCode",hr(t,e))}async function iP(t,e){return rP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sP(t,e){return Go(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}async function oP(t,e){return Go(t,"POST","/v1/accounts:signInWithEmailLink",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends Hp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ko(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ko(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return nP(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sP(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return wE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return oP(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t,e){return Go(t,"POST","/v1/accounts:signInWithIdp",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="http://localhost";class zr extends Hp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$p(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new zr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ci(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ci(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ci(e,n)}buildRequest(){const e={requestUri:aP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Do(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uP(t){const e=Is(Cs(t)).link,n=e?Is(Cs(e)).deep_link_id:null,r=Is(Cs(t)).deep_link_id;return(r?Is(Cs(r)).link:null)||r||n||e||t}class qp{constructor(e){var n,r,i,s,o,a;const l=Is(Cs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=lP((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=uP(e);try{return new qp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.providerId=dr.PROVIDER_ID}static credential(e,n){return ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qp.parseLink(n);return M(r,"argument-error"),ko._fromEmailAndCode(e,r.code,r.tenantId)}}dr.PROVIDER_ID="password";dr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends Qo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Xo{constructor(){super("facebook.com")}static credential(e){return zr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zr._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Xo{constructor(){super("github.com")}static credential(e){return zr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Xo{constructor(){super("twitter.com")}static credential(e,n){return zr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(t,e){return Go(t,"POST","/v1/accounts:signUp",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ar._fromIdTokenResponse(e,r,i),o=Py(r);return new Br({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Py(r);return new Br({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Py(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Jt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bl(e,n,r,i)}}function _E(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bl._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(t,e){const n=W(t);await SE(!0,n,e);const{providerUserInfo:r}=await MD(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=EE(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function TE(t,e,n=!1){const r=await Hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",r)}async function SE(t,e,n){await To(e);const r=EE(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";M(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Hi(t,_E(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Bp(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Br._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(t,e,n=!1){const r="signIn",i=await _E(t,r,e),s=await Br._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function dP(t,e){return IE(os(t),e)}async function fP(t,e){const n=W(t);return await SE(!1,n,e.providerId),TE(n,e)}async function pP(t,e){return kE(W(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t,e,n){var r;M(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),M(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(M(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(M(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function gP(t,e){await tP(W(t),{oobCode:e})}async function yP(t,e,n){const r=os(t),i=await cP(r,{returnSecureToken:!0,email:e,password:n}),s=await Br._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function vP(t,e,n){return dP(W(t),dr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(t,e){return In(t,"POST","/v1/accounts:createAuthUri",hr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(t,e){const n=iE()?zl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await wP(W(t),r);return i||[]}async function EP(t,e){const n=W(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&mP(n.auth,i,e);const{email:s}=await iP(n.auth,i);s!==t.email&&await t.reload()}function TP(t,e){return CE(W(t),e,null)}function SP(t,e){return CE(W(t),null,e)}async function CE(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Hi(t,wE(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t,e){return W(t).setPersistence(e)}function IP(t,e,n,r){return W(t).onIdTokenChanged(e,n,r)}function CP(t,e,n){return W(t).beforeAuthStateChanged(e,n)}function RP(t,e,n,r){return W(t).onAuthStateChanged(e,n,r)}function xP(t){return W(t).signOut()}const jl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jl,"1"),this.storage.removeItem(jl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(){const t=Xe();return jp(t)||Yu(t)}const AP=1e3,DP=10;class xE extends RE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=NP()&&QD(),this.fallbackToPolling=gE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,DP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},AP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xE.type="LOCAL";const PP=xE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE extends RE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}NE.type="SESSION";const Wp=NE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ju(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await OP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ju.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Kp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function bP(t){Qt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function UP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $P(){return AE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="firebaseLocalStorageDb",FP=1,Hl="firebaseLocalStorage",PE="fbase_key";class Yo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zu(t,e){return t.transaction([Hl],e?"readwrite":"readonly").objectStore(Hl)}function VP(){const t=indexedDB.deleteDatabase(DE);return new Yo(t).toPromise()}function Ad(){const t=indexedDB.open(DE,FP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hl,{keyPath:PE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hl)?e(r):(r.close(),await VP(),e(await Ad()))})})}async function Oy(t,e,n){const r=Zu(t,!0).put({[PE]:e,value:n});return new Yo(r).toPromise()}async function zP(t,e){const n=Zu(t,!1).get(e),r=await new Yo(n).toPromise();return r===void 0?null:r.value}function Ly(t,e){const n=Zu(t,!0).delete(e);return new Yo(n).toPromise()}const BP=800,jP=3;class OE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ad(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return AE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ju._getInstance($P()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UP(),!this.activeServiceWorker)return;this.sender=new LP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ad();return await Oy(e,jl,"1"),await Ly(e,jl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Oy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ly(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zu(i,!1).getAll();return new Yo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}OE.type="LOCAL";const HP=OE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function WP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qP().appendChild(r)})}function KP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ko(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t,e){return e?un(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp extends Hp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GP(t){return IE(t.auth,new Gp(t),t.bypassAuthState)}function QP(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),kE(n,new Gp(t),t.bypassAuthState)}async function XP(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),TE(n,new Gp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GP;case"linkViaPopup":case"linkViaRedirect":return XP;case"reauthViaPopup":case"reauthViaRedirect":return QP;default:Nt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=new Ko(2e3,1e4);async function JP(t,e,n){const r=os(t);Fp(t,e,Qo);const i=ec(r,n);return new cn(r,"signInViaPopup",e,i).executeNotNull()}async function ZP(t,e,n){const r=W(t);Fp(r.auth,e,Qo);const i=ec(r.auth,n);return new cn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function eO(t,e,n){const r=W(t);Fp(r.auth,e,Qo);const i=ec(r.auth,n);return new cn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class cn extends LE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Kp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,YP.get())};e()}}cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO="pendingRedirect",Ga=new Map;class nO extends LE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ga.get(this.auth._key());if(!e){try{const r=await rO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ga.set(this.auth._key(),e)}return this.bypassAuthState||Ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rO(t,e){const n=oO(e),r=sO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iO(t,e){Ga.set(t._key(),e)}function sO(t){return un(t._redirectPersistence)}function oO(t){return Ka(tO,t.config.apiKey,t.name)}async function aO(t,e,n=!1){const r=os(t),i=ec(r,e),o=await new nO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO=10*60*1e3;class uO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lO&&this.cachedEventUids.clear(),this.cachedEventUids.has(by(e))}saveEventToCache(e){this.cachedEventUids.add(by(e)),this.lastProcessedEventTime=Date.now()}}function by(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hO(t,e={}){return In(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fO=/^https?/;async function pO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hO(t);for(const n of e)try{if(mO(n))return}catch{}Nt(t,"unauthorized-domain")}function mO(t){const e=zl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fO.test(n))return!1;if(dO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=new Ko(3e4,6e4);function Uy(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yO(t){return new Promise((e,n)=>{var r,i,s;function o(){Uy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uy(),n(Gt(t,"network-request-failed"))},timeout:gO.get()})}if(!((i=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qt().gapi)===null||s===void 0)&&s.load)o();else{const a=KP("iframefcb");return Qt()[a]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},WP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Qa=null,e})}let Qa=null;function vO(t){return Qa=Qa||yO(t),Qa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO=new Ko(5e3,15e3),_O="__/auth/iframe",EO="emulator/auth/iframe",TO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kO(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zp(e,EO):`https://${t.config.authDomain}/${_O}`,r={apiKey:e.apiKey,appName:t.name,v:Yi},i=SO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Do(r).slice(1)}`}async function IO(t){const e=await vO(t),n=Qt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:kO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=Qt().setTimeout(()=>{s(o)},wO.get());function l(){Qt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RO=500,xO=600,NO="_blank",AO="http://localhost";class My{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DO(t,e,n,r=RO,i=xO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},CO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Xe().toLowerCase();n&&(a=hE(u)?NO:n),cE(u)&&(e=e||AO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(KD(u)&&a!=="_self")return PO(e||"",a),new My(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new My(h)}function PO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OO="__/auth/handler",LO="emulator/auth/handler";function $y(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yi,eventId:i};if(e instanceof Qo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Xo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${bO(t)}?${Do(a).slice(1)}`}function bO({config:t}){return t.emulator?zp(t,LO):`https://${t.authDomain}/${OO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="webStorageSupport";class UO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wp,this._completeRedirectFn=aO,this._overrideRedirectResult=iO}async _openPopup(e,n,r,i){var s;Tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=$y(e,n,r,zl(),i);return DO(e,o,Kp())}async _openRedirect(e,n,r,i){return await this._originValidation(e),bP($y(e,n,r,zl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IO(e),r=new uO(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yc,{type:Yc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yc];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gE()||jp()||Yu()}}const MO=UO;var Fy="@firebase/auth",Vy="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function VO(t){$r(new Zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{M(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),M(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yE(t)},c=new YD(a,l,u);return AD(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$r(new Zn("auth-internal",e=>{const n=os(e.getProvider("auth").getImmediate());return(r=>new $O(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(Fy,Vy,FO(t)),Wt(Fy,Vy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO=5*60,BO=Iw("authIdTokenMaxAge")||zO;let zy=null;const jO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BO)return;const i=n==null?void 0:n.token;zy!==i&&(zy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function HO(t=Of()){const e=pu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ND(t,{popupRedirectResolver:MO,persistence:[HP,PP,Wp]}),r=Iw("authTokenSyncURL");if(r){const s=jO(r);CP(n,s,()=>s(n.currentUser)),IP(n,o=>s(o))}const i=Sw("auth");return i&&JD(n,`http://${i}`),n}VO("Browser");var qO="firebase",WO="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(qO,WO,"app");const KO={apiKey:"AIzaSyBc5mePbAJF1s-yYbkKfAWnXkkE4g-fI40",authDomain:"where-is-game-9d7eb.firebaseapp.com",projectId:"where-is-game-9d7eb",storageBucket:"where-is-game-9d7eb.appspot.com",messagingSenderId:"922265148614",appId:"1:922265148614:web:210290e5cdd3e1870d4bc7"},Qp=Nw(KO),Zt=oD(Qp);function UE(t){return t.map(e=>({...e.data(),id:e.id}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="firebasestorage.googleapis.com",$E="storageBucket",GO=2*60*1e3,QO=10*60*1e3,XO=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends Jt{constructor(e,n,r=0){super(Jc(e),`Firebase Storage: ${n} (${Jc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ae||(ae={}));function Jc(t){return"storage/"+t}function Xp(){const t="An unknown error occurred, please check the error payload for server response.";return new fe(ae.UNKNOWN,t)}function YO(t){return new fe(ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function JO(t){return new fe(ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ZO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new fe(ae.UNAUTHENTICATED,t)}function eL(){return new fe(ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function tL(t){return new fe(ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function FE(){return new fe(ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VE(){return new fe(ae.CANCELED,"User canceled the upload/download.")}function nL(t){return new fe(ae.INVALID_URL,"Invalid URL '"+t+"'.")}function rL(t){return new fe(ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function iL(){return new fe(ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+$E+"' property when initializing the app?")}function zE(){return new fe(ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sL(){return new fe(ae.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function oL(){return new fe(ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function aL(t){return new fe(ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Dd(t){return new fe(ae.INVALID_ARGUMENT,t)}function BE(){return new fe(ae.APP_DELETED,"The Firebase app was deleted.")}function lL(t){return new fe(ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function qs(t,e){return new fe(ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function _s(t){throw new fe(ae.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=tt.makeFromUrl(e,n)}catch{return new tt(e,"")}if(r.path==="")return r;throw rL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===ME?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",p=new RegExp(`^https?://${v}/${i}/${E}`,"i"),m=[{regex:a,indices:l,postModify:s},{regex:g,indices:y,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<m.length;w++){const I=m[w],x=I.regex.exec(e);if(x){const N=x[I.indices.bucket];let O=x[I.indices.path];O||(O=""),r=new tt(N,O),I.postModify(r);break}}if(r==null)throw nL(e);return r}}class uL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cL(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(g,l())},E)}function d(){s&&clearTimeout(s)}function g(E,...p){if(u){d();return}if(E){d(),c.call(null,E,...p);return}if(l()||o){d(),c.call(null,E,...p);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,h(m)}let y=!1;function v(E){y||(y=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function hL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dL(t){return t!==void 0}function fL(t){return typeof t=="function"}function pL(t){return typeof t=="object"&&!Array.isArray(t)}function tc(t){return typeof t=="string"||t instanceof String}function By(t){return Yp()&&t instanceof Blob}function Yp(){return typeof Blob<"u"&&!sC()}function Pd(t,e,n,r){if(r<e)throw Dd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Dd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function jE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Dr||(Dr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ca(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Dr.NO_ERROR,l=s.getStatus();if(!a||HE(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Dr.ABORT;r(!1,new Ca(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ca(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());dL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Xp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?BE():VE();o(l)}else{const l=FE();o(l)}};this.canceled_?n(!1,new Ca(!1,null,!0)):this.backoffId_=cL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ca{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function gL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function yL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function vL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function wL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _L(t,e,n,r,i,s,o=!0){const a=jE(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return vL(u,e),gL(u,n),yL(u,s),wL(u,r),new mL(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function TL(...t){const e=EL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Yp())return new Blob(t);throw new fe(ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function SL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kL(t){if(typeof atob>"u")throw aL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Zc{constructor(e,n){this.data=e,this.contentType=n||null}}function IL(t,e){switch(t){case jt.RAW:return new Zc(qE(e));case jt.BASE64:case jt.BASE64URL:return new Zc(WE(t,e));case jt.DATA_URL:return new Zc(RL(e),xL(e))}throw Xp()}function qE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function CL(t){let e;try{e=decodeURIComponent(t)}catch{throw qs(jt.DATA_URL,"Malformed data URL.")}return qE(e)}function WE(t,e){switch(t){case jt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw qs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case jt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw qs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=kL(e)}catch(i){throw i.message.includes("polyfill")?i:qs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class KE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw qs(jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=NL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function RL(t){const e=new KE(t);return e.base64?WE(jt.BASE64,e.rest):CL(e.rest)}function xL(t){return new KE(t).contentType}function NL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){let r=0,i="";By(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(By(this.data_)){const r=this.data_,i=SL(r,e,n);return i===null?null:new Ln(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ln(r,!0)}}static getBlob(...e){if(Yp()){const n=e.map(r=>r instanceof Ln?r.data_:r);return new Ln(TL.apply(null,n))}else{const n=e.map(o=>tc(o)?IL(jt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Ln(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t){let e;try{e=JSON.parse(t)}catch{return null}return pL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function DL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function GE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PL(t,e){return e}class Je{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||PL}}let Ra=null;function OL(t){return!tc(t)||t.length<2?t:GE(t)}function QE(){if(Ra)return Ra;const t=[];t.push(new Je("bucket")),t.push(new Je("generation")),t.push(new Je("metageneration")),t.push(new Je("name","fullPath",!0));function e(s,o){return OL(o)}const n=new Je("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Je("size");return i.xform=r,t.push(i),t.push(new Je("timeCreated")),t.push(new Je("updated")),t.push(new Je("md5Hash",null,!0)),t.push(new Je("cacheControl",null,!0)),t.push(new Je("contentDisposition",null,!0)),t.push(new Je("contentEncoding",null,!0)),t.push(new Je("contentLanguage",null,!0)),t.push(new Je("contentType",null,!0)),t.push(new Je("metadata","customMetadata",!0)),Ra=t,Ra}function LL(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new tt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function bL(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return LL(r,t),r}function XE(t,e,n){const r=Jp(e);return r===null?null:bL(t,r,n)}function UL(t,e,n,r){const i=Jp(e);if(i===null||!tc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),g=Jr(d,n,r),y=jE({alt:"media",token:u});return g+y})[0]}function YE(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="prefixes",Hy="items";function ML(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[jy])for(const i of n[jy]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new tt(e,s));r.prefixes.push(o)}if(n[Hy])for(const i of n[Hy]){const s=t._makeStorageReference(new tt(e,i.name));r.items.push(s)}return r}function $L(t,e,n){const r=Jp(n);return r===null?null:ML(t,e,r)}class fr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t){if(!t)throw Xp()}function Zp(t,e){function n(r,i){const s=XE(t,i,e);return Xt(s!==null),s}return n}function FL(t,e){function n(r,i){const s=$L(t,e,i);return Xt(s!==null),s}return n}function VL(t,e){function n(r,i){const s=XE(t,i,e);return Xt(s!==null),UL(s,i,t.host,t._protocol)}return n}function as(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=eL():i=ZO():n.getStatus()===402?i=JO(t.bucket):n.getStatus()===403?i=tL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function em(t){const e=as(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=YO(t.path)),s.serverResponse=i.serverResponse,s}return n}function zL(t,e,n){const r=e.fullServerUrl(),i=Jr(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new fr(i,s,Zp(t,n),o);return a.errorHandler=em(e),a}function BL(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Jr(o,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,c=new fr(a,l,FL(t,e.bucket),u);return c.urlParams=s,c.errorHandler=as(e),c}function jL(t,e,n){const r=e.fullServerUrl(),i=Jr(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new fr(i,s,VL(t,n),o);return a.errorHandler=em(e),a}function HL(t,e){const n=e.fullServerUrl(),r=Jr(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new fr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=em(e),a}function qL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function JE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=qL(null,e)),r}function WL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let w=0;w<2;w++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=JE(e,r,i),c=YE(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",g=Ln.getBlob(h,r,d);if(g===null)throw zE();const y={name:u.fullPath},v=Jr(s,t.host,t._protocol),E="POST",p=t.maxUploadRetryTime,f=new fr(v,E,Zp(t,n),p);return f.urlParams=y,f.headers=o,f.body=g.uploadData(),f.errorHandler=as(e),f}class ql{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function tm(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Xt(!1)}return Xt(!!n&&(e||["active"]).indexOf(n)!==-1),n}function KL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=JE(e,r,i),a={name:o.fullPath},l=Jr(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=YE(o,n),d=t.maxUploadRetryTime;function g(v){tm(v);let E;try{E=v.getResponseHeader("X-Goog-Upload-URL")}catch{Xt(!1)}return Xt(tc(E)),E}const y=new fr(l,u,g,d);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=as(e),y}function GL(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=tm(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Xt(!1)}h||Xt(!1);const d=Number(h);return Xt(!isNaN(d)),new ql(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new fr(n,o,s,a);return l.headers=i,l.errorHandler=as(e),l}const qy=256*1024;function QL(t,e,n,r,i,s,o,a){const l=new ql(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw sL();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,d=h+c;let g="";c===0?g="finalize":u===c?g="upload, finalize":g="upload";const y={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${l.current}`},v=r.slice(h,d);if(v===null)throw zE();function E(w,I){const x=tm(w,["active","final"]),N=l.current+c,O=r.size();let Z;return x==="final"?Z=Zp(e,s)(w,I):Z=null,new ql(N,O,x==="final",Z)}const p="POST",f=e.maxUploadRetryTime,m=new fr(n,p,E,f);return m.headers=y,m.body=v.uploadData(),m.progressCallback=a||null,m.errorHandler=as(t),m}const st={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function eh(t){switch(t){case"running":case"pausing":case"canceling":return st.RUNNING;case"paused":return st.PAUSED;case"success":return st.SUCCESS;case"canceled":return st.CANCELED;case"error":return st.ERROR;default:return st.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e,n,r){if(fL(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class YL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Dr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Dr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Dr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw _s("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _s("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _s("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw _s("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _s("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class JL extends YL{initXhr(){this.xhr_.responseType="text"}}function bn(){return new JL}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=QE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ae.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(HE(i.status,[]))if(s)i=FE();else{this.sleepTime=Math.max(this.sleepTime*2,XO),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ae.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=KL(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,bn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=GL(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,bn,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=qy*this._chunkMultiplier,n=new ql(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=QL(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,bn,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){qy*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=zL(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,bn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=WL(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,bn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=VE(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=eh(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new XL(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(eh(this._state)){case st.SUCCESS:ei(this._resolve.bind(null,this.snapshot))();break;case st.CANCELED:case st.ERROR:const n=this._reject;ei(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(eh(this._state)){case st.RUNNING:case st.PAUSED:e.next&&ei(e.next.bind(e,this.snapshot))();break;case st.SUCCESS:e.complete&&ei(e.complete.bind(e))();break;case st.CANCELED:case st.ERROR:e.error&&ei(e.error.bind(e,this._error))();break;default:e.error&&ei(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this._service=e,n instanceof tt?this._location=n:this._location=tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new jr(e,n)}get root(){const e=new tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return GE(this._location.path)}get storage(){return this._service}get parent(){const e=AL(this._location.path);if(e===null)return null;const n=new tt(this._location.bucket,e);return new jr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw lL(e)}}function eb(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new ZL(t,new Ln(e),n)}function tb(t){const e={prefixes:[],items:[]};return ZE(t,e).then(()=>e)}async function ZE(t,e,n){const i=await nb(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await ZE(t,e,i.nextPageToken)}function nb(t,e){e!=null&&typeof e.maxResults=="number"&&Pd("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=BL(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,bn)}function rb(t){t._throwIfRoot("getDownloadURL");const e=jL(t.storage,t._location,QE());return t.storage.makeRequestWithTokens(e,bn).then(n=>{if(n===null)throw oL();return n})}function ib(t){t._throwIfRoot("deleteObject");const e=HL(t.storage,t._location);return t.storage.makeRequestWithTokens(e,bn)}function sb(t,e){const n=DL(t._location.path,e),r=new tt(t._location.bucket,n);return new jr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t){return/^[A-Za-z]+:\/\//.test(t)}function ab(t,e){return new jr(t,e)}function eT(t,e){if(t instanceof nm){const n=t;if(n._bucket==null)throw iL();const r=new jr(n,n._bucket);return e!=null?eT(r,e):r}else return e!==void 0?sb(t,e):t}function lb(t,e){if(e&&ob(e)){if(t instanceof nm)return ab(t,e);throw Dd("To use ref(service, url), the first argument must be a Storage instance.")}else return eT(t,e)}function Wy(t,e){const n=e==null?void 0:e[$E];return n==null?null:tt.makeFromBucketSpec(n,t)}function ub(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Cw(i,t.app.options.projectId))}class nm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ME,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=GO,this._maxUploadRetryTime=QO,this._requests=new Set,i!=null?this._bucket=tt.makeFromBucketSpec(i,this._host):this._bucket=Wy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tt.makeFromBucketSpec(this._url,e):this._bucket=Wy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new jr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new uL(BE());{const o=_L(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ky="@firebase/storage",Gy="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="storage";function cb(t,e,n){return t=W(t),eb(t,e,n)}function hb(t){return t=W(t),tb(t)}function db(t){return t=W(t),rb(t)}function fb(t){return t=W(t),ib(t)}function nT(t,e){return t=W(t),lb(t,e)}function pb(t=Of(),e){t=W(t);const r=pu(t,tT).getImmediate({identifier:e}),i=kw("storage");return i&&mb(r,...i),r}function mb(t,e,n,r={}){ub(t,e,n,r)}function gb(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new nm(n,r,i,e,Yi)}function yb(){$r(new Zn(tT,gb,"PUBLIC").setMultipleInstances(!0)),Wt(Ky,Gy,""),Wt(Ky,Gy,"esm2017")}yb();const rT=pb(Qp);async function rm(t,e){const n=nT(rT,e);return await cb(n,t),db(n)}function vb(t,e){return rm(e,`${te.currentUser.uid}/${t}/${e.name}`)}function wb(t,e,n){return rm(n,`${te.currentUser.uid}/${t}/${e}/${n.name}`)}async function iT(t){const e=await hb(t);return Promise.all([...e.prefixes.map(iT),...e.items.map(fb)])}async function _b(t){await iT(nT(rT,`${te.currentUser.uid}/${t}`))}function sT(t,e){return rm(e,`${t}/${e.name}`)}Qu(Qr(Zt,"users"));function Jo(t){return ju(Zt,"users",t)}async function oT(t,{email:e,name:n,profilePicture:r}){try{const i=Jo(t);if(await ED(i,{email:e,name:n,profilePicture:typeof r=="string"?r:"",games:[]}),r&&r instanceof File){const s=await sT(t,r);await ss(i,{profilePicture:s})}}catch(i){throw new Error(i)}}async function Eb(t,e){await ss(Jo(t),{games:TD(e)})}async function Tb(t,e){await ss(Jo(t),{games:SD(e)})}async function xU(t,e){const{profilePicture:n,...r}=e;return n&&(r.profilePicture=await sT(t,n)),await xb(r.email),ss(Jo(t),r)}const te=HO(Qp);function nc(t){switch(t){case"google":return new nn;case"github":return new rn;default:throw new Error(`${t} provider isn't active`)}}function aT(){return te.currentUser.providerData.map(t=>t.providerId.replace(".com",""))}async function Sb({email:t,password:e,name:n,profilePicture:r}){if(!t)throw new Error("To create a user there must be an email");if(!e)throw new Error("To create a user there must be a password");const{user:i}=await yP(te,t,e);await oT(i.uid,{email:t,name:n!=null?n:i.displayName,profilePicture:r!=null?r:i.photoURL}),await EP(i)}async function NU(t){if(!ls())throw new Error("User not logged");if(aT().includes("password"))throw new Error("User already has a password");return fP(te.currentUser,dr.credential(te.currentUser.email,t)).then(()=>console.log(te.currentUser))}function AU(t){const e=nc(t);if(!ls())throw new Error("User not logged");return eO(te.currentUser,e)}function DU(t){const e=nc(t);if(!ls())throw new Error("User not logged");return hP(te.currentUser,e.providerId)}async function kb(t,e,n=!1){await vP(te,t,e),n||await kP(te,Wp)}async function Ib(t){const e=nc(t),{user:n}=await JP(te,e);await oT(n.uid,{email:n.email,name:n.displayName,profilePicture:n.photoURL})}async function Cb(){await xP(te)}function ls(){return!!te.currentUser}async function PU(t){return(await _P(te,t)).length===0}async function OU(){const t=aT();return t.includes("password")?!1:(await ZP(te.currentUser,nc(t[0])),!0)}async function Rb(t){if(!ls())throw new Error("User not logged");return pP(te.currentUser,dr.credential(te.currentUser.email,t))}async function xb(t){te.currentUser.email!==t&&await TP(te.currentUser,t)}async function LU(t,e){t!==e&&(await Rb(t),await SP(te.currentUser,e))}function bU(t){return gP(te,t)}const lT=C.exports.createContext();function uT({children:t}){const[e,n]=C.exports.useState(null);return C.exports.useEffect(()=>RP(te,r=>{if(r==null)return n(null);n({authUser:r,id:r.uid})}),[]),C.exports.useEffect(()=>{if(!!e)return Y1(Jo(e.id),r=>{n(i=>({...i,...r.data()}))})},[e==null?void 0:e.id]),_(lT.Provider,{value:{user:e,signUp:Sb,signInUserWithEmailAndPassword:kb,signInWithProvider:Ib,signOutUser:Cb,isUserSignedIn:ls},children:t})}const im=()=>C.exports.useContext(lT);uT.propTypes={children:Yr};function Zo({name:t,image:e,className:n="",style:r={}}){return _("div",{className:`${n} flex justify-center items-center w-12 h-12 rounded-full border-2 border-tiber-500 bg-alabaster-500`,style:r,children:_("img",{className:"object-cover",src:e,alt:`${t} character image`})})}Zo.propTypes={name:R.exports.string.isRequired,image:R.exports.string.isRequired,className:R.exports.string,style:R.exports.object};function cT({className:t,dragOverClass:e,onDrop:n,children:r}){const[i,s]=C.exports.useState(!1);function o(u){u.preventDefault(),u.dataTransfer.dropEffect="copy",s(!0)}function a(u){u.preventDefault(),s(!1)}function l(u){u.preventDefault(),n(u.dataTransfer.files[0]),s(!1)}return _("div",{className:`${t} ${i?e:""}`,onDragOver:o,onDragLeave:a,onDragEnd:a,onDrop:l,children:r})}cT.propTypes={className:R.exports.string,dragOverClass:R.exports.string,onDrop:R.exports.func,children:Yr};const hT="/where-is-game/assets/EmptyCharacter.c656eb5a.svg";function Nb({character:t,isSelected:e,onChange:n,onSelect:r,hasError:i}){const{name:s,image:o,coords:{x:a,y:l}}=t,u=C.exports.useRef();C.exports.useEffect(()=>{},[o.file]);function c(){u.current.click()}function h(y){n({image:{file:y,url:URL.createObjectURL(y)}})}function d(y){const v=y.target.files[0];!v||h(v)}function g(y){n({name:y.target.value})}return _("li",{className:"relative cursor-pointer",onClick:()=>r({x:a,y:l}),children:Q(cT,{className:`px-2 border-4 rounded-xl ${i?"border-solid border-red-600":"border-transparent"}`,dragOverClass:"border-white border-dashed",onDrop:h,children:[Q("div",{className:"flex items-center gap-4",children:[Q("div",{className:`cursor-pointer transition-all duration-300 border-2 rounded-full ${e?"border-cyan-300":"border-transparent"} hover:grayscale`,onClick:c,children:[_("input",{ref:u,className:"hidden",type:"file",accept:"image/*",onChange:d}),_(Zo,{className:"overflow-hidden",image:o.url||hT,name:s})]}),_("input",{className:"text-tiber-500 p-1 rounded",type:"text",placeholder:"Character name...",value:s,onChange:g})]}),Q("div",{className:"flex justify-center items-center gap-4",children:[Q("span",{children:["x: ",a?Math.round(a):"unset"]}),Q("span",{children:["y: ",l?Math.round(l):"unset"]})]})]})})}Nb.propTypes={character:R.exports.shape({name:R.exports.string,image:R.exports.shape({file:R.exports.instanceOf(File),url:R.exports.string}),coords:R.exports.shape({x:R.exports.number,y:R.exports.number})}),isSelected:R.exports.bool,onChange:R.exports.func,onSelect:R.exports.func,hasError:R.exports.bool};function Ab({label:t,children:e}){return Q("div",{className:"flex flex-col w-full gap-2",children:[_("label",{className:"text-xl font-semibold",children:t}),e]})}Ab.propTypes={label:R.exports.string,children:Yr};function Db({characters:t,onSelect:e,onClose:n,x:r,y:i}){return _("div",{className:"w-full h-full absolute top-0 left-0 z-10",onClick:n,children:_("ul",{className:"absolute bg-white rounded-lg shadow-xl overflow-hidden translate-x-[20%] translate-y-[20%]",style:{top:i,left:r},children:t.filter(s=>!s.found).map(({id:s,name:o,image:a,coords:l})=>Q("li",{className:"flex items-center gap-3 px-4 py-2 border-b-2 border-b-slate-400 last:border-b-0 hover:bg-slate-300 transition-colors duration-300 cursor-pointer",onClick:()=>e(s,l),children:[_(Zo,{name:o,image:a}),_("span",{children:o})]},s))})})}Db.propTypes={characters:R.exports.arrayOf(eE).isRequired,onSelect:R.exports.func,onClose:R.exports.func,x:R.exports.number.isRequired,y:R.exports.number.isRequired};const UU=Qu(Qr(Zt,"games"),q1("createdAt","asc"));function Pb(t){return Qu(Qr(Zt,"games",t,"leaderboard"),q1("score","asc"))}function sm(t){return Qu(Qr(Zt,"games",t,"characters"),yD(3))}async function MU(t){if(!ls())throw new Error("For create game user must be sign in");try{const e=await Mp(Qr(Zt,"games"),{...t,image:"",createdAt:Z1(),user:te.currentUser.uid}),n=await vb(e.id,t.image);return await ss(e,{image:n}),await Eb(te.currentUser.uid,e.id),e.id}catch(e){console.error("There was an error creating game:",e)}}async function $U(t,e){try{const n=await Mp(Qr(Zt,"games",e,"characters"),{...t,image:""}),r=await wb(e,n.id,t.image);return await ss(n,{image:r}),n.id}catch(n){console.error("There was an error adding character:",n)}}async function FU(t){const e=await _D(ju(Zt,"games",t));if(!e.exists())return null;const n=sm(t),r=await Nd(n);return{...e.data(),id:e.id,characters:UE(r.docs)}}async function VU(t,e,n){await Mp(Qr(Zt,"games",t,"leaderboard"),{name:e,score:n,date:Z1()})}async function zU(t){await _b(t),await Promise.all((await Nd(sm(t))).docs.map(e=>Qc(e.ref))),await Promise.all((await Nd(Pb(t))).docs.map(e=>Qc(e.ref))),await Qc(ju(Zt,"games",t)),await Tb(te.currentUser.uid,t)}function Ob(t){const[e,n]=C.exports.useState([]);return C.exports.useEffect(()=>Y1(sm(t),r=>{n(UE(r.docs))}),[t]),e}function Lb({game:{id:t,name:e,image:n},baseUrl:r,isActive:i=!1}){const s=Ob(t);return _("li",{className:"flex justify-center items-center w-[250px] h-[300px] overflow-hidden relative rounded-xl cursor-pointer group bg-tiber-500",children:Q(yw,{className:"w-full h-full",to:`/${r}/${t}`,children:[_("img",{src:n,alt:`${e} game image`,className:"w-full object-cover"}),_("div",{className:`absolute ${i?"top-0":"top-full"} flex justify-center items-end p-5 w-full h-full text-white shadow-game transition-all duration-300 group-hover:top-0`,children:e}),_("div",{className:"absolute top-3 right-3 flex justify-end gap-1",children:s.map(({id:o,image:a,name:l},u)=>_(Zo,{name:l,image:a,className:"absolute top-0",style:{right:`${30*u}px`,zIndex:3-u}},o))})]})},t)}Lb.propTypes={game:ID.isRequired,baseUrl:R.exports.string.isRequired,isActive:R.exports.bool};const bb=C.exports.forwardRef(({containerRef:t,image:e,onClick:n,onResize:r,x:i,y:s,children:o},a)=>{const[{width:l,height:u},c]=C.exports.useState({width:0,height:0});C.exports.useEffect(()=>{function d(){if(!i&&!s)return;const g=a.current.scrollWidth,y=a.current.scrollHeight;r({x:i*g/(l||g),y:s*y/(u||y)}),c({width:g,height:y})}return window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[l,u,i,s]);function h({pageX:d,pageY:g}){const{top:y,left:v}=t.current.getBoundingClientRect(),E=parseFloat(getComputedStyle(t.current).paddingLeft);n({x:d-E-v,y:g-y+t.current.scrollTop})}return Q("span",{className:"cursor-gamePointer relative",onClick:h,children:[_("img",{ref:a,className:"w-full min-h-full",src:e}),o]})});bb.propTypes={image:R.exports.string.isRequired,containerRef:RD(CD).isRequired,onClick:R.exports.func,onResize:R.exports.func,x:R.exports.number,y:R.exports.number};function th(t){return String(t).padStart(2,"0")}function Ub(t){let e=t;const n=Math.floor(e/3600);e%=3600;const r=Math.floor(e/60);return e%=60,`${th(n)}:${th(r)}:${th(e)}`}function BU(t){return function(n,r){return n>=r-t&&n<=r+t}}function Mb({characters:t,timer:e}){return Q("header",{className:"h-[10%] flex justify-center items-center gap-4",children:[t.map(({name:n,image:r,id:i,found:s})=>Q("div",{className:`flex justify-center items-center gap-1 ${s?"opacity-40":""}`,children:[_(Zo,{name:n,image:r}),_("span",{children:n})]},i)),_("h1",{children:Ub(e)})]})}Mb.propTypes={characters:R.exports.arrayOf(eE).isRequired,timer:R.exports.number.isRequired};function Wl(t){return Wl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wl(t)}function Ir(t,e,n,r){if(Wl(n)!==r)throw new TypeError("Invalid prop '".concat(e,"' of type '").concat(Wl(n),"' supplied to '").concat(t,"', expected '").concat(r,"'."))}function dT(t,e){e===void 0&&(e={});var n=e.insertAt;if(t&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var $b="Ring-module_container__1mCd7";function Fb(t){var e=t.size,n=e===void 0?40:e,r=t.color,i=r===void 0?"black":r,s=t.lineWeight,o=s===void 0?5:s,a=t.speed,l=a===void 0?2:a;return Ir("Ring","size",n,"number"),Ir("Ring","color",i,"string"),Ir("Ring","lineWeight",o,"number"),Ir("Ring","speed",l,"number"),_("svg",{height:n,width:n,className:$b,viewBox:"25 25 50 50",style:{"--uib-size":n+"px","--uib-color":i,"--uib-speed":l+"s"},children:_("circle",{cx:"50",cy:"50",r:"20",strokeWidth:o})})}dT(".Ring-module_container__1mCd7{animation:Ring-module_rotate__RBwLl var(--uib-speed) linear infinite;height:var(--uib-size);transform-origin:center;vertical-align:middle;width:var(--uib-size);will-change:transform}.Ring-module_container__1mCd7 circle{fill:none;stroke:var(--uib-color);stroke-dasharray:1,200;stroke-dashoffset:0;stroke-linecap:round;animation:Ring-module_stretch__L-1Qd calc(var(--uib-speed)*.75) ease-in-out infinite;will-change:stroke-dasharray,stroke-dashoffset}@keyframes Ring-module_rotate__RBwLl{to{transform:rotate(1turn)}}@keyframes Ring-module_stretch__L-1Qd{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,200;stroke-dashoffset:-35px}to{stroke-dashoffset:-124px}}");var Vb="DotWave-module_container__s1Aiz",xa="DotWave-module_dot__8LtwH";function zb(t){var e=t.size,n=e===void 0?47:e,r=t.color,i=r===void 0?"black":r,s=t.speed,o=s===void 0?1:s;return Ir("DotWave","size",n,"number"),Ir("DotWave","color",i,"string"),Ir("DotWave","speed",o,"number"),Q("div",{className:Vb,style:{"--uib-size":n+"px","--uib-color":i,"--uib-speed":o+"s"},children:[_("div",{className:xa}),_("div",{className:xa}),_("div",{className:xa}),_("div",{className:xa})]})}dT(".DotWave-module_container__s1Aiz{align-items:flex-end;display:flex;height:calc(var(--uib-size)*.5);justify-content:space-between;width:var(--uib-size)}.DotWave-module_dot__8LtwH{background-color:var(--uib-color);border-radius:50%;flex-shrink:0;height:calc(var(--uib-size)*.17);width:calc(var(--uib-size)*.17)}.DotWave-module_dot__8LtwH:first-child{animation:DotWave-module_jump__eYFYd var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.45) infinite}.DotWave-module_dot__8LtwH:nth-child(2){animation:DotWave-module_jump__eYFYd var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.3) infinite}.DotWave-module_dot__8LtwH:nth-child(3){animation:DotWave-module_jump__eYFYd var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.15) infinite}.DotWave-module_dot__8LtwH:nth-child(4){animation:DotWave-module_jump__eYFYd var(--uib-speed) ease-in-out infinite}@keyframes DotWave-module_jump__eYFYd{0%,to{transform:translateY(0)}50%{transform:translateY(-200%)}}");function Bb(){return _("div",{className:"w-full h-[90%] flex justify-center items-center",children:_(zb,{size:47,speed:1,color:"black"})})}const jb=[{name:"Home",to:"/",end:!0},{name:"Create",to:"/create",end:!0},{name:"Leaderboard",to:"/leaderboard",end:!1}];function Hb(){const{user:t,signOutUser:e}=im(),n=du(),r=ar();async function i(){try{await e(),n("/auth/signIn",{state:{next:r.pathname}})}catch(s){console.error(s)}}return Q("header",{className:"flex justify-between px-7 py-5 h-[10%]",children:[_("h1",{className:"text-lg font-bold",children:"Where is?"}),Q("nav",{className:"flex items-center gap-1",children:[jb.map(({name:s,to:o,end:a})=>_(za,{to:o,end:a,children:({isActive:l})=>Q("div",{className:"group px-3 py-1",children:[_("span",{children:s}),_("div",{className:`group-hover:w-full ${l?"w-full":"w-0"} h-[2px] bg-tiber-500 transition-all duration-200 ease-in`})]})},s)),t?Q(hw,{children:[_("button",{className:"px-4 py-2 rounded-lg mr-3 bg-tiber-500 text-white hover:bg-tiber-600",type:"button",onClick:i,children:"Sign Out"}),_(za,{className:"rounded-full",to:"/settings",end:!0,children:({isActive:s})=>_("img",{className:`w-10 h-10 object-cover ${s?"ring ring-offset-2 ring-tiber-500":"ring-0"} rounded-full hover:ring hover:ring-offset-2 hover:ring-tiber-500 transition-all duration-200 ease-in`,src:t.profilePicture||hT,alt:"User profile picture",referrerPolicy:"no-referrer"})})]}):_(za,{to:"/auth/signIn",end:!0,children:({isActive:s})=>Q("div",{className:"group px-3 py-1",children:[_("span",{children:"Sign In"}),_("div",{className:`group-hover:w-full ${s?"w-full":"w-0"} h-[2px] bg-tiber-500 transition-all duration-200 ease-in`})]})})]})]})}function qb({className:t,active:e,message:n,onClose:r=()=>{},ms:i=1e3}){const[s,o]=C.exports.useState(!1);return C.exports.useEffect(()=>{e!=null&&(o(!0),setTimeout(()=>{o(!1),r()},i))},[e,i]),s?_("div",{className:`${t} absolute top-[5vh] left-1/2 translate-x-[-50%] px-4 py-2 rounded text-white z-10`,children:n}):null}qb.propTypes={className:R.exports.string,message:R.exports.string,active:R.exports.any,onClose:R.exports.func,ms:R.exports.number};const Wb="/where-is-game/assets/point.2def5cd3.svg";function Kb({x:t,y:e}){return _("span",{className:"absolute  z-0 animate-rotate ",style:{top:e,left:t},children:_("img",{className:"max-w-none",src:Wb,alt:"point clicked"})})}Kb.propTypes={x:R.exports.number,y:R.exports.number};const Gb=C.exports.forwardRef(({label:t,name:e,type:n,error:r,value:i,onChange:s,className:o=""},a)=>Q("div",{children:[_("label",{className:`block w-full mb-1 ${r?"text-red-500":""}`,htmlFor:e,children:t}),_("input",{ref:a,className:`${o} w-full px-5 py-2 border-2 ${r?"!border-red-500":"border-gray-300"} rounded-full transition-all focus:border-blue-600`,name:e,type:n,value:i,onChange:s,autoComplete:"off"}),r&&_("div",{className:"mt-2 text-red-500",children:r})]}));Gb.propTypes={label:R.exports.string,name:R.exports.string,type:R.exports.string,error:R.exports.string,value:R.exports.any,onChange:R.exports.func,className:R.exports.string};function Qb({isLoading:t,className:e,children:n}){return _("button",{className:`flex justify-center items-center ${e}`,type:"submit",children:t?_(Fb,{size:30,lineWeight:5,speed:2,color:"white"}):n})}Qb.propTypes={isLoading:R.exports.bool.isRequired,className:R.exports.string,children:Yr};const Xb="modulepreload",Yb=function(t){return"/where-is-game/"+t},Qy={},ft=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Yb(s),s in Qy)return;Qy[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const h=i[c];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Xb,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,h)=>{u.addEventListener("load",c),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},Jb=C.exports.lazy(()=>ft(()=>import("./Home.d3850b47.js"),["assets/Home.d3850b47.js","assets/useAllGames.2e689592.js"])),Zb=C.exports.lazy(()=>ft(()=>import("./Game.f5e024f0.js"),["assets/Game.f5e024f0.js","assets/useGameImage.7482bad4.js"])),eU=C.exports.lazy(()=>ft(()=>import("./LeaderBoard.151b72a2.js"),["assets/LeaderBoard.151b72a2.js","assets/useAllGames.2e689592.js"])),tU=C.exports.lazy(()=>ft(()=>import("./Table.26fd100b.js"),[])),nU=C.exports.lazy(()=>ft(()=>import("./LeaderBoardRoot.fdf0c019.js"),[])),rU=C.exports.lazy(()=>ft(()=>import("./Create.a73ad8f2.js"),["assets/Create.a73ad8f2.js","assets/useGameImage.7482bad4.js"])),iU=C.exports.lazy(()=>ft(()=>import("./SignIn.5dba89cc.js"),["assets/SignIn.5dba89cc.js","assets/useRedirect.713383e7.js","assets/form.285ef807.js","assets/withoutAuth.0e6d757f.js"])),sU=C.exports.lazy(()=>ft(()=>import("./SignUp.abfa1b0e.js"),["assets/SignUp.abfa1b0e.js","assets/useRedirect.713383e7.js","assets/form.285ef807.js","assets/withoutAuth.0e6d757f.js"])),oU=C.exports.lazy(()=>ft(()=>import("./ConfirmAuth.dc03f304.js"),["assets/ConfirmAuth.dc03f304.js","assets/useRedirect.713383e7.js"])),aU=C.exports.lazy(()=>ft(()=>import("./Profile.ceb23d97.js"),["assets/Profile.ceb23d97.js","assets/form.285ef807.js"])),lU=C.exports.lazy(()=>ft(()=>import("./Authentication.b062d5b1.js"),["assets/Authentication.b062d5b1.js","assets/form.285ef807.js"])),uU=C.exports.lazy(()=>ft(()=>import("./PlayerGames.6813bf53.js"),[])),cU=C.exports.lazy(()=>ft(()=>import("./NotFound.62e9f242.js"),[])),hU=C.exports.lazy(()=>ft(()=>import("./Actions.60afebd7.js"),[])),dU="/where-is-game/assets/Google.dbeee5a4.svg",fU="/where-is-game/assets/Github.3926c139.svg",pU=[{name:"Google",logo:dU,provider:"google"},{name:"Github",logo:fU,provider:"github"}];function mU({title:t,redirect:e,children:n}){const{signInWithProvider:r}=im();function i(s){return async function(){await r(s),e()}}return Q(fT,{title:t,children:[_("section",{className:"grid grid-cols-2 gap-2",children:pU.map(({name:s,logo:o,provider:a})=>Q("button",{className:"flex justify-center items-center gap-2 w-full p-2 border-2 rounded-full font-semibold hover:bg-gray-50 odd:last:col-span-full",type:"button",onClick:i(a),children:[_("img",{className:"w-6 h-6",src:o,alt:`${s} logo`}),s]},s))}),Q("div",{className:"relative flex justify-center items-center my-4 text-sm",children:[_("div",{className:"absolute w-full border-t border-gray-300"}),Q("span",{className:"relative px-2 bg-white text-gray-500",children:["or ",t," with Email"]})]}),_("section",{children:n})]})}mU.propTypes={title:R.exports.string.isRequired,redirect:R.exports.func.isRequired,children:Yr.isRequired};function gU(t){return function(e){const n=ar(),{isUserSignedIn:r}=im();return r()?_(t,{...e}):_(pw,{to:"/auth/signIn",state:{next:n.pathname}})}}const yU="/where-is-game/assets/Profile.22b348ef.svg",vU="/where-is-game/assets/Key.fa072d9c.svg",wU="/where-is-game/assets/gamepad.10120a64.svg",_U=[{name:"Profile",icon:yU,to:"profile"},{name:"Authentication",icon:vU,to:"authentication"},{name:"Your Games",icon:wU,to:"games"}];function EU(){return Q("div",{className:"flex gap-12 w-full h-[90%] px-8 py-14 overflow-y-auto",children:[_("aside",{className:"flex-[0.2] flex flex-col gap-4",children:_U.map(({name:t,icon:e,to:n})=>_(za,{to:n,end:!0,children:({isActive:r})=>Q("div",{className:"flex items-center gap-4 p-2 rounded-lg transition-colors hover:bg-tiber-100 group",children:[_("img",{className:"w-8 h-8",src:e,alt:`${t} icon`}),Q("span",{className:`${r?"text-tiber-500 font-bold":""}`,children:[t,_("div",{className:`group-hover:w-full ${r?"w-full":"w-0"} h-[3px] bg-tiber-500 transition-all duration-200 ease-in`})]})]})},t))}),_("div",{className:"flex-[0.8]",children:_(mw,{})})]})}const TU=gU(EU);function SU({title:t,className:e="",onSubmit:n,children:r}){return Q("div",{children:[_("div",{className:"pb-2 border-b-2 border-tiber-500",children:_("h1",{className:"text-2xl font-medium capitalize",children:t})}),_("form",{className:`p-8 ${e}`,onSubmit:n,children:r})]})}SU.propTypes={title:R.exports.string.isRequired,className:R.exports.string,onSubmit:R.exports.func,children:Yr};function kU(){return _("div",{className:"w-full h-[90%]",children:_(mw,{})})}function fT({title:t,children:e}){return _("div",{className:"w-full h-[90%] px-6 py-10 overflow-y-scroll",children:Q("div",{className:"flex flex-col justify-center items-center gap-4 max-w-md mx-auto",children:[_("h1",{className:"self-start text-3xl font-bold text-gray-700 capitalize",children:t}),_("div",{className:"w-full p-8 rounded-lg bg-white shadow",children:e})]})})}fT.propTypes={title:R.exports.string.isRequired,children:Yr.isRequired};function IU(){return Q("div",{className:"w-screen h-screen bg-alabaster-500",children:[_(Hb,{}),_(C.exports.Suspense,{fallback:_(Bb,{}),children:Q(bI,{children:[_(Ne,{path:"/",element:_(Jb,{})}),_(Ne,{path:"/game/:id",element:_(Zb,{})}),_(Ne,{path:"/create",element:_(rU,{})}),Q(Ne,{path:"/leaderboard",element:_(eU,{}),children:[_(Ne,{index:!0,element:_(nU,{})}),_(Ne,{path:":id",element:_(tU,{})})]}),Q(Ne,{path:"/auth",element:_(kU,{}),children:[_(Ne,{path:"signIn",element:_(iU,{})}),_(Ne,{path:"signUp",element:_(sU,{})}),_(Ne,{path:"confirmAuth",element:_(oU,{})}),_(Ne,{path:"actions",element:_(hU,{})})]}),Q(Ne,{path:"/settings",element:_(TU,{}),children:[_(Ne,{index:!0,element:_(pw,{to:"profile"})}),_(Ne,{path:"profile",element:_(aU,{})}),_(Ne,{path:"authentication",element:_(lU,{})}),_(Ne,{path:"games",element:_(uU,{})})]}),_(Ne,{path:"*",element:_(cU,{})})]})})]})}rh.createRoot(document.getElementById("root")).render(_(rv.StrictMode,{children:_(zI,{basename:"/where-is-game",children:_(uT,{children:_(IU,{})})})}));export{bU as $,Rb as A,Qb as B,Ab as C,Db as D,xU as E,hw as F,Lb as G,SU as H,yU as I,OU as J,aT as K,yw as L,pU as M,pw as N,mw as O,qb as P,DU as Q,rv as R,Kb as S,AU as T,LU as U,NU as V,Jo as W,Zo as X,zU as Y,fT as Z,RU as _,FU as a,Fb as a0,im as b,du as c,Q as d,Mb as e,UE as f,UU as g,bb as h,BU as i,_ as j,Pb as k,Ub as l,cT as m,Nb as n,MU as o,$U as p,Eb as q,C as r,VU as s,Y1 as t,CU as u,mU as v,gU as w,Gb as x,ar as y,PU as z};
