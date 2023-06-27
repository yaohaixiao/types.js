import { TYPES, OBJECTS } from './enum'

/**
 * 检测数据类型，返回检测数据类型的字符串
 * ========================================================================
 * @method _type
 * @param {*} val - 要检测的任意值
 * @returns {String}
 */
const _type = (val) => {
  const type = Object.prototype.toString.apply(val)

  /* ===== 原始值类型（Primitive data types） ===== */
  if (typeof val === TYPES.BOOLEAN) {
    // 检查是否为 Boolean 类型
    return TYPES.BOOLEAN
  } else if (val === null) {
    // 检测是否为 null
    return TYPES.NULL
  } else if (typeof val === TYPES.NUMBER && isFinite(val)) {
    // 检测是否为 Number 类型
    return TYPES.NUMBER
  } else if (typeof val === TYPES.UNDEFINED) {
    // 检测是否为 Undefined
    return TYPES.UNDEFINED
  } else if (typeof val === TYPES.STRING) {
    // 检测是否为 String 类型
    return TYPES.STRING
    /* ===== ES6 ( Map, WeakMap, Set, WeakSet, Symbol ) ===== */
  } else if (type === OBJECTS.SET) {
    // 检测是否为 Set 类型
    return TYPES.SET
  } else if (type === OBJECTS.WEAK_SET) {
    // 检测是否为 WeakSet 类型
    return TYPES.WEAK_SET
  } else if (type === OBJECTS.MAP) {
    // 检测是否为 Map 类型
    return TYPES.MAP
  } else if (type === OBJECTS.WEAK_MAP) {
    // 检测是否为 WeakMap 类型
    return TYPES.WEAK_MAP
  } else if (type === OBJECTS.SYMBOL) {
    // 检测是否为 Symbol 类型
    return TYPES.SYMBOL
    /* ===== 引用类型（Reference data types） ===== */
  } else if (type === OBJECTS.ARRAY) {
    // 检测是否为 Array 类型
    return TYPES.ARRAY
  } else if (type === OBJECTS.ARRAY_BUFFER) {
    // 检测是否为 ArrayBuffer 类型
    return TYPES.ARRAY_BUFFER
  } else if (type === OBJECTS.DATA_VIEW) {
    // 检测是否为 DataView 类型
    return TYPES.DATA_VIEW
  } else if (type === OBJECTS.DATE) {
    // 检测是否为 Date 类型
    return TYPES.DATE
  } else if (type === OBJECTS.ERROR) {
    // 检测是否为 Error 类型
    return TYPES.ERROR
  } else if (typeof val === TYPES.FUNCTION || type === OBJECTS.FUNCTION) {
    // 检测是否为 Function 类型
    return TYPES.FUNCTION
  } else if (type === OBJECTS.REGEXP) {
    // 检测是否为 RegExp 类型
    return TYPES.REGEXP
    /* ===== ES2017 Arrays ===== */
    // Int - 整数
    // Uint - 无符号整数
    // Float - IEEE754 浮点数
  } else if (type === OBJECTS.INT8_ARRAY) {
    return TYPES.INT8_ARRAY
  } else if (type === OBJECTS.UNIT8_ARRAY) {
    return TYPES.UNIT8_ARRAY
  } else if (type === OBJECTS.UNIT8_CLAMPED_ARRAY) {
    return TYPES.UNIT8_CLAMPED_ARRAY
  } else if (type === OBJECTS.INT16_ARRAY) {
    return TYPES.INT16_ARRAY
  } else if (type === OBJECTS.UNIT16_ARRAY) {
    return TYPES.UNIT16_ARRAY
  } else if (type === OBJECTS.INT32_ARRAY) {
    return TYPES.INT32_ARRAY
  } else if (type === OBJECTS.UNIT32_ARRAY) {
    return TYPES.UNIT32_ARRAY
  } else if (type === OBJECTS.FLOAT32_ARRAY) {
    return TYPES.FLOAT32_ARRAY
  } else if (type === OBJECTS.FLOAT64_ARRAY) {
    return TYPES.FLOAT64_ARRAY
    /* ===== 其它类型（Others） ===== */
    // 检测是否为一个 DOM
  } else if (val.nodeName) {
    // 检测是否为 Element 节点
    if (val.nodeType === 1) {
      return TYPES.ELEMENT
    } else if (val.nodeType === 3) {
      // 检测是否为 Text 节点
      return /\S/.test(val.nodeValue) ? TYPES.TEXT : TYPES.WHITESPACE
    }
  } else if (
    typeof val === TYPES.OBJECT &&
    typeof val.length === TYPES.NUMBER &&
    val.length > 0
  ) {
    // 检测是否为 Arguments 类型
    if ('callee' in val) {
      return TYPES.ARGUMENTS
    } else if ('item' in val) {
      // 检测是否为 NodeList 类型
      return TYPES.COLLECTION
    }
  }

  // 其它标准的数据类型
  return typeof val
}

export default _type
