export default isEven;
/**
 * 检测测试数据的数据类型是否为偶数
 * ========================================================================
 * @method isEven
 * @since 0.2.0
 * @category Number
 * @param {Number} val - 要检测的数据
 * @returns {Boolean} 'val' 是偶数，返回 true，否则返回 false
 * @example
 *
 * isEven(2) // -> true
 * isEven(2.0) // -> true
 * isEven('2') // -> false
 *
 * isEven(3) // -> false
 * isEven(2.2) // -> false
 */
declare function isEven(val: number): boolean;
