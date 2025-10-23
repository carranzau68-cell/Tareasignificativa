<template>
  <v-main>
    <HeroBanner />
    <CarrerasSection />
    <CampusParallax />
    <NoticiasSection />
    <ContactForm />
  </v-main>
</template>

<script>
import HeroBanner from '../components/HeroBanner.vue'
import CarrerasSection from '../components/CarrerasSection.vue'
import CampusParallax from '../components/CampusParallax.vue'
import NoticiasSection from '../components/NoticiasSection.vue'
import ContactForm from '../components/ContactForm.vue'

export default {
  name: 'HomeView',
  components: { HeroBanner, CarrerasSection, CampusParallax, NoticiasSection, ContactForm }
}
</script>
