import getWindow from './utils/getWindow'

/**
 * 检测测试数据是否为 ShadowRoot 对象
 * ========================================================================
 * @method isShadowRoot
 * @since 2.7.0
 * @category Element
 * @param {*} val - 要检测的数据
 * @return {Boolean} 'val' 是 ShadowRoot 对象，返回 true，否则返回 false
 * @example
 *
 * // 测试 ShadowRoot 未定义的情况
 * const originalShadowRoot = global.ShadowRoot
 *
 * // 临时将 ShadowRoot 设置为 undefined
 * global.ShadowRoot = undefined
 * isShadowRoot({}) // -> false
 *
 * // 恢复原始的 ShadowRoot
 * global.ShadowRoot = originalShadowRoot
 *
 * // 测试传入真正的 ShadowRoot 实例
 * const div = document.createElement('div')
 * const shadowRoot = div.attachShadow({ mode: 'open' })
 *
 * isShadowRoot(shadowRoot) // -> true
 *
 * // 测试传入非 ShadowRoot 实例
 * isShadowRoot({}) // -> false
 */
const isShadowRoot = (val) => {
  if (typeof ShadowRoot === 'undefined') {
    return false
  }

  const OwnElement = getWindow(val).ShadowRoot
  return val instanceof OwnElement || val instanceof ShadowRoot
}

export default isShadowRoot
