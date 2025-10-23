<template>
  <v-app-bar
    height="70"
    elevation="2"
    :style="{
      background: 'linear-gradient(90deg, #8B1C13 0%, #DDAF3A 100%)',
    }"
  >
    <v-container class="d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <v-icon color="warning" size="36" class="me-2">mdi-school</v-icon>
        <span class="text-h6 text-white font-weight-bold">ITCA+</span>
      </div>

      <div>
        <v-btn
          v-for="link in links"
          :key="link.text"
          :to="link.to"
          variant="text"
          class="text-white text-uppercase font-weight-bold mx-2"
          :style="{
            textShadow: '0 0 3px rgba(0,0,0,0.3)',
            opacity: $route.path === link.to ? 1 : 0.9,
            borderBottom: $route.path === link.to ? '3px solid #FFD54F' : 'none',
          }"
        >
          {{ link.text }}
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      links: [
        { text: 'Inicio', to: '/' },
        { text: 'Carreras', to: '/carreras' },
        { text: 'Noticias', to: '/noticias' },
        { text: 'Campus', to: '/campus' },
        { text: 'Eventos', to: '/eventos' },
        { text: 'Contacto', to: '/contacto' },
      ],
    }
  },
}
</script>
