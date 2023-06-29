import isBlank from 'esm/isBlank'

describe('isBlank() 方法：', () => {
  it(`isBlank('  '), 返回：true`, () => {
    expect(isBlank('  ')).toBe(true)
  })

  it(`isBlank(''), 返回：true`, () => {
    expect(isBlank('')).toBe(true)
  })

  it(`isBlank(new String()), 返回：false`, () => {
    expect(isBlank(new String())).toBe(false)
  })
})
