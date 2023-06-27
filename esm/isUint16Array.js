import _type from './_type'
import { TYPES } from './enum'

const isUint16Array = (val) => {
  return _type(val) === TYPES.UNIT16_ARRAY
}

export default isUint16Array
