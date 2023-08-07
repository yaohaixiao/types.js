/**
 * @jest-environment jsdom
 */
import is from '../is'
import isNumber from '../isNumber'
import { DOMParser } from 'xmldom'

describe('is() 方法：', () => {
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

  describe('判断基础值类型：', () => {
    let Types

    it(`is('types.js'), 返回：string`, () => {
      expect(is('types.js')).toBe('string')
    })

    it(`is('  '), 返回：blank`, () => {
      expect(is('  ')).toBe('blank')
    })

    it(`is('Z29vZA=='), 返回：base64`, () => {
      expect(is('Z29vZA==')).toBe('base64')
    })

    it(`is('中国梦'), 返回：chinese`, () => {
      expect(is('中国梦')).toBe('chinese')
    })

    it(`is('type.js@gmail.com'), 返回：email`, () => {
      expect(is('type.js@gmail.com')).toBe('email')
    })

    it(`is(''), 返回：empty`, () => {
      expect(is('')).toBe('empty')
    })

    it(`is('3C8021B0-423D-475D-BECF-63ED5ED34563'), 返回：guid`, () => {
      expect(is('3C8021B0-423D-475D-BECF-63ED5ED34563')).toBe('guid')
    })

    it(`is('3C8021B0423D475DBECF63ED5ED34563'), 返回：guid`, () => {
      expect(is('3C8021B0423D475DBECF63ED5ED34563')).toBe('guid')
    })

    it(`is('#ffffff'), 返回：hex`, () => {
      expect(is('#ffffff')).toBe('hex')
    })

    it(`is('<h2>中国梦</h2>'), 返回：html`, () => {
      expect(is(`<h2>中国梦</h2>`)).toBe('html')
    })

    it(`is('<svg class="buttons__icon" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 26 28"></svg>'), 返回：html`, () => {
      const svg = '<svg class="buttons__icon" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 26 28"><path d="M22 15.5v7.5c0 0.547-0.453 1-1 1h-6v-6h-4v6h-6c-0.547 0-1-0.453-1-1v-7.5c0-0.031 0.016-0.063 0.016-0.094l8.984-7.406 8.984 7.406c0.016 0.031 0.016 0.063 0.016 0.094zM25.484 14.422l-0.969 1.156c-0.078 0.094-0.203 0.156-0.328 0.172h-0.047c-0.125 0-0.234-0.031-0.328-0.109l-10.813-9.016-10.813 9.016c-0.109 0.078-0.234 0.125-0.375 0.109-0.125-0.016-0.25-0.078-0.328-0.172l-0.969-1.156c-0.172-0.203-0.141-0.531 0.063-0.703l11.234-9.359c0.656-0.547 1.719-0.547 2.375 0l3.813 3.187v-3.047c0-0.281 0.219-0.5 0.5-0.5h3c0.281 0 0.5 0.219 0.5 0.5v6.375l3.422 2.844c0.203 0.172 0.234 0.5 0.063 0.703z"></path></svg>'
      const fullSvg = '<?xml version="1.0" encoding="UTF-8"?><svg></svg>'
      expect(is(svg)).toBe('svg')
      expect(is(fullSvg)).toBe('svg')
    })

    it(`is('126.11.15.255'), 返回：IP address`, () => {
      expect(is(`126.11.15.255`)).toBe('IP address')
    })

    it(`is('{"prop":"JSON"}'), 返回：json`, () => {
      expect(is('{"prop":"JSON"}')).toBe('json')
    })

    it(`is('11:23 am'), 返回：time`, () => {
      expect(is('11:23 am')).toBe('time')
    })

    it(`is('Jul 08 2023'), 返回：time`, () => {
      expect(is('Jul 08 2023')).toBe('time')
    })

    it('is(NaN), 返回：number', () => {
      expect(isNumber(NaN)).toBe(true)
      expect(is(NaN)).toBe('number')
    })

    it('is(2023), 返回：integer', () => {
      expect(isNumber(2023)).toBe(true)
      expect(is(2023)).toBe('integer')
    })

    it('is(3.0), 返回：integer', () => {
      expect(is(3.0)).toBe('integer')
    })

    it('is(3.01), 返回：float', () => {
      expect(is(3.01)).toBe('float')
    })

    it('is(Infinity), 返回：infinite', () => {
      expect(isNumber(Infinity)).toBe(true)
      expect(is(Infinity)).toBe('infinite')

      expect(isNumber(-Infinity)).toBe(true)
      expect(is(-Infinity)).toBe('infinite')
    })

    it('is(true), 返回：boolean', () => {
      expect(is(true)).toBe('boolean')
    })

    it('is(Types), 返回：undefined', () => {
      expect(is(Types)).toBe('undefined')
    })

    it('is(null), 返回：null', () => {
      expect(is(null)).toBe('null')
    })

    it('is(BigInt(MAX_SAFE_INTEGER)), 返回：bigint', () => {
      const MAX_SAFE_INTEGER = 9007199254740991
      const bigint = BigInt(MAX_SAFE_INTEGER)
      expect(is(bigint)).toBe('bigint')
    })
  })

  describe('判断 Set/WeakSet/Map/WeakMap/Symbol 内置对象：', () => {
    it('is(new Set()), 返回：set', () => {
      expect(is(new Set())).toBe('set')
    })

    it('is(new WeakSet()), 返回：weakset', () => {
      expect(is(new WeakSet())).toBe('weakset')
    })

    it('is(new Map()), 返回：map', () => {
      expect(is(new Map())).toBe('map')
    })

    it('is(new WeakMap()), 返回：weakmap', () => {
      expect(is(new WeakMap())).toBe('weakmap')
    })

    it('is(Symbol()), 返回：symbol', () => {
      expect(is(Symbol())).toBe('symbol')
    })
  })

  describe('判断 Object 相关：', () => {
    it('is({}), 返回：object', () => {
      expect(is({})).toBe('object')
    })

    it('is(new Object()), 返回：object', () => {
      const o = new Object()
      expect(is(o)).toBe('object')
    })

    it('is(Object.create(null)), 返回：object', () => {
      const o = Object.create(null)
      expect(is(o)).toBe('object')
    })

    it('is(new String()), 返回：object', () => {
      const str = new String()
      expect(is(str)).toBe('object')
    })

    it(`is(new Number()), 返回：object`, () => {
      const num = new Number()
      expect(is(num)).toBe('object')
    })

    it(`is(new Boolean()), 返回：object`, () => {
      const bool = new Boolean()
      expect(is(bool)).toBe('object')
    })

    it('is(() => {}), 返回：function', () => {
      const fn = () => {
      }

      expect(is(fn)).toBe('function')
    })

    it('function(arg) {is(arguments)}), 返回：function', () => {
      let args

      function test(age) {
        args = is(arguments) // -> arguments
        return age
      }

      test(40)

      expect(args).toBe('arguments')
    })

    it('is(new Date()), 返回：date', () => {
      const time = new Date()

      expect(is(time)).toBe('date')
    })

    it(`is(document.querySelector('#list')), 返回：element`, () => {
      const $list = document.querySelector('#list')

      expect(is($list)).toBe('element')
    })

    it(`is(document.querySelectorAll('.item')), 返回：collection`, () => {
      const $items = document.querySelectorAll('.item')

      expect(is($items)).toBe('collection')
    })

    it(`is(document.createTextNode('text')), 返回：text`, () => {
      const $text = document.createTextNode('text')

      expect(is($text)).toBe('text')
    })

    it(`is(document.createDocumentFragment()), 返回：fragment`, () => {
      const $fragment = document.createDocumentFragment()

      expect(is($fragment)).toBe('fragment')
    })

    it(`is(new RegExp('/s/')), 返回：regexp`, () => {
      expect(is(new RegExp('/s/'))).toBe('regexp')
    })

    it(`is(/\\s+/ig)), 返回：regexp`, () => {
      expect(is(/\s+/ig)).toBe('regexp')
    })

    it('is(new DataView(buffer)), 返回：dataview', () => {
      const buffer = new ArrayBuffer(8)
      const dv = new DataView(buffer)

      expect(is(dv)).toBe('dataview')
    })

    it(`is(new Error('error'))), 返回：error`, () => {
      expect(is(new Error('error'))).toBe('error')
    })

    it(`is(Object.prototype), 返回：prototype`, () => {
      expect(is(Object.prototype)).toBe('prototype')
    })

    it(`is(<xml xmlns="a" xmlns:c="./lite"><child>test</child></xml>), 返回：xml`, () => {
      const XML = new DOMParser().parseFromString(
          '<xml xmlns="a" xmlns:c="./lite">\n' +
          '\t<child>test</child>\n' +
          '\t<child></child>\n' +
          '\t<child/>\n' +
          '</xml>',
          'text/xml'
      )
      expect(is(XML)).toBe('xml')
    })
  })

  describe('判断 Array 相关：', () => {
    it('is([]), 返回：array', () => {
      expect(is([])).toBe('array')
    })

    it('is(new ArrayBuffer(8)), 返回：arraybuffer', () => {
      expect(is(new ArrayBuffer(8))).toBe('arraybuffer')
    })

    it('is(new Int8Array([])), 返回：int8array', () => {
      expect(is(new Int8Array([]))).toBe('int8array')
    })

    it('is(new Int16Array([])), 返回：int16array', () => {
      expect(is(new Int16Array([]))).toBe('int16array')
    })

    it('is(new Int32Array([])), 返回：int32array', () => {
      expect(is(new Int32Array([]))).toBe('int32array')
    })

    it('is(new Uint8Array([])), 返回：uint8array', () => {
      expect(is(new Uint8Array([]))).toBe('uint8array')
    })

    it('is(new Uint8ClampedArray([])), 返回：uint8clampedarray', () => {
      expect(is(new Uint8ClampedArray([]))).toBe('uint8clampedarray')
    })

    it('is(new Uint16Array([])), 返回：uint16array', () => {
      expect(is(new Uint16Array([]))).toBe('uint16array')
    })

    it('is(new Uint32Array([])), 返回：uint32array', () => {
      expect(is(new Uint32Array([]))).toBe('uint32array')
    })

    it('is(new Float32Array([])), 返回：float32array', () => {
      expect(is(new Float32Array([]))).toBe('float32array')
    })

    it('is(new Float64Array([])), 返回：float64array', () => {
      expect(is(new Float64Array([]))).toBe('float64array')
    })

    it('is(new BigInt64Array(64)), 返回：bigint64array', () => {
      expect(is(new BigInt64Array(64))).toBe('bigint64array')
    })

    it('is(new BigUint64Array(64)), 返回：biguint64array', () => {
      expect(is(new BigUint64Array(64))).toBe('biguint64array')
    })
  })

  describe('判断其它类型:', () => {
    it(`is(new FormData()), 返回：[object FormData]`, () => {
      const data = new FormData()
      expect(is(data)).toBe('[object FormData]')
    })
  })
})
