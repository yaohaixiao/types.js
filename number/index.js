import is from '../is'
import isValue from '../isValue'
import isNumber from '../isNumber'
import isNumeric from '../isNumeric'
import isInteger from '../isInteger'
import isFloat from '../isFloat'
import isOdd from '../isOdd'
import isEven from '../isEven'
import isInfinite from '../isInfinite'
import isLength from '../isLength'
import isPrime from '../isPrime'
// _getTypes
import _getTypes from '../_getTypes'

const METHODS = {
  is,
  isValue,
  isNumber,
  isNumeric,
  isInteger,
  isFloat,
  isOdd,
  isEven,
  isInfinite,
  isLength,
  isPrime
}

const Types = _getTypes(METHODS)

export default Types
