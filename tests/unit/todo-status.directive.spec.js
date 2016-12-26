describe('todo-status directive', function() {
	beforEach(module('todo-app'));

	var TodoService;
	beforEach(inject(function($q, _TodoService_) {
		TodoService = _TodoService_;
		var todoStatusCode = 0;
		var fakeGetTodoStatus = function() {
			todoStatusCode += 1;
			switch(todoStatusCode) {
				case 1:
					return $q.when('not started');
				case 2:
					return $q.when('in progress');
				case 3:
					return $q.when('completed');
			}
		};

		spyOn(TodoService, 'getTodoStatus').and.callFake(fakeOrderStatus);
	}));

	var scope;
	var element;
	var html = '<todo-status></todo-status>';
	beforEach(inject(function() {
		scope: $rootScope.$new();
		element: $compile(html)(scope);
		scope.$digest();
	}));

	it('dispay todo status whenever status changes', function() {
		var statusElement = element.find('ul').find('li');
		expect(statusElement.length).toBe(1);
		expect(statusElement.text()).toBe('not statred');

		scope.$broadcast('check-todo-status');
		scope.$digest();

		var statusElement = element.find('ul').find('li');
		expect(statusElement.length).toBe(2);
		expect(statusElement.text()).toBe('not statred' + 'in progress');

		scope.$broadcast('check-todo-status');
		scope.$digest();		

		var statusElement = element.find('ul').find('li');
		expect(statusElement.length).toBe(3);
		expect(statusElement.text()).toBe('not statred' + 'in progress' + 'completed');

	});
});