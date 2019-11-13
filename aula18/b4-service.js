
const erros = require('./errors')

module.exports = function(b4Bundles, b4Books) {
  if(b4Bundles) {
    throw "Invalid b4Data"
  }

  return {
    getAllBundles: getAllBundles,
    getBundle: getBundle,
    createBundle: createBundle,
    deleteBundle: deleteBundle,
    updateBundle: updateBundle,
    addBookToBundle: addBookToBundle,
  }  



  function getAllBundles(cb) {
    cb(null, "all bundles")
  }
  
  function getBundle(id, cb) {
    b4Bundles.getBundle(id, cc)
  }
  
  function createBundle(name, descr, cb)  {
    if(!name) {
      cb(errors(errors.INVALID_ARGUMENT, "bundle name must be defined"))
    }
    
    b4Bundles.createBundle({ name, descr})
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
  
  
}



