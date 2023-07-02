import isNumeric from '../isNumeric'

describe('isNumeric() 方法：', () => {
  it(`isNumeric(2), 返回：true`, () => {
    expect(isNumeric(2)).toBe(true)
  })

  it(`isNumeric(2.4), 返回：true`, () => {
    expect(isNumeric(2.4)).toBe(true)
  })

  it(`isNumeric(-2), 返回：true`, () => {
    expect(isNumeric(-2)).toBe(true)
  })

  it(`isNumeric(0xffffff), 返回：true`, () => {
    expect(isNumeric(0xffffff)).toBe(true)
  })

  it(`isNumeric(3.1415926E8), 返回：true`, () => {
    expect(isNumeric(3.1415926E8)).toBe(true)
  })

  it(`isNumeric(3.1415926E8), 返回：true`, () => {
    expect(isNumeric(3.1415926E8)).toBe(true)
  })

  it(`isNumeric('3.1415926E8'), 返回：true`, () => {
    expect(isNumeric('3.1415926E8')).toBe(true)
  })

  it(`isNumeric('0xffffff'), 返回：true`, () => {
    expect(isNumeric('0xffffff')).toBe(true)
  })

  it(`isNumeric(NaN), 返回：false`, () => {
    expect(isNumeric(NaN)).toBe(false)
  })

  it(`isNumeric(Infinity), 返回：false`, () => {
    expect(isNumeric(Infinity)).toBe(false)
  })

  it(`isNumeric(-Infinity), 返回：false`, () => {
    expect(isNumeric(-Infinity)).toBe(false)
  })
})
