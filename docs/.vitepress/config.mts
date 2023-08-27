import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LeetCodeBook",
  description: "算法练习册",
  // assetsDir: '/.vitepress/assets',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '目录',

    nav: [
      { text: '主页', link: '/' },
      { text: '算法', link: '/algorithm/' },
      { text: '设计模式', link: '/design-pattern/' },
      { text: '案例', link: '/examples/' }
    ],

    sidebar: {
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/examples/markdown' },
            { text: 'Runtime API Examples', link: '/examples/api' }
          ]
        }
      ],
      '/algorithm/': [
        {
          text: '算法',
          items: [
            { text: '两数之和', link: '/algorithm/两数之和' },
            { text: '两数相加', link: '/algorithm/两数相加' }
          ]
        }
      ],
      '/design-pattern/': [
        {
          text: '设计模式',
          items: []
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lihaizhong' }
    ],

    search: {
      provider: 'local'
    }
  }
})
