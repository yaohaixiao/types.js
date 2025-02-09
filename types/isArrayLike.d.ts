export default isArrayLike;
/**
 * 检测测试数据的数据类型是否为类似数组（array、arguments 对象或者
 * HTMLNodeList 对象）类型。
 * ========================================================================
 * @method isArrayLike
 * @since 0.2.0
 * @category Array
 * @param {Object|Array|HTMLCollection} val - 要检测是的数据
 * @returns {Boolean} 'val' 是 array、arguments 或者 HTMLNodeList 类型返回 true，
 * 否则返回 false
 * @example
 *
 * let args
 *
 * function sum(a, b){
 *     args = arguments // -> true
 *     return a + b
 * }
 *
 * sum(5, 6)
 *
 * isArrayLike([1, 2, 3, 4, 5]) // -> true
 *
 * // arguments 对象是类似数组类型的数据
 * isArrayLike(args) // -> true
 *
 * // HTMLNodeList 是类似数组类型的数据
 * isArrayLike(document.getElementsByTagName('li')) // -> true
 *
 * isArrayLike({ '0': 1, '1': 2, length: 2 }) // -> false
 * isArrayLike( new Int8Array() ) // -> false
 */
declare function isArrayLike(val: any | any[] | HTMLCollection): boolean;
