const data = require('../model/bundles-data')

module.exports = {
  home: async function() {
    return  {
      bigodes: "https://handlebarsjs.com/images/handlebars_logo.png"
    }
  },
  getBundles: async function () {
    return data.getBundles()
  },
  
  getBundle: async function (id) {
    return data.getBundle(id)
  },
  
  deleteBundle: async function(id) {
    return data.deleteBundle(id)
  }, 
  createBundle: async function(bundle) {
    return data.deleteBundle(id)
  }
}

