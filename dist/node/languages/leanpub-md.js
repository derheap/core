var l=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var b=Object.prototype.hasOwnProperty;var u=e=>l(e,"__esModule",{value:!0});var o=(e,t)=>{for(var a in t)l(e,a,{get:t[a],enumerable:!0})},d=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of c(t))!b.call(e,s)&&(a||s!=="default")&&l(e,s,{get:()=>t[s],enumerable:!(n=i(t,s))||n.enumerable});return e};var h=(e=>(t,a)=>e&&e.get(t)||(a=d(u({}),t,1),e&&e.set(t,a),a))(typeof WeakMap!="undefined"?new WeakMap:0);var T={};o(T,{default:()=>y});var f=[["bash",[/#!(\/usr)?\/bin\/bash/g,500],[/\b(if|elif|then|fi|echo)\b|\$/g,10]],["html",[/<\/?[a-z-]+[^\n>]*>/g,10],[/^\s+<!DOCTYPE\s+html/g,500]],["http",[/^(GET|HEAD|POST|PUT|DELETE|PATCH|HTTP)\b/g,500]],["js",[/\b(console|await|async|function|export|import|this|class|for|let|const|map|join|require)\b/g,10]],["ts",[/\b(console|await|async|function|export|import|this|class|for|let|const|map|join|require|implements|interface|namespace)\b/g,10]],["py",[/\b(def|print|class|and|or|lambda)\b/g,10]],["sql",[/\b(SELECT|INSERT|FROM)\b/g,50]],["pl",[/#!(\/usr)?\/bin\/perl/g,500],[/\b(use|print)\b|\$/g,10]],["lua",[/#!(\/usr)?\/bin\/lua/g,500]],["make",[/\b(ifneq|endif|if|elif|then|fi|echo|.PHONY|^[a-z]+ ?:$)\b|\$/gm,10]],["uri",[/https?:|mailto:|tel:|ftp:/g,30]],["css",[/^(@import|@page|@media|(\.|#)[a-z]+)/gm,20]],["diff",[/^[+><-]/gm,10],[/^@@ ?[-+,0-9 ]+ ?@@/gm,25]],["md",[/^(>|\t\*|\t\d+.)/gm,10],[/\[.*\](.*)/g,10]],["docker",[/^(FROM|ENTRYPOINT|RUN)/gm,500]],["xml",[/<\/?[a-z-]+[^\n>]*>/g,10],[/^<\?xml/g,500]],["c",[/#include\b|\bprintf\s+\(/g,100]],["rs",[/^\s+(use|fn|mut|match)\b/gm,100]],["go",[/\b(func|fmt|package)\b/g,100]],["java",[/^import\s+java/gm,500]],["asm",[/^(section|global main|extern|\t(call|mov|ret))/gm,100]]],m=e=>{var t;return((t=f.map(([a,...n])=>[n.reduce((s,[r,p])=>s+[...e.matchAll(r)].length*p,0),a]).filter(([a,n])=>a>10).sort((a,n)=>n[0]-a[0])[0])==null?void 0:t[1])||"plain"};var g=[{type:"cmnt",match:/^>.*|(=|-)\1+/gm},{type:"class",match:/\*\*((?!\*\*).)*\*\*/g},{match:/```((?!```)[^])*\n```/g,sub:e=>({type:"kwd",sub:[{match:/\n[^]*(?=```)/g,sub:e.split(`
`)[0].slice(3)||m(e)}]})},{type:"str",match:/`[^`]*`/g},{type:"var",match:/~~((?!~~).)*~~/g},{type:"kwd",match:/_[^_]*_|\*[^*]*\*/g},{type:"kwd",match:/^\s*(\*|\d+\.)\s/gm},{type:"oper",match:/\[[^\]]*]/g},{type:"func",match:/\([^)]*\)/g}];var y=[{type:"insert",match:/(leanpub-start-insert)((?!leanpub-end-insert)[^])*(leanpub-end-insert)?/g,sub:[{type:"insert",match:/leanpub-(start|end)-insert/g},{match:/(?!leanpub-start-insert)((?!leanpub-end-insert)[^])*/g,sub:m}]},{type:"deleted",match:/(leanpub-start-delete)((?!leanpub-end-delete)[^])*(leanpub-end-delete)?/g,sub:[{type:"deleted",match:/leanpub-(start|end)-delete/g},{match:/(?!leanpub-start-delete)((?!leanpub-end-delete)[^])*/g,sub:m}]},...g];module.exports=h(T);0&&(module.exports={});
