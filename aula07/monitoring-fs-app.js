
let path = process.argv[2] || '.'


const mf = require('./monitoring-fs')(path)

mf.on(mf.FS_EVENT, processFsEvent)
mf.on(mf.FS_EVENT, processFsEvent1)



function processFsEvent(err, e) {
    if(err) {
        return console.err(err)
    }
    console.log(`Event ${e.event} on file ${e.file}`)
}

function processFsEvent1(err, e) {
    console.log(`I really don't care about the event details`)
}
