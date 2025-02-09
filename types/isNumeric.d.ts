export default isNumeric;
/**
 * 检测测试数据是否是一个数字（只能是 number 类型或者 '123123' 这样的数字字符串）
 * ========================================================================
 * @method isNumeric
 * @since 0.2.0
 * @category Number
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是一个数字，返回 true，否则返回false
 * @example
 *
 * isNumeric(2) // -> true
 * isNumeric(2.4) // -> true
 * isNumeric(-2) // -> true
 * isNumeric(0xffffff) // -> true
 * isNumeric(3.1415926E8) // -> true
 * isNumeric('33') // -> true
 * isNumeric('0xffffff') // -> true
 *
 * isNumeric(NaN) // -> false
 * isNumeric(Infinity) // -> false
 * isNumeric(-Infinity) // -> false
 */
declare function isNumeric(val: any): boolean;
