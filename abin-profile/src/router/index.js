import Vue from 'vue'
import VueRouter from 'vue-router'
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
      component: () => import('@/views/Home'),
      meta: {
        title: '首頁',
        // icon: 'home'
      }
    },{
      path: 'about',
      name: 'About',
      component: () => import('@/views/About'),
      meta: {
        title: '關於我',
        // icon: 'about'
      }
    },{
      path: 'works',
      name: 'Works',
      component: () => import('@/views/Works'),
      meta: {
        title: '作品集',
        // icon: 'home'
      }
    },{
      path: 'contact',
      name: 'Contact',
      component: () => import('@/views/Contact'),
      meta: {
        title: '聯絡我',
        // icon: 'Contact'
      }
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
