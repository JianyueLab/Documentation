import { defineConfig } from 'vitepress'

export const zh_cn = defineConfig({
    themeConfig: {
        nav: [
            { text: '首页', link: '/zh_cn/' },
            {
                text: 'Discord Bot',
                items: [
                { text: 'MCSM-Discord-Bot', link: '/zh_cn/MCSM-Discord-Bot/'},
                ],
            },
        ],

        sidebar: {
            '/zh_cn/MCSM-Discord-Bot/': [{
                base: '/zh_cn/MCSM-Discord-Bot/',
                text: 'MCSM-Discord-Bot',
                items: [
                { text: '简介', link: '/' },
                { text: '快速开始', link: 'quickstart '},
                ]
            }]
        },

        editLink: {
            pattern: 'https://github.com/JianyueLab/Documentation/edit/master/:path',
            text: '在 GitHub 修改此页面',
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
          },
      
        outline: {
            label: '页面导航'
        },
    
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },
    },
})