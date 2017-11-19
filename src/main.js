// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from './http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
Vue.prototype.$http = axios
import globals from './config'
Vue.config.productionTip = false
Vue.use(ElementUI)

globals.interface()

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router,
  axios
})
