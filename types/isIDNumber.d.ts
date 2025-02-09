export default isIDNumber;
/**
 * 检测测试数据是否为（中国）身份证号码
 * ========================================================================
 * @method isIDNumber
 * @since 2.6.0
 * @category String
 * @param {*} idNumber - 要检测的号码
 * @return {Boolean} - true - 表示检测数据是合法的神风证号码（格式），false 则表示不是
 * @example
 *
 * // 有效的 15 位身份证号码
 * isIDNumber('110105491231002'); // -> true
 *
 * // 无效的 15 位身份证号码
 * isIDNumber('123456789012345'); // -> false
 *
 * // 有效的 18 位身份证号码（校验码为 X）
 * isIDNumber('11010519491231002X'); // -> true
 *
 * // 无效的 18 位身份证号码（校验码错误）
 * isIDNumber('110105194912310029'); // -> false
 *
 * // 无效的 18 位身份证号码（非法字符 Y）
 * isIDNumber('11010519491231002Y'); // -> false
 *
 * // 无效的 18 位身份证号码
 * isIDNumber('123456789012345678'); // -> false
 *
 * // 长度不符合
 * isIDNumber('11010519491231002'); // -> false
 * isIDNumber('11010519491231002XX'); // -> false
 *
 * // 格式错误
 * isIDNumber('A1010519491231002X'); // -> false
 * isIDNumber('11010519491231002x'); // -> false
 *
 * // 非字符串
 * isIDNumber(110105194912310021); // -> false
 */
declare function isIDNumber(idNumber: any): boolean;
