<template>
  <v-footer
    height="auto"
    class="py-8"
    :style="{ background: 'linear-gradient(90deg, #5B0A07, #8B1C13)' }"
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="text-white">
          <h3 class="text-h6 font-weight-bold mb-2 text-warning">ITCA+</h3>
          <p class="text-body-2">Educación técnica orientada a la innovación y el futuro.</p>
        </v-col>

        <v-col cols="12" md="4" class="text-white">
          <h3 class="text-h6 font-weight-bold mb-2 text-warning">Enlaces</h3>
          <v-list density="compact" nav>
            <v-list-item v-for="link in links" :key="link.text" :to="link.to" class="text-white">
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
          <h3 class="text-h6 font-weight-bold mb-2 text-warning">Síguenos</h3>
          <v-btn icon="mdi-facebook" variant="text" class="text-warning"></v-btn>
          <v-btn icon="mdi-instagram" variant="text" class="text-warning"></v-btn>
          <v-btn icon="mdi-youtube" variant="text" class="text-warning"></v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-4" color="accent" />
      <p class="text-center text-white text-caption mb-0">
        © {{ new Date().getFullYear() }} ITCA+ — Todos los derechos reservados.
      </p>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      links: [
        { text: 'Inicio', to: '/' },
        { text: 'Carreras', to: '/carreras' },
        { text: 'Noticias', to: '/noticias' },
        { text: 'Contacto', to: '/contacto' },
      ],
    }
  },
}
</script>
