import isFunction from './isFunction'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为对象
 * ========================================================================
 * @method isObject
 * @category Lang
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 为对象返回 true，否则返回 false
 */
const isObject = (val) => {
  const type = typeof val

  return !!(val && (type === TYPES.OBJECT || isFunction(val)))
}

export default isObject
