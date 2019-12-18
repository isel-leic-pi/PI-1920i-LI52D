

function BundlesApiUris() {
  const baseUri = "http://localhost:1904/"

  this.getAllBundlesUri =  () => `${baseUri}bundles`
  this.getBundleUri =  (id) => `${baseUri}bundles/${id}`
}

const apiUris = new BundlesApiUris();

module.exports = {
  getBundles: function () {
    return fetch(apiUris.getAllBundlesUri()).then(response => response.json())
  },
  
  getBundle: function (id) {
    return fetch(apiUris.getBundleUri(id)).then(response => response.json())
  },
  
  deleteBundle: function(id) {
    return fetch(apiUris.getBundleUri(id), { method: "DELETE"}).then(response => response.json())
    
    
  }
}

