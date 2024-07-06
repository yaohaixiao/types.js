export default isPhoneNumber;
/**
 * 检测是否为电话号码
 * ========================================================================
 * @method isPhoneNumber
 * @category Lang
 * @param {String} str - 要检测的数据
 * @returns {Boolean} 'val' 是 电话号码 格式，返回 true，否则返回 false
 *
 * @example
 * // 移动电话号码
 * isPhoneNumber(13901030304) // -> false
 * isPhoneNumber('1390103030a') // => false
 *
 * isPhoneNumber('+86 13901030304')
 * isPhoneNumber('13901030304')
 * isPhoneNumber('139-010-30304')
 * isPhoneNumber('139.010.30304')
 *
 * // 固定电话号码
 * isPhoneNumber('+86 84923296') // -> true
 * isPhoneNumber('027 84923296') // -> true
 * isPhoneNumber('(027) 84923296') // -> true
 * isPhoneNumber('(027)84923296') // -> true
 * isPhoneNumber('027-84923296') // -> true
 * isPhoneNumber('027.84923296') // -> true
 * isPhoneNumber('027 849-23296') // -> true
 * isPhoneNumber('027-849-23296') // -> true
 */
declare function isPhoneNumber(str: string): boolean;
