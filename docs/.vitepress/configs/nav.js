const { getPath } = require('./utils')

module.exports = [
  { text: '文档', link: '/guide/' },
  { text: '组件', link: '/components/button', activeMatch: getPath('^/components/') },
  { text: 'API 参考', link: '/api/' },
  {
    text: '更新日志',
    link:
      'https://github.com/xinlei3166/vitepress-demo'
  }
]
