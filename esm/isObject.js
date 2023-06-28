import isFunction from './isFunction'
import { TYPES } from './enum'

/**
 * 检测测试数据是否为对象
 * ========================================================================
 * @method isObject
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 为对象返回 true，否则返回 false
 */
const isObject = (val) => {
  const type = typeof val

  return (val && (type === TYPES.OBJECT || isFunction(val))) || false
}

export default isObject
