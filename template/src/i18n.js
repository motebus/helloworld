import Vue from 'vue'
import VueI18n from 'vue-i18n'
export let i18n
let curLocal = 'en'

Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[a-z0-9]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([a-z0-9]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})


export function setLang (lang) {
  curLocal = lang
  i18n.locale = curLocal
  localStorage.setItem('scLang', curLocal)
}
export function getLang () {
  return curLocal
}
