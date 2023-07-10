import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Uint8Array 的数组
 * ========================================================================
 * methods isUint8Array
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Uint8Array 类型，返回 true，否则返回 false
 */
const isUint8Array = (val) => {
  return _type(val) === TYPES.UNIT8_ARRAY
}

export default isUint8Array
