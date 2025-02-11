/**
 * @jest-environment jsdom
 */
import isWindow from '../isWindow'
import is from '../is'

describe('isWindow() 方法：', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-home" id="item-home">\n' +
    '    <span>Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-support" id="item-support">\n' +
    '    <span id="text">Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-faqs" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  it(`isWindow(document.getElementById('list')), 返回：false`, () => {
    const $list = document.getElementById('list')
    expect(is($list)).toBe('element')
    expect(isWindow($list)).toBe(false)
  })

  it(`isWindow(document.createElement('div')), 返回：false`, () => {
    const $div = document.createElement('div')
    expect(is($div)).toBe('element')
    expect(isWindow($div)).toBe(false)
  })

  it(`isWindow(document.createTextNode('text')), 返回：false`, () => {
    const $text = document.createTextNode('text')
    expect(is($text)).toBe('text')
    expect(isWindow($text)).toBe(false)
  })

  it(`isWindow(document.createDocumentFragment()), 返回：false`, () => {
    const $fragment = document.createDocumentFragment()
    expect(is($fragment)).toBe('fragment')
    expect(isWindow($fragment)).toBe(false)
  })

  it(`isWindow(document.querySelectorAll('.item')), 返回：false`, () => {
    const $items = document.querySelectorAll('.item')
    expect(is($items)).toBe('collection')
    expect(isWindow($items)).toBe(false)
  })

  it(`isWindow(window), 返回：true`, () => {
    expect(isWindow(window)).toBe(true)
  })


  it(`isWindow({document: {}}), 返回：true`, () => {
    const nonWindowObject = {
      // 模拟部分 Window 对象的属性，但不完整
      document: {},
      location: {},
      // 故意缺少 alert 和 setInterval 属性
    }
    expect(isWindow(nonWindowObject)).toBe(false)
  })

  it(`isWindow(null), 返回：false`, () => {
    expect(isWindow(null)).toBe(false)
  })
})
