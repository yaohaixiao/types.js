import isNumber from './isNumber'

/**
 * 检测测试数据是否为质(素)数
 * ========================================================================
 * @method isPrime
 * @since 2.1.0
 * @param {Number} num - 要检测的数据
 * @returns {Boolean} 'num' 是质(素)数，返回 true，否则返回 false
 */
const isPrime = (num) => {
  let boundary
  let i

  if (!isNumber(num)) {
    return false
  }

  boundary = Math.floor(Math.sqrt(num))
  i = 2

  for (; i <= boundary; i += 1) {
    if (num % i === 0) {
      return false
    }
  }

  return num >= 2
}

export default isPrime
