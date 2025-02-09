export default isUndefined;
/**
 * 检测测试数据是否 undefined（未定义）
 * ========================================================================
 * @method isUndefined
 * @since 0.2.0
 * @category Primitive Values
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 undefined（未定义），返回 true，否则返回 false
 * @example
 *
 * let projects
 *
 * isUndefined(projects) // -> true
 *
 * isUndefined([]) // -> false
 * isUndefined('') // -> false
 * isUndefined(0) // -> false
 * isUndefined(NaN) // -> false
 * isUndefined({}) // -> false
 * isUndefined(null) // -> false
 */
declare function isUndefined(val: any): boolean;
