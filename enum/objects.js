import TYPES from './types'

// Object.prototype.toString() 输出的类型名称枚举值
const OBJECTS = {
  /* ===== Primitive data types ===== */
  '[object Null]': TYPES.NULL,
  /* ===== Keyed Collections ===== */
  '[object Set]': TYPES.SET,
  '[object WeakSet]': TYPES.WEAK_SET,
  '[object Map]': TYPES.MAP,
  '[object WeakMap]': TYPES.WEAK_MAP,
  /* ===== Array ===== */
  '[object Array]': TYPES.ARRAY,
  '[object Arguments]': TYPES.ARGUMENTS,
  /* ===== Typed Arrays ===== */
  '[object DataView]': TYPES.DATA_VIEW,
  '[object ArrayBuffer]': TYPES.ARRAY_BUFFER,
  '[object Int8Array]': TYPES.INT8_ARRAY,
  '[object Uint8Array]': TYPES.UNIT8_ARRAY,
  '[object Uint8ClampedArray]': TYPES.UNIT8_CLAMPED_ARRAY,
  '[object Int16Array]': TYPES.INT16_ARRAY,
  '[object Uint16Array]': TYPES.UNIT16_ARRAY,
  '[object Int32Array]': TYPES.INT32_ARRAY,
  '[object Uint32Array]': TYPES.UNIT32_ARRAY,
  '[object Float32Array]': TYPES.FLOAT32_ARRAY,
  '[object Float64Array]': TYPES.FLOAT64_ARRAY,
  '[object BigInt64Array]': TYPES.BIG_INT64_ARRAY,
  '[object BigUint64Array]': TYPES.BIG_UINT64_ARRAY,
  /* ===== Object ===== */
  '[object Object]': TYPES.OBJECT,
  '[object Boolean]': TYPES.OBJECT,
  '[object String]': TYPES.OBJECT,
  '[object Number]': TYPES.OBJECT,
  '[object Date]': TYPES.DATE,
  '[object Error]': TYPES.ERROR,
  '[object DocumentFragment]': TYPES.FRAGMENT,
  '[object Function]': TYPES.FUNCTION,
  '[object NodeList]': TYPES.COLLECTION,
  '[object Promise]': TYPES.PROMISE,
  '[object RegExp]': TYPES.REGEXP,
  '[object Text]': TYPES.TEXT
}

export default OBJECTS
