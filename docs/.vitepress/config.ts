import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Pepe Blog',
  description: 'Personal blog and resume of pepe-2026-coder',
  lang: 'zh-CN',
  base: '/blog/',
  cleanUrls: true,

  themeConfig: {
    siteTitle: 'Pepe Blog',
    logo: '/avatar.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/posts/' },
      { text: '关于', link: '/about/' },
      { text: '简历', link: '/resume/' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pepe-2026-coder' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present pepe-2026-coder'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '目录'
    }
  }
})
