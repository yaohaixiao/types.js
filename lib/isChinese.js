!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isChinese=t()}(this,(function(){"use strict";const e="bigint",t="boolean",r="number",a="undefined",o="string",n="symbol",c="object",i="element",b={"[object Null]":"null","[object Set]":"set","[object WeakSet]":"weakset","[object Map]":"map","[object WeakMap]":"weakmap","[object Array]":"array","[object Arguments]":"arguments","[object DataView]":"dataview","[object ArrayBuffer]":"arraybuffer","[object Int8Array]":"int8array","[object Uint8Array]":"uint8array","[object Uint8ClampedArray]":"uint8clampedarray","[object Int16Array]":"int16array","[object Uint16Array]":"uint16array","[object Int32Array]":"int32array","[object Uint32Array]":"uint32array","[object Float32Array]":"float32array","[object Float64Array]":"float64array","[object BigInt64Array]":"bigint64array","[object BigUint64Array]":"biguint64array","[object Object]":c,"[object Boolean]":c,"[object String]":c,"[object Number]":c,"[object Date]":"date","[object Error]":"error","[object DocumentFragment]":"fragment","[object Function]":"function","[object NodeList]":"collection","[object Promise]":"promise","[object RegExp]":"regexp","[object Text]":"text"},u=c=>(c=>{const u=Object.prototype.toString.apply(c),j=typeof c;let s;if(c?.tagName&&1===c.nodeType)s=i;else switch(j){case"bigint":s=e;break;case"string":s=o;break;case"number":s=r;break;case"boolean":s=t;break;case"undefined":s=a;break;case"symbol":s=n;break;default:s=b[u]}return s||u})(c)===o;return(e,t=!0)=>{const r=e=>{const t=e.map((e=>{const t=e[0],r=e[1],a=t.toString(16),o=r.toString(16);return t===r?`\\u{${a}}`:`[\\u{${a}}-\\u{${o}}]`})).join("|");return new RegExp(`^(?:${t})+$`,"u")},a=[[19968,40959],[13312,19903],[131072,173791],[173824,177983],[177984,178207],[178208,183983],[183984,191471],[196608,201551],[201552,205743]];if(!u(e))return!1;if(/\w+/.test(e))return!1;return r(t?a.concat([[65292,65292],[12290,12290],[183,183],[215,215],[8212,8212],[8216,8216],[8217,8217],[8220,8220],[8221,8221],[8230,8230],[12289,12289],[12298,12298],[12299,12299],[12302,12302],[12303,12303],[12304,12304],[12305,12305],[65281,65281],[65288,65288],[65289,65289],[65306,65306],[65307,65307],[65311,65311],[65374,65374],[65072,65103]]):a).test(e)}}));
//# sourceMappingURL=isChinese.js.map