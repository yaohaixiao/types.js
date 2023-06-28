import isInteger from './isInteger'

/**
 * 检测测试数据的数据类型是否为奇数
 * ========================================================================
 * @method isOdd
 * @param {Number} val - 要检测的数据
 * @returns {Boolean} 'val' 是奇数返回 true，否则返回 false
 */
const isOdd = (val) => {
  return isInteger(val) && val % 2 !== 0
}

export default isOdd
