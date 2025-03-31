import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    // 设置网站 logo
    logo: '/logo.png',
    // 自定义导航
    nav: [
      { title: '', link: '/' },
      { title: '版本记录', link: '/changelog' }
    ],
    // 其他主题配置
    name: 'TOUR360',
    footer: 'Copyright © 2025 360全景漫游',
  },
  // 其他 dumi 配置
  base: '/tour360/', // 仓库名称
  publicPath: '/tour360/', // 仓库名称
  favicons: ['/favicon.ico'],
});
