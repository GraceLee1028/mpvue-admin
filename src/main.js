import Vue from 'vue'
import WxRouter from '@/utils/wx.router'
import WxAjax from '@/utils/wx.ajax'
import WxUser from '@/utils/wx.user'
import App from './App'
Vue.prototype.$WxRouter = WxRouter
Vue.prototype.$WxAjax = WxAjax
Vue.prototype.$PrimaryColor = '#F75193'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$WxUser = WxUser;
const app = new Vue(App)
app.$mount()
