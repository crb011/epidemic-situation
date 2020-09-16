import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import inspection from '@/views/inspection'
import intimate from '@/views/intimate'
import make from '@/views/make'
import Return from '@/views/Return'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias:'/Home',
    redirect: "/Home/inspection",
    children: [
      { path: '/Home/inspection', component: inspection },
      { path: '/Home/intimate', component: intimate },
      { path: '/Home/make', component: make },
      { path: '/Home/Return', component: Return },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:"on",
})

export default router
