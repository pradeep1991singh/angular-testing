# angular-testing
angular unit and end-to-end testing with jasmine

## Installation
```sh
$ npm install

$ bower install
```

## Tests
For running unit tests `jasmine`, `karma`, `karma-jasmine` needed.
For running end-to-end tests `protractor`, `webdriver` needed.

You can install them globally or locally

> unit tests

### Install jasmine, karma, chrome-launcher (locally)
```sh
$ npm install jasmine karma karma-jasmine karma-chrome-launcher --save-dev
```

> end-to-end tests

### Install protractor and webdriver (locally)
```sh
$ npm install protractor webdriver-manager --save-dev
```

### Run server (locally)
```sh
$ node node_modules/webdriver-manager/bin/webdriver-manager update

$ node node_modules/webdriver-manager/bin/webdriver-manager start
```

### Run angular dev server (optionally)
```sh
$ npm install angular-dev-server --save-dev

$ node node_modules/angular-dev-server/index.js
```

### Install protractor (globally)
```sh
$ npm install -g protractor

$ webdriver-manager update

$ webdriver-manager start
```

## Fake server
```sh
$ npm install express --save
```

## Run sample app
```sh
$ gulp

$ gulp serve
```
