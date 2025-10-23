<template>
  <v-container class="my-12">
    <h2 class="text-h4 font-weight-bold mb-6 text-center text-primary">Carreras Destacadas</h2>
    <v-row>
      <v-col v-for="carrera in carreras" :key="carrera.id" cols="12" sm="6" md="4">
        <v-card elevation="5">
          <v-img :src="carrera.imagen" height="180"></v-img>
          <v-card-title>{{ carrera.nombre }}</v-card-title>
          <v-card-text>{{ carrera.descripcion }}</v-card-text>
          <v-card-actions>
            <v-btn color="secondary" rounded="lg" text>Ver más</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CarrerasSection',
  data() {
    return {
      carreras: [
        { id: 1, nombre: 'Desarrollo de Software', descripcion: 'Programación moderna y proyectos ágiles.', imagen: require('@/assets/lab.jpg') },
        { id: 2, nombre: 'Electrónica', descripcion: 'Tecnología e innovación industrial.', imagen: require('@/assets/students.jpg') },
        { id: 3, nombre: 'Mecatrónica', descripcion: 'Automatización y robótica avanzada.', imagen: require('@/assets/tech.jpg') },
      ],
    }
  },
}
</script>
