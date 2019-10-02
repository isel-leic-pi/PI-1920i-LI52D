

const fs = require('fs')

console.log("Global module code executed")

module.exports = function(path, cb) {
  fs.watch(path, { persistent: true, recursive: true, encoding: 'utf8'}, processFsEvent)

  function processFsEvent(event, file) {
    cb(null, {event: event, file: file })
  }
}
