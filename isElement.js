import _type from './utils/_type'
import TYPES from './enum/types'
import isObject from './isObject'

/**
 * 检测测试数据的数据类型是否为 HTML 元素节点。
 * ========================================================================
 * @method isElement
 * @category Lang
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 为 HTML 元素节点，返回 true，否则返回 false
 */
const isElement = (val) => {
  return !!(isObject(val) && _type(val) === TYPES.ELEMENT)
}

export default isElement
