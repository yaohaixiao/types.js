import isBigInt from '../isBigInt'
import is from '../is'

describe('isBigInt() 方法：', () => {
  const MAX_SAFE_INTEGER = 9007199254740991
  const bigint = BigInt(9007199254740992)

  it(`is(BigInt(MAX_SAFE_INTEGER + 1)), 返回：bigint`, () => {
    expect(is(bigint)).toBe('bigint')
  })

  it(`isBigInt(MAX_SAFE_INTEGER), 返回：false`, () => {
    expect(isBigInt(MAX_SAFE_INTEGER)).toBe(false)
  })

  it(`isBigInt(BigInt(MAX_SAFE_INTEGER + 1)), 返回：false`, () => {
    expect(isBigInt(bigint)).toBe(true)
  })
})
