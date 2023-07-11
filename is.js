import _type from './_type'
import _getExactTypeOfNumber from './_getExactTypeOfNumber'
import _getExactTypeOfString from './_getExactTypeOfString'
import _getExactTypeOfObject from './_getExactTypeOfObject'

/**
 * 检测数据类型，返回检测数据类型的字符串
 * ========================================================================
 * @method is
 * @category Lang
 * @see _type
 * @param {*} val - 要检测的任意值
 * @returns {String} 返回确切的数据类型名称
 */
const is = (val) => {
  const type = _type(val)
  let name

  switch (type) {
    case 'number':
      name = _getExactTypeOfNumber(val)
      break
    case 'string':
      name = _getExactTypeOfString(val)
      break
    case 'object':
      name = _getExactTypeOfObject(val)
      break
    default:
      name = type
      break
  }

  return name
}

export default is
