var assert = require('assert');
describe('Register', function() {
    it('Create new User', function () {
        browser.url('/register');
        var d = Date.now();
        browser.setValue('#email', 'user-'+d+'@orisma.com');
        browser.setValue('#name', 'user-'+d);
        browser.setValue('#password', 'test');
        browser.waitForVisible('.head-bar button', 2000);
    });


});