const PORT = 1904

const http = require('http')
const express = require('express')

const b4Books = require('./b4-books-data')()
const b4Bundles = require('./b4-bundles-data')()
const b4Service = require('./b4-service')(b4Bundles, b4Books)

const booksRouter = express.Router()
const booksApi = require('./b4-web-api')(booksRouter, b4Service)
const morgan = require('morgan')
const chelasMorgan = require('./chelas-morgan')

const app = express();
app.use(express.json())

app.use(morgan('tiny'))
app.use(chelasMorgan())
app.use('/', express.static(__dirname + '/public'))


app.use('/bundles', booksRouter)



app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

// server = http.createServer(router)
// server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))


