(function(g,T){typeof exports=="object"&&typeof module<"u"?T(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],T):(g=typeof globalThis<"u"?globalThis:g||self,T(g.KmineLib={},g.React))})(this,function(g,T){"use strict";var U={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q;function Pe(){if(Q)return j;Q=1;var y=T,k=Symbol.for("react.element"),B=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,I=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function D(E,l,S){var v,h={},R=null,Y=null;S!==void 0&&(R=""+S),l.key!==void 0&&(R=""+l.key),l.ref!==void 0&&(Y=l.ref);for(v in l)O.call(l,v)&&!W.hasOwnProperty(v)&&(h[v]=l[v]);if(E&&E.defaultProps)for(v in l=E.defaultProps,l)h[v]===void 0&&(h[v]=l[v]);return{$$typeof:k,type:E,key:R,ref:Y,props:h,_owner:I.current}}return j.Fragment=B,j.jsx=D,j.jsxs=D,j}var x={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function we(){return ee||(ee=1,process.env.NODE_ENV!=="production"&&function(){var y=T,k=Symbol.for("react.element"),B=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),E=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),te=Symbol.iterator,Fe="@@iterator";function Ae(e){if(e===null||typeof e!="object")return null;var r=te&&e[te]||e[Fe];return typeof r=="function"?r:null}var C=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ie("error",e,t)}}function Ie(e,r,t){{var n=C.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var We=!1,Ye=!1,$e=!1,Le=!1,Ne=!1,ne;ne=Symbol.for("react.module.reference");function Me(e){return!!(typeof e=="string"||typeof e=="function"||e===O||e===W||Ne||e===I||e===S||e===v||Le||e===Y||We||Ye||$e||typeof e=="object"&&e!==null&&(e.$$typeof===R||e.$$typeof===h||e.$$typeof===D||e.$$typeof===E||e.$$typeof===l||e.$$typeof===ne||e.getModuleId!==void 0))}function Ve(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ae(e){return e.displayName||"Context"}function m(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case B:return"Portal";case W:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case E:var r=e;return ae(r)+".Consumer";case D:var t=e;return ae(t._context)+".Provider";case l:return Ve(e,e.render,"ForwardRef");case h:var n=e.displayName||null;return n!==null?n:m(e.type)||"Memo";case R:{var i=e,u=i._payload,o=i._init;try{return m(o(u))}catch{return null}}}return null}var _=Object.assign,F=0,oe,ie,ue,se,fe,le,ce;function de(){}de.__reactDisabledLog=!0;function Ue(){{if(F===0){oe=console.log,ie=console.info,ue=console.warn,se=console.error,fe=console.group,le=console.groupCollapsed,ce=console.groupEnd;var e={configurable:!0,enumerable:!0,value:de,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}F++}}function Be(){{if(F--,F===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:_({},e,{value:oe}),info:_({},e,{value:ie}),warn:_({},e,{value:ue}),error:_({},e,{value:se}),group:_({},e,{value:fe}),groupCollapsed:_({},e,{value:le}),groupEnd:_({},e,{value:ce})})}F<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=C.ReactCurrentDispatcher,J;function $(e,r,t){{if(J===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);J=n&&n[1]||""}return`
`+J+e}}var G=!1,L;{var qe=typeof WeakMap=="function"?WeakMap:Map;L=new qe}function ve(e,r){if(!e||G)return"";{var t=L.get(e);if(t!==void 0)return t}var n;G=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=q.current,q.current=null,Ue();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(b){n=b}Reflect.construct(e,[],o)}else{try{o.call()}catch(b){n=b}e.call(o.prototype)}}else{try{throw Error()}catch(b){n=b}e()}}catch(b){if(b&&n&&typeof b.stack=="string"){for(var a=b.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,f=d.length-1;s>=1&&f>=0&&a[s]!==d[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==d[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==d[f]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&L.set(e,p),p}while(s>=1&&f>=0);break}}}finally{G=!1,q.current=u,Be(),Error.prepareStackTrace=i}var w=e?e.displayName||e.name:"",Ce=w?$(w):"";return typeof e=="function"&&L.set(e,Ce),Ce}function Je(e,r,t){return ve(e,!1)}function Ge(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function N(e,r,t){if(e==null)return"";if(typeof e=="function")return ve(e,Ge(e));if(typeof e=="string")return $(e);switch(e){case S:return $("Suspense");case v:return $("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return Je(e.render);case h:return N(e.type,r,t);case R:{var n=e,i=n._payload,u=n._init;try{return N(u(i),r,t)}catch{}}}return""}var M=Object.prototype.hasOwnProperty,pe={},he=C.ReactDebugCurrentFrame;function V(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);he.setExtraStackFrame(t)}else he.setExtraStackFrame(null)}function ze(e,r,t,n,i){{var u=Function.call.bind(M);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var d=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(V(i),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),V(null)),a instanceof Error&&!(a.message in pe)&&(pe[a.message]=!0,V(i),c("Failed %s type: %s",t,a.message),V(null))}}}var Ke=Array.isArray;function z(e){return Ke(e)}function He(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Xe(e){try{return me(e),!1}catch{return!0}}function me(e){return""+e}function be(e){if(Xe(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",He(e)),me(e)}var A=C.ReactCurrentOwner,Ze={key:!0,ref:!0,__self:!0,__source:!0},ge,ye,K;K={};function Qe(e){if(M.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function er(e){if(M.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function rr(e,r){if(typeof e.ref=="string"&&A.current&&r&&A.current.stateNode!==r){var t=m(A.current.type);K[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',m(A.current.type),e.ref),K[t]=!0)}}function tr(e,r){{var t=function(){ge||(ge=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function nr(e,r){{var t=function(){ye||(ye=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ar=function(e,r,t,n,i,u,o){var a={$$typeof:k,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function or(e,r,t,n,i){{var u,o={},a=null,d=null;t!==void 0&&(be(t),a=""+t),er(r)&&(be(r.key),a=""+r.key),Qe(r)&&(d=r.ref,rr(r,i));for(u in r)M.call(r,u)&&!Ze.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||d){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&tr(o,f),d&&nr(o,f)}return ar(e,a,d,i,n,A.current,o)}}var H=C.ReactCurrentOwner,Ee=C.ReactDebugCurrentFrame;function P(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}var X;X=!1;function Z(e){return typeof e=="object"&&e!==null&&e.$$typeof===k}function Re(){{if(H.current){var e=m(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ir(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var _e={};function ur(e){{var r=Re();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Te(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ur(r);if(_e[t])return;_e[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+m(e._owner.type)+"."),P(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),P(null)}}function Oe(e,r){{if(typeof e!="object")return;if(z(e))for(var t=0;t<e.length;t++){var n=e[t];Z(n)&&Te(n,r)}else if(Z(e))e._store&&(e._store.validated=!0);else if(e){var i=Ae(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)Z(o.value)&&Te(o.value,r)}}}function sr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===h))t=r.propTypes;else return;if(t){var n=m(r);ze(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!X){X=!0;var i=m(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function fr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){P(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),P(null);break}}e.ref!==null&&(P(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),P(null))}}function Se(e,r,t,n,i,u){{var o=Me(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=ir(i);d?a+=d:a+=Re();var s;e===null?s="null":z(e)?s="array":e!==void 0&&e.$$typeof===k?(s="<"+(m(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=or(e,r,t,i,u);if(f==null)return f;if(o){var p=r.children;if(p!==void 0)if(n)if(z(p)){for(var w=0;w<p.length;w++)Oe(p[w],e);Object.freeze&&Object.freeze(p)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(p,e)}return e===O?fr(f):sr(f),f}}function lr(e,r,t){return Se(e,r,t,!0)}function cr(e,r,t){return Se(e,r,t,!1)}var dr=cr,vr=lr;x.Fragment=O,x.jsx=dr,x.jsxs=vr}()),x}process.env.NODE_ENV==="production"?U.exports=Pe():U.exports=we();var re=U.exports;const je=re.jsx,xe=re.jsxs;function ke({name:y="someone"}){return je("div",{children:xe("h1",{children:["Sample Component [",y,"]"]})})}function De(y){return`Hello ${y}!`}g.SampleComponent=ke,g.hello=De,Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
