// GET /books/123


const http = require('http')
const booksApi = require('/b4-web-api')

const router = require('./router');


router.get('/books', booksApi.getAllBooks)
router.post('/books', booksApi.createBook)
router.get('/books/:id', booksApi.getBook)
router.delete('/books/:id', booksApi.deleteBook)
router.put('/books/:id', booksApi.updateBook)


server = http.createServer(router)

