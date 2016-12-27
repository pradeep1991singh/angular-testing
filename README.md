# angular-testing
angular unit and end-to-end testing with jasmine

## Installation
> `npm install`
> `bower install`

## Tests
For running unit tests `jasmine`, `karma`, `karma-jasmine` needed.
For running end-to-end tests `protractor`, `webdriver` needed.

You can install them globally or locally
> unit tests

### Install jasmine, karma, chrome-launcher (locally)
> `npm install jasmine karma karma-jasmine karma-chrome-launcher --save-dev`

> end-to-end tests
### Install protractor and webdriver (locally)
> `npm install protractor webdriver-manager --save-dev`

### Run server (locally)
> `node node_modules/webdriver-manager/bin/webdriver-manager update`
> `node node_modules/webdriver-manager/bin/webdriver-manager start`

### Run angular dev server (optionally)
> `npm install angular-dev-server --save-dev`
> `node node_modules/angular-dev-server/index.js`

### Install protractor (globally)
> `npm install -g protractor`
> `webdriver-manager update`
> `webdriver-manager start`

## Fake server
> `npm install express --save`

## Run sample app
> `gulp` or `gulp serve`