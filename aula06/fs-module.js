let fs = require('fs')


fs.readFile('./fs-module1.js', processFile)


function processFile(err, data) {
  if(err) {
    return console.error(err)
  }
  console.log(data.toString())
}