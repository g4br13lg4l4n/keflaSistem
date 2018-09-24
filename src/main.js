// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Axios from 'axios'
import isLocal from './plugin/isLocal'

Vue.config.productionTip = false
window.axios = Axios

let site = null 
if (isLocal) { site = 'http://localhost:8001' }
  else { site = 'http://178.128.70.168:8001/' }

window.Params = {
  URL_API: site
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
