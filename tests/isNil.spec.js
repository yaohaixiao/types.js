import isNil from '../isNil'

describe('isNil() 方法：', () => {
  it(`isNil(null), 返回：true`, () => {
    expect(isNil(null)).toBe(true)
  })

  it(`isNil(undefined), 返回：true`, () => {
    expect(isNil(undefined)).toBe(true)
  })

  it(`isNil(void 0), 返回：true`, () => {
    expect(isNil(void 0)).toBe(true)
  })

  it(`isNil(''), 返回：false`, () => {
    expect(isNil('')).toBe(false)
  })

  it(`isNil(NaN), 返回：false`, () => {
    expect(isNil(NaN)).toBe(false)
  })
})
