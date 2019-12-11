
const views = {
  homeView : homeView,
  bundlesView : bundlesView,
  bundleDetailsView: bundleDetailsView,
  deleteBundleView: deleteBundleView,
}


function homeView(data, createDom) {
  createDom(homeTemplate(data))
}

function bundlesView(bundles, createDom) {
  createDom(bundlesTableTemplate(bundles))
  registerInTableActions()
}


function bundleDetailsView(bundle, createDom) {
  createDom(bundleTemplate(bundle)) 
  
}


function registerInTableActions(params) {
  document.querySelectorAll("button.delete").forEach(b => b.addEventListener("click", deleteBundle))


  function deleteBundle() {
    window.location.hash = `deleteBundle/${this.id}`;
  }
}


function deleteBundleView(params) {
  console.log(`deleting bundle ${this.id}`)
  window.location.hash = `bundles`;

}
