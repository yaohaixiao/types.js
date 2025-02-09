import isNumber from './isNumber'

/**
 * 检测测试数据是否为质(素)数
 * ========================================================================
 * @method isPrime
 * @since 2.1.0
 * @cagetory Number
 * @param {*} val - 要检测的数据
 * @returns {Boolean} 'val' 是质(素)数，返回 true，否则返回 false
 * @example
 *
 * isPrime(3) // -> true
 * isPrime(7) // -> true
 * isPrime(11) // -> true
 *
 * isPrime(0) // -> false
 * isPrime(1) // -> false
 * isPrime(2) // -> false
 * isPrime(9) // -> false
 */
const isPrime = (val) => {
  let boundary
  let i

  if (!isNumber(val)) {
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
