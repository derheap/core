var r=Object.defineProperty;var o=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var s=Object.prototype.hasOwnProperty;var g=e=>r(e,"__esModule",{value:!0});var u=(e,t)=>{for(var a in t)r(e,a,{get:t[a],enumerable:!0})},f=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let c of p(t))!s.call(e,c)&&(a||c!=="default")&&r(e,c,{get:()=>t[c],enumerable:!(n=o(t,c))||n.enumerable});return e};var h=(e=>(t,a)=>e&&e.get(t)||(a=f(g({}),t,1),e&&e.set(t,a),a))(typeof WeakMap!="undefined"?new WeakMap:0);var d={};u(d,{default:()=>m});var m=[{match:/\/\/.*\n?|\/\*((?!\*\/)[^])*(\*\/)?/g,sub:"todo"},{expand:"str"},{expand:"num"},{type:"kwd",match:/\*|&|\b(break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go|goto|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/g},{type:"func",match:/[a-zA-Z_][\w_]*(?=\s*\()/g},{type:"class",match:/[A-Z][\w_]*/g},{type:"oper",match:/[+\-*\/%&|^~=!<>.^-]+/g}];module.exports=h(d);0&&(module.exports={});
