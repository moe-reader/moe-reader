import { createApp, Component, App } from 'vue'
import MainApp from './App.vue'
import { registerMicroApps, start } from 'qiankun'
import i18next from '@/locales'
import i18NextVue from 'i18next-vue'

function initVueApp(App: Component): App {
  return createApp(App).use(i18NextVue, { i18next })
}

registerMicroApps([
  {
    name: 'vue app',
    entry: '//localhost:3001',
    container: '#sub-app',
    activeRule: '/vue'
  }
])

start()

initVueApp(MainApp).mount('#app')
