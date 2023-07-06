import _type from './_type'
import isObject from './isObject'
import isUndefined from './isUndefined'
import isFunction from './isFunction'
import TYPES from './enum/types'

/**
 *
 * @param {Object} val
 * @returns {boolean}
 */
const isPromise = (val) => {
  if (!isObject(val) || isUndefined(Promise) || !isFunction(Promise)) {
    return false
  }

  return _type(val) === TYPES.PROMISE
}

export default isPromise
