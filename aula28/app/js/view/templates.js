const Handlebars = require('../../node_modules/handlebars/dist/handlebars')

module.exports = {
  homeTemplate: 
    Handlebars.compile(require('./templates/home.hbs').default),
  bundlesTableTemplate:
    Handlebars.compile(require('./templates/bundles.hbs').default),
  bundleTemplate:
    Handlebars.compile(require('./templates/bundle.hbs').default),
  alertTemplate:
    Handlebars.compile(require('./templates/alert.hbs').default)
}
