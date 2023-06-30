import isObject from './isObject'

/**
 * 检测测试数据是否为类似 Object 类型
 * ========================================================================
 * @method isObjectLike
 * @param {Object} val
 * @returns {Boolean}
 */
const isObjectLike = (val) => {
  return isObject(val) && val !== null
}

export default isObjectLike
