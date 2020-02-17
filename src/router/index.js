import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Chat from '@/components/Chat'
import Database from '@/views/Database'
import Signup from '@/components/auth/Signup'
import Signin from '@/components/auth/Signin'
import dashboard from '@/components/Dashboard/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/db',
    name: 'db',
    component: Database
  },
  {
    path:'/chat',
    name: 'Chat',
    component: Chat,
    props: true,
    beforeEnter: (to,from,next) =>{
      if(to.params.name){
        next()
      }else {
        next({name: "enter"})
      }
    }
  },
  {
    path: '/enter',
    name: 'enter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Enter.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
