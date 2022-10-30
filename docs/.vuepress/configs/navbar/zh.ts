import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
  {
    text: '指南',
    link: '/zh/guide/',
  },

  {
    text: '教程',
    children: [
      {
        text: 'Docker',
        children: [
          {
            text: 'Docker环境',
            link: '/zh/guide/container-deployment.md#docker环境',
          },
          {
            text: 'Docker Compose环境',
            link: '/zh/guide/container-deployment.md#docker-compose环境',
          },
        ],
      },

      {
        text: 'Kubernetes',
        children: [
          {
            text: 'DolphinDB运行时',
            link: '/zh/tutorial/kubernetes/dolphindb-runtime.md',
          },
          {
            text: '部署DolphinDB',
            link: '/zh/tutorial/kubernetes/dolphindb-deployment.md',
          },
          {
            text: 'CRD && Operator',
            link: '/zh/tutorial/kubernetes/crd-operator.md',
          },
          {
            text: '高可用方案',
            link: '/zh/tutorial/kubernetes/high-availability.md',
          },
          {
            text: '运维工具',
            link: '/zh/tutorial/kubernetes/site-reliability.md',
          },
          {
            text: '可视化管理平台',
            link: '/zh/tutorial/kubernetes/dolphindb-mgr/README.md',
          },
        ],
      },

      {
        text: '公有云平台',
        children: [
          {
            text: '亚马逊云(AWS)',
            link: '/zh/tutorial/public-cloud/aws.md',
          },
          {
            text: '阿里云',
            link: '/zh/tutorial/public-cloud/alibaba-cloud.md',
          },
        ],
      },
    ],
  },

  {
    text: '参考',
    children: [
      {
        text: '公开镜像',
        children: [
          {
            text: 'DockerHub',
            link: 'https://hub.docker.com/r/dolphindb/dolphindb',
          },
        ],
      },
      {
        text: '容器编排',
        children: [
          {
            text: 'Kubernetes',
            link: '/zh/reference/kubernetes/README.md',
          }
        ],
      },
      {
        text: '常用工具',
        children: [
          '/zh/reference/tools/docker.md',
          '/zh/reference/tools/kubeadm.md',
          '/zh/reference/tools/kubectl.md',
          '/zh/reference/tools/helm.md',
          '/zh/reference/tools/helm-push.md',
          '/zh/reference/tools/helm-chartmuseum.md',
          '/zh/reference/tools/harbor.md',
        ],
      },
    ],
  },

  {
    text: '了解更多',
    children: [
     
      {
        text: 'DolphinDB',
        children: [
          {
            text: 'DolphinDB 官网',
            link:'https://www.dolphindb.cn/',
          },
        ],
      },

      {
        text: 'DolphinDB 稳定版',
        children: [
          {
            text: 'DolphinDB 稳定版手册',
            link: 'https://www.dolphindb.cn/cn/help/130/index.html',
          },
          {
            text: 'DolphinDB 稳定版配置',
            link: 'https://www.dolphindb.cn/cn/help/130/DatabaseandDistributedComputing/Configuration/StandaloneMode.html',
          },
          {
            text: 'DolphinDB 稳定版集群配置',
            link: 'https://www.dolphindb.cn/cn/help/130/DatabaseandDistributedComputing/Configuration/ClusterMode.html',
          },
        ],
      },
      {
        text: 'DolphinDB Beta版',
        children: [
          {
            text: 'DolphinDB Beta版手册',
            link: 'https://www.dolphindb.cn/cn/help/200/index.html#',
          },
          {
            text: 'DolphinDB Beta版配置',
            link: 'https://www.dolphindb.cn/cn/help/200/DatabaseandDistributedComputing/Configuration/StandaloneMode.html',
          },
          {
            text: 'DolphinDB Beta版集群配置',
            link: 'https://www.dolphindb.cn/cn/help/200/DatabaseandDistributedComputing/Configuration/ClusterMode.html',
          },
        ],
      },
    ],
  },
]