import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

import App from './App.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: setupLayouts(generatedRoutes),
})

const pinia = createPinia()

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})

createApp(App)
  .use(router)
  .use(pinia)
  .use(i18n)
  .mount('#app')
