import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Uint8ClampedArray 的数组
 * ========================================================================
 * methods isUint8ClampedArray
 * @param {*} val
 * @returns {Boolean}
 */
const isUint8ClampedArray = (val) => {
  return _type(val) === TYPES.UNIT8_CLAMPED_ARRAY
}

export default isUint8ClampedArray
