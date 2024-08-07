export default isChinese;
/**
 * 检测字符串是否为中文字符
 * ========================================================================
 * Wiki 介绍中文字符包含以下内容：
 *
 * 1. 中文汉字
 * 2. 象形文字扩展 A-H
 * 3. 兼容象形文字符
 * 4. 兼容表意文字增补字符
 * 5. 中文标点符号
 * 6. 兼容标点符号
 *
 * 其中：
 *
 * 兼容象形文字符：[0xf900, 0xfaff],（https://en.wikipedia.org/wiki/CJK_Compatibility_Ideographs）和
 * 兼容表意文字增补字符：[0x2f800, 0x2fa1f]（https://en.wikipedia.org/wiki/CJK_Compatibility_Ideographs_Supplement）
 *
 * 只是看上去像汉字，因此在 isChinese() 方法中也没有纳入到汉字字符
 * ========================================================================
 * @method isChinese
 * @since 1.2.0
 * @param {String} str - （必须）检测字符串
 * @param {Boolean} [includePunctuation] - （可选）是否包含标点符号：默认值：true
 * @returns {boolean} - ‘val’ 是中文字符，返回 true，否则返回 false;
 */
declare function isChinese(str: string, includePunctuation?: boolean): boolean;
