var m=Object.defineProperty;var r=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var h=a=>m(a,"__esModule",{value:!0});var n=(a,t)=>{for(var e in t)m(a,e,{get:t[e],enumerable:!0})},y=(a,t,e,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let p of c(t))!g.call(a,p)&&(e||p!=="default")&&m(a,p,{get:()=>t[p],enumerable:!(o=r(t,p))||o.enumerable});return a};var s=(a=>(t,e)=>a&&a.get(t)||(e=y(h({}),t,1),a&&a.set(t,e),e))(typeof WeakMap!="undefined"?new WeakMap:0);var d={};n(d,{default:()=>b});var b=[{match:/#.*/g,sub:"todo"},{expand:"str"},{type:"str",match:/(>|\|)\r?\n((\s[^\n]*)?(\r?\n|$))*/g},{type:"type",match:/!![a-z]+/g},{type:"bool",match:/\b(Yes|No)\b/g},{type:"oper",match:/[+:-]/g},{expand:"num"},{type:"var",match:/[a-zA-Z]\w*(?=:)/g}];module.exports=s(d);0&&(module.exports={});
