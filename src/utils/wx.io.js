/**
 * 小程序文件上传、下载
 * 相册、拍摄
 */
import $WxMessagebox from './wx.messagebox'
const IO = wx; //便于后续替换uni-app
export const TOKENKEY = 'TOKENKEY'
export default {
  downloadFile(url) {
    return new Promise((resolve) => {
      IO.downloadFile({
        url: url, //仅为示例，并非真实的资源
        success(res) {
          // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
          let {
            statusCode,
            tempFilePath //临时文件路径 
          } = res;
          if (statusCode === 200) {
            resolve(tempFilePath)
          } else {

          }
        }
      })
    })
  }
}
