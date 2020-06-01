import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Single from '../views/Single.vue';
import Multiple from '../views/Multiple.vue';
import Matrix from '../views/Matrix.vue';
import Matrix2 from '../views/Matrix2.vue';
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
  {
    path:'/matrix',
    name:'matrix',
    component: Matrix
  },
  {
    path:'/matrix2',
    name:'matrix2',
    component: Matrix2
  }
]

const router = new VueRouter({
  routes
})

export default router
