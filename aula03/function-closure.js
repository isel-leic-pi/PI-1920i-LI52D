

let f = function(p) {

  let f1 = function(p1) {
    console.log(p)
    p = p1;
   }

  return f1;
}

let f2 = f(2);
f2();
f2(10);
f2();


let f3 = f(3);
f3();