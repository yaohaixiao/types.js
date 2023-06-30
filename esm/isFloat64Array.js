import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Float64Array 的数组
 * ========================================================================
 * methods isFloat64Array
 * @param {*} val
 * @returns {Boolean}
 */
const isFloat64Array = (val) => {
  return _type(val) === TYPES.FLOAT64_ARRAY
}

export default isFloat64Array
