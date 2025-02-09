export default isPlainObject;
/**
 * 检测测试数据是否为普通对象
 * ========================================================================
 * @method isPlainObject
 * @since 0.2.0
 * @category Object
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是普通对象，返回 true，否则返回 false
 * @example
 *
 * let udf
 *
 * // 基础类型
 * isPlainObject(2) // -> false
 * isPlainObject('str') // -> false
 * isPlainObject(false) // -> false
 * isPlainObject(null) // -> false
 * isPlainObject(udf) // -> false
 *
 * // 引用类型
 * isPlainObject(new Function()) // -> false
 * isPlainObject(function(){}) // -> false
 * isPlainObject(() => {}) // -> false
 * isPlainObject(class{}) // -> false
 *
 * isPlainObject(new class{}) // -> true
 * isPlainObject({}) // -> true
 * isPlainObject(Object.create(null)) // -> true
 * isPlainObject(new Object()) // -> true
 * isPlainObject([]) // -> true
 * isPlainObject(/s+/ig) // -> true
 * isPlainObject(new String()) // -> true
 * isPlainObject(new Number()) // -> true
 * isPlainObject(new Boolean()) // -> true
 * isPlainObject(new Array()) // -> true
 * isPlainObject(new Date()) // -> true
 */
declare function isPlainObject(val: any): boolean;
