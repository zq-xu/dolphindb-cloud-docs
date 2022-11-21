import{_ as r,r as i,o as c,c as p,a,b as s,d as n,e as l}from"./app.70434bce.js";const d={},o=a("h1",{id:"helm工具",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#helm工具","aria-hidden":"true"},"#"),s(" Helm工具")],-1),t={href:"https://helm.sh/zh/docs/",target:"_blank",rel:"noopener noreferrer"},h=a("code",null,"Chart包",-1),m=a("h2",{id:"安装helm工具",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#安装helm工具","aria-hidden":"true"},"#"),s(" 安装Helm工具")],-1),v=a("code",null,"v3.7.1",-1),u={href:"https://github.com/helm/helm/releases",target:"_blank",rel:"noopener noreferrer"},b=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 从GitHub上进行下载Helm安装包</span></span>
<span class="line"><span style="color:#D4D4D4;">wget https://get.helm.sh/helm-v3.7.1-linux-amd64.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 解压下载的helm压缩包</span></span>
<span class="line"><span style="color:#D4D4D4;">tar -zxvf helm-v3.7.1-linux-amd64.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 将解压后的helm可执行文件移动至$PATH路径下</span></span>
<span class="line"><span style="color:#D4D4D4;">cp linux-amd64/helm /usr/local/bin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 通过helm指令查看helm version</span></span>
<span class="line"><span style="color:#D4D4D4;">helm version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">#终端打印信息正常，表示helm工具可正常使用</span></span>
<span class="line"><span style="color:#D4D4D4;">version.BuildInfo{Version:</span><span style="color:#CE9178;">&quot;v3.7.1&quot;</span><span style="color:#D4D4D4;">……</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="helm工具常用操作" tabindex="-1"><a class="header-anchor" href="#helm工具常用操作" aria-hidden="true">#</a> Helm工具常用操作</h2><h3 id="chart仓库添加" tabindex="-1"><a class="header-anchor" href="#chart仓库添加" aria-hidden="true">#</a> Chart仓库添加</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># $repoName 添加的Chart仓库的名称；</span></span>
<span class="line"><span style="color:#6A9955;"># $helmRepoUrl： 添加的Chart仓库的地址。</span></span>
<span class="line"><span style="color:#D4D4D4;">helm repoUrl add </span><span style="color:#9CDCFE;">$repoName</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$repoUrl</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chart仓库更新" tabindex="-1"><a class="header-anchor" href="#chart仓库更新" aria-hidden="true">#</a> Chart仓库更新</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">helm repo update</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="chart仓库列表展示" tabindex="-1"><a class="header-anchor" href="#chart仓库列表展示" aria-hidden="true">#</a> Chart仓库列表展示</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">helm repo list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 终端打印信息</span></span>
<span class="line"><span style="color:#D4D4D4;">NAME        	URL                           </span></span>
<span class="line"><span style="color:#D4D4D4;">rook-release	https://charts.rook.io/release</span></span>
<span class="line"><span style="color:#D4D4D4;">chartmuseum 	http://192.168.1.240:8090 </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chart仓库移除" tabindex="-1"><a class="header-anchor" href="#chart仓库移除" aria-hidden="true">#</a> Chart仓库移除</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># $repoName 添加的Chart仓库的名称；</span></span>
<span class="line"><span style="color:#D4D4D4;">helm repo remove </span><span style="color:#9CDCFE;">$repoName</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在chart仓库中查找chart包" tabindex="-1"><a class="header-anchor" href="#在chart仓库中查找chart包" aria-hidden="true">#</a> 在Chart仓库中查找Chart包</h3>`,11),D={href:"https://semver.org/spec/v2.0.0.html",target:"_blank",rel:"noopener noreferrer"},y=l(`<ul><li>正式发布版本示例：v1.0.0;</li><li>预发布版本号示例：v1.0.0-alpha;</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># $keyWord 需要查找的Chart包的名称或者其他关键字(模糊搜索)；</span></span>
<span class="line"><span style="color:#6A9955;"># 默认展示最新正式版本号</span></span>
<span class="line"><span style="color:#D4D4D4;">helm search repo </span><span style="color:#9CDCFE;">$keyWord</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 终端打印信息</span></span>
<span class="line"><span style="color:#6A9955;"># $repoName Chart包所在Chart仓库的名称；</span></span>
<span class="line"><span style="color:#6A9955;"># $chartName 查找到的Chart包的名称</span></span>
<span class="line"><span style="color:#D4D4D4;">NAME                CHART VERSION	APP VERSION	DESCRIPTION                </span></span>
<span class="line"><span style="color:#9CDCFE;">$repoName</span><span style="color:#D4D4D4;">/</span><span style="color:#9CDCFE;">$chartName</span><span style="color:#D4D4D4;">	1.0.0        	1.0.0      	A Helm chart </span><span style="color:#C586C0;">for</span><span style="color:#D4D4D4;"> Kubernetes</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">参数</p><ul><li>--version $chartVersion: 指定版本号；</li><li>--devel: 展示包括预发布版本号在内的最新的预发布版本号;</li><li>--versions: 展示所有正式发布的版本号;</li><li>--versions --devel: 展示所有包括预发布版本号的所有版本号;</li></ul></div><h3 id="从chart仓库下载chart包到本地" tabindex="-1"><a class="header-anchor" href="#从chart仓库下载chart包到本地" aria-hidden="true">#</a> 从Chart仓库下载Chart包到本地</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># $repoName Chart包所在Chart仓库的名称；</span></span>
<span class="line"><span style="color:#6A9955;"># $chartName Chart包名称</span></span>
<span class="line"><span style="color:#D4D4D4;">helm pull </span><span style="color:#9CDCFE;">$repoName</span><span style="color:#D4D4D4;">/</span><span style="color:#9CDCFE;">$chartName</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装chart包" tabindex="-1"><a class="header-anchor" href="#安装chart包" aria-hidden="true">#</a> 安装Chart包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># $name: 安装名称</span></span>
<span class="line"><span style="color:#6A9955;"># $chartPath 本地Chart包路径，或Chart仓库中的Chart(格式为\`repoName/chartName\`)</span></span>
<span class="line"><span style="color:#D4D4D4;">helm install </span><span style="color:#9CDCFE;">$name</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$chartPath</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="升级chart包" tabindex="-1"><a class="header-anchor" href="#升级chart包" aria-hidden="true">#</a> 升级Chart包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># $name: 安装名称</span></span>
<span class="line"><span style="color:#6A9955;"># $chartPath 本地Chart包路径，或Chart仓库中的Chart(格式为\`repoName/chartName\`)</span></span>
<span class="line"><span style="color:#D4D4D4;">helm upgrade </span><span style="color:#9CDCFE;">$name</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$chartPath</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>升级Chart包时，安装时指定的所有参数会失效，需要重新指定所有需要的参数。</p></div><h2 id="helm工具常用参数" tabindex="-1"><a class="header-anchor" href="#helm工具常用参数" aria-hidden="true">#</a> Helm工具常用参数</h2><h3 id="n-namespace" tabindex="-1"><a class="header-anchor" href="#n-namespace" aria-hidden="true">#</a> -n $namespace</h3><p>参数<code>-n $namespace</code>表示指定操作的namespace;</p><h3 id="create-namespace" tabindex="-1"><a class="header-anchor" href="#create-namespace" aria-hidden="true">#</a> --create-namespace</h3><p>参数<code>--create-namespace</code>表示如果指定的namespace不存在，则新建这个namespace.</p><h3 id="verision-chartversion" tabindex="-1"><a class="header-anchor" href="#verision-chartversion" aria-hidden="true">#</a> --verision $chartVersion</h3><p>参数<code>--verision $chartVersion</code>表示指定安装的Chart包的版本号</p>`,17);function C(E,g){const e=i("ExternalLinkIcon");return c(),p("div",null,[o,a("p",null,[a("a",t,[s("Helm工具"),n(e)]),s("本质上是一个二进制可执行文件，主要用于在Kubernetes环境中安装"),h,s("。")]),m,a("p",null,[s("此处选择的Helm工具的"),v,s("版本，更多Helm版本可参考 "),a("a",u,[s("Helm Realease"),n(e)]),s(".")]),b,a("p",null,[s("helm版本号符合"),a("a",D,[s("语义化版本2标准"),n(e)]),s(":")]),y])}const x=r(d,[["render",C],["__file","helm.html.vue"]]);export{x as default};