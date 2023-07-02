import isJSON from '../isJSON'

describe('isJSON() 方法：', () => {
  it(`isJSON(''), 返回：false`, () => {
    expect(isJSON('')).toBe(false)
  })

  it(`isJSON(""), 返回：false`, () => {
    expect(isJSON("")).toBe(false)
  })

  it(`isJSON("json"), 返回：true`, () => {
    expect(isJSON('"json"')).toBe(true)
  })

  it(`isJSON(0), 返回：false`, () => {
    expect(isJSON(0)).toBe(false)
  })

  it(`isJSON("0"), 返回：true`, () => {
    expect(isJSON('"0"')).toBe(true)
  })

  it(`isJSON(false), 返回：false`, () => {
    expect(isJSON(false)).toBe(false)
  })

  it(`isJSON("false"), 返回：true`, () => {
    expect(isJSON("false")).toBe(true)
  })

  it(`isJSON(null), 返回：false`, () => {
    expect(isJSON(null)).toBe(false)
  })

  it(`isJSON("null"), 返回：true`, () => {
    expect(isJSON("null")).toBe(true)
  })

  it(`isJSON({ prop: 'JSON' }), 返回：false`, () => {
    expect(isJSON({ prop: 'JSON' })).toBe(false)
  })

  it(`isJSON("{"prop":"JSON"}"), 返回：true`, () => {
    expect(isJSON(`{"prop":"JSON"}`)).toBe(true)
  })

  it(`isJSON([1, 2, 3]), 返回：false`, () => {
    expect(isJSON([1, 2, 3])).toBe(false)
  })

  it(`isJSON("[1, 2, 3]"), 返回：true`, () => {
    expect(isJSON(`[1, 2, 3]`)).toBe(true)
  })
})
