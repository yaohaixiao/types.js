export default isObject;
/**
 * 检测测试数据是否为对象
 * ========================================================================
 * @method isObject
 * @since 0.2.0
 * @category Object
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 为对象，返回 true，否则返回 false
 * @example
 *
 * const $list = document.getElementById('list')
 *
 * // True
 * isObject({}) // => true
 * isObject(Object) // => true
 * isObject(new Object()) // => true
 * isObject(Object.create(null)) // => true
 * isObject([]) // => true
 * isObject(() => {}) // => true
 * isObject(class {}) // => true
 * isObject($list) // => true
 *
 * // False
 * isObject('null') // => false
 * isObject(1) // => false
 * isObject(false) // => false
 * isObject(Symbol('ok')) // => false
 * isObject($list) // => false
 *
 * // 针对 null，type.js 认为不是一个有效对象
 * // 以避免将 null 作为普通对象操作导致的错误
 * isObject(null) // => false
 */
declare function isObject(val: any): boolean;
