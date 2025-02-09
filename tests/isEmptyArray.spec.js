import isEmptyArray from '../isEmptyArray'

describe('isEmptyArray() 方法：', () => {
  it(`isEmptyArray(new Int8Array([])), 返回：false`, () => {
    expect(isEmptyArray(new Int8Array([]))).toBe(false)
  })

  it(`isEmptyArray([]), 返回：true`, () => {
    expect(isEmptyArray([])).toBe(true)
  })

  it(`isEmptyArray(new Array()), 返回：true`, () => {
    const arr = []

    Array.isArray = null

    expect(isEmptyArray(new Array())).toBe(true)
    expect(isEmptyArray(arr)).toBe(true)
  })
})
