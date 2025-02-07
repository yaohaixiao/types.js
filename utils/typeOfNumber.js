import isInteger from '../isInteger'
import isFloat from '../isFloat'
import isInfinite from '../isInfinite'

/**
 * （私有方法）获取确切的数值类型
 * ========================================================================
 * @method typeOfNumber
 * @private
 * @param {Number} val - 要检测的数值
 * @returns {String} - 返回数值类型：integer、float、infinite
 */
const typeOfNumber = (val) => {
  let name = 'number'

  if (isInteger(val)) {
    name = 'integer'
  } else if (isFloat(val)) {
    name = 'float'
  } else if (isInfinite(val)) {
    name = 'infinite'
  }

  return name
}

export default typeOfNumber
