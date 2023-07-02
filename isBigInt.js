import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据的数据类型是否为 BigInt 类型。
 * ========================================================================
 * @method isBigInt
 * @since 0.6.0
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 为 BigInt 类型，返回 true，否则返回 false
 */
const isBigInt = (val) => {
  return _type(val) === TYPES.BIG_INT
}

export default isBigInt
