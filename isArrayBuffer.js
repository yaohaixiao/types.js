import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 ArrayBuffer 类型
 * ========================================================================
 * @method isArrayBuffer
 * @category Lang
 * @param {*} val
 * @return {Boolean} ‘val’ 是 isArrayBuffer 类型，返回 true，否则返回 false
 */
function isArrayBuffer(val) {
  return _type(val) === TYPES.ARRAY_BUFFER
}

export default isArrayBuffer
