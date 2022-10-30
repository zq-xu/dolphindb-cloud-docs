# 容器化部署

DolphinDB支持以容器形式部署在`Docker`、`Kubernetes`、`Docker Compose`等容器环境中。

DolphinDB已公开的Docker容器镜像可参考[DockerHub--DolphinDB](https://hub.docker.com/r/dolphindb/dolphindb)。


## Docker环境

详情参考[DolphinDB Docker 单机部署方案](https://github.com/dolphindb/dolphindb-k8s/blob/master/docker_single_deployment.md)。

## Kubernetes环境

DolphinDB可以运行在以`Docker`作为容器运行时的[Kubernetes](/zh/reference/kubernetes/)环境中：
- 运行时表现：主要由`StatefulSet`、`Service`等Kubernetes资源构成DolphinDB运行时；
- 资源管理：使用[CRD && Operator模式](/zh/reference/kubernetes/crd-operator.md)进行管理；
- 高可用方案：由备份恢复、主备集群的模式构建高可用方案；
- 运维方式：使用Prometheus、Grafana等工具构建运维能力；
- 可视化管理：使用Web端页面作为可视化界面，提供便捷的可视化管理。

DolphinDB在Kubernetes环境中的详细说明可见[DolphinDB in Kubernetes](../tutorial/kubernetes/dolphindb-runtime.md).

具体部署方式可参考[Kubernetes部署DolphinDB](/zh/tutorial/kubernetes/dolphindb-deployment.md).


## Docker Compose环境

详情参考[基于Docker-Compose的DolphinDB多容器集群部署](https://github.com/dolphindb/dolphindb-k8s/blob/master/docker-compose_high_cluster.md)。

Docker Compose参考[Docker Compose官网](https://docs.docker.com/compose/)。