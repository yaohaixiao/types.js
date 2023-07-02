import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Uint32Array 的数组
 * ========================================================================
 * methods isUint32Array
 * @param {*} val
 * @returns {Boolean}
 */
const isUint32Array = (val) => {
  return _type(val) === TYPES.UNIT32_ARRAY
}

export default isUint32Array
