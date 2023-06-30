/**
 * 检测是否为 XML 文档
 * ========================================================================
 * @method isXML
 * @param {*} val
 * @returns {Boolean}
 */
const isXML = (val) => {
  const documentElement = val && (val.ownerDocument || val).documentElement
  return documentElement ? documentElement.nodeName !== 'HTML' : false
}

export default isXML
