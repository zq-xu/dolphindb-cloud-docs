# 概览

DolphinDB MGR是DolphinDB在Kubernetes环境中的可视化管理平台，提供了CRD && Operator、可视化界面、高可用方案、运维工具等多种功能。

## 业务架构

::: tip
TODO 架构图
:::
## 核心能力

***CRD驱动*** 

DolphinDB MGR内置了DolphinDB的CRD资源和相应的`Operator`组件，使用[CRD && Operator模式](/zh/reference/kubernetes/crd-operator.md)来管理DolphinDB在Kubernetes中的生命周期。

***可视化管理*** 

DolphinDB MGR提供Web端可视化界面和相应的`REST API`服务，方便用户在Kubernetes环境中对DolphinDB进行管理。

***高可用方案***

DolphinDB MGR集成了DolphinDB基于S3/NFS的备份功能和恢复功能，使得用户可以在Kubernetes环境中一键完成DolphinDB的备份操作，也可以将指定备份集一键恢复至指定DolphinDB.

***多功能运维***

DolphinDB MGR集成了Prometheus、Grafana、AlertManager、Loki等运维工具，为用户提供DolphinDB在Kubernetes环境中的监控告警和日志采集的能力。
