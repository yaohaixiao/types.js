import is from '../is'
import isValue from '../isValue'
import isString from '../isString'
import isBase64 from '../isBase64'
import isBlank from '../isBlank'
import isEmail from '../isEmail'
import isEmpty from '../isEmpty'
import isChinese from '../isChinese'
import isGuid from '../isGuid'
import isHex from '../isHex'
import isPhoneNumber from '../isPhoneNumber'
import isTime from '../isTime'
import isIPAddress from '../isIPAddress'
import isURL from '../isURL'
import isJSON from '../isJSON'
import isHTML from '../isHTML'
import isSVG from '../isSVG'
// _getTypes
import _getTypes from '../_getTypes'

const METHODS = {
  is,
  isValue,
  isString,
  isBase64,
  isBlank,
  isEmail,
  isEmpty,
  isChinese,
  isGuid,
  isHex,
  isPhoneNumber,
  isTime,
  isIPAddress,
  isURL,
  isJSON,
  isHTML,
  isSVG
}

const Types = _getTypes(METHODS)

export default Types
