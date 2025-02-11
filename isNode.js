import getWindow from './utils/getWindow'

/**
 * 检测测试数据是否为 Node 实例
 * ========================================================================
 * @method isNode
 * @since 2.7.0
 * @category DOM
 * @param {*} val - 要检测的数据
 * @return {Boolean} 'val' 是 Node 实例，返回 true，否则返回 false
 */
const isNode = (val) => {
  return val instanceof getWindow(val).Node;
}

export default isNode
