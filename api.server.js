var express = require('express');
var app = express();

app.all('/*', function(req, res, next) {
	console.log('request made for: %s', req.originalUrl);
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS,DELETE');
	next();
});

app.get('/todo/list', function list(request, response) {
	response.status(200);
	request.send({
		id: 1,
		title: 'Add page title',
		body: 'Add page title to main page'
	});
});

var todoStatusCode = 1;
app.get('/todo/:id/status', function getTodoStatus(request, response) {
  var todoStatusCode;
  switch (todoStatusCode) {
    case 1:
      todoStatus = 'not started';
      break;
    case 2:
      todoStatus = 'in progress';
      break;
    default:
      todoStatus = 'completed';
  }
  todoStatusCode += 1;

  response.status(200);
  response.send({
    status: todoStatus
  });
});

// start app server
var server = app.listen(9999, function() {
	var address = server.address();
	console.log('api server started: http://%s:%s', address.address, address.port);
});