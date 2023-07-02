import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为正则表达式
 * ========================================================================
 * @method isRegExp
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是正则表达式返回 true，否则返回 false
 */
const isRegExp = (val) => {
  return _type(val) === TYPES.REGEXP
}

export default isRegExp
