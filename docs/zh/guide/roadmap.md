# 技术路线

:white_check_mark:: 已完成  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:x:: 未完成
## Kubernetes环境

### DolphinDB部署

- :white_check_mark: DolphinDB MGR的Helm部署；
- :x: DolphinDB MGR的可视化部署；
- :x: DolphinDB原生资源(DolphinDB Chart)的部署；
- :x: DolphinDB的`CRD && Operator`的脚本部署；

### 环境 && 服务管理

- :white_check_mark: 使用Configmap管理环境的总体配置(Env Config)；
- :x: 环境配置(Env Config)的可视化管理；
- :white_check_mark: Node Exporter采集Kubernetes节点指标；
- :x: 可视化图表展示节点指标；
- :x: 环境中的DolphinDB信息总览；
- :x: 基于Ingress的访问；
- :x: 可视化界面的HTTPS支持；

### DolphinDB管理

- **DolphinDB集群**
    - :white_check_mark: DolphinDB基于CRD && Operator的增删改查全生命周期；
    - :white_check_mark: DolphinDB集群创建(可视化界面)；
    - :x: DolphinDB集群更新(可视化界面)；
    - :white_check_mark: DolphinDB集群列表展示(可视化界面)；
    - :white_check_mark: DolphinDB集群详情展示(可视化界面)；
    - :white_check_mark: DolphinDB集群删除(可视化界面)；
    - :x: DolphinDB集群基于Ingress的访问；


- **DolphinDB配置** 
    - :white_check_mark: DolphinDB配置展示；
    - :white_check_mark: DolphinDB配置更新；
    - :x: 根据DolphinDB的cpu/memory等实际情况自动修正相关配置；

- **DolphinDB实例** 
    - :white_check_mark: DolphinDB实例展示；
    - :white_check_mark: DolphinDB实例Terminal连接；
    - :white_check_mark: DolphinDB指定实例的Service资源创建/删除；
    - :x: 基于DolphinDB指定实例的Service资源自动更改相应Ingress资源；
    - :white_check_mark: DolphinDB实例启动/停止；
    - :white_check_mark: DolphinDB实例文件上传；
    - :x: DolphinDB实例文件下载；
    - :x: DolphinDB实例cpu/mem等指标实时数据展示；

### 高可用方案

- **备份恢复** 
    - :x: DolphinDB备份恢复的CRD基础定义和Operator解析；
    - :x: DolphinDB基于S3备份恢复；
    - :x: DolphinDB基于NFS备份恢复；
    - :x: 删除指定备份集；
    - :x: 查询指定备份任务日志；
    - :x: DolphinDB定时备份；


- **异步复制** 
    - :x: DolphinDB异步复制的CRD基础定义和Operator解析；
    - :x: DolphinDB基于异步复制的主备集群；


###  运维能力
- :white_check_mark: 基于Promrtheus+Exporter的监控指标采集；
- :white_check_mark: 基于Promrtheus+AlertManager的告警；
- :white_check_mark: 基于Promrtheus+Grafana的监控图标；
- :white_check_mark: Loki+Promtail的日志采集；
- :x: 可视化配置AlertManager设置告警指标；
- :x: 日志查询和日志下载；

### DolphinDB功能扩展
- :x: 支持脚本编写和持久化；
- :x: 支持脚本定时任务；




## 公有云上线
### 亚马逊云(AWS)
- :white_check_mark: DolphinDB MGR上线`AWS Marketplace`；

### 阿里云(Alibaba cloud)
- :x: DolphinDB MGR上线`阿里云市场`；