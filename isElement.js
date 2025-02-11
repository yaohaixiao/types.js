import getWindow from './utils/getWindow'

/**
 * 检测测试数据的数据类型是否为 Element 实例。
 * ========================================================================
 * @method isElement
 * @since 0.2.0
 * @category DOM
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 为 Element 实例，返回 true，否则返回 false
 * @example
 *
 * const $list = document.getElementById('list')
 * const $div = document.createElement('div')
 * const $text = document.createTextNode('text')
 * const $items = document.querySelectorAll('.item')
 * const $fragment = document.createDocumentFragment()
 * const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
 *
 * Types.isElement(svgElement) // -> true
 * Types.isHTMLElement(svgElement) // -> false
 *
 * isElement($list) // -> true
 *
 * isElement($div) // -> true
 *
 * isElement($text) // -> false
 *
 * isElement($items) // -> false
 *
 * isElement($fragment) // -> false
 *
 * isElement([]) // -> false
 */
const isElement = (val) => {
  return val instanceof getWindow(val).Element
}

export default isElement
