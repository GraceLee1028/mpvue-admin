/**
 * 小程序登陆、获取微信用户信息、获取微信手机号，获取或设置token
 * 定位信息、
 */
import $WxMessagebox from './wx.messagebox.js'
const USER = wx; //便于后续替换uni-app
export const TOKENKEY = 'TOKENKEY'
export default {
  //检查登录态是否过期
  checkSession() {
    return new Promise((resolve) => {
      USER.checkSession({
        success() {
          //session_key 未过期，并且在本生命周期一直有效
          resolve();
        },
        fail() {
          // session_key 已经失效，需要重新执行登录流程
          this.login() //重新登录
        }
      })
    })
  },
  //调用接口获取登录凭证（code）
  login() {
    return new Promise((resolve) => {
      USER.login({
        success(res) {
          let {
            code
          } = res;
          if (code) {
            resolve(code)
          } else {
            $WxMessagebox.showToast({
              title: '获取登录凭证失败',
              icon: 'error'
            })
          }
        },
        fail() {
          $WxMessagebox.showToast({
            title: '获取登录凭证失败',
            icon: 'error'
          })
        }
      })
    })
  },
  //获取微信用户信息
  getUserProfile() {
    return new Promise((resolve) => {
      //该接口用于替换 wx.getUserInfo
      USER.getUserProfile({
        desc: '用于微信登陆',
        success({
          userInfo,
          iv,
          encryptedData
        }) {
          resolve({
            userInfo,
            iv,
            encryptedData
          })
        },
        fail() {
          $WxMessagebox.showToast({
            title: '获取微信用户信息失败',
            icon: 'error'
          })
        }
      })
    })
  },
  //授权
  authorize() {
    //提前向用户发起授权请求
    return new Promise((resolve) => {
      USER.authorize({
        scope: scope,
        success() {
          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          console.log('======授权成功')
          resolve()
          // wx.startRecord()
        },
        fail() {
          $WxMessagebox.showToast({
            title: '获取微信用户信息失败'
          })
        }
      })
    })
  },
  /**
   * 获取用户的当前设置
   * 常用scope:scope.userLocation：地理位置  scope.camera：摄像头
   */
  getSetting(scope = 'scope.record') {
    return new Promise((resolve) => {
      USER.getSetting({
        success(res) {
          if (!res.authSetting[scope]) {
            this.authorize().then(() => {
              resolve()
            })
          } else {
            console.log('已经授权')
            resolve()
          }
        }
      })
    })
  },
  //获取token 
  getToken() {
    return USER.getStorageSync({
      key: TOKENKEY,
    })
  },
  //设置token
  setToken(value) {
    USER.setStorageSync({
      data: value,
      key: TOKENKEY,
    })
  }
}
