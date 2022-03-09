import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/cv',
    children: [
    // {
    //   path: 'home',
    //   name: 'Home',
    //   component: () => import('@/views/Home'),
    //   meta: {
    //     title: '首頁',
    //     // icon: 'home'
    //   }
    // },{
    //   path: 'about',
    //   name: 'About',
    //   component: () => import('@/views/About'),
    //   meta: {
    //     title: '關於我',
    //     // icon: 'about'
    //   }
    // },{
    //   path: 'portfolio',
    //   name: 'Portfolio',
    //   component: () => import('@/views/Portfolio'),
    //   meta: {
    //     title: '作品集',
    //     // icon: 'home'
    //   }
    // },{
    //   path: 'portfolio/:project',
    //   name: 'Project',
    //   component: () => import('@/views/Portfolio/project'),
    //   meta: {
    //     title: '作品',
    //     // icon: 'home'
    //   }
    // },{
    //   path: 'contact',
    //   name: 'Contact',
    //   component: () => import('@/views/Contact'),
    //   meta: {
    //     title: '聯絡我',
    //     // icon: 'Contact'
    //   }
    // },
    {
      path: 'cv',
      name: 'cv',
      component: () => import('@/views/CV'),
      meta: {
        title: '簡歷',
        // icon: 'Contact'
      }
    }]
  },
  {
    path: "*",
    name: 'Root',
    component: Layout,
    redirect: '/home',
  }
]

const router = new VueRouter({
  routes
})

export default router
