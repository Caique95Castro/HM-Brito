import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/servicos',
    name: 'servicos',
    component: () => import(/* webpackChunkName: "servicos" */ '../views/ServicosView.vue')
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import(/* webpackChunkName: "contato" */ '../views/ContatoView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
