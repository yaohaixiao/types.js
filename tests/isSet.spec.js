import isSet from 'esm/isSet'
import is from 'esm/is'

describe('isSet() 方法：', () => {
  it(`isSet(new Set([1, 2, 3, 4])), 返回：true`, () => {
    const set = new Set([1, 2, 3, 4])
    expect(is(set)).toBe('set')
    expect(isSet(set)).toBe(true)
  })

  it(`isSet([1, 2, 3, 4]), 返回：false`, () => {
    const set = [1, 2, 3, 4]
    expect(is(set)).toBe('array')
    expect(isSet(set)).toBe(false)
  })
})
