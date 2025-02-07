export default typeOfString;
/**
 * （私有方法）获取确切的字符串类型
 * ========================================================================
 * @method typeOfString
 * @private
 * @param {String} val - 要检测的字符串
 * @returns {String} 返回字符串类型：blank、chinese、email、empty... 等等
 */
declare function typeOfString(val: string): string;
