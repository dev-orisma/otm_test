var assert = require('assert');
describe('Project', function() {

    it('Project', function () {
        browser.url('/');
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

    it('edit Project', function () {  });

    it('delete Project', function () {  });


});