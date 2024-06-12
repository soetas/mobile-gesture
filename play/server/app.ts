import { cpus, totalmem, freemem } from 'node:os'
import { createServer } from 'node:http'

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
