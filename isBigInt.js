import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据的数据类型是否为 BigInt 类型。
 * ========================================================================
 * @method isBigInt
 * @since 0.6.0
 * @category Lang
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 为 BigInt 类型，返回 true，否则返回 false
 */
const isBigInt = (val) => {
  let bigIntValueOf

  if (typeof BigInt === TYPES.FUNCTION) {
    bigIntValueOf = BigInt.prototype.valueOf
  }

  return (
    _type(val) === TYPES.BIG_INT &&
    bigIntValueOf &&
    _type(bigIntValueOf.call(val)) === TYPES.BIG_INT
  )
}

export default isBigInt
