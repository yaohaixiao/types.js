import isNull from '../isNull'
describe('isNull() 方法：', () => {
  it(`isNull(''), 返回：false`, () => {
    expect(isNull('')).toBe(false)
  })

  it(`isNull({}), 返回：false`, () => {
    expect(isNull({})).toBe(false)
  })

  it(`isNull(undefined), 返回：false`, () => {
    let project
    expect(isNull(project)).toBe(false)
  })

  it(`isNull(0), 返回：false`, () => {
    expect(isNull(0)).toBe(false)
  })

  it(`isNull(false), 返回：false`, () => {
    expect(isNull(false)).toBe(false)
  })

  it(`isNull(Object.create(null)), 返回：false`, () => {
    expect(isNull(Object.create(null))).toBe(false)
  })

  it(`isNull(null), 返回：true`, () => {
    expect(isNull(null)).toBe(true)
  })
})
