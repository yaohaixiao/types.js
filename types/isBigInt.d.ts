export default isBigInt;
/**
 * 检测测试数据的数据类型是否为 BigInt 类型。
 * ========================================================================
 * @method isBigInt
 * @since 0.6.0
 * @category Primitive Values
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 为 BigInt 类型，返回 true，否则返回 false
 * @example
 *
 * const MAX_SAFE_INTEGER = 9007199254740991
 * const bigint = BigInt(MAX_SAFE_INTEGER + 1)
 *
 * isBigInt(MAX_SAFE_INTEGER) // -> false
 * isBigInt(bigint) // -> true
 */
declare function isBigInt(val: any): boolean;
