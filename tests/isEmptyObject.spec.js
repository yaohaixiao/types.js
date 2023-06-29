import isEmptyObject from 'esm/isEmptyObject'

describe('isEmptyObject() 方法：', () => {
  function Person(name,age){
    this.name = name;
    this.age = age;
  }

  it(`isEmptyObject({}), 返回：true`, () => {
    expect(isEmptyObject({})).toBe(true)
  })

  it(`isEmptyObject([]), 返回：true`, () => {
    expect(isEmptyObject([])).toBe(true)
  })

  it(`isEmptyObject(new Object()), 返回：true`, () => {
    const o = new Object()
    expect(isEmptyObject(o)).toBe(true)
  })

  it(`isEmptyObject(new Array()), 返回：true`, () => {
    const o = new Array()
    expect(isEmptyObject(o)).toBe(true)
  })

  it(`isEmptyObject(new RegExp()), 返回：true`, () => {
    const o = new RegExp()
    expect(isEmptyObject(o)).toBe(true)
  })

  it(`isEmptyObject(new String()), 返回：true`, () => {
    const o = new String()
    expect(isEmptyObject(o)).toBe(true)
  })

  it(`isEmptyObject(new Date('2023-06-29')), 返回：true`, () => {
    const o = new Date('2023-06-29')
    expect(isEmptyObject(o)).toBe(true)
  })

  it(`isEmptyObject(new RegExp('/\s+/')), 返回：true`, () => {
    const o = new RegExp('/s+/')
    expect(isEmptyObject(o)).toBe(true)
  })

  it(`isEmptyObject(null), 返回：false`, () => {
    expect(isEmptyObject(null)).toBe(false)
  })

  it(`isEmptyObject(['']), 返回：false`, () => {
    expect(isEmptyObject([''])).toBe(false)
  })

  it(`isEmptyObject(new Function()), 返回：false`, () => {
    const o = new Function()
    expect(isEmptyObject(o)).toBe(false)
  })

  it(`isEmptyObject({ name: 'types.js' }), 返回：false`, () => {
    const o = { name: 'types.js' }
    expect(isEmptyObject(o)).toBe(false)
  })

  it(`isEmptyObject(new Person('Robert', 40)), 返回：false`, () => {
    const o = new Person('Robert', 40)
    Object.prototype.hasOwnProperty = null
    expect(isEmptyObject(o)).toBe(false)
  })

  it(`isEmptyObject(Person), 返回：false`, () => {
    expect(isEmptyObject(Person)).toBe(false)
  })
})
