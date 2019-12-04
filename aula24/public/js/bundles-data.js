function BundlesApiUris() {
  const baseUri = "http://localhost:1904/"

  this.getAllBundlesUri =  () => `${baseUri}bundles`
  this.getBundleUri =  (id) => `${baseUri}bundles/${id}`
}

const apiUris = new BundlesApiUris();


function getBundles() {
  return fetch(apiUris.getAllBundlesUri()).then(response => response.json())
}

function getBundle(id) {
  return fetch(apiUris.getBundleUri(id)).then(response => response.json())
}