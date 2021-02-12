import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/personalCenter*',
    name:'PersonalCenter',
    component: ()=>import('../views/personal-center')
  },
  {
    path:'/shoppingCart*',
    name:'ShoppingCart',
    component: ()=>import('../views/shopping-cart')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
