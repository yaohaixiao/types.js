// 能够识别的数据类型名称枚举值
const TYPES = {
  /* ===== Primitive data types ===== */
  BIG_INT: 'bigint',
  BOOLEAN: 'boolean',
  NULL: 'null',
  NUMBER: 'number',
  UNDEFINED: 'undefined',
  STRING: 'string',
  SYMBOL: 'symbol',
  /* ===== Collections ===== */
  SET: 'set',
  WEAK_SET: 'weakset',
  MAP: 'map',
  WEAK_MAP: 'weakmap',
  /* ===== Array ===== */
  ARRAY: 'array',
  ARGUMENTS: 'arguments',
  /* ===== Typed ===== */
  DATA_VIEW: 'dataview',
  ARRAY_BUFFER: 'arraybuffer',
  INT8_ARRAY: 'int8array',
  UNIT8_ARRAY: 'uint8array',
  UNIT8_CLAMPED_ARRAY: 'uint8clampedarray',
  INT16_ARRAY: 'int16array',
  UNIT16_ARRAY: 'uint16array',
  INT32_ARRAY: 'int32array',
  UNIT32_ARRAY: 'uint32array',
  FLOAT32_ARRAY: 'float32array',
  FLOAT64_ARRAY: 'float64array',
  BIG_INT64_ARRAY: 'bigint64array',
  BIG_UINT64_ARRAY: 'biguint64array',
  /* ===== Object ===== */
  OBJECT: 'object',
  COLLECTION: 'collection',
  DATE: 'date',
  ELEMENT: 'element',
  ERROR: 'error',
  FRAGMENT: 'fragment',
  FUNCTION: 'function',
  PROMISE: 'promise',
  REGEXP: 'regexp',
  TEXT: 'text'
}

export default TYPES
