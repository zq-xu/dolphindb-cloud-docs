# 介绍

DolphinDB MGR是DolphinDB在Kubernetes环境中的CRD和管理组件的集合，其中管理组件如下：

| 组件 | 功能 |
| --- | --- |
| DolphinDB Operator | 解析DolphinDB CRD,将其转化为Statefulset、Service等Kubernetes原生资源 |
| DolphinDB Webserver | 提供API，即可视化界面的接口 |
| DolphinDB Cloud Portal | 可视化界面,用于管理和运维Kubernetes中的DolphinDB |
| Prometheus | 监控组件，采集Kubernetes环境中的监控指标 |
| AlertManager | 告警组件，当特定指标值超过警戒线事通过邮件等方式告警 |
| Grafana | 图表组件，用于展示监控指标 |
| Loki | 日志服务组件，用于存储和分析日志内容 |


