import isError from 'esm/isError'

describe('isError() 方法：', () => {
  it(`isError(new function Error(){}), 返回：false`, () => {
    const error = function Error(){}
    expect(isError(new error())).toBe(false)
  })

  it(`isError(new Error('error')), 返回：true`, () => {
    const error = new Error('error')
    expect(isError(error)).toBe(true)
  })
})
