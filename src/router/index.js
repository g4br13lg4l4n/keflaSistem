import Vue from 'vue'
import Router from 'vue-router'

import Login from '../view/pages/Login.vue'
import Home from '../view/pages/Home.vue'

import Activity from '../view/components/Home/Activity'
import Customers from '../view/components/Home/Customers'
import Sellers from '../view/components/Home/Sellers'
import Companies from '../view/components/Home/Companies'
import Settings from '../view/components/Home/Settings'
import Travels from '../view/components/Home/Travels'
import Billings from '../view/components/Home/Billings'
import Mailbox from '../view/components/Home/Mailbox'

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
      component: Home,
      children: [
        {
          path: 'activity',
          name: 'Activity',
          component: Activity,
        },
        {
          path: 'customers',
          name: 'Customers',
          component: Customers,
        },
        {
          path: 'sellers',
          name: 'Sellers',
          component: Sellers,
        },
        {
          path: 'companies',
          name: 'Companies',
          component: Companies,
        },
        {
          path: 'settings',
          name: 'Settings',
          component: Settings,
        },
        {
          path: 'travels',
          name: 'Travels',
          component: Travels,
        },
        {
          path: 'billings',
          name: 'Billings',
          component: Billings,
        },
        {
          path: 'mailbox',
          name: 'Mailbox',
          component: Mailbox,
        },
      ]
    }
  ]
})