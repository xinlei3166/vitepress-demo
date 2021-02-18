const base = process.env.BASE || '/'

module.exports = {
  title: 'VitePress',
  description: 'Life is short, Keep it simple.',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'style',
      {},
      '.page >.container:first-child { max-width: unset !important; padding: 0 12.5rem 4rem 3rem !important;}'
    ]
  ],
  base: base,
  themeConfig: {
    repo: 'xinlei3166/vitepress-demo',
    logo: '/logo.svg',
    docsDir: 'docs',
    docsBranch: 'master',

    // editLinks: true,
    // editLinkText: 'Suggest changes to this page',
    lastUpdated: '上次更新',
    algolia: {
      apiKey: 'ca20f15eb8a667898b65d13f4213ae3d',
      indexName: 'vitepress-demo'
    },

    nav: [
      { text: '文档', link: '/guide/' },
      { text: '组件', link: '/components/button', activeMatch: getSidebarPath('^/components/') },
      { text: 'API 参考', link: '/api/' },
      { text: '插件', link: '/plugins/' },
      {
        text: '更新日志',
        link:
          'https://github.com/xinlei3166/vitepress-demo'
      }
    ],

    sidebar: {
      [getSidebarPath('/api/')]: 'auto',
      [getSidebarPath('/plugins/')]: 'auto',
      [getSidebarPath('/components/')]: getComponentsSidebar(),
      [getSidebarPath('/guide/')]: getGuideSidebar()
    }
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      // use more markdown-it plugins
      // md.use(require('markdown-it-xxx'))
      const { demoBlock, demoCode } = require('./plugins/md-loader')
      demoBlock(md)
      demoCode(md) // 代码高亮的语言默认为vue，可传入第二个参数自定义语言 demoCode(md, 'html')
    }
  }
}

// vitepress设置base后，sidebar会出现问题，手动补全path
function getSidebarPath (path) {
  return path.replace('/', base)
}

function getComponentsSidebar() {
  return [
    {
      text: '组件',
      children: [
        {
          text: 'Button 按钮',
          link: '/components/button'
        },
        {
          text: 'Tabs 标签页',
          link: '/components/tabs'
        },
        {
          text: 'Modal 对话框',
          link: '/components/modal'
        }
      ]
    }
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '指南',
      children: [
        {
          text: '文档1',
          link: '/guide/button'
        },
        {
          text: '文档2',
          link: '/guide/modal'
        }
      ]
    },
    {
      text: '教程',
      children: [
        {
          text: '教程1',
          link: '/guide/button'
        },
        {
          text: '教程2',
          link: '/guide/modal'
        }
      ]
    }
  ]
}
