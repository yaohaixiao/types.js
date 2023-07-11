import isBuffer from '../isBuffer'
import is from '../is'

describe('isBuffer() 方法：', () => {
    it(`isBuffer(new Uint8Array(8)), 返回：false`, () => {
        const arr = new Uint8Array(8)

        expect(is(arr)).toBe('uint8array')
        expect(isBuffer(arr)).toBe(false)
    })

    it(`isBuffer(new ArrayBuffer(8)), 返回：false`, () => {
        const buffer = new ArrayBuffer(8)

        expect(is(buffer)).toBe('arraybuffer')
        expect(isBuffer(buffer)).toBe(false)
    })

    it(`isBuffer(Buffer.alloc(15)), 返回：true`, () => {
        const buffer = Buffer.alloc(15)

        expect(is(buffer)).toBe('uint8array')
        expect(isBuffer(buffer)).toBe(true)
    })
})
