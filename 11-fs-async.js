/* Built-in Modules 
- OS (Operating system)
- PATH (file path)
- FS (file system)
- HTTP */

// fs async
const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', 
        `Here is the result: ${first}, ${second}`,
        (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(`done with this task`);
        })
    })
}) // si no ponemos el utf nos salta un buffer
console.log(`starting next task`);