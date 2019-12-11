const templates = require('./templates')


module.exports = {
  homeView : homeView,
  bundlesView : bundlesView,
  bundleDetailsView: bundleDetailsView,
  deleteBundleView: deleteBundleView,
}


function homeView(data, createDom) {
  createDom(templates.homeTemplate(data))
}

function bundlesView(bundles, createDom) {
  createDom(templates.bundlesTableTemplate(bundles))
  registerInTableActions()
}


function bundleDetailsView(bundle, createDom) {
  createDom(templates.bundleTemplate(bundle)) 
  
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
