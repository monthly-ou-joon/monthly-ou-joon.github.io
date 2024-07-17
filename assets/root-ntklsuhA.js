import{r as n,j as e}from"./jsx-runtime-D2HyDbKh.js";import{l as x,n as p,o as f,p as y,_ as j,O as w,M as S,L as g,S as k}from"./components-5W_PNQ0Q.js";import"./index-BabtBpse.js";/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:t,...l}){let{isSpaMode:c}=x(),o=p(),u=f();y({getKey:t,storageKey:a});let d=n.useMemo(()=>{if(!t)return null;let s=t(o,u);return s!==o.key?s:null},[]);if(c)return null;let h=((s,m)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let i=JSON.parse(sessionStorage.getItem(s)||"{}")[m||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return n.createElement("script",j({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${h})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}const b="/assets/tailwind-C3XshW49.css",O=()=>[{rel:"stylesheet",href:b}];function R({children:t}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(S,{}),e.jsx(g,{})]}),e.jsx("body",{className:"bg-black",children:e.jsxs("div",{children:[e.jsxs("div",{className:"sticky top-0 z-10 m-auto flex w-full justify-center gap-3 bg-black p-2 text-center text-slate-50",children:[e.jsx("a",{href:"/",children:"Home"}),e.jsx("a",{href:"/catalog",children:"Catalog"}),e.jsx("a",{href:"/artworks/timeline",children:"Artworks"})]}),t,e.jsx(M,{}),e.jsx(k,{})]})})]})}function _(){return e.jsx(w,{})}export{R as Layout,_ as default,O as links};
