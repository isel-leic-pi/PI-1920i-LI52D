

module.exports = function(b4Bundles, b4Books) {
  if(!b4Bundles) {
    throw "Invalid b4Bundles"
  }
  if(!b4Books) {
    throw "Invalid b4Books"
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
    b4Bundles.getAllBundles(cb)
  }
  
  function getBundle(id, cb) {
    b4Bundles.getBundle(id, cb)
  }
  
  function createBundle(name, descr, cb)  {
    if(!name) {
      cb("bundle name must be defined")
    }
    
    b4Bundles.createBundle({name, descr}, cb)
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



