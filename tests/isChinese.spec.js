import isChinese from '../isChinese'

describe('isChinese() 方法：', () => {
  describe('非字符串：', () => {
    it(`isChinese(null), 返回：false`, () => {
      expect(isChinese(null)).toBe(false)
    })

    it(`isChinese(undefined), 返回：false`, () => {
      let str
      expect(isChinese(str)).toBe(false)
    })

    it(`isChinese([]), 返回：false`, () => {
      expect(isChinese([])).toBe(false)
    })

    it(`isChinese({}), 返回：false`, () => {
      expect(isChinese({})).toBe(false)
    })

    it(`isChinese(Symbol('symbol')), 返回：false`, () => {
      expect(isChinese(Symbol('symbol'))).toBe(false)
    })
  })

  describe('Ascii 字符串：', () => {
    it(`isChinese(1), 返回：false`, () => {
      expect(isChinese(1)).toBe(false)
    })

    it(`isChinese('chinese'), 返回：false`, () => {
      expect(isChinese('chinese')).toBe(false)
    })

    it(`isChinese('+=*/'), 返回：false`, () => {
      expect(isChinese('+=*/')).toBe(false)
    })
  })

  describe('汉字：', () => {
    it(`isChinese('汉字字符：尅靈'), 返回：true`, () => {
      expect(isChinese('中文汉字：尅靈')).toBe(true)
    })

    it(`isChinese('扩展字符：㐥𠁜𪝹𫞺𫡡𭀔𭍓'), 返回：true`, () => {
      expect(isChinese('㐥𠁜𪝹𫞺𫡡𭀔𭍓')).toBe(true)
    })
  })

  describe('标点符号：', () => {
    it(`isChinese('标点符号：。，、；：×·—…（）『』【】《》？！‘’“”～'), 返回：true`, () => {
      expect(isChinese('标点符号：。，、；：×·—…（）『』【】《》？！‘’“”～')).toBe(true)
    })

    it(`isChinese('兼容标点符号：︰︱︲︳︴︵︶︷︸︹︺︻︼︽︾︿﹀﹁﹂﹃﹄﹅﹆﹇﹈﹉﹊﹋﹌﹍﹎﹏'), 返回：true`, () => {
      expect(isChinese('兼容标点符号：︱︲︳︴︵︶︷︸︹︺︻︼︽︾︿﹀﹁﹂﹃﹄﹅﹆﹇﹈﹉﹊﹋﹌﹍﹎﹏')).toBe(true)
    })
  })
})
