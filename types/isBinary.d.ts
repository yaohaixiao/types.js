export default isBinary;
/**
 * isBinary(val) 方法用来检测测试数据是二进制（字符串）数据。
 * ========================================================================
 * @method isBinary
 * @since 1.11.0
 * @param {*} buffer
 * @returns {Boolean}
 * @example
 *
 * const buffer = Buffer.alloc(15)
 *
 * isBinary('Z29vZA==') // -> false
 * isBinary(isArrayBuffer(8)) // -> false
 *
 * isBinary(buffer) // -> true
 * isBinary(buffer.toString()) // -> true
 */
declare function isBinary(buffer: any): boolean;
