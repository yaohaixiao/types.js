import isEmpty from '../isEmpty'

describe('isEmpty() 方法：', () => {
  it(`isEmpty('  '), 返回：false`, () => {
    expect(isEmpty('  ')).toBe(false)
  })

  it(`isEmpty(null), 返回：true`, () => {
    expect(isEmpty(null)).toBe(true)
  })

  it(`isEmpty(''), 返回：true`, () => {
    expect(isEmpty('')).toBe(true)
  })

  it(`isEmpty(String()), 返回：true`, () => {
    expect(isEmpty(String())).toBe(true)
  })

  it(`isEmpty([]), 返回：true`, () => {
    expect(isEmpty([])).toBe(true)
  })

  it(`isEmpty([1]), 返回：false`, () => {
    expect(isEmpty([1])).toBe(false)
  })

  it(`isEmpty(new String()), 返回：true`, () => {
    const str = new String()
    expect(isEmpty(str)).toBe(true)
  })

  it(`isEmpty({}), 返回：true`, () => {
    expect(isEmpty({})).toBe(true)
  })

  it(`isEmpty({a: 1}), 返回：false`, () => {
    expect(isEmpty({ a: 1 })).toBe(false)
  })

  it(`isEmpty(EmptyConstructor.prototype), 返回：true`, () => {
    const fn = function () {}
    expect(isEmpty(fn.prototype)).toBe(true)
  })

  it(`isEmpty(EmptyArguments), 返回：true`, () => {
    let args
    const fn = function () {
      args = arguments
    }

    fn()

    expect(isEmpty(args)).toBe(true)

    fn(1)

    expect(isEmpty(args)).toBe(false)
  })

  it(`isEmpty(Buffer.alloc(0)), 返回：true`, () => {
    let buffer = Buffer.alloc(0)

    expect(isEmpty(buffer)).toBe(true)

    buffer = Buffer.alloc(10)

    expect(isEmpty(buffer)).toBe(false)
  })
})
