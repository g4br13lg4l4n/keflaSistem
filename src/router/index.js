import Vue from 'vue'
import Router from 'vue-router'

import Login from '../view/pages/Login.vue'
import Home from '../view/pages/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})