import { cpus, totalmem, freemem } from 'node:os'
import { createServer, type IncomingMessage, ServerResponse } from 'node:http'
import history from 'connect-history-api-fallback'
import { createProxyMiddleware } from 'http-proxy-middleware'
import qs from 'node:querystring'
import uiExpress from 'swagger-ui-express'
import jsDoc from 'swagger-jsdoc'

type Middleware = 
  Bottle | 
  ((req:IncomingMessage, res:ServerResponse)=>void) |
  ((req:IncomingMessage, res:ServerResponse, next:()=>void)=>void) |
  ((error:Error|null, req:IncomingMessage, res:ServerResponse, next:()=>void)=>void)

type Handler = (req:IncomingMessage, res:ServerResponse)=>void

interface PropsWithChildren {
  children:unknown
}

interface CardProps extends PropsWithChildren {
  round: boolean
  width: number

}

class Complex {
  static readonly precision = 5

  private real: number
  protected imag: number

}

class Ref<T> {
  constructor(private originValue:T) {}

  get value() {
    return this.originValue
  }

  set value(newValue:T) {
    this.originValue = newValue
  }
}

interface Component {}

abstract class Widget {
  abstract display: string

  abstract layout():void
  abstract paint():void
}

class Button extends Widget implements Component {
  display: string

  override layout(): void {
    throw new Error('Method not implemented.')
  }
  
  override paint(): void {
    throw new Error('Method not implemented.')
  }  
}

class Dict<K extends string|symbol, V> {
  constructor(pairs: [K, V][]) {}

  keys(): K[] {
    return []
  }

  values(): V[] {
    return []
  }

  items(): [K, V][] {
    return []
  }
}


interface StaticFilesOptions {
  extensions?:string[]
}

function logger(): Middleware {
  return (req, res, next)=>{
    next()
  }
}

function staticFiles(root: string, opt?: StaticFilesOptions): Middleware {
  return (req, res, next)=>{
    next()
  }
}

class Bottle {
  private middlewares: Middleware[] = []
  private app = createServer((req, res)=>{
    const searchParams = req.url!.slice(req.url!.indexOf('?')+1)
  
    req['params'] = {}
    req['query'] = qs.parse(searchParams)
    req['body'] = {}

    res['send'] = ()=>{}
    res['json'] = ()=>{}
  })

  static createRouter() {
    return new Bottle()
  }

  use(middleware: Middleware): void
  use(url: string, middleware: Middleware): void
  use(urlOrMiddleware: string|Middleware, middleware?: Middleware) {

  }

  get(url: string, handler: Handler): void
  get(url: string, middlewares: Middleware[], handler: Handler): void
  get(url: string, middlewaresOrHandler: Middleware[]|Handler, handler?: Handler) {

  }

  post() {}

  all(url: string, handler: Handler) {}

  listenAndServe(address: string, callback?: ()=>void) {
    const [ host, port ] = address.split(/:/)

    this.app.listen(parseInt(port), host, callback)
  }
}

const app = new Bottle()

app.use(logger())
app.use(staticFiles('', {
  extensions:[]
}))


const apiRouter = Bottle.createRouter()

app.use('/api', apiRouter)

app.use((err, req, res, next)=>{
  if(err) {
    res.statusCode = 500
    res.end(err.message)
  }
})

app.listenAndServe('0.0.0.0:8080', ()=>{

})
