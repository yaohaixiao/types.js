import _type from './_type'
import { TYPES } from './enum'

const isInt32Array = (val) => {
  return _type(val) === TYPES.INT32_ARRAY
}

export default isInt32Array
