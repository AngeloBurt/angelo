module.exports = {
  title: "前端文档",
  description: "前端的一些不完全文档",
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "path/to/some/dir"
      }
    }
  },
  base: "/angelo/",
  head: [
    // 设置 favor.ico，.vuepress/public 下
    [
      // "link", { rel: "icon", href: "/favicon.ico" },
      "link", { rel: "icon", href: "/image/favicon.ico" }
    ]
  ],
  lastUpdated: "Last Updated",
  themeConfig: {
    logo: "/favicon.ico",
    navbar: "auto",
    nav: [
      {
        text: "主页",
        link: "/"
      },
      {
        text: "ERP",
        link: "/erp/"
      },
      {
        text: "H5",
        link: "/h5/"
      },
      {
        text: "常用工具",
        items: [
          {
            text: "Node+Yarn",
            link: "/erp/guide/art1#nvm安装node"
          },
          {
            text: "Node",
            link: "/erp/guide/art1#node-重置镜像源"
          },
        ]
      },
      {
        text: "文档",
        items: [{
          text: "API",
          link: "/erp/rab/r01"
        },
          {
            text: "VP使用经验",
            link: "/vuepress/"
          },
        ]
      }
    ],
    sidebar: {
      "/erp/": [{
        title: "ERP",
        collapsable: false,
        children: [{
          title: "环境配置",
          path: "/erp/"
        },
          {
            title: "Others",
            path: "/erp/guide/art1"
          },
          {
            title: "other",
            path: "/erp/guide/art2"
          },
          {
            title: "配置项1",
            path: "/erp/rab/r02"
          },
          // {
          //   title: '开发注意事项',
          //   path: '/erp/rab/r02'
          // },
        ]
      }],
      "/vuepress/": [{
        title: "VuePress",
        collapsable: false,
        children: [{
          title: "基础配置",
          path: "/vuepress/"
        },
          {
            title: "一键部署-githubPages",
            path: "/vuepress/deploy"
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
    "markdown-it-bar": {
      // 提供你的选项
    }
  }
};
