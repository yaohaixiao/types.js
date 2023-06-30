import isPlainObject from './isPlainObject'

/**
 * 检测测试数据是否为空（单体）对象
 * ========================================================================
 * @method isHash
 * @since 0.4.0
 * @param obj
 * @returns {Boolean}
 */
const isHash = (obj) => {
  return isPlainObject(obj)
}

export default isHash
