export default isTime;
/**
 * 检测测试数据是否为有效的时间（字符串）
 * ========================================================================
 * @method isTime
 * @since 1.4.0
 * @param {String} str - （必须）待测试的字符串
 * @param {String} [type] - 测试的时间类型：
 *                          time - 时间；
 *                          date - 日期；
 *                          不传 - 时间或者日期皆可
 * @returns {Boolean} 'val' 是有效的时间（字符串），返回 true，否则返回 false
 */
declare function isTime(str: string, type?: string): boolean;
