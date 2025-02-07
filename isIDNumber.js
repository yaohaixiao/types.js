import isString from './isString'

/**
 * 验证是否为（中国）身份证号码
 * ========================================================================
 * @method isIDNumber
 * @param {String} idNumber
 * @return {Boolean}
 */
const isIDNumber = (idNumber) => {
  // 1. 检查是否为字符串类型
  if (!isString(idNumber)) {
    return false
  }

  // 2. 定义 15 位和 18 位身份证号码的正则表达式
  const OLD_NUMBER = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/
  const NEW_NUMBER = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

  // 3. 检查长度是否为 15 位或 18 位，并进行初步正则匹配
  if (idNumber.length === 15) {
    return OLD_NUMBER.test(idNumber)
  } else if (idNumber.length === 18) {
    if (!NEW_NUMBER.test(idNumber)) {
      return false
    }

    // 4. 对于 18 位身份证号码，进行校验位验证
    const idCardArray = idNumber.split('')
    const factor = [
      7,
      9,
      10,
      5,
      8,
      4,
      2,
      1,
      6,
      3,
      7,
      9,
      10,
      5,
      8,
      4,
      2
    ]
    const parity = [
      '1',
      '0',
      'X',
      '9',
      '8',
      '7',
      '6',
      '5',
      '4',
      '3',
      '2'
    ]
    let sum = 0

    for (let i = 0; i < 17; i++) {
      sum += parseInt(idCardArray[i]) * factor[i]
    }

    const mod = sum % 11
    const lastChar = idCardArray[17].toUpperCase()

    return parity[mod] === lastChar
  }

  return false
}

export default isIDNumber
