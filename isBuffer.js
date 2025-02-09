/**
 * 验证数据是否为 Buffer 类型
 * ========================================================================
 * @method isBuffer
 * @since 1.6.0
 * @category Object
 * @param {*} val - 待检测的数据
 * @returns {Boolean} 'val' 是 Buffer 类型返回 true，否则返回 false
 * @example
 *
 * const buffer = Buffer.alloc(15)
 *
 * isBuffer(new ArrayBuffer(8)) // -> false
 * isBuffer(new Uint8Array(2)) // -> false
 *
 * isBuffer(buffer) // -> true
 */
const isBuffer = (val) => {
  // Node.js 环境检测 `global`
  const Global =
    typeof global === 'object' &&
    global !== null &&
    global.Object === Object &&
    global

  // 检测 `globalThis`
  const GlobalThis =
    typeof globalThis === 'object' &&
    globalThis !== null &&
    globalThis.Object === Object &&
    globalThis

  // 检测 `self`
  const Self =
    typeof self === 'object' && self !== null && self.Object === Object && self

  // 应用之前检测的 `global object` 的引用
  const _Global = GlobalThis || Global || Self || Function('return this')()

  // 检测 `exports`
  const Exports =
    typeof exports === 'object' &&
    exports !== null &&
    !exports.nodeType &&
    exports

  // 检测 `module`
  const Module =
    Exports &&
    typeof module === 'object' &&
    module !== null &&
    !module.nodeType &&
    module

  // 检测 `module.exports`
  const ModuleExports = Module && Module.exports === Exports

  // 获取 Buffer 对象的引用
  const Buffer = ModuleExports ? _Global.Buffer : undefined

  // 获取 isBuffer() 方法
  const detectBuffer = Buffer ? Buffer.isBuffer : () => false

  return detectBuffer(val)
}

export default isBuffer
