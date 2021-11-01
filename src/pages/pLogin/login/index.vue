<template>
  <div class="container">
    <div class="login-logo">
      <img src="//raw.githubusercontent.com/lifengand1992/wx/master/xym/login/image_loginillust.png">
    </div>
    <section class="login-body">
      <div class="login-area" @tap="toHospital()">{{other.hospitalText?other.hospitalText:'请选择所在医院'}}<i class="iconfont icon-right"></i></div>
      <!-- <button class="lbt-button" plain @tap="launch('weixin')">唤起app</button> -->
      <button class="lbt-button" plain @tap="loginHandle('weixin')">微信登陆</button>
      <button class="lbt-button" @tap="loginHandle('normal')" plain>账号登陆</button>
      <div class="agreement-box">
        <radio-group @change="agreeChange"><label class="lea-radio-label">
            <radio class="lea-radio" />已阅读并同意<navigator url="/pages/pLogin/agreement/main">
              《微语医疗用户协议》
            </navigator>
          </label>
        </radio-group>
      </div>
    </section>
  </div>
</template>
<script>
import { login } from '@/api/user.js'
import { validateNotEmpty } from '@/utils/validate.js'
export default {
  beforeCreate() {
    console.log('1,beforeCreate')
  },
  created() {
    console.log('2,created')
  },
  onLoad(query) {
    // wx.showNavigationBarLoading()
    // wx.setNavigationBarTitle({ title: '登陆' })
    console.log('3,onLoad监听页面加载')
    let { hospitalText, hospital } = query
    this.other.hospitalText = hospitalText
    this.other.hospital = hospital
  },
  onShow() {
    console.log('4,onShow')
  },
  onReady() {
    console.log('5,onReady监听页面初次渲染完成')
  },
  beforeMount() {
    console.log('6,beforeMount')
  },
  mounted() {
    console.log('7,mounted')
  },
  data() {
    return {
      agree: false,
      other: { hospitalText: '', hospital: '' },
    }
  },
  methods: {
    agreeChange(e) {
      this.agree = true
    },
    loginHandle(name) {
      console.log(this.agree, '=========')
      if (!this.agree) {
        this.$WxMessagebox.showToast({
          title: '请先阅读并勾选协议',
          icon: 'error',
        })
        return false
      }
      this[name + 'Login']()
    },
    //验证
    validate() {
      let msg = ''
      console.log(this.other)
      if (!validateNotEmpty(this.other.hospital)) {
        msg = '请选择医院'
      }
      return msg
    },
    validateMsg() {
      return new Promise((resolve) => {
        let msg = this.validate()
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
    //账号登录
    normalLogin() {
      this.validateMsg().then(() => {
        this.$WxRouter.navigateTo('/pages/pLogin/otherLogin/main')
      })
    },
    //微信登录-----------获取手机号
    async weixinLogin() {
      this.validateMsg().then(async () => {
        let p1 = this.$WxUser.getUserProfile(),
          p2 = this.$WxUser.login()
        Promise.all([p1, p2]).then((result) => {
          let target = result[0]
          let { iv, encryptedData } = target
          let code = result[1]
          console.log(result)
          this.loginAjax({ iv, encryptedData, code, audience: 'MINIAPP_INNER' })
        })
      })
    },
    loginAjax(data) {
      login(data).then((content) => {
        console.log(content)
        this.$WxMessagebox.showToast({
          title: '登录成功',
          icon: 'success',
        })
        this.$WxUser.setToken(content)
      })
    },
    launch() {
      wx.navigateToMiniProgram({
        appId: 'wxb0d1040f92eef13a',
        path: 'pages/classify/index',
        extraData: { mobile: '18770355232', cardNo: '430681198709072640' },
        envVersion: 'release',
        success(res) {
          // 打开成功
          console.log('唤起成功===========')
          console.log(res)
        },
        fail(res) {
          console.log('唤起失败===========')
          console.log(res)
        },
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