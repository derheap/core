var m=Object.defineProperty;var c=t=>m(t,"__esModule",{value:!0});var p=(t,e)=>{c(t);for(var a in e)m(t,a,{get:e[a],enumerable:!0})};p(exports,{default:()=>g});var g=[{match:/(^[ \f\t\v]*)[#;].*/gm,sub:"todo"},{match:/.*(?==)/g,type:"var"},{match:/^\s*\[.+\]\s*$/gm,type:"section"},{match:/=/g,type:"oper"},{match:/.*/g,type:"str"}];0&&(module.exports={});