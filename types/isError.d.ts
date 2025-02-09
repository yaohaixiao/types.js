export default isError;
/**
 * 检测测试数据是否为 Error 类型
 * ========================================================================
 * @method isError
 * @since 0.2.0
 * @category Object
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Error 类型，返回 true，否则返回 false
 * @example
 *
 * const error = function Error(){}
 *
 * isError(new error()) // -> false
 * isError(new Error()) // -> true
 */
declare function isError(val: any): boolean;
