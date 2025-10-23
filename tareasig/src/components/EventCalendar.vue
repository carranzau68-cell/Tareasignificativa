<template>
  <v-container class="py-6">
    <v-row>
      <v-col cols="12" md="5">
        <v-date-picker v-model="fecha" color="primary" show-adjacent-months />
      </v-col>
      <v-col cols="12" md="7">
        <h2 class="text-h6 font-weight-bold mb-3">Eventos — {{ formatear(fecha) }}</h2>
        <v-table density="comfortable">
          <thead>
            <tr>
              <th>Hora</th>
              <th>Título</th>
              <th>Ubicación</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(e,i) in eventosDelDia" :key="i">
              <td>{{ e.hora }}</td>
              <td>{{ e.titulo }}</td>
              <td>{{ e.ubicacion }}</td>
              <td><v-chip size="x-small" variant="tonal">{{ e.tipo }}</v-chip></td>
            </tr>
            <tr v-if="!eventosDelDia.length">
              <td colspan="4" class="text-center text-medium-emphasis py-6">Sin eventos</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'EventCalendar',
  data() {
    const hoy = new Date().toISOString().slice(0, 10)
    return {
      fecha: hoy,
      eventos: {
        [hoy]: [
          { hora: '09:00', titulo: 'Charla IA', ubicacion: 'Auditorio', tipo: 'Académico' },
          { hora: '11:00', titulo: 'Taller Vue', ubicacion: 'Lab 3', tipo: 'Taller' },
        ],
      },
    }
  },
  computed: {
    eventosDelDia() {
      return this.eventos[this.fecha] || []
    },
  },
  methods: {
    formatear(iso) {
      const d = new Date(iso)
      return d.toLocaleDateString()
    },
  },
}
</script>
