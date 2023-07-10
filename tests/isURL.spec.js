import isURL from '../isURL'

describe('isURL() 方法：', () => {
  describe('IP 访问：', () => {
    it(`isURL('http://127.0.0.1'), 返回：true`, () => {
      expect(isURL('http://127.0.0.1')).toBe(true)
    })

    it(`isURL('https://127.0.0.'), 返回：false`, () => {
      expect(isURL('https://127.0.0.')).toBe(false)
    })

    it(`isURL('https://127.0.0'), 返回：false`, () => {
      expect(isURL('https://127.0.0')).toBe(false)
    })

    it(`isURL('http://127.0.0.1:8080'), 返回：true`, () => {
      expect(isURL('http://127.0.0.1:8080')).toBe(true)
    })

    it(`isURL('http://127.0.0.1:8080#top'), 返回：true`, () => {
      expect(isURL('http://127.0.0.1:8080#top')).toBe(true)
    })

    it(`isURL('http://127.0.0.1:8080?id=22'), 返回：true`, () => {
      expect(isURL('http://127.0.0.1:8080?id=22')).toBe(true)
    })

    it(`isURL('http://127.0.0.1:8080/console'), 返回：true`, () => {
      expect(isURL('http://127.0.0.1:8080/console')).toBe(true)
    })

    it(`isURL('http://127.0.0.1:8080/workbench/?id=2#projects'), 返回：true`, () => {
      expect(isURL('http://127.0.0.1:8080/workbench/?id=2#projects')).toBe(true)
    })
  })

  describe('域名访问：', () => {
    it(`isURL('http://localhost'), 返回：true`, () => {
      expect(isURL('http://localhost')).toBe(true)
    })

    it(`isURL('ftp://www.yaohaixiao.com'), 返回：false`, () => {
      expect(isURL('ftp://www.yaohaixiao.com')).toBe(false)
    })

    it(`isURL('http://www.yaohaixiao.'), 返回：false`, () => {
      expect(isURL('http://www.yaohaixiao.')).toBe(false)
    })

    it(`isURL('http://www.yaohaixiao.c'), 返回：false`, () => {
      expect(isURL('http://www.yaohaixiao.c')).toBe(false)
    })

    it(`isURL('http://www.yaohaixiao.c1'), 返回：false`, () => {
      expect(isURL('http://www.yaohaixiao.c1')).toBe(false)
    })

    it(`isURL('http://www.yaohaixiao.cn'), 返回：true`, () => {
      expect(isURL('http://www.yaohaixiao.cn')).toBe(true)
    })

    it(`isURL('http://www.yaohaixiao.com'), 返回：true`, () => {
      expect(isURL('http://www.yaohaixiao.com')).toBe(true)
    })

    it(`isURL('http://www.yaohaixiao.com:8081'), 返回：true`, () => {
      expect(isURL('http://www.yaohaixiao.com:8081')).toBe(true)
    })

    it(`isURL('https://www.yaohaixiao.com/'), 返回：true`, () => {
      expect(isURL('https://www.yaohaixiao.com/')).toBe(true)
    })

    it(`isURL('https://www.yaohaixiao.com/blog/'), 返回：true`, () => {
      expect(isURL('https://www.yaohaixiao.com/blog/')).toBe(true)
    })

    it(`isURL('https://www.yaohaixiao.com/blog/?page=2'), 返回：true`, () => {
      expect(isURL('https://www.yaohaixiao.com/blog/?page=2')).toBe(true)
    })

    it(`isURL('https://www.yaohaixiao.com/blog/?page=2#top'), 返回：true`, () => {
      expect(isURL('https://www.yaohaixiao.com/blog/?page=2#top')).toBe(true)
    })

    it(`isURL('https://www.yaohaixiao.com:8090/blog/?page=2#top'), 返回：true`, () => {
      expect(isURL('https://www.yaohaixiao.com:8090/blog/?page=2#top')).toBe(true)
    })
  })
})
