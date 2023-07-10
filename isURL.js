import isString from './isString'

/**
 * 判断字符串是否为有效的 URL 地址
 * ========================================================================
 * @method isURL
 * @category Lang
 * @param {String} str - 要检测的字符串
 * @returns {Boolean}
 */
const isURL = (str) => {
  const protocol = '(https?:)?'
  const user = '([^\\/\\?\\#\\:]+)'
  const password = '(.+)'
  const auth = '(' + user + ':' + password + '@)?'
  const domain = '(([a-z\\d]([a-z\\d-]*[a-z\\d])*(\\.)?)+[a-z]{2,})'
  const ip = '((\\d{1,3}\\.){3}\\d{1,3})'
  const port = '(\\:\\d+)?'
  const path = '(\\/[-a-z\\d%_.~+]*)*'
  const search = '(\\?[;&a-z\\d%_.~+=-]*)?'
  const hash = '(\\#[-a-z\\d_]*)?'
  const url =
    '^' +
    protocol +
    '\\/\\/' +
    auth +
    '(' +
    domain +
    '|' +
    ip +
    ')' +
    port +
    path +
    search +
    hash +
    '$'
  const pattern = new RegExp(url, 'i')

  return isString(str) && !!pattern.test(str)
}

export default isURL
