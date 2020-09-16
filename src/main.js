import Vue from 'vue'
import App from './App.vue'
import router from './router'


//  导入css样式
import '../public/css/reset.css'

// 导入字体样式
import '../public/font/iconfont.css'
import '../public/css/style.css'

// 导入Axios 
import axios from 'axios'
Vue.prototype.$axios = axios;
// 导入图形表
import VCharts from 'v-charts'
Vue.use(VCharts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
