import isPrototype from './isPrototype'
import isVNode from './isVNode'
import isXML from './isXML'

/**
 * （私有方法）获取确切的对象类型
 * ========================================================================
 * @method _getExactTypeOfString
 * @private
 * @param {String} val - 要检测的字符串
 * @returns {String} 返回对象类型：prototype、vnode、xml
 */
const _getExactTypeOfObject = (val) => {
  let name = 'object'

  if (isXML(val)) {
    name = 'xml'
  } else if (isVNode(val)) {
    name = 'vnode'
  } else if (isPrototype(val)) {
    name = 'prototype'
  }

  return name
}

export default _getExactTypeOfObject
