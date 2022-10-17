import{_ as e,o as n,c as o,a as t}from"./app.2d3ab3a8.js";const l={};function i(d,c){return n(),o("div",null,[t(` ### \u5728Kubernetes\u73AF\u5883\u4E2D\u90E8\u7F72DolphinDB-MGR

<CodeGroup>
  <CodeGroupItem title="Helm" active>

\`\`\`bash
# \u6DFB\u52A0Helm\u4ED3\u5E93
helm repo add dolphindb https://dolphindbit.github.io/helm-chart/

# \u4F7F\u7528Helm\u5B89\u88C5DolphinDB-MGR
# \u5F85Pod\u5747\u51C6\u5907\u5C31\u7EEA\u5373\u53EF\u901A\u8FC7service\u8D44\u6E90\u8BBF\u95EE\u53EF\u89C6\u5316\u754C\u9762
helm install dolphindb-mgr dolphindb/dolphindb-mgr \\
  --set-file license.content=$licensePath/license.lic \\
  -ndolphindb --create-namespace
\`\`\`

  </CodeGroupItem>
</CodeGroup> `)])}const a=e(l,[["render",i],["__file","index.html.vue"]]);export{a as default};
