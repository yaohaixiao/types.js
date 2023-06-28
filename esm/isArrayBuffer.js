import _type from './_type'
import { TYPES } from './enum'

/**
 * 检测测试数据是否为 ArrayBuffer 类型
 * ========================================================================
 * @method isArrayBuffer
 * @param {*} val
 * @return {Boolean}
 */
function isArrayBuffer(val) {
  return _type(val) === TYPES.ARRAY_BUFFER
}

export default isArrayBuffer
