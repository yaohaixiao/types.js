/**
 * @jest-environment jsdom
 */
import isTextNode from '../isTextNode'
import isElement from '../isElement'
import isFragment from '../isFragment'
import isHTMLCollection from '../isHTMLCollection'
import isDOM from '../isDOM'
import is from '../is'

describe('isDOM() 方法：', () => {
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

  describe(`非对象参数：`, () => {
    it(`isDOM(false), 返回：false`, () => {
      expect(is(false)).toBe('boolean')
      expect(isDOM(false)).toBe(false)
    })
    it(`isDOM(1), 返回：false`, () => {
      expect(is(1)).toBe('integer')
      expect(isDOM(1)).toBe(false)
    })
    it(`isDOM('dom'), 返回：false`, () => {
      expect(is('dom')).toBe('string')
      expect(isDOM('dom')).toBe(false)
    })
    it(`isDOM(undefined), 返回：false`, () => {
      let str
      expect(is(str)).toBe('undefined')
      expect(isDOM(str)).toBe(false)
    })
    it(`isDOM(Symbol('prop')), 返回：false`, () => {
      expect(is(Symbol('prop'))).toBe('symbol')
      expect(isDOM(Symbol('prop'))).toBe(false)
    })
    it(`isDOM(BigInt(22)), 返回：false`, () => {
      expect(is(BigInt(22))).toBe('bigint')
      expect(isDOM(BigInt(22))).toBe(false)
    })
  })

  describe(`对象参数：`, () => {
    it(`isDOM({}), 返回：false`, () => {
      expect(is({})).toBe('object')
      expect(isDOM(false)).toBe(false)
    })
    it(`isDOM([]), 返回：false`, () => {
      expect(is([])).toBe('array')
      expect(isDOM([])).toBe(false)
    })

    it(`isDOM(document.getElementById('list')), 返回：true`, () => {
      const $list = document.getElementById('list')
      expect(is($list)).toBe('element')
      expect(isElement($list)).toBe(true)
      expect(isDOM($list)).toBe(true)
    })

    it(`isDOM(document.querySelectorAll('.item')), 返回：true`, () => {
      const $items = document.querySelectorAll('.item')
      expect(is($items)).toBe('collection')
      expect(isHTMLCollection($items)).toBe(true)
      expect(isDOM($items)).toBe(true)
    })

    it(`isDOM(document.createTextNode('text')), 返回：true`, () => {
      const $text = document.createTextNode('text')
      expect(is($text)).toBe('text')
      expect(isTextNode($text)).toBe(true)
      expect(isDOM($text)).toBe(true)
    })

    it(`isDOM(document.createDocumentFragment()), 返回：true`, () => {
      const $frag = document.createDocumentFragment()
      expect(is($frag)).toBe('fragment')
      expect(isFragment($frag)).toBe(true)
      expect(isDOM($frag)).toBe(true)
    })
  })
})
