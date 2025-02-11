/**
 * @jest-environment jsdom
 */
import isShadowRoot from '../isShadowRoot'

describe('isShadowRoot', () => {
  // 测试 ShadowRoot 未定义的情况
  it('isShadowRoot({})，返回：false', () => {
    const originalShadowRoot = global.ShadowRoot
    // 临时将 ShadowRoot 设置为 undefined
    global.ShadowRoot = undefined

    expect(isShadowRoot({})).toBe(false)

    // 恢复原始的 ShadowRoot
    global.ShadowRoot = originalShadowRoot
  })

  // 测试传入真正的 ShadowRoot 实例
  it('isShadowRoot(shadowRoot)，返回：true', () => {
    if (typeof document !== 'undefined') {
      const div = document.createElement('div')
      const shadowRoot = div.attachShadow({ mode: 'open' })
      const result = isShadowRoot(shadowRoot)

      expect(result).toBe(true)
    }
  })

  // 测试传入非 ShadowRoot 实例
  it('isShadowRoot(nonShadowRoot)，返回：false', () => {
    const nonShadowRoot = {}
    const result = isShadowRoot(nonShadowRoot)

    expect(result).toBe(false)
  })
})
