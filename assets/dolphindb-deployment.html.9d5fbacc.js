import{_ as d,r as a,o as i,c as h,a as t,b as e,d as n,w as o,e as s}from"./app.8cf05f69.js";const c={},u=t("h1",{id:"部署dolphindb",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#部署dolphindb","aria-hidden":"true"},"#"),e(" 部署DolphinDB")],-1),p=t("code",null,"Docker",-1),b={href:"https://kubernetes.io/zh-cn/docs/home/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://helm.sh/zh/docs/",target:"_blank",rel:"noopener noreferrer"},m=s('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>Helm工具在<code>v3.0.0</code>版本出现大规模变更，版本过低可能出现Chart包语法不兼容问题。</p></div><p>在Kubernetes环境中，可参考如下方式部署DolphinDB：</p><ul><li><a href="#kubernetes%E5%8E%9F%E7%94%9F%E8%B5%84%E6%BA%90%E9%83%A8%E7%BD%B2">Kubernetes原生资源部署(基础)</a>: 使用Kubernetes原生资源部署DolphinDB;</li><li><a href="#crd-operator%E9%83%A8%E7%BD%B2">CRD &amp;&amp; Operator部署(进阶)</a>: 使用CRD + Operator的组合来部署Kubernetes环境中的DolphinDB.</li><li><a href="#%E5%8F%AF%E8%A7%86%E5%8C%96%E7%AE%A1%E7%90%86%E5%B9%B3%E5%8F%B0%E9%83%A8%E7%BD%B2">可视化管理平台部署(推荐)</a>: 集成CRD + Operator、可视化界面、Prometheus、Grafana等丰富功能。</li></ul><h2 id="kubernetes原生资源部署" tabindex="-1"><a class="header-anchor" href="#kubernetes原生资源部署" aria-hidden="true">#</a> Kubernetes原生资源部署</h2><p>在Kubernetes环境中，可以使用<code>StatefulSet</code>等Kubernetes原生资源直接部署DolphinDB.</p>',5),f=t("h2",{id:"crd-operator部署",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#crd-operator部署","aria-hidden":"true"},"#"),e(" CRD && Operator部署")],-1),B=t("code",null,"dolphindb",-1),k=t("code",null,"ddb",-1),E=t("code",null,"DolphinDB Operator",-1),v=t("code",null,"ddb",-1),K=s(`<p>可以通过如下步骤进行部署（<a href="#%E9%83%A8%E7%BD%B2dolphindb">推荐环境</a>）:</p><ul><li><strong>步骤一</strong> 安装 CRD &amp;&amp; Operator</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">TODO</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>步骤二</strong> 安装<code>ddb</code>资源</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">TODO</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="可视化管理平台部署" tabindex="-1"><a class="header-anchor" href="#可视化管理平台部署" aria-hidden="true">#</a> 可视化管理平台部署</h2>`,6),g=t("code",null,"DolphinDB MGR",-1);function C(x,z){const r=a("RouterLink"),l=a("ExternalLinkIcon");return i(),h("div",null,[u,t("p",null,[e("DolphinDB可以运行在以"),p,e("作为容器运行时的"),n(r,{to:"/zh/reference/kubernetes/"},{default:o(()=>[e("Kubernetes")]),_:1}),e("环境中。推荐环境如下：")]),t("ul",null,[t("li",null,[t("a",b,[e("Kubernetes v1.18.0+"),n(l)]),e("        (参考"),n(r,{to:"/zh/reference/kubernetes/installer.html"},{default:o(()=>[e("部署Kubernetes环境")]),_:1}),e(")")]),t("li",null,[t("a",D,[e("Docker 20.10.10+"),n(l)]),e("             (参考"),n(r,{to:"/zh/reference/docker/installer.html"},{default:o(()=>[e("部署Docker环境")]),_:1}),e(")")]),t("li",null,[t("a",_,[e("Helm 3.0.0+"),n(l)]),e("（可选）       (参考"),n(r,{to:"/zh/reference/tools/helm.html"},{default:o(()=>[e("安装Helm工具")]),_:1}),e(")")])]),m,t("p",null,[n(r,{to:"/zh/tutorial/kubernetes/dolphindb-chart/"},{default:o(()=>[e("DolphinDB Chart")]),_:1}),e("包中封装了DolphinDB运行时所需的Kubernetes原生资源，可以使用Helm工具安装。详情可参考"),n(r,{to:"/zh/tutorial/kubernetes/dolphindb-chart/deployment.html"},{default:o(()=>[e("DolphinDB Chart安装")]),_:1}),e("。")]),f,t("p",null,[e("DolphinDB在Kubernetes中被定义为名为"),B,e("(简称为"),k,e(")的"),n(r,{to:"/zh/tutorial/tutorial/kubernetes/crd-operator.html#crd"},{default:o(()=>[e("CRD")]),_:1}),e("，通过微服务组件"),E,e("解析为相应的Kubernetes原生资源。")]),t("p",null,[e("在有"),n(r,{to:"/zh/tutorial/kubernetes/crd-operator.html"},{default:o(()=>[e("CRD && Operator")]),_:1}),e("的Kubernetes环境中，只需要通过简单的配置文件来部署"),v,e("资源，就可以自动解析出相应的DolphinDB.")]),K,t("p",null,[g,e("是DolphinDB在Kubernetes环境中的可视化管理平台，其集成了在Kubernetes环境中管理DolphinDB的所有功能，包含"),n(r,{to:"/zh/tutorial/kubernetes/crd-operator.html"},{default:o(()=>[e("CRD && Operator")]),_:1}),e("、可视化界面、高可用方案、运维工具等。")]),t("p",null,[e("详情可参考"),n(r,{to:"/zh/tutorial/kubernetes/dolphindb-mgr/deployment.html"},{default:o(()=>[e("DolphinDB MGR部署")]),_:1}),e(".")])])}const R=d(c,[["render",C],["__file","dolphindb-deployment.html.vue"]]);export{R as default};