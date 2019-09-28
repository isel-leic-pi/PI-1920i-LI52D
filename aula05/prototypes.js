function Point(x, y) {
  this.x = x
  this.y = y

  // this.add = function slb(p) {
  //   return new Point(this.x + p.x, this.y + p.y)
  // }

  console.log(this);
}


Point.prototype.add = function(p) {
  return new Point(this.x+p.x, this.y+p.y)
}

let p1 = new Point(2,3)
let p2 = new Point(4,5)

console.log(p1.constructor)
console.log(p2.constructor)


let p3 = p1.add(p2)

console.log(`p3 = ${p3}`)

//---------------------------------

let s = "Glorioso";

console.log(s.enclose)


String.prototype.enclose = function () {
  return `SLB ${this} SLB`
}

let s1 = "SLB"
console.log(s1.enclose())
console.log(s.enclose())


// // Using a global variable to store the old implementation
// let oldConcat = String.prototype.concat;
// String.prototype.concat = function (...args) {
//   const PREFIX = " S.L.B "
//   args = args.map(s => PREFIX + s)
//   return oldConcat.apply(this, args)
// }

// // Storing the old implementation in String prototype
// String.prototype.oldConcat = String.prototype.concat;
// String.prototype.concat = function (...args) {
//   const PREFIX = " S.L.B "
//   args = args.map(s => PREFIX + s)
//   return this.oldConcat(args)
// }


// ;
// // Using an anonymous function to create a closure capturing the old implementation reference
// (function () {
//   // Using a global variable to store the old implementation
//   let oldConcat = String.prototype.concat;
//   String.prototype.concat = function (...args) {
//     const PREFIX = " S.L.B "
//     args = args.map(s => PREFIX + s)
//     return oldConcat.apply(this, args)
//   }
// })()



// Creating a new scope to create a new closure
{
  // Using a global variable to store the old implementation
  let oldConcat = String.prototype.concat;
  String.prototype.concat = function (...args) {
    const PREFIX = " S.L.B "
    args = args.map(s => PREFIX + s)
    return oldConcat.apply(this, args)
  }
}


console.log(s.concat(s1, s1, s))

// The following lone throws an error indicating 'oldConcat' is not defined.
// Thats Good, because is what we wanted!!!
//console.log(oldConcat)



let date = new Date();
console.log(date.toLocaleString())


