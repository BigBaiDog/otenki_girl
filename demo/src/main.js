import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Axios from 'axios'

Vue.config.productionTip = false
Axios.defaults.baseURL = 'http://127.0.0.1:8083/'
Vue.prototype.$http = Axios

new Vue({
  render: h => h(App),
}).$mount('#app')
