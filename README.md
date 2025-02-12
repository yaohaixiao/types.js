# types.js

[![npm version](https://img.shields.io/npm/v/@yaohaixiao/types.js)](https://www.npmjs.com/package/@yaohaixiao/types.js)
![Gzip size](http://img.badgesize.io/https://cdn.jsdelivr.net/gh/yaohaixiao/types.js/lib/types.js?compression=gzip&label=gzip%20size)
[![prettier code style](https://img.shields.io/badge/code_style-prettier-07b759.svg)](https://prettier.io)
[![Coverage](https://codecov.io/gh/yaohaixiao/types.js/branch/main/graph/badge.svg)](https://codecov.io/gh/yaohaixiao/types.js)
[![npm downloads](https://img.shields.io/npm/dt/@yaohaixiao/types.js)](https://npmcharts.com/compare/@yaohaixiao/types.js?minimal=true)
[![MIT License](https://img.shields.io/github/license/yaohaixiao/types.js.svg)](https://github.com/yaohaixiao/types.js/blob/master/LICENSE)

types.js - A library of tools focused on detecting JavaScript data types.

## 特点

- 原生 JavaScript 编写，无任何依赖；
- 支持 UMD 规范；
- 支持 ES6 模块；
- 支持 TypeScript；
- 支持按需加载；
- 丰富的数据类型检测方法（80+），且调用方面简单；
- 文件体积小(Gzip：4.2KB)，加载速度快；

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://github.com/yaohaixiao/types.js/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://github.com/yaohaixiao/types.js/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://github.com/yaohaixiao/types.js/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://github.com/yaohaixiao/types.js/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](https://github.com/yaohaixiao/types.js/)</br>Opera |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IE11, Edge                                                                                                                                                                                             | last 10 versions                                                                                                                                                                                         | last 10 versions                                                                                                                                                                                     | last 10 versions                                                                                                                                                                                     | last 10 versions                                                                                                                                                                                 |

## Installation

types.js 支持 UMD 规范和 ES6 的模块调用方式，既可以在 Node.js 环境中使用 npm 安装，也可以在浏览器中使用 script 标签引入到页面。

### npm install

```sh
# install from npmjs.com
npm i -S @yaohaixiao/types.js

# install from github.com
npm i -S @yaohaixiao/types.js --registry=https://npm.pkg.github.com
```

### In a browser

在浏览器中调用 types.js，可以选择调用 jsdelivr 提供的 CDN 服务中的文件，也可以使用本地的 types.js 文件。

#### CDN

```html
<script src="https://cdn.jsdelivr.net/gh/yaohaixiao/types.js/lib/types.js"></script>
```

#### Local file

```html
<script src="/path/to/types.js"></script>
```

### Node.js 中调用

```js
// 加载完整模块（包含所有方法）
const Types = require('@yaohaixiao/types.js/lib/types')

Types.is([]) // -> array
```

```js
// 调用特定方法
const isArray = '@yaohaixiao/types.js/lib/isArray'
```

### ES6 模块中调用

```js
// 调用 Types 对象
import Types from '@yaohaixiao/types.js'

Types.is([]) // -> array
Types.isArray([]) // -> true

// 2.0.0 开始也支持这样调用
const types = Types([])

types.is() // -> array
types.isArray() // -> true

// 或者直接
Types('2.0.0 开始也支持这样调用').is() // -> string
Types('2.0.0 开始也支持这样调用').isHTML() // -> false
```

```js
// 调用特定方法
import isArray from '@yaohaixiao/types.js/isArray'

isArray([]) // -> true
```

## [API Documentation](https://yaohaixiao.github.io/types.js/)

types.js 提供了很多实用的数据类型判断的方法，以下是一些常用的 API 示例，完整 API 文档请查阅：[https://yaohaixiao.github.io/types.js/](https://yaohaixiao.github.io/types.js/)。

### [Base](https://yaohaixiao.github.io/types.js/#heading-0)

types.js 提供以下基础的数据类型检测方法。

### [is(val)](https://yaohaixiao.github.io/types.js/#method-is)

is(val) 方法返回检测数据的数据类型字符串：

* 'number' - 数字
  * integer - 整数
  * float - 浮点数
  * infinite - 正负无穷大
* 'string' - 字符串
  * blank - 空格
  * base64 - Base64 编码字符
  * chinese - 中文字符
  * email - 电子邮箱地址
  * empty - 空字符串
  * guid - guid 字符串
  * hex - 十六进制编码字符
  * html - html 字符串
  * svg - svg 字符串
  * IP address - IP 地址
  * ID number - （中国）身份证号码
  * json - json 字符串
  * time - 表示时间的字符串（时间和日期）
* 'boolean' - 布尔值
* 'null' - 空值
* 'undefined' - 未定义
* 'symbol' - 符号
* 'bigint' - 任意大的整数
* 'set' - Set
* 'weakset' - WeakSet
* 'map' - Map
* 'weakmap' - WeakMap
* 'array' - 数组
* 'arraybuffer' - 固定长度的二进制数据缓冲区
* 'int8array' - int8array 数组
* 'uint8array' - uint8array 数组
* 'uint8clampedarray' - uint8clampedarray 数组
* 'int16array' - int16array 数组
* 'uint16array' - uint16array 数组
* 'int32array' - int32array 数组
* 'uint32array' - uint32array 数组
* 'float32array' - float32array 数组
* 'float64array' - float64array 数组
* 'bigint64array' - bigint64array 数组
* 'biguint64array' - biguint64array 数组
* 'object' - 对象
  * prototype - 原型对象（prototype 和 \_\_proto\_\_）
  * vnode - vue 中地 VNode 对象
  * xml - XML DOM 对象
* 'arguments' - （函数的）参数对象
* 'dataview' - DataView 视图
* 'date' - 日期
* 'error' - 错误
* 'function' - 函数
* 'regexp' - 正则表达式对象
* 'element' - HTML 元素节点
* 'collection' - HTML NodeList 对象
* 'text' - HTML 文本节点
* 'fragment' - DocumentFragment 文档碎片

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 is() 方法
// import is from '@yaohaixiao/types.js/is'
import { DOMParser } from 'xmldom'

let Example
let args
const buffer = new ArrayBuffer(8)
const dv = new DataView(buffer)
const XML = new DOMParser().parseFromString(
        '<xml xmlns="a" xmlns:c="./lite">\n' +
        '\t<child>test</child>\n' +
        '\t<child></child>\n' +
        '\t<child/>\n' +
        '</xml>',
        'text/xml'
)

function test(age){
  args = arguments
  return age
}

test(40)

// 基础值类型
Types.is('types.js') // -> string
Types.is(' ') // -> blank
Types.is('Z29vZA==') // -> base64
Types.is('中国梦') // -> chinese
Types.is('type.js@gmail.com') // -> email
Types.is('') // -> empty
Types.is('3C8021B0-423D-475D-BECF-63ED5ED34563') // -> guid
Types.is('3C8021B0423D475DBECF63ED5ED34563') // -> guid
Types.is('#ffffff') // -> hex
Types.is('<h2>中国梦</h2>') // -> html
Types.is('126.11.15.255') // -> IP address
Types.is('110105491231002') // -> ID number
Types.is('11010519491231002X') // -> ID number
Types.is('{"prop":"JSON"}') // -> json
Types.is('11:23 am') // -> time
Types.is('Jul 08 2023') // -> time
Types.is(2023) // -> integer
Types.is(3.0) // -> integer
Types.is(3.01) // -> float
Types.is(Infinity) // -> infinite
Types.is(true) // -> boolean
Types.is(null) // -> null
Types.is(Example) // -> undefined
Types.is(Symbol()) // -> symbol
Types.is(BigInt(42)) // -> bigint

// Set/WeakSet/Map/WeakMap
Types.is(new Set()) // -> set
Types.is(new WeakSet()) // -> weakset
Types.is(new Map()) // -> map
Types.is(new WeakMap()) // -> weakmap

// Object 对象相关
Types.is({}) // -> object
Types.is(new Object()) // -> object
Types.is(Object.prototype) // -> prototype
Types.is(XML) // -> xml
Types.is(Object.create(null)) // -> object
Types.is(new String()) // -> object
Types.is(new Number()) // -> object
Types.is(new Boolean()) // -> object
Types.is(new Error()) // -> error
Types.is(new Date()) // -> data
Types.is(new RegExp('/s/')) // -> regexp
Types.is(/\s+/ig) // -> regexp
Types.is(() => {}) // -> function
Types.is(args) // -> arguments
Types.is(dv) // -> dataview
Types.is(document.querySelector('#list')) // -> element
Types.is(document.querySelectorAll('.item')) // -> coolection
Types.is(document.createTextNode('text')) // -> text
Types.is(document.createDocumentFragment()) // -> fragment

// Array 相关
Types.is([]) // -> array
Types.is(new ArrayBuffer(8)) // -> arraybubber
Types.is(new Int8Array([])) // -> int8array
Types.is(new Int16Array([])) // -> int16array
Types.is(new Int32Array([])) // -> int32array
Types.is(new Uint8Array([])) // -> uint8array
Types.is(new Uint8ClampedArray([])) // -> uint8clampedarray
Types.is(new Uint16Array([])) // -> uint16array
Types.is(new Uint32Array([])) // -> uint32array
Types.is(new Float32Array([])) // -> float32array
Types.is(new Float64Array([])) // -> float64array
Types.is(new BigInt64Array(64)) // -> bigint64array
Types.is(new BigUint64Array(64)) // -> biguint64array
```

### [isFalsy(val)](https://yaohaixiao.github.io/types.js/#method-isFalsy)

isFalsy(val) 方法用来检测测试数据是否为在布尔上下文中被视为 false 的值

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 NaN，返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isFalsy() 方法
// import isFalsy from '@yaohaixiao/types.js/isFalsy'

Types.isFalsy(false) // true
Types.isFalsy(0) // true
Types.isFalsy('') // true
Types.isFalsy(null) // true
Types.isFalsy(undefined) // true
Types.isFalsy(NaN) // true

Types.isFalsy(true) // false
Types.isFalsy(1) // false
Types.isFalsy('hello') // false
Types.isFalsy({}) // false
Types.isFalsy([]) // false
```

### [isNil(val)](https://yaohaixiao.github.io/types.js/#method-isNil)

isNil(val) 方法用来检测测试数据是否为 Null 或者 undefined。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Null 或者 undefined，返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isNil() 方法
// import isNil from '@yaohaixiao/types.js/isNil'

Types.isNil(null) // => true

Types.isNil(void 0) // => true

Types.isNil(undefined) // => true

Types.isNil(NaN) // => false

Types.isNil('') // => false
```

### [isValue(val)](https://yaohaixiao.github.io/types.js/#method-isValue)

isValue(val) 方法用来检测测试数据是否为有效的数据。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是有效的数据返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isValue() 方法
// import isValue from '@yaohaixiao/types.js/isValue'

let projects

// 非有效数据
Types.isValue(projects) // -> false
Types.isValue(NaN) // -> false
Types.isValue(null) // -> false
Types.isValue(Infinity) // -> false
Types.isValue(-Infinity) // -> false

// 有效数据
Types.isValue(0) // -> true
Types.isValue('') // -> true
Types.isValue(false) // -> true
Types.isValue([]) // -> true
Types.isValue({}) // -> true
Types.isValue(/\s+/ig) // -> true
Types.isValue(new Date()) // -> true
Types.isValue(empty) // -> true
Types.isValue(fn) // -> true
```


### [Primitive Values](https://yaohaixiao.github.io/types.js/#heading-5)

types.js 提供以下方法来检测 Primitive Values（基础值类型） 相关的数据类型。

### [isBigInt(val)](https://yaohaixiao.github.io/types.js/#method-isBigInt)

isBigInt(obj) 方法用来检测测试数据是否为 BigInt 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 BigInt 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isBigInt() 方法
// import isBigInt from '@yaohaixiao/types.js/isBigInt'

const MAX_SAFE_INTEGER = 9007199254740991
const bigint = BigInt(MAX_SAFE_INTEGER + 1)

Type.is(bigint) // -> 'bigint'

Types.isBigInt(MAX_SAFE_INTEGER) // -> false
Types.isBigInt(bigint) // -> true
```

### [isBoolean(val)](https://yaohaixiao.github.io/types.js/#method-isBoolean)

isBoolean(obj) 方法用来检测测试数据是否为 Boolean 类型

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Boolean 类型则返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isBoolean() 方法
// import isBoolean from '@yaohaixiao/types.js/isBoolean'

let project

// False
Types.isBoolean(1) // -> false
Types.isBoolean('') // -> false
Types.isBoolean(null) // -> false
Types.isBoolean(NaN) // -> false
Types.isBoolean(project) // -> false

// True
Types.isBoolean(!!0) // -> true
Types.isBoolean(false) // -> true
Types.isBoolean(true) // -> true
Types.isBoolean(Boolean('1')) // -> true
Types.isBoolean(new Boolean('')) // -> false
Types.isBoolean(!!project) // -> true
```

### [isNull(val)](https://yaohaixiao.github.io/types.js/#method-isNull)

isNull(val) 方法用来检测测试数据是否为 null。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 为 null 返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isNull() 方法
// import isNull from '@yaohaixiao/types.js/isNull'

let project

Types.isNull('') // -> false
Types.isNull({}) // -> false
Types.isNull(project) // -> false
Types.isNull(0) // -> false
Types.isNull(false) // -> false
Types.isNull(Object.create(null)) // -> false

Types.isNull(null) // -> true

```

### [isNumber(val)](https://yaohaixiao.github.io/types.js/#method-isNumber)

isNumber(obj) 方法用来检测测试数据是否为 Number 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Number 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isNumber() 方法
// import isNumber from '@yaohaixiao/types.js/isNumber'

Types.isNumber(0) // -> true
Types.isNumber(.4) // -> true
Types.isNumber(3.4E2) // -> true
Types.isNumber(0xffffff) // -> true
Types.isNumber(NaN) // -> true
Types.isNumber(Infinity) // -> true
Types.isNumber(-Infinity) // -> true

Types.isNumber('2') // -> false
Types.isNumber(2 + '1') // -> false
Types.isNumber(new Number()) // -> false
```

### [isString(val)](https://yaohaixiao.github.io/types.js/#method-isString)

isString(val) 方法用来检测测试数据是否为字符串。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是字符串返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isString() 方法
// import isString from '@yaohaixiao/types.js/isString'

const text = document.createTextNode('text')

Types.isString('') // -> true
Types.isString(String(2)) // -> true
Types.isString(2 + '0') // -> true

Types.isString(2) // -> false
Types.isString(new String()) // -> false
Types.isString(text) // -> false
```

### [isSymbol(val)](https://yaohaixiao.github.io/types.js/#method-isSymbol)

isSymbol(val) 方法用来检测测试数据是否为 Symbol 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Symbol 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isSymbol() 方法
// import isSymbol from '@yaohaixiao/types.js/isSymbol'

const sym = Symbol('foo')
const symObj = Object(sym)

Types.is(sym) // -> 'symbol'
Types.isSymbol(sym) // -> true

Types.is(symObj) // -> 'object'
Types.isSymbol(symObj) // -> false
```

### [isUndefined(val)](https://yaohaixiao.github.io/types.js/#method-isUndefined)

isUndefined(val) 方法用来检测测试数据是否 undefined（未定义）。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 undefined（未定义）返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isUndefined() 方法
// import isUndefined from '@yaohaixiao/types.js/isUndefined'

let project

Types.isUndefined(project) // -> true

Types.isUndefined([]) // -> false
Types.isUndefined('') // -> false
Types.isUndefined(0) // -> false
Types.isUndefined(NaN) // -> false
Types.isUndefined({}) // -> false
Types.isUndefined(false) // -> false
```

### [isPrimitive(val)](https://yaohaixiao.github.io/types.js/#method-isPrimitive)

isPrimitive(val) 方法用来检测测试数据是否为原始值类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是原始值类型，返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isPrimitive() 方法
// import isPrimitive from '@yaohaixiao/types.js/isPrimitive'

let num
const MAX_SAFE_INTEGER = 9007199254740991
const bigint = BigInt(MAX_SAFE_INTEGER + 1)

// True
Types.isPrimitive(1) // -> true
Types.isPrimitive('num') // -> true
Types.isPrimitive(false) // -> true
Types.isPrimitive(null) // -> true
Types.isPrimitive(num) // -> true
Types.isPrimitive(Symbol('foo')) // -> true
Types.isPrimitive(bigint) // -> true

// False
Types.isPrimitive([]) // -> false
Types.isPrimitive({}) // -> false
Types.isPrimitive(()=>{}) // -> false
```


### [Keyed Collections](https://yaohaixiao.github.io/types.js/#heading-14)

types.js 提供以下方法来检测 Keyed Collections 相关的数据类型。

### [isMap(val)](https://yaohaixiao.github.io/types.js/#method-isMap)

isMap(val) 方法用来检测测试数据是否为 Map 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Map 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isMap() 方法
// import isMap from '@yaohaixiao/types.js/isMap'

const map = new Map([
    ['name', 'Robert'],
    ['Gender', 'Male']
])

Types.is(map) // -> 'map'
Types.isMap(map) // -> true

Types.isMap(['name', 'Robert']) // -> false
```

### [isSet(val)](https://yaohaixiao.github.io/types.js/#method-isSet)

isSet(val) 方法用来检测测试数据是否为 isSet 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 isSet 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isSet() 方法
// import isSet from '@yaohaixiao/types.js/isSet'

const set = new Set([1, 2, 3, 4])
const arr = [1, 2, 3, 4]

Types.is(set) // -> 'set'
Types.isSet(set) // -> true

Types.is(arr) // -> 'array'
Types.isSet(arr) // -> false
```

### [isWeakMap(val)](https://yaohaixiao.github.io/types.js/#method-isWeakMap)

isWeakMap(val) 方法用来检测测试数据是否为 WeakMap 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 WeakMap 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isWeakMap() 方法
// import isWeakMap from '@yaohaixiao/types.js/isWeakMap'

const map = new Map([
    ['name', 'Robert'],
    ['Gender', 'Male']
])

const weakmap = new WeakMap()

weakmap.set({}, 37)

Types.is(weakmap) // -> 'weakmap'
Types.isWeakMap(weakmap) // -> true

Types.is(map) // -> 'map'
Types.isWeakMap(map) // -> false
```


### [isWeakSet(val)](https://yaohaixiao.github.io/types.js/#method-isWeakSet)

isWeakSet(val) 方法用来检测测试数据是否为 WeakSet 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 WeakSet 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isWeakSet() 方法
// import isWeakSet from '@yaohaixiao/types.js/isWeakSet'

const set = new Set([1, 2, 3, 4])
const weakset = new WeakSet()

weakset.add({name: 'Robert'})

Types.is(set) // -> 'set'
Types.isSet(set) // -> true
Types.isWeakSet(set) // -> false

Types.is(weakset) // -> 'weakset'
Types.isSet(weakset) // -> false
Types.isWeakSet(weakset) // -> true
```

### [Array](https://yaohaixiao.github.io/types.js/#heading-19)

types.js 提供以下方法来检测 Array 相关的数据类型。

### [isArray(val)](https://yaohaixiao.github.io/types.js/#method-isArray)

isArray(val) 方法用来检测测试数据的数据类型是否为 Array （数组）类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Array 类型返回 true，否则返回 false

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isArray() 方法
// import isArray from '@yaohaixiao/types.js/isArray'

const LooksLike = { '0':1, '1':2, length: 2 }
let args

function sum (a, b){
  args = arguments
  return a + b
}

// True
Types.isArray([]) // -> true
Types.isArray(new Array()) // -> true
Types.isArray('type.js'.split('')) // -> true

// False
// 虽然  arguments 对象看起来也像数组，但是它也不是数组
Types.isArray(args) // -> false
// 虽然 HTMLNodeList 的看起来像数组，但它并不是数组
Types.isArray(document.getElementsByTagName('li')) // -> false
Types.isArray(LooksLike) // -> false
Types.isArray(new Int8Array()) // -> false
```

### [isArrayLike(val)](https://yaohaixiao.github.io/types.js/#method-isArrayLike)

isArrayLike(val) 方法用来检测测试数据的数据类型是否为类似数组（array、arguments 对象或者 HTMLNodeList 对象）类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 array、arguments 或者 HTMLNodeList 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isArrayLike() 方法
// import isArrayLike from '@yaohaixiao/types.js/isArrayLike'

let args

function sum(a, b){
  args = arguments // -> true
  return a + b
}

sum(5, 6)

Types.isArrayLike([1, 2, 3, 4, 5]) // -> true

// arguments 对象是类似数组类型的数据
Types.isArrayLike(args) // -> true

// HTMLNodeList 是类似数组类型的数据
Types.isArrayLike(document.getElementsByTagName('li')) // -> true

Types.isArrayLike({ '0': 1, '1': 2, length: 2 }) // -> false
Types.isArrayLike( new Int8Array([]) ) // -> false
```

### [isArrayLikeObject(val)](https://yaohaixiao.github.io/types.js/#method-isArrayLikeObject)

isArrayLikeObject(val) 方法用来检测测试数据是否为 ArrayLike 的对象数据。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 ArrayLike 的对象数据，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isArrayLikeObject() 方法
// import isArrayLikeObject from '@yaohaixiao/types.js/isArrayLikeObject'

const $items = document.querySelectorAll('.item')
const obj = { '0': 1, '1': 2, length: 2 }
let args
function getAge(age) {
  args = arguments
  return age + 18
}

getAge(30)

Types.isArrayLikeObject([]) // -> true

Types.is($items) // -> 'collection'
Types.isArrayLikeObject($items) // -> true

Types.isArrayLikeObject(args) // -> true

Types.isArrayLikeObject(obj) // -> false
Types.isArrayLikeObject({}) // -> false
```

### [isEmptyArray(val)](https://yaohaixiao.github.io/types.js/#method-isEmptyArray)

isEmptyArray(val) 方法用来检测测试数据是否为空字符串。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据为空字数组，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isEmptyArray() 方法
// import isEmptyArray from '@yaohaixiao/types.js/isEmptyArray'

Types.isEmptyArray([]) // -> true
Types.isEmptyArray(['']) // -> true
Types.isEmptyArray(new Array()) // -> true

Types.isEmptyArray(new Array(8)) // -> false
```


### [Typed Arrays](https://yaohaixiao.github.io/types.js/#heading-24)

types.js 提供以下方法来检测 Typed Arrays 相关的数据类型。

### [isArrayBuffer(val)](https://yaohaixiao.github.io/types.js/#method-isArrayBuffer)

isArrayBuffer(val) 方法用来检测测试数据是否为 ArrayBuffer 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 ArrayBuffer 类型返回 true，否则返回 false

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isArrayBuffer() 方法
// import isArrayBuffer from '@yaohaixiao/types.js/isArrayBuffer'

Types.isArrayBuffer([]) // -> false
Types.isArrayBuffer(new ArrayBuffer(8)) // -> true
```

### [isBigInt64Array(val)](https://yaohaixiao.github.io/types.js/#method-isBigInt64Array)

isBigInt64Array(val) 方法用来检测测试数据是否为 BigInt64Array 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 BigInt64Array 类型返回 true，否则返回 false

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isBigInt64Array() 方法
// import isBigInt64Array from '@yaohaixiao/types.js/isBigInt64Array'

const arr = [9007199254740992]
cong bigint64 = new BigInt64Array(42)

Type.is(bigint) // -> 'bigint64array'

Types.isBigInt64Array(arr) // -> false
Types.isBigInt64Array(bigint64) // -> true
```

### [isBigUint64Array(val)](https://yaohaixiao.github.io/types.js/#method-isBigUint64Array)

isBigUint64Array(val) 方法用来检测测试数据是否为 BigUint64Array 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 BigUint64Array 类型返回 true，否则返回 false

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isBigUint64Array() 方法
// import isBigUint64Array from '@yaohaixiao/types.js/isBigUint64Array'

const arr = [9007199254740992]
cong bigint64 = new BigInt64Array(42)

Type.is(bigint) // -> 'bigint64array'

Types.isBigUint64Array(arr) // -> false
Types.isBigUint64Array(bigint64) // -> true
```

### [isDataView(val)](https://yaohaixiao.github.io/types.js/#method-isDataView)

isDataView(val) 方法用来检测测试数据是否为 DataView 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 DataView 类型，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isDataView() 方法
// import isDataView from '@yaohaixiao/types.js/isDataView'

const buffer = new ArrayBuffer(8)
const dv = new DataView(buffer)

Types.isDataView(buffer) // -> false
Types.isDataView(dv) // -> true
```

### [isFloat32Array(val)](https://yaohaixiao.github.io/types.js/#method-isFloat32Array)

isFloat32Array(val) 方法用来检测测试数据是否为 Float32Array 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 Float32Array 类型，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isFloat32Array() 方法
// import isFloat32Array from '@yaohaixiao/types.js/isFloat32Array'

const numbers = [ 2, 4 ]
let args

function test(a){
  args = arguments
  return a === 'test'
}

test()

Types.isFloat32Array(numbers) // -> false
Types.isFloat32Array(new Array(32)) // -> false
Types.isFloat32Array(args) // -> false
Types.isFloat32Array(new Float32Array()) // -> true
```

### [isFloat64Array(val)](https://yaohaixiao.github.io/types.js/#method-isFloat64Array)

isFloat64Array(val) 方法用来检测测试数据是否为 Float64Array 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 Float64Array 类型，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isFloat64Array() 方法
// import isFloat64Array from '@yaohaixiao/types.js/isFloat64Array'

const numbers = [ 2, 4 ]
let args

function test(a){
  args = arguments
  return a === 'test'
}

test()

Types.isFloat64Array(numbers) // -> false
Types.isFloat64Array(new Array(32)) // -> false
Types.isFloat64Array(args) // -> false
Types.isFloat64Array(new Float64Array()) // -> true
```

### [isInt8Array(val)](https://yaohaixiao.github.io/types.js/#method-isInt8Array)

isInt8Array(val) 方法用来检测测试数据是否为 Int8Array 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 Int8Array 类型，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isInt8Array() 方法
// import isInt8Array from '@yaohaixiao/types.js/isInt8Array'

Types.isInt8Array([]) // -> false
Types.isInt8Array(new Array(8)) // -> false
Types.isInt8Array(new Int8Array([])) // -> true
```

### [isInt16Array(val)](https://yaohaixiao.github.io/types.js/#method-isInt16Array)

isInt16Array(val) 方法用来检测测试数据是否为 Int16Array 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 Int16Array 类型，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isInt16Array() 方法
// import isInt16Array from '@yaohaixiao/types.js/isInt16Array'

const numbers = [ 2, 4 ]
let args

function test(a){
  args = arguments
  return a === 'test'
}

test()

Types.isInt16Array(numbers) // -> false
Types.isInt16Array(new Array(16)) // -> false
Types.isInt16Array(args) // -> false
Types.isInt16Array(new Int16Array()) // -> true
```

### [isInt32Array(val)](https://yaohaixiao.github.io/types.js/#method-isInt32Array)

isInt32Array(val) 方法用来检测测试数据是否为 Int32Array 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 Int32Array 类型，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isInt32Array() 方法
// import isInt32Array from '@yaohaixiao/types.js/isInt32Array'

const numbers = [ 2, 4 ]
let args

function test(a){
  args = arguments
  return a === 'test'
}

test()

Types.isInt32Array(numbers) // -> false
Types.isInt32Array(new Array(32)) // -> false
Types.isInt32Array(args) // -> false
Types.isInt32Array(new Int32Array()) // -> true
```

### [isUint8Array(val)](https://yaohaixiao.github.io/types.js/#method-isUint8Array)

isUint8Array(val) 方法用来检测测试数据是否为 Uint8Array 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 Uint8Array 类型，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isUint8Array() 方法
// import isUint8Array from '@yaohaixiao/types.js/isUint8Array'

const numbers = [ 2, 4 ]
let args

function test(a){
  args = arguments
  return a === 'test'
}

test()

Types.isUint8Array(numbers) // -> false
Types.isUint8Array(new Array(32)) // -> false
Types.isUint8Array(args) // -> false
Types.isUint8Array(new Uint8Array()) // -> true
```

### [isUint8ClampedArray(val)](https://yaohaixiao.github.io/types.js/#method-isUint8ClampedArray)

isUint8ClampedArray(val) 方法用来检测测试数据是否为 Uint8ClampedArray 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 Uint8ClampedArray 类型，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isUint8ClampedArray() 方法
// import isUint8ClampedArray from '@yaohaixiao/types.js/isUint8ClampedArray'

const numbers = [ 2, 4 ]
let args

function test(a){
  args = arguments
  return a === 'test'
}

test()

Types.isUint8ClampedArray(numbers) // -> false
Types.isUint8ClampedArray(new Array(32)) // -> false
Types.isUint8ClampedArray(args) // -> false
Types.isUint8ClampedArray(new Uint8ClampedArray()) // -> true
```

### [isUint16Array(val)](https://yaohaixiao.github.io/types.js/#method-isUint16Array)

isUint16Array(val) 方法用来检测测试数据是否为 Uint16Array 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 Uint16Array 类型，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isUint16Array() 方法
// import isUint16Array from '@yaohaixiao/types.js/isUint16Array'

const numbers = [ 2, 4 ]
let args

function test(a){
  args = arguments
  return a === 'test'
}

test()

Types.isUint16Array(numbers) // -> false
Types.isUint16Array(new Array(32)) // -> false
Types.isUint16Array(args) // -> false
Types.isUint16Array(new Uint16Array()) // -> true
```

### [isUint32Array(val)](https://yaohaixiao.github.io/types.js/#method-isUint32Array)

isUint32Array(val) 方法用来检测测试数据是否为 Uint32Array 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 Uint32Array 类型，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isUint32Array() 方法
// import isUint32Array from '@yaohaixiao/types.js/isUint32Array'

const numbers = [ 2, 4 ]
let args

function test(a){
  args = arguments
  return a === 'test'
}

test()

Types.isUint32Array(numbers) // -> false
Types.isUint32Array(new Array(32)) // -> false
Types.isUint32Array(args) // -> false
Types.isUint32Array(new Uint32Array()) // -> true
```

### [isTypedArray(val)](https://yaohaixiao.github.io/types.js/#method-isTypedArray)

isTypedArray(val) 方法用来检测测试数据是否为 TypedArray 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 TypedArray 类型，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isTypedArray() 方法
// import isTypedArray from '@yaohaixiao/types.js/isTypedArray'

const numbers = [ 2, 4 ]
let args

function test(str) {
  args = arguments
  return str
}

test('str')

Types.isTypedArray( args ) // -> false
Types.isTypedArray( numbers ) // -> false
Types.isTypedArray( new Array() ) // -> false

Types.isTypedArray(new Int8Array([])) // -> true
Types.isTypedArray(new Int16Array([])) // -> true
Types.isTypedArray(new Int32Array([])) // -> true

Types.isTypedArray(new Uint8ClampedArray([])) // -> true
Types.isTypedArray(new Uint8Array([])) // -> true
Types.isTypedArray(new Uint16Array([])) // -> true
Types.isTypedArray(new Uint32Array([])) // -> true

Types.isTypedArray(new Float32Array([])) // -> true
Types.isTypedArray(new Float64Array([])) // -> true

Types.isTypedArray(new BigInt64Array(42)) // -> true
Types.isTypedArray(new BigUint64Array(42)) // -> true
```


### [Object](https://yaohaixiao.github.io/types.js/#heading-39)

types.js 提供以下方法来检测 Object 相关的数据类型。

### [isArguments(val)](https://yaohaixiao.github.io/types.js/#method-isArguments)

isArguments(val) 方法用来检测测试数据是否为 arguments 对象。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 arguments 对象返回 true，否则返回 false

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isArguments() 方法
// import isArguments from '@yaohaixiao/types.js/isArguments'

const argsLike = { '0': 3, '1': 4, length: 2 }
const $items = document.querySelectorAll('.item')
let args

function sum(a, b){
  args = arguments

  return a + b
}

sum(3, 5)

Types.isArguments(argsLike) // -> false
Types.isArguments([]) // -> false
Types.isArguments(items) // -> false

Types.is(args) // -> 'arguments'
Types.isArguments(args) // -> true

```

### [isBinary(val)](https://yaohaixiao.github.io/types.js/#method-isBinary)

isBinary(val) 方法用来检测测试数据是二进制（字符串）数据。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是二进制（字符串）数据，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isUint16Array() 方法
// import isBinary from '@yaohaixiao/types.js/isBinary'

const buffer = Buffer.alloc(15)

Types.isBinary('Z29vZA==') // -> false
Types.isBinary(isArrayBuffer(8) // -> false

Types.is(buffer) // -> 'uint8array'
isBinary(buffer) // -> true
isBinary(buffer.toString()) // -> true
```

### [isBuffer(val)](https://yaohaixiao.github.io/types.js/#method-isBuffer)

isBuffer(val) 方法用来检测测试数据是否为 Buffer 类型（运行环境：Node.js）。

注意：Node.js 中实现的 Buffer 对象，实际的数据格式是：Uint8Array 类型的数组。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 Buffer 类型，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isBuffer() 方法
// import isBuffer from '@yaohaixiao/types.js/isBuffer'

const buffer = Buffer.alloc(15)

Types.isBuffer(new ArrayBuffer(8)) // -> false
Types.isBuffer(new Uint8Array(2)) // -> false

Types.is(buffer) => 'uint8array'
Types.isBuffer(buffer) // -> true
```

### [isDate(val)](https://yaohaixiao.github.io/types.js/#method-isDate)

isDate(val) 方法用来检测测试数据是否为 Date 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 Date 类型，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isDate() 方法
// import isDate from '@yaohaixiao/types.js/isDate'

const time = new Date()

Types.isDate(time) // -> true
Types.isDate('2017-07-06') // -> false
Types.isDate(time.getFullYear()) // -> false
```

### [isEmptyArguments(val)](https://yaohaixiao.github.io/types.js/#method-isEmptyArguments)

isEmptyArguments(val) 方法用来检测测试 arguments 对象长度为 0。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测 arguments 对象长度为 0，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isEmptyArguments() 方法
// import isEmptyArguments from '@yaohaixiao/types.js/isEmptyArguments'

let args
const fn = function () {arg = arguments}

fn()

Types.isEmptyArguments(args) // -> true

fn(1)

Types.isEmptyArguments(args) // -> false
```

### [isEmptyObject(val)](https://yaohaixiao.github.io/types.js/#method-isEmptyObject)

isEmptyObject(val) 方法用来检测测试数据是否为空（单体）对象。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是空对象返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isEmptyObject() 方法
// import isEmptyObject from '@yaohaixiao/types.js/isEmptyObject'

function Person(name,age){
  this.name = name
  this.age = age
}

Types.isEmptyObject({}) // -> true
Types.isEmptyObject([]) // true
Types.isEmptyObject(Person) // true
Types.isEmptyObject(new Object()) // true
Types.isEmptyObject(new Boolean()) // true
Types.isEmptyObject(new Array()) // true
Types.isEmptyObject(new Date('2017-12-11')) // true
Types.isEmptyObject(new RegExp('\s+','ig')) // true
Types.isEmptyObject(new String()) // true

Types.isEmptyObject(new Function()) // false
Types.isEmptyObject(['']) // false
Types.isEmptyObject(null) // false
Types.isEmptyObject({name:'type.js'}) // -> false
Types.isEmptyObject(new Person('yaohaixiao',30)) // false
```

### [isError(val)](https://yaohaixiao.github.io/types.js/#method-isError)

isError(val) 方法用来检测测试数据是否为 Error 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Error 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isError() 方法
// import isError from '@yaohaixiao/types.js/isError'

const error = function Error(){}

Types.isError(new error()) // -> false
Types.isError(new Error()) // -> true
```

### [isHash(val)](https://yaohaixiao.github.io/types.js/#method-isHash)

isHash(val) 方法用来检测测试数据是普通对象（它是方法 [isPlainObject](https://yaohaixiao.github.io/types.js/#isPlainObject) 的别名）。

#### Since

0.4.0

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是普通对象返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isHash() 方法
// import isHash from '@yaohaixiao/types.js/isHash'

let udf

// 基础类型
Types.isHash(2) // -> false
Types.isHash('str') // -> false
Types.isHash(false) // -> false
Types.isHash(null) // -> false
Types.isHash(udf) // -> false

// 引用类型
Types.isHash(new Function()) // -> false
Types.isHash(function(){}) // -> false
Types.isHash(() => {}) // -> false
Types.isHash(class{}) // -> false

Types.isHash(new class{}) // -> true
Types.isHash({}) // -> true
Types.isHash(Object.create(null)) // -> true
Types.isHash(new Object()) // -> true
Types.isHash([]) // -> true
Types.isHash(/s+/ig) // -> true
Types.isHash(new String()) // -> true
Types.isHash(new Number()) // -> true
Types.isHash(new Boolean()) // -> true
Types.isHash(new Array()) // -> true
Types.isHash(new Date()) // -> true
```

### [isObject(val)](https://yaohaixiao.github.io/types.js/#method-isObject)

isObject(val) 方法用来检测测试数据是否为对象。使用 isObject() 方法测试单体对象和函数都返回值都是 true。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 为对象返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isObject() 方法
// import isObject from '@yaohaixiao/types.js/isObject'

const $list = document.getElementById('list')

// True
Types.isObject({}) // => true
Types.isObject(Object) // => true
Types.isObject(new Object()) // => true
Types.isObject(Object.create(null)) // => true
Types.isObject([]) // => true
Types.isObject(() => {}) // => true
Types.isObject(class {}) // => true
Types.isObject($list) // => true

// False
Types.isObject('null') // => false
Types.isObject(1) // => false
Types.isObject(false) // => false
Types.isObject(Symbol('ok')) // => false

// 针对 null，type.js 认为不是一个有效对象
// 以避免将 null 作为普通对象操作导致的错误
Types.isObject(null) // => false
```

### [isObjectLike(val)](https://yaohaixiao.github.io/types.js/#method-isObjectLike)

isObjectLike(val) 方法用来检测测试数据是否为类似 Object 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是类似 Object 类型，false 则表示不是

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isObjectLike() 方法
// import isObjectLike from '@yaohaixiao/types.js/isObjectLike'

// True
Types.isObjectLike(function empty(){}) // -> true
Types.isObjectLike({}) // -> true
Types.isObjectLike(Object.create(null)) // -> true
Types.isObjectLike(Object.create({})) // -> true
Types.isObjectLike(new Function()) // -> true

// False
Types.isObjectLike([]) // -> false
Types.isObjectLike(null) // -> false
Types.isObjectLike(document.getElementById('wrap')) // -> false
```

### [isPlainObject(val)](https://yaohaixiao.github.io/types.js/#method-isPlainObject)

isPlainObject(val) 方法用来检测测试数据是否为普通对象。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是普通对象返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isPlainObject() 方法
// import isPlainObject from '@yaohaixiao/types.js/isPlainObject'

let udf

// 基础类型
Types.isPlainObject(2) // -> false
Types.isPlainObject('str') // -> false
Types.isPlainObject(false) // -> false
Types.isPlainObject(null) // -> false
Types.isPlainObject(udf) // -> false

// 引用类型
Types.isPlainObject(new Function()) // -> false
Types.isPlainObject(function(){}) // -> false
Types.isPlainObject(() => {}) // -> false
Types.isPlainObject(class{}) // -> false

Types.isPlainObject(new class{}) // -> true
Types.isPlainObject({}) // -> true
Types.isPlainObject(Object.create(null)) // -> true
Types.isPlainObject(new Object()) // -> true
Types.isPlainObject([]) // -> true
Types.isPlainObject(/s+/ig) // -> true
Types.isPlainObject(new String()) // -> true
Types.isPlainObject(new Number()) // -> true
Types.isPlainObject(new Boolean()) // -> true
Types.isPlainObject(new Array()) // -> true
Types.isPlainObject(new Date()) // -> true
```

### [isPromise(val)](https://yaohaixiao.github.io/types.js/#method-isPromise)

isPromise(val) 方法用来检测测试数据是否为 Promise 对象。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 Promise 对象，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isPromise() 方法
// import isPromise from '@yaohaixiao/types.js/isPromise'

const resolve = Promise.resolve
const reject = Promise.reject
const request = new Promise((resolve, reject) => {})
let val

// 非对象参数
Types.isPromise(null) // => false
Types.isPromise(val) // => false
Types.isPromise('') // => false
Types.isPromise(12) // => false
Types.isPromise(false) // => false
Types.isPromise(BigInt(12)) // => false
Types.isPromise(Symbol('prop')) // => false


// 对象参数
Types.isPromise([]]) // => false
Types.isPromise({}) // => false
Types.isPromise(class {}) // => false
Types.isPromise(() => {}) // => false

Types.isPromise(request) // => true
Types.isPromise(Promise.all([resolve, resolve]) // => true
Types.isPromise(Promise.any([resolve, reject]) // => true
Types.isPromise(resolve) // => true
```

### [isPrototype(val)](https://yaohaixiao.github.io/types.js/#method-isPrototype)

isPrototype(val) 方法用来检测测试数据是否为构造函数。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 Prototype 对象，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isPrototype() 方法
// import isPrototype from '@yaohaixiao/types.js/isPrototype'

const Yao= {
  age: 40,
  career: 'programmer'
}

const Programmer = function(name, age) {
  this.name = name
  this.age = age
  this.isDead = false

  return this
}

Programmer.prototype.career = 'programmer'
Programmer.prototype.getWorkDone = function() {
  this.isDead = true
  return this
}

Types.isPrototype(null) // => false

Types.isPrototype(Object) // => false
Types.isPrototype(Object.prototype) // => true

Types.isPrototype(Programmer) // => false
Types.isPrototype(Yao.__proto__) // => true
```

### [isRegExp(val)](https://yaohaixiao.github.io/types.js/#method-isRegExp)

isRegExp(val) 方法用来检测测试数据是否为正则表达式。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是正则表达式返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isRegExp() 方法
// import isRegExp from '@yaohaixiao/types.js/isRegExp'

const patternOne = new RegExp('\\s+','ig')
const patternTwo = /\s+/ig
const patternStr = '/\\s+/ig'

Types.is(patternOne) // -> 'regexp'
Types.isRegExp(patternOne) // -> true

Types.is(patternTwo) // -> 'regexp'
Types.isRegExp(patternTwo) // -> true

Types.is(patternStr) // -> 'string'
Types.isRegExp(patternStr) // -> false
```

### [isStream(val)](https://yaohaixiao.github.io/types.js/#method-isStream)

isStream(val) 方法用来检测测试数据是否为 Stream 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

##### options

Type: `Object`
Default: `{}`

这是一个解构赋值的参数。它是一个对象，默认值为空对象 {}。 对象中有一个属性 checkOpen，其默认值为 true。checkOpen 用于控制是否检查流的打开状态（即可读或可写状态）。

#### Returns

Type: `Boolean`

'val' 是 Stream 类型，返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isStream() 方法
// import isStream from '@yaohaixiao/types.js/isStream'

// 测试流对象
const validStream = {
  writable: true,
  pipe: () => {}
}

Types.isStream(validStream) // -> true

// 测试非流对象
const nonStream = {
  notAStreamProperty: 'value'
}

Types.isStream(nonStream) // -> false

// 测试 null
Types.isStream(null) // -> false

// 测试 checkOpen 为 false 的情况
const obj = {
  pipe: () => {}
}

Types.isStream(obj, { checkOpen: false }) // -> true
```

### [isXML(val)](https://yaohaixiao.github.io/types.js/#method-isXML)

isXML(val) 方法返回检测数据的是否为 XML 格式数据。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 为 XML 返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isXML() 方法
// import isXML from '@yaohaixiao/types.js/isXML'

const jsdom = require("jsdom")
const { JSDOM } = jsdom
const DOMParser = require('xmldom').DOMParser
const HTML = new JSDOM('<html><head><title>isXML</title></head><body><p>p1</p><p>p2</p><p>p3</p></body></html>')
const XML = new DOMParser().parseFromString(
    '<xml xmlns="a" xmlns:c="./lite">\n'+
        '\t<child>test</child>\n'+
        '\t<child></child>\n'+
        '\t<child/>\n'+
    '</xml>','text/xml')

Types.isXML(XML) // -> true
Types.isXML(HTML) // -> false
```


### [Function](https://yaohaixiao.github.io/types.js/#heading-56)

types.js 提供以下方法来检测 Function 相关的数据类型。

### [isConstructor(val)](https://yaohaixiao.github.io/types.js/#method-isConstructor)

isConstructor(val) 方法用来检测测试函数是否为构造函数

#### Parameters

##### val

Type: `Any`

必选，要测试的（构造）函数。

#### Returns

Type: `Boolean`

fn 是构造函数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isConstructor() 方法
// import isConstructor from '@yaohaixiao/types.js/isConstructor'

const fn = function(){}
const ff = class {}

Types.isConstructor(fn) // -> true
Types.isConstructor(ff) // -> true
Types.isConstructor(console.log) // -> false

Types.isConstructor(Math) // -> false
Types.isConstructor(Boolean) // -> true
Types.isConstructor(Array) // -> true
Types.isConstructor(Function) // -> true
Types.isConstructor(Date) // -> true
Types.isConstructor(RegExp) // -> true
Types.isConstructor(Object) // -> true
```

### [isFunction(val)](https://yaohaixiao.github.io/types.js/#method-isFunction)

isFunction(val) 方法用来检测测试数据是否为 Function 类型。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Function 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isFunction() 方法
// import isFunction from '@yaohaixiao/types.js/isFunction'

const blank = () => {}
const fn = new Fucntion()

function empty(){}

Types.isFunction(empty) // -> true
Types.isFunction(blank) // -> true
Types.isFunction(fn) // -> true
Types.isFunction(parseInt) // -> true
Types.isFunction(Array) // -> true
Types.isFunction(Boolean) // -> true
Types.isFunction(Date) // -> true
Types.isFunction(Number) // -> true
Types.isFunction(Object) // -> true
Types.isFunction(RegExp) // -> true
Types.isFunction(String) // -> true

Types.isFunction(Math) // -> false
Types.isFunction(console) // -> false
```

### [isNativeFunction(val)](https://yaohaixiao.github.io/types.js/#method-isNativeFunction)

isNativeFunction(val) 方法用来检测测试函数是否为系统内置函数

#### Parameters

##### val

Type: `Any`

必选，要测试的函数。

#### Returns

Type: `Boolean`

fn 是系统内置函数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isNativeFunction() 方法
// import isNativeFunction from '@yaohaixiao/types.js/isNativeFunction'

const fn = function(){}
const ff = class {}
const f = () => console.log('no constructable')

Types.isNativeFunction(fn) // -> false
Types.isNativeFunction(ff) // -> false
Types.isNativeFunction(f) // -> false

Types.isNativeFunction(Math) // -> true
Types.isNativeFunction(Boolean) // -> true
Types.isNativeFunction(Array) // -> true
Types.isNativeFunction(Function) // -> true
Types.isNativeFunction(Date) // -> true
Types.isNativeFunction(RegExp) // -> true
Types.isNativeFunction(Object) // -> true
```


### [Number](https://yaohaixiao.github.io/types.js/#heading-60)

types.js 提供以下方法来检测 Number 相关的数据类型。

### [isEven(val)](https://yaohaixiao.github.io/types.js/#method-isEven)

isEven(val) 方法用来检测测试数据的数据类型是否为偶数。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是偶数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isEven() 方法
// import isEven from '@yaohaixiao/types.js/isEven'

Types.isEven(2) // -> true
Types.isEven(3) // -> false
Types.isEven(2.2) // -> false
```

### [isFloat(val)](https://yaohaixiao.github.io/types.js/#method-isFloat)

isFloat(val) 方法用来检测测试数据是否为浮点数。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是浮点数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isFloat() 方法
// import isFloat from '@yaohaixiao/types.js/isFloat'

Types.isFloat(2.4) // -> true
Types.isFloat(Number("3.4556645445E7")) // -> true

Types.isFloat(Number("3.4556645445E10")) // -> false
Types.isFloat(2.0) // -> false
Types.isFloat(0xffffff) // -> false
Types.isFloat(NaN) // -> false
```

### [isInfinite(val)](https://yaohaixiao.github.io/types.js/#method-isInfinite)

isInfinite(val) 方法用来检测测试数据的数据是正无穷或者负无穷。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是正无穷或者负无穷返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isInfinite() 方法
// import isInfinite from '@yaohaixiao/types.js/isInfinite'

Types.isInfinite(2.4) // -> false

Types.isInfinite(Infinity) // -> true
Types.isInfinite(-Infinity) // -> true
```

### [isInteger(val)](https://yaohaixiao.github.io/types.js/#method-isInteger)

isInteger(val) 方法用来检测测试数据是否为整数。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是整数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isInteger() 方法
// import isInteger from '@yaohaixiao/types.js/isInteger'

Types.isInteger(2.4) // -> false
Types.isInteger(3.4234E3) // -> false
Types.isInteger('1') // -> false
Types.isInteger(Number('3.4556645445E7')) // -> false
Types.isInteger(NaN) // -> false
Types.isInteger(Infinity) // -> false
Types.isInteger(-Infinity) // -> false

Types.isInteger(2) // -> true
Types.isInteger(2.0) // -> true
Types.isInteger(3.4234E4) // -> true
Types.isInteger(0xffffff) // -> true
Types.isInteger(Number('1')) // -> true
Types.isInteger(parseInt('1.0', 10)) // -> true
Types.isInteger(Math.ceil(2.6)) // -> true
```

### [isNumeric(val)](https://yaohaixiao.github.io/types.js/#method-isNumeric)

isNumeric(val) 方法用来检测测试数据是否是一个数字（只能是 number 类型或者 '123123' 这样的数字字符串）。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是一个数字返回 true，否则返回false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isNumeric() 方法
// import isNumeric from '@yaohaixiao/types.js/isNumeric'

Types.isNumeric(2) // -> true
Types.isNumeric(2.4) // -> true
Types.isNumeric(0xffffff) // -> true
Types.isNumeric(3.1415926E8) // -> true
Types.isNumeric('33') // -> true
Types.isNumeric('0xffffff') // -> true

Types.isNumeric(NaN) // -> false
Types.isNumeric(Infinity) // -> false
Types.isNumeric(-Infinity) // -> false
```

### [isOdd(val)](https://yaohaixiao.github.io/types.js/#method-isOdd)

isOdd(val) 方法用来检测测试数据的数据类型是否为奇数。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是奇数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isOdd() 方法
// import isOdd from '@yaohaixiao/types.js/isOdd'

Types.isOdd(3) // -> true
Types.isOdd(3.0) // -> true
Types.isOdd(3.01E2) // -> true
Types.isOdd(0x000011) // -> true

Types.isOdd(2.0) // -> false
Types.isOdd('2') // -> false
Types.isOdd(3.01E3) // -> false
Types.isOdd(0x000010) // -> false
Types.isOdd(NaN) // -> false
Types.isOdd(Infinity) // -> false
```


### [String](https://yaohaixiao.github.io/types.js/#heading-70)

types.js 提供以下方法来检测 String 相关的数据类型。

### [isAlpha(val)](https://yaohaixiao.github.io/types.js/#method-isAlpha)

isAlpha(val) 方法用来检测测试数据是否仅包含英文字符。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据仅包含英文字符，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isAlpha() 方法
// import isAlpha from '@yaohaixiao/types.js/isAlpha'

Types.isAlpha('aaa') // -> true
Types.isAlpha('good') // -> true

Types.isAlpha('ok!') // -> false
Types.isAlpha('is alpha') // -> false
```

### [isBase64(val)](https://yaohaixiao.github.io/types.js/#method-isBase64)

isBase64(val) 方法用来检测测试数据是否为一个基于 base64 编码的字符串。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 base64 编码的字符串返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isBase64() 方法
// import isBase64 from '@yaohaixiao/types.js/isBase64'

Types.isBase64('Z29vZA==') // -> true
Types.isBase64('aXNCYXNlNjQ=2') // -> false
```

### [isBlank(val)](https://yaohaixiao.github.io/types.js/#method-isBlank)

isBlank(val) 方法用来检测测试数据是否只包空格。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 只包含空格返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isBlank() 方法
// import isBlank from '@yaohaixiao/types.js/isBlank'

Types.isBlank('  ') // -> true
Types.isBlank(new String()) // -> false
Types.isBlank('') // -> true
```

### [isChinese(val, includePunctuation)](https://yaohaixiao.github.io/types.js/#method-isChinese)

isChinese(val, includePunctuation) 方法用来检测测试数据(字符串)是否为中文字符。

Wiki 介绍中文字符（Unified Ideographs）包含以下内容：

1. 中文汉字
2. 象形文字扩展 A-H
3. 兼容象形文字符
4. 兼容表意文字增补字符
5. 中文标点符号
6. 兼容标点符号

其中：

- 兼容象形文字符：[0xf900, 0xfaff];
- 兼容表意文字增补字符：[0x2f800, 0x2fa1f];
- 只是看上去像汉字，因此在 isChinese() 方法中没有纳入到汉字字符。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

##### val

Type: `Boolean`

（可选）是否包含标点符号：默认值：true

#### Returns

Type: `Boolean`

true - 表示检测数据为中文字符，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isChinese() 方法
// import isChinese from '@yaohaixiao/types.js/isChinese'

let chinese

// 非字符串
Types.isChinese(null) // -> false
Types.isChinese(chinese) // -> false
Types.isChinese({}) // -> false
Types.isChinese([]) // -> false
Types.isChinese(Symbol('symbol')) // -> false

// Ascii 字符
Types.isChinese(12) // -> false
Types.isChinese('chinese') // -> false
Types.isChinese('+=*/') // -> false

// 汉字字符
Types.isChinese('汉字字符：尅靈') // -> true
Types.isChinese('扩展字符：㐥𠁜𪝹𫞺𫡡𭀔𭍓') // -> true

// 标点符号
Types.isChinese('标点符号：。，、；：×·—…（）『』【】《》？！‘’“”～') // -> true
Types.isChinese('兼容标点符号：︰︱︲︳︴︵︶︷︸︹︺︻︼︽︾︿﹀﹁﹂﹃﹄﹅﹆﹇﹈﹉﹊﹋﹌﹍﹎﹏') // -> true

// 不包含标点符号，则以下检测无法通过
Types.isChinese('标点符号：。，、；：×·—…（）『』【】《》？！‘’“”～', false) // -> false
```

### [isEmail(val)](https://yaohaixiao.github.io/types.js/#method-isEmail)

isEmail(val) 方法用来检测测试数据是否为合法的 Email 格式。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Boolean 类型返回 true，否则返回 false

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isEmail() 方法
// import isEmail from '@yaohaixiao/types.js/isEmail'

// True
Types.isEmail('yaohaixiao@gmail.com') // => true
Types.isEmail('yaohaixiao@gmail.c') // => true
Types.isEmail('haixiao-yao@gmail.com') // => true
Types.isEmail('haixiao_yao@gmail.com') // => true
Types.isEmail('haixiao&yao@gmail.com') // => true
Types.isEmail('haixiao~yao@gmail.com') // => true
Types.isEmail('haixiao+yao@gmail.com') // => true
Types.isEmail('haixiao^yao@gmail.com') // => true
Types.isEmail('haixiao%yao@gmail.com') // => true
Types.isEmail('haixiao$yao@gmail.com') // => true
Types.isEmail('haixiao.yao@gmail.com') // => true
Types.isEmail('haixiao/yao@gmail.com') // => true
Types.isEmail('haixiao#yao@gmail.com') // => true
Types.isEmail('yao{haixiao@gmail.com') // => true
Types.isEmail('yao|haixiao@gmail.com') // => true
Types.isEmail('yao}haixiao@gmail.com') // => true

// False
Types.isEmail('yaohaixiao#gmail.com') // => false
Types.isEmail('yao\haixiao@gmail.com') // => false
Types.isEmail('yao[haixiao@gmail.com') // => false
```

### [isEmpty(val)](https://yaohaixiao.github.io/types.js/#method-isEmpty)

isEmpty(val) 方法用来检测测试数据是否为空字符串。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是空字符串返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isEmpty() 方法
// import isEmpty from '@yaohaixiao/types.js/isEmpty'

Types.isEmpty('') // -> true
Types.isEmpty(String()) // -> true

Types.isEmpty(new String()) // -> false
Types.isEmpty(' ') // -> false
```

### [isGuid(val)](https://yaohaixiao.github.io/types.js/#method-isGuid)

isGuid(val) 方法用来检测测试数据是否为合法的 UUID 字符串。

Alias: `isUUID`

#### Parameters

##### val

Type: `Any`

必须，待检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据(数值)为合法的 UUID 字符串，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isGuid() 方法
// import isGuid from '@yaohaixiao/types.js/isGuid'

Types.isGuid('749d0000-0194-1005-2e05-08d61613bf2f') // -> true
Types.isGuid('d3aa88e2-c754-41e0-8ba6-4198a34aa0a2') // -> true
Types.isGuid('00000000-0000-0000-0000-000000000000') // -> true
Types.isGuid('{0e40c5ab-1d9b-ee11-983e-e0be0335d021}') // -> true
Types.isGuid('08dbe0f11c8641cf8afe6b2824e8f8f5') // -> true

Types.isGuid('') // -> false
Types.isGuid('xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3') // -> false
Types.isGuid('934859') // -> false
Types.isGuid('A987FBC94BED3078CF079141BA07C9F') // -> false
```

### [isHex(val)](https://yaohaixiao.github.io/types.js/#method-isHex)

isHex(val) 方法用来检测测试数据是否为 16 进制编码的字符串。

#### Parameters

##### val

Type: `String`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 16 进制编码的字符串返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isHex() 方法
// import isHex from '@yaohaixiao/types.js/isHex'

Types.isHex('#ffffff') // -> true
Types.isHex('f3f3f3') // -> true
Types.isHex('#h1f1f1') // -> false
Types.isHex('sdadfa') // -> false
```

### [isHTML(val)](https://yaohaixiao.github.io/types.js/#method-isHTML)

isHTML(val) 方法用来检测测试数据是否为合法的 HTML 代码。

#### Since

0.5.0

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据为合法的 HTML 代码，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isHTML() 方法
// import isHTML from '@yaohaixiao/types.js/isHTML'

// 包含 doctype 标签：
Types.isHTML('<!doctype html>') // -> true
Types.isHTML('\n\n<!doctype html><html>') // -> true

// 包含：<html>，<body> 或者 <x-*> 标签：
Types.isHTML('<html>') // -> true
Types.isHTML('<html></html>') // -> true
Types.isHTML('<html lang="en"></html>') // -> true
Types.isHTML('<html><body></html>') // -> true
Types.isHTML('<html><body class="no-js"></html>') // -> true
Types.isHTML('<x-unicorn>') // -> true

// 包含任何合法的 HTML 标签：
Types.isHTML('<p>foo</p>') // -> true
Types.isHTML('<a href="#">foo</a>') // -> true
Types.isHTML('<br />') // -> true

// 无法匹配 XML 标签：
Types.isHTML('<attribute>address</attribute>') // -> false
Types.isHTML('<address>Wuhan City</address>') // -> false
Types.isHTML('<age>20</age>') // -> false
Types.isHTML('<gender>mail</gender>') // -> false
Types.isHTML('<career>programmer</career>') // -> false
```

### [isIDNumber(val)](https://yaohaixiao.github.io/types.js/#method-isIDNumber)

isIDNumber(val) 方法用来检测测试数据是否为（中国）身份证号码。

#### Parameters

##### val

Type: `Any`

（必须）val 待检测的数据（身份证号码）。

#### Returns

Type: `Boolean`

true - 表示检测数据是合法的（中国）身份证号码（格式），false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isIDNumber() 方法
// import isIDNumber from '@yaohaixiao/types.js/isIDNumber'

// 有效的 15 位身份证号码
Types.isIDNumber('110105491231002'); // -> true

// 无效的 15 位身份证号码
Types.isIDNumber('123456789012345'); // -> false

// 有效的 18 位身份证号码（校验码为 X）
Types.('11010519491231002X'); // -> true

// 无效的 18 位身份证号码（校验码错误）
Types.isIDNumber('110105194912310029'); // -> false

// 无效的 18 位身份证号码（非法字符 Y）
Types.isIDNumber('11010519491231002Y'); // -> false

// 无效的 18 位身份证号码
Types.isIDNumber('123456789012345678'); // -> false

// 长度不符合
Types.isIDNumber('11010519491231002'); // -> false
Types.isIDNumber('11010519491231002XX'); // -> false

// 格式错误
Types.isIDNumber('A1010519491231002X'); // -> false
Types.isIDNumber('11010519491231002x'); // -> false

// 非字符串
Types.isIDNumber(110105194912310021); // -> false
```

### [isIPAddress(val)](https://yaohaixiao.github.io/types.js/#method-isIPAddress)

isIPAddress(val) 方法用来检测测试数据是否为合法的 IP 地址格式。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是合法的 IP 地址格式，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isIPAddress() 方法
// import isIPAddress from '@yaohaixiao/types.js/isIPAddress'

// IPv4
Types.isIPAddress('126.11.15.33') // -> true
Types.isIPAddress('255.255.255.255') // -> true
Types.isIPAddress('126.11.15.255') // -> false
Types.isIPAddress('126.11.15.256') // -> false
Types.isIPAddress('126.11.15.a56') // -> false
Types.isIPAddress('126.11.15.') // -> false

// IPv6
Types.isIPAddress('FC00:0000:130F:0000:0000:09C0:876A:130B') // -> true
Types.isIPAddress('FC00:0000:130F:0000:0000:09C0:876A:130') // -> true
Types.isIPAddress('FC00:0000:130F:0000:0000:09C0:876A') // -> false
Types.isIPAddress('FC00:0000:130F:0000:0000:09C0:876A:X130') // -> false
```

### [isJSON(val)](https://yaohaixiao.github.io/types.js/#method-isJSON)

isJSON(val) 方法用来检测测试数据是否为 JSON 格式字符串数据。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 JSON 格式字符串数据返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isJSON() 方法
// import isJSON from '@yaohaixiao/types.js/isJSON'

// String
Types.isJSON('') // -> false
Types.isJSON("") // -> false
Types.isJSON("json") // -> true

// Number
Types.isJSON(3) // -> false
Types.isJSON("3") // -> true

// Boolean
Types.isJSON(false) // -> false
Types.isJSON("false") // -> true

// Object
Types.isJSON(null) // -> false
Types.isJSON("null") // -> true

Types.isJSON({ prop: 'JSON' }) // -> false
Types.isJSON("{\"prop\":\"JSON\"}") // -> true

// Array
Types.isJSON([1, 2, 3]) // -> false
Types.isJSON("[1, 2, 3]") // -> true
```

### [isPhoneNumber(val)](https://yaohaixiao.github.io/types.js/#method-isPhoneNumber)

isPhoneNumber(val) 方法用来检测测试数据是否为合法的电话号码格式。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是合法的电话号码格式，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isPhoneNumber() 方法
// import isPhoneNumber from '@yaohaixiao/types.js/isPhoneNumber'

// 移动电话号码
Types.isPhoneNumber(13901030304) // -> false
Types.isPhoneNumber('1390103030a') // => false

Types.isPhoneNumber('+86 13901030304') // -> true
Types.isPhoneNumber('13901030304') // -> true
Types.isPhoneNumber('139-010-30304') // -> true
Types.isPhoneNumber('139.010.30304') // -> true

// 固定电话号码
Types.isPhoneNumber('+86 84923296') // -> true
Types.isPhoneNumber('027 84923296') // -> true
Types.isPhoneNumber('(027) 84923296') // -> true
Types.isPhoneNumber('(027)84923296') // -> true
Types.isPhoneNumber('027-84923296') // -> true
Types.isPhoneNumber('027.84923296') // -> true
Types.isPhoneNumber('027 849-23296') // -> true
Types.isPhoneNumber('027-849-23296') // -> true
```

### [isSVG(val)](https://yaohaixiao.github.io/types.js/#method-isSVG)

isSVG(val) 方法用来检测测试数据是否为合法的 SVG 代码。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据为合法的 SVG 代码，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isHTML() 方法
// import isSVG from '@yaohaixiao/types.js/isSVG'

Types.isSVG('<!doctype html>') // -> false

const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 26 28">' +
  '<path d="M22 15.5v7.5c0"></path>' +
  '</svg>'

Types.isSVG(svg) // -> true
```

### [isTime(val, type)](https://yaohaixiao.github.io/types.js/#method-isTime)

isTime(val, type) 方法用来检测测试数据是否为有效的时间（字符串）。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

##### type

Type: `String`

（可选）测试的时间类型:

- time - 时间；
- date - 日期；
- 不传 - 时间或者日期皆可

#### Returns

Type: `Boolean`

true - 表示检测数据为有效的时间，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isTime() 方法
// import isTime from '@yaohaixiao/types.js/isTime'

let chinese

// 非字符串
Types.isTime(123) // -> false
Types.isTime(false) // -> false
Types.isTime(null) // -> false
Types.isTime(chinese) // -> false
Types.isTime(Symbol('symbol')) // -> false
Types.isTime(BigInt(42)) // -> false
Types.isTime({}) // -> false
Types.isTime([]) // -> false
Types.isTime(() => {}) // -> false

// 字符串
Types.isTime('time') // -> false

// 时间
// 12小时格式时间
Types.isTime('1:23', 'time') // -> true
Types.isTime('01:23', 'time') // -> true
Types.isTime('11:23 am', 'time') // -> true
Types.isTime('11:23 AM', 'time') // -> true
Types.isTime('11:23 pm', 'time') // -> true
Types.isTime('5:23 PM', 'time') // -> true

Types.isTime('23:01 pm', 'time') // -> false

// 24小时格式时间
Types.isTime('3:34', 'time') // -> true
Types.isTime('03:45', 'time') // -> true
Types.isTime('18:16:01', 'time') // -> true
Types.isTime('23:34:59', 'time') // -> true

Types.isTime('03:60', 'time') // -> false
Types.isTime('24:01', 'time') // -> false

// 日期
Types.isTime('2001.01.01') // -> true
Types.isTime('2001/01/01') // -> true
Types.isTime('2001-01-01') // -> true
Types.isTime('2001-01-32') // -> false
Types.isTime('2001-13-00') // -> false

Types.isTime('01.01.2001') // -> true
Types.isTime('01/11/2001') // -> true
Types.isTime('31-12-2001') // -> true
Types.isTime('31-13-2001') // -> false
Types.isTime('32.12.2001') // -> false

Types.isTime('Jul 08 2023 11:15:11', 'date') // -> true
Types.isTime('Jul 32 2023 11:15:34', 'date') // -> false
```

### [isURL(val)](https://yaohaixiao.github.io/types.js/#method-isURL)

isURL(val) 方法用来检测测试数据是否为合法的 URL 格式。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是合法的 URL 格式，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isURL() 方法
// import isURL from '@yaohaixiao/types.js/isURL'

// IP 访问
Types.isURL('http://127.0.0.1') // -> true
Types.isURL('https://127.0.0') // -> false
Types.isURL('https://127.0.0.') // -> false

Types.isURL('http://127.0.0.1:8080') // -> true
Types.isURL('http://127.0.0.1:8080#top') // -> true
Types.isURL('http://127.0.0.1:8080?id=22') // -> true
Types.isURL('http://127.0.0.1/console') // -> true
Types.isURL('http://127.0.0.1:8080/workbench/?id=2#projects') // -> true

// 域名访问
Types.isURL('http://localhost') -> false
Types.isURL('ftp://www.yaohaixiao.com') -> false

Types.isURL('http://www.yaohaixiao.') -> false
Types.isURL('http://www.yaohaixiao.c') -> false
Types.isURL('http://www.yaohaixiao.c1') -> false

Types.isURL('https://www.yaohaixiao.cn') -> true
Types.isURL('https://www.yaohaixiao.com') -> true
Types.isURL('https://www.yaohaixiao.com:8083') -> true
Types.isURL('https://www.yaohaixiao.com/blog#top') -> true
Types.isURL('https://www.yaohaixiao.com/blog/?page=2') -> true
Types.isURL('https://www.yaohaixiao.com:8083/blog?page=2#top') -> true
```

### [isUUID(val)](https://yaohaixiao.github.io/types.js/#method-isUUID)

isUUID(val) 方法用来检测测试数据是否为合法的 UUID 字符串。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据(数值)为合法的 UUID 字符串，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isUUID() 方法
// import isUUID from '@yaohaixiao/types.js/isUUID'

Types.isUUID('749d0000-0194-1005-2e05-08d61613bf2f') // -> true
Types.isUUID('d3aa88e2-c754-41e0-8ba6-4198a34aa0a2') // -> true
Types.isUUID('00000000-0000-0000-0000-000000000000') // -> true
Types.isUUID('{0e40c5ab-1d9b-ee11-983e-e0be0335d021}') // -> true
Types.isUUID('08dbe0f11c8641cf8afe6b2824e8f8f5') // -> true

Types.isUUID('') // -> false
Types.isUUID('xxxA987FBC9-4BED-3078-CF07-9141BA07C9F3') // -> false
Types.isUUID('934859') // -> false
Types.isUUID('A987FBC94BED3078CF079141BA07C9F') // -> false
```


### [DOM](https://yaohaixiao.github.io/types.js/#heading-88)

types.js 提供以下方法来检测 DOM 相关的数据类型。

### [isElement(val)](https://yaohaixiao.github.io/types.js/#method-isElement)

isElement(val) 方法用来检测测试数据的数据类型是否为 HTML 元素节点。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 为 HTML 元素节点返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isElement() 方法
// import isElement from '@yaohaixiao/types.js/isElement'

const $list = document.getElementById('list')
const $div = document.createElement('div')
const $text = document.createTextNode('text')
const $items = document.querySelectorAll('.item')
const $fragment = document.createDocumentFragment()
const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

Types.isElement(svgElement) // -> true
Types.isHTMLElement(svgElement) // -> false

Types.is($list) // -> 'element'
Types.isElement($list) // -> true

Types.is($div) // -> 'element'
Types.isElement($div) // -> true

Types.is($text) // -> 'text'
Types.isElement($text) // -> false

Types.is($items) // -> 'collection'
Types.isElement($items) // -> false

Types.is($fragment) // -> 'collection'
Types.isElement($fragment) // -> false
```

### [isFragment(val)](https://yaohaixiao.github.io/types.js/#method-isFragment)

isFragment(val) 方法用来检测测试数据是否为 DocumentFragment 文档碎片。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 DocumentFragment 文档碎片，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isFragment() 方法
// import isFragment from '@yaohaixiao/types.js/isFragment'

const $list = document.getElementById('list')
const $div = document.createElement('div')
const $text = document.createTextNode('text')
const $items = document.querySelectorAll('.item')
const $fragment = document.createDocumentFragment()

Types.is($list) // -> 'element'
Types.isElement($list) // -> true
Types.isFragment($list) // -> false

Types.is($div) // -> 'element'
Types.isElement($div) // -> true
Types.isFragment($div) // -> false

Types.is($text) // -> 'text'
Types.isElement($text) // -> false
Types.isFragment($text) // -> false

Types.is($items) // -> 'collection'
Types.isElement($items) // -> false
Types.isFragment($items) // -> false

Types.is($fragment) // -> 'fragment'
Types.isElement($fragment) // -> false
Types.isFragment($items) // -> true

Types.isElement([]) // -> false
```

### [isHTMLCollection(val)](https://yaohaixiao.github.io/types.js/#method-isHTMLCollection)

isHTMLCollection(val) 方法用来检测数据的是否为 HTMLNodeList 对象。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 HTMLNodeList 对象返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isHTMLCollection() 方法
// import isHTMLCollection from '@yaohaixiao/types.js/isHTMLCollection'

const $list = document.getElementById('list')
const $div = document.createElement('div')
const $text = document.createTextNode('text')
const $items = document.querySelectorAll('.item')
const $fragment = document.createDocumentFragment()

Types.is($list) // -> 'element'
Types.isElement($list) // -> true
Types.isHTMLCollection($list) // -> false

Types.is($div) // -> 'element'
Types.isElement($div) // -> true
Types.isHTMLCollection($div) // -> false

Types.is($text) // -> 'text'
Types.isElement($text) // -> false
Types.isHTMLCollection($text) // -> false

Types.is($items) // -> 'collection'
Types.isElement($items) // -> false
Types.isHTMLCollection($items) // -> true

Types.is($fragment) // -> 'fragment'
Types.isElement($fragment) // -> false
Types.isHTMLCollection($items) // -> false
```

### [isHTMLElement(val)](https://yaohaixiao.github.io/types.js/#method-isHTMLElement)

isHTMLElement(val) 方法用来检测测试数据的数据类型是否为 HTML 元素节点。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 为 HTML 元素节点返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isHTMLElement() 方法
// import isHTMLElement from '@yaohaixiao/types.js/isHTMLElement'

const $list = document.getElementById('list')
const $div = document.createElement('div')
const $text = document.createTextNode('text')
const $items = document.querySelectorAll('.item')
const $fragment = document.createDocumentFragment()

Types.is($list) // -> 'element'
Types.isHTMLElement($list) // -> true

Types.is($div) // -> 'element'
Types.isHTMLElement($div) // -> true

Types.is($text) // -> 'text'
Types.isHTMLElement($text) // -> false

Types.is($items) // -> 'collection'
Types.isHTMLElement($items) // -> false

Types.is($fragment) // -> 'collection'
Types.isHTMLElement($fragment) // -> false
```

### [isTextNode(val)](https://yaohaixiao.github.io/types.js/#method-isTextNode)

isTextNode(val) 方法用来检测测试数据是否为文本节点。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是文本节点返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isTextNode() 方法
// import isTextNode from '@yaohaixiao/types.js/isTextNode'

const $list = document.getElementById('list')
const $div = document.createElement('div')
const $fragment = document.createDocumentFragment()
const $items = document.querySelectorAll('.item')
const $text = document.createTextNode('text')

Types.is($list) // -> 'element'
Types.isElement($list) // -> true
Types.isTextNode($list) // -> false

Types.is($div) // -> 'element'
Types.isElement($div) // -> true
Types.isTextNode($div) // -> false

Types.is($fragment) // -> 'fragment'
Types.isFragment($fragment) // -> true
Types.isTextNode($fragment) // -> false

Types.is($items) // -> 'collection'
Types.isHTMLCollection($items) // -> true
Types.isTextNode($items) // -> false

Types.is($text) // -> 'collection'
Types.isElement($text) // -> false
Types.isTextNode($text) // -> true
```

### [isShadowRoot(val)](https://yaohaixiao.github.io/types.js/#method-isShadowRoot)

isShadowRoot(val) 方法用来检测测试数据是否为 ShadowRoot 对象。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 ShadowRoot 对象，返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isShadowRoot() 方法
// import isShadowRoot from '@yaohaixiao/types.js/isShadowRoot'

// 测试 ShadowRoot 未定义的情况
const originalShadowRoot = global.ShadowRoot

// 临时将 ShadowRoot 设置为 undefined
global.ShadowRoot = undefined
Types.isShadowRoot({}) // -> false

// 恢复原始的 ShadowRoot
global.ShadowRoot = originalShadowRoot

// 测试传入真正的 ShadowRoot 实例
const div = document.createElement('div')
const shadowRoot = div.attachShadow({ mode: 'open' })

Types.isShadowRoot(shadowRoot) // -> true

// 测试传入非 ShadowRoot 实例
Types.isShadowRoot({}) // -> false
```

### [isWindow(val)](https://yaohaixiao.github.io/types.js/#method-isWindow)

isWindow(val) 方法用来检测测试数据是否为 Window 对象。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Window 对象，返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isWindow() 方法
// import isWindow from '@yaohaixiao/types.js/isWindow'

const $list = document.getElementById('list')

Types.is($list) // -> 'element'
Types.isWindow($list) // -> false

Types.isWindow(window) // -> true

const nonWindowObject = {
  // 模拟部分 Window 对象的属性，但不完整
  document: {},
  location: {},
  // 缺少 alert 和 setInterval 属性
}

Types.isWindow(nonWindowObject) // -> false

Types.isWindow(null) // -> false
```

### [isDOM(val)](https://yaohaixiao.github.io/types.js/#method-isDOM)

isDOM(val) 方法用来检测测试数据是否为 DOM 类型数据：DOM 节点，TextNode，NodeList 和 DocumentFragment）。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据是 DOM 类型数据，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isDOM() 方法
// import isDOM from '@yaohaixiao/types.js/isDOM'

const $list = document.getElementById('list')
const $fragment = document.createDocumentFragment()
const $items = document.querySelectorAll('.item')
const $text = document.createTextNode('text')

Types.is($list) // -> 'element'
Types.isDOM($list) // -> true

Types.is($fragment) // -> 'fragment'
Types.isDOM($fragment) // -> true

Types.is($items) // -> 'collection'
Types.isDOM($items) // -> true

Types.is($text) // -> 'text'
Types.isDOM($text) // -> true
```

### [isNode(val)](https://yaohaixiao.github.io/types.js/#method-isNode)

isNode(val) 方法用来检测测试数据是否为 Node 实例。

注意：在 JavaScript 的 DOM（文档对象模型）中，Node、Element 和 HTMLElement 是非常重要的概念，它们代表了不同层次的抽象，用于描述和操作 HTML 文档中的各种元素和节点。以下是它们之间的区别：

#### 继承关系

它们之间存在着明确的继承层次结构，具体如下：

- Node 是所有节点类型的基类，它处于继承层次的最顶层；
- Element 继承自 Node，是所有元素节点的基类；
- HTMLElement 继承自 Element，专门用于表示 HTML 元素；

因此，isNode() 方法可以检测任何类型的 Node 元素。

#### Parameters

##### val

Type: `Any`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Node 实例，返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js'
// 或者单独引用 isNode() 方法
// import isNode from '@yaohaixiao/types.js/isNode'

const div = document.createElement('div')
Types.isNode(div) // -> true
Types.isElement(div) // -> true
Types.isHTMLElement(div) // -> true

const text = document.createTextNode('text')
Types.isNode(text) // -> true
Types.isElement(text) // -> false
Types.isHTMLElement(text) // -> false

const fragment = document.createDocumentFragment()
Types.isNode(fragment) // -> true
Types.isElement(fragment) // -> false
Types.isHTMLElement(fragment) // -> false

const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
Types.isNode(svgElement) // -> true
Types.isElement(svgElement) // -> true
Types.isHTMLElement(svgElement) // -> false

isNode({}) // -> false
```


## License

JavaScript Code Licensed under [MIT License](http://opensource.org/licenses/mit-license.html).
