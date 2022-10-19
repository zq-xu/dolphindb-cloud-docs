# 安装部署


## 环境依赖

- [Kubernetes v1.18.0+](https://kubernetes.io/zh-cn/docs/home/)
- [Docker 20.10.10+](https://docs.docker.com/)
- [Helm v3.0.0+](https://helm.sh/zh/docs/)(可选)

::: tip
Helm在v3.0.0版本出现大规模变更，版本过低可能出现Chart包语法不兼容问题
:::

## Helm部署
可使用Helm工具通过以下步骤安装 `DolphinDB MGR` :

- **步骤1**: # 添加Helm仓库

```bash
helm repo add dolphindb https://dolphindbit.github.io/helm-chart/
```

- **步骤2**: 安装 `DolphinDB MGR`

```bash
helm install dolphindb-mgr dolphindb/dolphindb-mgr \
  --set-file license.content=$licensePath/license.lic \
  -ndolphindb --create-namespace
```

::: tip
- 可通过在上述指令中指定参数来修改相应配置详细可参考[配置参数](./configs.md)；
- 可通过`helm pull`指令将helm包拉取到本地，直接修改helm包内容后进行部署。
:::
