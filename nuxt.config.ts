// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  experimental: {
    appManifest: false,
  },
  hooks: {
    'nitro:config'(nitroConfig) {
      // Ensure `prerender` exists
      if (!nitroConfig.prerender) {
        nitroConfig.prerender = { routes: [] };
      }

      // Ensure `routes` array exists
      nitroConfig.prerender.routes = nitroConfig.prerender.routes ?? [];

      // Add the baseURL prefix to dynamically added routes
      const baseURL = '/LINETravelBookingApp';
      const dynamicRoutes = ['/', '/en-US', '/zh-CN', '/zh-TW'].map(
        (route) => `${baseURL}${route}`
      );

      for (const route of dynamicRoutes) {
        if (!nitroConfig.prerender.routes.includes(route)) {
          nitroConfig.prerender.routes.push(route);
        }
      }
    },
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
    prerender: {
      crawlLinks: false,
      failOnError: false,
      routes: [
        '/LINETravelBookingApp/',         // 根路由（通常是重定向）
        '/LINETravelBookingApp/en-US',       // 英文首頁
        '/LINETravelBookingApp/zh-CN',    // 中文首頁
        '/LINETravelBookingApp/zh-TW',       // 法文首頁（如果支持）
      ],
    }
  }
})