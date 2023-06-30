import TYPES from './enum/types'
import OBJECTS from './enum/objects'

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

  switch (type) {
    /* ===== 原始值类型（Primitive data types） ===== */
    case OBJECTS.STRING:
      if (_typeof === 'string') {
        // 检测是否为 String 类型
        return TYPES.STRING
      }
      return TYPES.OBJECT
    case OBJECTS.NUMBER:
      // 检测是否为 Number 类型
      if (_typeof === 'number') {
        return TYPES.NUMBER
      }
      return TYPES.OBJECT
    case OBJECTS.BOOLEAN:
      if (typeof val === 'boolean') {
        // 检查是否为 Boolean 类型
        return TYPES.BOOLEAN
      }
      return TYPES.OBJECT
    case OBJECTS.NULL:
      // 检测是否为 null
      return TYPES.NULL
    case OBJECTS.UNDEFINED:
      // 检测是否为 Undefined
      return TYPES.UNDEFINED
    case OBJECTS.SYMBOL:
      // 检测是否为 Symbol 类型
      return TYPES.SYMBOL
    /* ===== ES6 对象 ( Map, WeakMap, Set, WeakSet ) ===== */
    case OBJECTS.SET:
      // 检测是否为 Set 类型
      return TYPES.SET
    case OBJECTS.WEAK_SET:
      // 检测是否为 WeakSet 类型
      return TYPES.WEAK_SET
    case OBJECTS.MAP:
      // 检测是否为 Map 类型
      return TYPES.MAP
    case OBJECTS.WEAK_MAP:
      // 检测是否为 WeakMap 类型
      return TYPES.WEAK_MAP
    /* ===== 引用类型（Reference data types） ===== */
    case OBJECTS.FUNCTION:
      // 检测是否为 Function 类型
      return TYPES.FUNCTION
    case OBJECTS.ARRAY:
      // 检测是否为 Array 类型
      return TYPES.ARRAY
    case OBJECTS.ARRAY_BUFFER:
      // 检测是否为 ArrayBuffer 类型
      return TYPES.ARRAY_BUFFER
    case OBJECTS.DATA_VIEW:
      // 检测是否为 DataView 类型
      return TYPES.DATA_VIEW
    case OBJECTS.DATE:
      // 检测是否为 Date 类型
      return TYPES.DATE
    case OBJECTS.ERROR:
      // 检测是否为 Error 类型
      return TYPES.ERROR
    case OBJECTS.REGEXP:
      // 检测是否为 RegExp 类型
      return TYPES.REGEXP
    /* ===== ES2017 Typed Arrays ===== */
    // Int - 整数
    // Uint - 无符号整数
    // Float - IEEE754 浮点数 )
    case OBJECTS.INT8_ARRAY:
      return TYPES.INT8_ARRAY
    case OBJECTS.INT16_ARRAY:
      return TYPES.INT16_ARRAY
    case OBJECTS.INT32_ARRAY:
      return TYPES.INT32_ARRAY
    case OBJECTS.UNIT8_ARRAY:
      return TYPES.UNIT8_ARRAY
    case OBJECTS.UNIT8_CLAMPED_ARRAY:
      return TYPES.UNIT8_CLAMPED_ARRAY
    case OBJECTS.UNIT16_ARRAY:
      return TYPES.UNIT16_ARRAY
    case OBJECTS.UNIT32_ARRAY:
      return TYPES.UNIT32_ARRAY
    case OBJECTS.FLOAT32_ARRAY:
      return TYPES.FLOAT32_ARRAY
    case OBJECTS.FLOAT64_ARRAY:
      return TYPES.FLOAT64_ARRAY
    /* ===== 其它类型（Others） ===== */
    case OBJECTS.ARGUMENTS:
      // 检测是否为 arguments 对象
      return TYPES.ARGUMENTS
    case OBJECTS.NODE_LIST:
      // 检测是否为 NodeList 类型
      return TYPES.COLLECTION
    case OBJECTS.TEXT_NODE:
      // 检测是否为 Text 节点
      return TYPES.TEXT
    case OBJECTS.OBJECT:
      return TYPES.OBJECT
    default:
      if (val.tagName && val.nodeType === 1) {
        return TYPES.ELEMENT
      }
      return type
  }
}

export default _type
