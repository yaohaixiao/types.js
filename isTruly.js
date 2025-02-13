/**
 * isFalsy(val) 方法用来检测测试数据是否为在布尔上下文中被视为 false 的值。
 * ========================================================================
 * @method isTruly
 * @since 2.8.0
 * @category Base
 * @param {*} val - val 待检测的数据。
 * @returns {Boolean} 'val' 在布尔上下文中被视为 true 的值，返回 true，否则返回 false。
 * @example
 *
 * isTruly(true); // -> true
 * isTruly(1); // -> true
 * isTruly("hello"); // -> true
 * isTruly({}); // -> true
 * isTruly([]); // -> true
 *
 * isTruly(false); // -> false
 * isTruly(0); // -> false
 * isTruly(''); // -> false
 * isTruly(null); // -> false
 * isTruly(undefined); // -> false
 * isTruly(NaN); // -> false
 */
const isTruly = (val) => {
  return Boolean(val)
}

export default isTruly
