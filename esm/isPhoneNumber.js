import isString from './isString'

/**
 * 检测是否为电话号码
 * ========================================================================
 * @method isPhoneNumber
 * @param {String} str
 * @returns {Boolean}
 *
 * @example
 * isPhoneNumber('(123) 456-7890')
 * isPhoneNumber('(123)456-7890')
 * isPhoneNumber('139-456-7890')
 * isPhoneNumber('139.456.7890')
 * isPhoneNumber('1304567890')
 * isPhoneNumber('+31636363634')
 * isPhoneNumber('075-63546725')
 */
const isPhoneNumber = (str) => {
  const pattern = /^\+?\(?(\d{2,3})?\)?[-\s.]?\d{3}[-\s.]?\d{4,6}$/im
  return isString(str) && pattern.test(str)
}

export default isPhoneNumber
