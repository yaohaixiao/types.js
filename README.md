# types.js

[![npm version](https://img.shields.io/npm/v/@yaohaixiao/types.js)](https://www.npmjs.com/package/@yaohaixiao/types.js)
[![Github file size](https://img.shields.io/github/size/yaohaixiao/types.js/types.min.js.svg)](https://github.com/yaohaixiao/types.js/blob/master/types.min.js)
[![prettier code style](https://img.shields.io/badge/code_style-prettier-07b759.svg)](https://prettier.io)
[![Coverage](https://codecov.io/gh/yaohaixiao/types.js/branch/main/graph/badge.svg)](https://codecov.io/gh/yaohaixiao/types.js)
[![npm downloads](https://img.shields.io/npm/dm/@yaohaixiao/types.js)](https://npmcharts.com/compare/@yaohaixiao/types.js?minimal=true)
[![MIT License](https://img.shields.io/github/license/yaohaixiao/types.js.svg)](https://github.com/yaohaixiao/types.js/blob/master/LICENSE)

types.js 专注于检测 JavaScript 数据类型的工具库。

## 项目初衷

编写 types.js 主要是为初学 JavaScript 的朋友了解在 JavaScript 如何进行数据类型检测。当然，types.js 也完全可以胜任在实际产品开发的应用。

## 特点

- 支持 UMD 规范，同时也提供 ES6 模块调用；
- 原生 JavaScript 编写，无任何依赖；
- 丰富的数据类型检测方法，且调用方面简单；
- 文件体积小(Gzip：3KB)，加载速度快；

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://github.com/yaohaixiao/types.js/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://github.com/yaohaixiao/types.js/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://github.com/yaohaixiao/types.js/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://github.com/yaohaixiao/types.js/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](https://github.com/yaohaixiao/types.js/)</br>Opera |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IE11, Edge                                                                                                                                                                                             | last 10 versions                                                                                                                                                                                         | last 10 versions                                                                                                                                                                                     | last 10 versions                                                                                                                                                                                     | last 10 versions                                                                                                                                                                                 |

## 安装说明

types.js 支持 UMD 规范和 ES6 的模块调用方式，既可以在 Node.js 环境中使用 npm 安装，也可以在浏览器中使用 script 标签引入到页面。

### npm 安装

```sh
# install from npmjs.com
npm i -S @yaohaixiao/types.js

# install from github.com
npm i -S @yaohaixiao/types.js --registry=https://npm.pkg.github.com
```

### 浏览器中调用

在浏览器中调用 types.js，可以选择调用 jsdelivr 提供的 CDN 服务中的文件，也可以使用本地的 types.js 文件。

#### CDN 调用 JS 文件

```html
<script src="https://cdn.jsdelivr.net/gh/yaohaixiao/types.js/types.min.js"></script>
```

#### 本地调用 JS 文件

```html
<script src="/path/to/types.min.js"></script>
<script src="/path/to/types.core.min.js"></script>
```

### Node.js 中调用

```js
const Types = require('@yaohaixiao/types.js')

Types.is([]) // -> array
```

### ES6 模块中调用

```js
// 调用 Types 对象
import Types from '@yaohaixiao/types.js/types'

Types.is([]) // -> array
Types.isArray([]) // -> true

// 如果不希望一次加载所有方法，可以考虑 lang 模块
// 即 type.core.min.js 中的所有方法：
// is,
// isValue,
// isObject,
// isHash,
// isArray,
// isArrayLike,
// isFunction,
// isConstructor,
// isNull,
// isNumber,
// isNumeric,
// isFloat,
// isInteger,
// isString,
// isBigInt,
// isBoolean,
// isUndefined,
// isSet,
// isMap,
// isSymbol,
// isDate,
// isElement,
// isEmpty
import Types from '@yaohaixiao/types.js/lang'
// 另外有 string, number 和 object 模块(具体包含方法，见 API 文档)
import Types from '@yaohaixiao/types.js/string'
import Types from '@yaohaixiao/types.js/number'
import Types from '@yaohaixiao/types.js/object'

// 调用 lang 方法模块（type.core.min.js）中的所有方法
import Types from '@yaohaixiao/types.js/lang'

Types.is([]) // -> array
Types.isArray([]) // -> true

// 调用特定方法
import isArray from '@yaohaixiao/types.js/isArray'

isArray([]) // -> true
```


## [API Documentation](https://yaohaixiao.github.io/types.js/)

types.js 提供了很多实用的数据类型判断的方法，以下是一些常用的 API 示例，完整 API 文档请查阅：[https://yaohaixiao.github.io/types.js/](https://yaohaixiao.github.io/types.js/)。


### [is(val)](https://yaohaixiao.github.io/types.js/#method-is)

is(val) 方法返回检测数据的数据类型字符串：

* 'number' - 数字
* 'string' - 字符串
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
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
// 或者单独引用 is() 方法
// import is from '@yaohaixiao/types.js/is'

let Example
let args
const buffer = new ArrayBuffer(8)
const dv = new DataView(buffer)

function test(age){
  args = arguments
  return age
}

test(40)

// 基础值类型
Types.is('types.js') // -> string
Types.is(2023) // -> number
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
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是有效的数据返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isObject](https://yaohaixiao.github.io/types.js/#method-isObject)

isObject(val) 方法用来检测测试数据是否为对象。使用 isObject() 方法测试单体对象和函数都返回值都是 true。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 为对象返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isFunction](https://yaohaixiao.github.io/types.js/#method-isFunction)

isFunction(val) 方法用来检测测试数据是否为 Function 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Function 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isArray](https://yaohaixiao.github.io/types.js/#method-isArray)

isArray(val) 方法用来检测测试数据的数据类型是否为 Array （数组）类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Array 类型返回 true，否则返回 false

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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
import Types from '@yaohaixiao/types.js/types'
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
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是字符串返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isBoolean](https://yaohaixiao.github.io/types.js/#method-isBoolean)

isBoolean(obj) 方法用来检测测试数据是否为 Boolean 类型

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Boolean 类型则返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 为 null 返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isUndefined](https://yaohaixiao.github.io/types.js/#method-isUndefined)

isUndefined(val) 方法用来检测测试数据是否 undefined（未定义）。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 undefined（未定义）返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isSymbol](https://yaohaixiao.github.io/types.js/#method-isSymbol)

isSymbol(val) 方法用来检测测试数据是否为 Symbol 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Symbol 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
// 或者单独引用 isSymbol() 方法
// import isSymbol from '@yaohaixiao/types.js/isSymbol'

const sym = Symbol('foo')
const symObj = Object(sym)

Types.is(sym) // -> 'symbol'
Types.isSymbol(sym) // -> true

Types.is(symObj) // -> 'object'
Types.isSymbol(symObj) // -> false
```


### [isBigInt](https://yaohaixiao.github.io/types.js/#method-isBigInt)

isBigInt(obj) 方法用来检测测试数据是否为 BigInt 类型。

#### Since

0.6.0

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 BigInt 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
// 或者单独引用 isBigInt() 方法
// import isBigInt from '@yaohaixiao/types.js/isBigInt'

const MAX_SAFE_INTEGER = 9007199254740991
const bigint = BigInt(MAX_SAFE_INTEGER + 1)

Type.is(bigint) // -> 'bigint'

Types.isBigInt(MAX_SAFE_INTEGER) // -> false
Types.isBigInt(bigint) // -> true
```


### [isMap](https://yaohaixiao.github.io/types.js/#method-isMap)

isMap(val) 方法用来检测测试数据是否为 Map 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Map 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 isSet 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 WeakMap 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 WeakSet 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isArguments](https://yaohaixiao.github.io/types.js/#method-isArguments)

isArguments(val) 方法用来检测测试数据是否为 arguments 对象。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 arguments 对象返回 true，否则返回 false

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isArrayLike](https://yaohaixiao.github.io/types.js/#method-isArrayLike)

isArrayLike(val) 方法用来检测测试数据的数据类型是否为类似数组（array、arguments 对象或者 HTMLNodeList 对象）类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 array、arguments 或者 HTMLNodeList 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isArrayBuffer](https://yaohaixiao.github.io/types.js/#method-isArrayBuffer)

isArrayBuffer(val) 方法用来检测测试数据是否为 ArrayBuffer 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 ArrayBuffer 类型返回 true，否则返回 false

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
// 或者单独引用 isArrayBuffer() 方法
// import isArrayBuffer from '@yaohaixiao/types.js/isArrayBuffer'

Types.isArrayBuffer([]) // -> false
Types.isArrayBuffer(new ArrayBuffer(8)) // -> true
``


### [isEmptyObject](https://yaohaixiao.github.io/types.js/#method-isEmptyObject)

isEmptyObject(val) 方法用来检测测试数据是否为空（单体）对象。

#### Parameters

##### val

Type: `Any`
Default: `Object`

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是空对象返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isHash](https://yaohaixiao.github.io/types.js/#method-isHash)

isHash(val) 方法用来检测测试数据是普通对象（它是方法 [isPlainObject](https://yaohaixiao.github.io/types.js/#isPlainObject) 的别名）。

#### Since

0.4.0

#### Parameters

##### val

Type: `Object`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是普通对象返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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

### [isPlainObject](https://yaohaixiao.github.io/types.js/#method-isPlainObject)

isPlainObject(val) 方法用来检测测试数据是否为普通对象。

#### Parameters

##### val

Type: `Object`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是普通对象返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isError](https://yaohaixiao.github.io/types.js/#method-isError)

isError(val) 方法用来检测测试数据是否为 Error 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Error 类型返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
// 或者单独引用 isError() 方法
// import isError from '@yaohaixiao/types.js/isError'

const error = function Error(){}

Types.isError(new error()) // -> false
Types.isError(new Error()) // -> true
```


### [isRegExp](https://yaohaixiao.github.io/types.js/#method-isRegExp)

isRegExp(val) 方法用来检测测试数据是否为正则表达式。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是正则表达式返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isElement](https://yaohaixiao.github.io/types.js/#method-isElement)

isElement(val) 方法用来检测测试数据的数据类型是否为 HTML 元素节点。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 为 HTML 元素节点返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
// 或者单独引用 isElement() 方法
// import isElement from '@yaohaixiao/types.js/isElement'

const $list = document.getElementById('list')
const $div = document.createElement('div')
const $text = document.createTextNode('text')
const $items = document.querySelectorAll('.item')
const $fragment = document.createDocumentFragment()

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


### [isTextNode](https://yaohaixiao.github.io/types.js/#method-isTextNode)

isTextNode(val) 方法用来检测测试数据是否为文本节点。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是文本节点返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isHTMLCollection](https://yaohaixiao.github.io/types.js/#method-isHTMLCollection)

isHTMLCollection(val) 方法用来检测数据的是否为 HTMLNodeList 对象。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 HTMLNodeList 对象返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isConstructor](https://yaohaixiao.github.io/types.js/#method-isConstructor)

isConstructor(fn) 方法用来检测测试函数是否为构造函数

#### Parameters

##### val

Type: `Function`

必选，要测试的（构造）函数。

#### Returns

Type: `Boolean`

fn 是构造函数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isNativeFunction](https://yaohaixiao.github.io/types.js/#method-isNativeFunction)

isNativeFunction(fn) 方法用来检测测试函数是否为系统内置函数

#### Parameters

##### val

Type: `Function`

必选，要测试的函数。

#### Returns

Type: `Boolean`

fn 是系统内置函数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isNumeric](https://yaohaixiao.github.io/types.js/#method-isNumeric)

isNumeric(val) 方法用来检测测试数据是否是一个数字（只能是 number 类型或者 '123123' 这样的数字字符串）。

#### Parameters

##### val

Type: `Number|String`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是一个数字返回 true，否则返回false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isInteger](https://yaohaixiao.github.io/types.js/#method-isInteger)

isInteger(val) 方法用来检测测试数据是否为整数。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是整数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isFloat](https://yaohaixiao.github.io/types.js/#method-isFloat)

isFloat(val) 方法用来检测测试数据是否为浮点数。

#### Parameters

##### val

Type: `Number`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是浮点数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
// 或者单独引用 isFloat() 方法
// import isFloat from '@yaohaixiao/types.js/isFloat'

Types.isFloat(2.4) // -> true
Types.isFloat(Number("3.4556645445E7")) // -> true

Types.isFloat(Number("3.4556645445E10")) // -> false
Types.isFloat(2.0) // -> false
Types.isFloat(0xffffff) // -> false
Types.isFloat(NaN) // -> false
```


### [isEven](https://yaohaixiao.github.io/types.js/#method-isEven)

isEven(val) 方法用来检测测试数据的数据类型是否为偶数。

#### Parameters

##### val

Type: `Number`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是偶数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
// 或者单独引用 isEven() 方法
// import isEven from '@yaohaixiao/types.js/isEven'

Types.isEven(2) // -> true
Types.isEven(3) // -> false
Types.isEven(2.2) // -> false
```


### [isOdd](https://yaohaixiao.github.io/types.js/#method-isOdd)

isOdd(val) 方法用来检测测试数据的数据类型是否为奇数。

#### Parameters

##### val

Type: `Number`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是奇数返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isInfinite](https://yaohaixiao.github.io/types.js/#method-isInfinite)

isInfinite(val) 方法用来检测测试数据的数据是正无穷或者负无穷。

#### Parameters

##### val

Type: `Number`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是正无穷或者负无穷返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
// 或者单独引用 isInfinite() 方法
// import isInfinite from '@yaohaixiao/types.js/isInfinite'

Types.isInfinite(2.4) // -> false

Types.isInfinite(Infinity) // -> true
Types.isInfinite(-Infinity) // -> true
```


### [isBase64](https://yaohaixiao.github.io/types.js/#method-isBase64)

isBase64(val) 方法用来检测测试数据是否为一个基于 base64 编码的字符串。

#### Parameters

##### val

Type: `String`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 base64 编码的字符串返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
// 或者单独引用 isBase64() 方法
// import isBase64 from '@yaohaixiao/types.js/isBase64'

Types.isBase64('Z29vZA==') // -> true
Types.isBase64('aXNCYXNlNjQ=2') // -> false
```


### [isBlank](https://yaohaixiao.github.io/types.js/#method-isBlank)

isBlank(val) 方法用来检测测试数据是否只包空格。

#### Parameters

##### val

Type: `String`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 只包含空格返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
// 或者单独引用 isBlank() 方法
// import isBlank from '@yaohaixiao/types.js/isBlank'

Types.isBlank('  ') // -> true
Types.isBlank(new String()) // -> false
Types.isBlank('') // -> true
```


### [isEmpty](https://yaohaixiao.github.io/types.js/#method-isEmpty)

isEmpty(val) 方法用来检测测试数据是否为空字符串。

#### Parameters

##### val

Type: `String`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是空字符串返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
// 或者单独引用 isEmpty() 方法
// import isEmpty from '@yaohaixiao/types.js/isEmpty'

Types.isEmpty('') // -> true
Types.isEmpty(String()) // -> true

Types.isEmpty(new String()) // -> false
Types.isEmpty(' ') // -> false
```


### [isHex](https://yaohaixiao.github.io/types.js/#method-isHex)

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
import Types from '@yaohaixiao/types.js/types'
// 或者单独引用 isHex() 方法
// import isHex from '@yaohaixiao/types.js/isHex'

Types.isHex('#ffffff') // -> true
Types.isHex('f3f3f3') // -> true
Types.isHex('#h1f1f1') // -> false
Types.isHex('sdadfa') // -> false
```


### [isHTML](https://yaohaixiao.github.io/types.js/#method-isHTML)

isHTML(val) 方法用来检测测试数据是否为合法的 HTML 代码。

#### Since

0.5.0

#### Parameters

##### val

Type: `String`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

true - 表示检测数据为合法的 HTML 代码，false 则表示不是。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isEmail](https://yaohaixiao.github.io/types.js/#method-isEmail)

isEmail(val) 方法用来检测测试数据是否为合法的 Email 格式。

#### Parameters

##### val

Type: `String`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Boolean 类型返回 true，否则返回 false

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isJSON](https://yaohaixiao.github.io/types.js/#method-isJSON)

isJSON(val) 方法用来检测测试数据是否为 JSON 格式字符串数据。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 JSON 格式字符串数据返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


### [isXML](https://yaohaixiao.github.io/types.js/#method-isXML)

isXML(obj) 方法返回检测数据的是否为 XML 格式数据。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 为 XML 返回 true，否则返回 false。

#### Example

```js
import Types from '@yaohaixiao/types.js/types'
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


## License

[MIT License](http://opensource.org/licenses/mit-license.html)
