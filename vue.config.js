const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack:{
    output: {
      libraryTarget: 'system',
    },
  },

  transpileDependencies: [
    'vuetify'
  ],

  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true
    }
  }
})
