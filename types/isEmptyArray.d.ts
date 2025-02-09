export default isEmptyArray;
/**
 * 检测测试数据是否为空字数组
 * ========================================================================
 * @method isEmptyArray
 * @since 0.6.0
 * @category Array
 * @param {*} val - （必须）待检测的数据
 * @returns {Boolean} 'val' 是空数组，返回 true，否则返回 false
 * @example
 *
 * isEmptyArray(new Int8Array([]) // -> false
 *
 * isEmptyArray([]) // -> true
 *
 * isEmptyArray(new Array) // -> true
 *
 * isEmptyArray([1]) // -> false
 */
declare function isEmptyArray(val: any): boolean;
