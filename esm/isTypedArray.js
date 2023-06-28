import _type from './_type'
/**
 * 检测测试数据是否为 TypedArray 类型
 * ========================================================================
 * @param {*} val
 * @returns {Boolean}
 */
const isTypedArray = (val) => {
  const type = _type(val)
  const isTyped = /^(Float(?:32|64)|(Int|Uint)(?:8|16|32)|Uint8Clamped)Array$/i
  return isTyped.test(type)
}

export default isTypedArray
