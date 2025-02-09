import isString from './isString'
import getURLPattern from './utils/getURLPattern'

/**
 * 判断字符串是否为有效的 URL 地址
 * ========================================================================
 * @method isURL
 * @since 0.2.0
 * @category String
 * @param {*} val - 要检测的字符串
 * @returns {Boolean} 'val' 是有效的 URL 字符串格式，返回 true，否则返回 false
 * @example
 *
 * // IP 访问
 * isURL('http://127.0.0.1') // -> true
 * isURL('https://127.0.0') // -> false
 * isURL('https://127.0.0.') // -> false
 *
 * isURL('http://127.0.0.1:8080') // -> true
 * isURL('http://127.0.0.1:8080#top') // -> true
 * isURL('http://127.0.0.1:8080?id=22') // -> true
 * isURL('http://127.0.0.1/console') // -> true
 * isURL('http://127.0.0.1:8080/workbench/?id=2#projects') // -> true
 *
 * // 域名访问
 * isURL('http://localhost') -> false
 * isURL('ftp://www.yaohaixiao.com') -> false
 *
 * isURL('http://www.yaohaixiao.') -> false
 * isURL('http://www.yaohaixiao.c') -> false
 * isURL('http://www.yaohaixiao.c1') -> false
 *
 * isURL('https://www.yaohaixiao.cn') -> true
 * isURL('https://www.yaohaixiao.com') -> true
 * isURL('https://www.yaohaixiao.com:8083') -> true
 * isURL('https://www.yaohaixiao.com/blog#top') -> true
 * isURL('https://www.yaohaixiao.com/blog/?page=2') -> true
 * isURL('https://www.yaohaixiao.com:8083/blog?page=2#top') -> true
 */
const isURL = (val) => {
  const pattern = getURLPattern()

  return isString(val) && !!pattern.test(val)
}

export default isURL
