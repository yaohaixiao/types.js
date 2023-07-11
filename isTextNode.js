import _type from './_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为文本节点
 * ========================================================================
 * @method isTextNode
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是文本节点，返回 true，否则返回 false
 */
const isTextNode = (val) => {
  const type = _type(val)
  return type === TYPES.TEXT
}

export default isTextNode
