import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AuthView from '../views/AuthView.vue'
import ActivityView from "../views/ActivityView.vue"
import SignIn from '../components/Auth/SignIn.vue'
import SignUp from '@/components/Auth/SignUp.vue'
import PassRecover from '@/components/Auth/PassRecover.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'link-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,

      children: [
        { path: '', redirect: { name: 'SignIn' }, name: 'redirection' },
        { path: 'signin', component: SignIn, name: 'SignIn' },
        { path: 'signup', component: SignUp, name: 'SignUp' },
        { path: 'recover', component: PassRecover, name: 'Recover' }
      ]
    },
    {
      path: '/activity/:id',
      name: 'activity',
      component: ActivityView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView,
    }
  ]
})

export default router
