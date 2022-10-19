# 容器化部署

DolphinDB支持以容器形式运行，可以部署在[Docker](../reference/docker/)、[Kubernetes](../reference/kubernetes/)、[Docker Compose](../reference/docker-compose/)等容器环境中。

DolphinDB已公开的Docker容器镜像可参考[DockerHub](https://hub.docker.com/r/dolphindb/dolphindb)。


## Docker
可以按照以下步骤在[Docker](../reference/docker/)环境中部署DolphinDB：

::: tip
TODO
:::


## Kubernetes

DolphinDB支持以`Docker`作为容器运行时运行在[Kubernetes](../reference/kubernetes/)环境中。

### 推荐环境
- [Kubernetes v1.18.0+](https://kubernetes.io/zh-cn/docs/home/)
- [Docker 20.10.10+](https://docs.docker.com/)
- [Helm v3.0.0+](https://helm.sh/zh/docs/)(可选)

::: warning
Helm在v3.0.0版本出现大规模变更，版本过低可能出现Chart包语法不兼容问题。
:::

### 运行时表现

在`Kubernetes`环境中，DolphinDB主要包括以下几个部分：
- DolphinDB实例： 每个DolphinDB实例对应一个`Statefulset`资源(一个`Pod`): 
- DolphinDB配置： DolphinDB的配置项定义在`Configmap`资源中(包括`DolphinDB License`)；
- DolphinDB网络： DolphinDB的网络由`Service`资源进行代理;
- DolphinDB存储： DolphinDB的存储主要由`PVC`资源进行管理，实现数据持久化。

在`Kubernetes`环境中，DolphinDB也可以通过[CRD](#crd-operator)来定义，并由[DolphinDB-Operator](#crd-operator)解析为`Statefulset`、`Service`和`Configmap`等Kubernetes原生资源。

::: tip
DolphinDB在Kubernetes环境中仍然需要使用License进行身份验证，DolphinDB在Kubernetes环境中的License以`Configmap`资源的形式存在，并挂载到DolphinDB所在的`Pod`资源中。
:::


### 部署方式

用户可以通过以下方式在Kubernetes环境中部署DolphinDB:

- [Kubernetes原生资源(基础)](#kubernetes原生资源): 只部署DolphinDB运行时所需要的Kubernetes原生资源;
- [CRD && Operator(进阶)](#crd-operator): 使用CRD + Operator的组合来部署Kubernetes环境中的DolphinDB.
- [DolphinDB MGR(推荐)](#dolphindb-mgr): 集成CRD + Operator、可视化界面、Prometheus、Grafana等丰富功能。


#### Kubernetes原生资源

DolphinDB运行时资源封装在`DolphinDB Chart`包中，可以使用Helm工具安装:

::: tip
TODO
:::

#### CRD && Operator

[CRD(Custom Resource Defininition)](https://kubernetes.io/zh-cn/docs/concepts/extend-kubernetes/api-extension/custom-resources/#customresourcedefinitions)是 Kubernetes（v1.7+）为提高可扩展性，让开发者去自定义资源的一种方式。其存在形式与Pod、Service等Kubernetes原生资源相同，都是可以解析为`yaml`或`json`的属性集合。[Operator](https://kubernetes.io/zh-cn/docs/concepts/extend-kubernetes/operator/)是相应的用于解析CRD的一种模式，常以常驻的微服务形式存在。

DolphinDB在Kubernetes中被定义为名为`dolphindb`(简称为`ddb`)的CRD，并以`dolphindb-operator`将其解析为DolphinDB运行时需要的Kubernetes原生资源。

简而言之，CRD是Kubernetes原生资源的属性整合，Operator对CRD进行资源转化，且能够在CRD管理的Kubernetes原生资源发生变更时立即响应。

可以通过如下两种方式在Kubernetes环境中安装DolphinDB的`CRD`和`Operator`:

- **Shell 安装**
```bash
helm install dolphindb-mgr dolphindb/dolphindb-mgr \
  --set-file license.content=$licensePath/license.lic \
  -ndolphindb --create-namespace
```
- **Helm 安装**

DolphinDB的CRD和DolphinDB-Operator组件封装在`DolphinDB MGR`Chart包中，该包中还包含可视化界面、监控告警服务等一系列微服务组件。

#### DolphinDB MGR

DolphinDB MGR是DolphinDB在Kubernetes环境中的CRD和管理组件的集合，其主要内容如下：
- 集成了[CRD && Operator](#crd-operator)的功能；
- 提供了可视化界面；
- 记成了包括Prometheus、Grafana等在内的运维工具。

详情可参考[DolphinDB MGR](/zh/reference/dolphindb-mgr/README.md)。


## Docker Compose

可以按照以下步骤在[Docker Compose](../reference/docker-compose/)环境中部署DolphinDB：

::: tip
TODO
:::
