export default {
  // 将在其中部署计划站点https://foo.github.io/bar/的URL '/bar/' 斜线结尾
  base: "/note/",
  title: "Loveyless的学习笔记", //站点标题
  description: "Loveyless的笔记网站", // 网站的描述。这将呈现为<meta>页面 HTML 中的标签。
  lang: "zh-CN",
  lastUpdated: true, //最近更新时间
  themeConfig: {
    logo: '/notebook.svg',
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
        text: "数据结构与算法",
        activeMatch: "/algorithm/", //这个还没懂有下拉的怎么搞
        link: "/algorithm/",
      },
      {
        text: "TypeScript",
        activeMatch: "/typescript/", //这个还没懂有下拉的怎么搞
        link: "/typescript/",
      },
      {
        text: "Vue设计与实现",
        link: "/vue/",
        activeMatch: "/vue/",
      },
      {
        text: "常用函数",
        activeMatch: "/hooks/", //这个还没懂有下拉的怎么搞
        link: "/hooks/",
      },
      {
        text: "作者",
        link: "/auther/",
        activeMatch: "/auther/",
      },
    ],
    sidebar: {
      //算法
      "/algorithm/": [
        {
          text: "开始",
          items: [{ text: "简介", link: "/algorithm/" }],
        },
        {
          text: "数据结构",
          items: [
            { text: "栈队列", link: "/algorithm/数据结构/1.栈队列.md" },
            { text: "数组链表", link: "/algorithm/数据结构/2.数组链表.md" },
            { text: "二叉树", link: "/algorithm/数据结构/3.二叉树.md" },
          ],
        },
        {
          text: "排序",
          items: [
            { text: "综合分析", link: "/algorithm/排序/0.index.md" },
            { text: "冒泡排序", link: "/algorithm/排序/1.bubble.md" },
            { text: "快速排序", link: "/algorithm/排序/2.quick.md" },
            { text: "插入排序", link: "/algorithm/排序/3.insert.md" },
          ],
        },
        {
          text: "链表",
          items: [
            { text: "206.反转链表", link: "/algorithm/链表/206.反转链表.md" },
            { text: "141.环形链表", link: "/algorithm/链表/141.环形链表.md" },
            { text: "21.合并两个有序链表", link: "/algorithm/链表/21.合并两个有序链表.md" },
            { text: "19.删除链表的倒数第N个结点", link: "/algorithm/链表/19.删除链表的倒数第N个结点.md" },
            { text: "876.链表的中间结点", link: "/algorithm/链表/876.链表的中间结点.md" },
          ]
        },
        {
          text: "栈",
          items: [
            { text: "20.有效的括号", link: "/algorithm/栈/20.有效的括号.md" },
            { text: "232.用栈实现队列", link: "/algorithm/栈/232.用栈实现队列.md" },
            { text: "844.比较含退格的字符串", link: "/algorithm/栈/844.比较含退格的字符串.md" },
          ]
        },
        {
          text: "未分类",
          items: [
            { text: "1.两数之和", link: "/algorithm/1.两数之和.md" },
            { text: "2.两数相加", link: "/algorithm/2.两数相加.md" },
            { text: "3.无重复字符的最长子串", link: "/algorithm/3.无重复字符的最长子串.md" },
          ]
        }
      ],
      //TypeScript
      "/typescript/": [
        {
          text: "开始",
          items: [{ text: "简介", link: "/typescript/" }],
        },
        {
          text: "type-challenges",
          items: [{ text: "简单&中等 题目", link: "/typescript/type-challenges1.md" }],
        },
      ],
      //Vue设计与实现
      "/vue/": [
        {
          text: "开始",
          items: [{ text: "简介", link: "/vue/" }],
        },
        {
          text: "框架设计概览",
          items: [{ text: "权衡的艺术", link: "/vue/1权衡的艺术.md" }],
        },
      ],
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
