/* Built-in Modules 
- OS (Operating system)
- PATH (file path)
- FS
- HTTP */

// path 
const path = require('path');

console.log(path.sep); // path sep is to seperate documents in a file path

const filePath = path.join('/content', 'subfolder', 'test.txt'); // join is use to show the path of the documents
console.log(filePath);

const base = path.basename(filePath); // basename is the last document in the path
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);