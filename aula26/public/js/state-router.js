
window.addEventListener("load", pageLoad)


window.addEventListener('hashchange', processHashChange)


function pageLoad() {
  document.querySelector("#btnBundles").addEventListener("click", processButtonClick)
  let results = document.querySelector("#results")

  function processButtonClick(params) {
      window.location.hash = "bundles"
  }

  processHashChange()
}



function  processHashChange() {
  const DEFAULT_STATE = "bundles"

  const hash = window.location.hash.substring(1)
  let [state, ...args] = hash.split('/')

  let route = routes[state];
  route
    .fetchData.apply(null, args)
    .then(route.view)
    .then(createDom)
    .then(route.script)

  // Equivalent code with await
  // let data = await route
  //   .fetchData.apply(null, args)
  // const html = route.view(data)
  // createDom(html)
  // route.script()
}


function createDom(html) {
  results.innerHTML = html;
}

