import _type from './_type'
/**
 * 检测测试数据是否为 TypedArray 类型
 * ========================================================================
 * @method isTypedArray
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 type arrays 类型，返回 true，否则返回 false
 */
const isTypedArray = (val) => {
  const type = _type(val)
  const isTyped =
    /^(?:Float(?:32|64)|(Int|Uint)(?:8|16|32)|Uint8Clamped|Big(Int|Uint)64)Array$/i
  return isTyped.test(type)
}

export default isTypedArray
