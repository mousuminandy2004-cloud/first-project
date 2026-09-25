// file.js
const fs = require('fs');
// Write file
fs.writeFileSync('test.txt', 'Hello Student! .');
// Read file
const data = fs.readFileSync('test.txt');
console.log(data);