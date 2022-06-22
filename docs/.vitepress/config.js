export default {
  // 将在其中部署计划站点https://foo.github.io/bar/的URL '/bar/' 斜线结尾
  base: '/note/',
  title: 'Loveyless的学习笔记', //站点标题
  description: 'Loveyless的笔记网站', // 网站的描述。这将呈现为<meta>页面 HTML 中的标签。
  lang: 'zh-CN',
  lastUpdated: true, //最近更新时间
  themeConfig: {
    //搜索 具体还没有配好
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:vue,react']
      }
    },
    // siteTitle: 'My Custom Title',
    nav: [
      {
        text: '算法',
        activeMatch: '/algorithm/', //这个还没懂有下拉的怎么搞
        link: '/algorithm/'
      }, {
        text: '菜单2',
        link: '/demo2/',
        activeMatch: '/demo2/',
      }, {
        text: '团队',
        link: '/auther/',
        activeMatch: '/auther/',
      },
    ],
    sidebar: {
      //算法
      '/algorithm/': [
        {
          text: '开始',
          items: [
            { text: '简介', link: '/algorithm/' },
          ]
        },
        {
          text: '基础算法',
          items: [
            { text: '快速排序', link: '/algorithm/quickSort.md' },
          ]
        }
      ],
      //菜单2
      '/demo2/': [
        {
          text: '开始',
          items: [
            { text: 'index', link: '/demo2/' },
          ]
        },
        // {
        //   text: 'xxx',
        //   items: [
        //     { text: 'xxx', link: '/demo2/xxx.md' },
        //   ]
        // }
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