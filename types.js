import is from './is'
import isArray from './isArray'
import isArrayLike from './isArrayLike'
import isArrayLikeObject from './isArrayLikeObject'
import isArguments from './isArguments'
import isArrayBuffer from './isArrayBuffer'
import isInt8Array from './isInt8Array'
import isUint8Array from './isUint8Array'
import isUint8ClampedArray from './isUint8ClampedArray'
import isInt16Array from './isInt16Array'
import isUint16Array from './isUint16Array'
import isInt32Array from './isInt32Array'
import isUint32Array from './isUint32Array'
import isFloat32Array from './isFloat32Array'
import isFloat64Array from './isFloat64Array'
import isBigInt64Array from './isBigInt64Array'
import isBigUint64Array from './isBigUint64Array'
import isBigInt from './isBigInt'
import isBase64 from './isBase64'
import isBinary from './isBinary'
import isBlank from './isBlank'
import isBoolean from './isBoolean'
import isBuffer from './isBuffer'
import isConstructor from './isConstructor'
import isDataView from './isDataView'
import isDate from './isDate'
import isDOM from './isDOM'
import isElement from './isElement'
import isEmail from './isEmail'
import isEmpty from './isEmpty'
import isEmptyArray from './isEmptyArray'
import isEmptyObject from './isEmptyObject'
import isError from './isError'
import isEven from './isEven'
import isFloat from './isFloat'
import isFragment from './isFragment'
import isFunction from './isFunction'
import isGuid from './isGuid'
import isHash from './isHash'
import isHex from './isHex'
import isHTML from './isHTML'
import isHTMLCollection from './isHTMLCollection'
import isInfinite from './isInfinite'
import isInteger from './isInteger'
import isIPAddress from './isIPAddress'
import isJSON from './isJSON'
import isLength from './isLength'
import isMap from './isMap'
import isNativeFunction from './isNativeFunction'
import isNull from './isNull'
import isNumber from './isNumber'
import isNumeric from './isNumeric'
import isObject from './isObject'
import isObjectLike from './isObjectLike'
import isOdd from './isOdd'
import isChinese from './isChinese'
import isPhoneNumber from './isPhoneNumber'
import isPlainObject from './isPlainObject'
import isPromise from './isPromise'
import isPrototype from './isPrototype'
import isRegExp from './isRegExp'
import isSet from './isSet'
import isString from './isString'
import isSVG from './isSVG'
import isSymbol from './isSymbol'
import isTextNode from './isTextNode'
import isTime from './isTime'
import isTypedArray from './isTypedArray'
import isUndefined from './isUndefined'
import isURL from './isURL'
import isValue from './isValue'
import isVNode from './isVNode'
import isWeakMap from './isWeakMap'
import isWeakSet from './isWeakSet'
import isXML from './isXML'
// _getTypes
import _getTypes from './_getTypes'

const METHODS = {
  is,
  isArray,
  isArrayLike,
  isArrayLikeObject,
  isArguments,
  isArrayBuffer,
  isInt8Array,
  isUint8Array,
  isUint8ClampedArray,
  isInt16Array,
  isUint16Array,
  isInt32Array,
  isUint32Array,
  isFloat32Array,
  isFloat64Array,
  isBigInt64Array,
  isBigUint64Array,
  isBigInt,
  isBase64,
  isBinary,
  isBlank,
  isBoolean,
  isBuffer,
  isConstructor,
  isDataView,
  isDate,
  isDOM,
  isElement,
  isEmail,
  isEmpty,
  isEmptyArray,
  isEmptyObject,
  isError,
  isEven,
  isFloat,
  isFragment,
  isFunction,
  isGuid,
  isHash,
  isHex,
  isHTMLCollection,
  isInfinite,
  isInteger,
  isIPAddress,
  isJSON,
  isLength,
  isMap,
  isNativeFunction,
  isNull,
  isNumber,
  isNumeric,
  isObject,
  isObjectLike,
  isOdd,
  isChinese,
  isPhoneNumber,
  isPlainObject,
  isPromise,
  isPrototype,
  isRegExp,
  isSet,
  isString,
  isSVG,
  isSymbol,
  isTextNode,
  isTime,
  isTypedArray,
  isUndefined,
  isURL,
  isValue,
  isVNode,
  isWeakMap,
  isWeakSet,
  isXML,
  isHTML
}

const Types = _getTypes(METHODS)

export default Types
