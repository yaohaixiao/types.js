import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Float64Array 的数组
 * ========================================================================
 * methods isFloat64Array
 * @param {*} val - （必须）待检测的数据
 * @returns {Boolean} 'val' 是 Float64Array 类型，返回 true，否则返回 false
 */
const isFloat64Array = (val) => {
  return _type(val) === TYPES.FLOAT64_ARRAY
}

export default isFloat64Array
