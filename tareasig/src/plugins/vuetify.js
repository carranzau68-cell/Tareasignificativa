// src/plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  theme: {
    defaultTheme: 'itcaTheme',
    themes: {
      itcaTheme: {
        dark: false,
        colors: {
          primary: '#8B1C13',   // rojo institucional
          secondary: '#E67418', // naranja cálido
          accent: '#DDAF3A',    // dorado suave
          background: '#FFF8E6',
          surface: '#FFFFFF',
          info: '#FFB300',
          warning: '#FBC02D',
          success: '#43A047',
          error: '#B71C1C',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
})
