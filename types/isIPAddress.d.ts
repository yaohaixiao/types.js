export default isIPAddress;
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
declare function isIPAddress(val: any): boolean;
