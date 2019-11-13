const PORT = 1904

const http = require('http')

const b4Books = require('./b4-books-data')()
const b4Bundles = require('./b4-bundles-data')()
const b4Service = require('./b4-service')(b4Bundles, b4Books)
const booksApi = require('./b4-web-api')(b4Service)

const express = require('express')
const app = express();
app.use(express.json())



app.get('/bundles', booksApi.getAllBundles)
app.post('/bundles', booksApi.createBundle)
app.get('/bundles/:id', booksApi.getBundle)
app.delete('/bundles/:id', booksApi.deleteBundle)
app.put('/bundles/:id', booksApi.updateBundle)
app.put('/bundles/:idBundle/books/:idBook', booksApi.addBookToBundle)


app.listen(PORT)


