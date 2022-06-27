import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import routes from 'virtual:generated-pages'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const pinia = createPinia()

const messages = Object.fromEntries(
    Object.entries(
        import.meta.globEager('../locales/*.y(a)?ml'))
        .map(([key, value]) => {
            const yaml = key.endsWith('.yaml')
            return [key.slice(14, yaml ? -5 : -4), value.default]
        }),
)

const i18n = createI18n({
    legacy: false,
    locale: 'pl',
    messages,
})

createApp(App)
    .use(router)
    .use(pinia)
    .use(i18n)
    .mount('#app')
