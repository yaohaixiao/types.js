import _type from './utils/_type'
import typeOfNumber from './utils/typeOfNumber'
import typeOfString from './utils/typeOfString'
import typeOfObject from './utils/typeOfObject'

/**
 * 检测数据类型，返回检测数据类型的字符串
 * ========================================================================
 * @method is
 * @since 0.2.0
 * @category Base
 * @param {*} val - 要检测的任意值
 * @returns {String} 返回确切的数据类型名称
 * @example
 *
 * // 基础值类型
 * is('js') // -> string
 * is(' ') // -> blank
 * is('Z29vZA==') // -> base64
 * is('中国梦') // -> chinese
 * is('type.js@gmail.com') // -> email
 * is('') // -> empty
 * is('3C8021B0-423D-475D-BECF-63ED5ED34563') // -> guid
 * is('3C8021B0423D475DBECF63ED5ED34563') // -> guid
 * is('#ffffff') // -> hex
 * is('<h2>中国梦</h2>') // -> html
 * isIPAddress('126.11.15.255') // -> IP address
 * is('{"prop":"JSON"}') // -> json
 * is('11:23 am') // -> time
 * is('Jul 08 2023') // -> time
 * is(2023) // -> integer
 * is(3.0) // -> integer
 * is(3.01) // -> float
 * is(Infinity) // -> infinite
 * is(true) // -> boolean
 * is(null) // -> null
 * is(Example) // -> undefined
 * is(Symbol()) // -> symbol
 * is(BigInt(42)) // -> bigint
 *
 * // Set/WeakSet/Map/WeakMap
 * is(new Set()) // -> set
 * is(new WeakSet()) // -> weakset
 * is(new Map()) // -> map
 * is(new WeakMap()) // -> weakmap
 *
 * // Object 对象相关
 * is({}) // -> object
 * is(new Object()) // -> object
 * is(Object.prototype) // -> prototype
 * is(XML) // -> xml
 * is(Object.create(null)) // -> object
 * is(new String()) // -> object
 * is(new Number()) // -> object
 * is(new Boolean()) // -> object
 * is(new Error()) // -> error
 * is(new Date()) // -> data
 * is(new RegExp('/s/')) // -> regexp
 * is(/\s+/ig) // -> regexp
 * is(() => {}) // -> function
 * is(args) // -> arguments
 * is(dv) // -> dataview
 * is(document.querySelector('#list')) // -> element
 * is(document.querySelectorAll('.item')) // -> coolection
 * is(document.createTextNode('text')) // -> text
 * is(document.createDocumentFragment()) // -> fragment
 *
 * // Array 相关
 * is([]) // -> array
 * is(new ArrayBuffer(8)) // -> arraybubber
 * is(new Int8Array([])) // -> int8array
 * is(new Int16Array([])) // -> int16array
 * is(new Int32Array([])) // -> int32array
 * is(new Uint8Array([])) // -> uint8array
 * is(new Uint8ClampedArray([])) // -> uint8clampedarray
 * is(new Uint16Array([])) // -> uint16array
 * is(new Uint32Array([])) // -> uint32array
 * is(new Float32Array([])) // -> float32array
 * is(new Float64Array([])) // -> float64array
 * is(new BigInt64Array(64)) // -> bigint64array
 * is(new BigUint64Array(64)) // -> biguint64array
 */
const is = (val) => {
  const type = _type(val)
  let name

  switch (type) {
    case 'number':
      name = typeOfNumber(val)
      break
    case 'string':
      name = typeOfString(val)
      break
    case 'object':
      name = typeOfObject(val)
      break
    default:
      name = type
      break
  }

  return name
}

export default is
