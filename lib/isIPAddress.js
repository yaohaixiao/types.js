!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isIPAddress=t()}(this,(function(){"use strict";const e="bigint",t="boolean",a="number",r="undefined",o="string",n="symbol",b="object",c="element",i={"[object Null]":"null","[object Set]":"set","[object WeakSet]":"weakset","[object Map]":"map","[object WeakMap]":"weakmap","[object Array]":"array","[object Arguments]":"arguments","[object DataView]":"dataview","[object ArrayBuffer]":"arraybuffer","[object Int8Array]":"int8array","[object Uint8Array]":"uint8array","[object Uint8ClampedArray]":"uint8clampedarray","[object Int16Array]":"int16array","[object Uint16Array]":"uint16array","[object Int32Array]":"int32array","[object Uint32Array]":"uint32array","[object Float32Array]":"float32array","[object Float64Array]":"float64array","[object BigInt64Array]":"bigint64array","[object BigUint64Array]":"biguint64array","[object Object]":b,"[object Boolean]":b,"[object String]":b,"[object Number]":b,"[object Date]":"date","[object Error]":"error","[object DocumentFragment]":"fragment","[object Function]":"function","[object NodeList]":"collection","[object Promise]":"promise","[object RegExp]":"regexp","[object Text]":"text"},f=b=>(b=>{const f=Object.prototype.toString.apply(b),d=typeof b;let j;if(b?.tagName&&1===b.nodeType)j=c;else switch(d){case"bigint":j=e;break;case"string":j=o;break;case"number":j=a;break;case"boolean":j=t;break;case"undefined":j=r;break;case"symbol":j=n;break;default:j=i[f]}return j||f})(b)===o;return e=>f(e)&&(/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/.test(e)||/(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]+|::(ffff(:0{1,4})?:)?((25[0-5]|(2[0-4]|1?\d)?\d)\.){3}(25[0-5]|(2[0-4]|1?\d)?\d)|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1?\d)?\d)\.){3}(25[0-5]|(2[0-4]|1?\d)?\d))/.test(e))}));
//# sourceMappingURL=isIPAddress.js.map