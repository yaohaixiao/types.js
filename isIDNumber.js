import isString from './isString'

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
const isIDNumber = (idNumber) => {
  // 1. 检查是否为字符串类型
  if (!isString(idNumber)) {
    return false
  }

  // 2. 定义 15 位和 18 位身份证号码的正则表达式
  const OLD =
    /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/
  const NEW =
    /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  const FACTOR = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const PARITY = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  const MAX_INDEX = 17
  let numbers = []
  let i = 0
  let sum = 0
  let mod = 0
  let lastChar = ''

  // 3. 检查长度是否为 15 位或 18 位，并进行初步正则匹配
  switch (idNumber.length) {
    case 15:
      return OLD.test(idNumber)
    case 18:
      if (!NEW.test(idNumber)) {
        return false
      }

      // 4. 对于 18 位身份证号码，进行校验位验证
      numbers = idNumber.split('')

      for (; i < MAX_INDEX; i++) {
        sum += parseInt(numbers[i]) * FACTOR[i]
      }

      mod = sum % 11
      lastChar = numbers[MAX_INDEX]

      return PARITY[mod] === lastChar
    default:
      return false
  }
}

export default isIDNumber
