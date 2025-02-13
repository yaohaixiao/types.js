export default isNode;
/**
 * 检测测试数据是否为 Node 实例
 * ========================================================================
 * @method isNode
 * @since 2.7.0
 * @category Element
 * @param {*} val - 要检测的数据
 * @return {Boolean} 'val' 是 Node 实例，返回 true，否则返回 false
 * @example
 *
 * isNode(document.createElement('div')) // -> true
 *
 * isNode(document.createTextNode('text')) // -> true
 *
 * isNode(document.createDocumentFragment()) // -> true
 *
 * isNode(document.createElementNS('http://www.w3.org/2000/svg', 'svg')) // -> true
 *
 * isNode({}) // -> false
 */
declare function isNode(val: any): boolean;
