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
- 丰富的数据类型检测方法，且调用方面简单；
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


### [isValue](https://yaohaixiao.github.io/types.js/#method-isValue)

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


### [Primitive Values](https://yaohaixiao.github.io/types.js/#heading-3)

types.js 提供以下方法来检测 Primitive Values（基础值类型） 相关的数据类型。

### [isBigInt](https://yaohaixiao.github.io/types.js/#method-isBigInt)

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

### [isBoolean](https://yaohaixiao.github.io/types.js/#method-isBoolean)

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

### [isNull](https://yaohaixiao.github.io/types.js/#method-isNull)

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

### [isNumber](https://yaohaixiao.github.io/types.js/#method-isNumber)

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

### [isString](https://yaohaixiao.github.io/types.js/#method-isString)

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

### [isSymbol](https://yaohaixiao.github.io/types.js/#method-isSymbol)

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

### [isUndefined](https://yaohaixiao.github.io/types.js/#method-isUndefined)

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

### [isPrimitive](https://yaohaixiao.github.io/types.js/#method-isPrimitive)

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


### [Keyed Collections](https://yaohaixiao.github.io/types.js/#heading-11)

types.js 提供以下方法来检测 Keyed Collections 相关的数据类型。

### [isMap](https://yaohaixiao.github.io/types.js/#method-isMap)

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

### [isSet](https://yaohaixiao.github.io/types.js/#method-isSet)

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

### [isWeakMap](https://yaohaixiao.github.io/types.js/#method-isWeakMap)

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


### [isWeakSet](https://yaohaixiao.github.io/types.js/#method-isWeakSet)

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


### [Array](https://yaohaixiao.github.io/types.js/#heading-16)

types.js 提供以下方法来检测 Array 相关的数据类型。

### [isArguments](https://yaohaixiao.github.io/types.js/#method-isArguments)

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

### [isArray](https://yaohaixiao.github.io/types.js/#method-isArray)

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

### [isArrayLike](https://yaohaixiao.github.io/types.js/#method-isArrayLike)

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

### [isArrayLikeObject](https://yaohaixiao.github.io/types.js/#method-isArrayLikeObject)

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

### [isEmptyArguments](https://yaohaixiao.github.io/types.js/#method-isEmptyArguments)

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

### [isEmptyArray](https://yaohaixiao.github.io/types.js/#method-isEmptyArray)

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

### [Typed Arrays](https://yaohaixiao.github.io/types.js/#heading-22)

types.js 提供以下方法来检测 Typed Arrays 相关的数据类型。


### [Object](https://yaohaixiao.github.io/types.js/#heading-37)

types.js 提供以下方法来检测 Object 相关的数据类型。


### [Function](https://yaohaixiao.github.io/types.js/#heading-51)

types.js 提供以下方法来检测 Function 相关的数据类型。



### [Number](https://yaohaixiao.github.io/types.js/#heading-55)

types.js 提供以下方法来检测 Number 相关的数据类型。



### [String](https://yaohaixiao.github.io/types.js/#heading-64)

types.js 提供以下方法来检测 String 相关的数据类型。


### [DOM](https://yaohaixiao.github.io/types.js/#heading-81)

types.js 提供以下方法来检测 DOM 相关的数据类型。


## License

JavaScript Code Licensed under [MIT License](http://opensource.org/licenses/mit-license.html).
