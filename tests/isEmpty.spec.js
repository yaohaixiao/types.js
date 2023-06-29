import isEmpty from 'esm/isEmpty'

describe('isEmpty() 方法：', () => {
  it(`isEmpty('  '), 返回：false`, () => {
    expect(isEmpty('  ')).toBe(false)
  })

  it(`isEmpty(''), 返回：true`, () => {
    expect(isEmpty('')).toBe(true)
  })

  it(`isEmpty(new String()), 返回：false`, () => {
    const str = new String()
    expect(isEmpty(str)).toBe(false)
  })

  it(`isEmpty(String()), 返回：true`, () => {
    expect(isEmpty(String())).toBe(true)
  })
})
