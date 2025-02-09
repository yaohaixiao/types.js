export default isString;
/**
 * 检测测试数据是否为字符串
 * ========================================================================
 * @method isString
 * @since 0.2.0
 * @category Primitive Values
 * @param {*} obj - 要检测的数据
 * @returns {Boolean} 'val' 是字符串，返回 true，否则返回 false
 * @example
 *
 * const text = document.createTextNode('text')
 *
 * isString('') // -> true
 * isString(String(2)) // -> true
 * isString(2 + '0') // -> true
 *
 * isString(2) // -> false
 * isString(new String()) // -> false
 * isString(text) // -> false
 */
declare function isString(obj: any): boolean;
