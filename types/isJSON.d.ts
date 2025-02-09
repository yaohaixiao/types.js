export default isJSON;
/**
 * 检测测试数据是否为 JSON 格式字符串数据
 * ========================================================================
 * @method isJSON
 * @since 0.2.0
 * @category String
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 JSON 格式字符串，返回 true，否则返回 false
 * @example
 *
 * // String
 * isJSON('') // -> false
 * isJSON("") // -> false
 * isJSON("json") // -> true
 *
 * // Number
 * isJSON(3) // -> false
 * isJSON("3") // -> true
 *
 * // Boolean
 * isJSON(false) // -> false
 * isJSON("false") // -> true
 *
 * // Object
 * isJSON(null) // -> false
 * isJSON("null") // -> true
 *
 * isJSON({ prop: 'JSON' }) // -> false
 * isJSON("{\"prop\":\"JSON\"}") // -> true
 *
 * // Array
 * isJSON([1, 2, 3]) // -> false
 * isJSON("[1, 2, 3]") // -> true
 */
declare function isJSON(val: any): boolean;
