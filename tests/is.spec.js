import is from 'esm/is'

describe('is() 方法：', () => {
  describe('判断基础值类型：', () => {
    let Types

    it(`is('types.js'), 返回：string`, () => {
      expect(is('types.js')).toBe('string')
    })

    it('is(2023), 返回：number', () => {
      expect(is(2023)).toBe('number')
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
  })
})
