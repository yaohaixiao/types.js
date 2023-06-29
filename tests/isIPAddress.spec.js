import isIPAddress from 'esm/isIPAddress'

describe('isIPAddress() 方法：', () => {
  describe('IPv4：', () => {
    it(`isIPAddress('126.11.15.33'), 返回：true`, () => {
      expect(isIPAddress('126.11.15.33')).toBe(true)
    })

    it(`isIPAddress('255.255.255.255'), 返回：true`, () => {
      expect(isIPAddress('255.255.255.255')).toBe(true)
    })

    it(`isIPAddress('126.11.15.255'), 返回：true`, () => {
      expect(isIPAddress('126.11.15.255')).toBe(true)
    })

    it(`isIPAddress('126.11.15.256'), 返回：false`, () => {
      expect(isIPAddress('126.11.15.256')).toBe(false)
    })

    it(`isIPAddress('126.11.15.a56'), 返回：false`, () => {
      expect(isIPAddress('126.11.15.a56')).toBe(false)
    })

    it(`isIPAddress('126.11.15.'), 返回：false`, () => {
      expect(isIPAddress('126.11.15.')).toBe(false)
    })
  })

  describe('IPv6：', () => {
    it(`isIPAddress('FC00:0000:130F:0000:0000:09C0:876A:130B'), 返回：true`, () => {
      expect(isIPAddress('FC00:0000:130F:0000:0000:09C0:876A:130B')).toBe(true)
    })

    it(`isIPAddress('FC00:0000:130F:0000:0000:09C0:876A:130'), 返回：true`, () => {
      expect(isIPAddress('FC00:0000:130F:0000:0000:09C0:876A:130')).toBe(true)
    })

    it(`isIPAddress('FC00:0000:130F:0000:0000:09C0:876A'), 返回：false`, () => {
      expect(isIPAddress('FC00:0000:130F:0000:0000:09C0:876A')).toBe(false)
    })

    it(`isIPAddress('FC00:0000:130F:0000:0000:09C0:876A:X300'), 返回：false`, () => {
      expect(isIPAddress('FC00:0000:130F:0000:0000:09C0:876A:X300')).toBe(false)
    })
  })
})
