import _type from './utils/_type'
import TYPES from './enum/types'

/**
 * 检测测试数据是否为 WeakMap 类型
 * ========================================================================
 * @method isWeakMap
 * @since 0.2.0
 * @cagegory Keyed Collections
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 WeakMap 类型，返回 true，否则返回 false
 * @example
 *
 * const map = new Map([
 *     ['name', 'Robert'],
 *     ['Gender', 'Male']
 * ])
 *
 * const weakmap = new WeakMap()
 *
 * weakmap.set({}, 37)
 *
 * is(weakmap) // -> 'weakmap'
 * isWeakMap(weakmap) // -> true
 *
 * is(map) // -> 'map'
 * isWeakMap(map) // -> false
 */
const isWeakMap = (val) => {
  return _type(val) === TYPES.WEAK_MAP
}

export default isWeakMap
