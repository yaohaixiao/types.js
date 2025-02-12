export default isNaN;
/**
 * 检测测试数据是否为 NaN
 * ========================================================================
 * @method isNaN
 * @since 2.7.0
 * @category Number
 * @see https://mdn.io/Number/isNaN
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 NaN，返回 true，否则返回 false
 * @example
 *
 * isNaN(NaN) // => true
 *
 * isNaN(new Number(NaN)) // => true
 *
 * isNaN(undefined) // => true
 *
 * isNaN(undefined) // => false
 */
declare function isNaN(val: any): boolean;
