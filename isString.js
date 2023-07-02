import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为字符串
 *
 * @method isString
 * @param {*} obj - 要检测的数据
 * @returns {Boolean} 'val' 是字符串返回 true，否则返回 false
 */
const isString = (obj) => {
  return _type(obj) === TYPES.STRING
}

export default isString
