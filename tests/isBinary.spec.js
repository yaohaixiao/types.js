/**
 * @jest-environment jsdom
 */
import { Blob } from 'buffer'
import isBinary from '../isBinary'

describe('isBinary() 方法：', () => {
  it(`isBinary('Z29vZA=='), 返回：true`, () => {
    expect(isBinary('Z29vZA==')).toBe(false)
  })

  it(`isBinary(isArrayBuffer(8)), 返回：false`, () => {
    const buffer = new ArrayBuffer(8)
    expect(isBinary(buffer)).toBe(false)
  })

  it(`isBinary(new Blob(['abcdefg'])), 返回：false`, () => {
    new Blob(['abcdefg']).text().then((str) => {
      expect(isBinary(str)).toBe(false)
    })
  })

  it(`isBinary(Buffer.alloc(15)), 返回：true`, () => {
    const buffer = Buffer.alloc(15)
    const str = buffer.toString()
    expect(isBinary(buffer)).toBe(true)
    expect(isBinary(str)).toBe(true)
  })
})
