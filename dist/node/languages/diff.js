var c=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var y=e=>c(e,"__esModule",{value:!0});var i=(e,t)=>{for(var m in t)c(e,m,{get:t[m],enumerable:!0})},l=(e,t,m,d)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of g(t))!h.call(e,a)&&(m||a!=="default")&&c(e,a,{get:()=>t[a],enumerable:!(d=p(t,a))||d.enumerable});return e};var n=(e=>(t,m)=>e&&e.get(t)||(m=l(y({}),t,1),e&&e.set(t,m),m))(typeof WeakMap!="undefined"?new WeakMap:0);var r={};i(r,{default:()=>o});var o=[{type:"deleted",match:/^[-<].*/gm},{type:"insert",match:/^[+>].*/gm},{type:"kwd",match:/!.*/gm},{type:"section",match:/^@@.*@@$|^\d.*|^([*-+])\1\1.*/gm}];module.exports=n(r);0&&(module.exports={});
