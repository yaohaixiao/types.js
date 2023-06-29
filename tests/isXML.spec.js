import isXML from 'esm/isXML'
import jsdom from 'jsdom'
import { DOMParser } from 'xmldom'

describe('isXML() 方法：', () => {
  it(`isXML('html'), 返回：false`, () => {
    expect(isXML('html')).toBe(false)
  })

  it(`isXML(HTML), 返回：false`, () => {
    const { JSDOM } = jsdom
    const HTML = new JSDOM('&lt;html&gt;&lt;head&gt;&lt;title&gt;isXML&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;p&gt;p1&lt;/p&gt;&lt;p&gt;p2&lt;/p&gt;&lt;p&gt;p3&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;');

    expect(isXML(HTML)).toBe(false)
  })

  it(`isXML(XML), 返回：true`, () => {
    const XML = new DOMParser().parseFromString(
      '<xml xmlns="a" xmlns:c="./lite">\n' +
      '\t<child>test</child>\n' +
      '\t<child></child>\n' +
      '\t<child/>\n' +
      '</xml>',
      'text/xml'
    )

    expect(isXML(XML)).toBe(true)
  })
})
