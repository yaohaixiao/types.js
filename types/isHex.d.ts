export default isHex;
/**
 * 检测测试数据是否为 16 进制编码的字符串
 * ========================================================================
 * @method isHex
 * @since 0.2.0
 * @category String
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 16 进制编码的字符串，返回 true，否则返回 false
 * @example
 *
 * isHex('#ffffff') // -> true
 * isHex('f3f3f3') // -> true
 * isHex('#h1f1f1') // -> false
 * isHex('h1f1x1') // -> false
 */
declare function isHex(val: any): boolean;
