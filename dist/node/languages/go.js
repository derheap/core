var c=Object.defineProperty;var r=t=>c(t,"__esModule",{value:!0});var n=(t,e)=>{r(t);for(var a in e)c(t,a,{get:e[a],enumerable:!0})};n(exports,{default:()=>o});var o=[{match:/\/\/.*\n?|\/\*((?!\*\/)[^])*(\*\/)?/g,sub:"todo"},{expand:"str"},{expand:"num"},{type:"kwd",match:/\*|&|\b(break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go|goto|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/g},{type:"func",match:/[a-zA-Z_][\w_]*(?=\s*\()/g},{type:"class",match:/[A-Z][\w_]*/g},{type:"oper",match:/[+\-*\/%&|^~=!<>.^-]+/g}];0&&(module.exports={});
