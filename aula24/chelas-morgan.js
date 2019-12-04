
module.exports = function () {

    return function (req, rsp, next) { 
      const start = Date.now()
      rsp.on('finish', showRequestDuration)
    
      next()
    
      function showRequestDuration(params) {
        const reqDuration = Date.now() - start
        console.log(`Chelas-Morgan dixit: Request took ${reqDuration} ms`)  
      }
    }
}

