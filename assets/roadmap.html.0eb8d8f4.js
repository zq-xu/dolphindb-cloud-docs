import{_ as i,o as l,c as a,e}from"./app.70434bce.js";const h={},n=e('<h1 id="技术路线" tabindex="-1"><a class="header-anchor" href="#技术路线" aria-hidden="true">#</a> 技术路线</h1><p>✅: 已完成         ❌: 未完成</p><h2 id="kubernetes环境" tabindex="-1"><a class="header-anchor" href="#kubernetes环境" aria-hidden="true">#</a> Kubernetes环境</h2><h3 id="dolphindb部署" tabindex="-1"><a class="header-anchor" href="#dolphindb部署" aria-hidden="true">#</a> DolphinDB部署</h3><ul><li>✅ DolphinDB MGR的Helm部署；</li><li>❌ DolphinDB MGR的可视化部署；</li><li>❌ DolphinDB原生资源(DolphinDB Chart)的部署；</li><li>❌ DolphinDB的<code>CRD &amp;&amp; Operator</code>的脚本部署；</li></ul><h3 id="环境-服务管理" tabindex="-1"><a class="header-anchor" href="#环境-服务管理" aria-hidden="true">#</a> 环境 &amp;&amp; 服务管理</h3><ul><li>✅ 使用Configmap管理环境的总体配置(Env Config)；</li><li>❌ 环境配置(Env Config)的可视化管理；</li><li>✅ Node Exporter采集Kubernetes节点指标；</li><li>❌ 可视化图表展示节点指标；</li><li>❌ 环境中的DolphinDB信息总览；</li><li>❌ 基于Ingress的访问；</li><li>❌ 可视化界面的HTTPS支持；</li></ul><h3 id="dolphindb管理" tabindex="-1"><a class="header-anchor" href="#dolphindb管理" aria-hidden="true">#</a> DolphinDB管理</h3><ul><li><p><strong>DolphinDB集群</strong></p><ul><li>✅ DolphinDB基于CRD &amp;&amp; Operator的增删改查全生命周期；</li><li>✅ DolphinDB集群创建(可视化界面)；</li><li>❌ DolphinDB集群更新(可视化界面)；</li><li>✅ DolphinDB集群列表展示(可视化界面)；</li><li>✅ DolphinDB集群详情展示(可视化界面)；</li><li>✅ DolphinDB集群删除(可视化界面)；</li><li>❌ DolphinDB集群基于Ingress的访问；</li></ul></li><li><p><strong>DolphinDB配置</strong></p><ul><li>✅ DolphinDB配置展示；</li><li>✅ DolphinDB配置更新；</li><li>❌ 根据DolphinDB的cpu/memory等实际情况自动修正相关配置；</li></ul></li><li><p><strong>DolphinDB实例</strong></p><ul><li>✅ DolphinDB实例展示；</li><li>✅ DolphinDB实例Terminal连接；</li><li>✅ DolphinDB指定实例的Service资源创建/删除；</li><li>❌ 基于DolphinDB指定实例的Service资源自动更改相应Ingress资源；</li><li>✅ DolphinDB实例启动/停止；</li><li>✅ DolphinDB实例文件上传；</li><li>❌ DolphinDB实例文件下载；</li><li>❌ DolphinDB实例cpu/mem等指标实时数据展示；</li></ul></li></ul><h3 id="高可用方案" tabindex="-1"><a class="header-anchor" href="#高可用方案" aria-hidden="true">#</a> 高可用方案</h3><ul><li><p><strong>备份恢复</strong></p><ul><li>❌ DolphinDB备份恢复的CRD基础定义和Operator解析；</li><li>❌ DolphinDB基于S3备份恢复；</li><li>❌ DolphinDB基于NFS备份恢复；</li><li>❌ 删除指定备份集；</li><li>❌ 查询指定备份任务日志；</li><li>❌ DolphinDB定时备份；</li></ul></li><li><p><strong>异步复制</strong></p><ul><li>❌ DolphinDB异步复制的CRD基础定义和Operator解析；</li><li>❌ DolphinDB基于异步复制的主备集群；</li></ul></li></ul><h3 id="运维能力" tabindex="-1"><a class="header-anchor" href="#运维能力" aria-hidden="true">#</a> 运维能力</h3><ul><li>✅ 基于Promrtheus+Exporter的监控指标采集；</li><li>✅ 基于Promrtheus+AlertManager的告警；</li><li>✅ 基于Promrtheus+Grafana的监控图标；</li><li>✅ Loki+Promtail的日志采集；</li><li>❌ 可视化配置AlertManager设置告警指标；</li><li>❌ 日志查询和日志下载；</li></ul><h3 id="dolphindb功能扩展" tabindex="-1"><a class="header-anchor" href="#dolphindb功能扩展" aria-hidden="true">#</a> DolphinDB功能扩展</h3><ul><li>❌ 支持脚本编写和持久化；</li><li>❌ 支持脚本定时任务；</li></ul><h2 id="公有云上线" tabindex="-1"><a class="header-anchor" href="#公有云上线" aria-hidden="true">#</a> 公有云上线</h2><h3 id="亚马逊云-aws" tabindex="-1"><a class="header-anchor" href="#亚马逊云-aws" aria-hidden="true">#</a> 亚马逊云(AWS)</h3><ul><li>✅ DolphinDB MGR上线<code>AWS Marketplace</code>；</li></ul><h3 id="阿里云-alibaba-cloud" tabindex="-1"><a class="header-anchor" href="#阿里云-alibaba-cloud" aria-hidden="true">#</a> 阿里云(Alibaba cloud)</h3><ul><li>❌ DolphinDB MGR上线<code>阿里云市场</code>；</li></ul>',20),r=[n];function o(d,D){return l(),a("div",null,r)}const t=i(h,[["render",o],["__file","roadmap.html.vue"]]);export{t as default};