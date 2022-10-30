<!-- ---
sidebarDepth: 3
--- -->

# 安装部署

DolphinDB MGR可以通过以下两种方式安装到Kubernetes环境中：
- [可视化部署](#可视化部署)：快速安装DolphinDB MGR的可视化界面，更多功能可以在可视化界面中选择安装；
- [Chart包部署](#chart包部署)：通过`Chart包`快速安装包含完整功能的DolphinDB MGR.

## 环境准备
### 推荐环境

建议在如下基础环境上部署DolphinDB MGR：
- [Kubernetes v1.18.0+](https://kubernetes.io/zh-cn/docs/home/): 可参考[Kubernetes环境搭建](/zh/reference/kubernetes/installer-config.md)
- [Docker 20.10.10+](https://docs.docker.com/): 可参考[Docker环境搭建](/zh/reference/tools/docker.md)


### License准备

在Kubernetes环境中，DolphinDB仍需要使用`DolphinDB License`进行身份验证。

[获取DolphinDB License](https://www.dolphindb.cn/)并保存至本地。


### CoreDump配置
在Linux系统中，当进程发生core dump(比如程序崩溃)时，系统会终止当前进程并生成core dump文件。

如需配置DolphinDB的core dump文件路径，则需要在DolphinDB部署的宿主机上执行以下命令：

  ```bash
# `/data/ddb/core`为core dump文件在容器中的路径。
# 如果与当前宿主机的配置有冲突，则可使用宿主机路径或自定义路径，该路径记作$coreDumpDir
# 如果使用$coreDumpDir，则在部署DolphinDB-MGR时需指定参数dolphindb.coreDumpDir为$coreDumpDir.
echo "/data/ddb/core/core.%p"  | sudo tee /proc/sys/kernel/core_pattern
  ```


## 可视化部署

部署环境可参考[环境准备](#环境准备)。

可以使用如下指令快速安装`DolphinDB MGR`的可视化界面，然后在可视化界面中选择安装`DolphinDB MGR`的其他功能：
```bash
TODO
```

## Chart包部署

部署环境可参考[环境准备](#环境准备)。

DolphinDB MGR的完整功能封装在[Chart包](#chart包)中，可使用[Helm工具](../../reference/tools/helm.md)参考如下方式快速安装：

- [在线安装](#在线安装)：通过网络连接`Helm仓库`，直接安装`Helm仓库`中的`Chart包`；
- [离线安装](#离线安装)：将`Chart包`下载到本地，在本地安装（便于本地修改`Chart包`）。

::: warning
Helm工具在`v3.0.0`版本出现大规模变更，版本过低可能出现Chart包语法不兼容问题。
:::


### Chart包

DolphinDB MGR的Chart包结构及相关说明如下：
```bash
$ dolphindb-mgr % tree
.
├── Chart.yaml                      # Chart包的名称、版本等基本信息
├── charts                      # DolphinDB MGR的子包，其中每个包是一个微服务组件
│   ├── alertmanager                # 告警组件，AlertManager微服务组件定义
……
│   ├── dolphindb-cloud-portal      # 可视化界面组件，DolphinDB Cloud Portal微服务组件定义
……
│   ├── dolphindb-operator          # DolphinDB CRD解析组件，DolphinDB Operator微服务组件定义
……
│   ├── dolphindb-webserver         # REST API服务组件，DolphinDB Webserver微服务组件定义
……
│   ├── grafana                     # 运维功能组件，Grafana微服务组件定义
……
│   ├── loki                        # 日志存储组件，Loki微服务组件定义
……
│   ├── node-exporter               # 节点指标采集组件，Node Exporter微服务组件定义
……
│   └── prometheus                  # 监控组件，Prometheus微服务组件定义
……
├── crds                        # crd资源定义所在路径
│   └── ddb_crd.yaml                # dolphindb的crd资源
├── templates                   # Kubernetes资源定义所在路径
│   ├── _helpers.tpl                # 模板变量处理
│   ├── envconfig.yaml              # 配置管理，DolphinDB MGR的环境配置，表现为configmap资源
│   ├── license.yaml                # DolphinDB运行时需要的license, 表现为configmap资源
│   ├── promtail-config.yaml        # 使用promtail进行日志采集时需要的配置，表现为configmap资源
│   ├── role.yaml                   # 权限管理，规定DolphinDB MGR内部组件的Kubernetes权限,表现为role或clusterrole资源
│   ├── rolebinding.yaml            # 权限管理，结合role使用,表现为rolebinding或clusterrolebinding资源
│   └── serviceaccount.yaml         # 权限管理，结合role、rolebinding使用,直接与微服务组件的pod绑定
└── values.yaml
```

### 在线安装

- **步骤1**: # 添加`Helm仓库`

```bash
helm repo add dolphindb https://dolphindbit.github.io/helm-chart/
```

- **步骤2**: 安装 `DolphinDB MGR`

```bash
helm install \                                # 安装DolphinDB MGR
  dolphindb-mgr \                             # 名称为'dolphindb-mgr'
  dolphindb/dolphindb-mgr \                   # 使用名为'dolphindb’的helm仓库中名为'dolphindb-mgr'的chart包
  --set-file license.content=$licensePath \   # 使用`$licensePath`指向的文件作为dolphindb的license
  -ndolphindb --create-namespace              # 安装在'dolphindb'这个namespace中，如果该namespace不存在，则自动创建
```

::: tip
部署参数可参考[Chart参数](#部署参数)；
:::

### 离线安装

- **步骤1**: 获取`Chart包`至当前路径

  - 方式一：从`Helm仓库`下载(需先添加`Helm仓库`，添加方式参考[在线安装](#在线安装))

  ```bash
  helm pull dolphindb/dolphindb-mgr
  ```

  - 方式二：从别处下载或拷贝至当前路径。

- **步骤2**: 安装 `DolphinDB MGR`

```bash
helm install \                                # 安装DolphinDB MGR
  dolphindb-mgr \                             # 名称为'dolphindb-mgr'
  dolphindb-mgr \                             # 使用当前路径中名为'dolphindb-mgr'的chart包
  --set-file license.content=$licensePath \   # 使用`$licensePath`指向的文件作为dolphindb的license
  -ndolphindb --create-namespace              # 安装在'dolphindb'这个namespace中，如果该namespace不存在，则自动创建
```

::: tip
部署参数可参考[Chart参数](#部署参数)；
:::

### 升级指引

如果需要对已部署的`Chart包`进行原地升级，则可以将安装步骤中的`install`子命令替换为`upgrade`子命令即可(在线安装或离线安装均可)：
```bash
安装：helm install ……
升级：helm upgrade …… (安装时添加的部署参数不再生效，在此需要重新添加部署参数)
```

::: tip
- 离线安装的`Chart包`可以在线升级，在线安装的`Chart包`也可以离线升级。
- 由于浏览器缓存缓存，可视化界面在升级之后可能需要清理浏览器缓存方可生效。
:::


### 部署参数

使用`Helm工具`部署`Chart包`，部署参数包括：
- [Helm参数](#helm参数)：Helm部署指令自带的参数;
- [Chart包参数](#chart包参数)：`Chart包`根路径下的`values.yaml`文件定义的参数。

可根据所在Kubernetes环境指定部署参数，详情可参考[部署参数示例](#部署参数示例)

#### Helm参数

可使用如下指令查看Helm部署指令自带的参数：
- `helm install -h`
- `helm upgrade -h`

常用的Helm部署指令自带参数如下：
  ```bash
  --set               指定chart包内部的参数，使用方式为 --set $chartParameterKey=$value
  --set-file          指定chart包内部的参数从本地文件中读取,使用方式为 --set-file $chartParameterKey=$localFilePath
  --version           指定安装/升级所用到的Chart包版本，默认指定正式发布的最新版本(在线安装)或者本地Chart包版本(离线安装)
  --namespace, -n     指定部署的namespace，默认是在名为‘default’的namespace
  --create-namespace  若指定部署的namespace不存在，则创建该namespace
  ```

#### Chart包参数

`Chart包`参数是指`Chart包`根路径下的`values.yaml`文件定义的参数。

`dolphindb-mgr/values.yaml`文件定义的参数主要如下：
```yaml
####################################################################################################
##                                            全局配置                                             ##
####################################################################################################

global:                                   # 全局参数，chart包及子Chart包均可使用
  registry: ""                                # 镜像仓库所在地址，默认为空，表示dockerhub
  repository: dolphindb                       # 镜像仓库名称
  storageClass: ""                            # 存储类，用于PVC和PV分配，默认为空，表示使用默认存储类
  serviceType: NodePort                       # 服务访问类型，与Kubernetes环境的网络策略有关，默认为NodePort
  allNamespace: false                         # 判断是否监听所有namespace下的DolphinDB资源，默认为false,表示只管理DolphinDB MGR所在的namespace中的DolphinDB相关资源。
  localTimeFileHostPath: "/etc/localtime"     # 宿主机时区文件路径，用于保持容器内时钟与环境时钟一致，需保持与宿主机上的时区文件路径一致，默认为"/etc/localtime"
  customDomainSuffix: ""                      # 自定义域名后缀，默认为空，表示使用Kubernetes原生域名后缀'svc.cluster.local'; 若Kubernetes环境的DNS配置了集群内部的服务域名后缀(记为$domainSuffix),则此处应配置为$domainSuffix
  nodeAffinity:                               # 节点亲和性，可指定DolphinDB MGR和DolphinDB所有的Pod运行的node宿主机。默认指定为标记了‘dolphindb.io/pod: dolphindb’标签的node节点
……
  existingLokiAddress: ""                     # 已存在的loki服务的地址，默认为空，表示使用DolphinDB MGR内置的Loki服务作为日志存储；若配置了此参数，则将使用配置的地址作为Loki日志存储服务
  minPersistentVolumeSize: ""                 # 持久卷最小空间，默认为空，表示不限制持久卷最小空间。主要用于公有云平台中对持久卷空间有最小限制的Kubernetes环境，


####################################################################################################
##                                         DolphinDB配置                                           ##
####################################################################################################

dolphindb:                                # DolphinDB基本配置，在全局配置的基础上进行覆盖，不配置的字段会默认使用全局配置
  serviceType: ""                             # 同 global.serviceType
  coreDumpDir: "/data/ddb/core"               # core dump文件路径，在DolphinDB进程触发core dump时，相应的core dump文件生成路径
  controllerDataSize: 200Mi                   # DolphinDB的controller实例的数据需要持久卷的空间
  datanodeDataSize: 200Mi                     # DolphinDB的datanode实例的数据需要持久卷的空间
  disableExporter: false                      # 是否禁用dolphindb-exporter组件，默认false,表示使用dolphindb-exporter来采集DolphinDB指标信息，以便于汇总到Prometheus服务
  logCleanLimit: 0.9                          # 日志清理阈值，默认为0.9,表示当DolphinDB所在容器的日志文件大小达到日志的PVC定义的存储空间的90%时，开始清理该容器中的历史日志文件
  images:                                     # 镜像名称和tag，主要用于配置对容器命名有特殊要求的云平台进行容器的重命名，以及开发人员或运维人员对相关镜像的调试或问题定位
……

license:                                  # DolphinDB License的相关配置
  content: ""                                 # DolphinDB License内容，用于DolphinDB运行时的身份鉴权
  resources:                                  # DolphinDB License指定的资源配置，主要用于可视化界面上DolphinDB的默认资源配置
    limits:
      cpu: 1
      memory: 1Gi
    requests:
      cpu: 1
      memory: 1Gi

####################################################################################################
##                                          服务组件配置                                            ##
####################################################################################################

dolphindb-operator:                       # DolphinDB Operator组件的相关配置
  enabled: true                               # 是否部署DolphinDB Operator组件，默认为true
  replicaCount: 2                             # 副本数，表示DolphinDB Operator运行的Pod个数，默认为2，一主一备

dolphindb-cloud-portal:                   # DolphinDB Cloud Portal组件的相关配置
  enabled: true                               # 是否部署DolphinDB Cloud Portal组件，默认为true
  replicaCount: 2                             # 副本数，表示DolphinDB Cloud Portal运行的Pod个数，默认为2

dolphindb-webserver:                      # DolphinDB Webserver组件的相关配置
  enabled: true                               # 是否部署DolphinDB Webserver组件，默认为true
  replicaCount: 2                             # 副本数，表示DolphinDB Webserver运行的Pod个数，默认为2
  nodePortIP: ""                              # 访问节点的IP,如果serviceType是NodePort，则需要提供Kubernetes中任意一台节点IP作为服务节点IP,主要用于可视化界面展示，便于页面直接跳转到DolphinDB自带的操作界面

grafana:                                  # Grafana组件的相关配置
  enabled: true                               # 是否部署Grafana组件，默认为true

prometheus:                               # Prometheus组件的相关配置
  enabled: true                               # 是否部署Prometheus组件，默认为true

alertmanager:                             # Alertmanager组件的相关配置
  enabled: true                               # 是否部署Alertmanager组件，默认为true

node-exporter:                            # Node Exporter组件的相关配置
  enabled: true                               # 是否部署Node Exporter组件，默认为true

loki:                                     # Loki组件的相关配置
  enabled: true                               # 是否部署Loki组件，默认为true
```
#### 部署参数示例

部署参数配置可参考以下示例：

```bash
helm install \                                  
  dolphindb-mgr \                                       # 名称为'dolphindb-mgr'
  dolphindb/dolphindb-mgr \                             # 使用名为'dolphindb’的helm仓库中名为'dolphindb-mgr'的chart包
  --set global.registry='192.168.1.240' \               # 镜像从私有容器仓库获取，地址为'192.168.1.240'
  --set dolphindb-webserver.nodePortIP='192.168.1.99' \ # 当前集群中选择一台机器IP地址为'192.168.1.99'作为可视化界面上访问DolphinDB的入口(仅在服务类型为'NodePort'时生效)
  --set-file license.content='/data/dolphindb.lic' \    # DolphinDB License文件路径为'/data/dolphindb.lic'
  -ndolphindb --create-namespace                        # 安装在'dolphindb'这个namespace中，如果该namespace不存在，则自动创建
```

可更多细节配置可参考[FAQ-Chart包部署参数如何配置...](./faq.md#chart包部署参数如何配置)


## 完成部署

部署好DolphinDB MGR，等待所有`Pod`均已就绪，便可通过[可视化界面](./portal.md)管理DolphinDB相关资源。
