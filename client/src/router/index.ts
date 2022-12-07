import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkoutView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import CommuntiyPostViewVue from '@/views/CommuntiyPostView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/workouts',
      name: 'workouts',

      
      // route level code-splitting 
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: WorkView,
      
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/community',
      name: 'community',
      component: CommuntiyPostViewVue
    }
   
  ]
})

export default router
