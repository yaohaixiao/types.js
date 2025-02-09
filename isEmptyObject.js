import isPlainObject from './isPlainObject'
import hasOwn from './utils/hasOwn'

/**
 * 检测测试数据是否为空（单体）对象
 * ========================================================================
 * @method isEmptyObject
 * @since 0.2.0
 * @category Object
 * @param {*} obj - 要检测的数据
 * @returns {Boolean} 'val' 是空对象，返回 true，否则返回 false
 * @example
 *
 * function Person(name,age){
 *    this.name = name;
 *    this.age = age;
 * }
 *
 * isEmptyObject({}) // -> true
 * isEmptyObject([]) // true
 * isEmptyObject(Person) // true
 * isEmptyObject(new Object()) // true
 * isEmptyObject(new Boolean()) // true
 * isEmptyObject(new Array()) // true
 * isEmptyObject(new Date('2017-12-11')) // true
 * isEmptyObject(new RegExp('\s+','ig')) // true
 * isEmptyObject(new String()) // true
 *
 * isEmptyObject(new Function()) // false
 * isEmptyObject(['']) // false
 * isEmptyObject(null) // false
 * isEmptyObject({name:'type.js'}) // -> false
 * isEmptyObject(new Person('yaohaixiao',30)) // false
 */
const isEmptyObject = (obj) => {
  let prop

  if (!isPlainObject(obj)) {
    return false
  }

  for (prop in obj) {
    /* istanbul ignore else */
    if (hasOwn(obj, prop)) {
      return false
    }
  }

  return true
}

export default isEmptyObject
