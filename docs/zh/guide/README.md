# 项目介绍

DolphinDB云是DolphinDB在云平台领域服务的总称，旨在构建DolphinDB在云环境中的生态。

DolphinDB可以部署在以容器为基础的云原生环境和公有云平台上，并提供相关的管理和运维服务。


## 容器化部署

容器化是一种虚拟化技术，近些年得到大力的发展，可谓是云原生的基础。

容器编排简单来说就是管理容器如何运行、如何调度，负责容器的整个生命周期。

当前业界最为经典的容器化工具是[Docker](../reference/docker/),普遍使用[Kubernetes](https://kubernetes.io/zh-cn/docs/home/)作为容器编排框架，也有少数用户使用[Docker Compose](https://docs.docker.com/compose/)作为容器编排工具。

DolphinDB支持在[Docker环境](./container-deployment.md#docker环境)、[Kubernetes环境](./container-deployment.md#kubernetes环境)和[Docker Compose环境](./container-deployment.md#docker-compose环境)中的容器化部署。


## 多工具运维
在Kubernetes环境中，DolphinDB基于Prometheus、Grafana等工具构建完善的运维能力：
- Prometheus: 作为云原生领域最受欢迎的监控采集工具，实时采集DolphinDB的状态信息；
- AlertManager: 云原生领域常用告警服务，将危险信号以告警信息通过邮件等方式通知运维人员；
- Grafana: 可视化图标组件，将Prometheus采集到的监控指标通过可视化图表的方式直观展示出来；
- Loki: 日志采集组件，采集DolphinDB的服务日志，集中查看分析。
## 公有云平台

DolphinDB提供在公有云平台上的部署指导：
- [亚马逊云(AWS)](./public-cloud.md#亚马逊云aws)；
- [阿里云ACK部署DolphinDB](./public-cloud.md#ack部署dolphindb)；

DolphinDB也已经上线了如下公有云市场：
- [亚马逊云(AWS) Marketplace](./public-cloud.md#亚马逊云aws-marketplace)；
- [阿里云(Alibaba Cloud)](./public-cloud.md#阿里云市场)；

用户可以在以上云市场中一键部署DolphinDB.

