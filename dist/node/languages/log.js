var r=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var i=Object.prototype.hasOwnProperty;var m=t=>r(t,"__esModule",{value:!0});var b=(t,e)=>{for(var a in e)r(t,a,{get:e[a],enumerable:!0})},d=(t,e,a,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of p(e))!i.call(t,n)&&(a||n!=="default")&&r(t,n,{get:()=>e[n],enumerable:!(o=l(e,n))||o.enumerable});return t};var u=(t=>(e,a)=>t&&t.get(e)||(a=d(m({}),e,1),t&&t.set(e,a),a))(typeof WeakMap!="undefined"?new WeakMap:0);var f={};b(f,{default:()=>c});var c=[{type:"cmnt",match:/^#.*/gm},{expand:"strDouble"},{expand:"num"},{type:"err",match:/\b(err(or)?|[a-z_-]*exception|warn|warning|failed|ko|invalid|not ?found|alert|fatal)\b/gi},{type:"num",match:/\b(null|undefined)\b/gi},{type:"bool",match:/\b(false|true|yes|no)\b/gi},{type:"oper",match:/\.|,/g}];module.exports=u(f);0&&(module.exports={});
