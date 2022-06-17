export default {
  // 将在其中部署计划站点https://foo.github.io/bar/的URL '/bar/' 斜线结尾
  base: '/docs/',
  title: 'Loveyless的笔记', //站点标题
  description: 'Loveyless的笔记网站', // 网站的描述。这将呈现为<meta>页面 HTML 中的标签。
  lang: 'zh-CN',
  lastUpdated: true, //最近更新时间
  themeConfig: {
    nav: [ //上方导航
      { text: '主页', link: '/index' },
      // { text: 'xxx', link: 'xxx' }
    ],
    sidebar: [ //侧边栏
      {
        text: '框架库笔记',
        items: [
          { text: 'vue3', link: '/framework/天禹vue3笔记/天禹vue3笔记.md' }
        ],
        collapsible: true, //折叠
        collapsed: true, //默认打开？
      }
    ]

  }
}
