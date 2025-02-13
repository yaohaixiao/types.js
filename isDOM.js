import isObject from './isObject'
import isElement from './isElement'
import isHTMLCollection from './isHTMLCollection'
import isFragment from './isFragment'
import isTextNode from './isTextNode'

/**
 * 检测测试数据是否为 Element 类型数据：Element 节点，TextNode，NodeList 和 DocumentFragment）。
 * ========================================================================
 * @method isDOM
 * @since 1.9.0
 * @category Element
 * @param {*} el
 * @returns {Boolean}
 * @example
 *
 * const $list = document.getElementById('list')
 * const $fragment = document.createDocumentFragment()
 * const $items = document.querySelectorAll('.item')
 * const $text = document.createTextNode('text')
 *
 * isDOM($list) // -> true
 *
 * isDOM($fragment) // -> true
 *
 * isDOM($items) // -> true
 *
 * isDOM($text) // -> true
 */
const isDOM = (el) => {
  return (
    isObject(el) &&
    (isElement(el) || isHTMLCollection(el) || isFragment(el) || isTextNode(el))
  )
}

export default isDOM
