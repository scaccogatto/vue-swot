import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/base',
      name: 'base',
      component: () => import(/* webpackChunkName: "reparto-dev" */ './views/Base.vue')
    }
  ]
})
