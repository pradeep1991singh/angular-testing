angular
	.module('todo-app')
	.controller('MainController', function($scope, TodoService, $interval) {
		$scope.welcomeMessage = 'Welcome to TODO application';

		$scope.todoList = TodoService
							.list()
							.then(function(response) {
								console.log(response)
							}, 
							function(error) {
								console.log(error);
							});

		var checkTodoStatus = $interval(function() {
			$scope.$broadcast('check-todo-status');
		}, 1000);

		$scope.$on('destroy', function() {
			$interval.cancel(checkTodoStatus);
		});
	});