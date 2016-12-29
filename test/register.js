var assert = require('assert');
describe('Register', function() {
    it('Create new User', function () {
        browser.url('/register');
        var d = Date.now();
        browser.setValue('#email', 'wdio@orisma.com');
        browser.setValue('#name', 'wdio');
        browser.setValue('#password', 'wdio');

        browser.waitForVisible('.head-bar button', 2000);
        browser.click('.head-bar button');
    });


});