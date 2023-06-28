import _type from './_type'
import { TYPES } from './enum'

/**
 * 检测数据的是否为 HTMLNodeList 对象
 * ========================================================================
 * @method isHTMLCollection
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 HTMLNodeList 对象返回 true，否则返回 false
 */
const isHTMLCollection = (val) => {
  return _type(val) === TYPES.COLLECTION
}

export default isHTMLCollection
