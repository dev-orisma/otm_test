var assert = require('assert');
describe('หน้าหลัก', function() {
    it('ทดสอบ', function () {
        browser.url('http://otm.orisma.alpha/');
        var title = browser.getTitle();
        assert.equal(title, 'OTM');
    });
});