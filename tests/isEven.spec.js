import isEven from '../isEven'

describe('isEven() 方法：', () => {
  it(`isEven(2), 返回：true`, () => {
    expect(isEven(2)).toBe(true)
  })

  it(`isEven(2.0), 返回：true`, () => {
    expect(isEven(2.0)).toBe(true)
  })

  it(`isEven('2'), 返回：false`, () => {
    expect(isEven('2')).toBe(false)
  })

  it(`isEven(3), 返回：false`, () => {
    expect(isEven(3)).toBe(false)
  })

  it(`isEven(2.2), 返回：false`, () => {
    expect(isEven(2.2)).toBe(false)
  })
})
