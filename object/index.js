import is from '../is'
import isValue from '../isValue'
import isArray from '../isArray'
import isArrayLike from '../isArrayLike'
import isArguments from '../isArguments'
import isObject from '../isObject'
import isObjectLike from '../isObjectLike'
import isDOM from '../isDOM'
import isEmptyObject from '../isEmptyObject'
import isHash from '../isHash'
import isPlainObject from '../isPlainObject'
import isPrototype from '../isPrototype'
import isFunction from '../isFunction'
import isConstructor from '../isConstructor'
import isDate from '../isDate'
import isDataView from '../isDataView'
import isError from '../isError'
import isRegExp from '../isRegExp'
import isElement from '../isElement'
import isHTMLCollection from '../isHTMLCollection'
import isFragment from '../isFragment'
import isPromise from '../isPromise'
import isTextNode from '../isTextNode'
import isVNode from '../isVNode'
import isXML from '../isXML'
// _getTypes
import _getTypes from '../_getTypes'

const METHODS = {
  is,
  isValue,
  isArray,
  isArrayLike,
  isArguments,
  isObject,
  isObjectLike,
  isDOM,
  isEmptyObject,
  isHash,
  isPlainObject,
  isPrototype,
  isFunction,
  isConstructor,
  isDate,
  isDataView,
  isError,
  isRegExp,
  isElement,
  isHTMLCollection,
  isFragment,
  isPromise,
  isTextNode,
  isVNode,
  isXML
}

const Types = _getTypes(METHODS)

export default Types
