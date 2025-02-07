import _type from './utils/_type'
import isObject from './isObject'
import TYPES from './enum/types'

/**
 * 检测测试数据的数据类型是否为 DocumentFragment 文档碎片。
 * ========================================================================
 * @method isFragment
 * @since 0.6.0
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 为 DocumentFragment 文档碎片，返回 true，否则返回 false
 */
const isFragment = (val) => {
  return !!(isObject(val) && _type(val) === TYPES.FRAGMENT)
}

export default isFragment
