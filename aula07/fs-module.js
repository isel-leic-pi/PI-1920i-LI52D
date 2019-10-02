let fs = require('fs')


fs.readFile('./fs-module.js', processFile)

let fileContent = undefined;

function processFile(err, data) {
  if(err) {
    return console.error(err)
  }
  fileContent = data;
}

setTimeout(processFileContentIfAlreadyPresent, 0)

function processFileContentIfAlreadyPresent() {
  if(fileContent != undefined) {
    return console.log(`File content is ${fileContent}`)
  }
  console.log("File data not available yet. wait some more time...")

  setTimeout(processFileContentIfAlreadyPresent, 0)  
}


