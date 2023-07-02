/**
 * @jest-environment jsdom
 */
import isArguments from '../isArguments'
import is from '../is'
describe('isArguments() 方法：', () => {
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

  it(`is(isArguments({ '0': 3, '1': 4, length: 2 })), 返回：false`, () => {
    const args = { '0': 3, '1': 4, length: 2 }
    expect(isArguments(args)).toBe(false)
  })

  it(`is(isArguments([])), 返回：false`, () => {
    expect(isArguments([])).toBe(false)
  })

  it(`is(isArguments(document.querySelectorAll('.item'))), 返回：false`, () => {
    const $items = document.querySelectorAll('.item')
    expect(isArguments($items)).toBe(false)
  })

  it(`is(isArguments(arguments)), 返回：true`, () => {
    let args

    function sum(a, b) {
      args = arguments
      return a + b
    }

    sum(3, 6)

    expect(is(args)).toBe('arguments')
    expect(isArguments(args)).toBe(true)
  })
})
