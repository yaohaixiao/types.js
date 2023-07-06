import _type from './_type'
import isObject from './isObject'
import TYPES from './enum/types'

/**
 * 检测数据是否为 Promise 对象
 * ========================================================================
 * @param {Object} val - 测试数据
 * @returns {Boolean}
 */
const isPromise = (val) => {
  return isObject(val) && _type(val) === TYPES.PROMISE
}

export default isPromise
