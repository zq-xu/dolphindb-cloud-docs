import type { HeadConfig } from '@vuepress/core'

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `/dolphindb-cloud-docs/images/icons/favicon-16x16.png`,
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `/dolphindb-cloud-docs/images/icons/favicon-32x32.png`,
    },
  ],
  ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
  ['meta', { name: 'application-name', content: 'VuePress' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  [
    'link',
    { rel: 'apple-touch-icon', href: `/dolphindb-cloud-docs/images/icons/apple-touch-icon.png` },
  ],
  [
    'link',
    {
      rel: 'mask-icon',
      href: '/dolphindb-cloud-docs/images/icons/safari-pinned-tab.svg',
      color: '#1097e5',
    },
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#1097e5' }],
  ['meta', { name: 'theme-color', content: '#1097e5' }],
]
