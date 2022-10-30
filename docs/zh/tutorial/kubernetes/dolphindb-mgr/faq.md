# FAQ

## Chart包部署参数如何配置...

`Chart包`部署参数可以通过以下方式进行配置：
- 修改`values.yaml`文件：直接修改`Chart包`中定义的参数值，参考[Chart包参数](./deployment.md#chart包参数)；
- 指定部署参数：通过指定部署时的参数来进行配置，参考[部署参数示例](./deployment.md#部署参数示例)。

以下均以`指定部署参数`为例，进行配置说明。

### 指定的Chart包版本
```bash
  --version='v1.1.1' # 部署版本号为'v1.1.1'的Chart包
```

### 部署的Namespace
```bash
  -ndolphindb --create-namespace    # 安装在'dolphindb'这个namespace中，如果该namespace不存在，则自动创建
```


### DolphinDB License
```bash
  --set-file license.content='/data/dolphindb.lic' \    # DolphinDB License文件路径为当前执行机器的'/data/dolphindb.lic'
```

### 私有镜像仓库地址
```bash
  --set global.registry=harbor.io # 镜像从私有容器仓库获取，地址为harbor.io
```

### 镜像仓库名称
```bash
  --set global.repository=dolphindbbit  # 镜像从私有容器仓库获取，镜像仓库名称为dolphindbbit
```

### 存储类
```bash
  --set global.storageClass=local-path  # 使用名为'local-path'的存储类来分配PV和PVC
```

### 服务暴露方式/服务类型
```bash
  --set global.serviceType=LoadBalancer # 当前环境支持LoadBalancer服务类型，选择使用LoadBalancer对外提供服务
```

### 管理所有Namespace的DolphinDB
```bash
  --set global.allNamespace=true  # DolphinDB MGR管理所有namespace中的DolphinDB，可以在所有namespace中进行DolphinDB的增删改查操作
```

### 自定义Service域名后缀
```bash
  --set global.customDomainSuffix='a.com' # 使用'a.com'作为集群内Service域名后缀
```

### 持久卷最小存储空间
```bash
  --set global.minPersistentVolumeSize='10Gi' # 存储空间最小为'10Gi'
```
