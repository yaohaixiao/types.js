export default isTypedArray;
/**
 * 检测测试数据是否为 TypedArray 类型
 * ========================================================================
 * @method isTypedArray
 * @since 0.2.0
 * @category Typed Arrays
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 type arrays 类型，返回 true，否则返回 false
 * @example
 *
 * const numbers = [ 2, 4 ]
 * let args
 *
 * function test(str) {
 *   args = arguments
 *   return str
 * }
 *
 * test('str')
 *
 * isTypedArray( args ) // -> false
 * isTypedArray( numbers ) // -> false
 * isTypedArray( new Array() ) // -> false
 *
 * isTypedArray(new Int8Array([])) // -> true
 * isTypedArray(new Int16Array([])) // -> true
 * isTypedArray(new Int32Array([])) // -> true
 *
 * isTypedArray(new Uint8ClampedArray([])) // -> true
 * isTypedArray(new Uint8Array([])) // -> true
 * isTypedArray(new Uint16Array([])) // -> true
 * isTypedArray(new Uint32Array([])) // -> true
 *
 * isTypedArray(new Float32Array([])) // -> true
 * isTypedArray(new Float64Array([])) // -> true
 *
 * isTypedArray(new BigInt64Array(42)) // -> true
 * isTypedArray(new BigUint64Array(42)) // -> true
 */
declare function isTypedArray(val: any): boolean;
