export default isConstructor;
/**
 * 检测测试函数是否为构造函数
 * ========================================================================
 * @method isConstructor
 * @category Lang
 * @param {Function|Object} fn - 要测试的（构造）函数
 * @returns {Boolean} - fn 是构造函数，返回 true，否则返回 false;
 */
declare function isConstructor(fn: Function | any): boolean;
