import _type from './_type'
import { TYPES } from './enum'

const isInt16Array = ( val ) => {
  return _type( val ) === TYPES.INT16_ARRAY;
}

export default isInt16Array
