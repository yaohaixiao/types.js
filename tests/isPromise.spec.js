import isPromise from '../isPromise'

describe('isPromise() 方法：', () => {
  describe('非对象参数：', () => {
    it(`isPromise(''), 返回：false`, () => {
      expect(isPromise('')).toBe(false)
    })

    it(`isPromise(12), 返回：false`, () => {
      expect(isPromise(12)).toBe(false)
    })

    it(`isPromise(undefined), 返回：false`, () => {
      let val
      expect(isPromise(val)).toBe(false)
    })

    it(`isPromise(false), 返回：false`, () => {
      let val
      expect(isPromise(false)).toBe(false)
    })

    it(`isPromise(BigInt(22)), 返回：false`, () => {
      let val
      expect(isPromise(BigInt(22))).toBe(false)
    })

    it(`isPromise(Symbol('prop')), 返回：false`, () => {
      let val
      expect(isPromise(Symbol('prop'))).toBe(false)
    })

    it(`isPromise(null), 返回：false`, () => {
      let val
      expect(isPromise(null)).toBe(false)
    })
  })

  describe('对象参数：', () => {
    it(`isPromise({}), 返回：false`, () => {
      expect(isPromise({})).toBe(false)
    })

    it(`isPromise([]), 返回：false`, () => {
      expect(isPromise([])).toBe(false)
    })

    it(`isPromise(class {}), 返回：false`, () => {
      expect(isPromise(class {})).toBe(false)
    })

    it(`isPromise(() => {})), 返回：false`, () => {
      expect(isPromise(() => {})).toBe(false)
    })

    it(`isPromise(new Promise((resolve, reject) => {})), 返回：true`, () => {
      const request = new Promise((resolve, reject) => {})
      expect(isPromise(request)).toBe(true)
    })

    it(`isPromise(Promise.resolve()), 返回：true`, () => {
      const data = Promise.resolve('data')
      expect(isPromise(data)).toBe(true)
    })

    it(`isPromise(Promise.all([Promise.resolve(), Promise.resolve()])), 返回：true`, () => {
      const resolve = Promise.resolve()
      const data = Promise.all([resolve, resolve])
      expect(isPromise(data)).toBe(true)
    })

    it(`isPromise(Promise.any([Promise.resolve(), Promise.reject()])), 返回：true`, () => {
      const data = Promise.any([Promise.resolve(), Promise.reject()])
      expect(isPromise(data)).toBe(true)
    })
  })
})
