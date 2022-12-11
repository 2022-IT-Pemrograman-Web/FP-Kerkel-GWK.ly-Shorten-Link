import { createRouter, createWebHistory } from 'vue-router'
import HomeViews from '../views/HomeView.vue'
import LoginViews from '../views/Login.vue'
import RegisterViews from '../views/Register.vue'
import AboutViews from '../views/about.vue'
import DirectViews from '../views/direct.vue'

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
    {
      path: '/about',
      name: 'about',
      component: AboutViews,
    },
    {
      path: '/direct/:short',
      name: 'direct',
      component: DirectViews,
    },
    
  ]
})

export default router
