import isPlainObject from './isPlainObject'

/**
 * 检测测试数据是否为空（单体）对象
 * ========================================================================
 * @method isHash
 * @alias isPlainObject
 * @since 0.4.0
 * @category Lang
 * @param {Object} obj - 要检测的数据
 * @returns {Boolean} 'val' 是普通对象，返回 true，否则返回 false
 */
const isHash = (obj) => {
  return isPlainObject(obj)
}

export default isHash
