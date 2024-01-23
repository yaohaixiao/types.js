import isUUID from '../isUUID'

describe('isUUID() 方法：', () => {
  it(`isUUID('#ffffff'), 返回：false`, () => {
    expect(isUUID('#ffffff')).toBe(false)
  })

  it(`isUUID(2), 返回：false`, () => {
    expect(isUUID(2)).toBe(false)
  })

  it(`isUUID('C8021B0-423D-475D-BECF-63ED5ED34563'), 返回：false`, () => {
    expect(isUUID('C8021B0-423D-475D-BECF-63ED5ED34563')).toBe(false)
  })

  describe('带连接符：', () => {
    it(`isUUID('{3C8021B0-423D-475D-BECF-63ED5ED34563}'), 返回：true`, () => {
      expect(isUUID('{3C8021B0-423D-475D-BECF-63ED5ED34563}')).toBe(true)
    })

    it(`isUUID('3C8021B0-423D-475D-BECF-63ED5ED34563'), 返回：true`, () => {
      expect(isUUID('3C8021B0-423D-475D-BECF-63ED5ED34563')).toBe(true)
    })

    it(`isUUID('3c8021b0-423d-475d-becf-63ed5ed34563'), 返回：true`, () => {
      expect(isUUID('3c8021b0-423d-475d-becf-63ed5ed34563')).toBe(true)
    })

    it(`isUUID('{3c8021b0-423d-475d-becf-63ed5ed34563}'), 返回：true`, () => {
      expect(isUUID('{3c8021b0-423d-475d-becf-63ed5ed34563}')).toBe(true)
    })

    it(`isUUID('{00000000-0000-0000-0000-000000000000}'), 返回：true`, () => {
      expect(isUUID('{00000000-0000-0000-0000-000000000000}')).toBe(true)
    })
  })

  describe('不带连接符：', () => {
    it(`isUUID('{3C8021B0423D475DBECF63ED5ED34563}'), 返回：true`, () => {
      expect(isUUID('{3C8021B0423D475DBECF63ED5ED34563}')).toBe(true)
    })

    it(`isUUID('3C8021B0423D475DBECF63ED5ED34563'), 返回：true`, () => {
      expect(isUUID('3C8021B0423D475DBECF63ED5ED34563')).toBe(true)
    })

    it(`isUUID('3c8021b0423d475dbecf63ed5ed34563'), 返回：true`, () => {
      expect(isUUID('3c8021b0423d475dbecf63ed5ed34563')).toBe(true)
    })

    it(`isUUID('{3c8021b0423d475dbecf63ed5ed34563}'), 返回：true`, () => {
      expect(isUUID('{3c8021b0423d475dbecf63ed5ed34563}')).toBe(true)
    })
  })
})
