export default isWindow;
/**
 * 检测测试数据是否为 Window 对象
 * ========================================================================
 * @method isWindow
 * @since 2.7.0
 * @category Element
 * @param {*} val - 要检测的数据
 * @return {Boolean} 'val' 是 Window 对象，返回 true，否则返回 false
 * @example
 *
 * const $list = document.getElementById('list')
 *
 * Types.is($list) // -> 'element'
 * Types.isWindow($list) // -> false
 *
 * Types.isWindow(window) // -> true
 *
 * const nonWindowObject = {
 *   // 模拟部分 Window 对象的属性，但不完整
 *   document: {},
 *   location: {},
 *   // 缺少 alert 和 setInterval 属性
 * }
 *
 * Types.isWindow(nonWindowObject) // -> false
 *
 * Types.isWindow(null) // -> false
 */
declare function isWindow(val: any): boolean;
