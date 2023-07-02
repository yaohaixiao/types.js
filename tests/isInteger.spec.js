import isInteger from '../isInteger'

describe('isInteger() 方法：', () => {
  it(`isInteger(2.4), 返回：false`, () => {
    expect(isInteger(2.4)).toBe(false)
  })

  it(`isInteger(3.4234E3), 返回：false`, () => {
    expect(isInteger(3.4234E3)).toBe(false)
  })

  it(`isInteger('1'), 返回：false`, () => {
    expect(isInteger('1')).toBe(false)
  })

  it(`isInteger(Number('3.4556645445E7')), 返回：false`, () => {
    expect(isInteger(Number('3.4556645445E7'))).toBe(false)
  })

  it(`isInteger(NaN), 返回：false`, () => {
    expect(isInteger(NaN)).toBe(false)
  })

  it(`isInteger(Infinity), 返回：false`, () => {
    expect(isInteger(Infinity)).toBe(false)
  })

  it(`isInteger(-Infinity), 返回：false`, () => {
    expect(isInteger(-Infinity)).toBe(false)
  })

  it(`isInteger(2), 返回：true`, () => {
    expect(isInteger(2)).toBe(true)
  })

  it(`isInteger(2.0), 返回：true`, () => {
    expect(isInteger(2.0)).toBe(true)
  })

  it(`isInteger(3.4234E4), 返回：true`, () => {
    expect(isInteger(3.4234E4)).toBe(true)
  })

  it(`isInteger(0xffffff), 返回：true`, () => {
    expect(isInteger(0xffffff)).toBe(true)
  })

  it(`isInteger(Number('1')), 返回：true`, () => {
    expect(isInteger(Number('1'))).toBe(true)
  })

  it(`isInteger(parseInt('1.0', 10)), 返回：true`, () => {
    expect(isInteger(parseInt('1.0', 10))).toBe(true)
  })

  it(`isInteger(Math.ceil(2.6)), 返回：true`, () => {
    expect(isInteger(Math.ceil(2.6))).toBe(true)
  })
})
