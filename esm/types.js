import _type from './_type'
import isArray from './isArray'
import isArrayLike from './isArrayLike'
import isArguments from './isArgumants'
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
import isBase64 from './isBase64'
import isBlank from './isBlank'
import isBoolean from './isBoolean'
import isConstructor from './isConstructor'
import isDataView from './isDataView'
import isDate from './isDate'
import isElement from './isElement'
import isEmpty from './isEmpty'
import isEmptyObject from './isEmptyObject'
import isError from './isError'
import isEven from './isEven'
import isFloat from './isFloat'
import isFunction from './isFunction'
import isHex from './isHex'
import isHTMLCollection from './isHTMLCollection'
import isInfinite from './isInfinite'
import isInteger from './isInteger'
import isJSON from './isJSON'
import isMap from './isMap'
import isNativeFunction from './isNativeFunction'
import isNull from './isNull'
import isNumber from './isNumber'
import isNumeric from './isNumeric'
import isObject from './isObject'
import isOdd from './isOdd'
import isPlainObject from './isPlainObject'
import isRegExp from './isRegExp'
import isSet from './isSet'
import isString from './isString'
import isSymbol from './isSymbol'
import isTextNode from './isTextNode'
import isUndefined from './isUndefined'
import isValue from './isValue'
import isWeakMap from './isWeakMap'
import isWeakSet from './isWeakSet'
import isXML from './isXML'

const Types = {
  is: _type,
  isArray: isArray,
  isArrayLike: isArrayLike,
  isArguments: isArguments,
  isArrayBuffer: isArrayBuffer,
  isInt8Array: isInt8Array,
  isUint8Array: isUint8Array,
  isUint8ClampedArray: isUint8ClampedArray,
  isInt16Array: isInt16Array,
  isUint16Array: isUint16Array,
  isInt32Array: isInt32Array,
  isUint32Array: isUint32Array,
  isFloat32Array: isFloat32Array,
  isFloat64Array: isFloat64Array,
  isBase64: isBase64,
  isBlank: isBlank,
  isBoolean: isBoolean,
  isConstructor: isConstructor,
  isDataView: isDataView,
  isDate: isDate,
  isElement: isElement,
  isEmpty: isEmpty,
  isEmptyObject: isEmptyObject,
  isError: isError,
  isEven: isEven,
  isFloat: isFloat,
  isFunction: isFunction,
  isHash: isPlainObject,
  isHex: isHex,
  isHTMLCollection: isHTMLCollection,
  isInfinite: isInfinite,
  isInteger: isInteger,
  isJSON: isJSON,
  isMap: isMap,
  isNativeFunction: isNativeFunction,
  isNull: isNull,
  isNumber: isNumber,
  isNumeric: isNumeric,
  isObject: isObject,
  isOdd: isOdd,
  isPlainObject: isPlainObject,
  isRegExp: isRegExp,
  isSet: isSet,
  isString: isString,
  isSymbol: isSymbol,
  isTextNode: isTextNode,
  isUndefined: isUndefined,
  isValue: isValue,
  isWeakMap: isWeakMap,
  isWeakSet: isWeakSet,
  isXML: isXML
}

export default Types
