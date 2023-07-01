import isOdd from 'esm/isOdd'

describe('isOdd() 方法：', () => {
  it(`isOdd(2), 返回：false`, () => {
    expect(isOdd(2)).toBe(false)
  })

  it(`isOdd(2.0), 返回：false`, () => {
    expect(isOdd(2.0)).toBe(false)
  })

  it(`isOdd('2'), 返回：false`, () => {
    expect(isOdd('2')).toBe(false)
  })

  it(`isEven(3.01E2), 返回：true`, () => {
    expect(isOdd(3.01E2)).toBe(true)
  })

  it(`isEven(3.01E3), 返回：false`, () => {
    expect(isOdd(3.01E3)).toBe(false)
  })

  it(`isEven(3), 返回：true`, () => {
    expect(isOdd(3)).toBe(true)
  })

  it(`isEven(3.0), 返回：true`, () => {
    expect(isOdd(3.0)).toBe(true)
  })

  it(`isEven(0x000011), 返回：true`, () => {
    expect(isOdd(0x000011)).toBe(true)
  })

  it(`isEven(0x000010), 返回：false`, () => {
    expect(isOdd(0x000010)).toBe(false)
  })

  it(`isEven(NaN), 返回：false`, () => {
    expect(isOdd(NaN)).toBe(false)
  })

  it(`isEven(Infinity), 返回：false`, () => {
    expect(isOdd(Infinity)).toBe(false)
  })
})
