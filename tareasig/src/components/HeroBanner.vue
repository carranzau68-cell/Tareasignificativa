<template>
  <v-parallax
    src="@/assets/hero.jpg"
    height="650"
    gradient="to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)"
  >
    <div class="d-flex flex-column align-center justify-center h-100 text-center">
      <h1 class="text-h2 font-weight-bold text-white mb-4 animate__animated animate__fadeInDown">
        Instituto Tecnológico del Futuro 🚀
      </h1>
      <p class="text-h6 text-white opacity-90 mb-6 animate__animated animate__fadeInUp">
        Formación técnica con innovación y visión global
      </p>
      <v-btn color="secondary" size="large" rounded="xl" class="animate__animated animate__fadeInUp animate__delay-1s">
        Explorar Carreras
      </v-btn>
    </div>
  </v-parallax>
</template>

<script>
export default { name: 'HeroBanner' }
</script>
