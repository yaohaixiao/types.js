# [1.7.0](https://github.com/yaohaixiao/types.js/compare/1.6.0...1.7.0) (2023-07-11)


### Features

* 1. 增加 is() 方法输出类型的数量；2. 将 isXML() 方法调整到 object 子模块； ([a01c1ba](https://github.com/yaohaixiao/types.js/commit/a01c1ba24177572d8b7a5e80538aab1bf969565a))



# [1.6.0](https://github.com/yaohaixiao/types.js/compare/1.5.1...1.6.0) (2023-07-10)

### Features

* 添加 isBuffer() 方法



## [1.5.1](https://github.com/yaohaixiao/types.js/compare/1.5.0...1.5.1) (2023-07-10)


### Bug Fixes

* 修复 isURL() 方法无法判断有授权信息和类似 http://localhost 地址的问题 ([7d3baf7](https://github.com/yaohaixiao/types.js/commit/7d3baf78ae88b004fea7890deac9c57dd6b50e3e))



# [1.5.0](https://github.com/yaohaixiao/types.js/compare/1.4.1...1.5.0) (2023-07-10)


### Features

* 1. 重构 _typeof() 方法，降低代码复杂度，提高可维护新；2. 给 lang 模块添加新方法（isPromise、isEmail、isURL、isHTML 、isGuid、isIPAddress 和 isPhoneNumber 方法 ([417c4aa](https://github.com/yaohaixiao/types.js/commit/417c4aacc41ef5c3b25e7f4856c6f054ac6f54cd))



## [1.4.1](https://github.com/yaohaixiao/types.js/compare/1.4.0...1.4.1) (2023-07-10)


### Bug Fixes

* 修复 isGuid() 无法识别 windows 系统中的无连接符的 guid 格式，并调整 isTime() 方法 ([3fa0959](https://github.com/yaohaixiao/types.js/commit/3fa09592246f1696ce4912ad880ba1555d17bdf7))



# [1.4.0](https://github.com/yaohaixiao/types.js/compare/1.3.0...1.4.0) (2023-07-08)


### Features

* 添加 isTime() 方法



# [1.3.0](https://github.com/yaohaixiao/types.js/compare/1.2.0...1.3.0) (2023-07-06)


### Bug Fixes

* 修复 isConstructor() 方法判断 Promise 构造函数错误的问题 ([af8e419](https://github.com/yaohaixiao/types.js/commit/af8e41983d49a3bd8d67d25f55cb9e90d964a43b))


### Features

* 添加 isPromise() 方法 ([a1bdbc6](https://github.com/yaohaixiao/types.js/commit/a1bdbc63e4587bc8f862c2f7ca09030efa306c47))



# [1.2.0](https://github.com/yaohaixiao/types.js/compare/1.1.0...1.2.0) (2023-07-05)


### Features

* 添加 isChinese() 方法 ([b3cce4e](https://github.com/yaohaixiao/types.js/commit/b3cce4e302e8ea15c4a2e0fa7eea140dd035ee9a))



## [1.0.1](https://github.com/yaohaixiao/types.js/compare/1.0.0...1.0.1) (2023-07-02)


### Bug Fixes

* 修复 isTypedArray() 方法无法正确判断 BigInt64Array 和 BigUint64Array 类型的问题 ([47bc1f3](https://github.com/yaohaixiao/types.js/commit/47bc1f34db9e556b8b23ddd24a352e5fd8b2f57c))



# [1.0.0](https://github.com/yaohaixiao/types.js/compare/0.6.0...1.0.0) (2023-07-02)


### Features

* 发布 1.0.0 版本 ([3b742b5](https://github.com/yaohaixiao/types.js/commit/3b742b52ff1e498f7170fc5095f46907caea9c0b))



# [0.6.0](https://github.com/yaohaixiao/types.js/compare/0.5.0...0.6.0) (2023-07-01)


### Features

* 添加 isBigInt()、isBigInt64Array()、isBigUint64Array()和isFragment() 方法 ([60c2023](https://github.com/yaohaixiao/types.js/commit/60c2023220742330df0a30e527e4ea273dee150e))



# [0.5.0](https://github.com/yaohaixiao/types.js/compare/0.4.0...0.5.0) (2023-06-30)


### Features

* 添加 isEmptyArray() 和 isHTML() 方法，并进一步完善单测 ([f10e27b](https://github.com/yaohaixiao/types.js/commit/f10e27b21ec2b509a684e464f67113fc8e1cede2))



# [0.4.0](https://github.com/yaohaixiao/types.js/compare/0.3.0...0.4.0) (2023-06-30)


### Features

* 添加 isHash() 方法，并添加完善 API 文档 和 README.md ([f889fd9](https://github.com/yaohaixiao/types.js/commit/f889fd9a17db5f850f51ad1090f0c74e2676a893))



# [0.3.0](https://github.com/yaohaixiao/types.js/compare/0.2.2...0.3.0) (2023-06-29)


### Features

* 完成全部代码的单测，完善 API 文档的示例代码 ([e71f32e](https://github.com/yaohaixiao/types.js/commit/e71f32ea7b83639d1fd16001f762047fdd5eb28d))



## [0.2.2](https://github.com/yaohaixiao/types.js/compare/0.2.1...0.2.2) (2023-06-29)


### Bug Fixes

* 修复 isConstructor() 方法中判断 isFunction 的逻辑错误问题 ([f60843e](https://github.com/yaohaixiao/types.js/commit/f60843e62e627462d0ad86248d4e2a8fb87d2f06))



## [0.2.1](https://github.com/yaohaixiao/types.js/compare/0.2.0...0.2.1) (2023-06-28)


### Bug Fixes

* 修复 is() （实际是_type()）方法，判断 arguments 类型数据不正确的问题 ([805635f](https://github.com/yaohaixiao/types.js/commit/805635fb5394a2046446552491ccfa7925a329a9))



# [0.2.0](https://github.com/yaohaixiao/types.js/compare/0.1.0...0.2.0) (2023-06-28)

### 初始化版本

- 初始化 0.2.0 版本；
- 添加完整的文档；
- 添加代码规范检测；
- 添加单元测试；
- 添加代码提交预校验；
