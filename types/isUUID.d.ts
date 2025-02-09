export default isUUID;
/**
 * 检测测试数据是否为合法的 UUID 字符串
 * ========================================================================
 * @method isUUID
 * @since 2.1.0
 * @cagetory String
 * @see https://stackoverflow.com/questions/7905929/how-to-test-valid-uuid-guid
 * @param {String} str - 要检测的数据
 * @returns {Boolean} 'str' 为合法的 UUID 字符串，返回 true，否则返回 false
 * @example
 *
 * isUUID('749d0000-0194-1005-2e05-08d61613bf2f') // -> true
 * isUUID('d3aa88e2-c754-41e0-8ba6-4198a34aa0a2') // -> true
 * isUUID('00000000-0000-0000-0000-000000000000') // -> true
 * isUUID('{0e40c5ab-1d9b-ee11-983e-e0be0335d021}') // -> true
 * isUUID('08dbe0f11c8641cf8afe6b2824e8f8f5') // -> true
 *
 * isUUID('') // -> false
 * isUUID('xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3') // -> false
 * isUUID('934859') // -> false
 * isUUID('A987FBC94BED3078CF079141BA07C9F') // -> false
 */
declare function isUUID(str: string): boolean;
