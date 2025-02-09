import _type from './utils/_type'
import isObject from './isObject'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为文本节点
 * ========================================================================
 * @method isTextNode
 * @since 0.2.0
 * @category DOM
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是文本节点，返回 true，否则返回 false
 * @example
 *
 * const $list = document.getElementById('list')
 * const $div = document.createElement('div')
 * const $fragment = document.createDocumentFragment()
 * const $items = document.querySelectorAll('.item')
 * const $text = document.createTextNode('text')
 *
 * isTextNode($list) // -> false
 *
 * isTextNode($div) // -> false
 *
 * isTextNode($fragment) // -> false
 *
 * isTextNode($items) // -> false
 *
 * isTextNode($text) // -> true
 */
const isTextNode = (val) => {
  return !!(
    isObject(val) &&
    (_type(val) === TYPES.TEXT || (val.tagName && val.nodeType === 3))
  )
}

export default isTextNode
