/**
 * @jest-environment jsdom
 */
import is from 'esm/is'

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

    it('is(2023), 返回：number', () => {
      expect(is(2023)).toBe('number')
    })

    it('is(NaN), 返回：number', () => {
      expect(is(NaN)).toBe('number')
    })

    it('is(Infinity), 返回：number', () => {
      expect(is(Infinity)).toBe('number')
      expect(is(-Infinity)).toBe('number')
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

  describe('判断 Object 相关类型：', () => {
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
      const fn = () => {};

      expect(is(fn)).toBe('function')
    })

    it('function(arg) {is(arguments)}), 返回：function', () => {
      let args

      function test(age){
        args = is(arguments); // -> true
        return age
      }

      test(40)

      expect(args).toBe('arguments')
    })

    it('is(new Date()), 返回：date', () => {
      const time = new Date();

      expect(is(time)).toBe('date')
    })

    it(`is(document.querySelector('#list')), 返回：element`, () => {
      const $list = document.querySelector('#list');

      expect(is($list)).toBe('element')
    })

    it(`is(document.querySelectorAll('.item')), 返回：collection`, () => {
      const $items = document.querySelectorAll('.item');

      expect(is($items)).toBe('collection')
    })

    it(`is(document.createTextNode('text')), 返回：text`, () => {
      const $text = document.createTextNode('text');

      expect(is($text)).toBe('text')
    })

    it(`is(/\s/ig)), 返回：regexp`, () => {
      expect(is(/\s/ig)).toBe('regexp')
    })

    it('is(new DataView(buffer)), 返回：dataview', () => {
      const buffer = new ArrayBuffer(8);
      const dv = new DataView(buffer);

      expect(is(dv)).toBe('dataview')
    })

    it(`is(new Error('error'))), 返回：error`, () => {
      expect(is(new Error('error'))).toBe('error')
    })
  })

  describe('判断 Array 相关类型：', () => {
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
  })

  describe('判断其它类型:', () => {
    it(`is(new FormData()), 返回：[object FormData]`, () => {
      const data = new FormData()
      expect(is(data)).toBe('[object FormData]')
    })
  })
})
