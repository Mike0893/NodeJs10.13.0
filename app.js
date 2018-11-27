const logger = require('./logger');

const os = require('os');
const fs = require('fs');
const EventEmitter = require('events')
const emitter = new EventEmitter();

var endian = os.endianness();
var freeMemory = os.freemem();
var upTime = os.uptime();

/* console.log(`endian: ${endian}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(`Up Time: ${upTime}`);
 */

fs.readdir('./', (err,file) => {
    console.log(`Current Directory has following files ${file}`);
});

emitter.on('onMessage', (e) => {
    console.log(`Callback Invoked!! by name ${e.name} and ID ${e.id}`);
});

emitter.emit('onMessage',{name: 'mike', id: 0893});



/* console.log(logger);
console.log(module);
 */
/* console.log(logger.msg);
 */
logger.logs("Hello");