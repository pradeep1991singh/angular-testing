describe('Todo Service', function() {
	var $httpBackend;
	var $rootScope;
	var TodoService;
	var todoListHandler; 

	beforeEach(module('todo-app'));
	beforeEach(inject(function(_$httpBackend_, _$rootScope_, _TodoService_) {
		$httpBackend = _$httpBackend_;
		$rootScope = _$rootScope_;
		TodoService = _TodoService_;

		todoListHandler = $httpBackend
							.when('GET', 'api/todo/list')
							.respond(200, {
								id: 1,
								status: 'in progress'
							});
	}));
	
	describe('todo list', function() {
		it('get todo list', function(done) {
			$httpBackend.expectGET('api/todo/list');
			TodoService.list().then(function(status) {
				expect(status).toBe('in progress');
				done();
			});
			$httpBackend.flush();
			$rootScope.$apply();
		})
	});
});