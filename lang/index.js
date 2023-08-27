// Base
import is from '../is'
import isValue from '../isValue'
// Primitive Values
import isNumber from '../isNumber'
import isString from '../isString'
import isBigInt from '../isBigInt'
import isBoolean from '../isBoolean'
import isUndefined from '../isUndefined'
import isNull from '../isNull'
import isSymbol from '../isSymbol'
// Keyed Collections
import isSet from '../isSet'
import isMap from '../isMap'
// Array
import isArray from '../isArray'
import isArrayLike from '../isArrayLike'
// Function
import isFunction from '../isFunction'
import isConstructor from '../isConstructor'
// Object
import isObject from '../isObject'
import isHash from '../isHash'
import isBuffer from '../isBuffer'
import isDate from '../isDate'
import isElement from '../isElement'
import isPromise from '../isPromise'
// Number
import isFloat from '../isFloat'
import isInteger from '../isInteger'
import isNumeric from '../isNumeric'
// String
import isEmpty from '../isEmpty'
import isEmail from '../isEmail'
import isURL from '../isURL'
import isSVG from '../isHTML'
import isHTML from '../isSVG'
import isGuid from '../isGuid'
import isIPAddress from '../isIPAddress'
import isPhoneNumber from '../isPhoneNumber'
// _getTypes
import _getTypes from '../_getTypes'

const METHODS = {
  is,
  isValue,
  isNumber,
  isString,
  isBigInt,
  isBoolean,
  isUndefined,
  isNull,
  isSymbol,
  isSet,
  isMap,
  isArray,
  isArrayLike,
  isFunction,
  isConstructor,
  isObject,
  isHash,
  isBuffer,
  isDate,
  isElement,
  isPromise,
  isFloat,
  isInteger,
  isNumeric,
  isEmpty,
  isEmail,
  isURL,
  isHTML,
  isSVG,
  isGuid,
  isIPAddress,
  isPhoneNumber
}

const Types = _getTypes(METHODS)

export default Types
