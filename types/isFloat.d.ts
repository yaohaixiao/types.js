export default isFloat;
/**
 * 检测测试数据是否为整数
 * ========================================================================
 * @method isFloat
 * @since 0.2.0
 * @category Number
 * @param {Number} val - 要检测的数据
 * @returns {Boolean} 'val' 是整数，返回 true，否则返回 false
 * @example
 *
 * isFloat(.1) // -> true
 * isFloat(1.01) // -> true
 * isFloat(Number("3.4556645445E7")) // -> true
 * isFloat(Number("3.4556645445E10")) // -> false
 * isFloat(2.0) // -> false
 * isFloat(0xffffff) // -> false
 * isFloat(NaN) // -> false
 * isFloat(Infinity) // -> false
 */
declare function isFloat(val: number): boolean;
