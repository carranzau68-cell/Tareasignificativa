<template>
  <v-app>
    <AppNavbar />
    <router-view />
    <AppFooter />
  </v-app>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: { AppNavbar, AppFooter },
}
</script>

<style>
body {
  /* 🎨 Fondo degradado institucional ITCA */
  background: linear-gradient(135deg, #8B1C13, #DDAF3A, #E67418);
  background-size: 300% 300%;
  animation: gradientShift 15s ease infinite;
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

/* 🌈 Animación de movimiento del gradiente */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* ⚙️ Asegura contraste en Vuetify contenedores */
.v-main,
.v-container {
  background-color: rgb(139, 28, 19);
  backdrop-filter: blur(6px);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding-bottom: 32px;
  margin-top: 16px;
}

/* ✨ Ajustes globales para texto y links */
h1, h2, h3, h4, h5, h6 {
  color: #8B1C13;
  font-weight: 700;
}

a {
  color: #E67418;
  text-decoration: none;
}

a:hover {
  color: #DDAF3A;
}

/* Elimina el scroll lateral si existiera */
html, body {
  overflow-x: hidden;
}
.v-application--wrap {
  background: transparent !important;
}

.v-main {
  padding-top: 0 !important;
  background: transparent !important;
}

</style>
