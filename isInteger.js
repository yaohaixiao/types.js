import isNumber from './isNumber'

/**
 * 检测测试数据是否为整数
 * ========================================================================
 * @method isInteger
 * @param {Number} val - 要检测的数据
 * @returns {Boolean} 'val' 是整数返回 true，否则返回 false
 */
const isInteger = (val) => {
  return isNumber(val) && !isNaN(val) && Number(val) === val && val % 1 === 0
}

export default isInteger
