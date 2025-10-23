<template>
  <v-main>
    <v-container class="py-10">
      <div class="d-flex align-center mb-6">
        <h1 class="text-h4 font-weight-bold me-4">Noticias</h1>
        <v-spacer />
        <v-text-field
          v-model="q"
          prepend-inner-icon="mdi-magnify"
          label="Buscar noticia"
          density="comfortable"
          hide-details
          style="max-width: 320px"
        />
      </div>

      <v-row>
        <v-col v-for="n in noticiasPaginadas" :key="n.id" cols="12" md="4">
          <v-card elevation="4">
            <v-img :src="n.imagen" height="160" cover />
            <v-card-title>{{ n.titulo }}</v-card-title>
            <v-card-subtitle>{{ n.fecha }}</v-card-subtitle>
            <v-card-text>{{ n.descripcion }}</v-card-text>
            <v-card-actions>
              <v-btn color="secondary" size="small" text>Leer más</v-btn>
              <v-spacer />
              <v-chip size="x-small" variant="tonal">{{ n.categoria }}</v-chip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <div class="d-flex justify-center mt-6">
        <v-pagination v-model="page" :length="totalPages" total-visible="7" />
      </div>
    </v-container>
  </v-main>
</template>

<script>
const IMGS = {
  tech: require('@/assets/tech.jpg'),
  lab: require('@/assets/lab.jpg'),
  campus: require('@/assets/campus.jpg'),
}
export default {
  name: 'NoticiasView',
  data: () => ({
    q: '',
    page: 1,
    perPage: 6,
    noticias: [
      { id: 1, titulo: 'Nuevo laboratorio de IA', fecha: '2025-10-10', categoria: 'Innovación', descripcion: 'Se inauguró un espacio de IA aplicada con GPUs dedicadas.', imagen: IMGS.tech },
      { id: 2, titulo: 'Feria de Empleo 2025', fecha: '2025-10-05', categoria: 'Eventos', descripcion: 'Más de 40 empresas participaron con vacantes técnicas.', imagen: IMGS.campus },
      { id: 3, titulo: 'Semana de la Ciencia', fecha: '2025-09-28', categoria: 'Académico', descripcion: 'Charlas y talleres sobre investigación aplicada.', imagen: IMGS.lab },
      { id: 4, titulo: 'Convenio internacional', fecha: '2025-09-20', categoria: 'Alianzas', descripcion: 'Programas de intercambio con universidades europeas.', imagen: IMGS.campus },
      { id: 5, titulo: 'Hackatón estudiantil', fecha: '2025-09-12', categoria: 'Competencias', descripcion: '48 horas resolviendo retos reales de la industria.', imagen: IMGS.tech },
      { id: 6, titulo: 'Becas de Excelencia', fecha: '2025-09-06', categoria: 'Becas', descripcion: 'Nuevos fondos para estudiantes destacados.', imagen: IMGS.campus },
      { id: 7, titulo: 'Actualización de talleres', fecha: '2025-08-30', categoria: 'Infraestructura', descripcion: 'Modernización de equipos en laboratorios.', imagen: IMGS.lab },
      { id: 8, titulo: 'Club de Robótica', fecha: '2025-08-21', categoria: 'Vida estudiantil', descripcion: 'Se abren inscripciones para nuevos miembros.', imagen: IMGS.tech },
    ],
  }),
  computed: {
    filtradas() {
      const q = this.q.trim().toLowerCase()
      if (!q) return this.noticias
      return this.noticias.filter(n =>
        [n.titulo, n.descripcion, n.categoria].some(t => t.toLowerCase().includes(q))
      )
    },
    totalPages() {
      return Math.max(1, Math.ceil(this.filtradas.length / this.perPage))
    },
    noticiasPaginadas() {
      const start = (this.page - 1) * this.perPage
      return this.filtradas.slice(start, start + this.perPage)
    },
  },
  watch: {
    q() { this.page = 1 },
  },
}
</script>
