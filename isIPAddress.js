import isString from './isString'

/**
 * 验证是否为（v4 or v6） IP 地址
 * ========================================================================
 * @method isIPAddress
 * @since 0.2.0
 * @category String
 * @param {*} val - 待检测的数据（字符串）
 * @returns {Boolean} 'val' 是 IP 地址，返回 true，否则返回 false
 * @example
 *
 * // IPv4
 * isIPAddress('126.11.15.33') // -> true
 * isIPAddress('255.255.255.255') // -> true
 * isIPAddress('126.11.15.255') // -> false
 * isIPAddress('126.11.15.256') // -> false
 * isIPAddress('126.11.15.a56') // -> false
 * isIPAddress('126.11.15.') // -> false
 *
 * // IPv6
 * isIPAddress('FC00:0000:130F:0000:0000:09C0:876A:130B') // -> true
 * isIPAddress('FC00:0000:130F:0000:0000:09C0:876A:130') // -> true
 * isIPAddress('FC00:0000:130F:0000:0000:09C0:876A') // -> false
 * isIPAddress('FC00:0000:130F:0000:0000:09C0:876A:X130') // -> false
 */
const isIPAddress = (val) => {
  const ipV6 =
    /(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]+|::(ffff(:0{1,4})?:)?((25[0-5]|(2[0-4]|1?\d)?\d)\.){3}(25[0-5]|(2[0-4]|1?\d)?\d)|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1?\d)?\d)\.){3}(25[0-5]|(2[0-4]|1?\d)?\d))/
  const ipV4 =
    /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/
  return isString(val) && (ipV4.test(val) || ipV6.test(val))
}

export default isIPAddress
