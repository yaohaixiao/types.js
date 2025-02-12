export default isSafeInteger;
/**
 * 检测测试数据是否为安全的 Integer 值
 * ========================================================================
 * @method isSafeInteger
 * @since 2.7.0
 * @category Number
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 是安全的 Integer 值，返回 true，否则返回 false
 * @example
 *
 * isSafeInteger(3) // => true
 *
 * isSafeInteger(Number.MIN_VALUE) // => false
 *
 * isSafeInteger(Infinity) // => false
 *
 * isSafeInteger('3') // => false
 */
declare function isSafeInteger(val: any): boolean;
