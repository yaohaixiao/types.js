import _type from './_type'
import { TYPES } from './enum'

const isUint8ClampedArray = (val) => {
  return _type(val) === TYPES.UNIT8_CLAMPED_ARRAY
}

export default isUint8ClampedArray
