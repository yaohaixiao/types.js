import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 WeakSet 类型
 * ========================================================================
 * @method isWeakSet
 * @since 0.2.0
 * @cagegory Keyed Collections
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 WeakSet 类型，返回 true，否则返回 false
 * @example
 *
 * const set = new Set([1, 2, 3, 4])
 * const weakset = new WeakSet()
 *
 * weakset.add({name: 'Robert'})
 *
 * is(set) // -> 'set'
 * isSet(set) // -> true
 * isWeakSet(set) // -> false
 *
 * is(weakset) // -> 'weakset'
 * isSet(weakset) // -> false
 * isWeakSet(weakset) // -> true
 */
const isWeakSet = (val) => {
  return _type(val) === TYPES.WEAK_SET
}

export default isWeakSet
