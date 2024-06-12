let greet: string = 'hi,\u0020nodejs!'

const user = {
  account:'Johnny Pierce',
  email:'tocehuv@ufe.io'
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
console.log(typeof 0n, typeof undefined, 0xff, 0 === -0)


