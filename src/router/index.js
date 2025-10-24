import { createRouter, createWebHistory } from 'vue-router'
import Week12View from '../views/Week12View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'week12',
      component: Week12View,
    },
  ],
})

export default router
