let greet: string = 'hi,\u0020nodejs!'

const user = {
  account:'Johnny Pierce',
  email:'tocehuv@ufe.io',
  address:{
    city:'Mauritania'
  }
}

const colors: string[] = ['pink', 'tomato', 'navy']

/**
 * 
 * @param {string} str 
 * @returns {string}
 */
function capitalize(str: string) {
  return str.split(' ').map(s=>s[0].toUpperCase()+s.slice(1)).join(' ')
}

class Complex {
  constructor(private real: number, private imag: number) {}

  abs() {
    return Math.hypot(this.real, this.imag)
  }

  toString() {
    return `${this.real}${this.imag >= 0 ? '+' : ''}${this.imag}i`
  }
}

function closeTo(value: number, other: number) {
  return Math.abs(value-other) <= 0.00001
}

const c = new Complex(0, 0)

console.log(greet)
console.log(`<${user.account}, ${user.email}>`)
console.log(colors)
console.log(capitalize('alexander mills'), new Complex(-3, 6).toString())
console.log(typeof null, c instanceof Complex, void 0)
console.log(Math.PI, '\u{1F603}', typeof .5, typeof 1_918_100)
console.log(10/3, Math.pow(2, 3) === 2**3, Infinity)
console.log(isNaN === Number.isNaN, closeTo(0.1+0.2, 0.3))
console.log(typeof undefined, 0xff, 0 === -0)
console.log('🍍'.length, String.raw`\n\t\r\\\"`)

for(let ch of greet) {
  console.log(ch)
}

const title = (str: string) => str.replace(/([a-z])[a-zA-Z0-9]+\s?/, ch=>ch.toUpperCase())

function css(...args: any[]) {
  console.log(args)
}

console.log(title('jean kelly'))

const width = 980

css(`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body { 
    margin: 0; 
    background-color: ${colors[0]};
  }

  .container { width: ${width}px; }

`)

console.log(typeof Symbol('$'), Symbol('let\'s go!').toString(), Symbol.keyFor(Symbol('@')))

class Dict {
  constructor(private obj: object) {}

  [Symbol.iterator]() {
    const ownKeys = Object.keys(this.obj).filter(k=>this.obj.hasOwnProperty(k))
    const len = ownKeys.length
    let i = 0

    return {
      next: () => {
        const key = ownKeys[i++]
        return {
          done: i > len,
          value: [key, Reflect.get(this.obj, key)] as const
        }
      }
    }
  }
}

user.account = 'Nettie Allen'

for(const [k, v] of new Dict(user)) {
  console.log(`${k} => ${JSON.stringify(v)}`)
}

function dir(obj: object) {
  return Object.keys(obj).filter(k=>obj.hasOwnProperty(k))
}

console.log(dir(globalThis))
console.log(globalThis.fetch, Object.is(globalThis, globalThis.global), typeof globalThis)
console.log(Array.of(5))

