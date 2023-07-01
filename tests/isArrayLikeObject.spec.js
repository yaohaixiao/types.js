/**
 * @jest-environment jsdom
 */
import isArrayLikeObject from 'esm/isArrayLikeObject'
import is from 'esm/is'

describe('isArrayLikeObject() 方法：', () => {
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

  it(`isArrayLikeObject([]), 返回：true`, () => {
    const arr = []
    expect(is(arr)).toBe('array')
    expect(isArrayLikeObject(arr)).toBe(true)
  })

  it(`isArrayLikeObject(document.querySelectorAll('.item')), 返回：true`, () => {
    const $items = document.querySelectorAll('.item')
    expect(is($items)).toBe('collection')
    expect(isArrayLikeObject($items)).toBe(true)
  })

  it(`isArrayLikeObject(arguments), 返回：true`, () => {
    let args
    function getAge(age) {
      args = arguments
      return age + 18
    }

    getAge(30)

    expect(is(args)).toBe('arguments')
    expect(isArrayLikeObject(args)).toBe(true)
  })

  it(`isArrayLikeObject({ '0': 1, '1': 2, length: 2 }), 返回：false`, () => {
    const o = { '0': 1, '1': 2, length: 2 }
    expect(is(o)).toBe('object')
    expect(isArrayLikeObject(o)).toBe(false)
  })

  it(`isArrayLikeObject({}), 返回：false`, () => {
    const o = {}
    expect(is(o)).toBe('object')
    expect(isArrayLikeObject(o)).toBe(false)
  })
})

