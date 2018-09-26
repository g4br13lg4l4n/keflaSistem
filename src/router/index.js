import Vue from 'vue'
import Router from 'vue-router'

import Login from '@ ./src/view/pages/Login.vue'
import Home from '@ ./src/view/pages/Home.vue'

import Activity from '@ ./src/view/components/Home/Activity.vue'
import Customers from '@ ./src/view/components/Home/Customers.vue'
import Sellers from '@ ./src/view/components/Home/Sellers.vue'
import Companies from '@ ./src/view/components/Home/Companies.vue'
import Settings from '@ ./src/view/components/Home/Settings.vue'
import Travels from '@ ./src/view/components/Home/Travels.vue'
import Billings from '@ ./src/view/components/Home/Billings.vue'
import Mailbox from '@ ./src/view/components/Home/Mailbox.vue'

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