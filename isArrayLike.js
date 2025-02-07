import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据的数据类型是否为类似数组（array、arguments 对象或者
 * HTMLNodeList 对象）类型。
 * ========================================================================
 * @method isArrayLike
 * @param {*} val - 要检测是的数据
 * @returns {Boolean} 'val' 是 array、arguments 或者 HTMLNodeList 类型返回 true，否则返回 false
 */
const isArrayLike = (val) => {
  const type = _type(val)

  return (
    type === TYPES.ARRAY ||
    type === TYPES.ARGUMENTS ||
    type === TYPES.COLLECTION
  )
}

export default isArrayLike
