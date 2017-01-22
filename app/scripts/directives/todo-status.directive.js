angular
	.module('todo-app')
	.directive('orderStatus', function(TodoService) {
		return {
			restrict: 'E',
			scope: {},
			template: '<ul></ul>',
			link: function(scope, element, attr) {
				var checkTodoStatus = function() {
					TodoService.getTodoStatus().then(function(status) {
						element.find('ul').append('<li>' + status + '</li>');
					});
				};
				checkTodoStatus();
				scope.$on('check-todo-status', function() {
					checkTodoStatus();
				});
			}
		}
	});