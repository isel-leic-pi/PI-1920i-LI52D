let fs = require('fs')


fs.readFile('./fs-module.js', processFile)

let fileContent = undefined;

function processFile(err, data) {
  if(err) {
    return console.error(err)
  }
  fileContent = data;
}

while(fileContent == undefined) {
  console.log("Waiting for file read")
}

console.log(`File content is ${fileContent}`)