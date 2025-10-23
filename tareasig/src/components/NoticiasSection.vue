<template>
  <v-container class="my-12">
    <h2 class="text-h4 font-weight-bold mb-6 text-center text-primary">Últimas Noticias</h2>
    <v-row>
      <v-col v-for="n in noticias" :key="n.id" cols="12" md="4">
        <v-card elevation="4">
          <v-img :src="n.imagen" height="160"></v-img>
          <v-card-title>{{ n.titulo }}</v-card-title>
          <v-card-text>{{ n.descripcion }}</v-card-text>
          <v-card-actions>
            <v-btn color="secondary" text>Leer más</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NoticiasSection',
  data() {
    return {
      noticias: [
        { id: 1, titulo: 'Nuevo Laboratorio de Innovación', descripcion: 'Se inauguró el nuevo laboratorio de IA aplicada.', imagen: require('@/assets/tech.jpg') },
        { id: 2, titulo: 'Semana de la Ciencia', descripcion: 'Charlas y talleres sobre innovación tecnológica.', imagen: require('@/assets/lab.jpg') },
        { id: 3, titulo: 'Convenio con Universidad Europea', descripcion: 'Nuevas oportunidades de intercambio académico.', imagen: require('@/assets/campus.jpg') },
      ],
    }
  },
}
</script>
