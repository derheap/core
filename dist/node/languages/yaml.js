var p=Object.defineProperty;var m=t=>p(t,"__esModule",{value:!0});var o=(t,a)=>{m(t);for(var e in a)p(t,e,{get:a[e],enumerable:!0})};o(exports,{default:()=>r});var r=[{match:/#.*/g,sub:"todo"},{expand:"str"},{match:/(>|\|)\r?\n((\s[^\n]*)?(\r?\n|$))*/g,type:"str"},{match:/!![a-z]+/g,type:"type"},{match:/\b(Yes|No)\b/g,type:"bool"},{match:/[+:-]/g,type:"oper"},{expand:"num"},{match:/[a-zA-Z]\w*(?=:)/g,type:"var"}];0&&(module.exports={});