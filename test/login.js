var assert = require('assert');
describe('Login', function() {
    it('Logout', function () {
        browser.url('/logout');
        browser.getTitle().should.be.equal('Login Page');
    });
    it('Login success', function () {
        browser.waitForVisible('#email', 2000);
        browser.setValue('#email', 'nuttanun@orisma.com');
        browser.setValue('#password', 'P@ssw0rd');
        browser.submitForm('form');
    });

    it('Login fail', function () {
        browser.url('/');

    });

});