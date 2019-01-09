import Vue from 'vue'
import './plugins'
import App from './App.vue'
import router from '@/router'
import store from '@/store/index'

// Filters
import DateFilter from '@/filters/Date'

Vue.config.productionTip = false

// Register the filters
Vue.filter('date', DateFilter)
Vue.filter('capitalize', (value) => {
  if (!value && value !== 0) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.prototype.$siteName = process.env.VUE_APP_TITLE || 'CosmicifyApp'

new Vue({
  router,
  store,
  render: h => h(App),
  created () { console.log('App Title: ' +this.$siteName) }
}).$mount('#app')
