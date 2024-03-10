import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Docs - JianyueLab",
  description: "The documetation of JianyueLab",
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.ico',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'JianyueBot', link: '/JianyueBot/' }
    ],

    sidebar: {
      '/JianyueBot': [{
        text: 'JianyueBot Documentation',
        items: [
          { text: 'Introduction', link: '/JianyueBot/' },
          { text: 'QuickStart', link: '/JianyueBot/QuickStart' },
          { text: 'Registrars', link: '/JianyueBot/Registrars' },
        ]
      }]
    },
    
    editLink: {
      pattern: 'https://github.com/JianyueLab/Documentation/edit/main/:path'
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
