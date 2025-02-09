import isIDNumber from '../isIDNumber'

describe('isIDNumber() 方法：', () => {
  it(`isIDNumber('110105491231002'), 返回：true`, () => {
    expect(isIDNumber('110105491231002')).toBe(true)
  })

  it(`isIDNumber('123456789012345'), 返回：false`, () => {
    expect(isIDNumber('123456789012345')).toBe(false)
  })

  it(`isIDNumber('11010519491231002X'), 返回：true`, () => {
    expect(isIDNumber('11010519491231002X')).toBe(true)
  })

  it(`isIDNumber('430105198408283210'), 返回：false`, () => {
    expect(isIDNumber('430105198408283210')).toBe(false)
  })

  it(`isIDNumber('110105194912310029'), 返回：false`, () => {
    expect(isIDNumber('110105194912310029')).toBe(false)
  })

  it(`isIDNumber('11010519491231002Y'), 返回：false`, () => {
    expect(isIDNumber('11010519491231002Y')).toBe(false)
  })

  it(`isIDNumber('123456789012345678'), 返回：false`, () => {
    expect(isIDNumber('123456789012345678')).toBe(false)
  })

  it(`isIDNumber('11010519491231002'), 返回：false`, () => {
    expect(isIDNumber('11010519491231002')).toBe(false)
  })

  it(`isIDNumber('11010519491231002XX'), 返回：false`, () => {
    expect(isIDNumber('11010519491231002XX')).toBe(false)
  })

  it(`isIDNumber('A1010519491231002X'), 返回：false`, () => {
    expect(isIDNumber('A1010519491231002X')).toBe(false)
  })

  it(`isIDNumber('11010519491231002x'), 返回：false`, () => {
    expect(isIDNumber('11010519491231002x')).toBe(false)
  })

  it(`isIDNumber(110105194912310021), 返回：false`, () => {
    expect(isIDNumber(110105194912310021)).toBe(false)
  })
})
