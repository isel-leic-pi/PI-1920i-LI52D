
const PORT = 1904;

const net = require('net');

let path = process.argv[2] || '.'
const mf = require('./monitoring-fs')(path)


const serverSocket = net.createServer();
serverSocket.on('connection', processConnection)
serverSocket.on('listening', processListening)
serverSocket.on('error', processError)
serverSocket.listen(PORT)
mf.on(mf.FS_EVENT, processFsEvent)

// ------------------------------------------------

let clients = [];

Array.prototype.remove = function(elem) {
    let idx = this.findIndex(e => e === elem)
    if(idx != -1) 
        this.splice(idx, 1)
}



function processConnection(clientSocket) {
    clients.push(clientSocket)
    clientSocket.on('close', processCloseConnection)
    console.log(`Client connected. Current connected cliente are ${clients.length}`)

    function processCloseConnection() {
        clients.remove(clientSocket)
        console.log(`Client disconnected. Removing it from clients array. Remaining clients ${clients.length}`)
    }
}



function processListening() {
    console.log(`Listening on port ${PORT}.`)
}

function processFsEvent(err, data) {
    if(err) {
        return console.log(err)
    }
    clients.forEach(c => c.write(JSON.stringify(data)))
    console.log(`Event ${data.event} on file ${data.file}`)
}



function processError(e) {
    console.error(`Error ocurred: ${e}`)
}
