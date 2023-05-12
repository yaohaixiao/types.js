import _type from './_type'
import { TYPES } from './enum'

const isUint32Array = (val) => {
  return _type(val) === TYPES.UNIT32_ARRAY
}

export default isUint32Array
