import isWeakSet from 'esm/isWeakSet'
import isSet from 'esm/isSet'
import is from 'esm/is'

describe('isWeakSet() 方法：', () => {
  it(`isWeakSet(new Set([1, 2, 3, 4])), 返回：false`, () => {
    const set = new Set([1, 2, 3, 4])
    expect(is(set)).toBe('set')
    expect(isSet(set)).toBe(true)
    expect(isWeakSet(set)).toBe(false)
  })

  it(`isWeakSet(new WeakSet()), 返回：true`, () => {
    const weakset = new WeakSet()
    weakset.add({name: 'Robert'})
    expect(is(weakset)).toBe('weakset')
    expect(isSet(weakset)).toBe(false)
    expect(isWeakSet(weakset)).toBe(true)
  })
})
