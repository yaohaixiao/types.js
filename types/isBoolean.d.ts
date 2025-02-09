export default isBoolean;
/**
 * 检测测试数据是否为 Boolean 类型
 * ========================================================================
 * @method isBoolean
 * @since 0.2.0
 * @category Primitive Values
 * @param {Boolean} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Boolean 类型，则返回 true，否则返回 false
 * @example
 *
 * let projects
 *
 * // False
 * isBoolean(1) // -> false
 * isBoolean('') // -> false
 * isBoolean(null) // -> false
 * isBoolean(NaN) // -> false
 * isBoolean(projects) // -> false
 *
 * // True
 * isBoolean(!!0) // -> true
 * isBoolean(false) // -> true
 * isBoolean(true) // -> true
 * isBoolean(Boolean('1')) // -> true
 * isBoolean(new Boolean('')) // -> false
 * isBoolean(!!projects) // -> true
 */
declare function isBoolean(val: boolean): boolean;
