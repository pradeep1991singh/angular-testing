describe('Main controller', function() {
	var scope;
	var ctrl;
	var mockTodoService;

	beforeEach(module('todo-app'));
	beforeEach(function() {
		mockTodoService = jasmine.createSpyObj('TodoService', ['list']);
		inject(function($q) {
			mockTodoService.list.and.returnValue($q.when({}));
		});
	});
	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller('MainController', {
			$scope: scope,
			TodoService: mockTodoService
		});
	}));

	describe('list all todo', function() {
		it('should return promise', function() {
			expect(mockTodoService.list).toHaveBeenCalled();
		})
	})
});