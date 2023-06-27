import _type from './_type'
import { TYPES } from './enum'

const isFloat32Array = (val) => {
  return _type(val) === TYPES.FLOAT32_ARRAY
}

export default isFloat32Array
