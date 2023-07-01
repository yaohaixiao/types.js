import isWeakMap from 'esm/isWeakMap'
import isMap from 'esm/isMap'
import is from 'esm/is'

describe('isWeakMap() 方法：', () => {
  it(`isWeakMap(new Map([])), 返回：false`, () => {
    const map = new Map([
      ['name', 'Robert'],
      ['Gender', 'Male']
    ])

    expect(is(map)).toBe('map')
    expect(isMap(map)).toBe(true)
    expect(isWeakMap(map)).toBe(false)
  })

  it(`isWeakMap(new WeakMap()), 返回：true`, () => {
    const weakmap = new WeakMap()

    weakmap.set({}, 37)

    expect(is(weakmap)).toBe('weakmap')
    expect(isMap(weakmap)).toBe(false)
    expect(isWeakMap(weakmap)).toBe(true)
  })
})
