import isBase64 from '../isBase64'

describe('isBase64() 方法：', () => {
  it(`isBase64('Z29vZA=='), 返回：true`, () => {
    expect(isBase64('Z29vZA==')).toBe(true)
  })

  it(`isBase64('aXNCYXNlNjQ=2'), 返回：false`, () => {
    expect(isBase64('aXNCYXNlNjQ=2')).toBe(false)
  })

  it(`isBase64(1221), 返回：false`, () => {
    expect(isBase64(1221)).toBe(false)
  })
})
