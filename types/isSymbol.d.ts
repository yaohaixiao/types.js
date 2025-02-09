export default isSymbol;
/**
 * 检测测试数据是否为 Symbol 类型
 * ========================================================================
 * @method isSymbol
 * @since 0.2.0
 * @category Primitive Values
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Symbol 类型，返回 true，否则返回 false
 * @example
 *
 * const sym = Symbol('foo')
 * const symObj = Object(sym)
 *
 * isSymbol(sym) // -> true
 *
 * isSymbol(symObj) // -> false
 */
declare function isSymbol(val: any): boolean;
