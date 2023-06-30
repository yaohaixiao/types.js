import hasOwn from './hasOwn'
import isObject from './isObject'

/**
 * 判断是否未 VNode 对象
 * =============================================================
 * @param {Object} node
 * @returns {Boolean}
 */
const isVNode = (node) => {
  return node !== null && isObject(node) && hasOwn(node, 'componentOptions')
}

export default isVNode
