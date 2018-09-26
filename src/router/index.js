import Vue from 'vue'
import Router from 'vue-router'

const Login = require('../view/pages/Login.vue')
const Home = require('../view/pages/Home.vue')

const Activity = require('../view/components/Home/Activity.vue')
const Customers = require('../view/components/Home/Customers.vue')
const Sellers = require('../view/components/Home/Sellers.vue')
const Companies = require('../view/components/Home/Companies.vue')
const Settings = require('../view/components/Home/Settings.vue')
const Travels = require('../view/components/Home/Travels.vue')
const Billings = require('../view/components/Home/Billings.vue')
const Mailbox = require('../view/components/Home/Mailbox.vue')

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