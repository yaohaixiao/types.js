export default isEmptyArguments;
/**
 * 检测测试 arguments 对象长度为 0
 * ========================================================================
 * @method isEmptyArguments
 * @since 2.6.0
 * @category Arguments
 * @param {*} val - val 待检测的数据。
 * @returns {Boolean} true - 表示检测 arguments 对象长度为 0，false 则表示不是。
 * @example
 *
 * let args
 * const fn = function () {arg = arguments}
 *
 * fn()
 *
 * isEmptyArguments(args) // -> true
 *
 * fn(1)
 *
 * isEmptyArguments(args) // -> false
 */
declare function isEmptyArguments(val: any): boolean;
