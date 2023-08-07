import isSVG from '../isSVG'
import isHTML from '../isHTML'
import is from '../is'

describe('isSVG() 方法：', () => {
  it('非字符串：', () => {
    expect(isSVG(1)).toBe(false)
    expect(isSVG(null)).toBe(false)
    expect(isSVG([])).toBe(false)
    expect(isSVG({})).toBe(false)
  })

  it('包含 doctype 标签的 HTML：', () => {
    expect(isHTML('<!doctype html>')).toBe(true)
    expect(isSVG('<!doctype html>')).toBe(false)
    expect(isHTML('\n\n<!doctype html><html>')).toBe(true)
    expect(isSVG('<!doctype html>')).toBe(false)
  })

  it(`包含 xml 声明的 SVG 标签：`, () => {
    const svg = '<?xml version="1.0" encoding="UTF-8"?><svg></svg>'
    expect(is(svg)).toBe('svg')
    expect(isSVG(svg)).toBe(true)
  })

  it(`包含 doctype 声明的 SVG 标签：`, () => {
    const svg = '<\!doctype svg><svg></svg>'
    expect(is(svg)).toBe('svg')
    expect(isSVG(svg)).toBe(true)
  })

  it(`仅包含 SVG 标签：`, () => {
    const svg = '<svg class="buttons__icon" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 26 28"><path d="M22 15.5v7.5c0 0.547-0.453 1-1 1h-6v-6h-4v6h-6c-0.547 0-1-0.453-1-1v-7.5c0-0.031 0.016-0.063 0.016-0.094l8.984-7.406 8.984 7.406c0.016 0.031 0.016 0.063 0.016 0.094zM25.484 14.422l-0.969 1.156c-0.078 0.094-0.203 0.156-0.328 0.172h-0.047c-0.125 0-0.234-0.031-0.328-0.109l-10.813-9.016-10.813 9.016c-0.109 0.078-0.234 0.125-0.375 0.109-0.125-0.016-0.25-0.078-0.328-0.172l-0.969-1.156c-0.172-0.203-0.141-0.531 0.063-0.703l11.234-9.359c0.656-0.547 1.719-0.547 2.375 0l3.813 3.187v-3.047c0-0.281 0.219-0.5 0.5-0.5h3c0.281 0 0.5 0.219 0.5 0.5v6.375l3.422 2.844c0.203 0.172 0.234 0.5 0.063 0.703z"></path></svg>'

    expect(is(svg)).toBe('svg')
    expect(isSVG(svg)).toBe(true)
  })
})
