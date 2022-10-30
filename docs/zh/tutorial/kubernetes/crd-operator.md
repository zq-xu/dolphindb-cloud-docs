# CRD && Operator

在Kubernetes环境中，DolphinDB主要使用[CRD && Operator模式](/zh/reference/kubernetes/crd-operator.md)进行管理。


DolphinDB被定义为[CRD(自定义资源)](/zh/reference/kubernetes/crd-operator.html#crd概念)，相应的[Operator](/zh/reference/kubernetes/crd-operator.html#operator概念)组件根据`CRD`解析并管理构成[DolphinDB运行时](./dolphindb-runtime.md#dolphindb运行时)的`StatefulSet`、`Service`等Kubernetes资源，同时管理`CRD`的状态。

在Kubernetes环境中，DolphinDB相关的CRD主要包括:
- [DolphinDB](#dolphindb): 定义DolphinDB的相关属性；
- [DolphinDB Backup](#dolphindb-backup)：定义DolphinDB备份的相关属性；

基于`CRD && Operator`部署DolphinDB可参考[部署方式](./dolphindb-deployment.md#crd-operator部署)。

## DolphinDB

在Kubernetes环境中，DolphinDB被定义为名为`dolphindb`(简称ddb)的`CRD`，并由`DolphinDB Operator`组件进行解析和管理。

### 属性说明

`ddb`资源示例及相关属性说明如下：
```yaml
kubectl -ndolphindb get ddb xzq -oyaml

# 控制台输出如下：
apiVersion: dolphindb.dolphindb.io/v1   # CRD版本，格式为$group(dolphindb).$domain(dolphindb.io)/$version(v1)
kind: DolphinDB                 # CRD的资源类型, DolphinDB
metadata:                       # 基础信息
  name: xzq                         # 名称
  namespace: dolphindb              # 命名空间
spec:                           # DolphinDB具体属性
  version: v2.00.7                  # DolphinDB版本
  mode: cluster                     # DolphinDB类型.cluster: 集群模式；standalone: 单节点模式 
  clusterType: multicontroller      # 集群模式. multicontroller: 多Controller节点，该模式下，Controller数量不少于3个;singlecontroller: 单Controller节点，该模式下，Controller数量固定为1.
  storageClassName: standard        # 存储类名称，使用该存储类根据PVC来自动分配PV.

##-----------------------------计算节点相关属性-----------------------------##
  computenode:                      # 计算节点相关属性
    dataSize: 1Gi                       # 计算节点数据所需持久卷的空间大小
    logSize: 1Gi                        # 计算节点日志所需持久卷的空间大小
    port: 32210                         # 计算节点端口，默认为32210
    replicas: 3                         # 计算节点的个数
    resources:                          # 计算节点资源信息，通常limit和request保持一致
      limits:                               # 计算节点资源限制(使用资源上限)
        cpu: 2                               # 计算节点cpu上限，2Core
        memory: 1Gi                             # 计算节点memory上限，1G
      requests:                             # 计算节点资源要求(使用资源下限，表示一定可以分配到的资源)
        cpu: 2                               # 计算节点的cpu要求，2Core
        memory: 1Gi                             # 计算节点的memory要求，1G
    volumes: {}                             # 所有计算节点对应的Pod需要额外挂载的卷，可参考Kubernetes中卷的定义
    volumeMounts: {}                        # 所有计算节点对应的Pod中DolphinDB容器的卷挂载，可参考Kubernetes中卷挂载的定义
    instances:                          # 计算节点实例相关属性，map结构
      "0":                                  # 编号为0的计算节点实例的相关属性
        paused: true                            # 编号为0的计算节点暂停服务，表现为pod停止运行，但保留PVC和Service
        service: {}                             # 编号为0的计算节点创建单独的service资源
        volumes: {}                             # 编号为0的计算节点对应的Pod需要额外挂载的卷，在spec.computenode.volumes的基础上叠加
        volumeMounts: {}                        # 编号为0的计算节点对应的Pod中DolphinDB容器的卷挂载，在spec.computenode.volumeMounts的基础上叠加

##-----------------------------控制节点相关属性-----------------------------##
  controller:                       # 控制节点相关属性
    clusterConfig:                      # cluster.config的相关运行时配置，map结构，只需要定义需要配置的属性即可，其余配置使用默认值
      maxMemSize: "1"                       # 配置示例
    dataSize: 1Gi                       # 控制节点数据所需持久卷的空间大小                       
    logSize: 1Gi                        # 控制节点数据所需持久卷的空间大小
    port: 31210                         # 控制节点端口，默认为31210
    replicas: 3                         # 控制节点的个数
    resources:                          # 控制节点资源信息，通常limit和request保持一致
      limits:                               # 控制节点资源限制(使用资源上限)
        cpu: 200m                               # 控制节点cpu上限，200m,即0.2Core
        memory: 1Gi                             # 控制节点memory上限，1G
      requests:                             # 控制节点资源要求(使用资源下限，表示一定可以分配到的资源)
        cpu: 200m                               # 控制节点的cpu要求，200m,即0.2Core
        memory: 1Gi                             # 控制节点的memory要求，1G
    volumes: {}                         # 所有控制节点对应的Pod需要额外挂载的卷，可参考Kubernetes中卷的定义
    volumeMounts: {}                    # 所有控制节点对应的Pod中DolphinDB容器的卷挂载，可参考Kubernetes中卷挂载的定义
    instances:                          # 控制节点实例相关属性
      "0":                                  # 编号为0的控制节点实例的相关属性
        service: {}                             # 编号为0的控制节点创建单独的service资源
        volumes: {}                             # 编号为0的控制节点对应的Pod需要额外挂载的卷，在spec.controller.volumes的基础上叠加
        volumeMounts: {}                        # 编号为0的控制节点对应的Pod中DolphinDB容器的卷挂载，在spec.controller.volumeMounts的基础上叠加

##-----------------------------数据节点相关属性-----------------------------##
  datanode:                         # 数据节点相关属性
    dataSize: 1Gi                       # 数据节点数据所需持久卷的空间大小
    logSize: 1Gi                        # 数据节点日志所需持久卷的空间大小
    port: 32210                         # 数据节点端口，默认为32210
    replicas: 3                         # 数据节点的个数
    resources:                          # 数据节点资源信息，通常limit和request保持一致
      limits:                               # 数据节点资源限制(使用资源上限)
        cpu: 200m                               # 数据节点cpu上限，200m,即0.2Core
        memory: 1Gi                             # 数据节点memory上限，1G
      requests:                             # 数据节点资源要求(使用资源下限，表示一定可以分配到的资源)
        cpu: 200m                               # 数据节点的cpu要求，200m,即0.2Core
        memory: 1Gi                             # 数据节点的memory要求，1G
    volumes: {}                         # 所有数据节点对应的Pod需要额外挂载的卷，可参考Kubernetes中卷的定义
    volumeMounts: {}                    # 所有数据节点对应的Pod中DolphinDB容器的卷挂载，可参考Kubernetes中卷挂载的定义
    instances:                          # 数据节点实例相关属性，map结构
      "0":                                  # 编号为0的数据节点实例的相关属性
        paused: true                            # 编号为0的数据节点暂停服务，表现为pod停止运行，但保留PVC和Service
        service: {}                             # 编号为0的数据节点创建单独的service资源
        volumes: {}                             # 编号为0的数据节点对应的Pod需要额外挂载的卷，在spec.datanode.volumes的基础上叠加
        volumeMounts: {}                        # 编号为0的数据节点对应的Pod中DolphinDB容器的卷挂载，在spec.datanode.volumeMounts的基础上叠加

##-----------------------------其他属性-----------------------------##        
  disableExporter: false            # 是否禁用exporter(监控指标采集组件)
  disablePromtail: false            # 是否禁用promtail(日志采集组件)
  disableCoreDump: false            # 是否禁用CoreDump
  logCleanLimit: "0.9"              # 日志清理阈值(日志申请的PV中的日志大小达到该阈值后，开始清理历史日志)，默认为0.9
  minPersistentVolumeSize: "0"      # PV最小空间大小，主要适用于有限制持久卷最小空间的公有云环境
  customMeta:                       # 自定义属性，主要用于Kubernetes环境的一些特殊设置
    domainSuffix: dolphin.com           # 自定义域名后缀，用于替换Kubernetes集群默认内部域名后缀为svc.cluster.local
    podLabels: {}                       # dolphindb相关Pod额外添加的label
    podAnnotations: {}                  # dolphindb相关Pod额外添加的annotation
    pvcLabels: {}                       # dolphindb相关PVC额外添加的label
    pvcAnnotations: {}                  # dolphindb相关PVC额外添加的annotation
    serviceLabels: {}                   # dolphindb相关Service额外添加的label
    serviceAnnotations: {}              # dolphindb相关Service额外添加的annotation
  nodeAffinity:                     # 节点亲和性，影响DolphinDB相关Pod资源调度到哪些节点上，详情可参考Kubernetes节点亲和性的相关定义。此处表示DolphinDB相关Pod优先调度到具有"dolphindb.io/pod: dolphindb"标签的节点上。
    preferredDuringSchedulingIgnoredDuringExecution:
    - preference:
        matchExpressions:
        - key: dolphindb.io/pod
          operator: In
          values:
          - dolphindb
      weight: 1
  timeMeta:                         # 时间相关数据，主要用于保证容器时钟和Kubernetes环境节点时间保持一致
    localTimeFileHostPath: /etc/localtime   # Kubernetes环境节点上时区文件所在路径，默认值/etc/localtime
    localTimeFileMountPath: /etc/localtime  # 容器内时区文件挂载路径(默认指定，用户无需自定义)

```

### 基础示例

以下是`ddb`资源的一个基础示例，用于生成一个多Controller模式的DolphinDB集群（[属性说明](#属性说明)）:
```yaml
apiVersion: dolphindb.dolphindb.io/v1
kind: DolphinDB
metadata:
  name: xzq
  namespace: dolphindb
spec:
  version: v2.00.7
  mode: cluster
  clusterType: multicontroller
  storageClassName: standard
  computenode:
    dataSize: 1Gi
    logSize: 1Gi
    replicas: 3
    resources:
      limits:
        cpu: 200m
        memory: 1Gi
      requests:
        cpu: 200m
        memory: 1Gi
  controller:
    dataSize: 1Gi
    logSize: 1Gi
    replicas: 3
    resources:
      limits:
        cpu: 200m
        memory: 1Gi
      requests:
        cpu: 200m
        memory: 1Gi
  datanode:
    dataSize: 1Gi
    logSize: 1Gi
    replicas: 3
    resources:
      limits:
        cpu: 200m
        memory: 1Gi
      requests:
        cpu: 200m
        memory: 1Gi
```

## DolphinDB Backup
DolphinDB的备份在Kubernetes环境中被定义为名为`dolphindb backup`的`CRD`.