var d=Object.defineProperty;var c=t=>d(t,"__esModule",{value:!0});var p=(t,m)=>{c(t);for(var e in m)d(t,e,{get:m[e],enumerable:!0})};p(exports,{default:()=>f});var a=[{type:"deleted",match:/^[-<].*/gm},{type:"insert",match:/^[+>].*/gm},{type:"kwd",match:/!.*/gm},{type:"section",match:/^@@.*@@$|^\d.*|^([*-+])\1\1.*/gm}];var f=[{match:/^#.*/gm,sub:"todo"},{expand:"str"},...a,{type:"func",match:/^(\$ )?git(\s.*)?$/gm},{type:"kwd",match:/^commit \w+$/gm}];0&&(module.exports={});
