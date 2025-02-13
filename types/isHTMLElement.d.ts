export default isHTMLElement;
/**
 * 检测测试数据的数据类型是否为 HTML 元素节点。
 * ========================================================================
 * @method isHTMLElement
 * @since 2.7.0
 * @category Element
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 为 HTML 元素节点，返回 true，否则返回 false
 * @example
 *
 * const $list = document.getElementById('list')
 * const $div = document.createElement('div')
 * const $text = document.createTextNode('text')
 * const $items = document.querySelectorAll('.item')
 * const $fragment = document.createDocumentFragment()
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
 */
declare function isHTMLElement(val: any): boolean;
