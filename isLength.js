import isNumber from './isNumber'
/**
 * 检测测试数据是否为有效 length 值
 * =============================================================
 * @method isLength
 * @param {Number} val
 * @returns {Boolean}
 */
const isLength = (val) => {
  const MAX_SAFE_INTEGER = 9007199254740991

  return isNumber(val) && val > -1 && val % 1 === 0 && val <= MAX_SAFE_INTEGER
}

export default isLength
