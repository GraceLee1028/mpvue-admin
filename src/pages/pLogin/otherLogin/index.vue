<template>
  <div class="container start">
    <div class="login-area">请选择所在医院<i class="iconfont icon-right"></i></div>
    <div class="login-input-box">
      <input type="text" v-model.trim="user.name" placeholder-style="color:#FFC4DB" placeholder="请输入用户名/手机号">
      <span @tap="clear('name')" class="icon"><span class="iconfont icon-close"></span></span>
    </div>
    <div class="login-input-box">
      <input type="password" placeholder-style="color:#FFC4DB" v-model="user.pwd" placeholder="请输入正确验证码">
      <span @tap="clear('pwd')" class="code">获取验证码</span>
    </div>
    <button class="lbt-button lib-width" plain @tap="loginHandle()">登陆</button>
  </div>
</template>
<script>
export default {
  onLoad() {
    // wx.showNavigationBarLoading()
    // wx.setNavigationBarTitle({ title: '登陆' })
    console.log('3,onLoad监听页面加载')
  },
  onShow() {
    console.log('4,onShow')
  },
  data() {
    return {
      user: { name: '', pwd: '' },
    }
  },
  methods: {
    clear(name) {
      this.user[name] = ''
    },
    loginHandle() {
      this.$WxRouter.switchTab('/pages/api/main')
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/css/_mixin.scss';
@import '@/css/login.scss';
</style>