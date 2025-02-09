import isPrimitive from '../isPrimitive'

describe('isPrimitive() 方法：', () => {
  it(`isPrimitive(1), 返回：true`, () => {
    expect(isPrimitive(1)).toBe(true)
  })

  it(`isPrimitive('ok!'), 返回：true`, () => {
    expect(isPrimitive('ok!')).toBe(true)
  })

  it(`isPrimitive(num), 返回：true`, () => {
    let num
    expect(isPrimitive(num)).toBe(true)
  })

  it(`isPrimitive(BigInt(9007199254740991+1)), 返回：true`, () => {
    const MAX_SAFE_INTEGER = 9007199254740991
    const bigint = BigInt(MAX_SAFE_INTEGER + 1)
    expect(isPrimitive(bigint)).toBe(true)
  })

  it(`isPrimitive(null), 返回：true`, () => {
    expect(isPrimitive(null)).toBe(true)
  })

  it(`isPrimitive(Symbol('foo')), 返回：true`, () => {
    expect(isPrimitive(Symbol('foo'))).toBe(true)
  })

  it(`isPrimitive([]), 返回：true`, () => {
    expect(isPrimitive([])).toBe(false)
  })

  it(`isPrimitive({str: 'ok!'}), 返回：false`, () => {
    expect(isPrimitive({ str: 'ok!' })).toBe(false)
  })

  it(`isPrimitive(()=>{}), 返回：false`, () => {
    expect(isPrimitive(() => {})).toBe(false)
  })
})
