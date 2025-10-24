<template>
  <v-main>
    <v-container class="py-10">
      <h1 class="text-h4 font-weight-bold mb-2">Calendario de Eventos</h1>
      <p class="text-medium-emphasis mb-6">Explora talleres, ferias, Open house, admisiones y más.</p>

      <EventCalendar />

      <v-divider class="my-8" />

      <h2 class="text-h5 font-weight-bold mb-4">Eventos Destacados</h2>
      <v-row>
        <v-col cols="12" md="4" v-for="(e,i) in destacados" :key="i">
          <v-card>
            <v-img :src="e.img" height="150" cover />
            <v-card-title>{{ e.titulo }}</v-card-title>
            <v-card-subtitle>{{ e.fecha }}</v-card-subtitle>
            <v-card-text>{{ e.desc }}</v-card-text>
            <v-card-actions>
              <v-btn color="primary" text>Detalles</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import EventCalendar from '@/components/EventCalendar.vue'
export default {
  name: 'EventosView',
  components: { EventCalendar },
  data() {
    const img = require('@/assets/tech.jpg')
    return {
      destacados: [
        { titulo: 'Feria de Empleo 2025', fecha: '25 Oct 2025', desc: 'Empresas de tecnología y manufactura.', img },
        { titulo: 'Hackatón Universitario', fecha: '02 Nov 2025', desc: '48 horas de innovación.', img },
        { titulo: 'Semana de la Ciencia', fecha: '10 Nov 2025', desc: 'Charlas, pósters y talleres.', img },
      ],
    }
  },
}
</script>
