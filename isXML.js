/**
 * 检测是否为 XML 文档
 * ========================================================================
 * @method isXML
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 XML 文档，返回 true，否则返回 false
 */
const isXML = (val) => {
  const documentElement = val && (val.ownerDocument || val).documentElement
  return documentElement ? documentElement.nodeName !== 'HTML' : false
}

export default isXML
