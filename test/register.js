var Auth = require('../pages/auth');
describe('Register', function() {
	it('Create new User', function () {
		Auth.logout();
		browser.url('/register');
		var d = Date.now();
		browser.waitForVisible('#email', 2000);
		browser.setValue('#email', 'demo-'+d+'@orisma.com');
		browser.setValue('#name', 'demo-'+d);
		browser.setValue('#password', 'test');
		browser.submitForm('form');
		browser.waitForVisible('.head-bar button', 2000);
	});


});