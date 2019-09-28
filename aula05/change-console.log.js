console.log(1,2,3)


{
  let oldConsoleLog = console.log;

  console.log = function(...args) {
      args = [new Date().toLocaleString()].concat(args)

      oldConsoleLog.apply(this, args)
  }


}



console.log(1,2,3) 
