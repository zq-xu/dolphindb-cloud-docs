import{_ as s,o as n,c as a,e}from"./app.7cabacd3.js";const i={},l=e(`<h1 id="可视化界面" tabindex="-1"><a class="header-anchor" href="#可视化界面" aria-hidden="true">#</a> 可视化界面</h1><p>DolphinDB MGR提供用于管理DolphinDB相关资源的Web端可视化界面。</p><p>可视化界面提供DolphinDB的增删改查、配置管理、备份恢复、实例启停、监控运维等功能。</p><h2 id="访问方式" tabindex="-1"><a class="header-anchor" href="#访问方式" aria-hidden="true">#</a> 访问方式</h2><h3 id="service访问" tabindex="-1"><a class="header-anchor" href="#service访问" aria-hidden="true">#</a> Service访问</h3><ul><li><strong>步骤一</strong> 可查看可视化界面对应的<code>Service</code>资源：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 以下示例中，DolphinDB MGR部署在名为dolphindb的namespace中</span></span>
<span class="line"><span style="color:#D4D4D4;">kubectl -ndolphindb get svc | grep dolphindb-cloud-portal</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">#输出结果示例(当sericeType为默认值NodePort时)</span></span>
<span class="line"><span style="color:#D4D4D4;">dolphindb-cloud-portal   NodePort    10.109.94.68    &lt;none&gt;        8080:30083/TCP   43m</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>步骤二</strong> 通过浏览器访问视化界面：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># $IP：Kubernetes环境中任意node的 ip;</span></span>
<span class="line"><span style="color:#6A9955;"># $Port：转发到主机的NodePort(示例中的30083).</span></span>
<span class="line"><span style="color:#D4D4D4;">http://</span><span style="color:#9CDCFE;">$IP</span><span style="color:#D4D4D4;">:</span><span style="color:#9CDCFE;">$Port</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ingress访问" tabindex="-1"><a class="header-anchor" href="#ingress访问" aria-hidden="true">#</a> Ingress访问</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>TODO</p></div><h2 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h2><h3 id="dolphindb管理" tabindex="-1"><a class="header-anchor" href="#dolphindb管理" aria-hidden="true">#</a> DolphinDB管理</h3><ul><li><strong>集群管理</strong></li><li><strong>实例管理</strong></li><li><strong>网络管理</strong></li><li><strong>文件上传/下载</strong></li><li><strong>备份恢复</strong></li><li><strong>脚本管理</strong></li><li><strong>监控告警</strong></li><li><strong>日志管理</strong></li></ul><h3 id="服务组件管理" tabindex="-1"><a class="header-anchor" href="#服务组件管理" aria-hidden="true">#</a> 服务组件管理</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>TODO</p></div><h3 id="环境配置管理" tabindex="-1"><a class="header-anchor" href="#环境配置管理" aria-hidden="true">#</a> 环境配置管理</h3><div class="custom-container tip"><p class="custom-container-title">提示</p><p>TODO</p></div>`,18),r=[l];function o(d,t){return n(),a("div",null,r)}const p=s(i,[["render",o],["__file","portal.html.vue"]]);export{p as default};
