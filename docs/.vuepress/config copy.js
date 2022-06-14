module.exports = {
  title: '前端文档',
  description: '前端的一些不完全文档',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  },
  base: '/',
  lastUpdated: 'Last Updated',
  themeConfig: {
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: 'ERP',
        link: '/erp/'
      },
      {
        text: 'H5',
        link: '/h5/'
      },
      {
        text: '文档',
        items: [{
            text: 'API',
            link: '/erp/rab/r01'
          },
          {
            text: 'VuePress',
            link: '/erp/rab/r02'
          },
        ]
      }
    ],
    sidebar: {
      '/erp/': [{
        title: 'ERP',
        collapsable: false,
        children: [{
            title: '配置项',
            path: '/rab/r01'
          },
          {
            title: '开发注意事项',
            path: '/rab/r02'
          },
          {
            title: '开发注意事项',
            path: '/rab/r01'
          },
        ]
      }],
      //   '/foo/': [
      //     '', /* /foo/ */
      //     // 'one',  /* /foo/one.html */
      //     // 'two'   /* /foo/two.html */
      //   ],

      //   '/bar/': [
      //     '', /* /bar/ */
      //     'three', /* /bar/three.html */
      //     'four' /* /bar/four.html */
      //   ],

      //   // fallback
      //   '/': [
      //     '', /* / */
      //     'contact', /* /contact.html */
      //     'about' /* /about.html */
      //   ]
    }
  },

  markdown: {
    lineNumbers: true,
    // markdown-it-anchor 的选项
    anchor: {
      permalink: false
    },
    // markdown-it-toc 的选项
    toc: {
      includeLevel: [1, 2]
    },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-xxx'))
    },
    'markdown-it-bar': {
      // 提供你的选项
    }
  }
}