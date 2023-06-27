import _type from './_type'
import { TYPES } from './enum'

/**
 * 检测测试数据的数据类型是否为 HTML 元素节点。
 * ========================================================================
 * @method isElement
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 为 HTML 元素节点返回 true，否则返回 false
 */
const isElement = (val) => {
  return _type(val) === TYPES.ELEMENT
}

export default isElement
