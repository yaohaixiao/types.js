import _type from './utils/_type'
import typeOfNumber from './utils/typeOfNumber'
import typeOfString from './utils/typeOfString'
import typeOfObject from './utils/typeOfObject'

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
      name = typeOfNumber(val)
      break
    case 'string':
      name = typeOfString(val)
      break
    case 'object':
      name = typeOfObject(val)
      break
    default:
      name = type
      break
  }

  return name
}

export default is
