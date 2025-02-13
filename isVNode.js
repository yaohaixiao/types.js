import hasOwn from './utils/hasOwn'
import isObject from './isObject'

/**
 * 判断是否未 VNode 对象
 * =============================================================
 * @method isVNode
 * @since 0.2.0
 * @category Element
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 VNode 类型，返回 true，否则返回 false
 * @example
 *
 * export default {
 *   name: 'PageHeader',
 *   mounted() {
 *     const $header = this.$refs.header
 *
 *     isVNode($header) // -> true
 *   }
 * }
 */
const isVNode = (val) => {
  return val !== null && isObject(val) && hasOwn(val, 'componentOptions')
}

export default isVNode
