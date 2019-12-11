const routes = {
  home: {
    controller: controller.home,
    view: views.homeView
  },
  bundles: {
    controller: controller.getBundles,
    view: views.bundlesView
  },
  bundleDetails: {
    controller: controller.getBundle,
    view: views.bundleDetailsView,
  },
  deleteBundle: {
    controller: controller.deleteBundle,
    view: views.deleteBundleView,
  },
}

