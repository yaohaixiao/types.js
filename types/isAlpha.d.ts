export default isAlpha;
/**
 * 检测测试数据是否仅包含英文字符
 * ========================================================================
 * @method isAlpha
 * @since 2.1.0
 * @category String
 * @param {*} str - 要检测的数据
 * @returns {Boolean} 'str' 仅包含英文字符，返回 true，否则返回 false
 * @example
 *
 * isAlpha('aaa') // -> true
 * isAlpha('good') // -> true
 *
 * isAlpha('ok!') // -> false
 * isAlpha('is alpha') // -> false
 */
declare function isAlpha(str: any): boolean;
