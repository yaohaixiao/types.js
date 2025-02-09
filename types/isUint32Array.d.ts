export default isUint32Array;
/**
 * 检测测试数据是否为 Uint32Array 的数组
 * ========================================================================
 * @method isUint32Array
 * @since 0.2.0
 * @category Typed Arrays
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Uint32Array 类型，返回 true，否则返回 false
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
 * isInt32Array(numbers) // -> false
 * isInt32Array(new Array(32)) // -> false
 * isInt32Array(args) // -> false
 * isInt32Array(new Int32Array()) => true
 */
declare function isUint32Array(val: any): boolean;
