/**
 * 验证数据是否为 Buffer 类型
 * ========================================================================
 * @method isBuffer
 * @since 1.6.0
 * @category Object
 * @param {*} val - 待检测的数据
 * @returns {Boolean} 'val' 是 Buffer 类型返回 true，否则返回 false
 * @example
 *
 * const buffer = Buffer.alloc(15)
 *
 * isBuffer(new ArrayBuffer(8)) // -> false
 * isBuffer(new Uint8Array(2)) // -> false
 *
 * isBuffer(buffer) // -> true
 */
const isBuffer = (val) => {
  return Buffer ? Buffer.isBuffer(val) : false
}

export default isBuffer
