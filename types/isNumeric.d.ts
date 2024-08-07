export default isNumeric;
/**
 * 检测测试数据是否是一个数字（只能是 number 类型或者 '123123' 这样的数字字符串）
 * ========================================================================
 * @method isNumeric
 * @category Lang
 * @param {Number|String} val - 要检测的数据
 * @returns {Boolean} 'val' 是一个数字，返回 true，否则返回false
 */
declare function isNumeric(val: number | string): boolean;
