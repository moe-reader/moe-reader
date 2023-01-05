import i18next from 'i18next'

import zhRenderer from './zh-CN/renderer.json'
import enRenderer from './en/renderer.json'

// init i18n
const resources = {
  zh: {
    default: zhRenderer
  },
  en: {
    default: enRenderer
  }
}

i18next.init({
  lng: 'zh',
  debug: true,
  resources,
  defaultNS: 'default'
})

export default i18next
