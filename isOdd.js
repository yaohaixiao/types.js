import isInteger from './isInteger'

/**
 * 检测测试数据的数据类型是否为奇数
 * ========================================================================
 * @method isOdd
 * @since 0.2.0
 * @category Number
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是奇数，返回 true，否则返回 false
 * @example
 *
 * isOdd(3) // -> true
 * isOdd(3.0) // -> true
 * isOdd(3.01E2) // -> true
 * isOdd(0x000011) // -> true
 *
 * isOdd(2.0) // -> false
 * isOdd('2') // -> false
 * isOdd(3.01E3) // -> false
 * isOdd(0x000010) // -> false
 * isOdd(NaN) // -> false
 * isOdd(Infinity) // -> false
 */
const isOdd = (val) => {
  return isInteger(val) && val % 2 !== 0
}

export default isOdd
