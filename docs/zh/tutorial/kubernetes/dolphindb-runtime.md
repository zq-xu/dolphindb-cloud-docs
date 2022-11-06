# DolphinDB运行时

在[Kubernetes](/zh/reference/kubernetes/README.md)环境中，DolphinDB有三种角色的实例，分别为：
- Controller: 管理节点，在集群模式下存在，可以有多个副本，遵循`Raft`选主；
- Datanode: 数据节点，用于数据存储和计算任务，集群模式下可以有多个副本；
- Computenode: 计算节点，主要执行计算任务，集群模式下可以有多个副本。

## 运行时总览

在[Kubernetes](/zh/reference/kubernetes/README.md)环境中，DolphinDB的运行时资源主要包括以下几个部分：
- DolphinDB实例： 每个DolphinDB实例对应一个`Statefulset`资源(一个`Pod`)；
- DolphinDB资源： 使用`Pod`中的DolphinDB容器的`resources`属性配置CPU和Memory资源；
- DolphinDB配置： DolphinDB的配置项定义在`Configmap`资源中(包括`DolphinDB License`)；
- DolphinDB网络： DolphinDB的网络由`Service`资源、`Ingress`资源进行代理；
- DolphinDB存储： DolphinDB的存储主要由`PVC`资源进行管理，实现数据持久化。

::: tip License依赖
DolphinDB在Kubernetes环境中仍然需要使用License进行身份验证，DolphinDB在Kubernetes环境中的License以`Configmap`资源的形式存在，并挂载到DolphinDB所在的`Pod`资源中。
:::


## 运行时存储

