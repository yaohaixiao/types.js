import _type from './utils/_type'
import isObject from './isObject'
import TYPES from './enum/types'

/**
 * 检测数据是否为 Promise 对象
 * ========================================================================
 * @method isPromise
 * @since 1.3.0
 * @category Lang
 * @param {Object} val - 测试数据
 * @returns {Boolean} 'val' 是 Promise 对象，返回 true，否则返回 false
 */
const isPromise = (val) => {
  return isObject(val) && _type(val) === TYPES.PROMISE
}

export default isPromise
