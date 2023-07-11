import _type from './_type'
import isInteger from './isInteger'
import isFloat from './isFloat'
import isInfinite from './isInfinite'
import isBlank from './isBlank'
import isChinese from './isChinese'
import isEmail from './isEmail'
import isEmpty from './isEmpty'
import isGuid from './isGuid'
import isHTML from './isHTML'
import isJSON from './isJSON'
import isPrototype from './isPrototype'
import isTime from './isTime'
import isXML from './isXML'

/**
 * （私有方法）获取确切的数值类型
 * ========================================================================
 * @method _getExactTypeOfNumber
 * @private
 * @param {Number} val - 要检测的数值
 * @returns {String} - 返回数值类型：integer、float、infinite
 */
const _getExactTypeOfNumber = (val) => {
  let name = 'number'

  if (isInteger(val)) {
    name = 'integer'
  } else if (isFloat(val)) {
    name = 'float'
  } else if (isInfinite(val)) {
    name = 'infinite'
  }

  return name
}

/**
 * （私有方法）获取确切的字符串类型
 * ========================================================================
 * @method _getExactTypeOfString
 * @private
 * @param {String} val - 要检测的字符串
 * @returns {String} 返回字符串类型：blank、chinese、email、empty... 等等
 */
const _getExactTypeOfString = (val) => {
  let name = 'string'

  if (isEmpty(val)) {
    name = 'empty'
  } else if (isBlank(val)) {
    name = 'blank'
  } else if (isChinese(val)) {
    name = 'chinese'
  } else if (isEmail(val)) {
    name = 'email'
  } else if (isGuid(val)) {
    name = 'guid'
  } else if (isHTML(val)) {
    name = 'html'
  } else if (isJSON(val)) {
    name = 'json'
  } else if (isTime(val)) {
    name = 'time'
  }

  return name
}

const _getExactTypeOfObject = (val) => {
  let name = 'object'

  if (isXML(val)) {
    name = 'xml'
  } else if (isPrototype(val)) {
    name = 'prototype'
  }

  return name
}

/**
 * 检测数据类型，返回检测数据类型的字符串
 * ========================================================================
 * @method is
 * @category Lang
 * @see _type
 * @param {*} val - 要检测的任意值
 * @returns {String} 返回确切的数据类型名称
 */
const is = (val) => {
  const type = _type(val)
  let name

  switch (type) {
    case 'number':
      name = _getExactTypeOfNumber(val)
      break
    case 'string':
      name = _getExactTypeOfString(val)
      break
    case 'object':
      name = _getExactTypeOfObject(val)
      break
    default:
      name = type
      break
  }

  return name
}

export default is
