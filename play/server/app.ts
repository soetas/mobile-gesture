import { cpus, totalmem, freemem } from 'node:os'
import { createServer } from 'node:http'
import history from 'connect-history-api-fallback'
import { createProxyMiddleware } from 'http-proxy-middleware'

// libuv 
class Bottle {
  private app = createServer((req, res)=>{

  })

  listenAndServe(address: string, callback?: ()=>void) {
    const [ host, port ] = address.split(/:/)

    this.app.listen(parseInt(port), host, callback)
  }
}


const app = new Bottle()

app.listenAndServe('0.0.0.0:8080')
