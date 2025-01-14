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
    '@nuxtjs/google-fonts'
  ],
  app: {
    baseURL: '/LINETravelBookingApp/', // 确保路径正确
    buildAssetsDir: '/_nuxt/', // 静态资源路径
  },
  vite: {
    resolve: {
      alias: {
        '@/': `${__dirname}/`, // 将 `@/` 映射为项目根目录
      },
    },
  },
  nitro: {
    storage: {
      cache: {
        driver: 'fs', // 使用文件系統作為緩存驅動
      },
    },
  },
})