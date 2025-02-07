export default typeOfNumber;
/**
 * （私有方法）获取确切的数值类型
 * ========================================================================
 * @method typeOfNumber
 * @private
 * @param {Number} val - 要检测的数值
 * @returns {String} - 返回数值类型：integer、float、infinite
 */
declare function typeOfNumber(val: number): string;
