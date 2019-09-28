function mul(a, b) {
  return a*b
}

let res = mul(2,3)
let res1 = mul(3,4)
console.log(res)


console.log("------------")


function mulAsyncWithSyncImplementation(a, b, cb) {
  
  cb(a*b);
  
}

console.log(1)
mulAsyncWithSyncImplementation(2,3, res => console.log(res))
console.log(2)
mulAsyncWithSyncImplementation(3,4, res => console.log(res))
console.log(3)

console.log("------------")

function mulAsyncWithAsyncImplementation(a, b, cb) {
  setTimeout(() => {
    cb(a*b);  
  }, 2000);
}

console.log(1)
mulAsyncWithAsyncImplementation(2,3, res => console.log(res))
console.log(2)
mulAsyncWithAsyncImplementation(3,4, res => console.log(res))
console.log(3)


