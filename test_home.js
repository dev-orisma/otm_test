var assert = require('assert');
describe('Main', function() {
    it('Login', function () {
        browser.url('http://10.187.25.110:8888/');
        var title = browser.getTitle();
        assert.equal(title, 'Orisma Task Manager');
        browser.waitForVisible('#email', 2000);
        browser.setValue('#email', 'nuttanun@orisma.com');
        browser.setValue('#password', 'P@ssw0rd');
       	browser.submitForm('form');

    });

    it('Project', function () {
        browser.click('#logo-container');
        browser.waitForVisible('.head-bar button', 2000);
        browser.click('.head-bar button');
    });

    it('Add Project', function () {
        browser.waitForVisible('#addProject', 2000);
        var d = Date.now();
        browser.setValue('#project_add_name', 'P-' + d);
        browser.setValue('#detail_add_project', 'P-' + d + 'detail');
        browser.click('.modal-footer button');
    });

});