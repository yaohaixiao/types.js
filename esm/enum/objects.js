// Object.prototype.toString() 输出的类型名称枚举值
const OBJECTS = {
  STRING: '[object String]',
  NUMBER: '[object Number]',
  BOOLEAN: '[object Boolean]',
  NULL: '[object Null]',
  UNDEFINED: '[object Undefined]',
  OBJECT: '[object Object]',
  ARGUMENTS: '[object Arguments]',
  ARRAY: '[object Array]',
  ARRAY_BUFFER: '[object ArrayBuffer]',
  INT8_ARRAY: '[object Int8Array]',
  UNIT8_ARRAY: '[object Uint8Array]',
  UNIT8_CLAMPED_ARRAY: '[object Uint8ClampedArray]',
  INT16_ARRAY: '[object Int16Array]',
  UNIT16_ARRAY: '[object Uint16Array]',
  INT32_ARRAY: '[object Int32Array]',
  UNIT32_ARRAY: '[object Uint32Array]',
  FLOAT32_ARRAY: '[object Float32Array]',
  FLOAT64_ARRAY: '[object Float64Array]',
  DATA_VIEW: '[object DataView]',
  DATE: '[object Date]',
  ERROR: '[object Error]',
  FUNCTION: '[object Function]',
  REGEXP: '[object RegExp]',
  SET: '[object Set]',
  WEAK_SET: '[object WeakSet]',
  MAP: '[object Map]',
  WEAK_MAP: '[object WeakMap]',
  SYMBOL: '[object Symbol]',
  NODE_LIST: '[object NodeList]',
  TEXT_NODE: '[object Text]'
}

export default OBJECTS