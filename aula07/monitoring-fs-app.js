
let path = process.argv[2] || '.'


const mf = require('./monitoring-fs')

mf.watch(path, processFsEvent)


function processFsEvent(err, e) {
    if(err) {
        return console.err(err)
    }
    console.log(`Event ${e.event} on file ${e.file}`)
}
