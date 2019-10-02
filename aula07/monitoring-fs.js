
let path = process.argv[2] || '.'


const fs = require('fs')


fs.watch(path, { persistent: true, recursive: true, encoding: 'utf8'}, processFsEvent)

function processFsEvent(event, file) {
    console.log(`Event ${event} on file ${file}`)
}

//console.log(`Current working directory is ${process.cwd()}`)
console.log(`Program arguments are ${process.argv}`)
console.log(`Waiting for events on ${path}`)