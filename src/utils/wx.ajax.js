/**
 * 发起请求，文件上传，下载
 */
import WxUser from './wx.user'
import WxRouter from './wx.router'
const AJAX = wx; //可用于uni替换
//接口前缀
export const baseUrl = 'http://183.11.235.36:25555'

export default {
  get({
    url,
    data = {},
    method = 'GET'
  } = {}) {
    AJAX.showLoading({
      title: '正在加载'
    })
    const token = WxUser.getToken()
    console.log(token)
    return new Promise((resolve, reject) => {
      AJAX.request({
        url: baseUrl + url,
        data: data,
        method: method,
        headers: {
          "Authorization": token, // 让每个请求携带自定义token 请根据实际情况自行修改
          'Content-Type': 'application/json'
        },
        success: (res) => {
          let {
            statusCode,
            data
          } = res;
          console.log(res)
          if (statusCode !== 200) {
            AJAX.showToast({
              title: "网络出错，稍后再试",
              icon: "none"
            });
          } else if (data.status == '401') {
            WxRouter.reLaunch('/login/index');
          } else if (data.status === '200') {
            resolve(data.content);
          } else {
            AJAX.showToast({
              title: data.message,
              icon: "none"
            });
          }
        },
        fail: (res) => {
          console.log('请求报错：', res)
          reject(res); //请求失败
        },
        complete: function () {
          AJAX.hideLoading();
          // complete
        }
      })
    })
  },
  post({
    url,
    data = {}
  } = {}) {
    return this.get({
      url,
      data,
      method: 'POST'
    })
  }
}
