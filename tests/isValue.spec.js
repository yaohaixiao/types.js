import isValue from '../isValue'

describe('isValue() 方法：', () => {
  describe('非有效数据：', () => {
    it(`isValue(undefined), 返回：false`, () => {
      let projects

      expect(isValue(projects)).toBe(false)
    })

    it(`isValue(null), 返回：false`, () => {
      expect(isValue(null)).toBe(false)
    })

    it(`isValue(NaN), 返回：false`, () => {
      expect(isValue(NaN)).toBe(false)
    })

    it(`isValue(Infinity), 返回：false`, () => {
      expect(isValue(Infinity)).toBe(false)
    })

    it(`isValue(-Infinity), 返回：false`, () => {
      expect(isValue(-Infinity)).toBe(false)
    })
  })

  describe('有效数据：', () => {
    it(`isValue(0), 返回：true`, () => {
      expect(isValue(0)).toBe(true)
    })

    it(`isValue(''), 返回：true`, () => {
      expect(isValue('')).toBe(true)
    })

    it(`isValue(false), 返回：true`, () => {
      expect(isValue(false)).toBe(true)
    })

    it(`isValue({}), 返回：true`, () => {
      expect(isValue({})).toBe(true)
    })

    it(`isValue([]), 返回：true`, () => {
      expect(isValue([])).toBe(true)
    })

    it(`isValue(/\s+/ig), 返回：true`, () => {
      expect(isValue(/\s+/ig)).toBe(true)
    })

    it(`isValue(new Date()), 返回：true`, () => {
      expect(isValue([])).toBe(true)
    })

    it(`isValue(function(){}), 返回：true`, () => {
      function empty(){}
      const fn = () => {}

      expect(isValue(empty)).toBe(true)
      expect(isValue(fn)).toBe(true)
    })
  })
})
