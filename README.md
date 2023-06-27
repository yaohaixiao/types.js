# Types.js

[![npm version](https://img.shields.io/npm/v/@yaohaixiao/types.js)](https://www.npmjs.com/package/@yaohaixiao/types.js)
[![Github file size](https://img.shields.io/github/size/yaohaixiao/types.js/types.min.js.svg)](https://github.com/yaohaixiao/types.js/blob/master/types.min.js)
[![prettier code style](https://img.shields.io/badge/code_style-prettier-07b759.svg)](https://prettier.io)
[![Coverage](https://codecov.io/gh/yaohaixiao/types.js/branch/main/graph/badge.svg)](https://codecov.io/gh/yaohaixiao/types.js)
[![npm downloads](https://img.shields.io/npm/dm/@yaohaixiao/types.js)](https://npmcharts.com/compare/@yaohaixiao/types.js?minimal=true)
[![MIT License](https://img.shields.io/github/license/yaohaixiao/types.js.svg)](https://github.com/yaohaixiao/types.js/blob/master/LICENSE)

Types.js 专注于检测 JavaScript 数据类型的工具库。

## 项目初衷

编写 types.js 主要是为初学 JavaScript 的朋友了解在 JavaScript 如何进行数据类型检测。当然，types.js 也完全可以胜任在实际产品开发的应用。

## 特点

- 支持 UMD 规范，同时也提供 ES6 模块调用；
- 支持创建和绑定自定义事件，并且可以手动触发自定义事件；
- 原生 JavaScript 编写，无任何依赖；
- 采用 jQuery 链式调用语法，调用语法简洁方便；
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
```

### Node.js 中调用

```js
const Types = require('@yaohaixiao/types.js')
```

### ES6 模块中调用

```js
// 调用 Types 对象
import Types from '@yaohaixiao/types.js/esm/types'

// 调用特定方法
import isArray from '@yaohaixiao/types.js/esm/isArray'

Types.is([]) // -> array
isArray([]) // -> true
```


## [API Documentation](https://yaohaixiao.github.io/types.js/)


### [is(val)](https://yaohaixiao.github.io/types.js/#is)

is(val) 方法返回检测数据的数据类型字符串：

* 'array' - 数组
* 'arraybuffer' - 固定长度的二进制数据缓冲区
* 'arguments' - （函数的）参数对象
* 'int8array' - int8array 数组
* 'uint8array' - uint8array 数组
* 'uint8clampedarray' - uint8clampedarray 数组
* 'int16array' - int16array 数组
* 'uint16array' - uint16array 数组
* 'int32array' - int32array 数组
* 'uint32array' - uint32array 数组
* 'float32array' - float32array 数组
* 'float64array' - float64array 数组
* 'boolean' - 布尔值
* 'map' - Map
* 'null' - 空值
* 'undefined' - 未定义
* 'number' - 数字
* 'set' - Set
* 'string' - 字符串
* 'object' - 对象
* 'dataview' - DataView 视图
* 'date' - 日期
* 'error' - 错误
* 'collection' - HTML NodeList 对象
* 'function' - 函数
* 'element' - HTML 元素节点
* 'text' - HTML 文本节点
* 'regexp' - 正则表达式对象
* 'weakmap' - WeakMap
* 'weakset' - WeakSet
* 'whitespace' - 空字符串

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

#### Example

```js
var CustomizeObject;

Types.is(null); // -> 'null'
Types.is(1); // -> 'number'
Types.is('robert'); // -> 'string'
Types.is(false); // -> 'boolean'
Types.is(CustomizeObject); // -> 'undefined'
Types.is(function(){}); // -> 'function'
Types.is(new Date()); // -> 'date'
Types.is(new Error('THIS IS NEW ERROR')); // -> 'error'
Types.is(/s+/g); // -> 'regexp'
Types.is({}); // -> 'object'
Types.is([1, 2, 3, 4, 5]); // -> 'array'
Types.is(Symbol()); // -> 'symbol'
Types.is(new ArrayBuffer(8)); // -> 'arraybuffer'

function sum (a, b){
    Types.is(arguments);
    return a + b;
}
sum( 5, 6 );

// 请在浏览器环境中测试 DOM 相关数据
Types.is(document.getElementById('body')); // -> 'element'
Types.is(document.createTextNode('')); // -> 'whitespace'
Types.is(document.createTextNode('text')); // -> 'textnode'
Types.is(document.getElementsByTagName('script')); // -> 'collection'
```

### [isArray](https://yaohaixiao.github.io/types.js/#isArray)

isArray ( val ) 方法用来检测测试数据的数据类型是否为 Array （数组）类型。

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
// True
Types.isArray([]); // -> true
Types.isArray(new Array()); // -> true
Types.isArray('this is string could split it into array'.split(' ')); // -> true

// False
// 虽然 HTMLNodeList 的看起来像数组，但它并不是数组
Types.isArray(document.getElementsByTagName('li')); // -> false
// arguments 对象看起来也像数组，但是它也不是数组
function sum (a, b){
    console.log(Types.isArray(arguments)); // -> false
    return a + b;
}
sum( 5, 6 );
Types.isArray({0:1,1:2}); // -> false
Types.isArray( new Int8Array() ); // -> false
```

### [isArrayLike](https://yaohaixiao.github.io/types.js/#isArrayLike)

isArrayLike ( val ) 方法用来检测测试数据的数据类型是否为类似数组（array、arguments 对象或者 HTMLNodeList 对象）类型。

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
Types.isArrayLike([1, 2, 3, 4, 5]); // -> true

// HTMLNodeList 是类似数组类型的数据
Types.isArrayLike(document.getElementsByTagName('li')); // -> true

// arguments 对象也是类似数组类型的数据
function sum(a, b){
    Types.isArrayLike(arguments); // -> true
    return a + b;
}
sum(5, 6);

Types.isArrayLike( new Int8Array() ); // -> false
```

### [isArguments](https://yaohaixiao.github.io/types.js/#isArguments)

isArguments ( val ) 方法用来检测测试数据是否为 arguments 对象。

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
Types.isArguments([]); // -> false

function test(){
    Types.isArguments(arguments); // -> true
}
test();
```

### [isArrayBuffer](https://yaohaixiao.github.io/types.js/#isArrayBuffer)

isArrayBuffer ( val ) 方法用来检测测试数据是否为 ArrayBuffer 类型。

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
Types.isArrayBuffer([]); // -> false
Types.isArrayBuffer(new ArrayBuffer(8)); // -> true
```


### [isInt8Array](https://yaohaixiao.github.io/types.js/#isInt8Array)

isInt8Array ( val )方法用来检测测试数据是否为 Int8Array 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Int8Array 类型返回 true，否则返回 false。

#### Example

```js
Types.isInt8Array( numbers ); // -> false

function test(){
    Types.isInt8Array( arguments );
}
test(); // -> false

Types.isInt8Array( new Int8Array() ); // -> true
```

### [isUint8Array](https://yaohaixiao.github.io/types.js/#isUint8Array)

isUint8Array ( val )方法用来检测测试数据是否为 Uint8Array 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Uint8Array 类型返回 true，否则返回 false。

#### Example

```js
Types.isUint8Array( numbers ); // -> false

function test(){
    Types.isUint8Array( arguments );
}
test(); // -> false

Types.isInt8Array( new Uint8Array() ); // -> true
```

### [isUint8ClampedArray](https://yaohaixiao.github.io/types.js/#isUint8ClampedArray)

isUint8ClampedArray ( val )方法用来检测测试数据是否为 Uint8ClampedArray 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Uint8ClampedArray 类型返回 true，否则返回 false。

#### Example

```js
Types.isUint8ClampedArray( numbers ); // -> false

function test(){
    Types.isUint8ClampedArray( arguments );
}
test(); // -> false

Types.isUint8ClampedArray( new Uint8ClampedArray() ); // -> true
```

### [isInt16Array](https://yaohaixiao.github.io/types.js/#isInt16Array)

isInt16Array ( val )方法用来检测测试数据是否为 Int16Array 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Int16Array 类型返回 true，否则返回 false。

#### Example

```js
Types.isInt16Array( numbers ); // -> false

function test(){
    Types.isInt16Array( arguments );
}
test(); // -> false

Types.isInt16Array( new Int16Array() ); // -> true
```

### [isUint16Array](https://yaohaixiao.github.io/types.js/#isUint16Array)

isUint16Array ( val )方法用来检测测试数据是否为 Uint16Array 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Uint16Array 类型返回 true，否则返回 false。

#### Example

```js
Types.isUint16Array( numbers ); // -> false

function test(){
    Types.isUint16Array( arguments );
}
test(); // -> false

Types.isUint16Array( new Uint16Array() ); // -> true
```

### [isInt32Array](https://yaohaixiao.github.io/types.js/#isInt32Array)

isInt32Array ( val )方法用来检测测试数据是否为 Int32Array 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Int32Array 类型返回 true，否则返回 false。

#### Example

```js
Types.isInt32Array( numbers ); // -> false

function test(){
    Types.isInt32Array( arguments );
}
test(); // -> false

Types.isInt32Array( new Int32Array() ); // -> true
```

### [isUint32Array](https://yaohaixiao.github.io/types.js/#isUint32Array)

isUint32Array ( val )方法用来检测测试数据是否为 Uint32Array 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Uint32Array 类型返回 true，否则返回 false。

#### Example

```js
Types.isUint32Array( numbers ); // -> false

function test(){
    Types.isUint32Array( arguments );
}
test(); // -> false

Types.isUint32Array( new Uint32Array() ); // -> true
```

### [isFloat32Array](https://yaohaixiao.github.io/types.js/#isFloat32Array)

isFloat32Array ( val )方法用来检测测试数据是否为 Float32Array 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Float32Array 类型返回 true，否则返回 false。

#### Example

```js
Types.isFloat32Array( numbers ); // -> false

function test(){
    Types.isFloat32Array( arguments );
}
test(); // -> false

Types.isFloat32Array( new Float32Array() ); // -> true
```

### [isFloat64Array](https://yaohaixiao.github.io/types.js/#isFloat64Array)

isFloat64Array ( val )方法用来检测测试数据是否为 Float64Array 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 Float64Array 类型返回 true，否则返回 false。

#### Example

```js
Types.isFloat64Array( numbers ); // -> false

function test(){
    Types.isFloat64Array( arguments );
}
test(); // -> false

Types.isFloat64Array( new Float64Array() ); // -> true
```

### [isBase64](https://yaohaixiao.github.io/types.js/#isBase64)

isBase64 ( val )方法用来检测测试数据是否为一个基于 base64 编码的字符串。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 base64 编码的字符串返回 true，否则返回 false。

#### Example

```js
Types.isBase64('a2V5MT12YWx1ZTEma2V5Mj12YWx1ZTI'); // -> true
Types.isBase64('asdadf'); // -> false
```

### [isBlank](https://yaohaixiao.github.io/types.js/#isBlank)

isBlank ( val )方法用来检测测试数据是否只包空格。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 只包含空格返回 true，否则返回 false。

#### Example

```js
Types.isBlank('  '); // -> true
Types.isBlank(new String()); // -> false
Types.isBlank(''); // -> true
```

### [isBoolean](https://yaohaixiao.github.io/types.js/#isBoolean)

isBoolean ( obj )方法用来检测测试数据是否为 Boolean 类型

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
var projects;

Types.isBoolean(!!0); // -> true
Types.isBoolean(1); // -> false
Types.isBoolean(false); // -> true
Types.isBoolean(true); // -> true
Types.isBoolean(Boolean('1')); // -> true
Types.isBoolean(new Boolean('')); // -> false
Types.isBoolean(''); // -> false
Types.isBoolean(null); // -> false
Types.isBoolean(NaN); // -> false
Types.isBoolean(projects); // -> false
```

### [isConstructor](https://yaohaixiao.github.io/types.js/#isConstructor)

isConstructor ( fn ) 方法用来检测测试函数是否为构造函数

#### Parameters

##### val

Type: `Function`

必选，要测试的（构造）函数。

#### Returns

Type: `Boolean`

fn 是构造函数返回 true，否则返回 false。

#### Example

```js
var fn = function(){};
var ff = class {};
var f = () => console.log('no constructable');

Types.isConstructor(fn); // -> true
Types.isConstructor(ff); // -> true
Types.isConstructor(f); // -> false
Types.isConstructor(Math); // -> false
Types.isConstructor(Boolean); // -> true
Types.isConstructor(Array); // -> true
Types.isConstructor(Function); // -> true
Types.isConstructor(Date); // -> true
Types.isConstructor(RegExp); // -> true
Types.isConstructor(Object); // -> true
```

### [isDataView](https://yaohaixiao.github.io/types.js/#isDataView)

isDataView ( val ) 方法用来检测测试数据是否为 DataView 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 DataView 类型返回 true，否则返回 false

#### Example

```js
var buffer = new ArrayBuffer(8);
var dv = new DataView(buffer);

Types.isDataView(buffer); // -> false
Types.isDataView(dv); // -> true
```

### [isDate](https://yaohaixiao.github.io/types.js/#isDate)

isDate ( val )方法用来检测测试数据的数据类型是否为 Date 类型。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 为 Date 类型返回 true，否则返回 false

#### Example

```js
var time = new Date();

Types.isDate(time); // -> true
Types.isDate('2017-07-06'); // -> false
Types.isDate(time.getFullYear()); // -> false
```

### [isElement](https://yaohaixiao.github.io/types.js/#isElement)

isElement ( val )方法用来检测测试数据的数据类型是否为 HTML 元素节点。

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
var wrap = document.createElement('div');
var text = document.createTextNode('this is a text node.');

Types.isElement(wrap); // -> true
Types.isElement(text); // -> false
```

### [isEmpty](https://yaohaixiao.github.io/types.js/#isEmpty)

isEmpty ( val )方法用来检测测试数据是否为空字符串。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是空字符串返回 true，否则返回 false。

#### Example

```js
Types.isEmpty(''); // -> true
Types.isEmpty(String()); // -> true
Types.isEmpty(new String()); // -> false
Types.isEmpty(' '); // -> false
```

### [isEmptyObject](https://yaohaixiao.github.io/types.js/#isEmptyObject)

isEmptyObject ( val )方法用来检测测试数据是否为空（单体）对象。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是空对象返回 true，否则返回 false。

#### Example

```js
function Person(name,age){
   this.name = name;
   this.age = age;
}

Types.isEmptyObject({}); // -> true
Types.isEmptyObject([]); // true
Types.isEmptyObject(Person); // true
Types.isEmptyObject(new Object()); // true
Types.isEmptyObject(new Boolean()); // true
Types.isEmptyObject(new Function('alert(\'function\')')); // true
Types.isEmptyObject(new Array()); // true
Types.isEmptyObject(new Date('2017-12-11')); // true
Types.isEmptyObject(new RegExp('\s+','ig')); // true
Types.isEmptyObject(null); // true
Types.isEmptyObject(new String()); // true
Types.isEmptyObject(new String('string')); // false
Types.isEmptyObject({name:'robert'}); // -> false
Types.isEmptyObject(new Person('robert',30)); // false
Types.isEmptyObject(['']); // false
```

### [isError](https://yaohaixiao.github.io/types.js/#isError)

isError ( val )方法用来检测测试数据是否为 Error 类型。

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
Types.isError({}); // -> false
Types.isError(new Error()); // -> true
```

### [isEven](https://yaohaixiao.github.io/types.js/#isEven)

isEven ( val )方法用来检测测试数据的数据类型是否为偶数。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是偶数返回 true，否则返回 false。

#### Example

```js
Types.isEven(2); // -> true
Types.isEven(3); // -> false
Types.isEven(2.2); // -> false
```

### [isFloat](https://yaohaixiao.github.io/types.js/#isFloat)

isFloat ( val )方法用来检测测试数据是否为浮点数。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是浮点数返回 true，否则返回 false。

#### Example

```js
Types.isFloat(2.4); // -> true
Types.isFloat(Number("3.4556645445E7")); // -> true
Types.isFloat(Number("3.4556645445E10")); // -> false
Types.isFloat(2); // -> false
Types.isFloat(0xffffff); // -> false
Types.isFloat(NaN); // -> false
```

### [isFunction](https://yaohaixiao.github.io/types.js/#isFunction)

isFunction ( val )方法用来检测测试数据是否为 Function 类型。

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
Types.isFunction(function empty(){}); // -> true
Types.isFunction(parseInt); // -> true
Types.isFunction(Array); // -> true
Types.isFunction(Boolean); // -> true
Types.isFunction(Date); // -> true
Types.isFunction(Math); // -> false
Types.isFunction(Number); // -> true
Types.isFunction(Object); // -> true
Types.isFunction(RegExp); // -> true
Types.isFunction(String); // -> true
```

### [isHash](https://yaohaixiao.github.io/types.js/#isHash)

isHash ( val ) 方法用来检测测试数据是普通对象（它是方法 [isPlainObject](https://yaohaixiao.github.io/types.js/#isPlainObject) 的别名）。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是普通对象返回 true，否则返回 false。

#### Example

```js
Types.isHash({}); // -> true
Types.isHash(Object.create(null)); // -> true
Types.isHash(function empty(){}); // -> false
Types.isHash([]); // -> false
Types.isHash(null); // -> false
Types.isHash(document.getElementById('wrap')); // -> false
```

### [isHex](https://yaohaixiao.github.io/types.js/#isHex)

isHex ( val )方法用来检测测试数据是否为 16 进制编码的字符串。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是 16 进制编码的字符串返回 true，否则返回 false。

#### Example

```js
Types.isHex('#ffffff'); // -> true
Types.isHex('f3f3f3'); // -> true
Types.isHex('#h1f1f1'); // -> false
Types.isHex('sdadfa'); // -> false
```

### [isHTMLCollection](https://yaohaixiao.github.io/types.js/#isHTMLCollection)

isHTMLCollection ( val )方法用来检测数据的是否为 HTMLNodeList 对象。

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
Types.isHTMLCollection(document.getElementById('isJSON')); // -> false
Types.isHTMLCollection(document.getElementsByTagName('li')); // -> true
```

### [isInfinite](https://yaohaixiao.github.io/types.js/#isInfinite)

isInfinite ( val ) 方法用来检测测试数据的数据是正无穷或者负无穷。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是正无穷或者负无穷返回 true，否则返回 false。

#### Example

```js
Types.isInfinite(2.4); // -> false
Types.isInfinite(Infinity); // -> true
```

### [isInteger](https://yaohaixiao.github.io/types.js/#isInteger)

isInteger ( val )方法用来检测测试数据是否为整数。

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
Types.isInteger(2.4); // -> false
Types.isInteger(2); // -> true
Types.isInteger(0xffffff); // -> true
Types.isInteger(NaN); // -> false
Types.isInteger(Number("3.4556645445E7")); // -> false
```

### [isJSON](https://yaohaixiao.github.io/types.js/#isJSON)

isJSON ( val )方法用来检测测试数据是否为 JSON 格式字符串数据。

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
Types.isJSON("\"this is a JSON string.\""); // -> true
Types.isJSON("[\"1\",\"2\",3]"); // -> true
Types.isJSON("3"); // -> true
Types.isJSON("{\"prop\":\"JSON\"}"); // -> true
Types.isJSON({prop:'JSON'}); // -> false
Types.isJSON("{prop:'JSON'}"); // -> false
```

### [isMap](https://yaohaixiao.github.io/types.js/#isMap)

isMap ( val )方法用来检测测试数据是否为 Map 类型。

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
var map = new Map([
    ['name', 'Robert'],
    ['Gender', 'Male']
]);

Types.is(map) // -> 'map'

Types.isMap(map); // -> true
Types.isMap(['name','robert']) // -> false
```

### [isNativeFunction](https://yaohaixiao.github.io/types.js/#isNativeFunction)

isNativeFunction ( fn ) 方法用来检测测试函数是否为系统内置函数

#### Parameters

##### val

Type: `Function`

必选，要测试的函数。

#### Returns

Type: `Boolean`

fn 是系统内置函数返回 true，否则返回 false。

#### Example

```js
var fn = function(){};
var ff = class {};
var f = () => console.log('no constructable');

Types.isNativeFunction(fn); // -> false
Types.isNativeFunction(ff); // -> false
Types.isNativeFunction(f); // -> false
Types.isNativeFunction(Math); // -> true
Types.isNativeFunction(Boolean); // -> true
Types.isNativeFunction(Array); // -> true
Types.isNativeFunction(Function); // -> true
Types.isNativeFunction(Date); // -> true
Types.isNativeFunction(RegExp); // -> true
Types.isNativeFunction(Object); // -> true
```

### [isNull](https://yaohaixiao.github.io/types.js/#isNull)

isNull ( val )方法用来检测测试数据是否为 null。

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
var projects;
Types.isNull(null); // -> true
Types.isNull({}); // -> false
Types.isNull(projects); // -> false
```

### [isNumber](https://yaohaixiao.github.io/types.js/#isNumber)

isNumber ( obj )方法用来检测测试数据是否为 Number 类型。

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
Types.isNumber(2); // -> true
Types.isNumber(2.4); // -> true
Types.isNumber(0xffffff); // -> true
Types.isNumber(NaN); // -> true
Types.isNumber('33'); // -> false
```

### [isNumeric](https://yaohaixiao.github.io/types.js/#isNumeric)

isNumeric ( val )方法用来检测测试数据是否是一个数字（只能是 number 类型或者 '123123' 这样的数字字符串）。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是一个数字返回 true，否则返回false。

#### Example

```js
Types.isNumeric(2); // -> true
Types.isNumeric(2.4); // -> true
Types.isNumeric(0xffffff); // -> true
Types.isNumeric('33'); // -> true
Types.isNumeric('0xffffff'); // -> true
Types.isNumeric(NaN); // -> false
```

### [isObject](https://yaohaixiao.github.io/types.js/#isObject)

isObject ( val )方法用来检测测试数据是否为对象。使用 isObject() 方法测试单体对象和函数都返回值都是 true。

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
// True
Types.isObject(function empty(){}); // -> true
Types.isObject({}); // -> true
Types.isObject(Object.create(null)); // -> true
Types.isObject(Object.create({})); // -> true
Types.isObject(new Function()); // -> true

// False
Types.isObject([]); // -> false
Types.isObject(null); // -> false
Types.isObject(document.getElementById('wrap')); // -> false
```

### [isOdd](https://yaohaixiao.github.io/types.js/#isOdd)

isOdd ( val )方法用来检测测试数据的数据类型是否为奇数。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是奇数返回 true，否则返回 false。

#### Example

```js
Types.isOdd(3); // -> true
Types.isOdd(2); // -> false
Types.isOdd(3.1); // -> false
```

### [isPlainObject](https://yaohaixiao.github.io/types.js/#isPlainObject)

isPlainObject ( val )方法用来检测测试数据是否为普通对象。

#### Parameters

##### val

Type: `Any`
Default: ``

必选，要检测的数据。

#### Returns

Type: `Boolean`

'val' 是普通对象返回 true，否则返回 false。

#### Example

```js
Types.isPlainObject({}); // -> true
Types.isPlainObject(Object.create(null)); // -> true
Types.isPlainObject(function empty(){}); // -> false
Types.isPlainObject([]); // -> false
Types.isPlainObject(null); // -> false
Types.isPlainObject(document.getElementById('wrap')); // -> false
```

### [isRegExp](https://yaohaixiao.github.io/types.js/#isRegExp)

isRegExp ( val )方法用来检测测试数据是否为正则表达式。

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
Types.isRegExp(new RegExp('\s+','ig')); // -> true
Types.isRegExp(/\s+/ig); // -> true
```

### [isSet](https://yaohaixiao.github.io/types.js/#isSet)

isSet ( val )方法用来检测测试数据是否为 isSet 类型。

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
var mySet = new Set([1,2,3,4]);

Types.is(mySet) // -> 'set'

Types.isSet(mySet); // -> true
Types.isSet([1,2,3,4]) // -> false
```

### [isString](https://yaohaixiao.github.io/types.js/#isString)

isString ( val )方法用来检测测试数据是否为字符串。

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
Types.isString('string'); // -> true
Types.isString(String('string')); // -> true
Types.isString(new String('string')); // -> false
```

### [isSymbol](https://yaohaixiao.github.io/types.js/#isSymbol)

isSymbol ( val )方法用来检测测试数据是否为 Symbol 类型。

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
var sym = Symbol('foo');
var symObj = Object(sym);

Types.is(sym) // -> 'symbol'
Types.isSymbol(sym); // -> true

Types.is(symObj) // -> 'object'
Types.isSymbol(symObj); // -> false
```

### [isTextNode](https://yaohaixiao.github.io/types.js/#isTextNode)

isTextNode ( val )方法用来检测测试数据是否为文本节点。

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
Types.isTextNode(document.createElement('p')); // -> false
Types.isTextNode(document.createTextNode('p')); // -> true
```

### [isUndefined](https://yaohaixiao.github.io/types.js/#isUndefined)

isUndefined ( val )方法用来检测测试数据是否 undefined（未定义）。

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
var projects;

Types.isUndefined(projects); // -> true
Types.isUndefined([]); // -> false
Types.isUndefined(''); // -> false
Types.isUndefined(0); // -> false
Types.isUndefined(NaN); // -> false
Types.isUndefined({}); // -> false
```

### [isValue](https://yaohaixiao.github.io/types.js/#isValue)

isValue ( val )方法用来检测测试数据是否为有效的数据。

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
var projects;

Types.isValue(projects); // -> false
Types.isValue(function empty(){}); // -> true
Types.isValue(/\s+/ig); // -> true
Types.isValue([]); // -> true
Types.isValue(''); // -> true
Types.isValue(0); // -> true
Types.isValue(NaN); // -> false
Types.isValue( null ); // -> false
Types.isValue({}); // -> true
```

### [isWeakMap](https://yaohaixiao.github.io/types.js/#isWeakMap)

isWeakMap ( val )方法用来检测测试数据是否为 WeakMap 类型。

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
var map = new Map([
    ['name', 'Robert'],
    ['Gender', 'Male']
]);

var weakmap = new WeakMap({},'Robert');

Types.is(weakmap); // -> 'weakmap'

Types.isWeakMap(weakmap); // -> true
Types.isWeakMap(map); // -> false
```

### [isWeakSet](https://yaohaixiao.github.io/types.js/#isWeakSet)

isWeakSet ( val )方法用来检测测试数据是否为 WeakSet 类型。

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
var weakset = new WeakSet([
    {'name': 'Robert'},
    window
]);

var set = new Set([1,2,3]);

Types.is(weakset) // -> 'weakset'

Types.isWeakSet(weakset); // -> true
Types.isWeakSet(set) // -> false
```

### [isXML](https://yaohaixiao.github.io/types.js/#isXML)

isValue ( obj )方法返回检测数据的是否为 XML 格式数据。

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
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const DOMParser = require('xmldom').DOMParser;
const HTMLDOM = new JSDOM('<html><head><title>isXML</title></head><body><p>p1</p><p>p2</p><p>p3</p></body></html>');
const XMLDOM = new DOMParser().parseFromString(
    '<xml xmlns="a" xmlns:c="./lite">\n'+
        '\t<child>test</child>\n'+
        '\t<child></child>\n'+
        '\t<child/>\n'+
    '</xml>','text/xml');

Types.isXML(XMLDOM); // -> true
Types.isXML(HTMLDOM); // -> false
```


## License

[MIT License](http://opensource.org/licenses/mit-license.html)
