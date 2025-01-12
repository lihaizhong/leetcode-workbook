import { defineConfig } from 'vitepress'
import path from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LeetCodeBook",
  description: "算法练习册",
  assetsDir: '/vite_assets',
  outDir: path.join(process.cwd(), 'dist'),
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '目录',

    nav: [
      { text: '主页', link: '/' },
      { text: '算法', link: '/algorithm/' },
      { text: '设计模式', link: '/design-pattern/' }
    ],

    sidebar: {
      '/algorithm/': [
        {
          text: '算法',
          items: [
            { text: '十大排序算法', link: '/algorithm/十大排序算法' },
            { text: '动态规划算法', link: '/algorithm/动态规划算法' },
            { text: '洗牌算法', link: '/algorithm/洗牌算法' },
            { text: '两数之和', link: '/algorithm/两数之和' },
            { text: '两数相加', link: '/algorithm/两数相加' },
          ]
        }
      ],
      '/design-pattern/': [
        {
          text: '设计模式',
          items: []
        }
      ],
      '/others/': [
        {
          text: '其它',
          items: [
            { text: '字节与字符的区别', link: '/others/字节与字符的区别' },
            { text: '位运算', link: '/others/位运算' }
          ]
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
