export default isNull;
/**
 * 检测测试数据是否为 null
 * ========================================================================
 * @method isNull
 * @since 0.2.0
 * @category Primitive Values
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 为 null，返回 true，否则返回 false
 * @example
 *
 * let project
 *
 * isNull('') // -> false
 * isNull({}) // -> false
 * isNull(project) // -> false
 * isNull(0) // -> false
 * isNull(false) // -> false
 * isNull(Object.create(null)) // -> false
 *
 * isNull(null) // -> true
 */
declare function isNull(val: any): boolean;
