import isString from './isString'

/**
 * 检测测试数据是否为 SVG 格式字符串
 * ========================================================================
 * @method isSVG
 * @since 1.11.0
 * @category String
 * @param {*} val - 要检测的（字符串）数据
 * @returns {boolean} - true 表示检测数据是 SVG 格式字符，否则返回 false
 * @example
 *
 * isSVG('<!doctype html>') // -> false
 *
 * const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 26 28">' +
 *             '<path d="M22 15.5v7.5c0"></path>' +
 *             '</svg>'
 *
 * isSVG(svg) // -> true
 */
const isSVG = (val) => {
  const declaration = '(?:<\\?xml[^>]*>\\s*)?'
  const doctype =
    '(?:<\\!doctype svg[^>]*\\s*(?:\\[?(?:\\s*<![^>]*>\\s*)*\\]?)*[^>]*>\\s*)?'
  const content = '<svg[^>]*>[^]*<\\/svg>\\s*$'
  const svg = `^\\s*${declaration}${doctype}${content}\\s*$`
  const pattern = new RegExp(svg, 'i')

  return isString(val) && pattern.test(val)
}

export default isSVG
