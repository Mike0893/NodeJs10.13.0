const EventEmitter = require('events')

class Logger extends EventEmitter {
        log(message) {
                console.log(`The message to be printed: ${message}`);
                this.emit('OnMessage', {url:'https://mikeworld.com', id:'893'}); 
        }
}

module.exports = Logger;
