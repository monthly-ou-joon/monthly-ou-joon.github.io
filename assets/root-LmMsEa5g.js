import{r as a,j as t}from"./jsx-runtime-D2HyDbKh.js";import{l as p,n as y,o as f,p as j,_ as w,O as S,M as g,L as k,q as o,S as b}from"./components-Ch90HeNA.js";import"./index-BabtBpse.js";/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let l="positions";function L({getKey:e,...c}){let{isSpaMode:u}=p(),n=y(),d=f();j({getKey:e,storageKey:l});let x=a.useMemo(()=>{if(!e)return null;let s=e(n,d);return s!==n.key?s:null},[]);if(u)return null;let h=((s,m)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let i=JSON.parse(sessionStorage.getItem(s)||"{}")[m||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return a.createElement("script",w({},c,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${h})(${JSON.stringify(l)}, ${JSON.stringify(x)})`}}))}const M="/assets/tailwind-Dax2eFYn.css",H=()=>[{rel:"stylesheet",href:M}];function R({children:e}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(g,{}),t.jsx(k,{})]}),t.jsx("body",{className:"bg-black",children:t.jsxs("div",{children:[t.jsxs("div",{className:"sticky top-0 z-10 m-auto flex w-full justify-center gap-3 bg-black p-2 text-center text-slate-50",children:[t.jsx(o,{to:"/",children:"Home"}),t.jsx(o,{to:"/catalog",children:"Catalog"}),t.jsx(o,{to:"/artworks/timeline",children:"Artworks"})]}),e,t.jsx(L,{}),t.jsx(b,{})]})})]})}function _(){return t.jsx(S,{})}function E(){return t.jsx("p",{children:"Loading..."})}export{E as HydrateFallback,R as Layout,_ as default,H as links};
