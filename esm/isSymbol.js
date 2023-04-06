import _type from './_type'
import { TYPES } from './enum'

/**
 * 检测测试数据是否为 Symbol 类型
 * ========================================================================
 * @method isSymbol
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 是 Symbol 类型返回 true，否则返回 false
 */
const isSymbol = (val) => {
  return _type(val) === TYPES.SYMBOL
}

export default isSymbol
