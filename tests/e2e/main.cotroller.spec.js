describe('main controller', function() {
  it('should dispay a welcom message', function() {
    browser.get('index.html');
    expect(element(by.id('welcome-message')).getText()).toEqual('Welcome to TODO application');
  });

  it('todo list collapse or hide one at a time', function() {
  	var todoList = element.all(by.tagName('h2'));
  	todoList.get('0').click();
  	browser.sleep(1000);
  	todoList.get('1').click();
  	browser.sleep(1000);
  	todoList.get('0').click()
  	browser.sleep(1000);
  });

  it('todo status should change', function() {
    expect(todoActions.getText()).toMatch('un started');    

    var todoActions = element.all(by.tagName('button'));
    todoActions.get(1).click();
    browser.sleep(1000);
    expect(todoActions.getText()).toMatch('in progress');

    todoActions.get(1).click();
    browser.sleep(1000);
    expect(todoActions.getText()).toMatch('completed');
  });

});