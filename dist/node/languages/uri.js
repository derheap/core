var e=Object.defineProperty;var w=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var y=m=>e(m,"__esModule",{value:!0});var o=(m,t)=>{for(var a in t)e(m,a,{get:t[a],enumerable:!0})},u=(m,t,a,p)=>{if(t&&typeof t=="object"||typeof t=="function")for(let c of g(t))!h.call(m,c)&&(a||c!=="default")&&e(m,c,{get:()=>t[c],enumerable:!(p=w(t,c))||p.enumerable});return m};var d=(m=>(t,a)=>m&&m.get(t)||(a=u(y({}),t,1),m&&m.set(t,a),a))(typeof WeakMap!="undefined"?new WeakMap:0);var s={};o(s,{default:()=>r});var r=[{match:/^#.*/gm,sub:"todo"},{type:"class",match:/^\w+(?=:?)/gm},{type:"num",match:/:\d+/g},{type:"oper",match:/[:/&?]|\w+=/g},{type:"func",match:/[.\w]+@|#[\w]+$/gm},{type:"var",match:/\w+\.\w+(\.\w+)*/g}];module.exports=d(s);0&&(module.exports={});
