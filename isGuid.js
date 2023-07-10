import isString from './isString'

/**
 * 检测测试数据是否为 Guid 格式字符串
 * ========================================================================
 * @method isGuid
 * @since 1.4.0
 * @category Lang
 * @param {String} str - 待检测数据（字符串）
 * @returns {Boolean} 'val' 是 Guid 格式字符串，返回 true，否则返回 false
 */
const isGuid = (str) => {
  const patternWithHyphens =
    /^{?[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}}?$/gi
  const patternWithoutHyphens =
    /^{?[0-9a-fA-F]{8}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{12}}?$/gi

  let guid

  if (!isString(str)) {
    return false
  }

  guid = str.replace(/^[{}]$/i, '')

  return patternWithHyphens.test(guid) || patternWithoutHyphens.test(guid)
}

export default isGuid
