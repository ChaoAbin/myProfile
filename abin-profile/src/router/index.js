import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Layout from '../views/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      disabled: true,
      component: () => import('@/views/Home'),
      meta: {
        title: '首頁',
        icon: 'home'
      }
    }]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
