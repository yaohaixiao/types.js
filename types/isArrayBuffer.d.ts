export default isArrayBuffer;
/**
 * 检测测试数据是否为 ArrayBuffer 类型
 * ========================================================================
 * @method isArrayBuffer
 * @since 0.2.0
 * @category Typed Arrays
 * @param {ArrayBuffer} val
 * @return {Boolean} ‘val’ 是 isArrayBuffer 类型，返回 true，否则返回 false
 * @example
 *
 * isArrayBuffer([]) // -> false
 * isArrayBuffer(new ArrayBuffer(8)) // -> true
 */
declare function isArrayBuffer(val: ArrayBuffer): boolean;
