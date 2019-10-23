const request = require('request')

// const options = { 
//   method: 'GET',
//   url: 'https://postman-echo.com/get',
//   qs: { foo1: 'bar1', foo2: 'bar2' },
//   headers: 
//    { 'cache-control': 'no-cache',
//      Host: 'postman-echo.com',
//      } 
//   };


  // or, for simple GET requests
  const options = 'https://postman-echo.com/get?foo1=bar1&foo2=bar2'


request(options, processResponse)


function processResponse(err, response, body) {
  if(err) {
    return console.log(err)
  }

  console.log(response.statusCode)
  console.log(response.headers)
  console.log(`Response received: ${body.toString()}`)
}

