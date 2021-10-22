/**
 * 用户请求接口
 * 如：登陆、获取用户信息
 */
import WxAjax from '@/utils/wx.ajax'
export function login(data) { //登录
  return WxAjax.get({
    url: `/mobile/v1/wechat/wechatLoginForMini`,
    data: data
  })
}
