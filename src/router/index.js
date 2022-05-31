import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import RegistroPage from '@/components/RegistroPage.vue'
import PerfilPage from '@/components/PerfilPage.vue'
import EventosPage from '@/components/EventosPage.vue'
import CrearEventoPage from '@/components/CrearEventoPage.vue'
import AmigosPage from '@/components/AmigosPage.vue'
import MensajesPage from '@/components/MensajesPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/registro',
    name: 'registro',
    component: RegistroPage
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: PerfilPage
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: EventosPage
  },
  {
    path: '/crearEvento',
    name: 'crearEvento',
    component: CrearEventoPage
  },
  {
    path: '/amigos',
    name: 'amigos',
    component: AmigosPage
  },
  {
    path: '/mensajes',
    name: 'mensajes',
    component: MensajesPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
