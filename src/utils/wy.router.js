export default {
  /**
   * 切换tabbar，并关闭其他所有非 tabBar 页面
   * @param {地址} url 跳转tab地址，
   */
  switchTab(url) {
    mpvue.switchTab({
      url: url
    })
    // 或
    // wx.switchTab({
    //   url: url
    // })
  },
  /**
   * 关闭所有页面，打开到应用内的某个页面
   * @param {地址} url 跳转地址
   */
  reLaunch(url) {
    mpvue.reLaunch({
      url: url
    })
    // 或
    // wx.reLaunch({
    //   url: url
    // })
  },
  /**
   * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
   * @param {地址} url 跳转地址
   */
  redirectTo(url) {
    mpvue.redirectTo({
      url: url
    })
    //或
    //   wx.redirectTo({
    //     url: url
    //   })
  },
  /**
   * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面
   * @param {地址} url 跳转地址
   */
  navigateTo(url) {
    mpvue.navigateTo({
      url: url
    })
    //或
    //   wx.navigateTo({
    //     url: url
    //   })
  },
  /**
   * 关闭当前页面，返回上一页面或多级页面
   * @param {返回页面层} delta 1：上一个页面；2：上上个页面；3：上上上个页面
   */
  navigateBack(delta) {
    mpvue.navigateBack({
      delta
    })
    //或
    //   wx.navigateBack({
    //     delta
    //   })
  }
}
