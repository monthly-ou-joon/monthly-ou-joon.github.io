import{r as i,j as t}from"./jsx-runtime-D2HyDbKh.js";import{l as p,n as y,o as x,p as f,_ as S,O as w,M as g,L as j,S as M}from"./components-5W_PNQ0Q.js";import"./index-BabtBpse.js";/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function k({getKey:e,...l}){let{isSpaMode:c}=p(),o=y(),d=x();f({getKey:e,storageKey:a});let u=i.useMemo(()=>{if(!e)return null;let s=e(o,d);return s!==o.key?s:null},[]);if(c)return null;let h=((s,m)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let n=JSON.parse(sessionStorage.getItem(s)||"{}")[m||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",S({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${h})(${JSON.stringify(a)}, ${JSON.stringify(u)})`}}))}function v({children:e}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx("style",{children:`
html,
body,
#root {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  display: flex;
  align-items: center;
  align-content: center;
}
            `}),t.jsx(g,{}),t.jsx(j,{})]}),t.jsxs("body",{children:[e,t.jsx(k,{}),t.jsx(M,{})]})]})}function R(){return t.jsx(w,{})}export{v as Layout,R as default};
