export default isConstructor;
/**
 * 检测测试函数是否为构造函数
 * ========================================================================
 * @method isConstructor
 * @since 0.2.0
 * @category Function
 * @param {Function|Object} fn - 要测试的（构造）函数
 * @returns {Boolean} - fn 是构造函数，返回 true，否则返回 false;
 * @example
 *
 * const fn = function(){};
 * const ff = class {};
 * const callback = () => {}
 *
 * isConstructor(fn) // -> true
 * isConstructor(ff) // -> true
 * isConstructor(callback) // -> false
 * isConstructor(console.log) // -> false
 *
 * isConstructor(Math) // -> false
 * isConstructor(Boolean) // -> true
 * isConstructor(Array) // -> true
 * isConstructor(Function) // -> true
 * isConstructor(Date) // -> true
 * isConstructor(RegExp) // -> true
 * isConstructor(Object) // -> true
 * isConstructor(Promise) // -> true
 */
declare function isConstructor(fn: Function | any): boolean;
