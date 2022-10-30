# 环境配置

`DolphinDB MGR`的环境配置集中在`Env Config`中，其表现形式是`Configmap`资源，对应`DolphinDB MGR`的Chart包中的
`dolphindb-mgr/templates/envconfig.yaml`文件中。
## 配置详情

`Env Config`的详细内容如下所示：
```yaml
kubectl -ndolphindb get cm dolphindb-env-config -oyaml

#控制台输出如下:

apiVersion: v1
kind: ConfigMap
metadata:
  namespace: dolphindb
  name: dolphindb-env-config
  labels:
    dolphindb.io/component.config: config
data:
  env-config: |-
##-----------------------------全局属性-----------------------------##
## 全局属性作用于所有DolphinDB MGR管理面组件资源和DolphinDB运行时资源
    global:                                             # 全局属性
      storageClass: ""                                      # 存储类名称，使用该存储类根据PVC来自动分配PV.
      imageRepository: 192.168.1.240/dolphindb              # 容器镜像仓库地址
      localTimeFileHostPath: /etc/localtime                 # Kubernetes环境节点上时区文件所在路径，默认值/etc/localtime
      customDomainSuffix: ""                                # 自定义域名后缀，用于替换Kubernetes集群默认内部域名后缀为svc.cluster.local
      minPersistentVolumeSize: ""                           # PV最小空间大小，主要适用于有限制持久卷最小空间的公有云环境
      nodeAffinity:                                         # 节点亲和性，影响DolphinDB相关Pod资源调度到哪些节点上，详情可参考Kubernetes节点亲和性的相关定义。此处表示DolphinDB相关Pod优先调度到具有"dolphindb.io/pod: dolphindb"标签的节点上。
        preferredDuringSchedulingIgnoredDuringExecution:
        - preference:
            matchExpressions:
            - key: dolphindb.io/pod
              operator: In
              values:
              - dolphindb
          weight: 1

##-----------------------------DolphinDB属性-----------------------------##
## DolphinDB属性仅作用于DolphinDB运行时资源，在全局属性的基础上进行叠加。如有相同字段，则在全局属性的基础上进行覆盖。
    dolphindb:                                          # DolphinDB属性
      serviceType: NodePort                             # DolphinDB对外提供服务的服务类型，
      coreDumpDir: /data/ddb/core                       # core dump文件路径，在DolphinDB进程触发core dump时，相应的core dump文件生成路径
      controllerDataSize: 200Mi                         # DolphinDB的controller实例的数据需要持久卷的空间
      datanodeDataSize: 200Mi                           # DolphinDB的datanode实例的数据需要持久卷的空间
      localTimeFileMountPath: /etc/localtime            # Kubernetes环境节点上时区文件所在路径，默认值/etc/localtime
      disableExporter:  false                           # 是否禁用dolphindb-exporter组件，默认false,表示使用dolphindb-exporter来采集DolphinDB指标信息，以便于汇总到Prometheus服务
      logCleanLimit: 0.9                                # 日志清理阈值，默认为0.9,表示当DolphinDB所在容器的日志文件大小达到日志的PVC定义的存储空间的90%时，开始清理该容器中的历史日志文件
      resources:                                        # DolphinDB License指定的资源配置，主要用于可视化界面上DolphinDB的默认资源配置
        limits:
          cpu: 1
          memory: 1Gi
        requests:
          cpu: 1
          memory: 1Gi
      images:                                           # DolphinDB MGR可视化界面上展示的DolphinDB版本号及相关镜像，默认情况下DolphinDB的镜像tag和版本号保持一致。若需要自定义镜像名称或tag，则需要在每个版本的images字段下指定，可参考v2.00.4版本。
        versions:
          - version: v1.30.14
          - version: v1.30.15
          - version: v1.30.16
          - version: v1.30.17
          - version: v1.30.18
          - version: v1.30.19
          - version: v1.30.20
          - version: v2.00.3
          - version: v2.00.4
            images:
               dolphindb: v2.00.4-patch3                # 此处表示v2.00.4版本的DolphinDB使用的DolphinDB镜像的tag为"v2.00.4-patch3"，若需要设置镜像名称，则以"$name:$tag"的格式提供即可。
          - version: v2.00.5
          - version: v2.00.6
          - version: v2.00.7
          - version: v2.00.8
        default:                                        # 此处指定为DolphinDB稳定运行提供辅助功能的镜像，默认情况下，只需要提供版本号。若需要设置镜像名称，则以"$name:$tag"的格式提供即可。
          dolphindb-config-loader: v1.1.0
          dolphindb-service-manager: v1.1.0
          dolphindb-exporter: v1.1.0
          dolphindb-cleaner: v1.1.0
          promtail: 2.4.1
```

## 修改配置

可通过以下方式修改环境配置：
- 直接修改环境中`Env Config`对应的`Configmap`资源；
- 通过指定`DolphinDB MGR`部署参数升级`DolphinDB MGR`(影响较大，不建议)；
- 通过可视化界面修改(TODO,该功能尚未上线)；

::: tip
多数组件实现了配置热加载，但某些配置项可能需要事件触发才会作用到环境中。
因此，修改`Env Config`后，可通过重启相应组件使得配置强制刷新，从而快速生效。
:::


