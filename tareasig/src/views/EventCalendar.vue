<template>
  <v-container class="py-6">
    <v-row>
      <v-col cols="12" md="5">
        <v-date-picker v-model="fecha" color="primary" show-adjacent-months></v-date-picker>
      </v-col>
      <v-col cols="12" md="7">
        <div class="d-flex align-center mb-3">
          <h2 class="text-h6 font-weight-bold me-3">Eventos — {{ formatear(fecha) }}</h2>
          <v-spacer />
          <v-text-field
            v-model="q"
            density="compact"
            hide-details
            prepend-inner-icon="mdi-magnify"
            placeholder="Buscar evento"
            style="max-width: 260px"
          />
        </div>

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
            <tr v-for="(e,i) in eventosFiltrados" :key="i">
              <td>{{ e.hora }}</td>
              <td>{{ e.titulo }}</td>
              <td>{{ e.ubicacion }}</td>
              <td><v-chip size="x-small" variant="tonal">{{ e.tipo }}</v-chip></td>
            </tr>
            <tr v-if="!eventosFiltrados.length">
              <td colspan="4" class="text-center text-medium-emphasis py-6">Sin eventos para esta fecha.</td>
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
      q: '',
      eventos: {
        // yyyy-mm-dd : []
        [hoy]: [
          { hora: '09:00', titulo: 'Charla: Introducción a IA', ubicacion: 'Auditorio A', tipo: 'Académico' },
          { hora: '11:30', titulo: 'Taller Dev: Vue + Vuetify', ubicacion: 'Lab 3', tipo: 'Taller' },
          { hora: '14:00', titulo: 'Reunión Club Robótica', ubicacion: 'Sala B', tipo: 'Club' },
        ],
        '2025-10-25': [
          { hora: '08:00', titulo: 'Feria de Empleo', ubicacion: 'Plaza Central', tipo: 'Eventos' },
          { hora: '10:30', titulo: 'Prueba de Admisión', ubicacion: 'Aulas 2', tipo: 'Admisión' },
        ],
      },
    }
  },
  computed: {
    eventosDelDia() {
      return this.eventos[this.fecha] || []
    },
    eventosFiltrados() {
      const q = this.q.trim().toLowerCase()
      if (!q) return this.eventosDelDia
      return this.eventosDelDia.filter(e =>
        [e.titulo, e.ubicacion, e.tipo].some(t => t.toLowerCase().includes(q))
      )
    },
  },
  methods: {
    formatear(iso) {
      const d = new Date(iso)
      return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
    },
  },
}
</script>
