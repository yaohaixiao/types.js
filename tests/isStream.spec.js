import isStream from '../isStream'

describe('isStream', () => {
  // 测试流对象
  it('isStream(validStream)，返回：true', () => {
    const validStream = {
      writable: true,
      pipe: () => {
      }
    }
    expect(isStream(validStream)).toBe(true)
  })

  // 测试非流对象
  it('isStream(nonStream)，返回：false', () => {
    const nonStream = {
      notAStreamProperty: 'value'
    }
    expect(isStream(nonStream)).toBe(false)
  })

  // 测试 null
  it('isStream(null)，返回：false', () => {
    expect(isStream(null)).toBe(false)
  })

  // 测试 checkOpen 为 false 的情况
  it('isStream(obj, { checkOpen: false })，返回：true', () => {
    const obj = {
      pipe: () => {
      }
    }
    expect(isStream(obj, { checkOpen: false })).toBe(true)
  })
})
