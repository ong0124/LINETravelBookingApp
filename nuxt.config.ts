// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  experimental: {
    appManifest: false,
  },
  modules: [
    '@ant-design-vue/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
  ],
  
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
      {
        code: "zh-CN",
        iso: "zh-CN",
        name: "简体中文",
        file: "zh-CN.json",
      },
      {
        code: "zh-TW",
        iso: "zh-TW",
        name: "繁體中文",
        file: "zh-TW.json",
      },
    ],
    defaultLocale: "zh-TW",
  },

  app: {
    baseURL: '/LINETravelBookingApp/', // 确保路径正确
    buildAssetsDir: '/_nuxt/', // 静态资源路径
  },
  vite: {
    resolve: {
      alias: {
        '@/': `${__dirname}/`,
        '~': `${__dirname}`, // 将 `@/` 映射为项目根目录
      },
    },
  },
  nitro: {
    storage: {
      cache: {
        driver: 'fs', // 文件系統作為緩存驅動
        base: './.nitro/cache', // 設定緩存文件的基準路徑
      },
    },
  },
})