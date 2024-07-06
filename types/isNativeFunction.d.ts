export default isNativeFunction;
/**
 * 检测测试数据是否为 JavaScript 内置函数
 * ========================================================================
 * @method isNativeFunction
 * @param {Function|Object} fn - 要测试的函数
 * @returns {Boolean} - fn 是内置函数，返回 true，否则返回 false;
 */
declare function isNativeFunction(fn: Function | any): boolean;
