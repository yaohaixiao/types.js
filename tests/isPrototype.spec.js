import isPrototype from '../isPrototype'

describe('isPrototype() 方法：', () => {
  const Yao= {
    name: 'Robert',
    age: 40,
    career: 'programmer'
  }

  const Programmer = function(name, age) {
    this.name = name
    this.age = age
    this.isDead = false

    return this
  }

  Programmer.prototype.career = 'programmer'
  Programmer.prototype.getWorkDone = function() {
    this.isDead = true
    return this
  }

  it(`isPrototype(null), 返回：false`, () => {
    expect(isPrototype(null)).toBe(false)
  })

  it(`isPrototype(Object), 返回：false`, () => {
    expect(isPrototype(Object)).toBe(false)
  })

  it(`isPrototype(Object.prototype), 返回：true`, () => {
    expect(isPrototype(Object.prototype)).toBe(true)
  })

  it(`isPrototype(Yao.__proto__), 返回：true`, () => {
    expect(isPrototype(Yao.__proto__)).toBe(true)
  })

  it(`isPrototype(Programmer), 返回：false`, () => {
    expect(isPrototype(Programmer)).toBe(false)
  })

  it(`isPrototype(Programmer), 返回：true`, () => {
    expect(isPrototype(Programmer.prototype)).toBe(true)
  })
})
