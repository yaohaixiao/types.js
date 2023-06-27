import _type from './_type'
import { TYPES } from './enum'

const isInt8Array = (val) => {
  return _type(val) === TYPES.INT8_ARRAY
}

export default isInt8Array
