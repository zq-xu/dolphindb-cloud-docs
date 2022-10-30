import{_ as c,r as s,o as d,c as h,a as o,b as e,d as n,w as l}from"./app.7cabacd3.js";const a={},i=o("h1",{id:"容器化部署",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#容器化部署","aria-hidden":"true"},"#"),e(" 容器化部署")],-1),u=o("p",null,[e("DolphinDB支持以容器形式部署在"),o("code",null,"Docker"),e("、"),o("code",null,"Kubernetes"),e("、"),o("code",null,"Docker Compose"),e("等容器环境中。")],-1),p={href:"https://hub.docker.com/r/dolphindb/dolphindb",target:"_blank",rel:"noopener noreferrer"},_=o("h2",{id:"docker环境",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#docker环境","aria-hidden":"true"},"#"),e(" Docker环境")],-1),b={href:"https://github.com/dolphindb/dolphindb-k8s/blob/master/docker_single_deployment.md",target:"_blank",rel:"noopener noreferrer"},k=o("h2",{id:"kubernetes环境",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#kubernetes环境","aria-hidden":"true"},"#"),e(" Kubernetes环境")],-1),m=o("code",null,"Docker",-1),D=o("li",null,[e("运行时表现：主要由"),o("code",null,"StatefulSet"),e("、"),o("code",null,"Service"),e("等Kubernetes资源构成DolphinDB运行时；")],-1),f=o("li",null,"高可用方案：由备份恢复、主备集群的模式构建高可用方案；",-1),B=o("li",null,"运维方式：使用Prometheus、Grafana等工具构建运维能力；",-1),x=o("li",null,"可视化管理：使用Web端页面作为可视化界面，提供便捷的可视化管理。",-1),g=o("h2",{id:"docker-compose环境",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#docker-compose环境","aria-hidden":"true"},"#"),e(" Docker Compose环境")],-1),C={href:"https://github.com/dolphindb/dolphindb-k8s/blob/master/docker-compose_high_cluster.md",target:"_blank",rel:"noopener noreferrer"},K={href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"};function v(y,z){const t=s("ExternalLinkIcon"),r=s("RouterLink");return d(),h("div",null,[i,u,o("p",null,[e("DolphinDB已公开的Docker容器镜像可参考"),o("a",p,[e("DockerHub--DolphinDB"),n(t)]),e("。")]),_,o("p",null,[e("详情参考"),o("a",b,[e("DolphinDB Docker 单机部署方案"),n(t)]),e("。")]),k,o("p",null,[e("DolphinDB可以运行在以"),m,e("作为容器运行时的"),n(r,{to:"/zh/reference/kubernetes/"},{default:l(()=>[e("Kubernetes")]),_:1}),e("环境中：")]),o("ul",null,[D,o("li",null,[e("资源管理：使用"),n(r,{to:"/zh/reference/kubernetes/crd-operator.html"},{default:l(()=>[e("CRD && Operator模式")]),_:1}),e("进行管理；")]),f,B,x]),o("p",null,[e("DolphinDB在Kubernetes环境中的详细说明可见"),n(r,{to:"/zh/tutorial/kubernetes/dolphindb-runtime.html"},{default:l(()=>[e("DolphinDB in Kubernetes")]),_:1}),e(".")]),o("p",null,[e("具体部署方式可参考"),n(r,{to:"/zh/tutorial/kubernetes/dolphindb-deployment.html"},{default:l(()=>[e("Kubernetes部署DolphinDB")]),_:1}),e(".")]),g,o("p",null,[e("详情参考"),o("a",C,[e("基于Docker-Compose的DolphinDB多容器集群部署"),n(t)]),e("。")]),o("p",null,[e("Docker Compose参考"),o("a",K,[e("Docker Compose官网"),n(t)]),e("。")])])}const E=c(a,[["render",v],["__file","container-deployment.html.vue"]]);export{E as default};
