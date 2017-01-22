module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    files: [
      '../bower_components/angular/angular.js',
      '../bower_components/angular-route/angular-route.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../bower_components/angular-resource/angular-resource.js',
      '../app/scripts/app.js',
      '../app/scripts/services/todo.service.js',
      '../app/scripts/controllers/main.controller.js',
      'unit/*.js'
    ]
  });
};