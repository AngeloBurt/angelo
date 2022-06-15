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
  base: '/ange/',
  lastUpdated: 'Last Updated',
  themeConfig: {
    navbar: 'auto',
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
        text: '常用工具',
        items: [
          {
            text: 'Node+Yarn',
            link: '/erp/guide/art1#nvm安装node'
          },
          {
            text: 'Node',
            link: '/erp/guide/art1#node-重置镜像源'
          },          
        ]
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
          {
            text: 'VP野生文档',
            link: 'https://app.yinxiang.com/shard/s63/nl/37485152/f19a9fe2-cbcf-41d9-8e60-fd0eb461bf8a?title=(1%E6%9D%A1%E6%B6%88%E6%81%AF)%20vuepress%E5%85%A5%E9%97%A8%E8%AF%A6%E8%A7%A3%EF%BC%88%E5%9B%9B%EF%BC%89vuepress%20%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE_%E7%89%9B%E9%AD%94%E7%8E%8Bsq%E7%9A%84%E5%8D%9A%E5%AE%A2-CSDN%E5%8D%9A%E5%AE%A2_vuepress%E9%85%8D%E7%BD%AE'
          },

        ]
      }
    ],
    sidebar: {
      '/erp/': [{
        title: 'ERP',
        collapsable: false,
        children: [{
            title: '环境配置',
            path: '/erp/'
          },
          {
            title: 'Others',
            path: '/erp/guide/art1'
          },
          {
            title: 'other',
            path: '/erp/guide/art2'
          },
          {
            title: '配置项1',
            path: '/erp/rab/r02'
          },
          // {
          //   title: '开发注意事项',
          //   path: '/erp/rab/r02'
          // },
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