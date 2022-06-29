import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

import App from './App.vue'
import routes from 'virtual:generated-pages'

const router = createRouter({
    history: createWebHashHistory(),
    routes
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
