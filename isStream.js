/**
 * 检测测试数据是否为 Stream 类型
 * ========================================================================
 * @method isStream
 * @since 2.7.0
 * @category Object
 * @param {*} val - 要检测的数据
 * @param {Object} [{}] - 这是一个解构赋值的参数。它是一个对象，默认值为空对象 {}。
 * 对象中有一个属性 checkOpen，其默认值为 true。checkOpen 用于控制是否检查流的打开
 * 状态（即可读或可写状态）。
 * @return {Boolean} 'val' 是 Stream 类型，返回 true，否则返回 false
 * @example
 *
 * // 测试流对象
 * const validStream = {
 *   writable: true,
 *   pipe: () => {}
 * }
 *
 * isStream(validStream) // -> true
 *
 * // 测试非流对象
 * const nonStream = {
 *   notAStreamProperty: 'value'
 * }
 *
 * isStream(nonStream) // -> false
 *
 * // 测试 null
 * isStream(null) // -> false
 *
 * // 测试 checkOpen 为 false 的情况
 * const obj = {
 *   pipe: () => {}
 * }
 *
 * isStream(obj, { checkOpen: false }) // -> true
 */
const isStream = (val, { checkOpen = true } = {}) => {
  return !!(val !== null
    && typeof val === 'object'
    && (val.writable || val.readable || !checkOpen || (val.writable === undefined && val.readable === undefined))
    && typeof val.pipe === 'function')
}

export default isStream
