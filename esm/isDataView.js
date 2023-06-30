import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 DataView 类型
 * ========================================================================
 * @method isDataView
 * @param {*} val
 * @return {Boolean}
 */
const isDataView = (val) => {
  return _type(val) === TYPES.DATA_VIEW
}

export default isDataView
