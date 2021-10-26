/* 手机号码*/
export function validateMobile(mobile) {
  const reg = /^1[0-9][0-9]\d{8}$/
  return reg.test(mobile)
}
//验证是否为空
export function validateNotEmpty(value) {
  if (!value && ((typeof value !== Number) || (typeof value !== Boolean))) {
    return false;
  }
  return true;
}
