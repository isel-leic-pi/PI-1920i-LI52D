

module.exports = function (b4Service) {
  return {
    getAllBundles: getAllBundles,
    getBundle: getBundle,
    createBundle: createBundle,
    deleteBundle: deleteBundle,
    updateBundle: updateBundle,
    addBookToBundle: addBookToBundle
  }

  function getAllBundles(req, rsp) {
    log('getAllBundles')
    b4Service.getAllBundles(sendResponse(rsp))

  }

  function getBundle(req, rsp) {
    b4Service.getBundle(req.params.id, sendResponse(rsp))
  }

  function createBundle(req, rsp) {
    b4Service.createBundle(req.body.name, req.body.description, sendResponse(rsp))
  }

  function deleteBundle(req, rsp) {
    b4Service.deleteBundle(req.params.id, sendResponse(rsp))
  }

  function updateBundle(req, rsp) {
    b4Service.updateBundle(req.body.name, req.body.description, sendResponse(rsp))
  }

  function addBookToBundle(req, rsp) {
    b4Service.addBookToBundle(req.params.idBundle, req.params.idBook, sendResponse(rsp))
  }

  function sendResponse(rsp, status = 200) {
    return function (err, data) {
      log(`sendResponse with data ${data}`)
      rsp.statusCode = status;
      rsp.end(JSON.stringify(data))
    }
  }
}

function log(...args) {
  console.log.apply(console, ['web-api - '].concat(args))
}