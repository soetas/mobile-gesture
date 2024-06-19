import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
import minimist from 'minimist'
import esbuild from 'esbuild'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename) || resolve(import.meta.dirname, '..')

const require = createRequire(import.meta.url)

const args = minimist(process.argv.slice(2))

const ReactiveFlag = {
  IS_REACTIVE: Symbol('__v_isReactive')

}

const utils = {
  reactive(target: object) {
    const proxyObj = new Proxy(target, {
      get(target, p, receiver) {
        if(p === ReactiveFlag.IS_REACTIVE) {
          return true
        }
      },
      set(target, p, newValue, receiver) {
        return true  
      },
    })

    return proxyObj
  }
}

async function build() {
  try {
    const buildContext = await esbuild.context({
      entryPoints:[],
      outfile:'',
      bundle:true,
      platform:'browser',
      sourcemap:true,
      format:'iife',
      globalName:'',
    })
  
    await buildContext.watch()

  } catch {

  }

}
