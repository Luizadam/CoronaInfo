import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)

import Currency from './plugins/currency'
Vue.use(Currency)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')