import isAlpha from '../isAlpha'

describe('isAlpha() 方法：', () => {
  it(`isAlpha('aaa'), 返回：true`, () => {
    expect(isAlpha('aaa')).toBe(true)
  })

  it(`isAlpha('ok!'), 返回：false`, () => {
    expect(isAlpha('ok!')).toBe(false)
  })

  it(`isAlpha('is alpha'), 返回：false`, () => {
    expect(isAlpha('is alpha')).toBe(false)
  })

  it(`isAlpha([]), 返回：false`, () => {
    expect(isAlpha([])).toBe(false)
  })

  it(`isAlpha(null), 返回：false`, () => {
    expect(isAlpha(null)).toBe(false)
  })
})
