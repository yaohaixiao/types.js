import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 Array 类型
 * ========================================================================
 * @method isArray
 * @since 0.2.0
 * @category Array
 * @param {*} val - 要检测的数据
 * @returns {Boolean} - 'val' 是 Array 类型，返回 true，否则返回 false
 * @example
 *
 * // True
 * isArray([]) // -> true
 * isArray(new Array()) // -> true
 * isArray('type.js'.split('')) // -> true
 *
 * // False
 * // 虽然  arguments 对象看起来也像数组，但是它也不是数组
 * isArray(args) // -> false
 * // 虽然 HTMLNodeList 的看起来像数组，但它并不是数组
 * isArray(document.getElementsByTagName('li')) // -> false
 * isArray(LooksLike) // -> false
 * isArray(new Int8Array()) // -> false
 */
const isArray = (val) => {
  return Array.isArray ? Array.isArray(val) : _type(val) === TYPES.ARRAY
}

export default isArray
