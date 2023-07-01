import isArrayBuffer from '../esm/isArrayBuffer'
import is from '../esm/is'

describe('isArrayBuffer() 方法：', () => {
  it(`isArrayBuffer([]), 返回：false`, () => {
    expect(isArrayBuffer([])).toBe(false)
  })

  it(`isArrayBuffer(new ArrayBuffer([8)), 返回：true`, () => {
    const buffer = new ArrayBuffer(8)

    expect(is(buffer)).toBe('arraybuffer')
    expect(isArrayBuffer(buffer)).toBe(true)
  })
})
