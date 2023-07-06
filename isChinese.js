import isString from './isString'

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
 * @param {String} str - （必须）检测字符串
 * @param {Boolean} [includePunctuation] - （可选）是否包含标点符号：默认值：true
 * @returns {boolean}
 */
const isChinese = (str, includePunctuation = true) => {
  // 转换成正则表达式
  const toRegExp = (range) => {
    const pattern = range
      .map((range) => {
        const rangeStart = range[0]
        const rangeEnd = range[1]
        const hexStart = rangeStart.toString(16)
        const hexEnd = rangeEnd.toString(16)

        if (rangeStart === rangeEnd) {
          return `\\u{${hexStart}}`
        }
        return `[\\u{${hexStart}}-\\u{${hexEnd}}]`
      })
      .join('|')

    return new RegExp(`^(?:${pattern})+$`, 'u')
  }
  // 文字
  // https://en.wikipedia.org/wiki/CJK_Unified_Ideographs
  const chineseIdeographs = [
    // 中文汉字
    [0x4e00, 0x9fff],

    // 象形文字扩展 A - H
    [0x3400, 0x4dbf],
    [0x20000, 0x2a6df],
    [0x2a700, 0x2b73f],
    [0x2b740, 0x2b81f],
    [0x2b820, 0x2ceaf],
    [0x2ceb0, 0x2ebef],
    [0x30000, 0x3134f],
    [0x31350, 0x323af]
  ]
  // 标点符号
  const chinesePunctuations = [
    // ，
    [0xff0c, 0xff0c],
    // 。
    [0x3002, 0x3002],
    // ·
    [0x00b7, 0x00b7],
    // ×
    [0x00d7, 0x00d7],
    // —
    [0x2014, 0x2014],
    // ‘
    [0x2018, 0x2018],
    // ’
    [0x2019, 0x2019],
    // “
    [0x201c, 0x201c],
    // ”
    [0x201d, 0x201d],
    // …
    [0x2026, 0x2026],
    // 、
    [0x3001, 0x3001],
    // 《
    [0x300a, 0x300a],
    // 》
    [0x300b, 0x300b],
    // 『
    [0x300e, 0x300e],
    // 』
    [0x300f, 0x300f],
    // 【
    [0x3010, 0x3010],
    // 】
    [0x3011, 0x3011],
    // ！
    [0xff01, 0xff01],
    // （
    [0xff08, 0xff08],
    // ）
    [0xff09, 0xff09],
    // ：
    [0xff1a, 0xff1a],
    // ；
    [0xff1b, 0xff1b],
    // ？
    [0xff1f, 0xff1f],
    // ～
    [0xff5e, 0xff5e],
    // 兼容性标点符号
    // https://en.wikipedia.org/wiki/CJK_Compatibility_Forms
    [0xfe30, 0xfe4f]
  ]
  const asciiChars = /\w+/

  if (!isString(str)) {
    return false
  }

  if (asciiChars.test(str)) {
    return false
  }

  const pattern = includePunctuation
    ? toRegExp(chineseIdeographs.concat(chinesePunctuations))
    : toRegExp(chineseIdeographs)

  return pattern.test(str)
}

export default isChinese
