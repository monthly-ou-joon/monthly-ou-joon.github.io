var Qe=t=>{throw TypeError(t)};var Ce=(t,e,n)=>e.has(t)||Qe("Cannot "+n);var l=(t,e,n)=>(Ce(t,e,"read from private field"),n?n.call(t):e.get(t)),b=(t,e,n)=>e.has(t)?Qe("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),w=(t,e,n,r)=>(Ce(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),$=(t,e,n)=>(Ce(t,e,"access private method"),n);var fe=(t,e,n,r)=>({set _(i){w(t,e,i,n)},get _(){return l(t,e,r)}});import{r as _,j as pe}from"./jsx-runtime-D2HyDbKh.js";import{h as cn}from"./client-Ce32UgwA.js";import{S as Et,h as Ct,Q as ln,n as E,m as We,R as un,c as dn,a as Ge,b as B,e as hn,d as fn,f as pn,g as mn,o as Ke,r as Ye,i as gn,j as Je,p as Xe,s as wn,k as yn}from"./QueryClientProvider-1KH9_OfO.js";import{E as bn,m as _n,c as vn,a as In,b as En}from"./index-D9dO0-BM.js";import{c as Cn,i as An,d as Sn,a as Dn,s as Rn,b as Tn,g as Mn,u as On,R as xn,e as Pn,f as Fn}from"./components-Ci5Kl28g.js";import"./index-D8yjffnJ.js";/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bn(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new bn(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let a=new s(i.message);a.stack=i.stack,n[r]=a}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack=i.stack,n[r]=s}}else n[r]=i;return n}/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let k,D,Ae=!1;let Pe,qs=new Promise(t=>{Pe=t}).catch(()=>{});function $n(t){if(!D){let s=window.__remixContext.url,a=window.location.pathname;if(s!==a&&!window.__remixContext.isSpaMode){let h=`Initial URL (${s}) does not match URL at time of hydration (${a}), reloading page...`;return console.error(h),window.location.reload(),_.createElement(_.Fragment,null)}if(window.__remixContext.future.unstable_singleFetch){if(!k){let h=window.__remixContext.stream;An(h,"No stream found for single fetch decoding"),window.__remixContext.stream=void 0,k=Sn(h,window).then(p=>{window.__remixContext.state=p.value,k.value=!0}).catch(p=>{k.error=p})}if(k.error)throw k.error;if(!k.value)throw k}let o=Dn(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.state,window.__remixContext.future,window.__remixContext.isSpaMode),c;if(!window.__remixContext.isSpaMode){c={...window.__remixContext.state,loaderData:{...window.__remixContext.state.loaderData}};let h=_n(o,window.location,window.__remixContext.basename);if(h)for(let p of h){let d=p.route.id,R=window.__remixRouteModules[d],M=window.__remixManifest.routes[d];R&&Rn(M,R,window.__remixContext.isSpaMode)&&(R.HydrateFallback||!M.hasLoader)?c.loaderData[d]=void 0:M&&!M.hasLoader&&(c.loaderData[d]=null)}c&&c.errors&&(c.errors=Bn(c.errors))}let{enabled:u,patchRoutesOnMiss:g}=Tn(window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode,window.__remixContext.basename);D=vn({routes:o,history:In(),basename:window.__remixContext.basename,future:{v7_normalizeFormMethod:!0,v7_fetcherPersist:window.__remixContext.future.v3_fetcherPersist,v7_partialHydration:!0,v7_prependBasename:!0,v7_relativeSplatPath:window.__remixContext.future.v3_relativeSplatPath,unstable_skipActionErrorRevalidation:window.__remixContext.future.unstable_singleFetch===!0},hydrationData:c,mapRouteProperties:En,unstable_dataStrategy:window.__remixContext.future.unstable_singleFetch?Mn(window.__remixManifest,window.__remixRouteModules):void 0,...u?{unstable_patchRoutesOnMiss:g}:{}}),D.state.initialized&&(Ae=!0,D.initialize()),D.createRoutesForHMR=Cn,window.__remixRouter=D,Pe&&Pe(D)}let[e,n]=_.useState(void 0),[r,i]=_.useState(D.state.location);return _.useLayoutEffect(()=>{Ae||(Ae=!0,D.initialize())},[]),_.useLayoutEffect(()=>D.subscribe(s=>{s.location!==r&&i(s.location)}),[r]),On(D,window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode),_.createElement(_.Fragment,null,_.createElement(xn.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future,criticalCss:e,isSpaMode:window.__remixContext.isSpaMode}},_.createElement(Pn,{location:r},_.createElement(Fn,{router:D,fallbackElement:null,future:{v7_startTransition:!0}}))),window.__remixContext.future.unstable_singleFetch?_.createElement(_.Fragment,null):null)}var x,bt,kn=(bt=class extends Et{constructor(e={}){super();b(this,x);this.config=e,w(this,x,new Map)}build(e,n,r){const i=n.queryKey,s=n.queryHash??Ct(i,n);let a=this.get(s);return a||(a=new ln({cache:this,queryKey:i,queryHash:s,options:e.defaultQueryOptions(n),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(a)),a}add(e){l(this,x).has(e.queryHash)||(l(this,x).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=l(this,x).get(e.queryHash);n&&(e.destroy(),n===e&&l(this,x).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){E.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return l(this,x).get(e)}getAll(){return[...l(this,x).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(r=>We(n,r))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(r=>We(e,r)):n}notify(e){E.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){E.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){E.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},x=new WeakMap,bt),P,v,Y,F,N,_t,Nn=(_t=class extends un{constructor(e){super();b(this,F);b(this,P);b(this,v);b(this,Y);this.mutationId=e.mutationId,w(this,v,e.mutationCache),w(this,P,[]),this.state=e.state||Ln(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){l(this,P).includes(e)||(l(this,P).push(e),this.clearGcTimeout(),l(this,v).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){w(this,P,l(this,P).filter(n=>n!==e)),this.scheduleGc(),l(this,v).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){l(this,P).length||(this.state.status==="pending"?this.scheduleGc():l(this,v).remove(this))}continue(){var e;return((e=l(this,Y))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var i,s,a,o,c,u,g,h,p,d,R,M,ae,oe,ce,I,T,O,Q,he;w(this,Y,dn({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(y,W)=>{$(this,F,N).call(this,{type:"failed",failureCount:y,error:W})},onPause:()=>{$(this,F,N).call(this,{type:"pause"})},onContinue:()=>{$(this,F,N).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>l(this,v).canRun(this)}));const n=this.state.status==="pending",r=!l(this,Y).canStart();try{if(!n){$(this,F,N).call(this,{type:"pending",variables:e,isPaused:r}),await((s=(i=l(this,v).config).onMutate)==null?void 0:s.call(i,e,this));const W=await((o=(a=this.options).onMutate)==null?void 0:o.call(a,e));W!==this.state.context&&$(this,F,N).call(this,{type:"pending",context:W,variables:e,isPaused:r})}const y=await l(this,Y).start();return await((u=(c=l(this,v).config).onSuccess)==null?void 0:u.call(c,y,e,this.state.context,this)),await((h=(g=this.options).onSuccess)==null?void 0:h.call(g,y,e,this.state.context)),await((d=(p=l(this,v).config).onSettled)==null?void 0:d.call(p,y,null,this.state.variables,this.state.context,this)),await((M=(R=this.options).onSettled)==null?void 0:M.call(R,y,null,e,this.state.context)),$(this,F,N).call(this,{type:"success",data:y}),y}catch(y){try{throw await((oe=(ae=l(this,v).config).onError)==null?void 0:oe.call(ae,y,e,this.state.context,this)),await((I=(ce=this.options).onError)==null?void 0:I.call(ce,y,e,this.state.context)),await((O=(T=l(this,v).config).onSettled)==null?void 0:O.call(T,void 0,y,this.state.variables,this.state.context,this)),await((he=(Q=this.options).onSettled)==null?void 0:he.call(Q,void 0,y,e,this.state.context)),y}finally{$(this,F,N).call(this,{type:"error",error:y})}}finally{l(this,v).runNext(this)}}},P=new WeakMap,v=new WeakMap,Y=new WeakMap,F=new WeakSet,N=function(e){const n=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),E.batch(()=>{l(this,P).forEach(r=>{r.onMutationUpdate(e)}),l(this,v).notify({mutation:this,type:"updated",action:e})})},_t);function Ln(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var A,de,vt,jn=(vt=class extends Et{constructor(e={}){super();b(this,A);b(this,de);this.config=e,w(this,A,new Map),w(this,de,Date.now())}build(e,n,r){const i=new Nn({mutationCache:this,mutationId:++fe(this,de)._,options:e.defaultMutationOptions(n),state:r});return this.add(i),i}add(e){const n=me(e),r=l(this,A).get(n)??[];r.push(e),l(this,A).set(n,r),this.notify({type:"added",mutation:e})}remove(e){var r;const n=me(e);if(l(this,A).has(n)){const i=(r=l(this,A).get(n))==null?void 0:r.filter(s=>s!==e);i&&(i.length===0?l(this,A).delete(n):l(this,A).set(n,i))}this.notify({type:"removed",mutation:e})}canRun(e){var r;const n=(r=l(this,A).get(me(e)))==null?void 0:r.find(i=>i.state.status==="pending");return!n||n===e}runNext(e){var r;const n=(r=l(this,A).get(me(e)))==null?void 0:r.find(i=>i!==e&&i.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){E.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...l(this,A).values()].flat()}find(e){const n={exact:!0,...e};return this.getAll().find(r=>Ge(n,r))}findAll(e={}){return this.getAll().filter(n=>Ge(e,n))}notify(e){E.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return E.batch(()=>Promise.all(e.map(n=>n.continue().catch(B))))}},A=new WeakMap,de=new WeakMap,vt);function me(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}function Hn(t){return{onFetch:(e,n)=>{const r=async()=>{var R,M,ae,oe,ce;const i=e.options,s=(ae=(M=(R=e.fetchOptions)==null?void 0:R.meta)==null?void 0:M.fetchMore)==null?void 0:ae.direction,a=((oe=e.state.data)==null?void 0:oe.pages)||[],o=((ce=e.state.data)==null?void 0:ce.pageParams)||[],c={pages:[],pageParams:[]};let u=!1;const g=I=>{Object.defineProperty(I,"signal",{enumerable:!0,get:()=>(e.signal.aborted?u=!0:e.signal.addEventListener("abort",()=>{u=!0}),e.signal)})},h=hn(e.options,e.fetchOptions),p=async(I,T,O)=>{if(u)return Promise.reject();if(T==null&&I.pages.length)return Promise.resolve(I);const Q={queryKey:e.queryKey,pageParam:T,direction:O?"backward":"forward",meta:e.options.meta};g(Q);const he=await h(Q),{maxPages:y}=e.options,W=O?fn:pn;return{pages:W(I.pages,he,y),pageParams:W(I.pageParams,T,y)}};let d;if(s&&a.length){const I=s==="backward",T=I?Un:Ze,O={pages:a,pageParams:o},Q=T(i,O);d=await p(O,Q,I)}else{d=await p(c,o[0]??i.initialPageParam);const I=t??a.length;for(let T=1;T<I;T++){const O=Ze(i,d);d=await p(d,O)}}return d};e.options.persister?e.fetchFn=()=>{var i,s;return(s=(i=e.options).persister)==null?void 0:s.call(i,r,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=r}}}function Ze(t,{pages:e,pageParams:n}){const r=e.length-1;return e.length>0?t.getNextPageParam(e[r],e,n[r],n):void 0}function Un(t,{pages:e,pageParams:n}){var r;return e.length>0?(r=t.getPreviousPageParam)==null?void 0:r.call(t,e[0],e,n[0],n):void 0}var m,L,j,ne,re,H,ie,se,It,Vn=(It=class{constructor(t={}){b(this,m);b(this,L);b(this,j);b(this,ne);b(this,re);b(this,H);b(this,ie);b(this,se);w(this,m,t.queryCache||new kn),w(this,L,t.mutationCache||new jn),w(this,j,t.defaultOptions||{}),w(this,ne,new Map),w(this,re,new Map),w(this,H,0)}mount(){fe(this,H)._++,l(this,H)===1&&(w(this,ie,mn.subscribe(async t=>{t&&(await this.resumePausedMutations(),l(this,m).onFocus())})),w(this,se,Ke.subscribe(async t=>{t&&(await this.resumePausedMutations(),l(this,m).onOnline())})))}unmount(){var t,e;fe(this,H)._--,l(this,H)===0&&((t=l(this,ie))==null||t.call(this),w(this,ie,void 0),(e=l(this,se))==null||e.call(this),w(this,se,void 0))}isFetching(t){return l(this,m).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return l(this,L).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=l(this,m).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const n=this.defaultQueryOptions(t),r=l(this,m).build(this,n);return t.revalidateIfStale&&r.isStaleByTime(Ye(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(e)}}getQueriesData(t){return l(this,m).findAll(t).map(({queryKey:e,state:n})=>{const r=n.data;return[e,r]})}setQueryData(t,e,n){const r=this.defaultQueryOptions({queryKey:t}),i=l(this,m).get(r.queryHash),s=i==null?void 0:i.state.data,a=gn(e,s);if(a!==void 0)return l(this,m).build(this,r).setData(a,{...n,manual:!0})}setQueriesData(t,e,n){return E.batch(()=>l(this,m).findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=l(this,m).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=l(this,m);E.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=l(this,m),r={type:"active",...t};return E.batch(()=>(n.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries(r,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},r=E.batch(()=>l(this,m).findAll(t).map(i=>i.cancel(n)));return Promise.all(r).then(B).catch(B)}invalidateQueries(t={},e={}){return E.batch(()=>{if(l(this,m).findAll(t).forEach(r=>{r.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},r=E.batch(()=>l(this,m).findAll(t).filter(i=>!i.isDisabled()).map(i=>{let s=i.fetch(void 0,n);return n.throwOnError||(s=s.catch(B)),i.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(r).then(B)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=l(this,m).build(this,e);return n.isStaleByTime(Ye(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(B).catch(B)}fetchInfiniteQuery(t){return t.behavior=Hn(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(B).catch(B)}resumePausedMutations(){return Ke.isOnline()?l(this,L).resumePausedMutations():Promise.resolve()}getQueryCache(){return l(this,m)}getMutationCache(){return l(this,L)}getDefaultOptions(){return l(this,j)}setDefaultOptions(t){w(this,j,t)}setQueryDefaults(t,e){l(this,ne).set(Je(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...l(this,ne).values()];let n={};return e.forEach(r=>{Xe(t,r.queryKey)&&(n={...n,...r.defaultOptions})}),n}setMutationDefaults(t,e){l(this,re).set(Je(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...l(this,re).values()];let n={};return e.forEach(r=>{Xe(t,r.mutationKey)&&(n={...n,...r.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...l(this,j).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Ct(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===wn&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...l(this,j).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){l(this,m).clear(),l(this,L).clear()}},m=new WeakMap,L=new WeakMap,j=new WeakMap,ne=new WeakMap,re=new WeakMap,H=new WeakMap,ie=new WeakMap,se=new WeakMap,It),et={};/**
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
 */const At=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zn=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],o=t[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},St={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,o=a?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,g=s>>2,h=(s&3)<<4|o>>4;let p=(o&15)<<2|u>>6,d=u&63;c||(d=64,a||(p=64)),r.push(n[g],n[h],n[p],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(At(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||o==null||u==null||h==null)throw new qn;const p=s<<2|o>>4;if(r.push(p),u!==64){const d=o<<4&240|u>>2;if(r.push(d),h!==64){const R=u<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qn=function(t){const e=At(t);return St.encodeByteArray(e,!0)},Dt=function(t){return Qn(t).replace(/\./g,"")},Wn=function(t){try{return St.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kn=()=>Gn().__FIREBASE_DEFAULTS__,Yn=()=>{if(typeof process>"u"||typeof et>"u")return;const t=et.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jn=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wn(t[1]);return e&&JSON.parse(e)},Xn=()=>{try{return Kn()||Yn()||Jn()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rt=()=>{var t;return(t=Xn())===null||t===void 0?void 0:t.config};/**
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
 */class Zn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function er(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tt(){try{return typeof indexedDB=="object"}catch{return!1}}function Mt(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function tr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const nr="FirebaseError";class te extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nr,Object.setPrototypeOf(this,te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_e.prototype.create)}}class _e{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?rr(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new te(i,o,r)}}function rr(t,e){return t.replace(ir,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ir=/\{\$([^}]+)}/g;function ge(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(tt(s)&&tt(a)){if(!ge(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tt(t){return t!==null&&typeof t=="object"}/**
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
 */const sr=1e3,ar=2,or=4*60*60*1e3,cr=.5;function nt(t,e=sr,n=ar){const r=e*Math.pow(n,t),i=Math.round(cr*r*(Math.random()-.5)*2);return Math.min(or,r+i)}/**
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
 */function Ot(t){return t&&t._delegate?t._delegate:t}class q{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const G="[DEFAULT]";/**
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
 */class lr{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Zn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dr(e))try{this.getOrInitializeService({instanceIdentifier:G})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=G){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=G){return this.instances.has(e)}getOptions(e=G){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ur(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=G){return this.component?this.component.multipleInstances?e:G:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ur(t){return t===G?void 0:t}function dr(t){return t.instantiationMode==="EAGER"}/**
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
 */class hr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lr(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var f;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(f||(f={}));const fr={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},pr=f.INFO,mr={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},gr=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=mr[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xt{constructor(e){this.name=e,this._logLevel=pr,this._logHandler=gr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in f))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...e),this._logHandler(this,f.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...e),this._logHandler(this,f.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,f.INFO,...e),this._logHandler(this,f.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,f.WARN,...e),this._logHandler(this,f.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...e),this._logHandler(this,f.ERROR,...e)}}const wr=(t,e)=>e.some(n=>t instanceof n);let rt,it;function yr(){return rt||(rt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function br(){return it||(it=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pt=new WeakMap,Fe=new WeakMap,Ft=new WeakMap,Se=new WeakMap,je=new WeakMap;function _r(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(U(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Pt.set(n,t)}).catch(()=>{}),je.set(e,t),e}function vr(t){if(Fe.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Fe.set(t,e)}let Be={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fe.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ft.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return U(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ir(t){Be=t(Be)}function Er(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(De(this),e,...n);return Ft.set(r,e.sort?e.sort():[e]),U(r)}:br().includes(t)?function(...e){return t.apply(De(this),e),U(Pt.get(this))}:function(...e){return U(t.apply(De(this),e))}}function Cr(t){return typeof t=="function"?Er(t):(t instanceof IDBTransaction&&vr(t),wr(t,yr())?new Proxy(t,Be):t)}function U(t){if(t instanceof IDBRequest)return _r(t);if(Se.has(t))return Se.get(t);const e=Cr(t);return e!==t&&(Se.set(t,e),je.set(e,t)),e}const De=t=>je.get(t);function Bt(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),o=U(a);return r&&a.addEventListener("upgradeneeded",c=>{r(U(a.result),c.oldVersion,c.newVersion,U(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const Ar=["get","getKey","getAll","getAllKeys","count"],Sr=["put","add","delete","clear"],Re=new Map;function st(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Re.get(e))return Re.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Sr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ar.includes(n)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),i&&c.done]))[0]};return Re.set(e,s),s}Ir(t=>({...t,get:(e,n,r)=>st(e,n)||t.get(e,n,r),has:(e,n)=>!!st(e,n)||t.has(e,n)}));/**
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
 */class Dr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Rr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $e="@firebase/app",at="0.10.6";/**
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
 */const J=new xt("@firebase/app"),Tr="@firebase/app-compat",Mr="@firebase/analytics-compat",Or="@firebase/analytics",xr="@firebase/app-check-compat",Pr="@firebase/app-check",Fr="@firebase/auth",Br="@firebase/auth-compat",$r="@firebase/database",kr="@firebase/database-compat",Nr="@firebase/functions",Lr="@firebase/functions-compat",jr="@firebase/installations",Hr="@firebase/installations-compat",Ur="@firebase/messaging",Vr="@firebase/messaging-compat",zr="@firebase/performance",qr="@firebase/performance-compat",Qr="@firebase/remote-config",Wr="@firebase/remote-config-compat",Gr="@firebase/storage",Kr="@firebase/storage-compat",Yr="@firebase/firestore",Jr="@firebase/vertexai-preview",Xr="@firebase/firestore-compat",Zr="firebase";/**
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
 */const ke="[DEFAULT]",ei={[$e]:"fire-core",[Tr]:"fire-core-compat",[Or]:"fire-analytics",[Mr]:"fire-analytics-compat",[Pr]:"fire-app-check",[xr]:"fire-app-check-compat",[Fr]:"fire-auth",[Br]:"fire-auth-compat",[$r]:"fire-rtdb",[kr]:"fire-rtdb-compat",[Nr]:"fire-fn",[Lr]:"fire-fn-compat",[jr]:"fire-iid",[Hr]:"fire-iid-compat",[Ur]:"fire-fcm",[Vr]:"fire-fcm-compat",[zr]:"fire-perf",[qr]:"fire-perf-compat",[Qr]:"fire-rc",[Wr]:"fire-rc-compat",[Gr]:"fire-gcs",[Kr]:"fire-gcs-compat",[Yr]:"fire-fst",[Xr]:"fire-fst-compat",[Jr]:"fire-vertex","fire-js":"fire-js",[Zr]:"fire-js-all"};/**
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
 */const we=new Map,ti=new Map,Ne=new Map;function ot(t,e){try{t.container.addComponent(e)}catch(n){J.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function X(t){const e=t.name;if(Ne.has(e))return J.debug(`There were multiple attempts to register component ${e}.`),!1;Ne.set(e,t);for(const n of we.values())ot(n,t);for(const n of ti.values())ot(n,t);return!0}function ve(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ni={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},V=new _e("app","Firebase",ni);/**
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
 */class ri{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new q("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw V.create("app-deleted",{appName:this._name})}}function $t(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ke,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw V.create("bad-app-name",{appName:String(i)});if(n||(n=Rt()),!n)throw V.create("no-options");const s=we.get(i);if(s){if(ge(n,s.options)&&ge(r,s.config))return s;throw V.create("duplicate-app",{appName:i})}const a=new hr(i);for(const c of Ne.values())a.addComponent(c);const o=new ri(n,r,a);return we.set(i,o),o}function ii(t=ke){const e=we.get(t);if(!e&&t===ke&&Rt())return $t();if(!e)throw V.create("no-app",{appName:t});return e}function z(t,e,n){var r;let i=(r=ei[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),J.warn(o.join(" "));return}X(new q(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const si="firebase-heartbeat-database",ai=1,ue="firebase-heartbeat-store";let Te=null;function kt(){return Te||(Te=Bt(si,ai,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ue)}catch(n){console.warn(n)}}}}).catch(t=>{throw V.create("idb-open",{originalErrorMessage:t.message})})),Te}async function oi(t){try{const n=(await kt()).transaction(ue),r=await n.objectStore(ue).get(Nt(t));return await n.done,r}catch(e){if(e instanceof te)J.warn(e.message);else{const n=V.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});J.warn(n.message)}}}async function ct(t,e){try{const r=(await kt()).transaction(ue,"readwrite");await r.objectStore(ue).put(e,Nt(t)),await r.done}catch(n){if(n instanceof te)J.warn(n.message);else{const r=V.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});J.warn(r.message)}}}function Nt(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ci=1024,li=30*24*60*60*1e3;class ui{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hi(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lt();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=li}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lt(),{heartbeatsToSend:r,unsentEntries:i}=di(this._heartbeatsCache.heartbeats),s=Dt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function lt(){return new Date().toISOString().substring(0,10)}function di(t,e=ci){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),ut(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ut(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hi{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tt()?Mt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oi(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ct(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ct(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ut(t){return Dt(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function fi(t){X(new q("platform-logger",e=>new Dr(e),"PRIVATE")),X(new q("heartbeat",e=>new ui(e),"PRIVATE")),z($e,at,t),z($e,at,"esm2017"),z("fire-js","")}fi("");const Lt="@firebase/installations",He="0.6.8";/**
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
 */const jt=1e4,Ht=`w:${He}`,Ut="FIS_v2",pi="https://firebaseinstallations.googleapis.com/v1",mi=60*60*1e3,gi="installations",wi="Installations";/**
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
 */const yi={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Z=new _e(gi,wi,yi);function Vt(t){return t instanceof te&&t.code.includes("request-failed")}/**
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
 */function zt({projectId:t}){return`${pi}/projects/${t}/installations`}function qt(t){return{token:t.token,requestStatus:2,expiresIn:_i(t.expiresIn),creationTime:Date.now()}}async function Qt(t,e){const r=(await e.json()).error;return Z.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Wt({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function bi(t,{refreshToken:e}){const n=Wt(t);return n.append("Authorization",vi(e)),n}async function Gt(t){const e=await t();return e.status>=500&&e.status<600?t():e}function _i(t){return Number(t.replace("s","000"))}function vi(t){return`${Ut} ${t}`}/**
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
 */async function Ii({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=zt(t),i=Wt(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const a={fid:n,authVersion:Ut,appId:t.appId,sdkVersion:Ht},o={method:"POST",headers:i,body:JSON.stringify(a)},c=await Gt(()=>fetch(r,o));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:qt(u.authToken)}}else throw await Qt("Create Installation",c)}/**
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
 */function Kt(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Ei(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ci=/^[cdef][\w-]{21}$/,Le="";function Ai(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Si(t);return Ci.test(n)?n:Le}catch{return Le}}function Si(t){return Ei(t).substr(0,22)}/**
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
 */function Ie(t){return`${t.appName}!${t.appId}`}/**
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
 */const Yt=new Map;function Jt(t,e){const n=Ie(t);Xt(n,e),Di(n,e)}function Xt(t,e){const n=Yt.get(t);if(n)for(const r of n)r(e)}function Di(t,e){const n=Ri();n&&n.postMessage({key:t,fid:e}),Ti()}let K=null;function Ri(){return!K&&"BroadcastChannel"in self&&(K=new BroadcastChannel("[Firebase] FID Change"),K.onmessage=t=>{Xt(t.data.key,t.data.fid)}),K}function Ti(){Yt.size===0&&K&&(K.close(),K=null)}/**
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
 */const Mi="firebase-installations-database",Oi=1,ee="firebase-installations-store";let Me=null;function Ue(){return Me||(Me=Bt(Mi,Oi,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ee)}}})),Me}async function ye(t,e){const n=Ie(t),i=(await Ue()).transaction(ee,"readwrite"),s=i.objectStore(ee),a=await s.get(n);return await s.put(e,n),await i.done,(!a||a.fid!==e.fid)&&Jt(t,e.fid),e}async function Zt(t){const e=Ie(t),r=(await Ue()).transaction(ee,"readwrite");await r.objectStore(ee).delete(e),await r.done}async function Ee(t,e){const n=Ie(t),i=(await Ue()).transaction(ee,"readwrite"),s=i.objectStore(ee),a=await s.get(n),o=e(a);return o===void 0?await s.delete(n):await s.put(o,n),await i.done,o&&(!a||a.fid!==o.fid)&&Jt(t,o.fid),o}/**
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
 */async function Ve(t){let e;const n=await Ee(t.appConfig,r=>{const i=xi(r),s=Pi(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Le?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function xi(t){const e=t||{fid:Ai(),registrationStatus:0};return en(e)}function Pi(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Z.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Fi(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Bi(t)}:{installationEntry:e}}async function Fi(t,e){try{const n=await Ii(t,e);return ye(t.appConfig,n)}catch(n){throw Vt(n)&&n.customData.serverCode===409?await Zt(t.appConfig):await ye(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Bi(t){let e=await dt(t.appConfig);for(;e.registrationStatus===1;)await Kt(100),e=await dt(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ve(t);return r||n}return e}function dt(t){return Ee(t,e=>{if(!e)throw Z.create("installation-not-found");return en(e)})}function en(t){return $i(t)?{fid:t.fid,registrationStatus:0}:t}function $i(t){return t.registrationStatus===1&&t.registrationTime+jt<Date.now()}/**
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
 */async function ki({appConfig:t,heartbeatServiceProvider:e},n){const r=Ni(t,n),i=bi(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const a={installation:{sdkVersion:Ht,appId:t.appId}},o={method:"POST",headers:i,body:JSON.stringify(a)},c=await Gt(()=>fetch(r,o));if(c.ok){const u=await c.json();return qt(u)}else throw await Qt("Generate Auth Token",c)}function Ni(t,{fid:e}){return`${zt(t)}/${e}/authTokens:generate`}/**
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
 */async function ze(t,e=!1){let n;const r=await Ee(t.appConfig,s=>{if(!tn(s))throw Z.create("not-registered");const a=s.authToken;if(!e&&Hi(a))return s;if(a.requestStatus===1)return n=Li(t,e),s;{if(!navigator.onLine)throw Z.create("app-offline");const o=Vi(s);return n=ji(t,o),o}});return n?await n:r.authToken}async function Li(t,e){let n=await ht(t.appConfig);for(;n.authToken.requestStatus===1;)await Kt(100),n=await ht(t.appConfig);const r=n.authToken;return r.requestStatus===0?ze(t,e):r}function ht(t){return Ee(t,e=>{if(!tn(e))throw Z.create("not-registered");const n=e.authToken;return zi(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ji(t,e){try{const n=await ki(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ye(t.appConfig,r),n}catch(n){if(Vt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Zt(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ye(t.appConfig,r)}throw n}}function tn(t){return t!==void 0&&t.registrationStatus===2}function Hi(t){return t.requestStatus===2&&!Ui(t)}function Ui(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+mi}function Vi(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function zi(t){return t.requestStatus===1&&t.requestTime+jt<Date.now()}/**
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
 */async function qi(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ve(e);return r?r.catch(console.error):ze(e).catch(console.error),n.fid}/**
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
 */async function Qi(t,e=!1){const n=t;return await Wi(n),(await ze(n,e)).token}async function Wi(t){const{registrationPromise:e}=await Ve(t);e&&await e}/**
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
 */function Gi(t){if(!t||!t.options)throw Oe("App Configuration");if(!t.name)throw Oe("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Oe(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Oe(t){return Z.create("missing-app-config-values",{valueName:t})}/**
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
 */const nn="installations",Ki="installations-internal",Yi=t=>{const e=t.getProvider("app").getImmediate(),n=Gi(e),r=ve(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ji=t=>{const e=t.getProvider("app").getImmediate(),n=ve(e,nn).getImmediate();return{getId:()=>qi(n),getToken:i=>Qi(n,i)}};function Xi(){X(new q(nn,Yi,"PUBLIC")),X(new q(Ki,Ji,"PRIVATE"))}Xi();z(Lt,He);z(Lt,He,"esm2017");/**
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
 */const be="analytics",Zi="firebase_id",es="origin",ts=60*1e3,ns="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",qe="https://www.googletagmanager.com/gtag/js";/**
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
 */const C=new xt("@firebase/analytics");/**
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
 */const rs={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},S=new _e("analytics","Analytics",rs);/**
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
 */function is(t){if(!t.startsWith(qe)){const e=S.create("invalid-gtag-resource",{gtagURL:t});return C.warn(e.message),""}return t}function rn(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ss(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function as(t,e){const n=ss("firebase-js-sdk-policy",{createScriptURL:is}),r=document.createElement("script"),i=`${qe}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function os(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function cs(t,e,n,r,i,s){const a=r[i];try{if(a)await e[a];else{const c=(await rn(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(o){C.error(o)}t("config",i,s)}async function ls(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const o=await rn(n);for(const c of a){const u=o.find(h=>h.measurementId===c),g=u&&e[u.appId];if(g)s.push(g);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){C.error(s)}}function us(t,e,n,r){async function i(s,...a){try{if(s==="event"){const[o,c]=a;await ls(t,e,n,o,c)}else if(s==="config"){const[o,c]=a;await cs(t,e,n,r,o,c)}else if(s==="consent"){const[o,c]=a;t("consent",o,c)}else if(s==="get"){const[o,c,u]=a;t("get",o,c,u)}else if(s==="set"){const[o]=a;t("set",o)}else t(s,...a)}catch(o){C.error(o)}}return i}function ds(t,e,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=us(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function hs(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(qe)&&n.src.includes(t))return n;return null}/**
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
 */const fs=30,ps=1e3;class ms{constructor(e={},n=ps){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const sn=new ms;function gs(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ws(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:gs(r)},s=ns.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let o="";try{const c=await a.json();!((e=c.error)===null||e===void 0)&&e.message&&(o=c.error.message)}catch{}throw S.create("config-fetch-failed",{httpStatus:a.status,responseMessage:o})}return a.json()}async function ys(t,e=sn,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw S.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw S.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new vs;return setTimeout(async()=>{o.abort()},ts),an({appId:r,apiKey:i,measurementId:s},a,o,e)}async function an(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=sn){var s;const{appId:a,measurementId:o}=t;try{await bs(r,e)}catch(c){if(o)return C.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:o};throw c}try{const c=await ws(t);return i.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!_s(u)){if(i.deleteThrottleMetadata(a),o)return C.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:o};throw c}const g=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?nt(n,i.intervalMillis,fs):nt(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+g,backoffCount:n+1};return i.setThrottleMetadata(a,h),C.debug(`Calling attemptFetch again in ${g} millis`),an(t,h,r,i)}}function bs(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(S.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function _s(t){if(!(t instanceof te)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class vs{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Is(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,a=Object.assign(Object.assign({},r),{send_to:s});t("event",n,a)}}/**
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
 */async function Es(){if(Tt())try{await Mt()}catch(t){return C.warn(S.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return C.warn(S.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Cs(t,e,n,r,i,s,a){var o;const c=ys(t);c.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&C.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>C.error(d)),e.push(c);const u=Es().then(d=>{if(d)return r.getId()}),[g,h]=await Promise.all([c,u]);hs(s)||as(s,g.measurementId),i("js",new Date);const p=(o=a==null?void 0:a.config)!==null&&o!==void 0?o:{};return p[es]="firebase",p.update=!0,h!=null&&(p[Zi]=h),i("config",g.measurementId,p),g.measurementId}/**
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
 */class As{constructor(e){this.app=e}_delete(){return delete le[this.app.options.appId],Promise.resolve()}}let le={},ft=[];const pt={};let xe="dataLayer",Ss="gtag",mt,on,gt=!1;function Ds(){const t=[];if(er()&&t.push("This is a browser extension environment."),tr()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=S.create("invalid-analytics-context",{errorInfo:e});C.warn(n.message)}}function Rs(t,e,n){Ds();const r=t.options.appId;if(!r)throw S.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)C.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw S.create("no-api-key");if(le[r]!=null)throw S.create("already-exists",{id:r});if(!gt){os(xe);const{wrappedGtag:s,gtagCore:a}=ds(le,ft,pt,xe,Ss);on=s,mt=a,gt=!0}return le[r]=Cs(t,ft,pt,e,mt,xe,n),new As(t)}function Ts(t=ii()){t=Ot(t);const e=ve(t,be);return e.isInitialized()?e.getImmediate():Ms(t)}function Ms(t,e={}){const n=ve(t,be);if(n.isInitialized()){const i=n.getImmediate();if(ge(e,n.getOptions()))return i;throw S.create("already-initialized")}return n.initialize({options:e})}function Os(t,e,n,r){t=Ot(t),Is(on,le[t.app.options.appId],e,n,r).catch(i=>C.error(i))}const wt="@firebase/analytics",yt="0.10.5";function xs(){X(new q(be,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Rs(r,i,n)},"PUBLIC")),X(new q("analytics-internal",t,"PRIVATE")),z(wt,yt),z(wt,yt,"esm2017");function t(e){try{const n=e.getProvider(be).getImmediate();return{logEvent:(r,i,s)=>Os(n,r,i,s)}}catch(n){throw S.create("interop-component-reg-failed",{reason:n})}}}xs();var Ps="firebase",Fs="10.12.3";/**
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
 */z(Ps,Fs,"app");const Bs={apiKey:"AIzaSyAQ-5HetcNAdiC5P1CUUkCpY5d5L8OCqAY",authDomain:"monthly-ou-joon.firebaseapp.com",projectId:"monthly-ou-joon",storageBucket:"monthly-ou-joon.appspot.com",messagingSenderId:"387831778174",appId:"1:387831778174:web:02604ad4466b926b33812f",measurementId:"G-K092269N72"},$s=$t(Bs);Ts($s);const ks=new Vn;_.startTransition(()=>{cn(document,pe.jsx(_.StrictMode,{children:pe.jsx(yn,{client:ks,children:pe.jsx(_.Suspense,{children:pe.jsx($n,{})})})}))});
