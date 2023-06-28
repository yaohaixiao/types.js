import isArrayLike from './isArrayLike'
import isObjectLike from './isObjectLike'

/**
 * 检测测试数据是否为 ArrayLike 的对象数据
 * ========================================================================
 * @param {Object | Array} val
 * @returns {Boolean}
 */
const isArrayLikeObject = (val) => {
  return isObjectLike(val) && isArrayLike(val)
}

export default isArrayLikeObject
