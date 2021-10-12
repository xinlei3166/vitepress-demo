const base = process.env.BASE || '/'
const nav = require('./configs/nav')
const sidebar = require('./configs/sidebar')

module.exports = {
  title: 'VitePress',
  description: 'Life is short, Keep it simple.',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],
  base: base,
  themeConfig: {
    repo: 'xinlei3166/vitepress-demo',
    logo: '/logo.svg',
    docsDir: 'docs',
    docsBranch: 'master',

    algolia: {
      appId: 'X51HWTCQJJ',
      apiKey: 'ca20f15eb8a667898b65d13f4213ae3d',
      indexName: 'vitepress-demo'
    },

    // nav
    nav,

    // sidebar
    sidebar,

    // page meta
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    }
  }
}
