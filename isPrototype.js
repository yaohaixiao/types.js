import isConstructor from './isConstructor'

/**
 * 判断是否为 prototype 对象
 * ========================================================================
 * @method isPrototype
 * @since 0.2.0
 * @category Object
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 prototype 对象，返回 true，否则返回 false
 * @example
 *
 * const Yao= {
 *   age: 40,
 *   career: 'programmer'
 * }
 *
 * const Programmer = function(name, age) {
 *   this.name = name
 *   this.age = age
 *   this.isDead = false
 *
 *   return this
 * }
 *
 * Programmer.prototype.career = 'programmer'
 * Programmer.prototype.getWorkDone = function() {
 *   this.isDead = true
 *   return this
 * }
 *
 * isPrototype(null) // => false
 *
 * isPrototype(Object) // => false
 * isPrototype(Object.prototype) // => true
 *
 * isPrototype(Programmer) // => false
 * isPrototype(Yao.__proto__) // => true
 */
const isPrototype = (val) => {
  const OP = Object.prototype
  const Ctor = val ? val.constructor : null
  const proto = (isConstructor(Ctor) && Ctor.prototype) || OP

  return val === proto
}

export default isPrototype
