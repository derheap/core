var c=Object.defineProperty;var g=e=>c(e,"__esModule",{value:!0});var h=(e,p)=>{g(e);for(var a in p)c(e,a,{get:p[a],enumerable:!0})};h(exports,{default:()=>r});var s=`\\s*(\\s+[a-z-]+\\s*(=\\s*([^"']\\S*|("|')(\\\\[^]|(?!\\4)[^])*\\4?)?)?\\s*)*`,t={match:RegExp(`</?[a-z_-]+${s}/?>`,"g"),sub:[{type:"var",match:/^<\/?[^\s>\/]+/g,sub:[{type:"oper",match:/^<\/?/g}]},{type:"str",match:/=\s*([^"']\S*|("|')(\\[^]|(?!\2)[^])*\2?)/g,sub:[{type:"oper",match:/^=/g}]},{type:"oper",match:/\/?>/g},{type:"class",match:/[a-z-]+/gi}]},m=[{match:/<!--((?!-->)[^])*-->/g,sub:"TODO"},{type:"class",match:RegExp(`<\\?xml${s}\\?>`,"gi"),sub:[{type:"oper",match:/^<\?|\?>$/g},{type:"str",match:/"[^"]*"|'[^']*'/g},{type:"var",match:/xml/gi}]},{type:"class",match:/<!\[CDATA\[[\s\S]*?\]\]>/gi},t,{type:"var",match:/&(#x?)?[\da-z]{1,8};/gi}];var r=[{type:"class",match:/<!DOCTYPE("[^"]*"|'[^']*'|[^"'>])*>/gi,sub:[{type:"str",match:/"[^"]*"|'[^']*'/g},{type:"oper",match:/^<!|>$/g},{type:"var",match:/DOCTYPE/gi}]},{match:RegExp(`<style${s}>((?!</style>)[^])*</style\\s*>`,"g"),sub:[{match:RegExp(`^<style${s}>`,"g"),sub:t.sub},{match:RegExp(`${t.match}|[^]*(?=</style\\s*>$)`,"g"),sub:"css"},t]},{match:RegExp(`<script${s}>((?!<\/script>)[^])*<\/script\\s*>`,"g"),sub:[{match:RegExp(`^<script${s}>`,"g"),sub:t.sub},{match:RegExp(`${t.match}|[^]*(?=<\/script\\s*>$)`,"g"),sub:"js"},t]},...m];0&&(module.exports={});
