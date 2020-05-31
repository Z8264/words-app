import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Single from '../views/Single.vue';
import Multiple from '../views/Multiple.vue';
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/single',
    name: 'Single',
    component: Single
  },
  {
    path: '/multiple',
    name: 'Multiple',
    component: Multiple
  },
]

const router = new VueRouter({
  routes
})

export default router
