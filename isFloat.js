import isNumber from './isNumber'
import isInteger from './isInteger'

/**
 * 检测测试数据是否为整数
 * ========================================================================
 * @method isFloat
 * @category Lang
 * @param {Number} val - 要检测的数据
 * @returns {Boolean} 'val' 是整数返回 true，否则返回 false
 */
function isFloat(val) {
  return (
    isNumber(val) &&
    !isNaN(val) &&
    isFinite(val) &&
    !isInteger(val) &&
    Number(val) === val &&
    val % 1 !== 0
  )
}

export default isFloat
