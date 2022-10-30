# 服务组件

DolphinDB MGR包含微服务组件如下：

| 组件 | 功能 |
| --- | --- |
| DolphinDB Operator | 解析DolphinDB CRD,将其转化为Statefulset、Service等Kubernetes原生资源 |
| DolphinDB Webserver | 提供API，即可视化界面的接口 |
| DolphinDB Cloud Portal | 可视化界面,用于管理和运维Kubernetes中的DolphinDB |
| Prometheus | 监控组件，采集Kubernetes环境中的监控指标 |
| AlertManager | 告警组件，当特定指标值超过警戒线事通过邮件等方式告警 |
| Grafana | 图表组件，用于展示监控指标 |
| Loki | 日志服务组件，用于存储和分析日志内容 |

## 管理组件
### DolphinDB Operator
 `DolphinDB Operator` 主要用于解析DolphinDB CRD,将其转化为Statefulset、Service等Kubernetes原生资源。

### DolphinDB Webserver
 `DolphinDB Webserver` 用于提供API，即可视化界面的接口。

### DolphinDB Cloud Portal
 `DolphinDB Cloud Portal` 是可视化界面,用于管理和运维Kubernetes中的DolphinDB。
## 运维组件
### Prometheus
 `Prometheus` 是监控组件，采集Kubernetes环境中的监控指标。

### AlertManager
 `AlertManager` 是告警组件，当特定指标值超过警戒线事通过邮件等方式告警。

### Grafana
 `Grafana` 是图表组件，用于展示监控指标。

### Loki
 `Loki` 是日志服务组件，用于存储和分析日志内容；
