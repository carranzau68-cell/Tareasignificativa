<template>
  <v-main>
    <v-container class="py-10">
      <h1 class="text-h4 font-weight-bold mb-6">Oferta Académica</h1>

      <v-chip-group v-model="filtro" selected-class="text-white" class="mb-6" mandatory>
        <v-chip v-for="a in areas" :key="a" :value="a" color="primary" variant="elevated">{{ a }}</v-chip>
      </v-chip-group>

      <v-row>
        <v-col v-for="c in carrerasFiltradas" :key="c.id" cols="12" sm="6" md="4">
          <v-card elevation="5">
            <v-img :src="c.imagen" height="180" cover />
            <v-card-title class="text-wrap">{{ c.nombre }}</v-card-title>
            <v-card-subtitle>{{ c.area }}</v-card-subtitle>
            <v-card-text>{{ c.resumen }}</v-card-text>
            <v-card-actions>
              <v-btn color="secondary" size="small" text @click="seleccionar(c)">Plan de estudio</v-btn>
              <v-spacer />
              <v-chip size="small" class="me-2" color="primary" variant="tonal">{{ c.duracion }}</v-chip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-dialog v-model="dialog" max-width="720">
        <v-card>
          <v-card-title class="text-h6">{{ carreraActiva?.nombre }}</v-card-title>
          <v-card-text>
            <p class="mb-3">{{ carreraActiva?.descripcion }}</p>
            <v-expansion-panels>
              <v-expansion-panel title="Competencias">
                <v-expansion-panel-text>
                  <ul class="pl-6">
                    <li v-for="(comp,i) in carreraActiva?.competencias" :key="i">{{ comp }}</li>
                  </ul>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel title="Asignaturas Clave">
                <v-expansion-panel-text>
                  <v-chip-group>
                    <v-chip v-for="(m,i) in carreraActiva?.materias" :key="i" class="ma-1" variant="tonal">
                      {{ m }}
                    </v-chip>
                  </v-chip-group>
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel title="Oportunidades Laborales">
                <v-expansion-panel-text>
                  <ul class="pl-6">
                    <li v-for="(o,i) in carreraActiva?.salidas" :key="i">{{ o }}</li>
                  </ul>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" variant="elevated">Aplicar</v-btn>
            <v-spacer />
            <v-btn variant="text" @click="dialog=false">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'CarrerasView',
  data() {
    return {
      filtro: 'Todas',
      dialog: false,
      carreraActiva: null,
      areas: ['Todas', 'Software', 'Electrónica', 'Mecatrónica', 'Industrial'],
      carreras: [
        {
          id: 1,
          nombre: 'Técnico en Desarrollo de Software',
          area: 'Software',
          resumen: 'Backend, frontend, bases de datos y metodologías ágiles.',
          descripcion: 'Formación sólida para crear soluciones de software modernas.',
          competencias: ['Programación avanzada', 'Patrones de diseño', 'DevOps básico'],
          materias: ['POO', 'DB Relacionales', 'Vue + Vuetify', 'APIs REST', 'Pruebas'],
          salidas: ['Desarrollador Full-Stack', 'QA', 'Dev Jr.'],
          duracion: '2 años',
          imagen: require('@/assets/lab.jpg'),
        },
        {
          id: 2,
          nombre: 'Técnico en Electrónica',
          area: 'Electrónica',
          resumen: 'Diseño de circuitos y mantenimiento electrónico.',
          descripcion: 'Capacitación para diagnosticar y construir soluciones electrónicas.',
          competencias: ['Soldadura SMD', 'Instrumentación', 'PLC básico'],
          materias: ['Circuitos', 'Digitales', 'Microcontroladores', 'Instrumentación'],
          salidas: ['Técnico electrónico', 'Soporte industrial'],
          duracion: '2 años',
          imagen: require('@/assets/tech.jpg'),
        },
        {
          id: 3,
          nombre: 'Técnico en Mecatrónica',
          area: 'Mecatrónica',
          resumen: 'Automatización y robótica aplicada.',
          descripcion: 'Integración de mecánica, electrónica y control.',
          competencias: ['CAD', 'Sensórica', 'Controladores'],
          materias: ['Control', 'Neumática', 'Robótica'],
          salidas: ['Técnico mecatrónico', 'Automatización'],
          duracion: '2 años',
          imagen: require('@/assets/students.jpg'),
        },
      ],
    }
  },
  computed: {
    carrerasFiltradas() {
      return this.filtro === 'Todas'
        ? this.carreras
        : this.carreras.filter(c => c.area === this.filtro)
    },
  },
  methods: {
    seleccionar(c) {
      this.carreraActiva = c
      this.dialog = true
    },
  },
}
</script>
