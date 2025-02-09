export default isArguments;
/**
 * 检测测试数据是否为 arguments 对象
 * ========================================================================
 * @method isArguments
 * @since 0.2.0
 * @category Array
 * @param {Object} val - 要检测的数据
 * @return {Boolean} ‘val’ 是 Arguments 对象，返回 true，否则返回 false;
 * @example
 *
 * const argsLike = { '0': 3, '1': 4, length: 2 }
 * const $items = document.querySelectorAll('.item')
 * let args
 *
 * function sum(a, b){
 *   args = arguments
 *
 *   return a + b
 * }
 *
 * sum(3, 5)
 *
 * isArguments(argsLike) // -> false
 * isArguments([]) // -> false
 * isArguments(items) // -> false
 *
 * is(args) // -> 'arguments'
 * isArguments(args) // -> true
 */
declare function isArguments(val: any): boolean;
