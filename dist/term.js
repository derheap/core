var u=Object.defineProperty;var v=t=>u(t,"__esModule",{value:!0});var A=(t,i)=>()=>(t&&(i=t(t=0)),i);var I=(t,i)=>{v(t);for(var n in i)u(t,n,{get:i[n],enumerable:!0})};var w={};I(w,{default:()=>D});var p,b,T,y,g,j,z,D,$=A(()=>{p="[31m",b="[32m",T="[90m",y="[33m",g="[34m",j="[35m",z="[36m",D={deleted:p,var:p,err:p,kwd:p,num:y,class:y,cmnt:T,insert:b,str:b,bool:z,type:g,oper:g,section:j,func:j}});var f={num:{type:"num",match:/(\.e?|\b)\d(e-|[\d.oxa-fA-F_])*(\.|\b)/g},str:{type:"str",match:/(["'])(\\[^]|(?!\1)[^\r\n\\])*\1?/g},strDouble:{type:"str",match:/"((?!")[^\r\n\\]|\\[^])*"?/g}};var o={};async function d(t,i,n){var c;try{let a,l,e={},m,s=[],r=0,x=typeof i=="string"?await((c=o[i])!=null?c:o[i]=import(`./languages/${i}.js`)):i,h=[...typeof i=="string"?x.default:i.sub];for(;r<t.length;){for(e.index=null,a=h.length;a-- >0;){if(l=h[a].expand?f[h[a].expand]:h[a],s[a]===void 0||s[a].match.index<r){if(l.match.lastIndex=r,m=l.match.exec(t),m===null){h.splice(a,1),s.splice(a,1);continue}s[a]={match:m,lastIndex:l.match.lastIndex}}s[a].match[0]&&(s[a].match.index<=e.index||e.index===null)&&(e={part:l,index:s[a].match.index,match:s[a].match[0],end:s[a].lastIndex})}if(e.index===null)break;n(t.slice(r,e.index),x.type),r=e.end,e.part.sub?await d(e.match,typeof e.part.sub=="string"?e.part.sub:typeof e.part.sub=="function"?e.part.sub(e.match):e.part,n):n(e.match,e.part.type)}n(t.slice(r,t.length),x.type)}catch{n(t)}}var E=Promise.resolve().then(()=>($(),w)).default,C=async(t,i)=>{let n="",c=await c;return await d(t,i,(a,l)=>{var e;return n+=l?`${(e=c[l])!=null?e:""}${a}[0m`:a}),n},q=async(...t)=>console.log(await C(...t)),F=async t=>E=(await import(`./themes/${t}.js`)).default;export{C as highlightText,q as printHighlight,F as setTheme};
