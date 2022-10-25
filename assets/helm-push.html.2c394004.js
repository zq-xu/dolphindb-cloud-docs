import{_ as l,r as i,o,c as p,a as n,b as s,d as c,e as a}from"./app.469183e7.js";const r={},t=a(`<h1 id="helm-push\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#helm-push\u63D2\u4EF6" aria-hidden="true">#</a> Helm Push\u63D2\u4EF6</h1><p>Helm Push\u63D2\u4EF6\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u4E8C\u8FDB\u5236\u53EF\u6267\u884C\u6587\u4EF6,\u4E3B\u8981\u7528\u4E8E\u5C06Chart\u5305\u63A8\u9001\u5230Chart\u4ED3\u5E93\u4E2D\u3002</p><h2 id="\u5B89\u88C5helm-push\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5helm-push\u63D2\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5Helm Push\u63D2\u4EF6</h2><h3 id="\u83B7\u53D6helm\u63D2\u4EF6\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6helm\u63D2\u4EF6\u8DEF\u5F84" aria-hidden="true">#</a> \u83B7\u53D6Helm\u63D2\u4EF6\u8DEF\u5F84</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># \u901A\u8FC7\u6307\u4EE4\u67E5\u770Bhelm\u73AF\u5883\u53D8\u91CF</span></span>
<span class="line"><span style="color:#D4D4D4;">helm env</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># \u7EC8\u7AEF\u6253\u5370\u4FE1\u606F\u5982\u4E0B</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_BIN=</span><span style="color:#CE9178;">&quot;helm&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_CACHE_HOME=</span><span style="color:#CE9178;">&quot;/root/.cache/helm&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_CONFIG_HOME=</span><span style="color:#CE9178;">&quot;/root/.config/helm&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_DATA_HOME=</span><span style="color:#CE9178;">&quot;/root/.local/share/helm&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_DEBUG=</span><span style="color:#CE9178;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_KUBEAPISERVER=</span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_KUBEASGROUPS=</span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_KUBEASUSER=</span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_KUBECAFILE=</span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_KUBECONTEXT=</span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_KUBETOKEN=</span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_MAX_HISTORY=</span><span style="color:#CE9178;">&quot;10&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_NAMESPACE=</span><span style="color:#CE9178;">&quot;default&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_PLUGINS=</span><span style="color:#CE9178;">&quot;/root/.local/share/helm/plugins&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_REGISTRY_CONFIG=</span><span style="color:#CE9178;">&quot;/root/.config/helm/registry.json&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_REPOSITORY_CACHE=</span><span style="color:#CE9178;">&quot;/root/.cache/helm/repository&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">HELM_REPOSITORY_CONFIG=</span><span style="color:#CE9178;">&quot;/root/.config/helm/repositories.yaml&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u6253\u5370\u4FE1\u606F\u4E2D\u7684<code>HELM_PLUGINS</code>\uFF0C\u5176\u503C\u4E3A<code>/root/.local/share/helm/plugins</code>\uFF0C\u4EE3\u8868Helm\u63D2\u4EF6\u8DEF\u5F84\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679CHelm\u63D2\u4EF6\u8DEF\u5F84\u5B9E\u9645\u4E0A\u5E76\u4E0D\u5B58\u5728\uFF0C\u5219\u624B\u52A8\u521B\u5EFA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">mkdir -p /root/.local/share/helm/plugins</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="\u4E0B\u8F7D\u5E76\u5B89\u88C5helm-push\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u5E76\u5B89\u88C5helm-push\u63D2\u4EF6" aria-hidden="true">#</a> \u4E0B\u8F7D\u5E76\u5B89\u88C5Helm Push\u63D2\u4EF6</h3>`,8),d=n("code",null,"v0.10.0",-1),u={href:"https://github.com/chartmuseum/helm-push/releases",target:"_blank",rel:"noopener noreferrer"},h=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># \u4ECEGitHub\u4E0A\u8FDB\u884C\u4E0B\u8F7DHelm Push\u63D2\u4EF6\u5B89\u88C5\u5305</span></span>
<span class="line"><span style="color:#D4D4D4;">wget https://github.com/chartmuseum/helm-push/releases/download/v0.10.0/helm-push_0.10.0_linux_amd64.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># \u5C06\u4E0B\u8F7D\u597D\u7684helm-push\u63D2\u4EF6\u89E3\u538B\u5230helm\u63D2\u4EF6\u8DEF\u5F84\u4E0B\u7684helm-push\u6587\u4EF6\u5939\u4E2D</span></span>
<span class="line"><span style="color:#D4D4D4;">mkdir -p /root/.local/share/helm/plugins/helm-push</span></span>
<span class="line"><span style="color:#D4D4D4;">tar -zxvf helm-push_0.10.0_linux_amd64.tar.gz -C /root/.local/share/helm/plugins/helm-push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># \u901A\u8FC7\u6307\u4EE4\u67E5\u770B\u5DF2\u5B89\u88C5\u7684helm\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#D4D4D4;">helm plugin list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># \u7EC8\u7AEF\u6253\u5370\u4FE1\u606F\u5982\u4E0B\uFF0C\u8868\u793Ahelm-push\u5B89\u88C5\u5B8C\u6210</span></span>
<span class="line"><span style="color:#D4D4D4;">NAME   	VERSION	DESCRIPTION                      </span></span>
<span class="line"><span style="color:#D4D4D4;">cm-push	0.10.0 	Push chart package to ChartMuseum</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528helm-push\u63D2\u4EF6\u4E0A\u4F20chart\u5305" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528helm-push\u63D2\u4EF6\u4E0A\u4F20chart\u5305" aria-hidden="true">#</a> \u4F7F\u7528Helm Push\u63D2\u4EF6\u4E0A\u4F20Chart\u5305</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># chartName: \u672C\u5730chart\u5305\u8DEF\u5F84\uFF0C \`.\`\u8868\u793A\u5F53\u524D\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#6A9955;"># $repoName Chart\u4ED3\u5E93\u7684\u540D\u79F0\uFF1B</span></span>
<span class="line"><span style="color:#D4D4D4;">helm cm-push </span><span style="color:#9CDCFE;">$chartName</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$repoName</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u672C\u5730\u6CA1\u6709chart\u5305\uFF0C\u53EF\u901A\u8FC7helm\u6307\u4EE4\u521B\u5EFA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># $chartName: chart\u540D\u79F0</span></span>
<span class="line"><span style="color:#D4D4D4;">helm create </span><span style="color:#9CDCFE;">$chartName</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div>`,4);function m(v,D){const e=i("ExternalLinkIcon");return o(),p("div",null,[t,n("p",null,[s("\u6B64\u5904\u9009\u62E9\u7684Helm Push\u63D2\u4EF6\u7684"),d,s("\u7248\u672C\uFF0C\u66F4\u591AHelm\u7248\u672C\u53EF\u53C2\u8003 "),n("a",u,[s("Helm Push Realease"),c(e)]),s(".")]),h])}const b=l(r,[["render",m],["__file","helm-push.html.vue"]]);export{b as default};
