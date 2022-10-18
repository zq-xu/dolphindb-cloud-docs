# 介绍

DolphinDB云是DolphinDB在云平台领域服务的总称，旨在构建DolphinDB在云环境中的生态。

其提供DolphinDB在云平台上快速便捷的部署服务，并提供相关的运维服务和DolphinDB的扩展服务。


## 容器化部署

容器化是一种虚拟化技术，近些年得到大力的发展，可谓是云原生的基础。容器编排简单来说就是管理容器如何运行、如何调度，负责容器的整个生命周期。当前业界普遍使用[Kubernetes](https://kubernetes.io/zh-cn/docs/home/)作为容器编排框架，也有少数用户使用[Docker Compose](https://docs.docker.com/compose/)作为容器编排工具。

在Kubernetes环境中，DolphinDB的部署主要通过Helm工具安装Chart包的方式实现。Chart包中定义了DolphinDB在Kubernetes环境中运行的相关资源，用户可通过部署参数或修改Chart包来适配自己的Kubernetes环境。


## 高效运维
在Kubernetes环境中，DolphinDB基于Prometheus、Grafana等工具构建完善的运维能力：
- Prometheus: 作为云原生领域最受欢迎的监控采集工具，实时采集DolphinDB的状态信息；
- AlertManager: 云原生领域常用告警服务，将危险信号以告警信息通过邮件等方式通知运维人员；
- Grafana: 可视化图标组件，将Prometheus采集到的监控指标通过可视化图表的方式直观展示出来；
- Loki: 日志采集组件，采集DolphinDB的服务日志，集中查看分析。
## 公有云市场

提供在[亚马逊云(AWS) Marketplace](https://aws.amazon.com/marketplace/pp/prodview-6j7wqm5tobvko?sr=0-1&ref_=beagle&applicationId=AWSMPContessa)、阿里云(Alibaba Cloud)等云平台的云市场中一键部署的能力。

