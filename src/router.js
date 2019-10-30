import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/Home.vue'
import Cate from '@/views/cate/Cate.vue'
import Jdm from '@/views/jdm/Jdm.vue'
import Cart from '@/views/cart/Cart.vue'
import User from '@/views/user/User.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home},
    { path: '/cate', component: Cate},
    { path: '/jdm', component: Jdm},
    { path: '/cart', component: Cart},
    { path: '/user', component: User}
  ]
})

export default router
