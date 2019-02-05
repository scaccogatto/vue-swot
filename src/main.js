import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'

import TemplateTitle from './plugins/template-title'
Vue.use(TemplateTitle)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
