

const fs = require('fs')
const EventEmitter = require('events')

console.log("Global module code executed")

function MonitoringFs(path) {
  this.FS_EVENT = 'fs-event'

  
  fs.watch(path, 
    { persistent: true, recursive: true, encoding: 'utf8'}, 
    (event, file) => processFsEvent.call(this, event, file))
  
    function processFsEvent(event, file) {
      this.emit(this.FS_EVENT, null, {event: event, file: file })
  }
    
  // The previous code is equivalent to the following commented one
  //const self = this
  // fs.watch(path, { persistent: true, recursive: true, encoding: 'utf8'}, processFsEvent)
  // function processFsEvent(event, file) {
  //    self.emit(self.FS_EVENT, null, {event: event, file: file })
  //  }
}

MonitoringFs.prototype = new EventEmitter();

module.exports = path => new MonitoringFs(path)  

