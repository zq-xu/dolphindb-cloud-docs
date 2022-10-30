import{_ as o,r as a,o as i,c as r,a as e,b as n,d as s,w as c,e as d}from"./app.7cabacd3.js";const h={},p=e("h1",{id:"安装部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装部署","aria-hidden":"true"},"#"),n(" 安装部署")],-1),u=e("h2",{id:"环境依赖",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#环境依赖","aria-hidden":"true"},"#"),n(" 环境依赖")],-1),m={href:"https://kubernetes.io/zh-cn/docs/home/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://helm.sh/zh/docs/",target:"_blank",rel:"noopener noreferrer"},v=d(`<div class="custom-container tip"><p class="custom-container-title">提示</p><p>Helm在v3.0.0版本出现大规模变更，版本过低可能出现Chart包语法不兼容问题</p></div><h2 id="helm部署" tabindex="-1"><a class="header-anchor" href="#helm部署" aria-hidden="true">#</a> Helm部署</h2><p>可使用Helm工具通过以下步骤安装 <code>DolphinDB Chart</code> :</p><ul><li><strong>步骤1</strong>: # 添加Helm仓库</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">helm repo add dolphindb https://dolphindbit.github.io/helm-chart/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>步骤2</strong>: 安装 <code>DolphinDB Chart</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">helm install dolphindb-chart dolphindb/dolphindb \\</span></span>
<span class="line"><span style="color:#D4D4D4;">  --set-file license.content=</span><span style="color:#9CDCFE;">$licensePath</span><span style="color:#D4D4D4;">/license.lic \\</span></span>
<span class="line"><span style="color:#D4D4D4;">  -ndolphindb --create-namespace</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),D={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"提示",-1),k=e("li",null,[n("可通过"),e("code",null,"helm pull"),n("指令将helm包拉取到本地，直接修改helm包内容后进行部署。")],-1);function g(x,y){const l=a("ExternalLinkIcon"),t=a("RouterLink");return i(),r("div",null,[p,u,e("ul",null,[e("li",null,[e("a",m,[n("Kubernetes v1.18.0+"),s(l)])]),e("li",null,[e("a",_,[n("Docker 20.10.10+"),s(l)])]),e("li",null,[e("a",b,[n("Helm v3.0.0+"),s(l)]),n("(可选)")])]),v,e("div",D,[f,e("ul",null,[e("li",null,[n("可通过在上述指令中指定参数来修改相应配置详细可参考"),s(t,{to:"/zh/tutorial/kubernetes/dolphindb-chart/configs.html"},{default:c(()=>[n("配置参数")]),_:1}),n("；")]),k])])])}const C=o(h,[["render",g],["__file","deployment.html.vue"]]);export{C as default};
