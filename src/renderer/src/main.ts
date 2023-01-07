import { createApp, Component, App } from 'vue'
import MainApp from './App.vue'
import i18next from '../../locales'
import i18NextVue from 'i18next-vue'
import { router } from './router'
import 'uno.css'

function initVueApp(App: Component): App {
  return createApp(App).use(i18NextVue, { i18next }).use(router)
}

initVueApp(MainApp).mount('#app')
