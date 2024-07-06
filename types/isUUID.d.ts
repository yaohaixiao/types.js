export default isUUID;
/**
 * 检测测试数据是否为合法的 UUID 字符串
 * ========================================================================
 * @method isUUID
 * @since 2.1.0
 * @see https://stackoverflow.com/questions/7905929/how-to-test-valid-uuid-guid
 * @param {String} str - 要检测的数据
 * @returns {Boolean} 'str' 为合法的 UUID 字符串，返回 true，否则返回 false
 */
declare function isUUID(str: string): boolean;
