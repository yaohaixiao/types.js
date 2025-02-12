import isFalsy from '../isFalsy'

describe('isFalsy() 方法：', () => {
  it(`isFalsy(false), 返回：true`, () => {
    expect(isFalsy(false)).toBe(true)
  })

  it(`isFalsy(0), 返回：true`, () => {
    expect(isFalsy(0)).toBe(true)
  })

  it(`isFalsy(''), 返回：true`, () => {
    expect(isFalsy('')).toBe(true)
  })

  it(`isFalsy(null), 返回：true`, () => {
    expect(isFalsy(null)).toBe(true)
  })

  it(`isFalsy(undefined), 返回：true`, () => {
    expect(isFalsy(undefined)).toBe(true)
  })

  it(`isFalsy(true), 返回：false`, () => {
    expect(isFalsy(true)).toBe(false)
  })

  it(`isFalsy(1), 返回：false`, () => {
    expect(isFalsy(1)).toBe(false)
  })

  it(`isFalsy([]), 返回：false`, () => {
    expect(isFalsy([])).toBe(false)
  })

  it(`isFalsy({}), 返回：false`, () => {
    expect(isFalsy({})).toBe(false)
  })
})
