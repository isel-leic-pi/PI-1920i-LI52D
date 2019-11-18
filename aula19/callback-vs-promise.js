
function asyncWithCallback(a, b, c, cb) {
  setTimeout(() => {
    cb(null, a + b + c)
  }, 2000);
}

async function asyncWithPromise(a, b, c) {
  let p = new Promise(executor);
  return p;

  function executor(resolve, reject) {
    throw "SLB"
    setTimeout(() => {
      resolve(a + b + c)
    }, 1000);
  }
}

console.log("before asyncWithCallback")
asyncWithCallback(1, 2, 3, processResultNode)
console.log("after asyncWithCallback")


console.log("before asyncWithPromise")
let p = asyncWithPromise(4, 5, 6)

p.then(double).then(processResult).catch(processError)

console.log("after asyncWithPromise");



(async function() {
  console.log("before asyncWithPromise and async/await")
  try {
    let val = await asyncWithPromise(4, 5, 6)
    let doubled = await double(val)
    processResult(doubled)
  } catch (e) {
    processError(e)
  }
  console.log("after asyncWithPromise")
})();


function processResultNode(err, data) {
  err ? processError(err) : processResult(data)
}

async function double(val) {
  if (val >= 10) {
    return Promise.reject("Number too long for me to double it")
  }

  return Promise.resolve(val*2) // return val*2

  // let p = new Promise(executor);
  // return p;

  // function executor(resolve, reject) {
  //   setTimeout(() => {
  //     resolve(val * 2)
  //   }, 0);
  // }

}

function processResult(data) {
  console.log(data)
}

function processError(err) {
  console.log("error:", err)
}
