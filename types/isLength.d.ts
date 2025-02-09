export default isLength;
/**
 * 检测测试数据是否为有效 length 值
 * =============================================================
 * @method isLength
 * @since 0.2.0
 * @category Number
 * @param {Number} val - 要检测的数据
 * @returns {Boolean} 'val' 是有效 length 值，返回 true，否则返回 false
 * @example
 *
 * // True
 * isLength(256) // -> true
 * isLength(0x00ff11) // -> true
 * isLength(9007199254740991) // -> true
 *
 * // False
 * isLength(9007199254740992) // -> false
 * isLength(Infinity) // -> false
 * isLength(-1) // -> false
 */
declare function isLength(val: number): boolean;
