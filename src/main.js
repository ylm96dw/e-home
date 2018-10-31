// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import $axios from './axios/axios'
import store from './store'
// import ScrollFlipPage from 'scroll-flip-page'
import ScrollFlipPage from 'scroll-flip-page'
Vue.use(ScrollFlipPage)




Vue.prototype.$axios = $axios
Vue.use(MintUI)




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

})
