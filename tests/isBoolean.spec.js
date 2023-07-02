import isBoolean from '../isBoolean'

describe('isBoolean() 方法：', () => {
  it(`isBoolean(1), 返回：false`, () => {
    expect(isBoolean(1)).toBe(false)
  })

  it(`isBoolean(''), 返回：false`, () => {
    expect(isBoolean(1)).toBe(false)
  })

  it(`isBoolean(null), 返回：false`, () => {
    expect(isBoolean(null)).toBe(false)
  })

  it(`isBoolean(NaN), 返回：false`, () => {
    expect(isBoolean(NaN)).toBe(false)
  })

  it(`isBoolean(undefined), 返回：false`, () => {
    let project
    expect(isBoolean(project)).toBe(false)
  })

  it(`isBoolean(false), 返回：true`, () => {
    expect(isBoolean(false)).toBe(true)
  })

  it(`isBoolean(!!0), 返回：true`, () => {
    expect(isBoolean(!!0)).toBe(true)
  })

  it(`isBoolean(Boolean(0)), 返回：true`, () => {
    expect(isBoolean(Boolean(0))).toBe(true)
  })

  it(`isBoolean(!!undefined), 返回：true`, () => {
    let project
    expect(isBoolean(!!project)).toBe(true)
  })
})
