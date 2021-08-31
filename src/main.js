import Vue from 'vue'
import WyRouter from '@/utils/wy.router'
import WyAjax from '@/utils/wy.ajax'
import App from './App'
Vue.prototype.$WyRouter = WyRouter
Vue.prototype.$WyAjax = WyAjax
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
