import _type from './_type'
import isObject from './isObject'
import hasOwn from './hasOwn'
import { TYPES } from './enum'

/**
 * 检测测试数据是否为普通对象
 * ========================================================================
 * @method isPlainObject
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 是普通对象返回 true，否则返回 false
 */
const isPlainObject = (val) => {
  const toString = Object.prototype.toString
  let proto
  let Ctor

  // Detect obvious negatives
  if (!val || !isObject(val)) {
    return false
  }

  proto = val.prototype

  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if (!proto) {
    return true
  }

  // Objects with prototype are plain if they were constructed by a global Object function
  Ctor = hasOwn(proto, 'constructor') && proto.constructor

  return typeof Ctor === TYPES.FUNCTION && toString.call(Ctor) === {}.hasOwnProperty.toString.call(Object)
}

export default isPlainObject
