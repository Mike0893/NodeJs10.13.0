const Logger = require('./logger');

const logger = new Logger();
/* const os = require('os');
const fs = require('fs');
const EventEmitter = require('events')
const emitter = new EventEmitter();

var endian = os.endianness();
var freeMemory = os.freemem();
var upTime = os.uptime(); */

/* console.log(`endian: ${endian}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(`Up Time: ${upTime}`);
 */

/* fs.readdir('./', (err,file) => {
    console.log(`Current Directory has following files ${file}`);
});
 */
logger.on('OnMessage', (e) => {
    console.log(`Logged to by url ${e.url} and ID ${e.id}`);
});

//emitter.emit('onMessage',{name: 'mike', id: 0893});



/* console.log(logger);
console.log(module);
 */
/* console.log(logger.msg);
 */
logger.log("Hello");