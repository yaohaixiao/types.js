import TYPES from '../enum/types'
import OBJECTS from '../enum/objects'

/**
 * 检测数据类型，返回检测数据类型的字符串
 * ========================================================================
 * @method _type
 * @param {*} val - 要检测的任意值
 * @returns {String}
 */
const _type = (val) => {
  const type = Object.prototype.toString.apply(val)
  const _typeof = typeof val
  let name

  // HTMLElement
  if (val?.tagName && val.nodeType === 1) {
    name = TYPES.ELEMENT
  } else {
    /* ===== 原始值类型（Primitive data types） ===== */
    switch (_typeof) {
      case 'bigint':
        name = TYPES.BIG_INT
        break
      case 'string':
        name = TYPES.STRING
        break
      case 'number':
        name = TYPES.NUMBER
        break
      case 'boolean':
        name = TYPES.BOOLEAN
        break
      case 'undefined':
        name = TYPES.UNDEFINED
        break
      case 'symbol':
        name = TYPES.SYMBOL
        break
      // 对象（引用）类型的数据
      default:
        name = OBJECTS[type]
        break
    }
  }

  return name || type
}

export default _type
