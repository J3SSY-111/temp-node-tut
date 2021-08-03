/* Built-in Modules 
- OS (Operating system)
- PATH (file path)
- FS (file system)
- HTTP */

// fs sync
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8'); // utf8 es para que node pueda decodificar el codigo (hay muchas maneras de hacerlo, como en meta de html)
const second = readFileSync('./content/second.txt', 'utf8');
// console.log(first, second);

writeFileSync(
'./content/result-sync.txt', 
`Here is the result: ${first}, ${second} `,
{flag: 'a'} // para repetir automaticamente lo que esta dentro de writeFileSync
); // escribe dentro del file lo que querramos si ya el file existe, sino lo crea y lo escribe (como en este caso)
console.log('done with this task');
console.log('starting the next one');
// lo de arriba es lo mismo que 
// const fs = require('fs');
// fs.readFileSync