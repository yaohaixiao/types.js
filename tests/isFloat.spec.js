import isFloat from 'esm/isFloat'

describe('isFloat() 方法：', () => {
  it(`isFloat(.1), 返回：true)`, () => {
    expect(isFloat(.1)).toBe(true)
  })

  it(`isFloat(1.01), 返回：true)`, () => {
    expect(isFloat(1.01)).toBe(true)
  })

  it(`isFloat(Number('3.4556645445E7')), 返回：true)`, () => {
    expect(isFloat(Number('3.4556645445E7'))).toBe(true)
  })

  it(`isFloat(3.4556645445E10), 返回：false)`, () => {
    expect(isFloat(3.4556645445E10)).toBe(false)
  })

  it(`isFloat('1.01'), 返回：false)`, () => {
    expect(isFloat('1.01')).toBe(false)
  })

  it(`isFloat(2.0), 返回：false)`, () => {
    expect(isFloat(2.0)).toBe(false)
  })

  it(`isFloat(1), 返回：false)`, () => {
    expect(isFloat(1)).toBe(false)
  })

  it(`isFloat(NaN), 返回：false)`, () => {
    expect(isFloat(NaN)).toBe(false)
  })

  it(`isFloat(Infinity), 返回：false)`, () => {
    expect(isFloat(Infinity)).toBe(false)
  })

  it(`isFloat(0xf11010), 返回：false)`, () => {
    expect(isFloat(0xf11010)).toBe(false)
  })
})
