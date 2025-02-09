export default isHTML;
/**
 * 检测测试数据是否为合法的 HTML 代码
 * ========================================================================
 * @method isHTML
 * @since 0.5.0
 * @category String
 * @see https://github.com/sindresorhus/html-tags
 * @see https://github.com/sindresorhus/is-html
 * @param {String} str - 要检测的数据
 * @returns {Boolean} 'val' 为合法的 HTML 代码，返回 true，否则返回 false
 * @example
 *
 * // 包含 doctype 标签：
 * isHTML('<!doctype html>') // -> true
 * isHTML('\n\n<!doctype html><html>') // -> true
 *
 * // 包含：<html>，<body> 或者 <x-*> 标签：
 * isHTML('<html>') // -> true
 * isHTML('<html></html>') // -> true
 * isHTML('<html lang="en"></html>') // -> true
 * isHTML('<html><body></html>') // -> true
 * isHTML('<html><body class="no-js"></html>') // -> true
 * isHTML('<x-unicorn>') // -> true
 *
 * // 包含任何合法的 HTML 标签：
 * isHTML('<p>foo</p>') // -> true
 * isHTML('<a href="#">foo</a>') // -> true
 * isHTML('<br />') // -> true
 *
 * // 无法匹配 XML 标签：
 * isHTML('<attribute>address</attribute>') // -> false
 * isHTML('<address>Wuhan City</address>') // -> false
 * isHTML('<age>20</age>') // -> false
 * isHTML('<gender>mail</gender>') // -> false
 * isHTML('<career>programmer</career>') // -> false
 */
declare function isHTML(str: string): boolean;
