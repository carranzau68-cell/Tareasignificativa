<template>
  <v-main>
    <v-container class="py-10">
      <h1 class="text-h4 font-weight-bold mb-2">Contacto</h1>
      <p class="text-medium-emphasis mb-6">Escríbenos y te responderemos pronto.</p>

      <v-row>
        <v-col cols="12" md="7">
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model.trim="form.nombre"
              label="Nombre completo"
              :rules="[r.requerido]"
              prepend-inner-icon="mdi-account"
              class="mb-4"
              required
            />
            <v-text-field
              v-model.trim="form.correo"
              label="Correo electrónico"
              :rules="[r.requerido, r.correo]"
              prepend-inner-icon="mdi-email"
              class="mb-4"
              required
            />
            <v-select
              v-model="form.asunto"
              :items="asuntos"
              label="Asunto"
              :rules="[r.requerido]"
              prepend-inner-icon="mdi-format-list-bulleted"
              class="mb-4"
            />
            <v-textarea
              v-model.trim="form.mensaje"
              label="Mensaje"
              :rules="[r.requerido, r.min(10)]"
              auto-grow
              rows="4"
              prepend-inner-icon="mdi-message-text"
              class="mb-4"
            />
            <div class="d-flex align-center">
              <v-checkbox v-model="form.acepto" :rules="[r.true]" label="Acepto política de privacidad" />
              <v-spacer />
              <v-btn color="primary" :disabled="!valid" @click="enviar">Enviar</v-btn>
            </div>
          </v-form>

          <v-alert
            v-model="enviado"
            type="success"
            class="mt-4"
            title="¡Mensaje enviado!"
            text="Gracias por contactarnos. Te responderemos a la brevedad."
            closable
          />
        </v-col>

        <v-col cols="12" md="5">
          <v-card elevation="4" class="mb-4">
            <v-card-title>Información</v-card-title>
            <v-card-text>
              <div class="mb-2"><v-icon class="me-2">mdi-map-marker</v-icon> Av. Principal 123, San Salvador</div>
              <div class="mb-2"><v-icon class="me-2">mdi-phone</v-icon> (503) 2222-0000</div>
              <div class="mb-2"><v-icon class="me-2">mdi-email</v-icon> info@itca-plus.edu</div>
              <div class="mb-2"><v-icon class="me-2">mdi-clock-outline</v-icon> L-V 8:00–17:00</div>
            </v-card-text>
          </v-card>

          <v-card elevation="4">
            <v-card-title>Redes sociales</v-card-title>
            <v-card-actions>
              <v-btn icon="mdi-facebook" variant="text" />
              <v-btn icon="mdi-instagram" variant="text" />
              <v-btn icon="mdi-youtube" variant="text" />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'ContactoView',
  data() {
    return {
      valid: false,
      enviado: false,
      asuntos: ['Admisiones', 'Académico', 'Eventos', 'Becas', 'Otro'],
      form: { nombre: '', correo: '', asunto: null, mensaje: '', acepto: false },
      r: {
        requerido: v => !!v || 'Campo requerido',
        correo: v => /.+@.+\..+/.test(v) || 'Correo inválido',
        min: n => v => (v && v.length >= n) || `Mínimo ${n} caracteres`,
        true: v => v === true || 'Requerido',
      },
    }
  },
  methods: {
    enviar() {
      if (this.$refs.form.validate()) {
        // Aquí harías la llamada a tu backend / servicio de correo
        this.enviado = true
        this.form = { nombre: '', correo: '', asunto: null, mensaje: '', acepto: false }
        this.$refs.form.resetValidation()
      }
    },
  },
}
</script>
