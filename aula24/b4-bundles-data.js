


module.exports = function() {

  let bundles = new Array(20)
  
  for(let i = 0; i < bundles.length; ++i) {
    bundles[i] = {    
      id: i, 
      name: `bundle${i}`,
      description: `Bundle${i} description`
    }
  }

  console.log(bundles)

  return {
    getAllBundles: getAllBundles,
    getBundle: getBundle,
    createBundle: createBundle,
    deleteBundle: deleteBundle,
    updateBundle: updateBundle,
    addBookToBundle: addBookToBundle,
  }  

  function getAllBundles(cb) {
    cb(null, bundles)
  }
  
  function getBundle(id, cb) {
    cb(null, bundles.find(b => b.id == id))
  }
  
  function createBundle(bundle, cb)  {
    cb(null, `create bundle with name '${bundle.name}' and description '${bundle.descr}'`)
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



