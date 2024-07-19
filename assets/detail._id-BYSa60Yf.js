import{r as y,j as c}from"./jsx-runtime-IdAWuXfe.js";import{u as L}from"./pb-data-utils-DzcJAOf8.js";import{M as I}from"./index-DCgpWmM0.js";import{e as H}from"./index-YmG05hYi.js";import"./QueryClientProvider-cT3QCVmw.js";function F(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}return e}function A(e,r){return Array(r+1).join(e)}function j(e){return e.replace(/^\n*/,"")}function $(e){for(var r=e.length;r>0&&e[r-1]===`
`;)r--;return e.substring(0,r)}var V=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function T(e){return k(e,V)}var w=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function S(e){return k(e,w)}function U(e){return O(e,w)}var D=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function W(e){return k(e,D)}function _(e){return O(e,D)}function k(e,r){return r.indexOf(e.nodeName)>=0}function O(e,r){return e.getElementsByTagName&&r.some(function(t){return e.getElementsByTagName(t).length})}var o={};o.paragraph={filter:"p",replacement:function(e){return`

`+e+`

`}};o.lineBreak={filter:"br",replacement:function(e,r,t){return t.br+`
`}};o.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,r,t){var n=Number(r.nodeName.charAt(1));if(t.headingStyle==="setext"&&n<3){var i=A(n===1?"=":"-",e.length);return`

`+e+`
`+i+`

`}else return`

`+A("#",n)+" "+e+`

`}};o.blockquote={filter:"blockquote",replacement:function(e){return e=e.replace(/^\n+|\n+$/g,""),e=e.replace(/^/gm,"> "),`

`+e+`

`}};o.list={filter:["ul","ol"],replacement:function(e,r){var t=r.parentNode;return t.nodeName==="LI"&&t.lastElementChild===r?`
`+e:`

`+e+`

`}};o.listItem={filter:"li",replacement:function(e,r,t){e=e.replace(/^\n+/,"").replace(/\n+$/,`
`).replace(/\n/gm,`
    `);var n=t.bulletListMarker+"   ",i=r.parentNode;if(i.nodeName==="OL"){var a=i.getAttribute("start"),s=Array.prototype.indexOf.call(i.children,r);n=(a?Number(a)+s:s+1)+".  "}return n+e+(r.nextSibling&&!/\n$/.test(e)?`
`:"")}};o.indentedCodeBlock={filter:function(e,r){return r.codeBlockStyle==="indented"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,r,t){return`

    `+r.firstChild.textContent.replace(/\n/g,`
    `)+`

`}};o.fencedCodeBlock={filter:function(e,r){return r.codeBlockStyle==="fenced"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,r,t){for(var n=r.firstChild.getAttribute("class")||"",i=(n.match(/language-(\S+)/)||[null,""])[1],a=r.firstChild.textContent,s=t.fence.charAt(0),f=3,l=new RegExp("^"+s+"{3,}","gm"),u;u=l.exec(a);)u[0].length>=f&&(f=u[0].length+1);var m=A(s,f);return`

`+m+i+`
`+a.replace(/\n$/,"")+`
`+m+`

`}};o.horizontalRule={filter:"hr",replacement:function(e,r,t){return`

`+t.hr+`

`}};o.inlineLink={filter:function(e,r){return r.linkStyle==="inlined"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,r){var t=r.getAttribute("href");t&&(t=t.replace(/([()])/g,"\\$1"));var n=d(r.getAttribute("title"));return n&&(n=' "'+n.replace(/"/g,'\\"')+'"'),"["+e+"]("+t+n+")"}};o.referenceLink={filter:function(e,r){return r.linkStyle==="referenced"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,r,t){var n=r.getAttribute("href"),i=d(r.getAttribute("title"));i&&(i=' "'+i+'"');var a,s;switch(t.linkReferenceStyle){case"collapsed":a="["+e+"][]",s="["+e+"]: "+n+i;break;case"shortcut":a="["+e+"]",s="["+e+"]: "+n+i;break;default:var f=this.references.length+1;a="["+e+"]["+f+"]",s="["+f+"]: "+n+i}return this.references.push(s),a},references:[],append:function(e){var r="";return this.references.length&&(r=`

`+this.references.join(`
`)+`

`,this.references=[]),r}};o.emphasis={filter:["em","i"],replacement:function(e,r,t){return e.trim()?t.emDelimiter+e+t.emDelimiter:""}};o.strong={filter:["strong","b"],replacement:function(e,r,t){return e.trim()?t.strongDelimiter+e+t.strongDelimiter:""}};o.code={filter:function(e){var r=e.previousSibling||e.nextSibling,t=e.parentNode.nodeName==="PRE"&&!r;return e.nodeName==="CODE"&&!t},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var r=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",t="`",n=e.match(/`+/gm)||[];n.indexOf(t)!==-1;)t=t+"`";return t+r+e+r+t}};o.image={filter:"img",replacement:function(e,r){var t=d(r.getAttribute("alt")),n=r.getAttribute("src")||"",i=d(r.getAttribute("title")),a=i?' "'+i+'"':"";return n?"!["+t+"]("+n+a+")":""}};function d(e){return e?e.replace(/(\n+\s*)+/g,`
`):""}function B(e){this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[];for(var r in e.rules)this.array.push(e.rules[r])}B.prototype={add:function(e,r){this.array.unshift(r)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){if(e.isBlank)return this.blankRule;var r;return(r=v(this.array,e,this.options))||(r=v(this._keep,e,this.options))||(r=v(this._remove,e,this.options))?r:this.defaultRule},forEach:function(e){for(var r=0;r<this.array.length;r++)e(this.array[r],r)}};function v(e,r,t){for(var n=0;n<e.length;n++){var i=e[n];if(G(i,r,t))return i}}function G(e,r,t){var n=e.filter;if(typeof n=="string"){if(n===r.nodeName.toLowerCase())return!0}else if(Array.isArray(n)){if(n.indexOf(r.nodeName.toLowerCase())>-1)return!0}else if(typeof n=="function"){if(n.call(e,r,t))return!0}else throw new TypeError("`filter` needs to be a string, array, or function")}function X(e){var r=e.element,t=e.isBlock,n=e.isVoid,i=e.isPre||function(h){return h.nodeName==="PRE"};if(!(!r.firstChild||i(r))){for(var a=null,s=!1,f=null,l=R(f,r,i);l!==r;){if(l.nodeType===3||l.nodeType===4){var u=l.data.replace(/[ \r\n\t]+/g," ");if((!a||/ $/.test(a.data))&&!s&&u[0]===" "&&(u=u.substr(1)),!u){l=N(l);continue}l.data=u,a=l}else if(l.nodeType===1)t(l)||l.nodeName==="BR"?(a&&(a.data=a.data.replace(/ $/,"")),a=null,s=!1):n(l)||i(l)?(a=null,s=!0):a&&(s=!1);else{l=N(l);continue}var m=R(f,l,i);f=l,l=m}a&&(a.data=a.data.replace(/ $/,""),a.data||N(a))}}function N(e){var r=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),r}function R(e,r,t){return e&&e.parentNode===r||t(r)?r.nextSibling||r.parentNode:r.firstChild||r.nextSibling||r.parentNode}var x=typeof window<"u"?window:{};function K(){var e=x.DOMParser,r=!1;try{new e().parseFromString("","text/html")&&(r=!0)}catch{}return r}function Y(){var e=function(){};return q()?e.prototype.parseFromString=function(r){var t=new window.ActiveXObject("htmlfile");return t.designMode="on",t.open(),t.write(r),t.close(),t}:e.prototype.parseFromString=function(r){var t=document.implementation.createHTMLDocument("");return t.open(),t.write(r),t.close(),t},e}function q(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch{x.ActiveXObject&&(e=!0)}return e}var z=K()?x.DOMParser:Y();function Q(e,r){var t;if(typeof e=="string"){var n=J().parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html");t=n.getElementById("turndown-root")}else t=e.cloneNode(!0);return X({element:t,isBlock:T,isVoid:S,isPre:r.preformattedCode?Z:null}),t}var E;function J(){return E=E||new z,E}function Z(e){return e.nodeName==="PRE"||e.nodeName==="CODE"}function ee(e,r){return e.isBlock=T(e),e.isCode=e.nodeName==="CODE"||e.parentNode.isCode,e.isBlank=re(e),e.flankingWhitespace=te(e,r),e}function re(e){return!S(e)&&!W(e)&&/^\s*$/i.test(e.textContent)&&!U(e)&&!_(e)}function te(e,r){if(e.isBlock||r.preformattedCode&&e.isCode)return{leading:"",trailing:""};var t=ne(e.textContent);return t.leadingAscii&&b("left",e,r)&&(t.leading=t.leadingNonAscii),t.trailingAscii&&b("right",e,r)&&(t.trailing=t.trailingNonAscii),{leading:t.leading,trailing:t.trailing}}function ne(e){var r=e.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);return{leading:r[1],leadingAscii:r[2],leadingNonAscii:r[3],trailing:r[4],trailingNonAscii:r[5],trailingAscii:r[6]}}function b(e,r,t){var n,i,a;return e==="left"?(n=r.previousSibling,i=/ $/):(n=r.nextSibling,i=/^ /),n&&(n.nodeType===3?a=i.test(n.nodeValue):t.preformattedCode&&n.nodeName==="CODE"?a=!1:n.nodeType===1&&!T(n)&&(a=i.test(n.textContent))),a}var ie=Array.prototype.reduce,ae=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function p(e){if(!(this instanceof p))return new p(e);var r={rules:o,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(t,n){return n.isBlock?`

`:""},keepReplacement:function(t,n){return n.isBlock?`

`+n.outerHTML+`

`:n.outerHTML},defaultReplacement:function(t,n){return n.isBlock?`

`+t+`

`:t}};this.options=F({},r,e),this.rules=new B(this.options)}p.prototype={turndown:function(e){if(!oe(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(e==="")return"";var r=P.call(this,new Q(e,this.options));return le.call(this,r)},use:function(e){if(Array.isArray(e))for(var r=0;r<e.length;r++)this.use(e[r]);else if(typeof e=="function")e(this);else throw new TypeError("plugin must be a Function or an Array of Functions");return this},addRule:function(e,r){return this.rules.add(e,r),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return ae.reduce(function(r,t){return r.replace(t[0],t[1])},e)}};function P(e){var r=this;return ie.call(e.childNodes,function(t,n){n=new ee(n,r.options);var i="";return n.nodeType===3?i=n.isCode?n.nodeValue:r.escape(n.nodeValue):n.nodeType===1&&(i=se.call(r,n)),M(t,i)},"")}function le(e){var r=this;return this.rules.forEach(function(t){typeof t.append=="function"&&(e=M(e,t.append(r.options)))}),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function se(e){var r=this.rules.forNode(e),t=P.call(this,e),n=e.flankingWhitespace;return(n.leading||n.trailing)&&(t=t.trim()),n.leading+r.replacement(t,e,this.options)+n.trailing}function M(e,r){var t=$(e),n=j(r),i=Math.max(e.length-t.length,r.length-n.length),a=`

`.substring(0,i);return t+a+n}function oe(e){return e!=null&&(typeof e=="string"||e.nodeType&&(e.nodeType===1||e.nodeType===9||e.nodeType===11))}const ce=new p;function ue(e){const{id:r}=e,{data:t}=L(r),{title:n,subTitle:i,summary:a,description:s}=t,f=y.useMemo(()=>ce.turndown(s),[s]);return c.jsx("div",{className:"@container",children:c.jsxs("div",{className:"m-4 max-w-md text-slate-50 @md:m-auto",children:[c.jsx("h1",{className:"my-4 text-center text-xl",children:n}),c.jsx("h2",{className:"text-right text-sm text-slate-400",children:i}),c.jsx("h3",{className:"mt-6 text-slate-400",children:a}),c.jsx("div",{className:"mt-4",children:c.jsx(I,{components:{p:l=>{var C;const{node:u,...m}=l,h=(C=u==null?void 0:u.children)==null?void 0:C[0],g=[];return h&&h.type==="element"&&h.tagName==="img"?g.push("peer"):g.push("mb-6"),c.jsx("p",{className:g.join(" "),...m})},img:l=>c.jsx("img",{className:"",...l})},children:f})})]})})}const fe=y.memo(ue);function me(e){const{id:r}=H();return c.jsx(c.Fragment,{children:r?c.jsx(fe,{id:r}):c.jsx(c.Fragment,{children:"Not found"})})}const Ne=y.memo(me);export{Ne as default};
