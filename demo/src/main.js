import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.serverSrc = 'http://127.0.0.1:8083/'

new Vue({
  render: h => h(App),
}).$mount('#app')
