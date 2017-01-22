describe('todo-list directive', function() {
	var scope;
	var	element;
	var	html = '<todo-list>'
		+ '<h2>Todo 1</h2>'
		+ '<div>Description 1</div>'
		+ '<h2>Todo 2</h2>'
		+ '<div>Description 2</div>'
		+ '</todo-list>';

	var getTodoList = function() {
		return element.children().find('div');
	};

	var isHidden = function(todo) {
		return angular.element(todo).css('display') === 'none';
	};

	beforeEach(module('todo-app'));
	beforeEach(inject(function($compile, $rootScope) {
		var linkingFn = $compile(html);
		scope = $rootScope;
		element = linkingFn(scope);
	}));

	it('starts with all todo closed', function() {
		var todoList = getTodoList();
		for(var i = 0; i < todoList.length; i +=1) {
			expect(isHidden(todoList[i])).toBe(true);
		}
	});

	xit('opens one todo at a time', function() {
		var todoList = getTodoList();
		expect(isHidden(todoList[0])).toBe(true);
		element.find('h2')[0].click();
		expect(isHidden(todoList[0])).toBe(false);
		expect(isHidden(todoList[1])).toBe(true);
		element.find('h2')[1].click();
		expect(isHidden(todoList[0])).toBe(true);
		expect(isHidden(todoList[1])).toBe(false);		
	});
});