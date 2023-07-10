import isFunction from './isFunction'

/**
 * 判断是否为 prototype 对象
 * ========================================================================
 * @method isPrototype
 * @param {Function|Object} val - 要检测的数据
 * @returns {Boolean} 'val' 是 prototype 对象，返回 true，否则返回 false
 */
const isPrototype = (val) => {
  const OP = Object.prototype
  const Ctor = val ? val.constructor : null
  const proto = (isFunction(Ctor) && Ctor.prototype) || OP

  return val === proto
}

export default isPrototype
