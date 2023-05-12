import _type from './_type'
import { TYPES } from './enum'

/**
 * 检测测试数据是否是一个数字（只能是 number 类型或者 '123123' 这样的数字字符串）
 * ========================================================================
 * @method isNumeric
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 是一个数字返回 true，否则返回false
 */
const isNumeric = (val) => {
  // isNumeric is limited to strings and numbers
  // (primitives or objects) that can be coerced
  // to finite numbers (gh-2662)
  const type = _type(val)

  return (type === TYPES.NUMBER || type === TYPES.STRING) &&
    // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(val - parseFloat(val))
}

export default isNumeric
