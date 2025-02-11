import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/TaleCraftDoc/",
  title: "TaleCraft",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Term of Use', link: '/TermOfUse' },
      { text: 'Privacy', link: '/Privacy' }
    ],

    footer: {
      copyright: 'Copyright © 2023 Ge Peng'
    },

//    sidebar: [
//      {
//        text: 'Examples',
//        items: [
//          { text: 'Markdown Examples', link: '/markdown-examples' },
//          { text: 'Runtime API Examples', link: '/api-examples' }
//        ]
//      }
//    ],

//    socialLinks: [
//      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//    ]
  }
})
