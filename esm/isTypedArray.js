import _type from './_type'
import isObjectLike from './isObjectLike'

/**
 * 检测测试数据是否为 TypedArray 类型
 * ========================================================================
 * @param val
 * @returns {boolean}
 */
const isTypedArray = (val) => {
  const isTyped =
    /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/
  return isObjectLike(val) && isTyped.test(_type(val))
}

export default isTypedArray
