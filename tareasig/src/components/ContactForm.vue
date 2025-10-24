<template>
  <v-container class="my-12">
    <h2 class="text-h4 text-primary text-center mb-6">Contáctanos</h2>
    <v-form ref="form" v-model="valid">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field label="Nombre" v-model="nombre" :rules="[v => !!v || 'Campo requerido']" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="Correo Electrónico" v-model="correo" :rules="[v => /.+@.+\..+/.test(v) || 'Correo inválido']" required></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea label="Mensaje" v-model="mensaje" :rules="[v => !!v || 'Campo requerido']" required></v-textarea>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-btn color="primary" @click="enviar">Enviar Mensaje</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      valid: false,
      nombre: '',
      correo: '',
      mensaje: '',
    }
  },
  methods: {
    enviar() {
      if (this.$refs.form.validate()) alert('¡Mensaje enviado exitosamente!')
    },
  },
}
</script>
