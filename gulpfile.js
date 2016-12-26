var gulp = require('gulp');
var inject = require('gulp-inject');
var webserver = require('gulp-webserver');
var karma = require('karma').Server;
var protractor = require("gulp-protractor").protractor;
var naturalSort = require("gulp-natural-sort");

var appBaseUrl = 'http://localhost:8000/app/index.html';

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('index', function () {
  var target = gulp.src('./app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp
    .src(['./bower_components/**/*.min.js', 
          './app/**/*.js', 
          './app/**/*.css'
          ], {
            read: false
          })
    .pipe(naturalSort());
 
  return target
    .pipe(inject(sources))
    .pipe(gulp.dest('./app'));
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: appBaseUrl
    }));
});

gulp.task('karma:unit', function(done) {
  return karma.start({
      configFile: __dirname + '/tests/karma.unit.config.js',
      singleRun: true
    }, done);
});

gulp.task('protractor:e2e', function(done) {
  gulp.src(["./app/tests/*.js"])
    .pipe(protractor({
        configFile: "tests/protractor.e2e.config.js",
        args: ['--baseUrl', appBaseUrl]
    }))
    .on('error', function(e) { throw e })
});