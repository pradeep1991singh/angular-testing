angular
	.module('todo-app')
	.service('TodoService', function($q, $resource) {
		var Todo = $resource('/api/todo/:id/:controller', {
			id: '@id',
			controller: '@controller'
		}, {
			list: {
				method: 'GET',
				params: {}
			},
			getTodoStatus: {
				method: 'GET',
				params: {controller: 'status'}
			}
		});

		this.list = function() {
			var defer = $q.defer();
			var todo = new Todo();
			todo.$list(function(response) {
				defer.resolve(response.status);
			});
			return defer.promise;
		};

		this.getTodoStatus = function() {
			var defer = $q.defer();
			var todo = new Todo();
			TodoService.getTodoStatus({id: 1}, function(todo) {
				defer.resolve(todo.status);
			});
			return defer.promise;
		};
	});