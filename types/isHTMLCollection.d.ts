export default isHTMLCollection;
/**
 * 检测数据的是否为 HTMLNodeList 对象
 * ========================================================================
 * @method isHTMLCollection
 * @since 0.2.0
 * @category DOM
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 HTMLNodeList 对象，返回 true，否则返回 false
 * @example
 *
 * const $list = document.getElementById('list')
 * const $div = document.createElement('div')
 * const $text = document.createTextNode('text')
 * const $items = document.querySelectorAll('.item')
 * const $fragment = document.createDocumentFragment()
 *
 * isHTMLCollection($list) // -> false
 *
 * isHTMLCollection($div) // -> false
 *
 * isHTMLCollection($text) // -> false
 *
 * isHTMLCollection($items) // -> true
 *
 * isHTMLCollection($items) // -> false
 */
declare function isHTMLCollection(val: any): boolean;
