var z=Object.create;var p=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,H=Object.prototype.hasOwnProperty;var b=t=>p(t,"__esModule",{value:!0});var L=(t,e)=>()=>(t&&(e=t(t=0)),e);var y=(t,e)=>{b(t);for(var n in e)p(t,n,{get:e[n],enumerable:!0})},N=(t,e,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of E(e))!H.call(t,s)&&s!=="default"&&p(t,s,{get:()=>e[s],enumerable:!(n=D(e,s))||n.enumerable});return t},m=t=>N(b(p(t!=null?z(C(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var A={};y(A,{default:()=>q});var x,j,S,w,$,v,W,q,I=L(()=>{x="[31m",j="[32m",S="[90m",w="[33m",$="[34m",v="[35m",W="[36m",q={deleted:x,var:x,err:x,kwd:x,num:w,class:w,cmnt:S,insert:j,str:j,bool:W,type:$,oper:$,section:v,func:v}});y(exports,{highlightText:()=>T,printHighlight:()=>M,setTheme:()=>O});var g={num:{type:"num",match:/(\.e?|\b)\d(e-|[\d.oxa-fA-F_])*(\.|\b)/g},str:{type:"str",match:/(["'])(\\[^]|(?!\1)[^\r\n\\])*\1?/g},strDouble:{type:"str",match:/"((?!")[^\r\n\\]|\\[^])*"?/g}};var u={};async function f(t,e,n){var s;try{let i,r,a={},o,l=[],c=0,d=typeof e=="string"?await((s=u[e])!=null?s:u[e]=Promise.resolve().then(()=>m(require(`./languages/${e}.js`)))):e,h=[...typeof e=="string"?d.default:e.sub];for(;c<t.length;){for(a.index=null,i=h.length;i-- >0;){if(r=h[i].expand?g[h[i].expand]:h[i],l[i]===void 0||l[i].match.index<c){if(r.match.lastIndex=c,o=r.match.exec(t),o===null){h.splice(i,1),l.splice(i,1);continue}l[i]={match:o,lastIndex:r.match.lastIndex}}l[i].match[0]&&(l[i].match.index<=a.index||a.index===null)&&(a={part:r,index:l[i].match.index,match:l[i].match[0],end:l[i].lastIndex})}if(a.index===null)break;n(t.slice(c,a.index),d.type),c=a.end,a.part.sub?await f(a.match,typeof a.part.sub=="string"?a.part.sub:typeof a.part.sub=="function"?a.part.sub(a.match):a.part,n):n(a.match,a.part.type)}n(t.slice(c,t.length),d.type)}catch{n(t)}}var F=Promise.resolve().then(()=>(I(),A)).default,T=async(t,e)=>{let n="",s=await s;return await f(t,e,(i,r)=>{var a;return n+=r?`${(a=s[r])!=null?a:""}${i}[0m`:i}),n},M=async(...t)=>console.log(await T(...t)),O=async t=>F=(await Promise.resolve().then(()=>m(require(`./themes/${t}.js`)))).default;0&&(module.exports={highlightText,printHighlight,setTheme});
