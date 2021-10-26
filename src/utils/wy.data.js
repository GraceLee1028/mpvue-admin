function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}
export function getUrlStringByObj(obj) {
  let str = '';
  let keys = Object.keys(obj)
  keys.map(key => {
    str !== '' && (str += `&${key}=${obj[key]}`)
    str === '' && (str = `?${key}=${obj[key]}`)
  })
  return str;
}
export default {
  formatNumber,
  formatTime
}
