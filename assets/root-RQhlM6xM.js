import{r as i,j as t}from"./jsx-runtime-D2HyDbKh.js";import{l as h,n as x,o as y,p as S,_ as f,O as w,M as j,L as g,S as M}from"./components-kbmTcfzG.js";import"./index-D8yjffnJ.js";/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function k({getKey:e,...l}){let{isSpaMode:c}=h(),o=x(),u=y();S({getKey:e,storageKey:a});let p=i.useMemo(()=>{if(!e)return null;let s=e(o,u);return s!==o.key?s:null},[]);if(c)return null;let d=((s,m)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let n=JSON.parse(sessionStorage.getItem(s)||"{}")[m||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",f({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${d})(${JSON.stringify(a)}, ${JSON.stringify(p)})`}}))}function _({children:e}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(j,{}),t.jsx(g,{})]}),t.jsxs("body",{children:[e,t.jsx(k,{}),t.jsx(M,{})]})]})}function v(){return t.jsx(w,{})}export{_ as Layout,v as default};
