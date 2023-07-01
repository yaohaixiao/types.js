import isMap from 'esm/isMap'
import is from 'esm/is'

describe('isMap() 方法：', () => {
  it(`isMap(new Map([])), 返回：true`, () => {
    const map = new Map([
      ['name', 'Robert'],
      ['Gender', 'Male']
    ])

    expect(is(map)).toBe('map')
    expect(isMap(map)).toBe(true)
  })

  it(`isMap(['name', 'Robert']), 返回：false`, () => {
    const arr = ['name', 'Robert']

    expect(is(arr)).toBe('array')
    expect(isMap(arr)).toBe(false)
  })
})
