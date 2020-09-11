const EventEmitter = require('events')
const uuid = require('uuid')

console.log(uuid.v4())

class Logger extends EventEmitter{
    log(msg){
        this.emit('message', {id:uuid.v4(), msg})
    }
}

// module.exports=Logger

const logger = new Logger()

logger.on('message', (data) => console.log("Called listener: ", data))

logger.log('hello world')
logger.log('second msg')
logger.log('third msg')
