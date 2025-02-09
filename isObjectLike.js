import isObject from './isObject'

/**
 * 检测测试数据是否为类似 Object 类型
 * ========================================================================
 * @method isObjectLike
 * @since 0.2.0
 * @category Object
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是类似 Object 类型，返回 true，否则返回 false
 * @example
 *
 * // True
 * isObjectLike(function empty(){}) // -> true
 * isObjectLike({}) // -> true
 * isObjectLike(Object.create(null)) // -> true
 * isObjectLike(Object.create({})) // -> true
 * isObjectLike(new Function()) // -> true
 *
 * // False
 * isObjectLike([]) // -> false
 * isObjectLike(null) // -> false
 * isObjectLike(document.getElementById('wrap')) // -> fal
 */
const isObjectLike = (val) => {
  return isObject(val) && val !== null
}

export default isObjectLike
