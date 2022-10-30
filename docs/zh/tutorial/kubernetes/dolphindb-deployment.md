# 部署DolphinDB

DolphinDB可以运行在以`Docker`作为容器运行时的[Kubernetes](/zh/reference/kubernetes/)环境中。推荐环境如下：
- [Kubernetes v1.18.0+](https://kubernetes.io/zh-cn/docs/home/)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(参考[部署Kubernetes环境](/zh/reference/kubernetes/installer.md))
- [Docker 20.10.10+](https://docs.docker.com/)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(参考[部署Docker环境](/zh/reference/docker/installer.md))
- [Helm 3.0.0+](https://helm.sh/zh/docs/)（可选）&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(参考[安装Helm工具](/zh/reference/tools/helm.md))

::: warning
Helm工具在`v3.0.0`版本出现大规模变更，版本过低可能出现Chart包语法不兼容问题。
:::


在Kubernetes环境中，可参考如下方式部署DolphinDB：
- [Kubernetes原生资源部署(基础)](#kubernetes原生资源部署): 使用Kubernetes原生资源部署DolphinDB;
- [CRD && Operator部署(进阶)](#crd-operator部署): 使用CRD + Operator的组合来部署Kubernetes环境中的DolphinDB.
- [可视化管理平台部署(推荐)](#可视化管理平台部署): 集成CRD + Operator、可视化界面、Prometheus、Grafana等丰富功能。


## Kubernetes原生资源部署

在Kubernetes环境中，可以使用`StatefulSet`等Kubernetes原生资源直接部署DolphinDB.

[DolphinDB Chart](/zh/tutorial/kubernetes/dolphindb-chart/README.md)包中封装了DolphinDB运行时所需的Kubernetes原生资源，可以使用Helm工具安装。详情可参考[DolphinDB Chart安装](/zh/tutorial/kubernetes/dolphindb-chart/deployment.md)。

## CRD && Operator部署

DolphinDB在Kubernetes中被定义为名为`dolphindb`(简称为`ddb`)的[CRD](../tutorial/kubernetes/crd-operator.md#crd)，通过微服务组件`DolphinDB Operator`解析为相应的Kubernetes原生资源。

在有[CRD && Operator](./crd-operator.md)的Kubernetes环境中，只需要通过简单的配置文件来部署`ddb`资源，就可以自动解析出相应的DolphinDB.

可以通过如下步骤进行部署（[推荐环境](#部署dolphindb)）:

- **步骤一** 安装 CRD && Operator

```bash
TODO
```

- **步骤二** 安装`ddb`资源

```bash
TODO
```

## 可视化管理平台部署

`DolphinDB MGR`是DolphinDB在Kubernetes环境中的可视化管理平台，其集成了在Kubernetes环境中管理DolphinDB的所有功能，包含[CRD && Operator](./crd-operator.md)、可视化界面、高可用方案、运维工具等。

详情可参考[DolphinDB MGR部署](/zh/tutorial/kubernetes/dolphindb-mgr/deployment.md).

