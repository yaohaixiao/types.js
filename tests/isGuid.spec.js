import isGuid from '../isGuid'

describe('isGuid() 方法：', () => {
  it(`isGuid('#ffffff'), 返回：false`, () => {
    expect(isGuid('#ffffff')).toBe(false)
  })

  it(`isGuid(2), 返回：false`, () => {
    expect(isGuid(2)).toBe(false)
  })

  it(`isGuid('C8021B0-423D-475D-BECF-63ED5ED34563'), 返回：false`, () => {
    expect(isGuid('C8021B0-423D-475D-BECF-63ED5ED34563')).toBe(false)
  })

  describe('带连接符：', () => {
    it(`isGuid('{3C8021B0-423D-475D-BECF-63ED5ED34563}'), 返回：true`, () => {
      expect(isGuid('{3C8021B0-423D-475D-BECF-63ED5ED34563}')).toBe(true)
    })

    it(`isGuid('3C8021B0-423D-475D-BECF-63ED5ED34563'), 返回：true`, () => {
      expect(isGuid('3C8021B0-423D-475D-BECF-63ED5ED34563')).toBe(true)
    })

    it(`isGuid('3c8021b0-423d-475d-becf-63ed5ed34563'), 返回：true`, () => {
      expect(isGuid('3c8021b0-423d-475d-becf-63ed5ed34563')).toBe(true)
    })

    it(`isGuid('{3c8021b0-423d-475d-becf-63ed5ed34563}'), 返回：true`, () => {
      expect(isGuid('{3c8021b0-423d-475d-becf-63ed5ed34563}')).toBe(true)
    })
  })

  describe('不带连接符：', () => {
    it(`isGuid('{3C8021B0423D475DBECF63ED5ED34563}'), 返回：true`, () => {
      expect(isGuid('{3C8021B0423D475DBECF63ED5ED34563}')).toBe(true)
    })

    it(`isGuid('3C8021B0423D475DBECF63ED5ED34563'), 返回：true`, () => {
      expect(isGuid('3C8021B0423D475DBECF63ED5ED34563')).toBe(true)
    })

    it(`isGuid('3c8021b0423d475dbecf63ed5ed34563'), 返回：true`, () => {
      expect(isGuid('3c8021b0423d475dbecf63ed5ed34563')).toBe(true)
    })

    it(`isGuid('{3c8021b0423d475dbecf63ed5ed34563}'), 返回：true`, () => {
      expect(isGuid('{3c8021b0423d475dbecf63ed5ed34563}')).toBe(true)
    })
  })
})
