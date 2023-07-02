import isPhoneNumber from '../isPhoneNumber'

describe('isPhoneNumber() 方法：', () => {
  describe('移动电话号码：', () => {
    it(`isPhoneNumber(13901030304), 返回：false`, () => {
      expect(isPhoneNumber(13901030304)).toBe(false)
    })

    it(`isPhoneNumber('1390103030a'), 返回：false`, () => {
      expect(isPhoneNumber('1390103030a')).toBe(false)
    })

    it(`isPhoneNumber('+86 13901030304'), 返回：true`, () => {
      expect(isPhoneNumber('+86 13901030304')).toBe(true)
    })

    it(`isPhoneNumber('13901030304'), 返回：true`, () => {
      expect(isPhoneNumber('13901030304')).toBe(true)
    })

    it(`isPhoneNumber('139.010.30304'), 返回：true`, () => {
      expect(isPhoneNumber('139.010.30304')).toBe(true)
    })

    it(`isPhoneNumber('139-010-30304'), 返回：true`, () => {
      expect(isPhoneNumber('139-010-30304')).toBe(true)
    })
  })

  describe('固定电话号码：', () => {
    it(`isPhoneNumber('+86 84923296'), 返回：true`, () => {
      expect(isPhoneNumber('+86 84923296')).toBe(true)
    })

    it(`isPhoneNumber('027 84923296'), 返回：true`, () => {
      expect(isPhoneNumber('027 84923296')).toBe(true)
    })

    it(`isPhoneNumber('(027) 84923296'), 返回：true`, () => {
      expect(isPhoneNumber('(027) 84923296')).toBe(true)
    })

    it(`isPhoneNumber('(027)84923296'), 返回：true`, () => {
      expect(isPhoneNumber('(027)84923296')).toBe(true)
    })

    it(`isPhoneNumber('027-84923296'), 返回：true`, () => {
      expect(isPhoneNumber('027-84923296')).toBe(true)
    })

    it(`isPhoneNumber('027.84923296'), 返回：true`, () => {
      expect(isPhoneNumber('027.84923296')).toBe(true)
    })

    it(`isPhoneNumber('027 849-23296'), 返回：true`, () => {
      expect(isPhoneNumber('027 849-23296')).toBe(true)
    })

    it(`isPhoneNumber('027-849-23296'), 返回：true`, () => {
      expect(isPhoneNumber('027-849-23296')).toBe(true)
    })
  })
})