在Kubernetes环境中，DolphinDB实例使用[PV(Persistent Volume)](https://kubernetes.io/zh-cn/docs/concepts/storage/persistent-volumes/)和[PVC(Persistent Volume Claim)](https://kubernetes.io/zh-cn/docs/concepts/storage/persistent-volumes/)来做持久化存储。

::: tip PV/PVC绑定原理
DolphinDB实例对应的`Pod`以卷的形式挂载`PVC`资源，在`PVC`资源中声明需要的持久化数据的容量，Kubernetes会根据`PVC`资源定义的容量等属性自动绑定环境中符合条件的`PV`资源。

在环境中没有匹配的`PV`资源但是存在[存储类(StorageClass)](https://kubernetes.io/zh-cn/docs/concepts/storage/storage-classes/)的时候，可以在`PVC`资源中指定存储类，由指定的存储类来为`PVC`资源创建并绑定符合`PVC`资源预期的`PV`资源。
:::

DolphinDB集群中的每个DolphinDB实例对应的运行时存储都有三类：
- 数据存储：用于存储集群数据，对应容器中的`$workDir/data`路径；
- 日志存储：用于持久化DolphinDB打印的日志，对应容器中的`$workDir/data`路径；
- CoreDump存储：用于存储DolphinDB发生`core dump`时产生的CoreDump文件，对应容器中的`/data/ddb/core`路径。

其中，CoreDump存储主要用于定位问题，可以通过配置`CRD`选择性移除。

::: tip
- 集群模式时，`$workDir`为`/data/ddb/server/clusterDemo`;
- 单实例模式时，`$workDir`为`/data/ddb/server`;
:::

在Kubernetes环境中，名为`xzq`的DolphinDB集群的`PVC`资源如下：
```bash
kubectl -ndolphindb get pvc | grep xzq

# 控制台打印信息如下：
# `data-`作为名称前缀的为数据存储
# `log-`作为名称前缀的为日志存储
# `core-`作为名称前缀的为CoreDump存储

NAME                              STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
core-ddb-xzq-cn-0-0               Bound    pvc-48e423e7-5443-4cb7-85d1-bc01472e4736   1Gi        RWO            standard       16d
core-ddb-xzq-cn-1-0               Bound    pvc-5e20654d-908c-4266-ae34-3539ab899656   1Gi        RWO            standard       16d
core-ddb-xzq-cn-2-0               Bound    pvc-50768192-81a1-4264-b913-eba5ccaca7b0   1Gi        RWO            standard       16d
core-ddb-xzq-ctr-0-0              Bound    pvc-624428dc-3c94-4360-86a5-9a6b8d624188   1Gi        RWO            standard       16d
core-ddb-xzq-ctr-1-0              Bound    pvc-7314fc98-cb5d-4b4a-84e8-04c6bf5d6075   1Gi        RWO            standard       16d
core-ddb-xzq-ctr-2-0              Bound    pvc-a9bb56db-ac3d-4201-a099-99219eefe838   1Gi        RWO            standard       16d
core-ddb-xzq-dn-0-0               Bound    pvc-98b2dfdc-9850-4de1-a12b-92eff230fae9   1Gi        RWO            standard       16d
core-ddb-xzq-dn-1-0               Bound    pvc-2e809c4a-e72a-46b5-bc05-ac74b43ce5c8   1Gi        RWO            standard       16d
core-ddb-xzq-dn-2-0               Bound    pvc-7e42c58b-435f-4cc0-85d6-dc4e53c1342a   1Gi        RWO            standard       16d
data-ddb-xzq-cn-0-0               Bound    pvc-3a6b68f7-6fae-4142-b3dd-c4d598c04645   1Gi        RWO            standard       16d
data-ddb-xzq-cn-1-0               Bound    pvc-a6df3544-efc3-4070-aaa3-025e9cc6d03d   1Gi        RWO            standard       16d
data-ddb-xzq-cn-2-0               Bound    pvc-b667c6a0-662b-4e0a-9977-b6ca7df461b2   1Gi        RWO            standard       16d
data-ddb-xzq-ctr-0-0              Bound    pvc-7bb753c7-7012-48ba-8d28-35ab584db035   1Gi        RWO            standard       16d
data-ddb-xzq-ctr-1-0              Bound    pvc-4b83c429-df9e-4228-9876-46899b3649cb   1Gi        RWO            standard       16d
data-ddb-xzq-ctr-2-0              Bound    pvc-fc3315cb-406d-459b-a640-5d0a98bac647   1Gi        RWO            standard       16d
data-ddb-xzq-dn-0-0               Bound    pvc-95e32832-ca82-4556-90d5-f361e07059a3   1Gi        RWO            standard       16d
data-ddb-xzq-dn-1-0               Bound    pvc-21a4bb23-ec2b-49c0-ae62-c11a813aa60b   1Gi        RWO            standard       16d
data-ddb-xzq-dn-2-0               Bound    pvc-c0ecaf27-8696-4238-a347-be85294270a6   1Gi        RWO            standard       16d
log-ddb-xzq-cn-0-0                Bound    pvc-e0ae60bd-7699-4f30-8e83-7ae573faefc7   1Gi        RWO            standard       16d
log-ddb-xzq-cn-1-0                Bound    pvc-2243523e-ac9a-409c-8222-a75039c12fda   1Gi        RWO            standard       16d
log-ddb-xzq-cn-2-0                Bound    pvc-83fb18db-88c5-4155-ae2f-4ae952a53f2d   1Gi        RWO            standard       16d
log-ddb-xzq-ctr-0-0               Bound    pvc-7a4b68e2-b366-4fca-a1cb-a1fd7e250be5   1Gi        RWO            standard       16d
log-ddb-xzq-ctr-1-0               Bound    pvc-84dbcf86-a237-480b-95d0-d17764dd4391   1Gi        RWO            standard       16d
log-ddb-xzq-ctr-2-0               Bound    pvc-a8ff2fe5-a715-45b7-8b9a-65cce9e50203   1Gi        RWO            standard       16d
log-ddb-xzq-dn-0-0                Bound    pvc-016465d7-dc44-4057-81ab-1f331e654ce3   1Gi        RWO            standard       16d
log-ddb-xzq-dn-1-0                Bound    pvc-aae55a41-0e76-42db-99d2-47c1d5cd2d10   1Gi        RWO            standard       16d
log-ddb-xzq-dn-2-0                Bound    pvc-d04f7633-74e0-4a15-9a9b-d2b5d7ec61f6   1Gi        RWO            standard       16d
```
## 运行时网络

在Kubernetes环境中，DolphinDB的运行时网络由[Service](https://kubernetes.io/zh-cn/docs/concepts/services-networking/service/)资源提供，主要包括：
- [服务网络](#服务网络)：主要用于DolphinDB集群对外提供服务；
- [内部网络](#内部网络)：主要用于DolphinDB集群内实例通信。

在Kubernetes环境中，名为`xzq`的DolphinDB集群的`Service`资源如下：
```bash
kubectl -ndolphindb get svc | grep xzq

# 控制台打印信息如下：
# Computenode的服务网络和内部网络
ddb-xzq-cn                        NodePort    10.109.33.194    <none>        32210:30611/TCP,8000:30849/TCP   16d

# Controller的服务网络，始终指向`Master Controller`实例
ddb-xzq-ctr                       NodePort    10.109.52.236    <none>        31210:30959/TCP                  16d

# Controller的内部网络
ddb-xzq-ctr-inner                 ClusterIP   10.107.45.219    <none>        31210/TCP                        16d

# Datanode的服务网络和内部网络
ddb-xzq-dn                        NodePort    10.104.253.244   <none>        32210:32334/TCP,8000:31647/TCP   16d
```


### 服务网络

DolphinDB集群主要通过`Service`资源对外提供服务，默认网络如下：
- Controller由一个`Service`资源提供服务，自动指向`Master Controller`实例；
- 所有Datanode实例由一个`Service`资源进行负载均衡；
- 所有Computenode实例由一个`Service`资源进行负载均衡；

每个DolphinDB实例都可以拥有单独的`Service`资源，使得用户可以访问指定的DolphinDB实例。

可以通过配置`CRD`或者操作可视化界面来创建或删除指定DolphinDB实例的`Service`资源。

::: tip Controller的Service资源是如何始终指向Master Controller实例的？
集群模式下,DolphinDB的Controller实例可能会有多个，它们基于`Raft`算法进行选主。

此时会存在一个`Service Manager`组件，该组件会监控选主情况，使`Service`资源的`Selector`属性只与`Master Controller`实例对应的`Pod`的`Label`属性相匹配，从而控制`Service`资源始终指向`Master Controller`实例。
:::

### 内部网络

DolphinDB集群作为分布式数据库，每个DolphinDB实例对应一个由`StatefulSet`资源生成的`Pod`实例，DolphinDB实例之间需要进行网络通信。

每个DolphinDB实例对应的`StatefulSet`资源都会通过`Spec.ServiceName`属性绑定一个`Service`资源，该`Service`资源会为每个绑定的DolphinDB实例生成一个单独的[Headless Service](https://kubernetes.io/zh-cn/docs/concepts/services-networking/service/#headless-services)资源.

::: tip Kubernetes集群内部的Service域名访问格式
- `Service`: `$ServiceName.$namespace.svc.cluster.local`
- `Headless Service`: `$PodName.$ServiceName.$namespace.svc.cluster.local`
:::

DolphinDB集群的内部网络主要通过三个`Service`资源生成的若干`Headless Service`资源组成：
- Controller实例：所有Controller实例对应的`StatefulSet`资源绑定一个`Service`;
- Datanode实例：所有Datanode实例对应的`StatefulSet`资源绑定一个`Service`;
- Computenode实例：所有Computenode实例对应的`StatefulSet`资源绑定一个`Service`.

::: warning 此处可优化
可以使用一个`Service资源`来生成所有的`Headless Service`资源。
:::


## 运行时配置

在Kubernetes环境中，DolphinDB也可以指定`dataSync`、`workerNum`等[运行时配置](https://www.dolphindb.cn/cn/help/130/DatabaseandDistributedComputing/Configuration/index.html)。

### 加载方式

在Kubernetes环境中，DolphinDB实例以容器形式运行，包装在Kubernetes的`Pod`资源中。

DolphinDB实例的运行时配置在`Pod`资源的初始化阶段完成加载，主要依赖于：
- `Configmap`资源: 在`Configmap`资源中定义配置,挂载到`Pod`资源；
- `init`容器：`Pod`资源的`init`容器读取挂载的自定义配置，自动生成配置文件或启动脚本。

::: tip
在DolphinDB运行期间，若修改运行时配置，则需要重新启动DolphinDB实例方可生效。

在[CRD && Operator](./crd-operator.md)模式下，DolphinDB集群会在DolphinDB-Operator组件控制下重启。


:::
### 配置方式

具体的配置方式根据部署方式有所区别，主要包括：
- 可视化界面：适用于[可视化管理平台部署](./dolphindb-deployment.md#可视化管理平台部署);
- `CRD`参数：适用于[CRD && Operator部署](./dolphindb-deployment.md#crd-operator部署)和[可视化管理平台部署](./dolphindb-deployment.md#可视化管理平台部署);
- Configmap：适用于[Kubernetes原生资源部署](./dolphindb-deployment.md#kubernetes原生资源部署)。




