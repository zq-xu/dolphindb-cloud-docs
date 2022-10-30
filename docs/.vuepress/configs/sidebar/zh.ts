import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      // collapsible: true,
      children: [
        '/zh/guide/README.md',
        '/zh/guide/container-deployment.md',
        '/zh/guide/public-cloud.md',
        '/zh/guide/roadmap.md',
      ],
    },
  ],

  '/zh/tutorial/kubernetes/': [
    {
      text: 'Kubernetes',
      children: [
        '/zh/tutorial/kubernetes/dolphindb-runtime.md',
        '/zh/tutorial/kubernetes/dolphindb-deployment.md',
        '/zh/tutorial/kubernetes/crd-operator.md',
        '/zh/tutorial/kubernetes/high-availability.md',
        '/zh/tutorial/kubernetes/site-reliability.md',
        {
          text: '可视化管理平台',
          link: '/zh/tutorial/kubernetes/dolphindb-mgr/README.md',
        },
      ],
    },
  ],

  '/zh/tutorial/kubernetes/dolphindb-mgr/': [
    {
      text: 'DolphinDB MGR',
      children: [
        '/zh/tutorial/kubernetes/dolphindb-mgr/README.md',
        '/zh/tutorial/kubernetes/dolphindb-mgr/deployment.md',
        '/zh/tutorial/kubernetes/dolphindb-mgr/portal.md',
        '/zh/tutorial/kubernetes/dolphindb-mgr/component.md',
        '/zh/tutorial/kubernetes/dolphindb-mgr/env-config.md',
        '/zh/tutorial/kubernetes/dolphindb-mgr/release.md',
        '/zh/tutorial/kubernetes/dolphindb-mgr/faq.md',
      ],
    },
  ],

  '/zh/tutorial/kubernetes/dolphindb-chart/': [
    {
      text: 'DolphinDB Chart',
      collapsible: true,
      children: [
        '/zh/tutorial/kubernetes/dolphindb-chart/README.md',
        '/zh/tutorial/kubernetes/dolphindb-chart/deployment.md',
        '/zh/tutorial/kubernetes/dolphindb-chart/configs.md',
      ],
    },
  ],

  '/zh/tutorial/public-cloud/': [
    {
      text: '公有云平台',
      children: [
        '/zh/tutorial/public-cloud/aws.md',
        '/zh/tutorial/public-cloud/alibaba-cloud.md',
      ],
    },
  ],

  '/zh/reference/kubernetes/': [
    {
      text: 'Kubernetes',
      // collapsible: true,
      children: [
        '/zh/reference/kubernetes/README.md',
        '/zh/reference/kubernetes/installer-config.md',
        '/zh/reference/kubernetes/crd-operator.md',
        '/zh/reference/kubernetes/rbac.md',
      ],
    },
  ],
  
  '/zh/reference/kubernetes/installer/': [
    {
      text: 'Kubernetes安装',
      // collapsible: true,
      children: [
        '/zh/reference/kubernetes/installer/minikube.md',
        '/zh/reference/kubernetes/installer/kubernetes-cluster.md',
        '/zh/reference/kubernetes/installer/kubernetes-cluster-ha.md',
      ],
    },
    {
      text: 'CSI安装',
      // collapsible: true,
      children: [
        '/zh/reference/kubernetes/installer/csi-localpath.md',
        '/zh/reference/kubernetes/installer/csi-ceph.md',
        '/zh/reference/kubernetes/installer/csi-nfs.md',
      ],
    },
    {
      text: 'CNI安装',
      // collapsible: true,
      children: [
        '/zh/reference/kubernetes/installer/cni-calico.md',
        '/zh/reference/kubernetes/installer/cni-cilium-ebpf.md',
      ],
    },
  ],

  '/zh/reference/tools/': [
    {
      text: '常用工具',
      // collapsible: true,
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

}
