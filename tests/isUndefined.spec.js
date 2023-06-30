import isUndefined from 'esm/isUndefined'

describe('isUndefined() 方法：', () => {
  it(`isUndefined(undefined), 返回：true`, () => {
    let project
    expect(isUndefined(project)).toBe(true)
  })

  it(`isUndefined(''), 返回：false`, () => {
    expect(isUndefined('')).toBe(false)
  })

  it(`isUndefined({}), 返回：false`, () => {
    expect(isUndefined({})).toBe(false)
  })

  it(`isUndefined(0), 返回：false`, () => {
    expect(isUndefined(0)).toBe(false)
  })

  it(`isUndefined(null), 返回：false`, () => {
    expect(isUndefined(null)).toBe(false)
  })
})
