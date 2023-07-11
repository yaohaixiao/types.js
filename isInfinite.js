import isNumber from './isNumber'

/**
 * 检测测试数据的数据是正无穷或者负无穷
 * ========================================================================
 * @method isInfinite
 * @param {Number} val - 要检测的数据
 * @returns {Boolean} 'val' 是正无穷或者负无穷，返回 true，否则返回 false
 */
const isInfinite = (val) => {
  return isNumber(val) && (val === Infinity || val === -Infinity)
}

export default isInfinite
