<template>
  <div class="container start">
    <div class="login-area" @tap="toHospital()">{{other.hospitalText?other.hospitalText:'请选择所在医院'}}<i class="iconfont icon-right"></i></div>
    <div class="login-input-box">
      <input type="text" v-model.trim="user.name" placeholder-style="color:#FFC4DB" placeholder="请输入手机号">
      <span @tap="clear('name')" class="icon"><span class="iconfont icon-close"></span></span>
    </div>
    <div class="login-input-box">
      <input type="text" placeholder-style="color:#FFC4DB" v-model="user.pwd" placeholder="请输入正确验证码">
      <span @tap="sendCode()" class="code" :class="user.name?'active':''">{{code.flag?code.number:'获取验证码'}}</span>
    </div>
    <button class="lbt-button lib-width" plain @tap="loginHandle()">登陆</button>
  </div>
</template>
<script>
import { validateMobile, validateNotEmpty } from '@/utils/validate.js'
const DEFAULTCODE = '2222' //默认验证码
export default {
  onLoad(query) {
    // wx.showNavigationBarLoading()
    // wx.setNavigationBarTitle({ title: '登陆' })
    console.log(query, '=========')
    let { hospitalText, hospital } = query
    this.other.hospitalText = hospitalText
    this.other.hospital = hospital

    console.log('3,onLoad监听页面加载')
  },
  onShow() {
    console.log('4,onShow')
  },
  data() {
    return {
      other: { hospitalText: '', hospital: '' },
      user: { name: '', pwd: '' },
      code: { flag: false, number: 60 },
    }
  },
  methods: {
    //验证
    validate(code = true) {
      let msg = ''
      console.log(this.other)
      if (!validateNotEmpty(this.other.hospital)) {
        msg = '请选择医院'
      } else if (!validateNotEmpty(this.user.name)) {
        msg = '请输入手机号'
      } else if (!validateMobile(this.user.name)) {
        msg = '手机格式不正确'
      } else if (code && !validateNotEmpty(this.user.pwd)) {
        msg = '请输入验证码'
      } else if (code && this.user.pwd !== DEFAULTCODE) {
        msg = '验证码不正确'
      }
      return msg
    },
    validateMsg(code = true) {
      return new Promise((resolve) => {
        let msg = this.validate(code)
        if (msg) {
          this.$WxMessagebox.showToast({
            title: msg,
            icon: 'error',
          })
        } else {
          resolve()
        }
      })
    },
    //发送验证码
    sendCode() {
      this.user.pwd = ''
      this.validateMsg(false).then(() => {
        this.code.flag = true
        this.$WxMessagebox.showToast({
          title: '验证码为' + DEFAULTCODE,
          icon: 'success',
        })
      })
    },
    timeOut() {
      setTimeout(() => {
        this.code.number -= 1
      }, 1000)
    },
    //登陆
    loginHandle() {
      this.validateMsg(true).then(() => {
        this.$WxRouter.switchTab('/pages/api/main')
      })
    },
    toHospital() {
      this.$WxRouter.navigateTo('/pages/pLogin/hospital/main')
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/css/_mixin.scss';
@import '@/css/login.scss';
</style>