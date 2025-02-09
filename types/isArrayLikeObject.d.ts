export default isArrayLikeObject;
/**
 * 检测测试数据是否为 ArrayLike 的对象数据
 * ========================================================================
 * @method isArrayLikeObject
 * @since 0.2.0
 * @category Array
 * @param {*} val - 要检测的数据
 * @returns {Boolean} ‘val’ 是类似 Array 类型对象，返回 true，否则返回 false;
 * @example
 *
 * const $items = document.querySelectorAll('.item')
 * const obj = { '0': 1, '1': 2, length: 2 }
 * let args
 *
 * function getAge(age) {
 *   args = arguments
 *   return age + 18
 * }
 *
 * getAge(30)
 *
 * isArrayLikeObject([]) // -> true
 *
 * isArrayLikeObject($items) // -> true
 *
 * isArrayLikeObject(args) // -> true
 *
 * isArrayLikeObject(obj) // -> false
 *
 * isArrayLikeObject({}) // -> false
 */
declare function isArrayLikeObject(val: any): boolean;
