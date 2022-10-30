
# 可视化界面

DolphinDB MGR提供用于管理DolphinDB相关资源的Web端可视化界面。

可视化界面提供DolphinDB的增删改查、配置管理、备份恢复、实例启停、监控运维等功能。


## 访问方式

### Service访问
- **步骤一** 可查看可视化界面对应的`Service`资源：
```bash
# 以下示例中，DolphinDB MGR部署在名为dolphindb的namespace中
kubectl -ndolphindb get svc | grep dolphindb-cloud-portal

#输出结果示例(当sericeType为默认值NodePort时)
dolphindb-cloud-portal   NodePort    10.109.94.68    <none>        8080:30083/TCP   43m
```

- **步骤二** 通过浏览器访问视化界面：
```bash
# $IP：Kubernetes环境中任意node的 ip;
# $Port：转发到主机的NodePort(示例中的30083).
http://$IP:$Port
```


### Ingress访问

::: tip
TODO
:::

## 主要功能

### DolphinDB管理

- **集群管理**
- **实例管理**
- **网络管理**
- **文件上传/下载**
- **备份恢复**
- **脚本管理**
- **监控告警**
- **日志管理**

### 服务组件管理

::: tip
TODO
:::

### 环境配置管理

::: tip
TODO
:::
