/**
 * @jest-environment jsdom
 */
import isArrayLike from '../isArrayLike'
import is from '../is'
import isArrayLikeObject from '../isArrayLikeObject'

describe('isArrayLike() 方法：', () => {
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

  it(`isArrayLike(['a', 'b', 'c']), 返回：true`, () => {
    expect(isArrayLike(['a', 'b', 'c'])).toBe(true)
  })

  it(`isArrayLike(arguments), 返回：true`, () => {
    let args

    function getAge(age) {
      args = isArrayLike(arguments)
      return age + 18
    }

    getAge(30)

    expect(args).toBe(true)
  })

  it(`isArrayLike(document.querySelectorAll('.item')), 返回：true`, () => {
    const $items = document.querySelectorAll('.item')
    expect(isArrayLike($items)).toBe(true)
  })

  it(`isArrayLike({ '0': 1, '1': 2, length: 2 }), 返回：false`, () => {
    const o = { '0': 1, '1': 2, length: 2 }
    expect(is(o)).toBe('object')
    expect(isArrayLike(o)).toBe(false)
  })

  it(`isArrayLike(new Int8Array([])), 返回：false`, () => {
    expect(isArrayLike(new Int8Array([]))).toBe(false)
  })
})
