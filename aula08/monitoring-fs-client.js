const PORT = 1904;

const net = require('net')

const socket = new net.Socket()
socket.connect(PORT)

socket.on('connect', processConnect)
socket.on('data', processData)


function processConnect() {
  console.log(`connected to server`)
}


function processData(data) {
  console.log(`Server sent ${data} `)
}


