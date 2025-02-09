export default isSet;
/**
 * 检测测试数据是否为 Set 类型
 * ========================================================================
 * @method isSet
 * @since 0.2.0
 * @cagegory Keyed Collections
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Set 类型，返回 true，否则返回 false
 * @example
 *
 * const set = new Set([1, 2, 3, 4])
 * const arr = [1, 2, 3, 4]
 *
 * isSet(set) // -> true
 *
 * isSet(arr) // -> false
 */
declare function isSet(val: any): boolean;
