/**
 * 小程序登陆、获取微信用户信息、获取微信手机号，获取或设置token
 */
const MESSAGEBOX = wx; //可用于uni替换

export default {
  //显示消息提示框
  showToast({
    icon = 'none',
    title
  } = {}) {
    let o = {
      title: title,
      icon: icon || 'none', // success | error |  none:不显示图标 | loading
      duration: 2000
    }
    MESSAGEBOX.showToast(o)
  },
  //隐藏消息提示框
  hideToast() {
    MESSAGEBOX.hideToast();
  },
  //显示模态对话框
  showModal({
    title,
    content
  } = {}) {
    return new promise((resolve, reject) => {
      MESSAGEBOX.showModal({
        title: title || '提示',
        content: content || '提示内容',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            resolve()
          } else if (res.cancel) {
            reject()
            console.log('用户点击取消')
          }
        }
      })
    })
  },
  //显示操作菜单
  showActionSheet({
    itemList
  }) {
    return new Promise((resolve) => {
      MESSAGEBOX.showActionSheet({
        itemList: itemList || ['选项一', '选项二', '选项三'],
        success(res) {
          let {
            tapIndex
          } = res;
          resolve(tapIndex)
        },
        fail(res) {
          let {
            errMsg
          } = res
          this.showToast({
            title: errMsg
          })
        }
      })
    })
  }
}
