const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Timeline-BoUPRNBN.js","assets/jsx-runtime-D2HyDbKh.js","assets/pb-data-utils-Bn6KpzTU.js","assets/QueryClientProvider-1KH9_OfO.js","assets/extends-CF3RwP-h.js","assets/client-Ce32UgwA.js","assets/index-D8yjffnJ.js"])))=>i.map(i=>d[i]);
import{j as i,r as u}from"./jsx-runtime-D2HyDbKh.js";const p="modulepreload",E=function(c){return"/"+c},a={},v=function(m,s,w){let l=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),n=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));l=Promise.all(s.map(t=>{if(t=E(t),t in a)return;a[t]=!0;const o=t.endsWith(".css"),d=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${d}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":p,o||(r.as="script",r.crossOrigin=""),r.href=t,n&&r.setAttribute("nonce",n),document.head.appendChild(r),o)return new Promise((f,h)=>{r.addEventListener("load",f),r.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${t}`)))})}))}return l.then(()=>m()).catch(e=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e})},_=()=>[{title:"Timeline | Artworks"},{name:"description",content:"Welcome to Remix!"}],x=u.lazy(()=>v(()=>import("./Timeline-BoUPRNBN.js"),__vite__mapDeps([0,1,2,3,4,5,6])));function P(){return i.jsx("div",{className:"h-screen w-screen",children:i.jsx(u.Suspense,{children:i.jsx(x,{})})})}export{P as default,_ as meta};
