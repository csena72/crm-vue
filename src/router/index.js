import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/ClientesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
      props: {title: 'Listado de Clientes'},
    },
    {
      path: '/agregar-cliente',
      name: 'agregar-cliente',
      component: () => import('../views/NuevoClienteView.vue'),
      props: {title: 'Agregar nuevo cliente'},
    },
  ]
})

export default router
