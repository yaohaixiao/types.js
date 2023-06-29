import isHex from 'esm/isHex'

describe('isHex() 方法：', () => {
  it(`isHex('#ffffff'), 返回：true`, () => {
    expect(isHex('#ffffff')).toBe(true)
  })

  it(`isHex(0xffffff), 返回：false`, () => {
    expect(isHex(0xffffff)).toBe(false)
  })

  it(`isHex('f3f3f3'), 返回：true`, () => {
    expect(isHex('f3f3f3')).toBe(true)
  })

  it(`isHex('f3f3x3'), 返回：false`, () => {
    expect(isHex('f3f3x3')).toBe(false)
  })
})
