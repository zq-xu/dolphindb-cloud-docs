import{_ as c,r as n,o as t,c as r,a as l,w as a,b as e,d as s}from"./app.aeeaa280.js";const d={},p=e("h3",{id:"\u5728kubernetes\u73AF\u5883\u4E2D\u90E8\u7F72dolphindb-mgr",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5728kubernetes\u73AF\u5883\u4E2D\u90E8\u7F72dolphindb-mgr","aria-hidden":"true"},"#"),s(" \u5728Kubernetes\u73AF\u5883\u4E2D\u90E8\u7F72DolphinDB-MGR")],-1),m=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# \u6DFB\u52A0Helm\u4ED3\u5E93")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"helm repo add dolphindb https://dolphindbit.github.io/helm-chart/")]),s(`
`),e("span",{class:"line"}),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# \u4F7F\u7528Helm\u5B89\u88C5DolphinDB-MGR")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# \u5F85Pod\u5747\u51C6\u5907\u5C31\u7EEA\u5373\u53EF\u901A\u8FC7service\u8D44\u6E90\u8BBF\u95EE\u53EF\u89C6\u5316\u754C\u9762")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"helm install dolphindb-mgr dolphindb/dolphindb-mgr \\")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"  --set-file license.content="),e("span",{style:{color:"#9CDCFE"}},"$licensePath"),e("span",{style:{color:"#D4D4D4"}},"/license.lic \\")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"  -ndolphindb --create-namespace")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function h(u,b){const o=n("CodeGroupItem"),i=n("CodeGroup");return t(),r("div",null,[p,l(i,null,{default:a(()=>[l(o,{title:"Helm",active:""},{default:a(()=>[m]),_:1})]),_:1})])}const D=c(d,[["render",h],["__file","index.html.vue"]]);export{D as default};