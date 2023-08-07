import isBlank from './isBlank'
import isBase64 from './isBase64'
import isChinese from './isChinese'
import isEmail from './isEmail'
import isEmpty from './isEmpty'
import isGuid from './isGuid'
import isIPAddress from './isIPAddress'
import isHex from './isHex'
import isHTML from './isHTML'
import isSVG from './isSVG'
import isJSON from './isJSON'
import isTime from './isTime'

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
  } else if (isGuid(val)) {
    name = 'guid'
  } else if (isBase64(val)) {
    name = 'base64'
  } else if (isChinese(val)) {
    name = 'chinese'
  } else if (isEmail(val)) {
    name = 'email'
  } else if (isIPAddress(val)) {
    name = 'IP address'
  } else if (isHex(val)) {
    name = 'hex'
  } else if (isHTML(val)) {
    if (isSVG(val)) {
      name = 'svg'
    } else {
      name = 'html'
    }
  } else if (isJSON(val)) {
    name = 'json'
  } else if (isTime(val)) {
    name = 'time'
  }

  return name
}

export default _getExactTypeOfString
