import isObject from './isObject'
import hasOwn from './hasOwn'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为普通对象
 * ========================================================================
 * @method isPlainObject
 * @param {Object} val - 要检测的数据
 * @returns {Boolean} 'val' 是普通对象返回 true，否则返回 false
 */
const isPlainObject = (val) => {
  const toString = Object.prototype.toString
  let proto
  let Ctor

  // Detect obvious negatives
  if (!isObject(val)) {
    return false
  }

  proto = val.prototype

  if (!proto) {
    return true
  }

  Ctor = hasOwn(proto, 'constructor') && proto.constructor

  return (
    typeof Ctor === TYPES.FUNCTION &&
    toString.call(Ctor) === {}.hasOwnProperty.toString.call(Object)
  )
}

export default isPlainObject
