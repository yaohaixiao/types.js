import _type from './_type'

/**
 * 检测数据类型，返回检测数据类型的字符串
 * ========================================================================
 * @method is
 * @param {*} val - 要检测的任意值
 * @see _type
 * @returns {String}
 */
const is = (val) => {
  return _type(val)
}

export default is
