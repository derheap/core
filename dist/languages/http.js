var m=[["bash",[/#!(\/usr)?\/bin\/bash/g,500],[/\b(if|elif|then|fi|echo)\b|\$/g,10]],["html",[/<\/?[a-z-]+[^\n>]*>/g,10]],["http",[/^(GET|HEAD|POST|PUT|DELETE|PATCH|HTTP)\b/g,500]],["js",[/\b(console|await|async|function|export|import|this|class|for|let|const|map|join|require)\b/g,10]],["ts",[/\b(console|await|async|function|export|import|this|class|for|let|const|map|join|require|implements|interface|namespace)\b/g,10]],["py",[/\b(def|print|class|and|or|lambda)\b/g,10]],["sql",[/\b(SELECT|INSERT|FROM)\b/g,50]],["pl",[/#!(\/usr)?\/bin\/perl/g,500],[/\b(use|print)\b|\$/g,10]],["lua",[/#!(\/usr)?\/bin\/lua/g,500]],["make",[/\b(ifneq|endif|if|elif|then|fi|echo|.PHONY|^[a-z]+ ?:$)\b|\$/gm,10]],["uri",[/https?:|mailto:|tel:|ftp:/g,30]],["css",[/^(@import|@page|@media|(\.|#)[a-z]+)/gm,20]],["diff",[/^[+><-]/gm,10],[/^@@ ?[-+,0-9 ]+ ?@@/gm,25]],["md",[/^(>|\t\*|\t\d+.)/gm,10],[/\[.*\](.*)/g,10]]],n=i=>{var a;return((a=m.map(([t,...e])=>[e.reduce((s,[g,r])=>s+[...i.matchAll(g)].length*r,0),t]).filter(([t,e])=>t>10).sort((t,e)=>e[0]-t[0])[0])==null?void 0:a[1])||"plain"};var c=[{type:"kwd",match:/^(GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH|PRI|SEARCH)\b/gm},{expand:"str"},{type:"section",match:/\bHTTP\/[\d.]+\b/g},{expand:"num"},{type:"oper",match:/[,;:=]/g},{type:"var",match:/[a-zA-Z][\w-]*(?=:)/g},{match:/\n\n[^]*/g,sub:n}];export{c as default};
