import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Symbol 类型
 * ========================================================================
 * @method isSymbol
 * @category Lang
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Symbol 类型，返回 true，否则返回 false
 */
const isSymbol = (val) => {
  let symbolValueOf

  if (typeof Symbol === 'function') {
    symbolValueOf = Symbol.prototype.valueOf;
  }

  return _type(val) === TYPES.SYMBOL && symbolValueOf && typeof symbolValueOf.call(val) === 'symbol'
}

export default isSymbol
