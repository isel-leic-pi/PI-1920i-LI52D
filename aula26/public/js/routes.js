const routes = {
  bundles: {
    fetchData: data.getBundles,
    view: bundlesTableTemplate,
    script: registerInTableActions
  },
  bundleDetails: {
    fetchData: data.getBundle,
    view: bundleTemplate,
    script: nop
  }
}


function registerInTableActions(params) {
  document.querySelectorAll("button.delete").forEach(b => b.addEventListener("click", deleteBundle))


  function deleteBundle() {
    data.deleteBundle(this.id).then(refreshBundlesTable)

    function refreshBundlesTable() {
      processHashChange()
    }
  }
}

function nop() { }
