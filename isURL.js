/**
 * 判断字符串是否为有效的 URL 地址
 * ========================================================================
 * @method isURL
 * @param {String} str - 要检测的字符串
 * @returns {boolean}
 */
const isURL = (str) => {
  let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator

  return !!pattern.test(str)
}

export default isURL
