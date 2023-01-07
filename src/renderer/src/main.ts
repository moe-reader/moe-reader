import { createApp, Component, App } from 'vue'
import MainApp from './App.vue'
import i18next from '../../locales'
import i18NextVue from 'i18next-vue'
import { router } from './router'
import { createPinia } from 'pinia'
import '@vueuse/shared'
import 'uno.css'

const pinia = createPinia()

function initVueApp(App: Component): App {
  return createApp(App).use(i18NextVue, { i18next }).use(router).use(pinia)
}

initVueApp(MainApp).mount('#app')
