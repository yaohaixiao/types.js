export default isBigUint64Array;
/**
 * 检测测试数据的数据类型是否为 BigUint64Array 类型。
 * ========================================================================
 * @method isBigUint64Array
 * @since 0.6.0
 * @category Typed Arrays
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 为 BigUint64Array 类型，返回 true，否则返回 false
 * @example
 *
 * const arr = [9007199254740992]
 * cong bigint64 = new BigInt64Array(42)
 *
 * isBigUint64Array(arr) // -> false
 * isBigUint64Array(bigint64) // -> true
 */
declare function isBigUint64Array(val: any): boolean;
