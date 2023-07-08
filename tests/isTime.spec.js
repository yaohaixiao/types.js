import isTime from '../isTime'

describe('isTime() 方法：', () => {
  describe('非 String 类型：', () => {
    it(`isTime(123), 返回：false`, () => {
       expect(isTime(123)).toBe(false)
    })

    it(`isTime(false), 返回：false`, () => {
      expect(isTime(false)).toBe(false)
    })

    it(`isTime(null), 返回：false`, () => {
      expect(isTime(null)).toBe(false)
    })

    it(`isTime(undefined), 返回：false`, () => {
      let chinese
      expect(isTime(chinese)).toBe(false)
    })

    it(`isTime(Symbol('symbol')), 返回：false`, () => {
      expect(isTime(Symbol('symbol'))).toBe(false)
    })

    it(`isTime(BigInt(24)), 返回：false`, () => {
      expect(isTime(BigInt(24))).toBe(false)
    })

    it(`isTime([]), 返回：false`, () => {
      expect(isTime({})).toBe(false)
    })

    it(`isTime({}), 返回：false`, () => {
      expect(isTime({})).toBe(false)
    })

    it(`isTime(() => {}), 返回：false`, () => {
      const fn = () => {}
      expect(isTime(fn)).toBe(false)
    })
  })

  describe('String 类型：', () => {
    it(`isTime('time'), 返回：false`, () => {
      expect(isTime('time')).toBe(false)
    })

    describe('时间：', () => {
      describe('12小时格式时间：', () => {
        it(`isTime('1:23', 'time'), 返回：true`, () => {
          expect(isTime('1:23', 'time')).toBe(true)
        })

        it(`isTime('01:23', 'time'), 返回：true`, () => {
          expect(isTime('01:23', 'time')).toBe(true)
        })

        it(`isTime('11:59', 'time'), 返回：true`, () => {
          expect(isTime('11:59', 'time')).toBe(true)
        })

        it(`isTime('11:23 am', 'time'), 返回：true`, () => {
          expect(isTime('11:23 am', 'time')).toBe(true)
        })

        it(`isTime('11:23 AM', 'time'), 返回：true`, () => {
          expect(isTime('11:23 am', 'time')).toBe(true)
        })

        it(`isTime('11:23 pm', 'time'), 返回：true`, () => {
          expect(isTime('11:23 pm', 'time')).toBe(true)
        })

        it(`isTime('06:23 PM', 'time'), 返回：true`, () => {
          expect(isTime('06:23 PM', 'time')).toBe(true)
        })

        it(`isTime('24:01 pm', 'time'), 返回：false`, () => {
          expect(isTime('23:01 pm', 'time')).toBe(false)
        })

        it(`isTime('04:1', 'time'), 返回：false`, () => {
          expect(isTime('04:1', 'time')).toBe(false)
        })
      })

      describe('24小时格式时间：', () => {
        it(`isTime('3:34', 'time'), 返回：false`, () => {
          expect(isTime('3:34', 'time')).toBe(true)
        })

        it(`isTime('03:45', 'time'), 返回：false`, () => {
          expect(isTime('03:45', 'time')).toBe(true)
        })

        it(`isTime('18:16:01', 'time'), 返回：false`, () => {
          expect(isTime('18:16:01', 'time')).toBe(false)
        })

        it(`isTime('23:34:59', 'time'), 返回：false`, () => {
          expect(isTime('23:34:59', 'time')).toBe(false)
        })

        it(`isTime('23:34:5', 'time'), 返回：false`, () => {
          expect(isTime('23:34:5', 'time')).toBe(false)
        })

        it(`isTime('24:00:01', 'time'), 返回：false`, () => {
          expect(isTime('24:00:01', 'time')).toBe(false)
        })
      })
    })

    describe('日期：', () => {
      it(`isTime('2001.01.01', 'date'), 返回：true`, () => {
        expect(isTime('2001.01.01', 'date')).toBe(true)
      })

      it(`isTime('2001/01/01', 'date'), 返回：true`, () => {
        expect(isTime('2001/01/01', 'date')).toBe(true)
      })

      it(`isTime('2001-01-01', 'date'), 返回：true`, () => {
        expect(isTime('2001-01-01', 'date')).toBe(true)
      })

      it(`isTime('2001-01-32', 'date'), 返回：false`, () => {
        expect(isTime('2001-01-32', 'date')).toBe(false)
      })

      it(`isTime('2001-13-01', 'date'), 返回：false`, () => {
        expect(isTime('2001-13-01', 'date')).toBe(false)
      })

      it(`isTime('01.01.2001', 'date'), 返回：true`, () => {
        expect(isTime('01.01.2001', 'date')).toBe(true)
      })

      it(`isTime('01/01/2001', 'date'), 返回：true`, () => {
        expect(isTime('01/01/2001', 'date')).toBe(true)
      })

      it(`isTime('01-01-2001', 'date'), 返回：true`, () => {
        expect(isTime('01-01-2001', 'date')).toBe(true)
      })

      it(`isTime('13-13-2001', 'date'), 返回：false`, () => {
        expect(isTime('13-13-2001', 'date')).toBe(false)
      })

      it(`isTime('32-13-2001', 'date'), 返回：false`, () => {
        expect(isTime('32-13-2001', 'date')).toBe(false)
      })

      it(`isTime('Jul 08 2023', 'date'), 返回：true`, () => {
        expect(isTime('Jul 08 2023', 'date')).toBe(true)
      })

      it(`isTime('Jul 08 2023 11:15:11', 'date'), 返回：true`, () => {
        expect(isTime('Jul 08 2023 11:15:11', 'date')).toBe(true)
      })

      it(`isTime('Jul 32 2023 11:15:34', 'date'), 返回：false`, () => {
        expect(isTime('Jul 32 2023 11:15:34', 'date')).toBe(false)
      })
    })
  })
})
