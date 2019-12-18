const routes = require('./routes')


window.addEventListener("load", function() {
  window.addEventListener('hashchange', processHashChange)
  let results = document.querySelector("#results")

  let routeData = null;

  const routeManager = {
    setMainContent: function (html) {
      results.innerHTML = html
    },

    changeRoute: function(hash, data) {
      routeData = routeData
      window.location.hash = hash
    }
  }

  function addRouteData(args) {
    args.push(routeData)
    resetRouteData()
  }

  
  function resetRouteData(args) {
    routeData = null;
  }

  processHashChange()

  function  processHashChange() {
    const DEFAULT_STATE = "home"

    const hash = window.location.hash.substring(1)
    let [state, ...args] = hash.split('/')

    let route = routes[state];

    if(!route) {
      window.location.hash = DEFAULT_STATE;
      return;
    }
    
    addRouteData(args)
    route
      .controller.apply(null, args)
      .then(data => route.view(data, routeManager))
  }


  
});





