import isNumber from './isNumber'

/**
 * 检测测试数据是否为整数
 * ========================================================================
 * @method isInteger
 * @since 0.2.0
 * @category Number
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是整数，返回 true，否则返回 false
 * @example
 *
 * // False
 * isInteger(2.4) // -> false
 * isInteger(3.4234E3) // -> false
 * isInteger('1') // -> false
 * isInteger(Number('3.4556645445E7')) // -> false
 * isInteger(NaN) // -> false
 * isInteger(Infinity) // -> false
 * isInteger(-Infinity) // -> false
 *
 * // True
 * isInteger(2) // -> true
 * isInteger(2.0) // -> true
 * isInteger(3.4234E4) // -> true
 * isInteger(0xffffff) // -> true
 * isInteger(Number('1')) // -> true
 * isInteger(parseInt('1.0', 10)) // -> true
 * isInteger(Math.ceil(2.6)) // -> true
 */
const isInteger = (val) => {
  return isNumber(val) && !isNaN(val) && Number(val) === val && val % 1 === 0
}

export default isInteger
