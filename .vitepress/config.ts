import { defineConfig } from 'vitepress'
import { en } from './en'
import { zh_cn } from './zh_cn'

export default defineConfig({
  title: "Docs - JianyueLab",
  description: "The documetation of JianyueLab",
  lastUpdated: true,

  locales: {
    root: {
      label: "English",
      lang: "en-us",
      link: "/",
      ...en
    },
    zh_cn: {
      label: "简体中文",
      lang: "zh-hans",
      link: "/zh_cn/",
      ...zh_cn
    },
  },

  themeConfig: {
    logo: '/favicon.ico',

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JianyueLab/Documentation' },
      { icon: 'discord', link: 'https://discord.gg/4PK5Rztq' },
    ]
  }
})
