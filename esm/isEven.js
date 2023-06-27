import isInteger from './isInteger'

/**
 * 检测测试数据的数据类型是否为偶数
 * ========================================================================
 * @method isEven
 * @param val - 要检测的数据
 * @returns {boolean} 'val' 是偶数返回 true，否则返回 false
 */
const isEven = (val) => {
  return isInteger(val) && val % 2 === 0
}

export default isEven
