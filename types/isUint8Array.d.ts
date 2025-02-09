export default isUint8Array;
/**
 * 检测测试数据是否为 Uint8Array 的数组
 * ========================================================================
 * @method isUint8Array
 * @since 0.2.0
 * @category Typed Arrays
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Uint8Array 类型，返回 true，否则返回 false
 * @example
 *
 * const numbers = [ 2, 4 ]
 * let args
 *
 * function test(a){
 *   args = arguments
 *   return a === 'test'
 * }
 *
 * test()
 *
 * isUint8Array(numbers) // -> false
 * isUint8Array(new Array(32)) // -> false
 * isUint8Array(args) // -> false
 * isUint8Array(new Uint8Array()) // -> true
 */
declare function isUint8Array(val: any): boolean;
