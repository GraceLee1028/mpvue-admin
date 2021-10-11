import Vue from 'vue'
import WxRouter from '@/utils/wx.router'
import WxAjax from '@/utils/wx.ajax'
import WxUser from '@/utils/wx.user'
import WxMessagebox from '@/utils/wx.messagebox'
import App from './App'
Vue.prototype.$WxRouter = WxRouter
Vue.prototype.$WxAjax = WxAjax
Vue.prototype.$WxMessagebox = WxMessagebox
Vue.prototype.$WxUser = WxUser;
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()
