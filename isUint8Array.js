import _type from './_type'
import { TYPES } from './enum'

const isUint8Array = (val) => {
  return _type(val) === TYPES.UNIT8_ARRAY
}

export default isUint8Array
