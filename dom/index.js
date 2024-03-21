import is from '../is'
import isValue from '../isValue'
import isDOM from '../isDOM'
import isElement from '../isElement'
import isHTMLCollection from '../isHTMLCollection'
import isFragment from '../isFragment'
import isTextNode from '../isTextNode'
import isVNode from '../isVNode'

// _getTypes
import _getTypes from '../_getTypes'

const METHODS = {
  is,
  isValue,
  isDOM,
  isElement,
  isHTMLCollection,
  isFragment,
  isTextNode,
  isVNode
}

const Types = _getTypes(METHODS)

export default Types
