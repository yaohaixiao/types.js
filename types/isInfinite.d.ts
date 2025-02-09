export default isInfinite;
/**
 * 检测测试数据的数据是正无穷或者负无穷
 * ========================================================================
 * @method isInfinite
 * @since 0.2.0
 * @category Number
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是正无穷或者负无穷，返回 true，否则返回 false
 * @example
 *
 * isInfinite(2.4) // -> false
 *
 * isInfinite(Infinity) // -> true
 * isInfinite(-Infinity) // -> true
 */
declare function isInfinite(val: any): boolean;
