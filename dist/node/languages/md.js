var n=Object.defineProperty;var p=t=>n(t,"__esModule",{value:!0});var r=(t,a)=>{p(t);for(var e in a)n(t,e,{get:a[e],enumerable:!0})};r(exports,{default:()=>o});var l=[["bash",[/#!(\/usr)?\/bin\/bash/g,500],[/\b(if|elif|then|fi|echo)\b|\$/g,10]],["html",[/<\/?[a-z-]+[^\n>]*>/g,10]],["http",[/^(GET|HEAD|POST|PUT|DELETE|PATCH|HTTP)\b/g,500]],["js",[/\b(console|await|async|function|export|import|this|class|for|let|const|map|join|require)\b/g,10]],["ts",[/\b(console|await|async|function|export|import|this|class|for|let|const|map|join|require|implements|interface|namespace)\b/g,10]],["py",[/\b(def|print|class|and|or|lambda)\b/g,10]],["sql",[/\b(SELECT|INSERT|FROM)\b/g,50]],["pl",[/#!(\/usr)?\/bin\/perl/g,500],[/\b(use|print)\b|\$/g,10]],["lua",[/#!(\/usr)?\/bin\/lua/g,500]],["make",[/\b(ifneq|endif|if|elif|then|fi|echo|.PHONY|^[a-z]+ ?:$)\b|\$/gm,10]],["uri",[/https?:|mailto:|tel:|ftp:/g,30]],["css",[/^(@import|@page|@media|(\.|#)[a-z]+)/gm,20]],["diff",[/^[+><-]/gm,10],[/^@@ ?[-+,0-9 ]+ ?@@/gm,25]],["md",[/^(>|\t\*|\t\d+.)/gm,10],[/\[.*\](.*)/g,10]]],g=t=>{var a;return((a=l.map(([e,...s])=>[s.reduce((i,[c,m])=>i+[...t.matchAll(c)].length*m,0),e]).filter(([e,s])=>e>10).sort((e,s)=>s[0]-e[0])[0])==null?void 0:a[1])||"plain"};var o=[{type:"cmnt",match:/^>.*|(=|-)\1+/gm},{type:"class",match:/\*\*((?!\*\*).)*\*\*/g},{match:/```((?!```)[^])*\n```/g,sub:t=>({type:"kwd",sub:[{match:/\n[^]*(?=```)/g,sub:t.split(`
`)[0].slice(3)||g(t)}]})},{type:"str",match:/`[^`]*`/g},{type:"var",match:/~~((?!~~).)*~~/g},{type:"kwd",match:/_[^_]*_|\*[^*]*\*/g},{type:"kwd",match:/^\s*(\*|\d+\.)\s/gm},{type:"oper",match:/\[[^\]]*]/g},{type:"func",match:/\([^)]*\)/g}];0&&(module.exports={});
