import isInfinite from '../isInfinite'

describe('isInfinite() 方法：', () => {
  it(`isInfinite(2.4), 返回：false`, () => {
    expect(isInfinite(2.4)).toBe(false)
  })

  it(`isInfinite(Infinity), 返回：true`, () => {
    expect(isInfinite(Infinity)).toBe(true)
  })

  it(`isInfinite(-Infinity), 返回：true`, () => {
    expect(isInfinite(-Infinity)).toBe(true)
  })
})
