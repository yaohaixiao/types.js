/**
 * 检测测试数据是否为在布尔上下文中被视为 false 的值
 * ========================================================================
 * @method isFalsy
 * @since 2.7.0
 * @category Base
 * @param {*} val - 要检测的数据
 * @return {Boolean} 'val' 是 NaN，返回 true，否则返回 false
 * @example
 *
 * isFalsy(false) // true
 * isFalsy(0) // true
 * isFalsy('') // true
 * isFalsy(null) // true
 * isFalsy(undefined) // true
 * isFalsy(NaN) // true
 *
 * isFalsy(true) // false
 * isFalsy(1) // false
 * isFalsy('hello') // false
 * isFalsy({}) // false
 * isFalsy([]) // false
 */
const isFalsy = (val) => {
  return !val;
}

export default isFalsy
