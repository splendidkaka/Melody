import { defineConfig } from 'vitepress'
import { getSideBarList } from './utils'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Franted Study Notes",
  description: "This is my VitePress demo project",
  // appearance: false,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/vueD.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'stylesheet', href: 'https://lksrctest03.lkcoffee.com/static/layui/css/layui.css' }],
    ['script', { src: 'https://lguardbetest03.lkcoffee.com/static/lguard-sdk-20240419.js' }],
    ['script', {}, `
      console.log('window', window);
      console.log('document', document);
      `
    ]
  ],
  themeConfig: {
    logo: '/index2.png',
    siteTitle: '前台服务员指导手册',
    search: {
      provider: 'local'
    },
    outline: {
      // level: [1, 3],
      label: '目录'
    },
    nav: [
      {
        text: '基础',
        link: '/basic/basic/ComputerBase'
      },
      {
        text: '面试',
        link: '/interview/basic/ComputerBase'
      },  
      {
        text: '实战教学篇',
        items: [
          {
            text: '原生 JS 开发',
            link: '/teach/index'
          },
          {
            text: 'Vue',
            link: '/vue/basic/introduce'
          },
          {
            text: 'React',
            link: '/interview/html/basic1'
          }
        ]
      }
    ],
    sidebar: {
      'basic': getSideBarList('/basic'),
      // 'api': getSideBarList('/api'),
      // 'core': getSideBarList('/core'),
      'interview': getSideBarList('/interview'),
      'vue': getSideBarList('/vue'),
      // 'summarize': getSideBarList('/summarize'),
      // 'team': getSideBarList('/team'),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/splendidkaka' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present melodyKira'
    }
  }
})
