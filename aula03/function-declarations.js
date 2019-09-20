// Unnamed function
let f = function () { console.log("#f")}
console.log(f.name)

// Named function
let f3 = function f1(p) { 

  if(p) f1();
  console.log("#f1") 
}

let f2 = f3;
f3 = null;

f2(1)


let f4 = (a,b,c) => { }

console.log(f4.name)


