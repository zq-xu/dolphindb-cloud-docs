import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      // collapsible: true,
      children: [
        '/zh/guide/README.md',
        '/zh/guide/installer.md',
        '/zh/guide/kubernetes.md',
        '/zh/guide/docker-compose.md',
        '/zh/guide/public-cloud.md',
        '/zh/guide/roadmap.md',
      ],
    },
  ],

  '/zh/reference/tools/': [
    {
      text: '常用工具',
      children: [
        '/zh/reference/tools/helm.md',
        '/zh/reference/tools/harbor.md',
      ],
    },
  ],

  '/zh/reference/docker/': [
    {
      text: 'Docker',
      // collapsible: true,
      children: [
        '/zh/reference/docker/README.md',
        '/zh/reference/docker/installer.md',
      ],
    },
  ],

  '/zh/reference/kubernetes/': [
    {
      text: 'Kubernetes',
      // collapsible: true,
      children: [
        '/zh/reference/kubernetes/README.md',
        '/zh/reference/kubernetes/installer.md',
      ],
    },
  ],
  
  '/zh/reference/docker-compose/': [
    {
      text: 'Docker Compose',
      // collapsible: true,
      children: [
        '/zh/reference/docker-compose/README.md',
        '/zh/reference/docker-compose/installer.md',
      ],
    },
  ],

  '/zh/reference/dolphindb-mgr/': [
    {
      text: 'DolphinDB MGR',
      children: [
        '/zh/reference/dolphindb-mgr/README.md',
        '/zh/reference/dolphindb-mgr/components.md',
        '/zh/reference/dolphindb-mgr/deployment.md',
        '/zh/reference/dolphindb-mgr/configs.md',
      ],
    },
  ],

  '/zh/reference/dolphindb-chart/': [
    {
      text: 'DolphinDB Chart',
      children: [
        '/zh/reference/dolphindb-chart/README.md',
        '/zh/reference/dolphindb-chart/deployment.md',
        '/zh/reference/dolphindb-chart/configs.md',
      ],
    },
  ],

}
