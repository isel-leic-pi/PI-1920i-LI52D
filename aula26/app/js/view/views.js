const templates = require('./templates')


module.exports = {
  homeView : homeView,
  bundlesView : bundlesView,
  bundleDetailsView: bundleDetailsView,
  deleteBundleView: deleteBundleView,
}


function homeView(data, routeManager) {
  routeManager.setMainContent(templates.homeTemplate(data))
}

function bundlesView(bundles, routeManager) {
  routeManager.setMainContent(templates.bundlesTableTemplate(bundles))
  
  document.querySelectorAll("button.delete").forEach(b => b.addEventListener("click", deleteBundle))

  function deleteBundle() {
    routeManager.changeRoute(`deleteBundle/${this.id}`)
  }

}


function bundleDetailsView(bundle, routeManager) {
  routeManager.setMainContent(templates.bundleTemplate(bundle)) 
}



function deleteBundleView(params) {
  console.log(`deleting bundle ${this.id}`)
  routeManager.changeRoute(`bundles`)
}
