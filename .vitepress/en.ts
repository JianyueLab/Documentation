import { defineConfig } from "vitepress";

export const en = defineConfig({
    themeConfig: {
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
        },

        editLink: {
            pattern: 'https://github.com/JianyueLab/Documentation/edit/master/:path',
            text: 'Edit this page on GitHub',
        },
    },
})