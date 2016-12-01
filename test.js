var assert = require('assert');
describe('หน้าหลัก', function() {
    it('ทดสอบเมนู', function () {
        browser.url('http://kmutt-admission.orisma.alpha');
        // browser.moveToObject("#header-inner-bottom-menu &gt; li:nth-child(1)");
        // browser.waitForVisible("#header-inner-bottom-menu &gt; li:nth-child(1) &gt; ul")
        var title = browser.getTitle();
        assert.equal(title, 'สำนักงานคัดเลือกและสรรหานักศึกษา');
    });
});