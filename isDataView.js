import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 DataView 类型
 * ========================================================================
 * @method isDataView
 * @since 0.2.0
 * @category Typed Arrays
 * @param {*} val - 要检测的数据
 * @return {Boolean} 'val' 是 DataView 类型，返回 true，否则返回 false
 * @example
 *
 * const buffer = new ArrayBuffer(8)
 * const dv = new DataView(buffer)
 *
 * isDataView(buffer) // -> false
 * isDataView(dv) // -> true
 */
const isDataView = (val) => {
  return _type(val) === TYPES.DATA_VIEW
}

export default isDataView
