export default isPrimitive;
/**
 * 检测测试数据是否为原始值类型
 * ========================================================================
 * @method isPrimitive
 * @since 2.6.0
 * @category Primitive Values
 * @param {*} val - 要检测的数据
 * @returns {Boolean} - 'val' 是原始值类型，返回 true，否则返回 false
 * @exammple
 *
 * let num
 * const MAX_SAFE_INTEGER = 9007199254740991
 * const bigint = BigInt(MAX_SAFE_INTEGER + 1)
 *
 * // True
 * isPrimitive(1) // -> true
 * isPrimitive('num') // -> true
 * isPrimitive(false) // -> true
 * isPrimitive(null) // -> true
 * isPrimitive(num) // -> true
 * isPrimitive(Symbol('foo')) // -> true
 * isPrimitive(bigint) // -> true
 *
 * // False
 * isPrimitive([]) // -> false
 * isPrimitive({}) // -> false
 * isPrimitive(()=>{}) // -> false
 */
declare function isPrimitive(val: any): boolean;
