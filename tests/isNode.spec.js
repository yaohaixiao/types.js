/**
 * @jest-environment jsdom
 */
import isNode from '../isNode'

describe('isNode', () => {
  // 测试传入真正的 Node 实例
  it('isNode(document.createElement(\'div\'))，返回：true', () => {
    if (typeof document !== 'undefined') {
      const element = document.createElement('div')
      const result = isNode(element)
      expect(result).toBe(true)
    }
  })

  // 测试传入非 Node 实例
  it('isNode({})，返回：false', () => {
    const nonNode = {}
    const result = isNode(nonNode)
    expect(result).toBe(false)
  })

  // 测试传入 null
  it('isNode(null)，返回：true', () => {
    const result = isNode(null)
    expect(result).toBe(false)
  })

  // 测试传入 undefined
  it('isNode(undefined)，返回：true', () => {
    const result = isNode(undefined)
    expect(result).toBe(false)
  })
})
