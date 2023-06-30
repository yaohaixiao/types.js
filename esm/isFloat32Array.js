import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Float32Array 的数组
 * ========================================================================
 * methods isFloat32Array
 * @param {*} val
 * @returns {Boolean}
 */
const isFloat32Array = (val) => {
  return _type(val) === TYPES.FLOAT32_ARRAY
}

export default isFloat32Array
