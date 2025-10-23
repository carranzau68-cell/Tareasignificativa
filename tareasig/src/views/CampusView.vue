<template>
  <v-main>
    <v-parallax src="@/assets/campus.jpg" height="380">
      <div class="d-flex align-center justify-center h-100 bg-black bg-opacity-40">
        <h1 class="text-h3 text-white font-weight-bold">Nuestros Campus</h1>
      </div>
    </v-parallax>

    <v-container class="py-10">
      <v-row>
        <v-col v-for="s in sedes" :key="s.id" cols="12" md="4">
          <v-card elevation="4">
            <v-img :src="s.img" height="160" cover />
            <v-card-title>{{ s.nombre }}</v-card-title>
            <v-card-text>
              <div class="text-body-2">{{ s.direccion }}</div>
              <div class="text-body-2">Tel: {{ s.telefono }}</div>
              <div class="text-body-2 mb-2">Horario: {{ s.horario }}</div>
              <v-avatar size="36" class="me-2" v-for="(r,i) in s.responsables" :key="i">
                <v-icon>mdi-account</v-icon>
              </v-avatar>
            </v-card-text>
            <v-card-actions>
              <v-btn color="secondary" text>Cómo llegar</v-btn>
              <v-spacer />
              <v-btn icon="mdi-phone" variant="text"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <h2 class="text-h5 font-weight-bold mt-10 mb-4">Preguntas frecuentes</h2>
      <v-expansion-panels multiple>
        <v-expansion-panel title="¿Cómo solicito información de una carrera?">
          <v-expansion-panel-text>
            Desde la sección <strong>Contacto</strong> o el botón <em>Aplicar</em> en cada carrera.
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel title="¿Hay becas disponibles?">
          <v-expansion-panel-text>
            Sí, revisa <strong>Noticias → Becas</strong> o consulta en Admisiones.
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel title="¿Ofrecen intercambios internacionales?">
          <v-expansion-panel-text>
            Existen convenios activos. Infórmate en <strong>Relaciones Internacionales</strong>.
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'CampusView',
  data() {
    const img = require('@/assets/campus.jpg')
    return {
      sedes: [
        { id: 1, nombre: 'Campus Central', direccion: 'Av. Principal 123, San Salvador', telefono: '2222-0000', horario: 'L-V 8:00–17:00', img, responsables: ['Adm', 'Acad'] },
        { id: 2, nombre: 'Sede Occidente', direccion: 'Calle 5, Santa Ana', telefono: '2444-1111', horario: 'L-V 8:00–17:00', img, responsables: ['Adm'] },
        { id: 3, nombre: 'Sede Oriente', direccion: 'Boulevard 7, San Miguel', telefono: '2666-2222', horario: 'L-V 8:00–17:00', img, responsables: ['Acad'] },
      ],
    }
  },
}
</script>
