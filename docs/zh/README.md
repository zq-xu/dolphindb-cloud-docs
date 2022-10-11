---
home: true
title: 首页
heroImage: /images/hero.png
actions:
  - text: 快速上手
    link: /zh/guide/getting-started.html
    type: primary
  - text: 项目简介
    link: /zh/guide/
    type: secondary
features:
  - title: 容器部署
    details: 以容器形式在云环境中部署DolphinDB,基于Docker构建容器镜像,支持在多种云平台的Kubernetes环境中运行。
  - title: CRD驱动
    details: 使用CRD(CustomResourceDefinition)定义Kubernetes环境中的DolphinDB,通过Operator进行CRD的解析。
  - title: 高效运维
    details: 结合Promrtheus, AlertManager, Grafana, Loki构建完整运维体系，保障云上集群高可用。
  - title: 可视化管理
    details: 提供了云环境下独立的可视化界面，便于进行环境管理和集群操作。
  - title: 灵活选择
    details: 提供灵活的部署方式，适配于公有云/私有云等不同的云环境。
  - title: 高可用
    details: 提供备份恢复/主备集群的功能，保障业务连续性。
footer: MIT Licensed | Copyright © 2022 DolphinDB
---

### 在Kubernetes环境中部署DolphinDB-MGR

<CodeGroup>
  <CodeGroupItem title="Helm" active>

```bash
# 添加Helm仓库
helm repo add dolphindb https://dolphindbit.github.io/helm-chart/

# 使用Helm安装DolphinDB-MGR
# 待Pod均准备就绪即可通过service资源访问可视化界面
helm install dolphindb-mgr dolphindb/dolphindb-mgr \
  --set-file license.content=$licensePath/license.lic \
  -ndolphindb --create-namespace
```
  </CodeGroupItem>
</CodeGroup>
