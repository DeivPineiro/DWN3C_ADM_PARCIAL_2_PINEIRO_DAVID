import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import ListaView from '../views/ListaView.vue'
import OfertaView from '../views/OfertaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeview',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/lista',
    name: 'listaView',
    component: ListaView
  },
  {
    path: '/oferta',
    name: 'ofertaView',
    component: OfertaView
  }
 
]

const router = new VueRouter({
  routes
})

export default router
