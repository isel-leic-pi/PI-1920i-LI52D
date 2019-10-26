module.exports = {
  getAllBundles: getAllBundles,
  getBundle: getBundle,
  createBundle: createBundle,
  deleteBundle: deleteBundle,
  updateBundle: updateBundle,
  addBookToBundle: addBookToBundle
}



function getAllBundles(cb) {
  cb(null, "all bundles")
}

function getBundle(id, cb) {
  cb(null, `get bundle with id ${id}`)
}

function createBundle(name, descr, cb) {
  cb(null, `create bundle with name ${name} and description ${descr}`)
}

function deleteBundle(id, cb) {
  cb(null, `delete bundle with id ${id}`)
}

function updateBundle(name, descr, cb) {
  cb(null, `update bundle with name '${name}' and description '${descr}'`)
}


function deleteBundle(id, cb) {
  cb(null, `delete bundle with id ${id}`)
}

function addBookToBundle(bundleId, bookId, cb) {
  cb(null, `adding book with id ${bookId} to bundle with id ${bundleId}`)
}

