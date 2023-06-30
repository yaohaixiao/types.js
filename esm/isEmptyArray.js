import isArray from './isArray'

/**
 * 检测测试数据是否为空字数组
 * ========================================================================
 * @method isEmptyArray
 * @since 0.5.0
 * @param {Array} val
 * @returns {Boolean}
 */
const isEmptyArray = (val) => {
  return isArray(val) && val.length === 0
}

export default isEmptyArray
