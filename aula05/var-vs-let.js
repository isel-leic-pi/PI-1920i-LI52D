

function f() {
  let a = [];
  
  for(let i = 0; i < 3; ++i) {
    a[i] = function () {
      console.log(i)
    }
  }
  return a;
}

var a = f()

for(var i = 0; i < 3; ++i) {
 a[i]();
}