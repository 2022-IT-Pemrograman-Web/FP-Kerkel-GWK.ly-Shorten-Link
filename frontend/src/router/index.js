import { createRouter, createWebHistory } from 'vue-router'
import HomeViews from '../views/HomeView.vue'
import LoginViews from '../views/Login.vue'
import RegisterViews from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginViews,  
    },
    {
      path: '/home',
      name: 'home',
      component: HomeViews,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterViews,
    },
    
  ]
})

export default router
