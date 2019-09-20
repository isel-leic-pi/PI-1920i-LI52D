
let a = [0, "SLB", {a: 123}, [], null, , 10];


console.log(a.length)

a.length = 23;

console.log(a.length)

console.log(a[276])
a[276] = 276
console.log(a[276])


a.xpto = "xpto value"

for(let k in a) {
  console.log(`a[${k}]=${a[k]}`)
}

console.log("------------------")


// The following object looks like the previous array, but its not an array!!!
a =  {
  xpto: "xpto value",
  0: 0,
  1: "SLB",
  2: {a: 123},
  3: [],
  4: null,
  6: 10,
  276: 276
}

for(let k in a) {
  console.log(`a[${k}]=${a[k]}`)
}

console.log(a.length)
