import _type from './_type'
import { TYPES } from './enum'

const isFloat64Array = ( val ) => {
  return _type( val ) === TYPES.FLOAT64_ARRAY;
}

export default isFloat64Array
