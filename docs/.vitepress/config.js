module.exports = {
  title: 'VitePress',
  description: 'Life is short, Keep it simple.',
  head: [
    [
      'style',
      {},
      'img { border-radius: 10px }' + 'h1.title { margin-left: 0.5em }'
    ]
  ],
  themeConfig: {
    repo: 'xinlei3166/vitepress-demo',
    docsDir: 'docs',
    docsBranch: 'master',

    // editLinks: true,
    // editLinkText: 'Suggest changes to this page',
    lastUpdated: 'Last Updated',

    nav: [
      { text: '文档', link: '/guide/' },
      { text: '组件', link: '/components/button' },
      { text: 'API 参考', link: '/api/' },
      { text: '插件', link: '/plugins/' },
      {
        text: '更新日志',
        link:
          'https://github.com/xinlei3166/vitepress-demo'
      }
    ],

    sidebar: {
      '/api/': 'auto',
      '/plugins/': 'auto',
      '/components/': getComponentsSidebar(),
      '/guide/': getGuideSidebar()
    }
  }
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
          text: 'Git学习笔记1',
          link: '/guide/Git学习笔记1'
        },
        {
          text: 'Git学习笔记2',
          link: '/guide/Git学习笔记2'
        }
      ]
    },
    {
      text: '教程',
      children: [
        {
          text: 'Git学习笔记1',
          link: '/guide/Git学习笔记1'
        },
        {
          text: 'Git学习笔记2',
          link: '/guide/Git学习笔记2'
        }
      ]
    }
  ]
}
