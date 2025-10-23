import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarrerasView from '../views/CarrerasView.vue'
import NoticiasView from '../views/NoticiasView.vue'
import CampusView from '../views/CampusView.vue'
import EventosView from '../views/EventosView.vue'
import ContactoView from '../views/ContactoView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/carreras', name: 'Carreras', component: CarrerasView },
  { path: '/noticias', name: 'Noticias', component: NoticiasView },
  { path: '/campus', name: 'Campus', component: CampusView },
  { path: '/eventos', name: 'Eventos', component: EventosView },
  { path: '/contacto', name: 'Contacto', component: ContactoView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
