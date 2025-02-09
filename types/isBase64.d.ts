export default isBase64;
/**
 * 检测测试数据是否为一个基于 base64 编码的字符串。
 * ========================================================================
 * @method isBase64
 * @since 0.2.0
 * @category String
 * @param {String} val - 要检测的数据
 * @return {Boolean} 'val' 是 base64 编码的字符串，返回 true，否则返回 false
 * @example
 *
 * isBase64('Z29vZA==') // -> true
 * isBase64('aXNCYXNlNjQ=2') // -> false
 */
declare function isBase64(val: string): boolean;
