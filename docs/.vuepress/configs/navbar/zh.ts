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
        text: 'Chart包',
        children: [
          {
            text: 'DolphinDB MGR',
            link: '/zh/tutorial/dolphindb-mgr/README.md',
          },
          {
            text: 'DolphinDB Chart',
            link: '/zh/tutorial/dolphindb-chart/README.md',
          },
      
        ],
      },
    ],
  },

  {
    text: '公有云',
    children: [
      {
        text: '亚马逊云(AWS)',
        children: [
          {
            text: 'AWS Marketplace',
            link: 'https://aws.amazon.com/marketplace/pp/prodview-6j7wqm5tobvko?sr=0-1&ref_=beagle&applicationId=AWSMPContessa',
          },
        ],
      },
      {
        text: '阿里云',
        children: [
          {
            text: '阿里云 云市场',
            link: 'https://market.aliyun.com/products/',
          },
        ],
      },
    ],
  },

  {
    text: '参考',
    children: [
      {
        text: '容器编排',
        children: [
          {
            text: 'Docker',
            link: '/zh/reference/docker/README.md',
          },
          {
            text: 'Kubernetes',
            link: '/zh/reference/kubernetes/README.md',
          },
          {
            text: 'Docker Compose',
            link: '/zh/reference/docker-compose/README.md',
          },
        ],
      },

      {
        text: '常用工具',
        children: [
          '/zh/reference/tools/helm.md',
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