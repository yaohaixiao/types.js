import isEmptyArguments from '../isEmptyArguments'

describe('isEmptyArguments() 方法：', () => {
  it(`isEmptyArguments(EmptyArguments), 返回：true`, () => {
    let args
    const fn = function () {
      args = arguments
    }

    fn()

    expect(isEmptyArguments(args)).toBe(true)

    fn(1)

    expect(isEmptyArguments(args)).toBe(false)
  })
})
