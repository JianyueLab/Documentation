import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Docs - JianyueLab",
  description: "The documetation of JianyueLab",
  lastUpdated: true,

  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/",
    },
    zh_cn: {
      label: "简体中文",
      lang: "zh",
      link: "/zh/",
    },
  },

  themeConfig: {
    logo: '/favicon.ico',

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Discord Bot',
        items: [
          { text: 'JianyueBot', link: '/JianyueBot/' },
          { text: 'MCSM-Discord-Bot', link: '/MCSM-Discord-Bot/'},
        ],
      },
    ],

    sidebar: {
      '/JianyueBot/': [{
        text: 'JianyueBot',
        items: [
          { text: 'Introduction', link: '/JianyueBot/' },
          { text: 'Quickstart', link: '/JianyueBot/quickstart' },
          { text: 'Registrars', link: '/JianyueBot/registrars' },
        ]
      }],
      
      '/MCSM-Discord-Bot/': [{
        text: 'MCSM-Discord-Bot',
        items: [
          { text: 'Introduction', link: '/MCSM-Discord-Bot/' },
          { text: 'Quickstart', link: '/MCSM-Discord-Bot/quickstart '},
        ]
      }],

      '/zh/MCSM-Discord-Bot/': [{
        text: 'MCSM-Discord-Bot',
        items: [
          { text: '简介', link: '/zh/MCSM-Discord-Bot/' },
          { text: '快速开始', link: '/zh/MCSM-Discord-Bot/quickstart '},
        ]
      }]
    },
    
    editLink: {
      pattern: 'https://github.com/JianyueLab/Documentation/edit/master/:path'
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JianyueLab/Documentation' },
      { icon: 'discord', link: 'https://discord.gg/4PK5Rztq' },
    ]
  }
})
