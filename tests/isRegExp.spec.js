import isRegExp from '../isRegExp'
import is from '../is'

describe('isRegExp() 方法：', () => {
  it(`isRegExp(new RegExp('\\s+','ig')), 返回：true`, () => {
    const pattern = new RegExp('\\s+','ig')
    expect(is(pattern)).toBe('regexp')
    expect(isRegExp(pattern)).toBe(true)
  })

  it(`isRegExp(/\\s+/ig'), 返回：true`, () => {
    const pattern = /\s+/ig
    expect(is(pattern)).toBe('regexp')
    expect(isRegExp(pattern)).toBe(true)
  })

  it(`isRegExp('/\\s+/ig')), 返回：false`, () => {
    const pattern = '/\\s+/ig'
    expect(is(pattern)).toBe('string')
    expect(isRegExp(pattern)).toBe(false)
  })
})
