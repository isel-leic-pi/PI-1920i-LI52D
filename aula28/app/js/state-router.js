const routes = require('./routes')


window.addEventListener("load", function() {
  window.addEventListener('hashchange', processHashChange)
  let b4MainNode = document.querySelector("#b4-main")
  let b4AlertsNode = document.querySelector("#b4-alerts")

  
  let routeData = null;

  const routeManager = {
    setMainContent: function (html) {
      b4MainNode.innerHTML = html
    },
    showAlert: function (html) {
      b4AlertsNode.innerHTML = html
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





