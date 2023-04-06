import hasOwn from './hasOwn'

/**
 * 检测测试数据是否为空（单体）对象
 * ========================================================================
 * @method isEmptyObject
 * @param {Object|*} obj - 要检测的数据
 * @returns {boolean} 'val' 是空对象返回 true，否则返回 false
 */
const isEmptyObject = (obj) => {
  let prop

  for (prop in obj) {
    if (hasOwn(obj, prop)) {
      return false
    }
  }

  return true
}

export default isEmptyObject
