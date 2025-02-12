export default isNil;
/**
 * 检测测试数据是否为 Null 或者 undefined
 * ========================================================================
 * @method isNil
 * @since 2.7.0
 * @category Base
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是 Null 或者 undefined，返回 true，否则返回 false
 * @example
 *
 * isNil(null) // => true
 *
 * isNil(void 0) // => true
 *
 * isNil(NaN) // => false
 */
declare function isNil(val: any): boolean;
