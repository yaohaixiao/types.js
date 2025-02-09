import _type from './utils/_type'
import isObject from './isObject'
import TYPES from './enum/types'

/**
 * 检测数据是否为 Promise 对象
 * ========================================================================
 * @method isPromise
 * @since 1.3.0
 * @category Object
 * @param {*} val - 测试数据
 * @returns {Boolean} 'val' 是 Promise 对象，返回 true，否则返回 false
 * @example
 *
 * const resolve = Promise.resolve
 * const reject = Promise.reject
 * const request = new Promise((resolve, reject) => {})
 * let val
 *
 * // 非对象参数
 * isPrototype(null) // => false
 * isPrototype(val) // => false
 * isPrototype('') // => false
 * isPrototype(12) // => false
 * isPrototype(false) // => false
 * isPrototype(BigInt(12)) // => false
 * isPrototype(Symbol('prop')) // => false
 *
 *
 * // 对象参数
 * isPrototype([]]) // => false
 * isPrototype({}) // => false
 * isPrototype(class {}) // => false
 * isPrototype(() => {}) // => false
 *
 * isPrototype(request) // => true
 * isPrototype(Promise.all([resolve, resolve]) // => true
 * isPrototype(Promise.any([resolve, reject]) // => true
 * isPrototype(resolve) // => true
 */
const isPromise = (val) => {
  return isObject(val) && _type(val) === TYPES.PROMISE
}

export default isPromise
