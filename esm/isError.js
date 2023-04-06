import _type from './_type'
import { TYPES } from './enum'

/**
 * 检测测试数据是否为 Error 类型
 * ========================================================================
 * @method isError
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 是 Error 类型返回 true，否则返回 false
 */
const isError = (val) => {
  return _type(val) === TYPES.ERROR
}

export default isError
