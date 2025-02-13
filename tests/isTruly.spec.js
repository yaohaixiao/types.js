import isTruly from '../isTruly'

describe('isTruly() 方法：', () => {
  it(`isFalsy(true), 返回：true`, () => {
    expect(isTruly(true)).toBe(true)
  })

  it(`isFalsy(1), 返回：true`, () => {
    expect(isTruly(1)).toBe(true)
  })

  it(`isFalsy('hello'), 返回：true`, () => {
    expect(isTruly('hello')).toBe(true)
  })

  it(`isFalsy({}), 返回：true`, () => {
    expect(isTruly({})).toBe(true)
  })

  it(`isFalsy([]), 返回：true`, () => {
    expect(isTruly([])).toBe(true)
  })

  it(`isFalsy(false), 返回：false`, () => {
    expect(isTruly(false)).toBe(false)
  })

  it(`isFalsy(0), 返回：false`, () => {
    expect(isTruly(0)).toBe(false)
  })

  it(`isFalsy(''), 返回：false`, () => {
    expect(isTruly('')).toBe(false)
  })

  it(`isFalsy(null), 返回：false`, () => {
    expect(isTruly(null)).toBe(false)
  })

  it(`isFalsy(undefined), 返回：false`, () => {
    expect(isTruly(undefined)).toBe(false)
  })

  it(`isFalsy(NaN), 返回：false`, () => {
    expect(isTruly(NaN)).toBe(false)
  })
})
