/**
 * 检测是否为 XML 文档
 * ========================================================================
 * @method isXML
 * @since 0.2.0
 * @category String
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 XML 文档，返回 true，否则返回 false
 * @example
 *
 * import jsdom from 'jsdom'
 * import { DOMParser } from 'xmldom'
 *
 * const { JSDOM } = jsdom;
 *
 * const HTML = new JSDOM('<html><head><title>isXML</title></head><body><p>p1</p><p>p2</p><p>p3</p></body></html>')
 * const XML = new DOMParser().parseFromString(
 *     '<xml xmlns="a" xmlns:c="./lite">\n'+
 *         '\t<child>test</child>\n'+
 *         '\t<child></child>\n'+
 *         '\t<child/>\n'+
 *     '</xml>','text/xml')
 *
 * isXML(XML) // -> true
 *
 * isXML('html') // -> false
 * isXML(HTML) // -> false
 */
const isXML = (val) => {
  const documentElement = val && (val.ownerDocument || val).documentElement
  return documentElement ? documentElement.nodeName !== 'HTML' : false
}

export default isXML
