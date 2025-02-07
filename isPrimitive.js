import isBoolean from './isBoolean'
import isString from './isString'
import isNumber from './isNumber'
import isUndefined from './isUndefined'
import isSymbol from './isSymbol'
import isBigInt from './isBigInt'

const isPrimitive = (val) => {
  return (
    isBoolean(val) ||
    isString(val) ||
    isNumber(val) ||
    isUndefined(val) ||
    isSymbol(val) ||
    isBigInt(val)
  )
}

export default isPrimitive
