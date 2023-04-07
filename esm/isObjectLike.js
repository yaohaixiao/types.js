/**
 * 检测测试数据是否为类似 Object 类型
 * ========================================================================
 * @method isObjectLike
 * @param val
 * @returns {boolean}
 */
const isObjectLike = (val) => {
  return typeof val === 'object' && val !== null
}

export default isObjectLike
