import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ThankYou from '../views/ThankYou.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/obrigado', component: ThankYou },
  ],
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
})

export default router
