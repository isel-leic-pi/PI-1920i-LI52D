const PORT = 1904

const http = require('http')

const b4Books = require('./b4-books')
const b4Bundles = require('./b4-bundles')
const b4Service = require('./b4-service')(b4Bundles, b4Books)
const booksApiInit = require('./b4-web-api')(b4Service)

const router = require('./router');


router.get('/bundles', booksApi.getAllBundles)
router.post('/bundles', booksApi.createBundle)
router.get('/bundles/:id', booksApi.getBundle)
router.delete('/bundles/:id', booksApi.deleteBundle)
router.put('/bundles/:id', booksApi.updateBundle)
router.put('/bundles/:idBundle/books/:idBook', booksApi.addBookToBundle)



server = http.createServer(router)

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

