import isHTML from 'esm/isHTML'

describe('isHTML() 方法：', () => {
  it('非字符串：', () => {
    expect(isHTML(1)).toBe(false)
    expect(isHTML(null)).toBe(false)
    expect(isHTML([])).toBe(false)
    expect(isHTML({})).toBe(false)
  })

  it('包含 doctype 标签：', () => {
    expect(isHTML('<!doctype html>')).toBe(true)
    expect(isHTML('\n\n<!doctype html><html>')).toBe(true)
  })

  it(`包含：<html>，<body> 或者 <x-*> 标签：`, () => {
    expect(isHTML('<html>')).toBe(true)
    expect(isHTML('<html></html>')).toBe(true)
    expect(isHTML('<html lang="en"></html>')).toBe(true)
    expect(isHTML('<html><body></html>')).toBe(true)
    expect(isHTML('<html><body class="no-js"></html>')).toBe(true)
    expect(isHTML('<x-unicorn>')).toBe(true)
  })

  it(`包含任何合法的 HTML 标签：`, () => {
    expect(isHTML('<p>foo</p>')).toBe(true)
    expect(isHTML('<a href="#">foo</a>')).toBe(true)
  })

  it(`无法匹配 XML 标签：`, () => {
    expect(isHTML('<cake>foo</cake>')).toBe(false)
    expect(isHTML('<any>rocks</any>')).toBe(false)
    expect(isHTML('<htmly>not</htmly>')).toBe(false)
    expect(isHTML('<bodyx>not</bodyx>')).toBe(false)
  })
})
