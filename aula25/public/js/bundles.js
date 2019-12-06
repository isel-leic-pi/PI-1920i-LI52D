
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


function processHashChange() {
  const DEFAULT_STATE = "bundles"

  const hash = window.location.hash.substring(1)
  let [state, ...args] = hash.split('/')

  switch(state) {
    case 'bundles': showBundles(args); break;
    case 'bundleDetails': showBundle.apply(null, args); break;
    //default: window.location.hash = DEFAULT_STATE;
  }

}

function showBundles() {
  getBundles().then(showAllBundlesView)
}

function showBundle(id) {
  getBundle(id).then(showBundleView)
}

function showAllBundlesView(bundles) {   
  results.innerHTML = bundlesTableTemplate( bundles )
}

function showBundleView(bundle) {
  results.innerHTML = bundleTemplate( bundle )
}
