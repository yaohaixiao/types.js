import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Uint16Array 的数组
 * ========================================================================
 * methods isUint16Array
 * @param {*} val
 * @returns {Boolean}
 */
const isUint16Array = (val) => {
  return _type(val) === TYPES.UNIT16_ARRAY
}

export default isUint16Array
