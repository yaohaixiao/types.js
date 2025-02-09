export default isDate;
/**
 * 检测测试数据的数据类型是否为 Date 类型
 * ========================================================================
 * @method isDate
 * @since 0.2.0
 * @category Object
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 为 Date 类型，返回 true，否则返回 false
 * @example
 *
 * const time = new Date()
 *
 * isDate(time) // -> true
 * isDate('2017-07-06') // -> false
 * isDate(time.getFullYear()) // -> false
 */
declare function isDate(val: any): boolean;
