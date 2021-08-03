/* Built-in Modules 
- OS (Operating system)
- PATH (file path)
- FS (file system)
- HTTP */

// OS 
const { write } = require('fs'); // file system (no lo usamos ahora, pero para saber que es)
const os = require('os');

// info about current user
const user = os.userInfo(); // informacion del usuario
console.log(user);

// method returns the system uptiem in seconds
console.log(`The Sytem Uptime is ${os.uptime()} seconds`); // El tiempo que la computadora lleva operando
const currentOS = {
    name: os.type(), // El nombre del sistema operativo
    release: os.release(), // El release del sistema operativo
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);