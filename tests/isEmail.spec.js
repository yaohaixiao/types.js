import isEmail from '../isEmail'

describe('isEmail() 方法：', () => {
  it(`isEmail('yaohaixiao@gmail.com'), 返回：true)`, () => {
    expect(isEmail('yaohaixiao@gmail.com')).toBe(true)
  })

  it(`isEmail('yaohaixiao@gmail.c'), 返回：true)`, () => {
    expect(isEmail('yaohaixiao@gmail.c')).toBe(true)
  })

  it(`isEmail('haixiao-yao@gmail.com'), 返回：true)`, () => {
    expect(isEmail('haixiao-yao@gmail.com')).toBe(true)
  })

  it(`isEmail('haixiao_yao@gmail.com'), 返回：true)`, () => {
    expect(isEmail('haixiao_yao@gmail.com')).toBe(true)
  })

  it(`isEmail('haixiao~yao@gmail.com'), 返回：true)`, () => {
    expect(isEmail('haixiao~yao@gmail.com')).toBe(true)
  })

  it(`isEmail('haixiao&yao@gmail.com'), 返回：true)`, () => {
    expect(isEmail('haixiao&yao@gmail.com')).toBe(true)
  })

  it(`isEmail('haixiao+yao@gmail.com'), 返回：true)`, () => {
    expect(isEmail('haixiao+yao@gmail.com')).toBe(true)
  })

  it(`isEmail('haixiao^yao@gmail.com'), 返回：true)`, () => {
    expect(isEmail('haixiao^yao@gmail.com')).toBe(true)
  })

  it(`isEmail('haixiao$yao@gmail.com'), 返回：true)`, () => {
    expect(isEmail('haixiao$yao@gmail.com')).toBe(true)
  })

  it(`isEmail('haixiao%yao@gmail.com'), 返回：true)`, () => {
    expect(isEmail('haixiao%yao@gmail.com')).toBe(true)
  })

  it(`isEmail('haixiao{yao@gmail.com'), 返回：true)`, () => {
    expect(isEmail('haixiao{yao@gmail.com')).toBe(true)
  })

  it(`isEmail('haixiao}yao@gmail.com'), 返回：true)`, () => {
    expect(isEmail('haixiao}yao@gmail.com')).toBe(true)
  })

  it(`isEmail('haixiao|yao@gmail.com'), 返回：true)`, () => {
    expect(isEmail('haixiao|yao@gmail.com')).toBe(true)
  })

  it(`isEmail('haixiao.yao@gmail.com'), 返回：true)`, () => {
    expect(isEmail('haixiao.yao@gmail.com')).toBe(true)
  })

  it(`isEmail('haixiao#yao@gmail.com'), 返回：true)`, () => {
    expect(isEmail('haixiao#yao@gmail.com')).toBe(true)
  })

  it(`isEmail('haixiao/yao@gmail.com'), 返回：true)`, () => {
    expect(isEmail('haixiao/yao@gmail.com')).toBe(true)
  })

  it(`isEmail('haixiao@yao@gmail.com'), 返回：false)`, () => {
    expect(isEmail('haixiao@yao@gmail.com')).toBe(false)
  })

  it(`isEmail('haixiao\yao@gmail.com'), 返回：false)`, () => {
    expect(isEmail('haixiao@yao@gmail.com')).toBe(false)
  })

  it(`isEmail('haixiao[yao@gmail.com'), 返回：false)`, () => {
    expect(isEmail('haixiao@yao@gmail.com')).toBe(false)
  })

  it(`isEmail('yaohaixiao#gmail.com'), 返回：false)`, () => {
    expect(isEmail('yaohaixiao#gmail.com')).toBe(false)
  })
})
