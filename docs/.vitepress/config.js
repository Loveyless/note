export default {
  // 将在其中部署计划站点https://foo.github.io/bar/的URL '/bar/' 斜线结尾
  // base: '/docs/',
  title: 'Loveyless', //站点标题
  description: 'Loveyless的笔记网站', // 网站的描述。这将呈现为<meta>页面 HTML 中的标签。
  lang: 'zh-CN',
  lastUpdated: true, //最近更新时间
  themeConfig: {
    // siteTitle: 'My Custom Title',
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:vue,react']
      }
    },
    nav: [
      {
        text: '学习笔记',
        // activeMatch: '/vue/', //这个还没懂有下拉的怎么搞
        // activeMatch: `*/framework/*`,
        items: [
          {
            text: '框架', items: [
              { text: 'Vue', link: '/framework/vue/index.md', },
              { text: 'React', link: '/framework/react/index.md', },
            ]
          }, {
            text: '后台', items: [
              { text: 'Express', link: '/backend/express/index.md', },
              { text: 'MySql', link: '/backend/mysql/index.md', },
            ]
          }
        ]
      }
    ],
    sidebar: {
      '/framework/vue/': [
        {
          text: '开始',
          items: [
            { text: '简介', link: '/framework/vue/index.md' },
          ]
        },
        {
          text: '基础',
          items: [
            { text: 'test', link: '/framework/vue/test.md' },
          ]
        }
      ],
      '/framework/react/': [
        {
          text: '开始',
          items: [
            { text: 'index', link: '/framework/react/index.md' },
          ]
        },
        {
          text: 'xxx',
          items: [
            { text: 'xxx', link: '/framework/react/xxx.md' },
          ]
        }
      ],
      '/backend/express/': [
        { text: 'index', link: '/backend/express/index.md' }
      ],
      '/backend/mysql/': [
        { text: 'index', link: '/backend/mysql/index.md' }
      ]
    },
    socialLinks: [ //社交帐号的logo 您可以自定义socialLinks选项以显示图标的社交帐户链接。
      { icon: 'github', link: 'https://github.com/Loveyless' },
    ],
    editLink: { //在 GitHub 上编辑此页面
      text: '在 GitHub 上编辑此页面',
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    },
  }
}