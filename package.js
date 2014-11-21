Package.describe({
  name: "dalgard:mediator",
  version: "0.9.8",
  summary: "Mediator.js repackaged for Meteor",
  git: "https://github.com/dalgard/meteor-mediator"
});

Package.onUse(function (api) {
  api.addFiles("mediator.js");
  api.export("Mediator");
});
