import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为字符串
 * ========================================================================
 * @method isString
 * @category Lang
 * @param {*} obj - 要检测的数据
 * @returns {Boolean} 'val' 是字符串，返回 true，否则返回 false
 */
const isString = (obj) => {
  return _type(obj) === TYPES.STRING
}

export default isString
