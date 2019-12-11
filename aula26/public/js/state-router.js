
window.addEventListener("load", pageLoad)


window.addEventListener('hashchange', processHashChange)


function pageLoad() {
  let results = document.querySelector("#results")

  processHashChange()
}


function  processHashChange() {
  const DEFAULT_STATE = "home"

  const hash = window.location.hash.substring(1)
  let [state, ...args] = hash.split('/')

  let route = routes[state];

  if(!route) {
    window.location.hash = DEFAULT_STATE;
    return;
  }

  
  route
    .controller.apply(null, args)
    .then(data => route.view(data, createDom))
}


function createDom(html) {
  results.innerHTML = html;
}

