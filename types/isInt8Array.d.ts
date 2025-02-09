export default isInt8Array;
/**
 * 检测测试数据是否为 Int8Array 的数组
 * ========================================================================
 * @method isInt8Array
 * @since 0.2.0
 * @category Typed Arrays
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Int32Array 类型，返回 true，否则返回 false
 * @example
 *
 * isInt8Array([]) // -> false
 * isInt8Array(new Array(8)) // -> false
 * isInt8Array(new Int8Array([])) // -> true
 */
declare function isInt8Array(val: any): boolean;
