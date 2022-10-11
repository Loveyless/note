export default {
  // 将在其中部署计划站点https://foo.github.io/bar/的URL '/bar/' 斜线结尾
  base: "/note/",
  title: "Loveyless的学习笔记", //站点标题
  description: "Loveyless的笔记网站", // 网站的描述。这将呈现为<meta>页面 HTML 中的标签。
  lang: "zh-CN",
  lastUpdated: true, //最近更新时间
  themeConfig: {
    //搜索 具体还没有配好
    algolia: {
      appKey: "",
      indexName: "",
      searchParameters: {
        faeFilters: ["tags:vue,react"],
      },
    },
    // 顶部菜单
    nav: [
      {
        text: "常用函数",
        activeMatch: "/hooks/", //这个还没懂有下拉的怎么搞
        link: "/hooks/",
      },
      {
        text: "算法",
        activeMatch: "/algorithm/", //这个还没懂有下拉的怎么搞
        link: "/algorithm/",
      },
      {
        text: "Vue设计与实现",
        link: "/vue/",
        activeMatch: "/vue/",
      },
      {
        text: "作者",
        link: "/auther/",
        activeMatch: "/auther/",
      },
    ],
    sidebar: {
      //常用函数
      "/hooks/": [
        {
          text: "开始",
          items: [{ text: "简介", link: "/hooks/" }],
        },
        {
          text: "常用函数",
          items: [{ text: "节流防抖", link: "/hooks/节流防抖.md" }],
        },
      ],
      //算法
      "/algorithm/": [
        {
          text: "开始",
          items: [{ text: "简介", link: "/algorithm/" }],
        },
        {
          text: "排序算法",
          items: [
            { text: "冒泡排序", link: "/algorithm/1.bubble.md" },
            { text: "快速排序", link: "/algorithm/2.quick.md" },
            { text: "插入排序", link: "/algorithm/3.insert.md" },
            { text: "两数之和", link: "/algorithm/4.两数之和.md" },
            { text: "无重复字符的最长子串", link: "/algorithm/6.无重复字符的最长子串.md" },
          ],
        },
      ],
      //Vue设计与实现
      "/vue/": [
        {
          text: "开始",
          items: [{ text: "简介", link: "/vue/" }],
        },
        {
          text: "1.权衡的艺术",
          items: [{ text: "1.4运行时和编译时", link: "/vue/1.4运行时和编译时.md" }],
        },
      ],
    },
    socialLinks: [
      //社交帐号的logo 您可以自定义socialLinks选项以显示图标的社交帐户链接。
      { icon: "github", link: "https://github.com/Loveyless" },
    ],
    editLink: {
      //在 GitHub 上编辑此页面
      text: "在 GitHub 上编辑此页面",
      pattern: "https://github.com/Loveyless/note/tree/gh-pages/:path",
    },
  },
};
